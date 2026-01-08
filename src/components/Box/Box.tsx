import * as React from 'react';
import { CSSProperties } from 'react';
import './Box.css';

export type BoxAs =
  | 'div'
  | 'section'
  | 'article'
  | 'aside'
  | 'main'
  | 'header'
  | 'footer'
  | 'nav'
  | 'span';

export type BoxDisplay =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'none';

export type BoxPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export type BoxOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML element to render as
   * @default 'div'
   */
  as?: BoxAs;

  /**
   * Display property
   */
  display?: BoxDisplay;

  /**
   * Position property
   */
  position?: BoxPosition;

  /**
   * Overflow property
   */
  overflow?: BoxOverflow;

  /**
   * Overflow X axis
   */
  overflowX?: BoxOverflow;

  /**
   * Overflow Y axis
   */
  overflowY?: BoxOverflow;

  /**
   * Background color - accepts any CSS color value or theme token
   * Examples: '#fff', 'rgb(255,255,255)', 'primary.500'
   */
  bg?: string;

  /**
   * Background color alias
   */
  backgroundColor?: string;

  /**
   * Text/foreground color - accepts any CSS color value
   */
  color?: string;

  /**
   * Width - accepts CSS width value or number (converted to px)
   */
  w?: string | number;

  /**
   * Width alias
   */
  width?: string | number;

  /**
   * Height - accepts CSS height value or number (converted to px)
   */
  h?: string | number;

  /**
   * Height alias
   */
  height?: string | number;

  /**
   * Min width
   */
  minW?: string | number;

  /**
   * Min width alias
   */
  minWidth?: string | number;

  /**
   * Max width
   */
  maxW?: string | number;

  /**
   * Max width alias
   */
  maxWidth?: string | number;

  /**
   * Min height
   */
  minH?: string | number;

  /**
   * Min height alias
   */
  minHeight?: string | number;

  /**
   * Max height
   */
  maxH?: string | number;

  /**
   * Max height alias
   */
  maxHeight?: string | number;

  /**
   * Margin - shorthand for all sides
   */
  m?: string | number;

  /**
   * Margin alias
   */
  margin?: string | number;

  /**
   * Margin top
   */
  mt?: string | number;

  /**
   * Margin top alias
   */
  marginTop?: string | number;

  /**
   * Margin right
   */
  mr?: string | number;

  /**
   * Margin right alias
   */
  marginRight?: string | number;

  /**
   * Margin bottom
   */
  mb?: string | number;

  /**
   * Margin bottom alias
   */
  marginBottom?: string | number;

  /**
   * Margin left
   */
  ml?: string | number;

  /**
   * Margin left alias
   */
  marginLeft?: string | number;

  /**
   * Margin X axis (left and right)
   */
  mx?: string | number;

  /**
   * Margin Y axis (top and bottom)
   */
  my?: string | number;

  /**
   * Padding - shorthand for all sides
   */
  p?: string | number;

  /**
   * Padding alias
   */
  padding?: string | number;

  /**
   * Padding top
   */
  pt?: string | number;

  /**
   * Padding top alias
   */
  paddingTop?: string | number;

  /**
   * Padding right
   */
  pr?: string | number;

  /**
   * Padding right alias
   */
  paddingRight?: string | number;

  /**
   * Padding bottom
   */
  pb?: string | number;

  /**
   * Padding bottom alias
   */
  paddingBottom?: string | number;

  /**
   * Padding left
   */
  pl?: string | number;

  /**
   * Padding left alias
   */
  paddingLeft?: string | number;

  /**
   * Padding X axis (left and right)
   */
  px?: string | number;

  /**
   * Padding Y axis (top and bottom)
   */
  py?: string | number;

  /**
   * Border width
   */
  border?: string | number;

  /**
   * Border color
   */
  borderColor?: string;

  /**
   * Border radius
   */
  borderRadius?: string | number;

  /**
   * Border radius alias
   */
  rounded?: string | number;

  /**
   * Border top
   */
  borderTop?: string | number;

  /**
   * Border right
   */
  borderRight?: string | number;

  /**
   * Border bottom
   */
  borderBottom?: string | number;

  /**
   * Border left
   */
  borderLeft?: string | number;

  /**
   * Box shadow
   */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | string;

  /**
   * Box shadow alias
   */
  boxShadow?: string;

  /**
   * Opacity (0-1)
   */
  opacity?: number;

  /**
   * Z-index
   */
  zIndex?: number;

  /**
   * Top position
   */
  top?: string | number;

  /**
   * Right position
   */
  right?: string | number;

  /**
   * Bottom position
   */
  bottom?: string | number;

  /**
   * Left position
   */
  left?: string | number;

  /**
   * Flex direction (when display is flex)
   */
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';

  /**
   * Justify content (when display is flex)
   */
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

  /**
   * Align items (when display is flex)
   */
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /**
   * Align content (when display is flex)
   */
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch';

  /**
   * Flex wrap
   */
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  /**
   * Gap between flex/grid items
   */
  gap?: string | number;

  /**
   * Row gap
   */
  rowGap?: string | number;

  /**
   * Column gap
   */
  columnGap?: string | number;

  /**
   * Flex grow
   */
  flexGrow?: number;

  /**
   * Flex shrink
   */
  flexShrink?: number;

  /**
   * Flex basis
   */
  flexBasis?: string | number;

  /**
   * Grid template columns
   */
  gridTemplateColumns?: string;

  /**
   * Grid template rows
   */
  gridTemplateRows?: string;

  /**
   * Grid column
   */
  gridColumn?: string;

  /**
   * Grid row
   */
  gridRow?: string;

  /**
   * Text align
   */
  textAlign?: 'left' | 'center' | 'right' | 'justify';

  /**
   * Cursor style
   */
  cursor?: string;

  /**
   * Pointer events
   */
  pointerEvents?: 'auto' | 'none';

  /**
   * User select
   */
  userSelect?: 'auto' | 'none' | 'text' | 'all';

  /**
   * Transition
   */
  transition?: string;

  /**
   * Children content to render
   */
  children?: React.ReactNode;
}

/**
 * Convert value to CSS string (adds px for numbers)
 */
const toCSSValue = (value: string | number | undefined): string | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return `${value}px`;
  return value;
};

/**
 * Box component - Flexible layout component that replaces div
 *
 * A versatile container component inspired by MUI Box that provides a prop-based
 * interface for styling and layout. It can render as any HTML element and accepts
 * style props for quick styling without writing CSS.
 *
 * @example
 * Basic usage
 * ```tsx
 * <Box p={4} bg="white" borderRadius={8}>
 *   Content here
 * </Box>
 * ```
 *
 * @example
 * Flex layout
 * ```tsx
 * <Box display="flex" justifyContent="space-between" alignItems="center" gap={2}>
 *   <Box>Item 1</Box>
 *   <Box>Item 2</Box>
 * </Box>
 * ```
 *
 * @example
 * Grid layout
 * ```tsx
 * <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4}>
 *   <Box>Item 1</Box>
 *   <Box>Item 2</Box>
 *   <Box>Item 3</Box>
 * </Box>
 * ```
 *
 * @example
 * Responsive card
 * ```tsx
 * <Box
 *   bg="#fff"
 *   p={4}
 *   borderRadius={12}
 *   shadow="md"
 *   maxW={400}
 * >
 *   <Text variant="h3">Card Title</Text>
 *   <Text>Card content</Text>
 * </Box>
 * ```
 *
 * @example
 * As semantic HTML
 * ```tsx
 * <Box as="section" py={8}>
 *   <Box as="header" mb={4}>
 *     <Text variant="h2">Section Title</Text>
 *   </Box>
 *   <Box as="article">
 *     Content here
 *   </Box>
 * </Box>
 * ```
 *
 * @example
 * Wrapping other components
 * ```tsx
 * <Box display="flex" gap={2}>
 *   <Button>Click me</Button>
 *   <Button variant="secondary">Cancel</Button>
 * </Box>
 * ```
 */
const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      as = 'div',
      display,
      position,
      overflow,
      overflowX,
      overflowY,
      bg,
      backgroundColor,
      color,
      w,
      width,
      h,
      height,
      minW,
      minWidth,
      maxW,
      maxWidth,
      minH,
      minHeight,
      maxH,
      maxHeight,
      m,
      margin,
      mt,
      marginTop,
      mr,
      marginRight,
      mb,
      marginBottom,
      ml,
      marginLeft,
      mx,
      my,
      p,
      padding,
      pt,
      paddingTop,
      pr,
      paddingRight,
      pb,
      paddingBottom,
      pl,
      paddingLeft,
      px,
      py,
      border,
      borderColor,
      borderRadius,
      rounded,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
      shadow,
      boxShadow,
      opacity,
      zIndex,
      top,
      right,
      bottom,
      left,
      flexDirection,
      justifyContent,
      alignItems,
      alignContent,
      flexWrap,
      gap,
      rowGap,
      columnGap,
      flexGrow,
      flexShrink,
      flexBasis,
      gridTemplateColumns,
      gridTemplateRows,
      gridColumn,
      gridRow,
      textAlign,
      cursor,
      pointerEvents,
      userSelect,
      transition,
      className = '',
      style,
      children,
      ...props
    },
    ref
  ) => {
    // Determine the HTML element to render
    const Component = as;

    // Build class names
    const classNames = [
      'vtx-box',
      display && `vtx-box--display-${display}`,
      position && `vtx-box--position-${position}`,
      overflow && `vtx-box--overflow-${overflow}`,
      shadow && typeof shadow === 'string' && !shadow.includes('(') && `vtx-box--shadow-${shadow}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Build inline styles
    const inlineStyles: CSSProperties = {
      ...style,
    };

    // Background
    if (bg || backgroundColor) {
      inlineStyles.backgroundColor = bg || backgroundColor;
    }

    // Color
    if (color) {
      inlineStyles.color = color;
    }

    // Dimensions
    if (w !== undefined || width !== undefined) {
      inlineStyles.width = toCSSValue(w ?? width);
    }
    if (h !== undefined || height !== undefined) {
      inlineStyles.height = toCSSValue(h ?? height);
    }
    if (minW !== undefined || minWidth !== undefined) {
      inlineStyles.minWidth = toCSSValue(minW ?? minWidth);
    }
    if (maxW !== undefined || maxWidth !== undefined) {
      inlineStyles.maxWidth = toCSSValue(maxW ?? maxWidth);
    }
    if (minH !== undefined || minHeight !== undefined) {
      inlineStyles.minHeight = toCSSValue(minH ?? minHeight);
    }
    if (maxH !== undefined || maxHeight !== undefined) {
      inlineStyles.maxHeight = toCSSValue(maxH ?? maxHeight);
    }

    // Margin (shorthand overrides specific sides)
    if (m !== undefined || margin !== undefined) {
      inlineStyles.margin = toCSSValue(m ?? margin);
    } else {
      if (my !== undefined) {
        inlineStyles.marginTop = toCSSValue(my);
        inlineStyles.marginBottom = toCSSValue(my);
      }
      if (mx !== undefined) {
        inlineStyles.marginLeft = toCSSValue(mx);
        inlineStyles.marginRight = toCSSValue(mx);
      }
      if (mt !== undefined || marginTop !== undefined) {
        inlineStyles.marginTop = toCSSValue(mt ?? marginTop);
      }
      if (mr !== undefined || marginRight !== undefined) {
        inlineStyles.marginRight = toCSSValue(mr ?? marginRight);
      }
      if (mb !== undefined || marginBottom !== undefined) {
        inlineStyles.marginBottom = toCSSValue(mb ?? marginBottom);
      }
      if (ml !== undefined || marginLeft !== undefined) {
        inlineStyles.marginLeft = toCSSValue(ml ?? marginLeft);
      }
    }

    // Padding (shorthand overrides specific sides)
    if (p !== undefined || padding !== undefined) {
      inlineStyles.padding = toCSSValue(p ?? padding);
    } else {
      if (py !== undefined) {
        inlineStyles.paddingTop = toCSSValue(py);
        inlineStyles.paddingBottom = toCSSValue(py);
      }
      if (px !== undefined) {
        inlineStyles.paddingLeft = toCSSValue(px);
        inlineStyles.paddingRight = toCSSValue(px);
      }
      if (pt !== undefined || paddingTop !== undefined) {
        inlineStyles.paddingTop = toCSSValue(pt ?? paddingTop);
      }
      if (pr !== undefined || paddingRight !== undefined) {
        inlineStyles.paddingRight = toCSSValue(pr ?? paddingRight);
      }
      if (pb !== undefined || paddingBottom !== undefined) {
        inlineStyles.paddingBottom = toCSSValue(pb ?? paddingBottom);
      }
      if (pl !== undefined || paddingLeft !== undefined) {
        inlineStyles.paddingLeft = toCSSValue(pl ?? paddingLeft);
      }
    }

    // Border
    if (border !== undefined) {
      inlineStyles.border = toCSSValue(border);
    }
    if (borderColor) {
      inlineStyles.borderColor = borderColor;
    }
    if (borderRadius !== undefined || rounded !== undefined) {
      inlineStyles.borderRadius = toCSSValue(borderRadius ?? rounded);
    }
    if (borderTop !== undefined) {
      inlineStyles.borderTop = toCSSValue(borderTop);
    }
    if (borderRight !== undefined) {
      inlineStyles.borderRight = toCSSValue(borderRight);
    }
    if (borderBottom !== undefined) {
      inlineStyles.borderBottom = toCSSValue(borderBottom);
    }
    if (borderLeft !== undefined) {
      inlineStyles.borderLeft = toCSSValue(borderLeft);
    }

    // Shadow
    if (shadow && shadow.includes('(')) {
      inlineStyles.boxShadow = shadow;
    }
    if (boxShadow) {
      inlineStyles.boxShadow = boxShadow;
    }

    // Overflow
    if (overflowX) {
      inlineStyles.overflowX = overflowX;
    }
    if (overflowY) {
      inlineStyles.overflowY = overflowY;
    }

    // Visual
    if (opacity !== undefined) {
      inlineStyles.opacity = opacity;
    }
    if (zIndex !== undefined) {
      inlineStyles.zIndex = zIndex;
    }

    // Position
    if (top !== undefined) {
      inlineStyles.top = toCSSValue(top);
    }
    if (right !== undefined) {
      inlineStyles.right = toCSSValue(right);
    }
    if (bottom !== undefined) {
      inlineStyles.bottom = toCSSValue(bottom);
    }
    if (left !== undefined) {
      inlineStyles.left = toCSSValue(left);
    }

    // Flexbox
    if (flexDirection) {
      inlineStyles.flexDirection = flexDirection;
    }
    if (justifyContent) {
      inlineStyles.justifyContent = justifyContent;
    }
    if (alignItems) {
      inlineStyles.alignItems = alignItems;
    }
    if (alignContent) {
      inlineStyles.alignContent = alignContent;
    }
    if (flexWrap) {
      inlineStyles.flexWrap = flexWrap;
    }
    if (gap !== undefined) {
      inlineStyles.gap = toCSSValue(gap);
    }
    if (rowGap !== undefined) {
      inlineStyles.rowGap = toCSSValue(rowGap);
    }
    if (columnGap !== undefined) {
      inlineStyles.columnGap = toCSSValue(columnGap);
    }
    if (flexGrow !== undefined) {
      inlineStyles.flexGrow = flexGrow;
    }
    if (flexShrink !== undefined) {
      inlineStyles.flexShrink = flexShrink;
    }
    if (flexBasis !== undefined) {
      inlineStyles.flexBasis = toCSSValue(flexBasis);
    }

    // Grid
    if (gridTemplateColumns) {
      inlineStyles.gridTemplateColumns = gridTemplateColumns;
    }
    if (gridTemplateRows) {
      inlineStyles.gridTemplateRows = gridTemplateRows;
    }
    if (gridColumn) {
      inlineStyles.gridColumn = gridColumn;
    }
    if (gridRow) {
      inlineStyles.gridRow = gridRow;
    }

    // Text
    if (textAlign) {
      inlineStyles.textAlign = textAlign;
    }

    // Interaction
    if (cursor) {
      inlineStyles.cursor = cursor;
    }
    if (pointerEvents) {
      inlineStyles.pointerEvents = pointerEvents;
    }
    if (userSelect) {
      inlineStyles.userSelect = userSelect;
    }

    // Transition
    if (transition) {
      inlineStyles.transition = transition;
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

Box.displayName = 'Box';

export default Box as React.FC<BoxProps & React.RefAttributes<HTMLElement>>;
export { Box };
