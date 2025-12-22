
import React from 'react';
import { injectCSSVariables } from './cssVariables';
import { tokens, Tokens, normalizeColors, CustomTokens } from './tokens';

export type Size = 'sm' | 'md' | 'lg';

export type ColorContrast = 'light' | 'dark';

export interface ColorContrastConfig {
  primary?: ColorContrast;
  secondary?: ColorContrast;
  outline?: ColorContrast;
  ghost?: ColorContrast;
  danger?: ColorContrast;
  success?: ColorContrast;
  warning?: ColorContrast;
}

export interface Theme {
  tokens: Tokens;
  mode: 'light' | 'dark';
  defaultSize: Size;
  colorContrast: ColorContrastConfig;
}


export interface ThemeContextValue {
  theme: Theme;
  setMode: (mode: 'light' | 'dark') => void;
  setDefaultSize: (size: Size) => void;
}


const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);


export interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Child components that will have access to the theme */
  children?: React.ReactNode;
  /** Initial theme mode, defaults to 'light' */
  initialMode?: 'light' | 'dark';
  /** Custom theme tokens to override defaults */
  customTokens?: CustomTokens;
  /** Global default size for components (e.g., 'md', 'sm', 'lg') */
  defaultSize?: Size;
  /** Color contrast configuration - specify if variant backgrounds are light or dark */
  colorContrast?: ColorContrastConfig;
}


const ThemeProvider = React.forwardRef<HTMLDivElement, ThemeProviderProps>(
  (
    {
      children,
      initialMode = 'light',
      customTokens,
      defaultSize = 'md',
      colorContrast,
      ...props
    },
    ref
  ) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>(initialMode);
    const [size, setDefaultSize] = React.useState<Size>(defaultSize);

    // Default color contrast configuration
    const defaultColorContrast: ColorContrastConfig = {
      primary: 'dark',      // Dark background → needs light text
      secondary: 'dark',    // Dark background → needs light text
      outline: 'light',     // Transparent/light background → needs dark text
      ghost: 'light',       // Transparent/light background → needs dark text
      danger: 'dark',       // Dark background → needs light text
      success: 'dark',      // Dark background → needs light text
      warning: 'dark',      // Dark background → needs light text
    };


    const theme: Theme = React.useMemo(() => {
      const contrastConfig = { ...defaultColorContrast, ...colorContrast };
      
      if (!customTokens) {
        return {
          tokens: tokens as Tokens,
          mode,
          defaultSize: size,
          colorContrast: contrastConfig,
        };
      }

      // If customTokens.colors is present, normalize it
      let mergedTokens: any = { ...tokens, ...customTokens };
      if (customTokens.colors) {
        mergedTokens.colors = {
          ...tokens.colors,
          ...normalizeColors(customTokens.colors)
        };
      }
      return {
        tokens: mergedTokens as Tokens,
        mode,
        defaultSize: size,
        colorContrast: contrastConfig,
      };
    }, [customTokens, mode, size, colorContrast]);

    React.useEffect(() => {
      document.documentElement.setAttribute('data-theme', mode);
      if (customTokens) {
        injectCSSVariables(theme.tokens);
      }
    }, [mode, customTokens, theme.tokens]);

    const contextValue = React.useMemo<ThemeContextValue>(
      () => ({ theme, setMode, setDefaultSize }),
      [theme]
    );

    return (
      <ThemeContext.Provider value={contextValue}>
        <div ref={ref} {...props}>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }
);

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
export default ThemeProvider as React.FC<ThemeProviderProps & React.RefAttributes<HTMLDivElement>>;


/**
 * Hook to access the current theme and theme utilities
 *
 * @throws {Error} If used outside of ThemeProvider
 *
 * @example
 * function MyComponent() {
 *   const { theme, setMode } = useThemeContext();
 *   return <div style={{ color: theme.tokens.colors.primary[500] }}>Hello</div>;
 * }
 */
export const useThemeContext = (): ThemeContextValue => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
