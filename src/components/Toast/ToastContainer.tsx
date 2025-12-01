import * as React from 'react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Toast } from './Toast';
import { ToastContainerProps, ToastPosition } from './types';
import { ToastProvider, useToast, toast } from './useToast';
import './ToastContainer.css';

const ToastContainerInner: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  limit = 5,
  gap = 12,
  margin = 16,
  className = '',
  style,
  stacked = true,
  theme = 'auto',
}) => {
  const { toasts, removeToast, addToast, clearAllToasts, updateToast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);

  // Register toast manager methods
  useEffect(() => {
    toast.setMethods(addToast, removeToast, clearAllToasts, updateToast);
  }, [addToast, removeToast, clearAllToasts, updateToast]);

  // Apply theme
  useEffect(() => {
    if (theme === 'auto') {
      // Auto detect system theme
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const updateTheme = () => {
        document.documentElement.setAttribute(
          'data-vtx-toast-theme',
          mediaQuery.matches ? 'dark' : 'light'
        );
      };
      updateTheme();
      mediaQuery.addEventListener('change', updateTheme);
      return () => mediaQuery.removeEventListener('change', updateTheme);
    } else {
      document.documentElement.setAttribute('data-vtx-toast-theme', theme);
      return undefined;
    }
  }, [theme]);

  // Limit visible toasts
  const visibleToasts = toasts.slice(0, limit);
  const hiddenCount = Math.max(0, toasts.length - limit);

  // Calculate container position styles
  const getPositionStyles = (pos: ToastPosition) => {
    const styles: React.CSSProperties = {
      position: 'fixed',
      zIndex: 'var(--vtx-z-notification, 1400)',
      pointerEvents: 'none',
    };

    switch (pos) {
      case 'top-left':
        return { ...styles, top: margin, left: margin };
      case 'top-center':
        return { ...styles, top: margin, left: '50%', transform: 'translateX(-50%)' };
      case 'top-right':
        return { ...styles, top: margin, right: margin };
      case 'bottom-left':
        return { ...styles, bottom: margin, left: margin };
      case 'bottom-center':
        return { ...styles, bottom: margin, left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-right':
        return { ...styles, bottom: margin, right: margin };
      default:
        return { ...styles, top: margin, right: margin };
    }
  };

  // Build container class names
  const containerClasses = [
    'vtx-toast-container',
    `vtx-toast-container--${position}`,
    stacked && 'vtx-toast-container--stacked',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (visibleToasts.length === 0) return null;

  return createPortal(
    <div
      ref={containerRef}
      className={containerClasses}
      style={
        {
          ...getPositionStyles(position),
          '--vtx-toast-gap': `${gap}px`,
          ...style,
        } as React.CSSProperties & { '--vtx-toast-gap': string }
      }
      aria-live="polite"
      aria-label="Notifications"
    >
      {/* Hidden count indicator */}
      {hiddenCount > 0 && (
        <div className="vtx-toast-container__hidden-count">+{hiddenCount} more</div>
      )}

      {/* Toast list */}
      <div className="vtx-toast-container__list">
        {visibleToasts.map((toast, index) => (
          <Toast
            key={toast.id}
            id={toast.id}
            isVisible={toast.isVisible}
            onDismiss={() => removeToast(toast.id)}
            variant={toast.variant}
            autoClose={toast.autoClose}
            closeButton={toast.closeButton}
            progressBar={toast.progressBar}
            pauseOnHover={toast.pauseOnHover}
            pauseOnFocusLoss={toast.pauseOnFocusLoss}
            icon={toast.icon}
            action={toast.action}
            className={toast.className}
            style={toast.style}
            title={toast.title}
            description={toast.description}
            animationDuration={toast.animationDuration}
            createdAt={toast.createdAt}
            onClose={toast.onClose}
            onOpen={toast.onOpen}
            data-toast-index={index}
          >
            {toast.content}
          </Toast>
        ))}
      </div>
    </div>,
    document.body
  );
};

export const ToastContainer: React.FC<ToastContainerProps> = ({ children, ...props }) => {
  return (
    <ToastProvider>
      {children}
      <ToastContainerInner {...props} />
    </ToastProvider>
  );
};
