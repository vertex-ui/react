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
   * Text color - accepts CSS color values or theme color tokens
   * Examples: 'primary.500', '#000', 'rgb(0,0,0)', 'neutral.700'
   */
  color?: string;

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
 * Get default HTML element based on variant
 */
const getDefaultElement = (variant: TextVariant): TextAs => {
  const elementMap: Record<TextVariant, TextAs> = {
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
  return elementMap[variant];
};

/**
 * Text component - Versatile typography component with theme integration
 *
 * A comprehensive text component that provides consistent typography across your application
 * with full theming support and extensive customization options.
 *
 * @example
 * Basic usage with variants
 * ```tsx
 * <Text variant="h1">Heading 1</Text>
 * <Text variant="body1">Regular body text</Text>
 * <Text variant="caption" color="neutral.500">Small caption text</Text>
 * ```
 *
 * @example
 * Custom styling
 * ```tsx
 * <Text
 *   variant="body1"
 *   weight="bold"
 *   align="center"
 *   color="primary.600"
 * >
 *   Centered bold text
 * </Text>
 * ```
 *
 * @example
 * Truncation and line clamping
 * ```tsx
 * <Text truncate>This text will be truncated with ellipsis...</Text>
 * <Text lineClamp={3}>This text will show only 3 lines before truncating...</Text>
 * ```
 *
 * @example
 * Gradient text
 * ```tsx
 * <Text variant="h2" gradient={['#667eea', '#764ba2']}>
 *   Gradient Heading
 * </Text>
 * ```
 *
 * @example
 * Semantic HTML control
 * ```tsx
 * <Text variant="h1" as="h2">Visually h1, semantically h2</Text>
 * <Text variant="body1" as="label" htmlFor="input">Label with body style</Text>
 * ```
 */
const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = 'body1',
      as,
      align,
      color,
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
    const Component = as || getDefaultElement(variant);

    // Build class names
    const classNames = [
      'vtx-text',
      `vtx-text--${variant}`,
      align && `vtx-text--align-${align}`,
      weight && typeof weight === 'string' && `vtx-text--weight-${weight}`,
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

    // Build inline styles
    const inlineStyles: CSSProperties = {
      ...style,
    };

    // Handle color (support theme tokens and CSS colors)
    if (color) {
      // Check if it's a theme token (e.g., 'primary.500')
      if (color.includes('.')) {
        const [colorName, shade] = color.split('.');
        inlineStyles.color = `var(--vtx-color-${colorName}-${shade})`;
      } else {
        inlineStyles.color = color;
      }
    }

    // Handle numeric weight
    if (weight && typeof weight === 'number') {
      inlineStyles.fontWeight = weight;
    }

    // Handle line clamp
    if (lineClamp) {
      inlineStyles.WebkitLineClamp = lineClamp;
    }

    // Handle gradient
    if (gradient && gradient.length > 0) {
      const gradientValue =
        gradient.length === 1 ? gradient[0] : `linear-gradient(135deg, ${gradient.join(', ')})`;
      inlineStyles.backgroundImage = gradientValue;
    }

    // Handle custom size
    if (size) {
      inlineStyles.fontSize = typeof size === 'number' ? `${size}px` : size;
    }

    // Handle custom line height
    if (lineHeight) {
      inlineStyles.lineHeight = typeof lineHeight === 'number' ? `${lineHeight}` : lineHeight;
    }

    // Handle custom letter spacing
    if (letterSpacing) {
      inlineStyles.letterSpacing =
        typeof letterSpacing === 'number' ? `${letterSpacing}px` : letterSpacing;
    }

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

Text.displayName = 'Text';

export { Text };
export default Text as React.FC<TextProps & React.RefAttributes<HTMLElement>>;
