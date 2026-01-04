import React from 'react';
import { useId } from '../../hooks';
import { Size } from '../../theme';
import './FormControl.css';

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Label text displayed above the form field
   */
  label?: string;
  /**
   * Helper text displayed below the form field
   * Provides additional context or instructions
   */
  helperText?: string;
  /**
   * Error message - when provided, field is shown in error state
   * Takes precedence over helperText when both are present
   */
  error?: string;
  /**
   * Success message - when provided, field is shown in success state
   */
  success?: string;
  /**
   * Size of the form control
   * Passed to child components if they support size prop
   * @default theme.defaultSize
   */
  size?: Size;
  /**
   * If true, form control will take full width of its container
   * @default true
   */
  fullWidth?: boolean;
  /**
   * If true, adds required indicator to label
   * @default false
   */
  required?: boolean;
  /**
   * If true, applies disabled styling
   * @default false
   */
  disabled?: boolean;
  /**
   * Custom class name for the wrapper element
   */
  wrapperClassName?: string;
  /**
   * Custom class name for the label element
   */
  labelClassName?: string;
  /**
   * Spacing between form controls when stacked
   * @default 'md'
   */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  /**
   * Form control children (Input, Textarea, Select, etc.)
   */
  children: React.ReactNode;
  /**
   * Custom id for accessibility
   */
  id?: string;
  /**
   * Position of the label
   * @default 'top'
   */
  labelPosition?: 'top' | 'left';
}

/**
 * FormControl component - Wrapper for form inputs with consistent spacing and layout
 *
 * Provides consistent label, helper text, error handling, and spacing for all form inputs.
 * Works with Input, Textarea, Select, RichTextEditor, and custom form components.
 *
 * @example
 * Basic usage
 * ```tsx
 * <FormControl label="Email" helperText="Enter your email address">
 *   <Input type="email" placeholder="you@example.com" />
 * </FormControl>
 * ```
 *
 * @example
 * With error state
 * ```tsx
 * <FormControl label="Password" error="Password is required" required>
 *   <Input type="password" />
 * </FormControl>
 * ```
 *
 * @example
 * Form with multiple fields
 * ```tsx
 * <div>
 *   <FormControl label="First Name" required>
 *     <Input />
 *   </FormControl>
 *   <FormControl label="Last Name" required>
 *     <Input />
 *   </FormControl>
 *   <FormControl label="Bio" helperText="Tell us about yourself">
 *     <Textarea />
 *   </FormControl>
 * </div>
 * ```
 *
 * @example
 * Horizontal label
 * ```tsx
 * <FormControl label="Email" labelPosition="left">
 *   <Input type="email" />
 * </FormControl>
 * ```
 */
const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (
    {
      label,
      helperText,
      error,
      success,
      size,
      fullWidth = true,
      required = false,
      disabled = false,
      wrapperClassName = '',
      labelClassName = '',
      spacing = 'md',
      children,
      id: providedId,
      labelPosition = 'top',
      className = '',
      ...props
    },
    ref
  ) => {
    const generatedId = useId('form-control');
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const successId = `${id}-success`;

    const hasError = Boolean(error);
    const hasSuccess = Boolean(success) && !hasError;

    const wrapperClassNames = [
      'vtx-form-control',
      `vtx-form-control--spacing-${spacing}`,
      `vtx-form-control--label-${labelPosition}`,
      fullWidth && 'vtx-form-control--full-width',
      hasError && 'vtx-form-control--error',
      hasSuccess && 'vtx-form-control--success',
      disabled && 'vtx-form-control--disabled',
      wrapperClassName,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={wrapperClassNames} {...props}>
        <div className="vtx-form-control__inner">
          {label && (
            <label
              htmlFor={`${id}-input`}
              className={`vtx-form-control__label ${labelClassName}`.trim()}
            >
              {label}
              {required && (
                <span className="vtx-form-control__label-required" aria-label="required">
                  {' '}
                  *
                </span>
              )}
            </label>
          )}
          <div className="vtx-form-control__field">{children}</div>
        </div>
        {(helperText || error || success) && (
          <div className="vtx-form-control__messages">
            {helperText && !error && !success && (
              <p id={helperId} className="vtx-form-control__helper">
                {helperText}
              </p>
            )}
            {error && (
              <p id={errorId} className="vtx-form-control__error" role="alert">
                {error}
              </p>
            )}
            {success && (
              <p id={successId} className="vtx-form-control__success" role="status">
                {success}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

FormControl.displayName = 'FormControl';

export default FormControl as React.FC<FormControlProps & React.RefAttributes<HTMLDivElement>>;
export { FormControl };