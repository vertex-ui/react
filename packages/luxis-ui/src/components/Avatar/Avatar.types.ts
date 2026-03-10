import type { HTMLAttributes, ImgHTMLAttributes, ReactNode, SyntheticEvent } from "react";
import type { Size } from '../../theme';

export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * The source URL of the avatar image.
   */
  src?: string;
  /**
   * Alternative text for the image. If `src` fails and no `fallback` is provided,
   * initials will be generated from `alt`.
   */
  alt?: string;
  /**
   * Size of the avatar.
   * @default 'md'
   */
  size?: Size;
  /**
   * The shape of the avatar container.
   * @default 'circular'
   */
  shape?: 'circular' | 'rounded' | 'square';
  /**
   * Text to display when `src` is unavailable. Overrides auto-generated initials.
   * By default, it takes up to two characters.
   */
  fallback?: string;
  /**
   * Callback fired when the image fails to load.
   */
  onImageError?: (error: SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * Callback fired when the image loads successfully.
   */
  onImageLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * Additional properties passed directly to the `img` element.
   */
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className' | 'onError' | 'onLoad'>;
  /**
   * An element (like a badge or dot) to indicate user status (online, busy, etc.)
   */
  statusIndicator?: ReactNode;
  /**
   * Position of the status indicator.
   * @default 'bottom-right'
   */
  statusPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /**
   * If true, the avatar image will be eager loaded with high priority.
   * Useful when the avatar is the LCP element.
   * @default false
   */
  priority?: boolean;
}
