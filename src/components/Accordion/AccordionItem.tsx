import React, { useRef } from 'react';
import { AccordionItemComponentProps, AccordionItemProps } from './types';


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
      isOpen,
      onToggle,
      variant = 'default',
      size = 'md',
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
    const contentRef = useRef<HTMLDivElement>(null);
    const { 
      id, 
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

    const handleToggle = () => {
      if (!isDisabled && !isLoading) {
        onToggle();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleToggle();
      }
    };

    const getIcon = () => {
      // Use item-specific icons if provided
      if (itemIcon) {
        return (
          <div 
            className={`accordion-item-chevron ${isOpen ? 'open' : ''}`} 
            data-testid={`${dataTestId || id}-custom-icon`}
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
          >
            {isOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 4V12M4 8H12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        );
      }

      // Default chevron icon
      return (
        <div 
          className={`accordion-item-chevron ${isOpen ? 'open' : ''}`} 
          data-testid={`${dataTestId || id}-chevron-icon`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={`
          accordion-item
          accordion-item--${variant}
          accordion-item--${size}
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
          {chevronPosition === 'left' && showChevron && getIcon()}
          <div className="accordion-item-header-content">{header}</div>
          {chevronPosition === 'right' && showChevron && getIcon()}
        </div>
        <div
          id={`accordion-content-${id}`}
          className={`accordion-item-content ${isOpen ? 'accordion-item-content--open' : ''}`}
          role="region"
          aria-labelledby={`accordion-header-${id}`}
          ref={contentRef}
          style={{
            maxHeight: disableAnimations ? (isOpen ? 'none' : '0') : (isOpen ? '500px' : '0'),
            transition: disableAnimations ? 'none' : undefined,
          }}
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

// Create a simple wrapper component for use as children
export const AccordionItemWrapper: React.FC<AccordionItemProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

AccordionItemWrapper.displayName = 'AccordionItem';

