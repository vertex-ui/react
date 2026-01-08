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

    // Build class names - memoized for performance
    const classNames = React.useMemo(() => {
      return [
        'vtx-text',
        `vtx-text--${variant}`,
        align && `vtx-text--align-${align}`,
        weight && typeof weight === 'string' && `vtx-text--weight-${weight}`,
        color && color !== 'inherit' && `vtx-text--color-${color}`,
        transform && `vtx-text--transform-${transform}`,
        decoration && `vtx-text--decoration-${decoration}`,
        truncate && 'vtx-text--truncate',
        lineClamp && 'vtx-text--line-clamp',
        breakWord && 'vtx-text--break-word',
        italic && 'vtx-text--italic',
        underline && 'vtx-text--underline',
        strikethrough && 'vtx-text--strikethrough',
        gradient && 'vtx-text--gradient',
        noSelect && 'vtx-text--no-select',
        noMargin && 'vtx-text--no-margin',
        noPadding && 'vtx-text--no-padding',
        className,
      ]
        .filter(Boolean)
        .join(' ');
    }, [
      variant,
      align,
      weight,
      color,
      transform,
      decoration,
      truncate,
      lineClamp,
      breakWord,
      italic,
      underline,
      strikethrough,
      gradient,
      noSelect,
      noMargin,
      noPadding,
      className,
    ]);

    // Build inline styles - memoized for performance
    const inlineStyles = React.useMemo(() => {
      const s: CSSProperties = { ...style };

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
    }, [
      style,
      textColor,
      weight,
      lineClamp,
      gradient,
      size,
      lineHeight,
      letterSpacing,
    ]);

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

