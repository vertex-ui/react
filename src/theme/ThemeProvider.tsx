
import React from 'react';
import { injectCSSVariables } from './cssVariables';
import { tokens, Tokens, normalizeColors } from './tokens';

export type Size = 'sm' | 'md' | 'lg';


export interface Theme {
  tokens: Tokens;
  mode: 'light' | 'dark';
  defaultSize: Size;
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
  customTokens?: Partial<Tokens>;
  /** Global default size for components (e.g., 'md', 'sm', 'lg') */
  defaultSize?: Size;
}


const ThemeProvider = React.forwardRef<HTMLDivElement, ThemeProviderProps>(
  (
    {
      children,
      initialMode = 'light',
      customTokens,
      defaultSize = 'md',
      ...props
    },
    ref
  ) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>(initialMode);
    const [size, setDefaultSize] = React.useState<Size>(defaultSize);


    const theme: Theme = React.useMemo(() => {
      if (!customTokens) {
        return {
          tokens,
          mode,
          defaultSize: size,
        };
      }

      // If customTokens.colors is present, normalize it
      let mergedTokens = { ...tokens, ...customTokens };
      if (customTokens.colors) {
        mergedTokens.colors = {
          ...tokens.colors,
          ...normalizeColors(customTokens.colors)
        };
      }
      return {
        tokens: mergedTokens,
        mode,
        defaultSize: size,
      };
    }, [customTokens, mode, size]);

    React.useEffect(() => {
      document.documentElement.setAttribute('data-theme', mode);
      if (customTokens) {
        injectCSSVariables();
      }
    }, [mode, customTokens]);

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
