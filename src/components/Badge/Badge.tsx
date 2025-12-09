import React, { useMemo, HTMLAttributes } from 'react';
import './Badge.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual variant of the badge
   * @default 'neutral'
   */
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  /**
   * Size of the badge
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, badge will be pill-shaped with rounded ends
   * @default false
   */
  pill?: boolean;
  /**
   * If true, displays a dot indicator before the content
   * Useful for status indicators
   * @default false
   */
  dot?: boolean;
  /**
   * If true, displays the badge with an outline style instead of filled
   * @default false
   */
  outline?: boolean;
  /**
   * Maximum content length before truncation
   * Useful for limiting badge text length
   */
  maxLength?: number;
  /**
   * Icon to display before the badge content
   */
  icon?: React.ReactNode;
  /**
   * Badge content - text, numbers, or custom elements
   */
  children: React.ReactNode;
  /**
   * Callback fired when badge is clicked
   */
  onRemove?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Badge component - Small labels and indicators for status, counts, or categories
 *
 * A versatile badge component that can display status indicators, counts, tags, or any short text
 * with various visual styles and customization options.
 *
 * @example
 * Basic status badges
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="error" dot>Error</Badge>
 * <Badge variant="primary" pill>NEW</Badge>
 * ```
 *
 * @example
 * With icon and outline
 * ```tsx
 * <Badge variant="info" icon={<InfoIcon />} outline>
 *   Information
 * </Badge>
 * ```
 *
 * @example
 * Removable badge
 * ```tsx
 * <Badge variant="primary" onRemove={(e) => handleRemove()}>
 *   Tag 1
 * </Badge>
 * ```
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'neutral',
      size = 'medium',
      pill = false,
      dot = false,
      outline = false,
      maxLength,
      icon,
      children,
      className = '',
      onRemove,
      ...props
    },
    ref
  ) => {
    const classNames = [
      'vtx-badge',
      `vtx-badge--${variant}`,
      `vtx-badge--${size}`,
      pill && 'vtx-badge--pill',
      dot && 'vtx-badge--with-dot',
      outline && 'vtx-badge--outline',
      onRemove && 'vtx-badge--removable',
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
        {dot && <span className="vtx-badge-dot" aria-hidden="true" />}
        {icon && (
          <span className="vtx-badge-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="vtx-badge-content">{truncatedContent}</span>
        {onRemove && (
          <button
            type="button"
            className="vtx-badge-remove"
            onClick={onRemove}
            aria-label="Remove badge"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M9 3L3 9M3 3L9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge as React.FC<
  BadgeProps & React.RefAttributes<HTMLSpanElement>
>;
export { Badge };
