import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface RadioOption {
  /**
   * The value of the radio
   */
  value: string;
  /**
   * The label for the radio
   */
  label: React.ReactNode;
  /**
   * If true, the radio is disabled
   */
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * The name for the radio group (all radios will share this name)
   */
  name: string;
  /**
   * The label for the radio group
   */
  label?: React.ReactNode;
  /**
   * Array of radio options
   */
  options: RadioOption[];
  /**
   * The selected value
   */
  value?: string;
  /**
   * Default selected value for uncontrolled mode
   */
  defaultValue?: string;
  /**
   * Callback fired when the selection changes
   */
  onChange?: (value: string) => void;
  /**
   * If true, all radios are disabled
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
   * The layout orientation of the radios
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The size of the radios
   * @default theme.defaultSize
   */
  size?: Size;
  /**
   * The variant of the radios
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * Additional CSS class name
   */
  className?: string;
}