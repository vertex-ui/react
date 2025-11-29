export { ThemeProvider, useThemeContext } from './ThemeProvider';
export { tokens } from './tokens';
export { generateCSSVariables, injectCSSVariables } from './cssVariables';
export type { Theme, ThemeProviderProps } from './ThemeProvider';
export type { Tokens, ColorScale, ColorShade } from './tokens';

// Import base CSS to ensure variables are available
import './base.css';
