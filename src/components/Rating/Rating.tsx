"use client";

import React, { useState } from 'react';
import './Rating.css';
import {
  StarFullIcon,
  StarHalfIcon,
  StarEmptyIcon
} from '../../icons/IconComponents';

export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Current rating value (0-5)
   * @default 0
   */
  value?: number;
  /**
   * Maximum number of stars
   * @default 5
   */
  max?: number;
  /**
   * Size of the rating stars
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Color of filled stars
   * @default 'warning'
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  /**
   * If true, user can select rating
   * @default false
   */
  selectable?: boolean;
  /**
   * If true, allows half-star ratings
   * @default false
   */
  allowHalf?: boolean;
  /**
   * If true, shows the numeric value next to stars
   * @default false
   */
  showValue?: boolean;
  /**
   * Custom format for the displayed value
   * @example (value) => `${value}/5`
   */
  valueFormat?: (value: number) => string;
  /**
   * Callback when rating changes (only for selectable)
   */
  onChange?: (value: number) => void;
  /**
   * If true, rating is read-only even if selectable is true
   * @default false
   */
  readOnly?: boolean;
  /**
   * Custom filled star icon
   */
  filledIcon?: React.ReactNode;
  /**
   * Custom empty star icon
   */
  emptyIcon?: React.ReactNode;
  /**
   * Custom half star icon
   */
  halfIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Rating component - Display and input star ratings
 *
 * A versatile rating component that can display star ratings or allow users to select ratings.
 * Supports different sizes, colors, half-star ratings, and custom icons.
 *
 * @example
 * Display rating
 * ```tsx
 * <Rating value={4.5} showValue />
 * ```
 *
 * @example
 * Selectable rating
 * ```tsx
 * <Rating
 *   value={rating}
 *   selectable
 *   onChange={(value) => setRating(value)}
 * />
 * ```
 *
 * @example
 * Half-star ratings
 * ```tsx
 * <Rating value={3.5} allowHalf showValue />
 * ```
 *
 * @example
 * Different sizes and colors
 * ```tsx
 * <Rating value={5} size="lg" color="error" />
 * ```
 */
const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value = 0,
      max = 5,
      size = 'md',
      color = 'warning',
      selectable = false,
      allowHalf = false,
      showValue = false,
      valueFormat,
      onChange,
      readOnly = false,
      filledIcon,
      emptyIcon,
      halfIcon,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const [hoverValue, setHoverValue] = useState<number | null>(null);
    const [selectedValue, setSelectedValue] = useState(value);

    const currentValue = hoverValue !== null ? hoverValue : selectedValue;
    const isInteractive = selectable && !readOnly;

    const handleClick = (starIndex: number, isHalf: boolean) => {
      if (!isInteractive) return;

      const newValue = allowHalf && isHalf ? starIndex + 0.5 : starIndex + 1;
      setSelectedValue(newValue);
      onChange?.(newValue);
    };

    const handleMouseEnter = (starIndex: number, isHalf: boolean) => {
      if (!isInteractive) return;
      const newValue = allowHalf && isHalf ? starIndex + 0.5 : starIndex + 1;
      setHoverValue(newValue);
    };

    const handleMouseLeave = () => {
      if (!isInteractive) return;
      setHoverValue(null);
    };

    const renderStar = (starIndex: number) => {
      const starValue = starIndex + 1;
      const filled = currentValue >= starValue;
      const halfFilled = allowHalf && currentValue >= starIndex + 0.5 && currentValue < starValue;

      return (
        <div
          key={starIndex}
          className={`vtx-rating-star-wrapper ${isInteractive ? 'vtx-rating-star-wrapper--interactive' : ''}`}
          onMouseLeave={handleMouseLeave}
        >
          {/* Half star area (left side) */}
          {allowHalf && (
            <div
              className="vtx-rating-star-half"
              onClick={() => handleClick(starIndex, true)}
              onMouseEnter={() => handleMouseEnter(starIndex, true)}
            />
          )}

          {/* Full star area (right side or full) */}
          <div
            className="vtx-rating-star-full"
            onClick={() => handleClick(starIndex, false)}
            onMouseEnter={() => handleMouseEnter(starIndex, false)}
          />

          {/* Star icon */}
          <span className={`vtx-rating-star ${filled ? 'vtx-rating-star--filled' : halfFilled ? 'vtx-rating-star--half' : 'vtx-rating-star--empty'}`}>
            {filled && filledIcon ? (
              filledIcon
            ) : halfFilled && halfIcon ? (
              halfIcon
            ) : !filled && emptyIcon ? (
              emptyIcon
            ) : (
              <>
                {filled ? <StarFullIcon /> : halfFilled ? <StarHalfIcon /> : <StarEmptyIcon />}
              </>
            )}
          </span>
        </div>
      );
    };

    const displayValue = valueFormat ? valueFormat(currentValue) : currentValue.toFixed(allowHalf ? 1 : 0);

    const ratingClasses = [
      'vtx-rating',
      `vtx-rating--${size}`,
      `vtx-rating--${color}`,
      isInteractive && 'vtx-rating--selectable',
      readOnly && 'vtx-rating--readonly',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={ratingClasses} style={style} {...props}>
        <div className="vtx-rating-stars">
          {Array.from({ length: max }, (_, index) => renderStar(index))}
        </div>
        {showValue && (
          <span className="vtx-rating-value">{displayValue}</span>
        )}
      </div>
    );
  }
);

Rating.displayName = 'Rating';

export default Rating;
export { Rating };
