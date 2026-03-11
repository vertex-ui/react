import React from 'react';
import type { BoxAs, BoxProps } from '../Box';
import { Box } from '../Box';
import type { FlexProps } from './Flex.types';



const JUSTIFY_MAP: Record<string, BoxProps['justifyContent']> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

const ALIGN_MAP: Record<string, BoxProps['alignItems']> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

const ALIGN_CONTENT_MAP: Record<string, React.CSSProperties['alignContent']> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  stretch: 'stretch',
};

const toPx = (v: string | number | undefined): string | undefined => {
  if (v === undefined) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
};

/**
 * Flex — convenience wrapper around Box for flexbox layouts.
 *
 * Uses shorthand prop names (`justify`, `align`, `direction`, `wrap`) that map
 * to the underlying CSS values. Arbitrary-value props (`gap`, `rowGap`, …) are
 * applied as inline styles.
 *
 * @example Basic row
 * ```tsx
 * <Flex gap={16}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 * ```
 *
 * @example Centered column
 * ```tsx
 * <Flex direction="column" align="center" justify="center" gap={8}>
 *   <h1>Title</h1>
 *   <p>Content</p>
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
    // Build extra styles for props Box no longer handles as first-class
    const extraStyle: React.CSSProperties = {};
    if (alignContent) extraStyle.alignContent = ALIGN_CONTENT_MAP[alignContent] ?? alignContent;
    if (rowGap !== undefined) extraStyle.rowGap = toPx(rowGap);
    if (columnGap !== undefined) extraStyle.columnGap = toPx(columnGap);
    if (grow !== undefined) extraStyle.flexGrow = grow;
    if (shrink !== undefined) extraStyle.flexShrink = shrink;
    if (basis !== undefined) extraStyle.flexBasis = toPx(basis);

    return (
      <Box
        ref={ref as React.Ref<HTMLElement>}
        as={as as BoxAs}
        display={inline ? 'inline-flex' : 'flex'}
        flexDirection={direction}
        flexWrap={wrap}
        justifyContent={JUSTIFY_MAP[justify]}
        alignItems={ALIGN_MAP[align]}
        gap={gap}
        w={fullWidth ? '100%' : undefined}
        className={`lxs-flex ${className}`.trim()}
        style={{ ...extraStyle, ...style }}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

Flex.displayName = 'Flex';

export { Flex };
