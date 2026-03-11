import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> {
  /**
   * If true, the radio is checked
   */
  checked?: boolean;
  /**
   * If true, the radio is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The label for the radio
   */
  label?: React.ReactNode;
  /**
   * The size of the radio
   * @default theme.defaultSize
   */
  size?: Size;
  /**
   * The variant of the radio
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * If true, displays error styling
   * @default false
   */
  error?: boolean;
  /**
   * Helper text displayed below the radio
   */
  helperText?: React.ReactNode;
  /**
   * Callback fired when the state is changed
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Additional CSS class name for the container
   */
  className?: string;
  /**
   * Additional CSS class name for the input element
   */
  inputClassName?: string;
}