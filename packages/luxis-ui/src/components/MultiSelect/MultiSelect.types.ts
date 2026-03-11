import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface MultiSelectOption {
  /**
   * Value of the option
   */
  value: string | number;
  /**
   * Display label for the option
   */
  label: string;
  /**
   * If true, option cannot be selected
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional group this option belongs to
   */
  group?: string;
}

export interface MultiSelectProps {
  /**
   * Label text displayed above the select
   */
  label?: string;
  /**
   * Helper text displayed below the select
   */
  helperText?: string;
  /**
   * Error message - when provided, select is shown in error state
   */
  error?: string;
  /**
   * Success message - when provided, select is shown in success state
   */
  success?: string;
  /**
   * Size of the select
   * @default 'medium'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * If true, select will take full width of its container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Options to display in the select dropdown
   */
  options: MultiSelectOption[];
  /**
   * Selected values
   */
  value?: (string | number)[];
  /**
   * Default selected values for uncontrolled component
   */
  defaultValue?: (string | number)[];
  /**
   * Placeholder text shown when no option is selected
   */
  placeholder?: string;
  /**
   * Custom class name for the wrapper element
   */
  className?: string;
  /**
   * If true, options will be grouped
   * @default false
   */
  grouped?: boolean;
  /**
   * Property name or function to extract the display label from each option
   */
  getOptionLabel?: string | ((option: any) => string);
  /**
   * Property name or function to extract the value from each option
   */
  getOptionValue?: string | ((option: any) => string | number);
  /**
   * Property name or function to determine if an option is disabled
   */
  getOptionDisabled?: string | ((option: any) => boolean);
  /**
   * Property name or function to extract the group from each option
   */
  getOptionGroup?: string | ((option: any) => string);
  /**
   * Callback fired when selection changes
   */
  onChange?: (values: (string | number)[], selectedOptions: MultiSelectOption[]) => void;
  /**
   * If true, component is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, field is required
   * @default false
   */
  required?: boolean;
  /**
   * Unique identifier
   */
  id?: string;
  /**
   * Name attribute for form integration
   */
  name?: string;
  /**
   * Selection style
   * @default 'checkbox'
   */
  selectionStyle?: 'checkbox' | 'checkmark';
  /**
   * If true, shows a searchable input in the dropdown
   * @default false
   */
  searchable?: boolean;
  /**
   * If true, shows Select All / Clear All actions
   * @default false
   */
  showSelectAll?: boolean;
  /**
   * Maximum number of chips to display before showing "+N more"
   * @default undefined (shows all)
   */
  maxChipsDisplay?: number;
  /**
   * Custom chip color
   * @default 'primary'
   */
  chipColor?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * Custom chip variant
   * @default 'light'
   */
  chipVariant?: 'filled' | 'outlined' | 'light';
  /**
   * If true, shows a loading spinner in the dropdown
   * @default false
   */
  loading?: boolean;
}