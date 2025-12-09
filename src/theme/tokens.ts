/**
 * Design tokens for the VTX UI library
 * These tokens define the core visual language of the design system
 */
export const COLOR_KEYS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/**
 * Normalizes a colors object so that any string value (e.g., primary: "#fff")
 * is expanded to an object with all color keys, while objects are left as-is.
 * Direct object keys (e.g., primary: { 100: "#fff" }) are preserved.
 */
export function normalizeColors(colors: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === "string") {
      // Expand string to all keys
      result[key] = {};
      COLOR_KEYS.forEach(k => {
        result[key][k] = value;
      });
    } else if (typeof value === "object" && value !== null) {
      result[key] = value;
    }
  }
  return result;
}

export const tokens = {
  colors: {
    // Primary palette
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    // Secondary palette
    secondary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    // Neutral palette
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    // Semantic colors
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
    },
    info: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
  },
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem', // 72px
      '8xl': '6rem', // 96px
      '9xl': '8rem', // 128px
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    // Text variant definitions for consistent typography
    textVariants: {
      h1: {
        fontSize: '3.75rem', // 60px
        fontWeight: '700',
        lineHeight: '1.2',
        letterSpacing: '-0.025em',
      },
      h2: {
        fontSize: '3rem', // 48px
        fontWeight: '700',
        lineHeight: '1.25',
        letterSpacing: '-0.025em',
      },
      h3: {
        fontSize: '2.25rem', // 36px
        fontWeight: '600',
        lineHeight: '1.3',
        letterSpacing: '-0.025em',
      },
      h4: {
        fontSize: '1.875rem', // 30px
        fontWeight: '600',
        lineHeight: '1.35',
        letterSpacing: '0',
      },
      h5: {
        fontSize: '1.5rem', // 24px
        fontWeight: '600',
        lineHeight: '1.4',
        letterSpacing: '0',
      },
      h6: {
        fontSize: '1.25rem', // 20px
        fontWeight: '600',
        lineHeight: '1.5',
        letterSpacing: '0',
      },
      body1: {
        fontSize: '1rem', // 16px
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0',
      },
      body2: {
        fontSize: '0.875rem', // 14px
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0',
      },
      subtitle1: {
        fontSize: '1.125rem', // 18px
        fontWeight: '500',
        lineHeight: '1.5',
        letterSpacing: '0',
      },
      subtitle2: {
        fontSize: '1rem', // 16px
        fontWeight: '500',
        lineHeight: '1.5',
        letterSpacing: '0',
      },
      caption: {
        fontSize: '0.75rem', // 12px
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0.025em',
      },
      overline: {
        fontSize: '0.75rem', // 12px
        fontWeight: '600',
        lineHeight: '1.5',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      },
      button: {
        fontSize: '0.875rem', // 14px
        fontWeight: '600',
        lineHeight: '1.5',
        letterSpacing: '0.025em',
      },
      label: {
        fontSize: '0.875rem', // 14px
        fontWeight: '500',
        lineHeight: '1.5',
        letterSpacing: '0',
      },
    },
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    base: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    none: 'none',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1100,
    modal: 1200,
    tooltip: 1300,
    notification: 1400,
  },
} as const;

export type Tokens = typeof tokens;
export type ColorScale = keyof typeof tokens.colors;
export type ColorShade = keyof typeof tokens.colors.primary;
