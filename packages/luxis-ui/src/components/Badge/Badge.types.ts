import type { HTMLAttributes, ReactNode, MouseEvent } from 'react';
import type { Size } from '../../theme';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual variant of the badge
   * @default 'neutral'
   */
  variant?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /**
   * Size of the badge
   * @default theme.defaultSize
   */
  size?: Size;
  /**
   * If true, badge will be pill-shaped with rounded ends
   * @default false
   */
  pill?: boolean;
  /**
   * If true, applies larger border radius for rounded appearance
   * @default false
   */
  rounded?: boolean;
  /**
   * If true, displays a dot indicator before the content
   * Useful for status indicators
   * @default false
   */
  dot?: boolean;
  /**
   * If true, displays the badge with an outline style instead of filled
   * @default false
   */
  outline?: boolean;
  /**
   * If false, uses solid variant color as background with contrasting text
   * If true, uses light variant color with darker text
   * @default true
   */
  lightMode?: boolean;
  /**
   * If true/false, applies dark or light text color class
   * Overrides automatic contrast color selection
   */
  darkText?: boolean;
  /**
   * Maximum content length before truncation
   * Useful for limiting badge text length
   */
  maxLength?: number;
  /**
   * Icon to display before the badge content
   */
  icon?: ReactNode;
  /**
   * Badge content - text, numbers, or custom elements
   */
  children: ReactNode;
  /**
   * Callback fired when badge is clicked
   */
  onRemove?: (event: MouseEvent<HTMLButtonElement>) => void;
}
