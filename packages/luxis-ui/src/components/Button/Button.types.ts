import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning';
  /**
   * Size of the button
   * @default 'md'
   */
  size?: Size;
  /**
   * If true, button will take full width of its container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Loading state - shows loading indicator and disables interaction
   * When true, the button becomes unclickable and shows a spinner
   * @default false
   */
  loading?: boolean;
  /**
   * Icon to display before button text
   * Pass any React node (icon component, emoji, etc.)
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after button text
   * Pass any React node (icon component, emoji, etc.)
   */
  rightIcon?: React.ReactNode;
  /**
   * If true, renders the button as an icon-only button (no text padding)
   * Content should be an icon element
   * @default false
   */
  iconOnly?: boolean;
  /**
   * Custom loading text to display when loading is true
   * @default undefined (uses children content)
   */
  loadingText?: string;
  /**
   * If true, renders button as a link element with button styling
   * Requires href prop when true
   * @default false
   */
  asLink?: boolean;
  /**
   * URL when rendering as link (requires asLink=true)
   */
  href?: string;
  /**
   * Target attribute when rendering as link
   */
  target?: string;
  /**
   * Rel attribute when rendering as link
   */
  rel?: string;

  /**
   * Optional text color for the button
   */
  textColor?: string;

  /**
   * If true/false, applies dark or light text color class
   */
  darkText?: boolean;

  /**
   * Shape of the button
   * @default 'default'
   */
  shape?: 'default' | 'pill' | 'square';

  children?: React.ReactNode;
}