import type { InputHTMLAttributes, ReactNode } from 'react';
import type { Size } from '../../theme';

export interface AutocompleteOption {
  /**
   * Value of the option
   */
  value: string;
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Optional description or secondary text
   */
  description?: string;
  /**
   * If true, option cannot be selected
   * @default false
   */
  disabled?: boolean;
  /**
   * Icon to display before label
   */
  icon?: ReactNode;
}

export interface AutocompleteProps<T = any>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'onSelect'> {
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
   * Options to display in the autocomplete dropdown
   */
  options: readonly T[];
  /**
   * Property name or function to extract the display label from each option
   * @default 'label'
   * @example
   * getOptionLabel="productName" // uses option.productName
   * getOptionLabel={(option) => option.firstName + ' ' + option.lastName}
   */
  getOptionLabel?: keyof T | ((option: T) => string);
  /**
   * Property name or function to extract the value from each option
   * @default 'value'
   * @example
   * getOptionValue="id" // uses option.id
   * getOptionValue={(option) => option.uuid}
   */
  getOptionValue?: keyof T | ((option: T) => string);
  /**
   * Property name or function to determine if an option is disabled
   * @default 'disabled'
   * @example
   * getOptionDisabled="isInactive" // uses option.isInactive
   * getOptionDisabled={(option) => option.stock === 0}
   */
  getOptionDisabled?: keyof T | ((option: T) => boolean);
  /**
   * Property name or function to extract the description from each option
   * @default 'description'
   */
  getOptionDescription?: keyof T | ((option: T) => string | undefined);
  /**
   * Property name or function to extract the icon from each option
   * @default 'icon'
   */
  getOptionIcon?: keyof T | ((option: T) => ReactNode);
  /**
   * Message to display when no options are available
   * @default 'No options'
   */
  noOptionsMessage?: string;
  /**
   * If true, shows a loading spinner
   * @default false
   */
  loading?: boolean;
  /**
   * Loading message to display
   * @default 'Loading...'
   */
  loadingMessage?: string;
  /**
   * Callback fired when input value changes
   */
  onChange?: (value: string) => void;
  /**
   * Callback fired when an option is selected
   * Provides the selected option and its value
   */
  onSelectOption?: (value: string, option: T) => void;
  /**
   * If true, shows search icon on the left
   * @default false
   */
  showSearchIcon?: boolean;
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
   * Custom class name for the dropdown element
   */
  dropdownClassName?: string;
  /**
   * Custom render function for options
   */
  renderOption?: (option: T, index: number) => ReactNode;
  /**
   * Input value (controlled)
   */
  value?: string;
  /**
   * If true, opens dropdown on focus even if input is empty
   * @default true
   */
  openOnFocus?: boolean;
  /**
   * Minimum characters to type before showing options
   * @default 0
   */
  minSearchLength?: number;
  /**
   * If true, disables built-in client-side filtering.
   * Use this for async/server-side search where you supply pre-filtered options via `onChange`.
   * @default false
   */
  disableClientFilter?: boolean;
}
