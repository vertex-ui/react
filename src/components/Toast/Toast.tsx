import * as React from 'react';
import { forwardRef, useEffect, useState, useRef } from 'react';
import { ToastProps } from './types';
import './Toast.css';

// Default icons for different variants
const DefaultIcons = {
  success: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm-2 15l-5-5 1.414-1.414L8 12.172l7.586-7.586L17 6l-9 9z"
        fill="currentColor"
      />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm5 13.59L13.59 15 10 11.41 6.41 15 5 13.59 8.59 10 5 6.41 6.41 5 10 8.59 13.59 5 15 6.41 11.41 10 15 13.59z"
        fill="currentColor"
      />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z"
        fill="currentColor"
      />
    </svg>
  ),
  info: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"
        fill="currentColor"
      />
    </svg>
  ),
  default: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"
        fill="currentColor"
      />
    </svg>
  ),
  primary: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm1 15H9v-6h2v6zm0-8H9V5h2v2z"
        fill="currentColor"
      />
    </svg>
  ),
};

const CloseIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.854 4.854a.5.5 0 0 0-.708-.708L8 8.293 3.854 4.146a.5.5 0 1 0-.708.708L7.293 9l-4.147 4.146a.5.5 0 0 0 .708.708L8 9.707l4.146 4.147a.5.5 0 0 0 .708-.708L8.707 9l4.147-4.146z"
      fill="currentColor"
    />
  </svg>
);

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      children,
      onDismiss,
      id,
      variant = 'default',
      autoClose = 5000,
      closeButton = true,
      progressBar = true,
      pauseOnHover = true,
      pauseOnFocusLoss = true,
      icon,
      action,
      className = '',
      style,
      title,
      description,
      animationDuration = 300,
      // Exclude props that shouldn't be passed to DOM
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isVisible,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      createdAt,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onClose,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onOpen,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      toastId,
      ...props
    },
    ref
  ) => {
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(100);
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
    // const timeoutRef = useRef<NodeJS.Timeout>();
    const startTimeRef = useRef<number>(Date.now());
    const pausedTimeRef = useRef<number>(0);

    const handleDismiss = React.useCallback(() => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        onDismiss();
      }, animationDuration);
    }, [onDismiss, animationDuration]);

    // Handle auto close with progress
    useEffect(() => {
      if (autoClose === false || isPaused) return;

      const updateProgress = () => {
        const elapsed = Date.now() - startTimeRef.current - pausedTimeRef.current;
        const remaining = Math.max(0, autoClose - elapsed);
        const progressPercent = (remaining / autoClose) * 100;

        setProgress(progressPercent);

        if (remaining <= 0) {
          handleDismiss();
        }
      };

      progressIntervalRef.current = setInterval(updateProgress, 16); // ~60fps

      return () => {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
      };
    }, [autoClose, isPaused, handleDismiss]);
    const handleMouseEnter = () => {
      if (pauseOnHover && !isPaused) {
        setIsPaused(true);
        pausedTimeRef.current = Date.now();
      }
    };

    const handleMouseLeave = () => {
      if (pauseOnHover && isPaused) {
        setIsPaused(false);
        const pauseDuration = Date.now() - pausedTimeRef.current;
        startTimeRef.current += pauseDuration;
      }
    };

    const handleFocus = () => {
      if (pauseOnFocusLoss && isPaused) {
        setIsPaused(false);
        const pauseDuration = Date.now() - pausedTimeRef.current;
        startTimeRef.current += pauseDuration;
      }
    };

    const handleBlur = () => {
      if (pauseOnFocusLoss && !isPaused) {
        setIsPaused(true);
        pausedTimeRef.current = Date.now();
      }
    };

    // Build class names
    const classNames = [
      'vtx-toast',
      `vtx-toast--${variant}`,
      isAnimatingOut && 'vtx-toast--exiting',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Render icon
    const renderIcon = () => {
      if (icon === false) return null;
      if (icon) return <div className="vtx-toast__icon">{icon}</div>;
      return <div className="vtx-toast__icon">{DefaultIcons[variant]}</div>;
    };

    // Render content
    const renderContent = () => {
      if (title || description) {
        return (
          <div className="vtx-toast__content">
            {title && <div className="vtx-toast__title">{title}</div>}
            {description && <div className="vtx-toast__description">{description}</div>}
            {children && <div className="vtx-toast__body">{children}</div>}
          </div>
        );
      }
      return <div className="vtx-toast__content">{children}</div>;
    };

    return (
      <div
        ref={ref}
        className={classNames}
        style={
          {
            ...style,
            '--vtx-toast-animation-duration': `${animationDuration}ms`,
          } as React.CSSProperties
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        role="alert"
        aria-live="polite"
        data-toast-id={id}
        {...props}
      >
        <div className="vtx-toast__wrapper">
          {renderIcon()}
          {renderContent()}

          <div className="vtx-toast__actions">
            {action && (
              <button className="vtx-toast__action" onClick={action.onClick} type="button">
                {action.label}
              </button>
            )}

            {closeButton && (
              <button
                className="vtx-toast__close"
                onClick={handleDismiss}
                type="button"
                aria-label="Close notification"
              >
                {CloseIcon}
              </button>
            )}
          </div>
        </div>

        {progressBar && autoClose !== false && (
          <div className="vtx-toast__progress-container">
            <div
              className="vtx-toast__progress"
              style={{
                transform: `scaleX(${progress / 100})`,
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            />
          </div>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

export default Toast as React.FC<
  ToastProps & React.RefAttributes<HTMLDivElement>
>;