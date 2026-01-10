import React from 'react';
import { Box } from '../Box';

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
  /** Whether the container takes full width (default: false) */
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

    // Map simplified props to CSS values
    const mapJustify = (val?: string) => {
      if (val === 'start') return 'flex-start';
      if (val === 'end') return 'flex-end';
      if (val === 'between') return 'space-between';
      if (val === 'around') return 'space-around';
      if (val === 'evenly') return 'space-evenly';
      return val as any;
    };

    const mapAlign = (val?: string) => {
      if (val === 'start') return 'flex-start';
      if (val === 'end') return 'flex-end';
      return val as any;
    };

    const mapAlignContent = (val?: string) => {
      if (val === 'start') return 'flex-start';
      if (val === 'end') return 'flex-end';
      if (val === 'between') return 'space-between';
      if (val === 'around') return 'space-around';
      return val as any;
    }

    return (
      <Box
        ref={ref}
        as={as as any}
        display={inline ? 'inline-flex' : 'flex'}
        flexDirection={direction}
        flexWrap={wrap}
        justifyContent={mapJustify(justify)}
        alignItems={mapAlign(align)}
        alignContent={mapAlignContent(alignContent)}
        gap={gap}
        rowGap={rowGap}
        columnGap={columnGap}
        flexGrow={grow}
        flexShrink={shrink}
        flexBasis={basis}
        width={fullWidth ? '100%' : undefined}
        className={`vtx-flex ${className}`.trim()}
        style={style}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

Flex.displayName = 'Flex';

export default Flex as React.FC<FlexProps & React.RefAttributes<HTMLDivElement>>;
export { Flex };
