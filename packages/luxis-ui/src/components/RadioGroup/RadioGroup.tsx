"use client";

import React, { useState } from 'react';
import { Radio } from '../Radio/Radio';
import { Size, useThemeContext } from '../../theme';
import './RadioGroup.css';
import type { RadioOption, RadioGroupProps } from './RadioGroup.types';





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
const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
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
      size,
      variant = 'primary',
      className = '',
      ...props
    },
    ref
  ) => {
    const { theme } = useThemeContext();
    const radioSize = size || theme.defaultSize;
    
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
      'lxs-radio-group',
      `lxs-radio-group--${orientation}`,
      error && 'lxs-radio-group--error',
      disabled && 'lxs-radio-group--disabled',
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
        {label && <div className="lxs-radio-group-label">{label}</div>}
        <div className="lxs-radio-group-options">
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
                size={radioSize}
                variant={variant}
                onChange={() => handleChange(option.value)}
              />
            );
          })}
        </div>
        {helperText && <div className="lxs-radio-group-helper-text">{helperText}</div>}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };