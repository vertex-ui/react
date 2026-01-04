
import React, { useState } from "react";
import { HTMLAttributes, ImgHTMLAttributes } from "react";
import { useThemeContext } from '../../theme/ThemeProvider';
import './Avatar.css';
/**
 * Avatar component - Displays user profile image, initials, or fallback
 *
 * The Avatar component supports images, fallback text, different sizes, shapes, and status indicators.
 *
 * @example
 * Basic avatar with image
 * ```tsx
 * <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Doe" />
 * ```
 *
 * @example
 * Avatar with fallback text
 * ```tsx
 * <Avatar fallback="JD" />
 * ```
 *
 * @example
 * Different sizes
 * ```tsx
 * <Avatar src="..." size="small" />
 * <Avatar src="..." size="large" />
 * ```
 *
 * @example
 * Square shape
 * ```tsx
 * <Avatar src="..." shape="square" />
 * ```
 *
 * @example
 * Status indicator
 * ```tsx
 * <Avatar
 *   src="..."
 *   statusIndicator={<span style={{ background: 'green', borderRadius: '50%', width: 12, height: 12, display: 'inline-block' }} />}
 *   statusPosition="top-right"
 * />
 * ```
 */

export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  src?: string;
  alt?: string;
  /**
   * Size of the avatar
   * @default theme.defaultSize or 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'square';
  fallback?: string;
  onImageError?: (error: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className' | 'onError' | 'onLoad'>;
  statusIndicator?: React.ReactNode;
  statusPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      size,
      shape = 'circle',
      fallback = '?',
      onImageError,
      onImageLoad,
      imgProps,
      statusIndicator,
      statusPosition = 'bottom-right',
      className = '',
      ...props
    },
    ref
  ) => {
    const { theme } = useThemeContext();
    const avatarSize = size || theme.defaultSize || 'md';
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
      `vtx-avatar--${avatarSize}`,
      `vtx-avatar--${shape}`,
      statusIndicator && 'vtx-avatar--with-status',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const showImage = src && !imageError;
    const displayFallback = fallback.slice(0, 2).toUpperCase();

    return (
      <div
        ref={ref}
        className={classNames}
        role="img"
        aria-label={alt || fallback || 'Avatar'}
        {...props}
      >
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
  }
);

Avatar.displayName = 'Avatar';

export default Avatar as React.FC<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export { Avatar };
