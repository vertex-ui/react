"use client";

import React, { useState, useCallback, useMemo, useId } from 'react';
import { useThemeContext } from '../../theme';
import type { AlertProps } from './Alert.types';
import './Alert.css';

// Import icons from shared IconComponents
import {
  CheckCircleIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon,
  NeutralIcon,
  CloseIcon
} from '../../icons/IconComponents';

const variantIconMap = {
  success: <CheckCircleIcon size={20} />,
  error: <ErrorIcon size={20} />,
  warning: <WarningIcon size={20} />,
  info: <InfoIcon size={20} />,
  neutral: <NeutralIcon size={20} />,
} as const;

/**
 * Alert component - Displays important messages and notifications
 *
 * A flexible alert component supporting multiple variants, styles, and interactive features.
 * Can display simple messages or complex content with titles, actions, and custom icons.
 *
 * @example
 * <Alert variant="success">
 *   Your changes have been saved!
 * </Alert>
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
    const alertSize = size || theme.defaultSize;
    const [isVisible, setIsVisible] = useState(true);
    const titleId = useId();
    const descriptionId = useId();

    const handleClose = useCallback(() => {
      setIsVisible(false);
      onClose?.();
    }, [onClose]);

    const displayIcon = useMemo(() => {
      return icon === undefined ? variantIconMap[variant] : icon;
    }, [icon, variant]);

    if (!isVisible) {
      return null;
    }

    const showIcon = icon !== false;
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
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={hasContent ? descriptionId : undefined}
        {...props}
      >
        {showIcon && (
          <div className="alert-icon" aria-hidden="true">
            {displayIcon}
          </div>
        )}

        <div className="alert-content">
          {title && (
            <div id={titleId} className="alert-title">
              {title}
            </div>
          )}
          {hasContent && (
            <div id={descriptionId} className="alert-message">
              {children ?? description}
            </div>
          )}
        </div>

        {action && <div className="alert-action">{action}</div>}

        {dismissible && (
          <button
            type="button"
            className="alert-close"
            onClick={handleClose}
            aria-label="Close alert"
          >
            <CloseIcon size={16} aria-hidden="true" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert };
