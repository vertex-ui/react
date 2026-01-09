import * as React from 'react';
import { CSSProperties } from 'react';
import './Text.css';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline'
  | 'button'
  | 'label';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';
export type TextDecoration = 'none' | 'underline' | 'line-through' | 'overline';
export type TextWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';
export type TextAs =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'
  | 'label'
  | 'strong'
  | 'em'
  | 'small';

export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  /**
   * Typography variant that applies preset styles
   * @default 'body1'
   */
  variant?: TextVariant;

  /**
   * HTML element to render as
   * Automatically inferred from variant if not specified
   */
  as?: TextAs;

  /**
   * Text alignment
   */
  align?: TextAlign;

  /**
   * Semantic text color - applies predefined theme colors via CSS classes
   * Examples: 'primary', 'secondary', 'success', 'error', 'warning', 'info'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'inherit';

  /**
   * Direct text color override - accepts any CSS color value
   * Examples: '#000', 'rgb(0,0,0)', '#primary.500'
   * Overrides semantic color if both are provided
   */
  textColor?: string;

  /**
   * Font weight override
   */
  weight?: TextWeight | number;

  /**
   * Text transform
   */
  transform?: TextTransform;

  /**
   * Text decoration
   */
  decoration?: TextDecoration;

  /**
   * Enable text truncation with ellipsis
   * @default false
   */
  truncate?: boolean;

  /**
   * Number of lines to show before truncating (requires truncate or clamp)
   * Uses -webkit-line-clamp for multi-line truncation
   */
  lineClamp?: number;

  /**
   * Enable word break for long words
   * @default false
   */
  breakWord?: boolean;

  /**
   * Enable italic style
   * @default false
   */
  italic?: boolean;

  /**
   * Enable underline
   * @default false
   */
  underline?: boolean;

  /**
   * Enable strikethrough
   * @default false
   */
  strikethrough?: boolean;

  /**
   * Make text gradient with specified colors
   * Example: ['#667eea', '#764ba2']
   */
  gradient?: string[];

  /**
   * Disable user selection
   * @default false
   */
  noSelect?: boolean;

  /**
   * Custom font size (overrides variant)
   */
  size?: string | number;

  /**
   * Custom line height (overrides variant)
   */
  lineHeight?: string | number;

  /**
   * Custom letter spacing (overrides variant)
   */
  letterSpacing?: string | number;

  /**
   * Remove default margin
   * @default false
   */
  noMargin?: boolean;

  /**
   * Remove default padding
   * @default false
   */
  noPadding?: boolean;

  /**
   * Children content to render
   */
  children?: React.ReactNode;
}

/**
 * Pre-computed base class names for each variant (performance optimization)
 */
const CLASS_VARIANTS: Record<TextVariant, string> = {
  h1: 'vtx-text vtx-text--h1',
  h2: 'vtx-text vtx-text--h2',
  h3: 'vtx-text vtx-text--h3',
  h4: 'vtx-text vtx-text--h4',
  h5: 'vtx-text vtx-text--h5',
  h6: 'vtx-text vtx-text--h6',
  body1: 'vtx-text vtx-text--body1',
  body2: 'vtx-text vtx-text--body2',
  subtitle1: 'vtx-text vtx-text--subtitle1',
  subtitle2: 'vtx-text vtx-text--subtitle2',
  caption: 'vtx-text vtx-text--caption',
  overline: 'vtx-text vtx-text--overline',
  button: 'vtx-text vtx-text--button',
  label: 'vtx-text vtx-text--label',
};

/**
 * Default HTML element mapping for each variant
 */
const ELEMENT_MAP: Record<TextVariant, TextAs> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
  caption: 'span',
  overline: 'span',
  button: 'span',
  label: 'label',
};

/**
 * Text component - Versatile typography component with theme integration
 *
 * A comprehensive text component that provides consistent typography across your application
 * with full theming support and extensive customization options.
 */
const TextComponent = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = 'body1',
      as,
      align,
      color,
      textColor,
      weight,
      transform,
      decoration,
      truncate = false,
      lineClamp,
      breakWord = false,
      italic = false,
      underline = false,
      strikethrough = false,
      gradient,
      noSelect = false,
      size,
      lineHeight,
      letterSpacing,
      noMargin = false,
      noPadding = false,
      className = '',
      style,
      children,
      ...props
    },
    ref
  ) => {
    // Determine the HTML element to render
    const Component = as || ELEMENT_MAP[variant] || 'p';

    // Build class names - optimized with pre-computed base
    const classNames = React.useMemo(() => {
      const classes = [CLASS_VARIANTS[variant]];

      if (align) classes.push(`vtx-text--align-${align}`);
      if (weight && typeof weight === 'string') classes.push(`vtx-text--weight-${weight}`);
      if (color && color !== 'inherit') classes.push(`vtx-text--color-${color}`);
      if (transform) classes.push(`vtx-text--transform-${transform}`);
      if (decoration) classes.push(`vtx-text--decoration-${decoration}`);
      if (truncate) classes.push('vtx-text--truncate');
      if (lineClamp) classes.push('vtx-text--line-clamp');
      if (breakWord) classes.push('vtx-text--break-word');
      if (italic) classes.push('vtx-text--italic');
      if (underline) classes.push('vtx-text--underline');
      if (strikethrough) classes.push('vtx-text--strikethrough');
      if (gradient) classes.push('vtx-text--gradient');
      if (noSelect) classes.push('vtx-text--no-select');
      if (noMargin) classes.push('vtx-text--no-margin');
      if (noPadding) classes.push('vtx-text--no-padding');
      if (className) classes.push(className);

      return classes.join(' ');
    }, [variant, align, weight, color, transform, decoration, truncate, lineClamp, breakWord, italic, underline, strikethrough, gradient, noSelect, noMargin, noPadding, className]);

    // Build inline styles - optimized with conditional object creation
    const inlineStyles = React.useMemo(() => {
      // Only create style object if we have custom styles
      if (!textColor && !(weight && typeof weight === 'number') && !lineClamp &&
          !gradient && !size && !lineHeight && !letterSpacing && !style) {
        return undefined;
      }

      const s: CSSProperties = style ? { ...style } : {};

      if (textColor) s.color = textColor;
      if (weight && typeof weight === 'number') s.fontWeight = weight;
      if (lineClamp) s.WebkitLineClamp = lineClamp;

      if (gradient && gradient.length > 0) {
        s.backgroundImage = gradient.length === 1
          ? gradient[0]
          : `linear-gradient(135deg, ${gradient.join(', ')})`;
      }

      if (size) s.fontSize = typeof size === 'number' ? `${size}px` : size;
      if (lineHeight) s.lineHeight = typeof lineHeight === 'number' ? `${lineHeight}` : lineHeight;
      if (letterSpacing) {
        s.letterSpacing = typeof letterSpacing === 'number' ? `${letterSpacing}px` : letterSpacing;
      }

      return s;
    }, [style, textColor, weight, lineClamp, gradient, size, lineHeight, letterSpacing]);

    return React.createElement(
      Component,
      {
        ref,
        className: classNames,
        style: inlineStyles,
        ...props,
      },
      children
    );
  }
);

TextComponent.displayName = 'Text';

// Using React.memo for high-frequency typography component
const Text = React.memo(TextComponent);

export default Text as React.FC<TextProps & React.RefAttributes<HTMLElement>>;
export { Text };
