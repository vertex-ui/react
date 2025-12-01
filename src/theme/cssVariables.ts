import { tokens } from './tokens';

/**
 * Generates CSS variables from design tokens
 * @returns CSS variable declarations as a string
 */
export function generateCSSVariables(): string {
  const cssVars: string[] = [];

  // Colors
  Object.entries(tokens.colors).forEach(([colorName, shades]) => {
    if (typeof shades === 'object') {
      Object.entries(shades).forEach(([shade, value]) => {
        cssVars.push(`  --vtx-color-${colorName}-${shade}: ${value};`);
      });
    } else {
      cssVars.push(`  --vtx-color-${colorName}: ${shades};`);
    }
  });

  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    cssVars.push(`  --vtx-spacing-${key}: ${value};`);
  });

  // Typography
  Object.entries(tokens.typography.fontFamily).forEach(([key, value]) => {
    cssVars.push(`  --vtx-font-family-${key}: ${value};`);
  });
  Object.entries(tokens.typography.fontSize).forEach(([key, value]) => {
    cssVars.push(`  --vtx-font-size-${key}: ${value};`);
  });
  Object.entries(tokens.typography.fontWeight).forEach(([key, value]) => {
    cssVars.push(`  --vtx-font-weight-${key}: ${value};`);
  });
  Object.entries(tokens.typography.lineHeight).forEach(([key, value]) => {
    cssVars.push(`  --vtx-line-height-${key}: ${value};`);
  });
  Object.entries(tokens.typography.letterSpacing).forEach(([key, value]) => {
    cssVars.push(`  --vtx-letter-spacing-${key}: ${value};`);
  });

  // Text variants
  Object.entries(tokens.typography.textVariants).forEach(([variant, props]) => {
    Object.entries(props).forEach(([prop, value]) => {
      const propName = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
      cssVars.push(`  --vtx-text-${variant}-${propName}: ${value};`);
    });
  });

  // Border radius
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    cssVars.push(`  --vtx-radius-${key}: ${value};`);
  });

  // Shadows
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    cssVars.push(`  --vtx-shadow-${key}: ${value};`);
  });

  // Transitions
  Object.entries(tokens.transitions).forEach(([key, value]) => {
    cssVars.push(`  --vtx-transition-${key}: ${value};`);
  });

  // Z-index
  Object.entries(tokens.zIndex).forEach(([key, value]) => {
    cssVars.push(`  --vtx-z-${key}: ${value};`);
  });

  return cssVars.join('\n');
}

/**
 * Injects CSS variables into the document
 */
export function injectCSSVariables(): void {
  if (typeof document === 'undefined') return;

  const styleId = 'vtx-ui-variables';
  let styleEl = document.getElementById(styleId);

  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = styleId;
    document.head.appendChild(styleEl);
  }

  const cssVariables = generateCSSVariables();
  styleEl.textContent = `:root {\n${cssVariables}\n}`;
}
