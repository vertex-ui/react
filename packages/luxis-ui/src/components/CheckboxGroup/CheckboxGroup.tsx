"use client";

import React, { useState } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { useThemeContext } from '../../theme/ThemeProvider';
import './CheckboxGroup.css';
import type { CheckboxOption, CheckboxGroupProps } from './CheckboxGroup.types';





/**
 * CheckboxGroup component - Manages a group of related checkboxes
 *
 * The CheckboxGroup component provides a convenient way to manage multiple
 * checkboxes with shared state, labels, and error handling.
 *
 * @example
 * Basic usage
 * ```tsx
 * <CheckboxGroup
 *   label="Select your interests"
 *   options={[
 *     { value: 'sports', label: 'Sports' },
 *     { value: 'music', label: 'Music' },
 *     { value: 'travel', label: 'Travel' },
 *   ]}
 * />
 * ```
 *
 * @example
 * Controlled mode
 * ```tsx
 * const [selected, setSelected] = useState(['sports']);
 * <CheckboxGroup
 *   label="Interests"
 *   options={options}
 *   value={selected}
 *   onChange={setSelected}
 * />
 * ```
 *
 * @example
 * Horizontal layout
 * ```tsx
 * <CheckboxGroup
 *   label="Preferences"
 *   options={options}
 *   orientation="horizontal"
 * />
 * ```
 *
 * @example
 * With error state
 * ```tsx
 * <CheckboxGroup
 *   label="Required selection"
 *   options={options}
 *   error
 *   helperText="Please select at least one option"
 * />
 * ```
 */
const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
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
      className = '',
      ...props
    },
    ref
  ) => {
    // Get theme default size if size prop is not provided
    const { theme } = useThemeContext();
    const groupSize = size || theme.defaultSize || 'md';
    
    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue || []);

    // Determine if component is controlled
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    // Handle checkbox change
    const handleChange = (checkboxValue: string, checked: boolean) => {
      const newValue = checked
        ? [...currentValue, checkboxValue]
        : currentValue.filter((v) => v !== checkboxValue);

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onChange?.(newValue);
    };

    // Build class names
    const classNames = [
      'lxs-checkbox-group',
      `lxs-checkbox-group--${orientation}`,
      error && 'lxs-checkbox-group--error',
      disabled && 'lxs-checkbox-group--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...props}>
        {label && <div className="lxs-checkbox-group-label">{label}</div>}
        <div className="lxs-checkbox-group-options">
          {options.map((option) => {
            const isChecked = currentValue.includes(option.value);
            const isDisabled = disabled || option.disabled;

            return (
              <Checkbox
                key={option.value}
                label={option.label}
                checked={isChecked}
                disabled={isDisabled}
                error={error}
                size={groupSize}
                onChange={(e) => handleChange(option.value, e.target.checked)}
              />
            );
          })}
        </div>
        {helperText && <div className="lxs-checkbox-group-helper-text">{helperText}</div>}
      </div>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

export { CheckboxGroup };