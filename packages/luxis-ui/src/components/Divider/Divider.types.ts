import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  /**
   * Align the content within the divider
   * Only works when children are provided
   * @default 'center'
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * The component orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The variant to use
   * @default 'fullWidth'
   */
  variant?: 'fullWidth' | 'inset' | 'middle';
  /**
   * If true, the divider will have a lighter color
   * @default false
   */
  light?: boolean;
  /**
   * If true, the divider will be optimized for use in flex containers
   * @default false
   */
  flexItem?: boolean;
  /**
   * The content of the divider
   */
  children?: React.ReactNode;
  /**
   * The component used for the root node
   * Either a string to use a HTML element or a component
   * @default 'hr'
   */
  component?: React.ElementType;
  /**
   * Additional CSS class name
   */
  className?: string;
}