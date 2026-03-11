import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface ChipProps {
  /**
   * The label text to display inside the chip
   */
  label: string;
  /**
   * Size of the chip
   * @default 'md'
   */
  size?: Size;
  /**
   * Visual style variant
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'light';
  /**
   * Color theme of the chip
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * Icon to display at the start of the chip
   */
  icon?: ReactNode;
  /**
   * Avatar image URL to display at the start
   */
  avatar?: string;
  /**
   * If true, shows a delete/close button
   * @default false
   */
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Callback when chip is clicked
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  /**
   * If true, chip cannot be interacted with
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Custom aria-label for accessibility
   */
  'aria-label'?: string;
  /**
   * Data attribute for testing
   */
  'data-testid'?: string;
}