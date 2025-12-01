import React, { useRef } from 'react';
import { AccordionItemComponentProps, AccordionItemProps } from './types';

const AccordionItem: React.FC<AccordionItemComponentProps> = ({
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
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { id, header, children, disabled, className: itemClassName } = item;

  const handleToggle = () => {
    if (!disabled) {
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
    // If custom icons are provided, use them
    if (iconType === 'custom' && expandedIcon && collapsedIcon) {
      return (
        <div className={`accordion-item-chevron ${isOpen ? 'open' : ''}`} data-testid="custom-icon">
          {isOpen ? expandedIcon : collapsedIcon}
        </div>
      );
    }

    // Plus/Minus icon type
    if (iconType === 'plus-minus') {
      return (
        <div
          className={`accordion-item-chevron ${isOpen ? 'open' : ''}`}
          data-testid="plus-minus-icon"
        >
          {isOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
      <div className={`accordion-item-chevron ${isOpen ? 'open' : ''}`} data-testid="chevron-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
      className={`
        accordion-item
        accordion-item--${variant}
        accordion-item--${size}
        ${isOpen ? 'accordion-item--open' : ''}
        ${disabled ? 'accordion-item--disabled' : ''}
        ${itemClassName || ''}
      `.trim()}
    >
      <div
        className="accordion-item-header"
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        aria-disabled={disabled}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
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
          maxHeight: isOpen ? '500px' : '0',
        }}
      >
        <div className="accordion-item-body">{children}</div>
      </div>
    </div>
  );
};

// Create a simple wrapper component for use as children
export const AccordionItemWrapper: React.FC<AccordionItemProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

AccordionItemWrapper.displayName = 'AccordionItem';

export default AccordionItem;
