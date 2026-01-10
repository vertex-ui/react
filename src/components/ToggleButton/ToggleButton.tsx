"use client";

import React, { useId, useRef, useImperativeHandle, useEffect } from 'react';
import { useThemeContext } from '../../theme/ThemeProvider';
import './ToggleButton.css';

export interface ToggleButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * If true, the toggle button is checked
   */
  checked?: boolean;
  /**
   * If true, the toggle button is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The label for the toggle button
   */
  label?: React.ReactNode;
  /**
   * Placement of the label relative to the toggle switch
   * @default 'end'
   */
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
  /**
   * The size of the toggle button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the toggle button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * If true, displays error styling
   * @default false
   */
  error?: boolean;
  /**
   * Helper text displayed below the toggle button
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
   * Additional CSS class name for the input element
   */
  inputClassName?: string;
  /**
   * Icon to display inside the toggle knob (thumb)
   */
  icon?: React.ReactNode;
  /**
   * Icon to display inside the toggle knob when checked. Overrides `icon` when checked.
   */
  checkedIcon?: React.ReactNode;
}

/**
 * ToggleButton component - Allows users to toggle a binary state on or off.
 *
 * The ToggleButton component provides a customizable switch input with support
 * for labels, error states, and three sizes.
 *
 * ## CSS Customization
 *
 * You can customize the toggle button appearance using CSS custom properties:
 *
 * ```css
 * :root {
 *   --vtx-toggle-color: #1976d2;
 *   --vtx-toggle-width: 40px;
 *   --vtx-toggle-height: 24px;
 *   --vtx-toggle-thumb-size: 20px;
 * }
 * ```
 *
 * @example
 * Basic toggle button
 * ```tsx
 * <ToggleButton label="Enable notifications" />
 * ```
 *
 * @example
 * Controlled toggle button with size and variant
 * ```tsx
 * const [checked, setChecked] = useState(false);
 * <ToggleButton
 *   checked={checked}
 *   onChange={(e) => setChecked(e.target.checked)}
 *   label="Dark Mode"
 *   size="lg"
 *   variant="secondary"
 * />
 * ```
 *
 * @example
 * With icons
 * ```tsx
 * <ToggleButton
 *   label="WiFi"
 *   icon={<WifiOffIcon />}
 *   checkedIcon={<WifiIcon />}
 * />
 * ```
 */
const ToggleButton = React.forwardRef<HTMLInputElement, ToggleButtonProps>(
  (
    {
      checked,
      disabled = false,
      label,
      labelPlacement = 'end',
      size,
      variant = 'primary',
      error = false,
      helperText,
      onChange,
      className = '',
      inputClassName = '',
      icon,
      checkedIcon,
      id,
      ...props
    },
    ref
  ) => {
    // Get theme default size if size prop is not provided
    const { theme } = useThemeContext();
    const toggleSize = size || theme.defaultSize || 'md';

    const generatedId = useId();
    const toggleId = id || generatedId;

    // Build class names
    const containerClassNames = [
      'vtx-toggle-button',
      `vtx-toggle-button--${toggleSize}`,
      `vtx-toggle-button--${variant}`,
      disabled && 'vtx-toggle-button--disabled',
      error && 'vtx-toggle-button--error',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const labelClassNames = [
      'vtx-toggle-button-label',
      `vtx-toggle-button-label--${labelPlacement}`
    ].filter(Boolean).join(' ');

    const inputClassNames = ['vtx-toggle-button-input', inputClassName].filter(Boolean).join(' ');

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);

    const displayIcon = (checked && checkedIcon) ? checkedIcon : icon;

    return (
      <div className={containerClassNames}>
        <label className={labelClassNames} htmlFor={toggleId}>
          <span className="vtx-toggle-button-wrapper">
            <input
              ref={inputRef}
              type="checkbox"
              role="switch"
              id={toggleId}
              className={inputClassNames}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
              aria-checked={checked ?? false}
              {...props}
            />
            <span className="vtx-toggle-button-track">
              <span className="vtx-toggle-button-thumb">
                {displayIcon && <span className="vtx-toggle-button-icon">{displayIcon}</span>}
              </span>
            </span>
          </span>
          {label && <span className="vtx-toggle-button-label-text">{label}</span>}
        </label>
        {helperText && <div className="vtx-toggle-button-helper-text">{helperText}</div>}
      </div>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton as React.FC<ToggleButtonProps & React.RefAttributes<HTMLInputElement>>;
export { ToggleButton };
