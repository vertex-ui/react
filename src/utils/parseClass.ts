// parseClass.ts
// Utility to parse Tailwind-like utility classes (e.g., mb-2, p-4, mb-[2px])
// and inject them into a <style> tag at runtime.
// Supports both standard scale values (mb-2) and arbitrary values (mb-[2px])

const STYLE_TAG_ID = "dynamic-styles";

// Ensure we have a single <style> tag in <head>
function getStyleTag(): HTMLStyleElement {
  let styleTag = document.getElementById(STYLE_TAG_ID) as HTMLStyleElement;
  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = STYLE_TAG_ID;
    document.head.appendChild(styleTag);
  }
  return styleTag;
}

// Cache to avoid duplicate injections
const injectedRules = new Set<string>();

// Spacing scale mapping (similar to Tailwind's default scale)
const spacingScale: Record<string, string> = {
  '0': '0',
  '1': '0.25rem', // 4px
  '2': '0.5rem',  // 8px  
  '3': '0.75rem', // 12px
  '4': '1rem',    // 16px
  '5': '1.25rem', // 20px
  '6': '1.5rem',  // 24px
  '8': '2rem',    // 32px
  '10': '2.5rem', // 40px
  '12': '3rem',   // 48px
  '16': '4rem',   // 64px
  '20': '5rem',   // 80px
  '24': '6rem',   // 96px
  '32': '8rem',   // 128px
  '40': '10rem',  // 160px
  '48': '12rem',  // 192px
  '56': '14rem',  // 224px
  '64': '16rem',  // 256px
  'px': '1px',
  '0.5': '0.125rem', // 2px
  '1.5': '0.375rem', // 6px
  '2.5': '0.625rem', // 10px
  '3.5': '0.875rem', // 14px
};

// Property mapping
const propertyMap: Record<string, string> = {
  // Margin
  m: "margin",
  mt: "margin-top", 
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left",
  mx: "margin-left, margin-right", // Will be handled specially
  my: "margin-top, margin-bottom", // Will be handled specially
  // Padding
  p: "padding",
  pt: "padding-top",
  pr: "padding-right", 
  pb: "padding-bottom",
  pl: "padding-left",
  px: "padding-left, padding-right", // Will be handled specially
  py: "padding-top, padding-bottom", // Will be handled specially
  // Width/Height
  w: "width",
  h: "height",
  // Typography
  fs: "font-size",
  lh: "line-height", 
  ls: "letter-spacing",
  // Gap
  gap: "gap",
  // Border radius
  rounded: "border-radius",
};

export function parseClass(className: string): string {
  // First, try to match arbitrary value patterns like mb-[2px]
  let match = className.match(/^([a-z]+)-\[(.+)\]$/);
  if (match) {
    const property = match[1];
    const value = match[2];

    // Generate a safe CSS class name (no brackets)
    const safeClass = `${property}-${value.replace(/[^a-z0-9]/gi, "")}`;

    const cssProp = propertyMap[property];
    if (cssProp) {
      let cssRule: string;
      
      // Handle special cases for x/y axis properties
      if (property === 'mx') {
        cssRule = `.${safeClass} { margin-left: ${value}; margin-right: ${value}; }`;
      } else if (property === 'my') {
        cssRule = `.${safeClass} { margin-top: ${value}; margin-bottom: ${value}; }`;
      } else if (property === 'px') {
        cssRule = `.${safeClass} { padding-left: ${value}; padding-right: ${value}; }`;
      } else if (property === 'py') {
        cssRule = `.${safeClass} { padding-top: ${value}; padding-bottom: ${value}; }`;
      } else {
        cssRule = `.${safeClass} { ${cssProp}: ${value}; }`;
      }

      if (!injectedRules.has(cssRule)) {
        const styleTag = getStyleTag();
        styleTag.appendChild(document.createTextNode(cssRule));
        injectedRules.add(cssRule);
      }

      return safeClass;
    }
  }

  // Then try to match standard Tailwind-like patterns like mb-2, p-4, etc.
  match = className.match(/^([a-z]+)-(.+)$/);
  if (match) {
    const property = match[1];
    const scaleValue = match[2];

    const cssProp = propertyMap[property];
    const mappedValue = spacingScale[scaleValue];
    
    if (cssProp && mappedValue) {
      // Generate a safe CSS class name
      const safeClass = `${property}-${scaleValue.replace(/[^a-z0-9]/gi, "")}`;
      
      let cssRule: string;
      
      // Handle special cases for x/y axis properties
      if (property === 'mx') {
        cssRule = `.${safeClass} { margin-left: ${mappedValue}; margin-right: ${mappedValue}; }`;
      } else if (property === 'my') {
        cssRule = `.${safeClass} { margin-top: ${mappedValue}; margin-bottom: ${mappedValue}; }`;
      } else if (property === 'px') {
        cssRule = `.${safeClass} { padding-left: ${mappedValue}; padding-right: ${mappedValue}; }`;
      } else if (property === 'py') {
        cssRule = `.${safeClass} { padding-top: ${mappedValue}; padding-bottom: ${mappedValue}; }`;
      } else {
        cssRule = `.${safeClass} { ${cssProp}: ${mappedValue}; }`;
      }

      if (!injectedRules.has(cssRule)) {
        const styleTag = getStyleTag();
        styleTag.appendChild(document.createTextNode(cssRule));
        injectedRules.add(cssRule);
      }

      return safeClass;
    }
  }

  // If not a recognized utility class, return unchanged
  return className;
}