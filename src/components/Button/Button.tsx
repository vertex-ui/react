import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning';
  /**
   * Size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, button will take full width of its container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Loading state - shows loading indicator and disables interaction
   * When true, the button becomes unclickable and shows a spinner
   * @default false
   */
  loading?: boolean;
  /**
   * Icon to display before button text
   * Pass any React node (icon component, emoji, etc.)
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after button text
   * Pass any React node (icon component, emoji, etc.)
   */
  rightIcon?: React.ReactNode;
  /**
   * If true, renders the button as an icon-only button (no text padding)
   * Content should be an icon element
   * @default false
   */
  iconOnly?: boolean;
  /**
   * Custom loading text to display when loading is true
   * @default undefined (uses children content)
   */
  loadingText?: string;
  /**
   * If true, renders button as a link element with button styling
   * Requires href prop when true
   * @default false
   */
  asLink?: boolean;
  /**
   * URL when rendering as link (requires asLink=true)
   */
  href?: string;
  /**
   * Target attribute when rendering as link
   */
  target?: string;
  /**
   * Rel attribute when rendering as link
   */
  rel?: string;
}

/**
 * Button component - Primary interactive element for user actions
 *
 * A comprehensive button component with multiple variants, sizes, loading states,
 * and icon support. Can also render as a link with button styling.
 *
 * @example
 * Basic usage
 * ```tsx
 * <Button variant="primary" size="medium" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * ```
 *
 * @example
 * With icons
 * ```tsx
 * <Button variant="primary" leftIcon={<SaveIcon />}>
 *   Save Changes
 * </Button>
 * <Button variant="secondary" rightIcon={<ArrowIcon />}>
 *   Next
 * </Button>
 * ```
 *
 * @example
 * Loading state
 * ```tsx
 * <Button loading loadingText="Saving...">
 *   Save
 * </Button>
 * ```
 *
 * @example
 * As link
 * ```tsx
 * <Button asLink href="/dashboard" variant="primary">
 *   Go to Dashboard
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      iconOnly = false,
      loadingText,
      asLink = false,
      href,
      target,
      rel,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const classNames = [
      'vtx-button',
      `vtx-button--${variant}`,
      `vtx-button--${size}`,
      fullWidth && 'vtx-button--full-width',
      loading && 'vtx-button--loading',
      iconOnly && 'vtx-button--icon-only',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const content = (
      <>
        {loading && (
          <span className="vtx-button__spinner" role="status" aria-label="Loading">
            <svg className="vtx-button__spinner-icon" viewBox="0 0 24 24">
              <circle
                className="vtx-button__spinner-circle"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="3"
              />
            </svg>
          </span>
        )}
        {!loading && leftIcon && <span className="vtx-button__icon-left">{leftIcon}</span>}
        {!iconOnly && (
          <span className="vtx-button__content">
            {loading && loadingText ? loadingText : children}
          </span>
        )}
        {iconOnly && !loading && children}
        {!loading && rightIcon && <span className="vtx-button__icon-right">{rightIcon}</span>}
      </>
    );

    if (asLink && href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : rel}
          className={classNames}
          aria-disabled={disabled || loading}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={classNames}
        disabled={disabled || loading}
        aria-busy={loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
