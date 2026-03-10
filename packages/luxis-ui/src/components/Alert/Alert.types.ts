import type { ReactNode, CSSProperties } from 'react';
import type { Size } from '../../theme';

export interface AlertProps {
  /**
   * Content of the alert (primary message, can be any ReactNode)
   */
  children?: ReactNode;
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
  size?: Size;
  /**
   * Custom icon or false to hide icon
   * If not provided, shows default icon based on variant
   */
  icon?: ReactNode | false;
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
  action?: ReactNode;
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
  style?: CSSProperties;
  /**
   * Role attribute for accessibility
   * @default 'alert'
   */
  role?: string;
}
