import type { ReactNode, CSSProperties, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, RefObject, SyntheticEvent, MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import type { Size } from '../../theme';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the card
   */
  children: React.ReactNode;
  /**
   * The variant of the card
   * @default 'elevated'
   */
  variant?: 'elevated' | 'outlined' | 'filled';
  /**
   * Size of the card
   * @default 'md'
   */
  size?: Size;
  /**
   * If true, removes padding from the card
   * @default false
   */
  noPadding?: boolean;
  /**
   * Custom padding value (e.g., '16px', '1rem', '0')
   * Overrides noPadding when provided
   */
  padding?: string;
  /**
   * If true, makes the card hoverable with interaction effects
   * @default false
   */
  hoverable?: boolean;
  /**
   * If true, makes the card clickable (adds cursor pointer)
   * @default false
   */
  clickable?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Header content for the card
   */
  header?: React.ReactNode;
  /**
   * Footer content for the card
   */
  footer?: React.ReactNode;
  /**
   * If true, adds dividers between header, content, and footer
   * @default false
   */
  divider?: boolean;
}