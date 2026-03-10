"use client";

import { ChevronDownIcon, PlusIcon, MinusIcon } from '../../icons/IconComponents';
import React, { useRef, useCallback, useMemo } from 'react';
import type { AccordionItemComponentProps, AccordionItemProps } from './types';
import { useThemeContext } from '../../theme';

/**
 * AccordionItem component - A single item within an Accordion.
 *
 * @example
 * ```tsx
 * <AccordionItem id="item1" header="Section 1">Content 1</AccordionItem>
 * ```
 */
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemComponentProps>(
  (
    {
      item,
      id,
      isOpen,
      onToggle,
      variant = 'default',
      size,
      showChevron = true,
      chevronPosition = 'right',
      expandedIcon,
      collapsedIcon,
      iconType = 'chevron',
      loading = false,
      disabled = false,
      disableAnimations = false,
    },
    ref
  ) => {
    const { theme } = useThemeContext();
    const itemSize = size ?? theme.defaultSize;
    const contentRef = useRef<HTMLDivElement>(null);
    const { 
      header, 
      children, 
      disabled: itemDisabled, 
      className: itemClassName,
      loading: itemLoading,
      status = 'default',
      icon: itemIcon,
      dataTestId
    } = item;
    
    const isDisabled = disabled || itemDisabled;
    const isLoading = loading || itemLoading;

    const handleToggle = useCallback(() => {
      if (!isDisabled && !isLoading) {
        onToggle(id);
      }
    }, [isDisabled, isLoading, onToggle, id]);

    const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleToggle();
      }
    }, [handleToggle]);

    const renderIcon = useCallback(() => {
      // Use item-specific icons if provided
      if (itemIcon) {
        return (
          <div 
            className={`accordion-item-chevron ${isOpen ? 'open' : ''}`} 
            data-testid={`${dataTestId || id}-custom-icon`}
            aria-hidden="true"
          >
            {isOpen ? itemIcon.expanded : itemIcon.collapsed}
          </div>
        );
      }

      // If custom icons are provided at accordion level, use them
      if (iconType === 'custom' && expandedIcon && collapsedIcon) {
        return (
          <div 
            className={`accordion-item-chevron ${isOpen ? 'open' : ''}`} 
            data-testid={`${dataTestId || id}-custom-icon`}
            aria-hidden="true"
          >
            {isOpen ? expandedIcon : collapsedIcon}
          </div>
        );
      }

      // Plus/Minus icon type
      if (iconType === 'plus-minus') {
        return (
          <div
            className={`accordion-item-chevron accordion-item-chevron--plus-minus ${isOpen ? 'open' : ''}`}
            data-testid={`${dataTestId || id}-plus-minus-icon`}
            aria-hidden="true"
          >
            {isOpen ? (
              <MinusIcon size={16} aria-hidden="true" />
            ) : (
              <>
                <PlusIcon size={16} aria-hidden="true" />
              </>
            )}
          </div>
        );
      }

      // Default chevron icon
      return (
        <div 
          className={`accordion-item-chevron ${isOpen ? 'open' : ''}`} 
          data-testid={`${dataTestId || id}-chevron-icon`}
          aria-hidden="true"
        >
          <ChevronDownIcon size={16} aria-hidden="true" />
        </div>
      );
    }, [
      itemIcon,
      isOpen,
      dataTestId,
      id,
      iconType,
      expandedIcon,
      collapsedIcon
    ]);

    const contentStyle = useMemo<React.CSSProperties>(() => ({
      maxHeight: disableAnimations ? (isOpen ? 'none' : '0') : (isOpen ? 'var(--accordion-content-max-height, 500px)' : '0'),
      transition: disableAnimations ? 'none' : undefined,
    }), [disableAnimations, isOpen]);

    return (
      <div
        ref={ref}
        className={`
          accordion-item
          accordion-item--${variant}
          accordion-item--${itemSize}
          ${isOpen ? 'accordion-item--open' : ''}
          ${isDisabled ? 'accordion-item--disabled' : ''}
          ${isLoading ? 'accordion-item--loading' : ''}
          ${status !== 'default' ? `accordion-item--${status}` : ''}
          ${itemClassName || ''}
        `.trim()}
        data-testid={dataTestId}
        aria-expanded={isOpen}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
      >
        <div
          id={`accordion-header-${id}`}
          className="accordion-item-header"
          role="button"
          tabIndex={isDisabled || isLoading ? -1 : 0}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
          aria-disabled={isDisabled}
          aria-busy={isLoading}
          aria-describedby={status !== 'default' ? `accordion-status-${id}` : undefined}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          data-testid={`${dataTestId || id}-header`}
        >
          {chevronPosition === 'left' && showChevron && renderIcon()}
          <div className="accordion-item-header-content">{header}</div>
          {chevronPosition === 'right' && showChevron && renderIcon()}
        </div>
        <div
          id={`accordion-content-${id}`}
          className={`accordion-item-content ${isOpen ? 'accordion-item-content--open' : ''}`}
          role="region"
          aria-labelledby={`accordion-header-${id}`}
          ref={contentRef}
          style={contentStyle}
          data-testid={`${dataTestId || id}-content`}
        >
          <div className="accordion-item-body">
            {status !== 'default' && (
              <div 
                id={`accordion-status-${id}`} 
                className={`accordion-status accordion-status--${status}`}
                aria-live="polite"
              >
                <span className="visually-hidden">Status: {status}</span>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';
export default AccordionItem as React.FC<
  AccordionItemComponentProps & React.RefAttributes<HTMLDivElement>
>;
export { AccordionItem };

// Create a simple wrapper component for use as children
export const AccordionItemWrapper: React.FC<AccordionItemProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

AccordionItemWrapper.displayName = 'AccordionItemWrapper';
