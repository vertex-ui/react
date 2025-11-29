import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { tokens, Tokens } from './tokens';
import { injectCSSVariables } from './cssVariables';

export interface Theme {
  tokens: Tokens;
  mode: 'light' | 'dark';
}

interface ThemeContextValue {
  theme: Theme;
  setMode: (mode: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  /** Child components that will have access to the theme */
  children: ReactNode;
  /** Initial theme mode, defaults to 'light' */
  initialMode?: 'light' | 'dark';
  /** Custom theme tokens to override defaults */
  customTokens?: Partial<Tokens>;
}

/**
 * ThemeProvider component that makes theme tokens available throughout the component tree
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from '@vtx-ui/react';
 *
 * function App() {
 *   return (
 *     <ThemeProvider initialMode="light">
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialMode = 'light',
  customTokens,
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>(initialMode);

  const theme: Theme = {
    tokens: customTokens ? { ...tokens, ...customTokens } : tokens,
    mode,
  };

  useEffect(() => {
    // Set data attribute for mode-specific styling (light/dark theme)
    document.documentElement.setAttribute('data-theme', mode);

    // Optionally inject CSS variables programmatically
    // This is useful if users want to override tokens dynamically
    if (customTokens) {
      injectCSSVariables();
    }
  }, [mode, customTokens]);

  const contextValue: ThemeContextValue = {
    theme,
    setMode,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

/**
 * Hook to access the current theme and theme utilities
 *
 * @throws {Error} If used outside of ThemeProvider
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { theme, setMode } = useThemeContext();
 *   return <div style={{ color: theme.tokens.colors.primary[500] }}>Hello</div>;
 * }
 * ```
 */
export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
