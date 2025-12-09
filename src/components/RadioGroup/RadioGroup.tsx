import React, { forwardRef, useState } from 'react';
import { Radio } from '../Radio/Radio';
import './RadioGroup.css';

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
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
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

/**
 * RadioGroup component - Manages a group of related radio buttons
 *
 * The RadioGroup component provides a convenient way to manage multiple
 * radio buttons with shared state, labels, and error handling.
 *
 * @example
 * Basic usage
 * ```tsx
 * <RadioGroup
 *   name="plan"
 *   label="Select your plan"
 *   options={[
 *     { value: 'basic', label: 'Basic' },
 *     { value: 'pro', label: 'Pro' },
 *     { value: 'enterprise', label: 'Enterprise' },
 *   ]}
 * />
 * ```
 *
 * @example
 * Controlled mode
 * ```tsx
 * const [selected, setSelected] = useState('basic');
 * <RadioGroup
 *   name="plan"
 *   label="Plan"
 *   options={options}
 *   value={selected}
 *   onChange={setSelected}
 * />
 * ```
 *
 * @example
 * Horizontal layout
 * ```tsx
 * <RadioGroup
 *   name="answer"
 *   label="Your answer"
 *   options={options}
 *   orientation="horizontal"
 * />
 * ```
 *
 * @example
 * With error state
 * ```tsx
 * <RadioGroup
 *   name="required"
 *   label="Required selection"
 *   options={options}
 *   error
 *   helperText="Please select an option"
 * />
 * ```
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      label,
      options,
      value: controlledValue,
      defaultValue,
      onChange,
      disabled = false,
      error = false,
      helperText,
      orientation = 'vertical',
      size = 'medium',
      variant = 'primary',
      className = '',
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);

    // Determine if component is controlled
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    // Handle radio change
    const handleChange = (radioValue: string) => {
      if (!isControlled) {
        setInternalValue(radioValue);
      }

      onChange?.(radioValue);
    };

    // Build class names
    const classNames = [
      'vtx-radio-group',
      `vtx-radio-group--${orientation}`,
      error && 'vtx-radio-group--error',
      disabled && 'vtx-radio-group--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        role="radiogroup"
        aria-label={typeof label === 'string' ? label : undefined}
        {...props}
      >
        {label && <div className="vtx-radio-group-label">{label}</div>}
        <div className="vtx-radio-group-options">
          {options.map((option) => {
            const isChecked = currentValue === option.value;
            const isDisabled = disabled || option.disabled;

            return (
              <Radio
                key={option.value}
                name={name}
                value={option.value}
                label={option.label}
                checked={isChecked}
                disabled={isDisabled}
                error={error}
                size={size}
                variant={variant}
                onChange={() => handleChange(option.value)}
              />
            );
          })}
        </div>
        {helperText && <div className="vtx-radio-group-helper-text">{helperText}</div>}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup as React.FC<
  RadioGroupProps & React.RefAttributes<HTMLDivElement>
>;