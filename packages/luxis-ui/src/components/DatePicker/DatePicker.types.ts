import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface DatePickerProps {
  /**
   * The selected date value
   */
  value?: Date | null;
  /**
   * Callback fired when the date changes
   */
  onChange?: (date: Date | null) => void;
  /**
   * Label text displayed above the input
   */
  label?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Success message
   */
  success?: string;
  /**
   * Size of the input
   */
  size?: Size;
  /**
   * If true, input will take full width of its container
   */
  fullWidth?: boolean;
  /**
   * If true, the input is disabled
   */
  disabled?: boolean;
  /**
   * If true, the field is required
   */
  required?: boolean;
  /**
   * Minimum selectable date
   */
  minDate?: Date;
  /**
   * Maximum selectable date
   */
  maxDate?: Date;
  /**
   * Array of disabled dates
   */
  disabledDates?: Date[];
  /**
   * Custom function to determine if a date should be disabled
   */
  isDateDisabled?: (date: Date) => boolean;
  /**
   * Date format for display
   * @default 'MM/DD/YYYY'
   */
  format?: string;
  /**
   * Show today button in footer
   * @default true
   */
  showToday?: boolean;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Custom class name for the input
   */
  inputClassName?: string;
  /**
   * Custom class name for the dropdown
   */
  dropdownClassName?: string;
  /**
   * If true, shows a clear button when input has value
   * @default false
   */
  clearable?: boolean;
}