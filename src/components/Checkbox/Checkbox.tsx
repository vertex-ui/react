import React, { forwardRef, useId, useRef, useImperativeHandle, useEffect } from 'react';
import './Checkbox.css';

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
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
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
   * Additional CSS class name for the input element
   */
  inputClassName?: string;
}

/**
 * Checkbox component - Allows users to select one or more items from a set
 *
 * The Checkbox component provides a customizable checkbox input with support
 * for labels, error states, indeterminate state, and three sizes.
 *
 * ## CSS Customization
 *
 * You can customize the checkbox appearance using CSS custom properties:
 *
 * ```css
 * :root {
 *   --vtx-checkbox-color: #1976d2;
 *   --vtx-checkbox-size: 20px;
 *   --vtx-checkbox-border-width: 2px;
 *   --vtx-checkbox-border-radius: 4px;
 * }
 * ```
 *
 * @example
 * Basic checkbox
 * ```tsx
 * <Checkbox label="Accept terms and conditions" />
 * ```
 *
 * @example
 * Controlled checkbox
 * ```tsx
 * const [checked, setChecked] = useState(false);
 * <Checkbox
 *   checked={checked}
 *   onChange={(e) => setChecked(e.target.checked)}
 *   label="Subscribe to newsletter"
 * />
 * ```
 *
 * @example
 * With error state
 * ```tsx
 * <Checkbox
 *   label="I agree"
 *   error
 *   helperText="You must agree to continue"
 * />
 * ```
 *
 * @example
 * Indeterminate state
 * ```tsx
 * <Checkbox
 *   label="Select all"
 *   indeterminate
 * />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      indeterminate = false,
      disabled = false,
      label,
      size = 'medium',
      variant = 'primary',
      error = false,
      helperText,
      onChange,
      className = '',
      inputClassName = '',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;

    // Build class names
    const containerClassNames = [
      'vtx-checkbox',
      `vtx-checkbox--${size}`,
      `vtx-checkbox--${variant}`,
      disabled && 'vtx-checkbox--disabled',
      error && 'vtx-checkbox--error',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClassNames = ['vtx-checkbox-input', inputClassName].filter(Boolean).join(' ');

    // Handle ref for indeterminate state
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <div className={containerClassNames}>
        <label className="vtx-checkbox-label" htmlFor={checkboxId}>
          <span className="vtx-checkbox-wrapper">
            <input
              ref={inputRef}
              type="checkbox"
              id={checkboxId}
              className={inputClassNames}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
              {...props}
            />
            <span className="vtx-checkbox-box">
              {/* Check icon */}
              <svg
                className="vtx-checkbox-icon vtx-checkbox-icon--check"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Indeterminate icon */}
              <svg
                className="vtx-checkbox-icon vtx-checkbox-icon--indeterminate"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 12H19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </span>
          {label && <span className="vtx-checkbox-label-text">{label}</span>}
        </label>
        {helperText && <div className="vtx-checkbox-helper-text">{helperText}</div>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
