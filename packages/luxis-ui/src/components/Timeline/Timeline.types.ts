import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface TimelineStep {
  /** Label for the step */
  label: string;
  /** Optional description */
  description?: string;
  /** Optional custom icon */
  icon?: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
}

export interface TimelineProps {
  /** Array of timeline steps */
  steps: TimelineStep[] | string[];
  /** Current active step index (0-based) */
  currentStep: number;
  /** Orientation of the timeline */
  orientation?: 'horizontal' | 'vertical';
  /** Visual variant */
  variant?: 'default' | 'circle' | 'numbered' | 'simple';
  /** Show checkmarks on completed steps */
  showCheckmarks?: boolean;
  /** Color scheme for active/completed steps */
  color?: 'primary' | 'success' | 'info' | 'warning' | 'error';
  /** Size of the timeline */
  size?: 'sm' | 'md' | 'lg';
  /** Additional class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}