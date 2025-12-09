import React, { useState, useRef, useEffect, cloneElement, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import './Tooltip.css';

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
  placement?:
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
  children: React.ReactElement<any>;
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

/**
 * Tooltip component - Displays helpful information on hover or focus
 *
 * A feature-rich tooltip component with multiple placement options, variants,
 * customizable delays, and arrow indicators.
 *
 * @example
 * Basic usage
 * ```tsx
 * <Tooltip content="Click to save changes" placement="top">
 *   <Button>Save</Button>
 * </Tooltip>
 * ```
 *
 * @example
 * With arrow and variant
 * ```tsx
 * <Tooltip
 *   content="This action cannot be undone"
 *   placement="right"
 *   variant="warning"
 *   arrow
 * >
 *   <Button variant="danger">Delete</Button>
 * </Tooltip>
 * ```
 *
 * @example
 * Always visible
 * ```tsx
 * <Tooltip content="Important information" open>
 *   <span>Hover target</span>
 * </Tooltip>
 * ```
 */

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      placement = 'top',
      delay = 200,
      hideDelay = 0,
      children,
      open,
      disabled = false,
      arrow = false,
      maxWidth = '300px',
      variant = 'dark',
      dismissible = false,
      onShow,
      onHide,
      onDismiss,
      className = '',
      ...props
    },
    ref
  ) => {
    // ...existing implementation...
    // Replace all instances of tooltipRef with ref
    // Pass ref to the tooltip div
    // Otherwise, keep logic unchanged
    const [isVisible, setIsVisible] = useState(open || false);
    const [isMounted, setIsMounted] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLElement | null>(null);
    // Use the forwarded ref for the tooltip
    const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const unmountTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isHoveringRef = useRef(false);

    const showTooltip = () => {
      if (disabled) return;

      isHoveringRef.current = true;

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      if (unmountTimeoutRef.current) {
        clearTimeout(unmountTimeoutRef.current);
      }

      showTimeoutRef.current = setTimeout(() => {
        if (triggerRef.current && isHoveringRef.current) {
          const rect = triggerRef.current.getBoundingClientRect();
          const tooltipPos = calculatePosition(rect, placement);
          setPosition(tooltipPos);
          setIsMounted(true);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
              onShow?.();
            });
          });
        }
      }, delay);
    };

    const hideTooltip = () => {
      isHoveringRef.current = false;

      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
      }

      hideTimeoutRef.current = setTimeout(() => {
        if (!isHoveringRef.current) {
          setIsVisible(false);
          onHide?.();
          unmountTimeoutRef.current = setTimeout(() => {
            setIsMounted(false);
          }, 150);
        }
      }, hideDelay);
    };

    const calculatePosition = (rect: DOMRect, placementValue: string) => {
      const offset = arrow ? 12 : 8;
      let top = 0;
      let left = 0;

      if (placementValue.startsWith('top')) {
        top = rect.top - offset + window.scrollY;
        left = rect.left + rect.width / 2 + window.scrollX;

        if (placementValue === 'top-start') left = rect.left + window.scrollX;
        if (placementValue === 'top-end') left = rect.right + window.scrollX;
      } else if (placementValue.startsWith('bottom')) {
        top = rect.bottom + offset + window.scrollY;
        left = rect.left + rect.width / 2 + window.scrollX;

        if (placementValue === 'bottom-start') left = rect.left + window.scrollX;
        if (placementValue === 'bottom-end') left = rect.right + window.scrollX;
      } else if (placementValue.startsWith('left')) {
        top = rect.top + rect.height / 2 + window.scrollY;
        left = rect.left - offset + window.scrollX;

        if (placementValue === 'left-start') top = rect.top + window.scrollY;
        if (placementValue === 'left-end') top = rect.bottom + window.scrollY;
      } else if (placementValue.startsWith('right')) {
        top = rect.top + rect.height / 2 + window.scrollY;
        left = rect.right + offset + window.scrollX;

        if (placementValue === 'right-start') top = rect.top + window.scrollY;
        if (placementValue === 'right-end') top = rect.bottom + window.scrollY;
      }

      return { top, left };
    };

    const handleDismiss = () => {
      isHoveringRef.current = false;
      setIsVisible(false);
      onDismiss?.();
      onHide?.();
      unmountTimeoutRef.current = setTimeout(() => {
        setIsMounted(false);
      }, 150);
    };

    const handleTooltipMouseEnter = () => {
      if (disabled || open !== undefined) return;
      isHoveringRef.current = true;
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };

    const handleTooltipMouseLeave = () => {
      if (disabled || open !== undefined) return;
      hideTooltip();
    };

    useEffect(() => {
      if (open !== undefined) {
        if (open) {
          setIsMounted(true);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        } else {
          setIsVisible(false);
          unmountTimeoutRef.current = setTimeout(() => {
            setIsMounted(false);
          }, 150);
        }
      }
    }, [open]);

    useEffect(() => {
      return () => {
        if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        if (unmountTimeoutRef.current) clearTimeout(unmountTimeoutRef.current);
      };
    }, []);

    const tooltipClassNames = [
      'vtx-tooltip',
      `vtx-tooltip--${placement}`,
      `vtx-tooltip--${variant}`,
      arrow && 'vtx-tooltip--with-arrow',
      isVisible && 'vtx-tooltip--visible',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const shouldRender = open !== undefined ? open || isMounted : isMounted;

    const trigger = cloneElement(children, {
      ref: (node: HTMLDivElement | null) => {
        triggerRef.current = node;
        const childRef = (children as React.ReactElement & { ref?: React.Ref<HTMLDivElement> }).ref;
        if (typeof childRef === 'function') {
          childRef(node);
        } else if (childRef && typeof childRef === 'object' && 'current' in childRef) {
          (childRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      onMouseEnter: (e: React.MouseEvent) => {
        if (open === undefined) showTooltip();
        children.props.onMouseEnter?.(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        if (open === undefined) hideTooltip();
        children.props.onMouseLeave?.(e);
      },
      onFocus: (e: React.FocusEvent) => {
        if (open === undefined) showTooltip();
        children.props.onFocus?.(e);
      },
      onBlur: (e: React.FocusEvent) => {
        if (open === undefined) hideTooltip();
        children.props.onBlur?.(e);
      },
      'aria-describedby': isVisible ? 'vtx-tooltip-content' : undefined,
    });

    return (
      <>
        {trigger}
        {shouldRender &&
          createPortal(
            <div
              ref={ref}
              id="vtx-tooltip-content"
              role="tooltip"
              className={tooltipClassNames}
              style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
                maxWidth,
              }}
              onMouseEnter={handleTooltipMouseEnter}
              onMouseLeave={handleTooltipMouseLeave}
              {...props}
            >
              {arrow && <span className="vtx-tooltip-arrow" aria-hidden="true" />}
              <div className="vtx-tooltip-inner">
                <span className="vtx-tooltip-content">{content}</span>
                {dismissible && (
                  <button
                    type="button"
                    className="vtx-tooltip-close"
                    onClick={handleDismiss}
                    aria-label="Dismiss tooltip"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M11 3L3 11M3 3L11 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>,
            document.body
          )}
      </>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip as React.FC<
  TooltipProps & React.RefAttributes<HTMLDivElement>
>;
