import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Content to display in the tooltip
   * Can be text, JSX, or any React node
   */
  content: React.ReactNode;
  /**
   * Placement of the tooltip relative to the trigger element
   * @default 'top'
   */
  placement?: TooltipPlacement;
  /**
   * Delay before showing tooltip in milliseconds
   * @default 200
   */
  delay?: number;
  /**
   * Delay before hiding tooltip in milliseconds
   * @default 0
   */
  hideDelay?: number;
  /**
   * Element that triggers the tooltip
   */
  children: React.ReactElement<Record<string, unknown>>;
  /**
   * If true, tooltip is always visible
   * @default false
   */
  open?: boolean;
  /**
   * If true, tooltip is disabled and won't show
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, shows an arrow pointing to the trigger element
   * @default false
   */
  arrow?: boolean;
  /**
   * Maximum width of the tooltip
   * @default '300px'
   */
  maxWidth?: string;
  /**
   * Tooltip variant for different visual styles
   * @default 'dark'
   */
  variant?: 'dark' | 'light' | 'error' | 'warning' | 'success' | 'info';
  /**
   * If true, shows a close button to manually dismiss the tooltip
   * @default false
   */
  dismissible?: boolean;
  /**
   * Callback fired when tooltip is shown
   */
  onShow?: () => void;
  /**
   * Callback fired when tooltip is hidden
   */
  onHide?: () => void;
  /**
   * Callback fired when dismiss button is clicked
   */
  onDismiss?: () => void;
}