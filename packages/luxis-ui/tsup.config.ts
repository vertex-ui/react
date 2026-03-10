import { defineConfig } from 'tsup';
import { copyFile, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

async function copyCSSAssets() {
  await mkdir(resolve('dist/esm/theme'), { recursive: true });
  await mkdir(resolve('dist/cjs/theme'), { recursive: true });
  await copyFile('src/theme/base.css', 'dist/esm/theme/base.css');
  await copyFile('src/theme/base.css', 'dist/cjs/theme/base.css');
  console.log('✔ Copied theme/base.css to dist/esm and dist/cjs');
}

export default defineConfig([
  // ── ESM build ────────────────────────────────────────────────────────────
  {
    entry: { index: 'src/index.ts' },
    format: ['esm'],
    outDir: 'dist/esm',
    outExtension: () => ({ js: '.js' }),
    splitting: true,
    treeshake: true,
    sourcemap: true,
    external: ['react', 'react-dom'],
    async onSuccess() {
      // wipe stale root-level dist artefacts from previous builds
      await rm(resolve('dist/index.js'), { force: true });
      await rm(resolve('dist/index.mjs'), { force: true });
      await rm(resolve('dist/index.css'), { force: true });
      await rm(resolve('dist/index.d.ts'), { force: true });
      await rm(resolve('dist/index.d.mts'), { force: true });
      await rm(resolve('dist/theme'), { recursive: true, force: true });
      await copyCSSAssets();
    },
  },
  // ── CJS build ────────────────────────────────────────────────────────────
  {
    entry: { index: 'src/index.ts' },
    format: ['cjs'],
    outDir: 'dist/cjs',
    outExtension: () => ({ js: '.js' }),
    splitting: false,
    treeshake: true,
    sourcemap: true,
    external: ['react', 'react-dom'],
  },
  // ── Types ─────────────────────────────────────────────────────────────────
  {
    entry: { index: 'src/index.ts' },
    format: ['esm', 'cjs'],
    outDir: 'dist/types',
    dts: { only: true },
    external: ['react', 'react-dom'],
  },
]);
