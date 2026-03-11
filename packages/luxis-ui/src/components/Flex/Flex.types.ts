import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface FlexProps {
  /** Child elements */
  children?: React.ReactNode;
  /** flex-direction */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /** flex-wrap */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** justify-content — shorthand values map to CSS: 'start'→flex-start, 'end'→flex-end, 'between'→space-between, etc. */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  /** align-items — shorthand: 'start'→flex-start, 'end'→flex-end */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /** align-content — shorthand same mapping as align */
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
  /** Gap between items */
  gap?: number | string;
  /** Row gap */
  rowGap?: number | string;
  /** Column gap */
  columnGap?: number | string;
  /** Render as inline-flex instead of flex */
  inline?: boolean;
  /** Stretch to 100% width */
  fullWidth?: boolean;
  /** flex-grow */
  grow?: number;
  /** flex-shrink */
  shrink?: number;
  /** flex-basis */
  basis?: string | number;
  /** Custom className */
  className?: string;
  /** Inline style overrides */
  style?: React.CSSProperties;
  /** HTML element to render as */
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'nav' | 'main';
}