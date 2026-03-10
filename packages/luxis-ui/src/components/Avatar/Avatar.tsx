"use client";

import React, { useState, useCallback, useMemo } from "react";
import { useThemeContext } from '../../theme/ThemeProvider';
import { UserIcon } from '../../icons/IconComponents';
import type { AvatarProps } from './Avatar.types';
import './Avatar.css';

/**
 * Avatar component - Displays user profile image, initials, or fallback
 *
 * The Avatar component supports images, fallback text, different sizes, shapes, and status indicators.
 *
 * @example
 * <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Doe" />
 */
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      size,
      shape = 'circular',
      fallback = '?',
      onImageError,
      onImageLoad,
      imgProps,
      statusIndicator,
      statusPosition = 'bottom-right',
      className = '',
      priority = false,
      ...props
    },
    ref
  ) => {
    const { theme } = useThemeContext();
    const avatarSize = size || theme.defaultSize;
    const [imageError, setImageError] = useState(false);

    const handleImageError = useCallback(
      (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setImageError(true);
        onImageError?.(event);
      },
      [onImageError]
    );

    const handleImageLoad = useCallback(
      (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        onImageLoad?.(event);
      },
      [onImageLoad]
    );

    const classNames = [
      'lxs-avatar',
      `lxs-avatar--${avatarSize}`,
      `lxs-avatar--${shape}`,
      statusIndicator && 'lxs-avatar--with-status',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const showImage = Boolean(src && !imageError);

    const displayFallback = useMemo(() => {
      if (fallback !== '?') {
        return fallback.slice(0, 2).toUpperCase();
      } else if (alt && alt.trim().length > 0) {
        const words = alt.trim().split(/\s+/);
        if (words.length >= 2) {
          return (words[0][0] + words[1][0]).toUpperCase();
        } else {
          return words[0].slice(0, 2).toUpperCase();
        }
      }
      return <UserIcon aria-hidden="true" />;
    }, [fallback, alt]);

    return (
      <div
        ref={ref}
        className={classNames}
        role="img"
        aria-label={alt || fallback || 'Avatar'}
        {...props}
      >
        <span className="lxs-avatar-inner">
          {showImage ? (
            <img
              src={src}
              alt={alt}
              className="lxs-avatar-image"
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              {...imgProps}
            />
          ) : (
            <span className="lxs-avatar-fallback" aria-hidden="true">
              {displayFallback}
            </span>
          )}
        </span>
        {statusIndicator && (
          <span
            className={`lxs-avatar-status lxs-avatar-status--${statusPosition}`}
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

export { Avatar };
