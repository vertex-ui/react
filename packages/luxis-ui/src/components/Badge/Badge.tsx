"use client";

import { CloseSmallIcon } from '../../icons/IconComponents';
import React, { useMemo } from 'react';
import { useThemeContext } from '../../theme';
import type { BadgeProps } from './Badge.types';
import './Badge.css';

/**
 * Badge component - Small labels and indicators for status, counts, or categories
 *
 * A versatile badge component that can display status indicators, counts, tags, or any short text
 * with various visual styles and customization options.
 *
 * @example
 * <Badge variant="success">Active</Badge>
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'neutral',
      size,
      pill = false,
      rounded = false,
      dot = false,
      outline = false,
      lightMode = false,
      darkText = false,
      maxLength,
      icon,
      children,
      className = '',
      onRemove,
      ...props
    },
    ref
  ) => {
    const { theme } = useThemeContext();
    const badgeSize = size || theme.defaultSize;

    // Determine text color based on theme's color contrast configuration
    const textColorClass = useMemo(() => {
      // Skip contrast logic if outline mode or lightMode is true
      if (outline || lightMode) return null;

      if (darkText === true) return 'lxs-badge--dark-text';
      if (darkText === false) return 'lxs-badge--light-text';

      // Use theme's colorContrast configuration
      const contrast = theme.colorContrast[variant as keyof typeof theme.colorContrast];
      if (contrast === 'light') {
        return 'lxs-badge--dark-text'; // Light background needs dark text
      } else if (contrast === 'dark') {
        return 'lxs-badge--light-text'; // Dark background needs light text
      }

      return null;
    }, [outline, lightMode, darkText, variant, theme.colorContrast]);

    const classNames = [
      'lxs-badge',
      `lxs-badge--${variant}`,
      `lxs-badge--${badgeSize}`,
      pill && 'lxs-badge--pill',
      rounded && 'lxs-badge--rounded',
      dot && 'lxs-badge--with-dot',
      outline && 'lxs-badge--outline',
      !lightMode && !outline && 'lxs-badge--solid',
      onRemove && 'lxs-badge--removable',
      textColorClass,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Truncate content if maxLength is specified
    const truncatedContent = useMemo(() => {
      if (maxLength && typeof children === 'string' && children.length > maxLength) {
        return `${children.slice(0, maxLength)}...`;
      }
      return children;
    }, [children, maxLength]);

    return (
      <span ref={ref} className={classNames} {...props}>
        {dot && <span className="lxs-badge-dot" aria-hidden="true" />}
        {icon && (
          <span className="lxs-badge-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="lxs-badge-content">{truncatedContent}</span>
        {onRemove && (
          <button
            type="button"
            className="lxs-badge-remove"
            onClick={onRemove}
            aria-label="Remove badge"
          >
            <CloseSmallIcon aria-hidden="true" />
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
