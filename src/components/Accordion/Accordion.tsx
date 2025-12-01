import React, { useState, useCallback, Children, isValidElement } from 'react';
import AccordionItem from './AccordionItem';
import { AccordionProps, AccordionItemProps } from './types';
import './Accordion.css';

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      children,
      allowMultiple = false,
      defaultOpenItems = [],
      openItems,
      onToggle,
      variant = 'default',
      size = 'md',
      className = '',
      style,
      showChevron = true,
      chevronPosition = 'right',
      expandedIcon,
      collapsedIcon,
      iconType = 'chevron',
      showDivider = true,
      collapsible = true,
      ...props
    },
    ref
  ) => {
    // Handle both controlled and uncontrolled modes
    const [internalOpenItems, setInternalOpenItems] = useState<string[]>(defaultOpenItems);
    const currentOpenItems = openItems !== undefined ? openItems : internalOpenItems;
    const isControlled = openItems !== undefined;

    // Convert children to items if children are provided
    const accordionItems: AccordionItemProps[] =
      items ||
      Children.toArray(children)
        .filter((child) => isValidElement(child))
        .map((child, index) => {
          if (isValidElement(child) && child.props) {
            return {
              id: child.props.id || `accordion-item-${index}`,
              header: child.props.header || `Item ${index + 1}`,
              children: child.props.children,
              disabled: child.props.disabled,
              className: child.props.className,
            };
          }
          return {
            id: `accordion-item-${index}`,
            header: `Item ${index + 1}`,
            children: child,
          };
        });

    const handleItemToggle = useCallback(
      (itemId: string) => {
        let newOpenItems: string[];

        if (allowMultiple) {
          // Multiple items can be open
          if (currentOpenItems.includes(itemId)) {
            // Close the item
            newOpenItems = currentOpenItems.filter((id) => id !== itemId);
          } else {
            // Open the item
            newOpenItems = [...currentOpenItems, itemId];
          }
        } else {
          // Only one item can be open at a time
          if (currentOpenItems.includes(itemId)) {
            // Close the item (only if collapsible)
            newOpenItems = collapsible ? [] : currentOpenItems;
          } else {
            // Open this item, close others
            newOpenItems = [itemId];
          }
        }

        if (!isControlled) {
          setInternalOpenItems(newOpenItems);
        }
        onToggle?.(newOpenItems);
      },
      [allowMultiple, collapsible, currentOpenItems, isControlled, onToggle]
    );

    return (
      <div
        ref={ref}
        className={`
          accordion
          accordion--${variant}
          accordion--${size}
          ${showDivider ? 'accordion--divider' : ''}
          ${className}
        `.trim()}
        style={style}
        role="presentation"
        {...props}
      >
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={currentOpenItems.includes(item.id)}
            onToggle={() => handleItemToggle(item.id)}
            variant={variant}
            size={size}
            showChevron={showChevron}
            chevronPosition={chevronPosition}
            expandedIcon={expandedIcon}
            collapsedIcon={collapsedIcon}
            iconType={iconType}
          />
        ))}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';

export default Accordion;
