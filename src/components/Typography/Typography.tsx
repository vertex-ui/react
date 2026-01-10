import * as React from 'react';
import { CSSProperties } from 'react';
import './Typography.css';

export type TypographyVariant =
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

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';
export type TypographyTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';
export type TypographyDecoration = 'none' | 'underline' | 'line-through' | 'overline';
export type TypographyWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';
export type TypographyAs =
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

export interface TypographyProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  /**
   * Typography variant that applies preset styles
   * @default 'body1'
   */
  variant?: TypographyVariant;

  /**
   * HTML element to render as
   * Automatically inferred from variant if not specified
   */
  as?: TypographyAs;

  /**
   * Typography alignment
   */
  align?: TypographyAlign;

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
  weight?: TypographyWeight | number;

  /**
   * Typography transform
   */
  transform?: TypographyTransform;

  /**
   * Typography decoration
   */
  decoration?: TypographyDecoration;

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

  /**
   * For usage when rendered as a label
   */
  htmlFor?: string;
}

/**
 * Pre-computed base class names for each variant (performance optimization)
 */
const CLASS_VARIANTS: Record<TypographyVariant, string> = {
  h1: 'vtx-typography vtx-typography--h1',
  h2: 'vtx-typography vtx-typography--h2',
  h3: 'vtx-typography vtx-typography--h3',
  h4: 'vtx-typography vtx-typography--h4',
  h5: 'vtx-typography vtx-typography--h5',
  h6: 'vtx-typography vtx-typography--h6',
  body1: 'vtx-typography vtx-typography--body1',
  body2: 'vtx-typography vtx-typography--body2',
  subtitle1: 'vtx-typography vtx-typography--subtitle1',
  subtitle2: 'vtx-typography vtx-typography--subtitle2',
  caption: 'vtx-typography vtx-typography--caption',
  overline: 'vtx-typography vtx-typography--overline',
  button: 'vtx-typography vtx-typography--button',
  label: 'vtx-typography vtx-typography--label',
};

/**
 * Default HTML element mapping for each variant
 */
const ELEMENT_MAP: Record<TypographyVariant, TypographyAs> = {
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
 * Typography component - Versatile typography component with theme integration
 *
 * A comprehensive text component that provides consistent typography across your application
 * with full theming support and extensive customization options.
 */
const TypographyComponent = React.forwardRef<HTMLElement, TypographyProps>(
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

      if (align) classes.push(`vtx-typography--align-${align}`);
      if (weight && typeof weight === 'string') classes.push(`vtx-typography--weight-${weight}`);
      if (color && color !== 'inherit') classes.push(`vtx-typography--color-${color}`);
      if (transform) classes.push(`vtx-typography--transform-${transform}`);
      if (decoration) classes.push(`vtx-typography--decoration-${decoration}`);
      if (truncate) classes.push('vtx-typography--truncate');
      if (lineClamp) classes.push('vtx-typography--line-clamp');
      if (breakWord) classes.push('vtx-typography--break-word');
      if (italic) classes.push('vtx-typography--italic');
      if (underline) classes.push('vtx-typography--underline');
      if (strikethrough) classes.push('vtx-typography--strikethrough');
      if (gradient) classes.push('vtx-typography--gradient');
      if (noSelect) classes.push('vtx-typography--no-select');
      if (noMargin) classes.push('vtx-typography--no-margin');
      if (noPadding) classes.push('vtx-typography--no-padding');
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

TypographyComponent.displayName = 'Typography';

// Using React.memo for high-frequency typography component
const Typography = React.memo(TypographyComponent);

export default Typography as React.FC<TypographyProps & React.RefAttributes<HTMLElement>>;
export { Typography };
