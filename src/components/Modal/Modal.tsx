import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useFocusTrap, useEscapeKey, useBodyScrollLock } from '../../hooks';
import './Modal.css';

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  /**
   * Callback fired when the modal requests to be closed
   * Called on backdrop click, escape key, or close button click
   */
  onClose: () => void;
  /**
   * Modal title displayed in header
   */
  title?: string;
  /**
   * Optional subtitle or description below the title
   */
  description?: string;
  /**
   * Modal content
   */
  children: React.ReactNode;
  /**
   * Optional header content to replace the default title area
   * When provided, title and description are ignored
   */
  header?: React.ReactNode;
  /**
   * Optional footer content (typically action buttons)
   */
  footer?: React.ReactNode;
  /**
   * Size of the modal
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large' | 'fullscreen' | 'auto';
  /**
   * If false, clicking the backdrop won't close the modal
   * @default true
   */
  closeOnBackdropClick?: boolean;
  /**
   * If false, pressing Escape won't close the modal
   * @default true
   */
  closeOnEscape?: boolean;
  /**
   * If false, hides the close button in the header
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * If true, modal backdrop will be transparent
   * @default false
   */
  transparentBackdrop?: boolean;
  /**
   * Custom class name for the modal content
   */
  className?: string;
  /**
   * Custom class name for the modal backdrop
   */
  backdropClassName?: string;
  /**
   * Prevents body scroll when modal is open
   * @default true
   */
  preventScroll?: boolean;
  /**
   * Animation variant for modal entrance
   * @default 'fade'
   */
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'zoom' | 'none';
  /**
   * Callback fired after modal opens (after animation completes)
   */
  onAfterOpen?: () => void;
  /**
   * Callback fired after modal closes (after animation completes)
   */
  onAfterClose?: () => void;
  /**
   * If true, modal will be scrollable inside
   * @default false
   */
  scrollable?: boolean;
  /**
   * If true, centers the modal vertically
   * @default true
   */
  centered?: boolean;
}

/**
 * Modal component - Overlay dialog for focused user interactions
 *
 * A feature-rich modal component with accessibility features including focus trap,
 * body scroll lock, keyboard navigation, and customizable animations.
 *
 * @example
 * Basic confirmation modal
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Confirm Action"
 *   description="Are you sure you want to proceed with this action?"
 *   footer={
 *     <>
 *       <Button onClick={() => setIsOpen(false)}>Cancel</Button>
 *       <Button variant="primary">Confirm</Button>
 *     </>
 *   }
 * >
 *   <p>This action cannot be undone.</p>
 * </Modal>
 * ```
 *
 * @example
 * Form modal with custom header
 * ```tsx
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   size="large"
 *   header={<CustomHeader />}
 *   scrollable
 * >
 *   <FormContent />
 * </Modal>
 * ```
 *
 * @example
 * Fullscreen modal without backdrop close
 * ```tsx
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   size="fullscreen"
 *   closeOnBackdropClick={false}
 *   animation="slide-up"
 * >
 *   <FullscreenContent />
 * </Modal>
 * ```
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  header,
  footer,
  size = 'medium',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  transparentBackdrop = false,
  className = '',
  backdropClassName = '',
  preventScroll = true,
  animation = 'fade',
  onAfterOpen,
  onAfterClose,
  scrollable = false,
  centered = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Focus trap
  useFocusTrap(modalRef, isOpen);

  // Body scroll lock
  useBodyScrollLock(preventScroll && isOpen);

  // Escape key handler
  useEscapeKey(() => {
    if (closeOnEscape && isOpen) {
      onClose();
    }
  });

  // Store and restore focus
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      onAfterOpen?.();
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
      onAfterClose?.();
    }
  }, [isOpen, onAfterOpen, onAfterClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const backdropClassNames = [
    'vtx-modal-backdrop',
    transparentBackdrop && 'vtx-modal-backdrop--transparent',
    centered && 'vtx-modal-backdrop--centered',
    `vtx-modal-backdrop--${animation}`,
    backdropClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const modalClassNames = [
    'vtx-modal',
    `vtx-modal--${size}`,
    scrollable && 'vtx-modal--scrollable',
    `vtx-modal--${animation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderHeader = () => {
    if (header) {
      return <div className="vtx-modal-header">{header}</div>;
    }

    if (!title && !showCloseButton) {
      return null;
    }

    return (
      <div className="vtx-modal-header">
        {title && (
          <div className="vtx-modal-header-content">
            <h2 id="vtx-modal-title" className="vtx-modal-title">
              {title}
            </h2>
            {description && (
              <p className="vtx-modal-description" id="vtx-modal-description">
                {description}
              </p>
            )}
          </div>
        )}
        {showCloseButton && (
          <button
            type="button"
            className="vtx-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    );
  };

  const modalContent = (
    <div className={backdropClassNames} onClick={handleBackdropClick} role="presentation">
      <div
        ref={modalRef}
        className={modalClassNames}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'vtx-modal-title' : undefined}
        aria-describedby={description ? 'vtx-modal-description' : undefined}
      >
        {renderHeader()}
        <div className="vtx-modal-body">{children}</div>
        {footer && <div className="vtx-modal-footer">{footer}</div>}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

Modal.displayName = 'Modal';
