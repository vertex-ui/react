import fs from 'fs';
import path from 'path';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

/**
 * Preserve "use client" for Next.js App Router
 */
const preserveUseClient = () => ({
  name: 'preserve-use-client',
  renderChunk(code, chunk) {
    const id = chunk.facadeModuleId;
    if (!id) return null;
    if (id.includes('node_modules')) return null;

    // Check original source for 'use client'
    try {
      if (fs.existsSync(id)) {
        const content = fs.readFileSync(id, 'utf8');
        if (/['"]use client['"]/.test(content)) {
          return {
            code: '"use client";\n' + code,
            map: null // Preserve existing sourcemap
          };
        }
      }
    } catch (e) {
      console.warn('Error checking use client for ' + id, e);
    }
    return null;
  }
});

const copyCss = () => ({
  name: 'copy-css',
  writeBundle() {
    // Find the generated CSS file in dist/esm
    const cssFiles = fs.readdirSync('dist/esm').filter(f => f.endsWith('.css'));
    if (cssFiles.length === 0) return;

    // Assume the largest CSS file is the main bundle if multiple exist, 
    // or just take the first one if it's the only one.
    // In this case we saw Alert.css containing the full bundle.
    const srcFile = cssFiles[0];
    const src = path.join('dist/esm', srcFile);
    const dest = 'dist/esm/theme/base.css';

    if (fs.existsSync(src)) {
      const destDir = path.dirname(dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(src, dest);
      console.log(`Copied ${src} to ${dest}`);

      // Copy d.ts for styles if source exists
      const dtsSrc = 'src/styles.d.ts';
      const dtsDest = 'dist/types/styles.d.ts';
      if (fs.existsSync(dtsSrc)) {
        const dtsDir = path.dirname(dtsDest);
        if (!fs.existsSync(dtsDir)) {
          fs.mkdirSync(dtsDir, { recursive: true });
        }
        fs.copyFileSync(dtsSrc, dtsDest);
        console.log(`Copied ${dtsSrc} to ${dtsDest}`);
      }
    }
  }
});

/**
 * Auto-discover entry points (MUI-style)
 */
const getEntries = () => {
  const entries = {};

  const scan = (dir) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scan(fullPath);
      } else {
        // Filter for .ts and .tsx files
        if (!/\.(ts|tsx)$/.test(file)) return;
        // Exclude type definition files
        if (file.endsWith('.d.ts')) return;
        // Exclude tests, stories, and setup files
        if (file.includes('.test.') ||
          file.includes('.spec.') ||
          file.includes('.stories.') ||
          file.includes('.examples.') ||
          file.includes('setupTests') ||
          file.includes('jest.setup')) return;
        // Exclude type-only files that create empty chunks
        if (file === 'types.ts' || file === 'types.tsx') return;

        // Create entry key relative to src
        // e.g. src/components/Button/index.ts -> components/Button/index
        const relativePath = path.relative('src', fullPath);
        const entryKey = relativePath
          .replace(/\.(ts|tsx)$/, '')
          .replace(/\\/g, '/'); // Ensure forward slashes for rollup keys

        // Use the full path from src directory as the input
        entries[entryKey] = fullPath.replace(/\\/g, '/');
      }
    });
  };

  scan('src');
  return entries;
};

export default {
  input: getEntries(),

  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: '[name].js'
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      exports: 'named',
      entryFileNames: '[name].js'
    }
  ],

  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    /^react\/.*/,
    /^react-dom\/.*/,
    /^react-icons\/.*/
  ],

  plugins: [
    peerDepsExternal(),

    postcss({
      extract: true,
      minimize: true,
      modules: false
    }),

    typescript({
      tsconfig: './tsconfig.build.json',
      sourceMap: true
    }),

    preserveUseClient(),

    copyCss()
  ],

  onwarn(warning, warn) {
    if (
      warning.code === 'CIRCULAR_DEPENDENCY' ||
      warning.code === 'THIS_IS_UNDEFINED' ||
      warning.code === 'MODULE_LEVEL_DIRECTIVE' ||
      warning.code === 'SOURCEMAP_BROKEN' ||
      warning.code === 'EMPTY_BUNDLE'
    ) {
      return;
    }
    warn(warning);
  }
};