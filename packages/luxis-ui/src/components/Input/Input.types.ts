import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label text displayed above the input
   */
  label?: string;
  /**
   * Helper text displayed below the input
   * Provides additional context or instructions
   */
  helperText?: string;
  /**
   * Error message - when provided, input is shown in error state
   * Takes precedence over helperText when both are present
   */
  error?: string;
  /**
   * Success message - when provided, input is shown in success state
   */
  success?: string;
  /**
   * Size of the input
   * @default theme.defaultSize
   */
  size?: Size;
  /**
   * If true, input will take full width of its container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Icon or element to display at the start of the input
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon or element to display at the end of the input
   */
  rightIcon?: React.ReactNode;
  /**
   * If true, shows a clear button when input has value
   * @default false
   */
  clearable?: boolean;
  /**
   * Callback fired when clear button is clicked
   */
  onClear?: () => void;
  /**
   * If true, adds a character counter below the input
   * Requires maxLength prop to be set
   * @default false
   */
  showCount?: boolean;
  /**
   * Custom class name for the wrapper element
   */
  wrapperClassName?: string;
  /**
   * Custom class name for the label element
   */
  labelClassName?: string;
  /**
   * Custom class name for the input element itself
   */
  inputClassName?: string;
  /**
   * Prefix text to display before input value
   */
  prefix?: string;
  /**
   * Suffix text to display after input value
   */
  suffix?: string;
}