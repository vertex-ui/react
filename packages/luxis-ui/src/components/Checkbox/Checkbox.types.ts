import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * If true, the checkbox is checked
   */
  checked?: boolean;
  /**
   * If true, the checkbox appears indeterminate
   * @default false
   */
  indeterminate?: boolean;
  /**
   * If true, the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The label for the checkbox
   */
  label?: React.ReactNode;
  /**
   * The size of the checkbox
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the checkbox
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * If true, displays error styling
   * @default false
   */
  error?: boolean;
  /**
   * Helper text displayed below the checkbox
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
   * Additional CSS class name for the visual checkbox box
   */
  boxClassName?: string;
}