import React, { useState } from 'react';
import { useThemeContext } from '../../theme/ThemeProvider';
import './Alert.css';

export interface AlertProps {
  /**
   * Content of the alert (primary message, can be any ReactNode)
   */
  children?: React.ReactNode;
  /**
   * Alert title
   */
  title?: string;
  /**
   * Alert description - alternative to children for simple text
   */
  description?: string;
  /**
   * Visual variant of the alert
   * @default 'info'
   */
  variant?: 'success' | 'error' | 'warning' | 'info' | 'neutral';
  /**
   * Visual style of the alert
   * @default 'subtle'
   */
  alertStyle?: 'filled' | 'outlined' | 'subtle' | 'left-accent';
  /** Size of the alert. Defaults to theme defaultSize or 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Custom icon or false to hide icon
   * If not provided, shows default icon based on variant
   */
  icon?: React.ReactNode | false;
  /**
   * If true, shows close button
   * @default false
   */
  dismissible?: boolean;
  /**
   * Callback fired when alert is dismissed
   */
  onClose?: () => void;
  /**
   * Action element (button or link) displayed on the right
   */
  action?: React.ReactNode;
  /**
   * If true, alert takes full width of container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Custom inline styles
   */
  style?: React.CSSProperties;
  /**
   * Role attribute for accessibility
   * @default 'alert'
   */
  role?: string;
}

// Default icons for each variant
const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm-1.293 14.707l-3.414-3.414 1.414-1.414L9 12.172l5.293-5.293 1.414 1.414-6.707 6.707z"
      fill="currentColor"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z"
      fill="currentColor"
    />
  </svg>
);

const WarningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 0L0 18h20L10 0zm1 15H9v-2h2v2zm0-4H9V7h2v4z" fill="currentColor" />
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"
      fill="currentColor"
    />
  </svg>
);

const NeutralIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M10 6v5M10 13v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M12 4L4 12M4 4l8 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const variantIconMap = {
  success: <CheckCircleIcon />,
  error: <ErrorIcon />,
  warning: <WarningIcon />,
  info: <InfoIcon />,
  neutral: <NeutralIcon />,
};

/**
 * Alert component - Displays important messages and notifications
 *
 * A flexible alert component supporting multiple variants, styles, and interactive features.
 * Can display simple messages or complex content with titles, actions, and custom icons.
 *
 * @example
 * Simple alert with children
 * ```tsx
 * <Alert variant="success">
 *   Your changes have been saved!
 * </Alert>
 * ```
 *
 * @example
 * Alert with title and description
 * ```tsx
 * <Alert
 *   variant="error"
 *   title="Error occurred"
 *   description="Unable to connect to the server."
 *   dismissible
 *   onClose={() => console.log('closed')}
 * />
 * ```
 *
 * @example
 * Alert with action button
 * ```tsx
 * <Alert
 *   variant="warning"
 *   title="Update available"
 *   style="left-accent"
 *   action={<Button size="small">Update Now</Button>}
 * >
 *   A new version is available. Update to get the latest features.
 * </Alert>
 * ```
 *
 * @example
 * Alert with custom icon
 * ```tsx
 * <Alert
 *   variant="info"
 *   icon={<CustomIcon />}
 *   title="Custom notification"
 * >
 *   This alert uses a custom icon.
 * </Alert>
 * ```
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      title,
      description,
      variant = 'info',
      alertStyle = 'subtle',
      size,
      icon,
      dismissible = false,
      onClose,
      action,
      fullWidth = false,
      className = '',
      style,
      role = 'alert',
      ...props
    },
    ref
  ) => {
    const { theme } = useThemeContext();
    const alertSize = size || theme?.defaultSize || 'md';
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
      setIsVisible(false);
      onClose?.();
    };

    if (!isVisible) {
      return null;
    }

    // Determine which icon to show
    const showIcon = icon !== false;
    const displayIcon = icon === undefined ? variantIconMap[variant] : icon;

    // Determine content to display
    const hasContent = children || description;

    return (
      <div
        ref={ref}
        className={`
          alert
          alert--${variant}
          alert--${alertStyle}
          alert--${alertSize}
          ${fullWidth ? 'alert--full-width' : ''}
          ${className}
        `.trim()}
        style={style}
        role={role}
        {...props}
      >
        {showIcon && <div className="alert-icon">{displayIcon}</div>}

        <div className="alert-content">
          {title && <div className="alert-title">{title}</div>}
          {hasContent && <div className="alert-message">{children ?? description}</div>}
        </div>

        {action && <div className="alert-action">{action}</div>}

        {dismissible && (
          <button
            type="button"
            className="alert-close"
            onClick={handleClose}
            aria-label="Close alert"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert as React.FC<
  AlertProps & React.RefAttributes<HTMLDivElement>
>;
export { Alert };
