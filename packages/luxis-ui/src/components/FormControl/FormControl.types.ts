import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Label text displayed above the form field
   */
  label?: string;
  /**
   * Helper text displayed below the form field
   * Provides additional context or instructions
   */
  helperText?: string;
  /**
   * Error message - when provided, field is shown in error state
   * Takes precedence over helperText when both are present
   */
  error?: string;
  /**
   * Success message - when provided, field is shown in success state
   */
  success?: string;
  /**
   * Size of the form control
   * Passed to child components if they support size prop
   * @default theme.defaultSize
   */
  size?: Size;
  /**
   * If true, form control will take full width of its container
   * @default true
   */
  fullWidth?: boolean;
  /**
   * If true, adds required indicator to label
   * @default false
   */
  required?: boolean;
  /**
   * If true, applies disabled styling
   * @default false
   */
  disabled?: boolean;
  /**
   * Custom class name for the wrapper element
   */
  wrapperClassName?: string;
  /**
   * Custom class name for the label element
   */
  labelClassName?: string;
  /**
   * Spacing between form controls when stacked
   * @default 'md'
   */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  /**
   * Form control children (Input, Textarea, Select, etc.)
   */
  children: React.ReactNode;
  /**
   * Custom id for accessibility
   */
  id?: string;
  /**
   * Position of the label
   * @default 'top'
   */
  labelPosition?: 'top' | 'left';
}