import React, { useState, HTMLAttributes, ImgHTMLAttributes } from 'react';
import './Avatar.css';

export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Image source URL
   */
  src?: string;
  /**
   * Alt text for the image - important for accessibility
   * @default ''
   */
  alt?: string;
  /**
   * Size of the avatar
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Shape of the avatar
   * @default 'circle'
   */
  shape?: 'circle' | 'square';
  /**
   * Fallback content when no image is provided or image fails to load
   * Typically displays user initials (max 2 characters shown)
   * @default '?'
   */
  fallback?: string;
  /**
   * Callback fired when image fails to load
   */
  onImageError?: (error: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * Callback fired when image successfully loads
   */
  onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * Additional props to pass to the img element
   */
  imgProps?: Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt' | 'className' | 'onError' | 'onLoad'
  >;
  /**
   * Custom status indicator (e.g., online/offline badge)
   */
  statusIndicator?: React.ReactNode;
  /**
   * Position of the status indicator
   * @default 'bottom-right'
   */
  statusPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

/**
 * Avatar component - Displays user profile images or initials with status indicators
 *
 * A professional avatar component that handles image loading states, provides fallback content,
 * and supports status indicators for online/offline states.
 *
 * @example
 * Basic usage with image
 * ```tsx
 * <Avatar
 *   src="/user.jpg"
 *   alt="John Doe"
 *   size="large"
 * />
 * ```
 *
 * @example
 * With fallback initials
 * ```tsx
 * <Avatar
 *   fallback="JD"
 *   size="medium"
 *   shape="square"
 * />
 * ```
 *
 * @example
 * With status indicator
 * ```tsx
 * <Avatar
 *   src="/user.jpg"
 *   alt="Jane Smith"
 *   statusIndicator={<div style={{ background: 'green', borderRadius: '50%', width: '100%', height: '100%' }} />}
 *   statusPosition="bottom-right"
 * />
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'medium',
  shape = 'circle',
  fallback = '?',
  onImageError,
  onImageLoad,
  imgProps,
  statusIndicator,
  statusPosition = 'bottom-right',
  className = '',
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(true);
    onImageError?.(event);
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    onImageLoad?.(event);
  };

  const classNames = [
    'vtx-avatar',
    `vtx-avatar--${size}`,
    `vtx-avatar--${shape}`,
    statusIndicator && 'vtx-avatar--with-status',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const showImage = src && !imageError;
  const displayFallback = fallback.slice(0, 2).toUpperCase();

  return (
    <div className={classNames} role="img" aria-label={alt || fallback || 'Avatar'} {...props}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="vtx-avatar-image"
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
          {...imgProps}
        />
      ) : (
        <span className="vtx-avatar-fallback" aria-hidden="true">
          {displayFallback}
        </span>
      )}
      {statusIndicator && (
        <span
          className={`vtx-avatar-status vtx-avatar-status--${statusPosition}`}
          aria-label="Status indicator"
        >
          {statusIndicator}
        </span>
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
