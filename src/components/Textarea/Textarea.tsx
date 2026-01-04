import React, { TextareaHTMLAttributes } from 'react';
import { useId } from '../../hooks';
import { CloseSmallIcon } from '../../icons/IconComponents';
import { Size, useThemeContext } from '../../theme';
import './Textarea.css';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Label text displayed above the textarea
   */
  label?: string;
  /**
   * Helper text displayed below the textarea
   * Provides additional context or instructions
   */
  helperText?: string;
  /**
   * Error message - when provided, textarea is shown in error state
   * Takes precedence over helperText when both are present
   */
  error?: string;
  /**
   * Success message - when provided, textarea is shown in success state
   */
  success?: string;
  /**
   * Size of the textarea
   * @default theme.defaultSize
   */
  size?: Size;
  /**
   * If true, textarea will take full width of its container
   * @default true
   */
  fullWidth?: boolean;
  /**
   * If true, shows a clear button when textarea has value
   * @default false
   */
  clearable?: boolean;
  /**
   * Callback fired when clear button is clicked
   */
  onClear?: () => void;
  /**
   * If true, shows a character counter below the textarea
   * When maxLength is provided, it automatically shows the counter
   * @default false
   */
  showCount?: boolean;
  /**
   * Custom class name for the wrapper element
   */
  wrapperClassName?: string;
  /**
   * Custom class name for the label element
   */
  labelClassName?: string;
  /**
   * Custom class name for the textarea element itself
   */
  textareaClassName?: string;
  /**
   * If true, textarea will automatically grow in height based on content
   * @default false
   */
  autoResize?: boolean;
  /**
   * Minimum number of rows to display
   * @default 3
   */
  minRows?: number;
  /**
   * Maximum number of rows to display (only used with autoResize)
   */
  maxRows?: number;
}

/**
 * Textarea component - Multi-line text input field with label, helper text, validation states, and rich features
 *
 * A comprehensive textarea component with support for auto-resizing, character counting,
 * clear functionality, and various validation states.
 *
 * @example
 * Basic usage
 * ```tsx
 * <Textarea
 *   label="Description"
 *   placeholder="Enter your description"
 *   helperText="Provide a detailed description"
 * />
 * ```
 *
 * @example
 * With error state
 * ```tsx
 * <Textarea
 *   label="Bio"
 *   error="Bio must be at least 20 characters"
 *   value={bio}
 *   onChange={(e) => setBio(e.target.value)}
 * />
 * ```
 *
 * @example
 * With character counter
 * ```tsx
 * <Textarea
 *   label="Comment"
 *   maxLength={500}
 *   showCount
 *   value={comment}
 *   onChange={(e) => setComment(e.target.value)}
 * />
 * ```
 *
 * @example
 * Auto-resizing textarea
 * ```tsx
 * <Textarea
 *   label="Notes"
 *   autoResize
 *   minRows={3}
 *   maxRows={10}
 *   value={notes}
 *   onChange={(e) => setNotes(e.target.value)}
 * />
 * ```
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      success,
      size,
      fullWidth = true,
      clearable = false,
      onClear,
      showCount = false,
      className = '',
      wrapperClassName = '',
      labelClassName = '',
      textareaClassName = '',
      id: providedId,
      disabled = false,
      required = false,
      value,
      maxLength,
      autoResize = false,
      minRows = 3,
      maxRows,
      rows: providedRows,
      onChange,
      ...props
    },
    ref
  ) => {
    const { theme } = useThemeContext();
    const textareaSize = size || theme.defaultSize;
    
    const generatedId = useId('textarea');
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const successId = `${id}-success`;

    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

    const hasError = Boolean(error);
    const hasSuccess = Boolean(success) && !hasError;
    const showClearButton = clearable && value && String(value).length > 0 && !disabled;

    const describedBy = [
      helperText && !error && !success && helperId,
      error && errorId,
      success && successId,
    ]
      .filter(Boolean)
      .join(' ');

    const wrapperClassNames = [
      'vtx-textarea-wrapper',
      !fullWidth && 'vtx-textarea-wrapper--inline',
      wrapperClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const textareaContainerClassNames = [
      'vtx-textarea-container',
      `vtx-textarea-container--${textareaSize}`,
      hasError && 'vtx-textarea-container--error',
      hasSuccess && 'vtx-textarea-container--success',
      disabled && 'vtx-textarea-container--disabled',
      showClearButton && 'vtx-textarea-container--with-clear',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const textareaClasses = [
      'vtx-textarea',
      autoResize && 'vtx-textarea--auto-resize',
      textareaClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClear = () => {
      onClear?.();
      // Focus the textarea after clearing
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    };

    const currentLength = value ? String(value).length : 0;
    const showCounter = (showCount || maxLength) && maxLength !== undefined;

    // Auto-resize functionality
    React.useEffect(() => {
      if (autoResize && textareaRef.current) {
        const textarea = textareaRef.current;
        
        // Reset height to auto to get the correct scrollHeight
        textarea.style.height = 'auto';
        
        // Calculate new height
        let newHeight = textarea.scrollHeight;
        
        // Apply min/max row constraints
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
        if (minRows) {
          const minHeight = lineHeight * minRows;
          newHeight = Math.max(newHeight, minHeight);
        }
        if (maxRows) {
          const maxHeight = lineHeight * maxRows;
          newHeight = Math.min(newHeight, maxHeight);
        }
        
        textarea.style.height = `${newHeight}px`;
      }
    }, [value, autoResize, minRows, maxRows]);

    const handleRef = (node: HTMLTextAreaElement | null) => {
      textareaRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
    };

    const rows = autoResize ? minRows : (providedRows || minRows);

    // Calculate if character count is close to limit
    const isNearLimit = maxLength && currentLength >= maxLength * 0.9;
    const isAtLimit = maxLength && currentLength >= maxLength;

    return (
      <div className={wrapperClassNames}>
        {label && (
          <label htmlFor={id} className={`vtx-textarea-label ${labelClassName}`.trim()}>
            {label}
            {required && (
              <span className="vtx-textarea-label__required" aria-label="required">
                {' '}
                *
              </span>
            )}
          </label>
        )}
        <div className={textareaContainerClassNames}>
          <textarea
            ref={handleRef}
            id={id}
            className={textareaClasses}
            disabled={disabled}
            required={required}
            value={value}
            maxLength={maxLength}
            rows={rows}
            aria-invalid={hasError}
            aria-describedby={describedBy || undefined}
            onChange={handleChange}
            {...props}
          />
          {showClearButton && (
            <button
              type="button"
              className="vtx-textarea-clear"
              onClick={handleClear}
              aria-label="Clear textarea"
              tabIndex={-1}
            >
              <CloseSmallIcon size={16} />
            </button>
          )}
        </div>
        <div className="vtx-textarea-footer">
          <div className="vtx-textarea-footer-left">
            {helperText && !error && !success && (
              <p id={helperId} className="vtx-textarea-helper">
                {helperText}
              </p>
            )}
            {error && (
              <p id={errorId} className="vtx-textarea-error" role="alert">
                {error}
              </p>
            )}
            {success && (
              <p id={successId} className="vtx-textarea-success" role="status">
                {success}
              </p>
            )}
          </div>
          {showCounter && (
            <p 
              className={`vtx-textarea-counter ${
                isAtLimit ? 'vtx-textarea-counter--at-limit' : 
                isNearLimit ? 'vtx-textarea-counter--near-limit' : ''
              }`.trim()}
              aria-live="polite"
            >
              {currentLength} / {maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea as React.FC<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };

