import React from 'react';
import './Flex.css';

export interface FlexProps {
  /** Child elements */
  children?: React.ReactNode;
  /** Flex direction */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /** Flex wrap behavior */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Justify content alignment */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  /** Align items alignment */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /** Align content alignment (multi-line) */
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
  /** Gap between items */
  gap?: number | string;
  /** Row gap (overrides gap for rows) */
  rowGap?: number | string;
  /** Column gap (overrides gap for columns) */
  columnGap?: number | string;
  /** Whether the container is inline-flex */
  inline?: boolean;
  /** Whether the container takes full width (default: true) */
  fullWidth?: boolean;
  /** Flex grow value */
  grow?: number;
  /** Flex shrink value */
  shrink?: number;
  /** Flex basis value */
  basis?: string | number;
  /** Custom className */
  className?: string;
  /** Custom style */
  style?: React.CSSProperties;
  /** HTML element to render as */
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'nav' | 'main';
}

/**
 * Flex component - A flexible container for flexbox layouts
 *
 * @example
 * ```tsx
 * // Basic row with gap
 * <Flex gap={16}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 *
 * // Centered column
 * <Flex direction="column" align="center" justify="center">
 *   <h1>Title</h1>
 *   <p>Content</p>
 * </Flex>
 *
 * // Space between with wrap
 * <Flex justify="between" wrap="wrap" gap={8}>
 *   <button>Button 1</button>
 *   <button>Button 2</button>
 *   <button>Button 3</button>
 * </Flex>
 * ```
 */
const Flex = React.forwardRef<HTMLDivElement, FlexProps & React.HTMLAttributes<HTMLDivElement>>(
  (
    {
      children,
      direction = 'row',
      wrap = 'nowrap',
      justify = 'start',
      align = 'stretch',
      alignContent,
      gap,
      rowGap,
      columnGap,
      inline = false,
      fullWidth = false,
      grow,
      shrink,
      basis,
      className = '',
      as = 'div',
      style,
      ...rest
    },
    ref
  ) => {
    const Element = as as 'div';

    // Build className
    const classes = [
      'vtx-flex',
      inline && 'vtx-flex--inline',
      fullWidth && 'vtx-flex--full-width',
      direction !== 'row' && `vtx-flex--${direction}`,
      wrap !== 'nowrap' && `vtx-flex--${wrap}`,
      justify !== 'start' && `vtx-flex--justify-${justify}`,
      align !== 'stretch' && `vtx-flex--align-${align}`,
      alignContent && `vtx-flex--align-content-${alignContent}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Build style with CSS variables
    const customStyle: React.CSSProperties = {
      ...style,
    };

    // Handle gap
    if (gap !== undefined) {
      (customStyle as Record<string, string | number>)['--vtx-flex-gap'] =
        typeof gap === 'number' ? `${gap}px` : gap;
    }
    if (rowGap !== undefined) {
      (customStyle as Record<string, string | number>)['--vtx-flex-row-gap'] =
        typeof rowGap === 'number' ? `${rowGap}px` : rowGap;
    }
    if (columnGap !== undefined) {
      (customStyle as Record<string, string | number>)['--vtx-flex-column-gap'] =
        typeof columnGap === 'number' ? `${columnGap}px` : columnGap;
    }

    // Handle flex properties
    if (grow !== undefined) {
      customStyle.flexGrow = grow;
    }
    if (shrink !== undefined) {
      customStyle.flexShrink = shrink;
    }
    if (basis !== undefined) {
      customStyle.flexBasis = typeof basis === 'number' ? `${basis}px` : basis;
    }

    return (
      <Element ref={ref} className={classes} style={customStyle} {...rest}>
        {children}
      </Element>
    );
  }
);

Flex.displayName = 'Flex';

export default Flex as React.FC<FlexProps & React.RefAttributes<HTMLDivElement>>;
export { Flex };
