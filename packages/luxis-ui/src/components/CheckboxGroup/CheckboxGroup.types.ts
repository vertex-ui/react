import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface CheckboxOption {
  /**
   * The value of the checkbox
   */
  value: string;
  /**
   * The label for the checkbox
   */
  label: React.ReactNode;
  /**
   * If true, the checkbox is disabled
   */
  disabled?: boolean;
}

export interface CheckboxGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * The label for the checkbox group
   */
  label?: React.ReactNode;
  /**
   * Array of checkbox options
   */
  options: CheckboxOption[];
  /**
   * Array of selected values
   */
  value?: string[];
  /**
   * Default selected values for uncontrolled mode
   */
  defaultValue?: string[];
  /**
   * Callback fired when the selection changes
   */
  onChange?: (value: string[]) => void;
  /**
   * If true, all checkboxes are disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, displays error styling
   * @default false
   */
  error?: boolean;
  /**
   * Helper text displayed below the group
   */
  helperText?: React.ReactNode;
  /**
   * The layout orientation of the checkboxes
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The size of the checkboxes
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional CSS class name
   */
  className?: string;
}