import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface ModalFooterButton {
  /**
   * Button label text
   */
  label: string;
  /**
   * Click handler for the button
   */
  onClick: () => void;
  /**
   * Button variant
   * @default 'secondary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning';
  /**
   * Button size
   * @default 'medium'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
}

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
   * Can be a ReactNode or an array of button configurations
   */
  footer?: React.ReactNode;
  /**
   * Array of footer buttons to auto-generate footer
   * If provided, footer prop is ignored
   */
  footerButtons?: ModalFooterButton[];
  /** Size of the modal ('sm', 'md', 'lg', 'fullscreen', 'auto'). Defaults to theme defaultSize */
  size?: 'sm' | 'md' | 'lg' | 'fullscreen' | 'auto';
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