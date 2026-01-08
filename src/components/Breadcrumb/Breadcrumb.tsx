"use client";

import React from 'react';
import { useThemeContext } from '../../theme/ThemeProvider';
import { ChevronRightIcon } from '../../icons/IconComponents';
import Link from '../Link/Link';
import Text from '../Text/Text';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  /**
   * Label text for the breadcrumb item (optional if using icon-only)
   */
  label?: string;
  /**
   * URL to navigate to (for native links)
   */
  href?: string;
  /**
   * Icon to display before label
   */
  icon?: React.ReactNode;
  /**
   * If true, this item is the current/active page
   * @default false
   */
  active?: boolean;
  /**
   * Props to pass to custom link component
   */
  linkProps?: Record<string, any>;
}

export interface BreadcrumbProps {
  /**
   * Array of breadcrumb items
   */
  items: BreadcrumbItem[];
  /**
   * Custom separator between items
   * @default <ChevronRightIcon />
   */
  separator?: React.ReactNode;
  /**
   * Custom Link component to use (e.g., Next.js Link or React Router Link)
   * @example
   * import { Link as RouterLink } from 'react-router-dom'
   * <Breadcrumb linkComponent={RouterLink} items={items} />
   */
  linkComponent?: React.ElementType;
  /**
   * Maximum number of items to show before collapsing
   * Shows first, ..., and last items
   */
  maxItems?: number;
  /**
   * Size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom separator className
   */
  separatorClassName?: string;
}

/**
 * Breadcrumb component - Navigation aid showing current location hierarchy
 *
 * A flexible breadcrumb component that works with native anchors, React Router, Next.js,
 * or any custom routing library. Supports icons, custom separators, and collapsing.
 *
 * @example
 * Basic usage
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'Electronics', href: '/products/electronics' },
 *     { label: 'Laptops', active: true }
 *   ]}
 * />
 * ```
 *
 * @example
 * With React Router
 * ```tsx
 * import { Link as RouterLink } from 'react-router-dom'
 * 
 * <Breadcrumb
 *   linkComponent={RouterLink}
 *   items={[
 *     { label: 'Home', linkProps: { to: '/' } },
 *     { label: 'Dashboard', linkProps: { to: '/dashboard' }, active: true }
 *   ]}
 * />
 * ```
 *
 * @example
 * With Next.js
 * ```tsx
 * import NextLink from 'next/link'
 * 
 * <Breadcrumb
 *   linkComponent={NextLink}
 *   items={[
 *     { label: 'Home', linkProps: { href: '/' } },
 *     { label: 'About', linkProps: { href: '/about' }, active: true }
 *   ]}
 * />
 * ```
 *
 * @example
 * With icons and custom separator
 * ```tsx
 * <Breadcrumb
 *   separator="›"
 *   items={[
 *     { label: 'Home', href: '/', icon: <HomeIcon /> },
 *     { label: 'Products', href: '/products', icon: <PackageIcon /> },
 *     { label: 'Current', active: true }
 *   ]}
 * />
 * ```
 *
 * @example
 * With maxItems (collapsing)
 * ```tsx
 * <Breadcrumb
 *   maxItems={4}
 *   items={longItemsList}
 * />
 * ```
 */
const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      items,
      separator = <ChevronRightIcon size={16} />,
      linkComponent,
      maxItems,
      size,
      className = '',
      separatorClassName = '',
    },
    ref
  ) => {
    const { theme } = useThemeContext();
    const breadcrumbSize = size || theme.defaultSize;

    // Handle collapsing if maxItems is set
    const displayItems = React.useMemo(() => {
      if (!maxItems || items.length <= maxItems) {
        return items;
      }

      const firstItem = items[0];
      const lastItems = items.slice(-(maxItems - 2));
      
      return [
        firstItem,
        { label: '...', active: false },
        ...lastItems,
      ];
    }, [items, maxItems]);

    // Mobile display: show only first and last items
    const mobileDisplayItems = React.useMemo(() => {
      if (items.length <= 2) {
        return items;
      }
      
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      
      return [firstItem, { label: '...', active: false }, lastItem];
    }, [items]);

    const breadcrumbClassNames = [
      'vtx-breadcrumb',
      `vtx-breadcrumb--${breadcrumbSize}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const separatorClassNames = [
      'vtx-breadcrumb-separator',
      separatorClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const renderItem = (item: BreadcrumbItem, index: number) => {
      const isLast = index === displayItems.length - 1;
      const isActive = item.active || isLast;
      const isEllipsis = item.label === '...';

      const itemClassNames = [
        'vtx-breadcrumb-item',
        isActive && 'vtx-breadcrumb-item--active',
        isEllipsis && 'vtx-breadcrumb-item--ellipsis',
      ]
        .filter(Boolean)
        .join(' ');

      const content = (
        <>
          {item.icon && <span className="vtx-breadcrumb-item-icon">{item.icon}</span>}
          {item.label && <Text as="span" variant="body2" className="vtx-breadcrumb-item-label">{item.label}</Text>}
        </>
      );

      // Render ellipsis as plain text
      if (isEllipsis) {
        return (
          <li key={index} className={itemClassNames}>
            <span className="vtx-breadcrumb-item-content">{item.label}</span>
          </li>
        );
      }

      // Render active/last item as plain text
      if (isActive) {
        return (
          <li key={index} className={itemClassNames} aria-current="page">
            <span className="vtx-breadcrumb-item-content">{content}</span>
          </li>
        );
      }

      // Check if item has a link
      const hasLink = item.href || item.linkProps;

      // Render with Link component if link exists
      if (hasLink) {
        return (
          <li key={index} className={itemClassNames}>
            <Link
              href={item.href}
              component={linkComponent}
              componentProps={item.linkProps}
              className="vtx-breadcrumb-item-link"
              color="inherit"
            >
              {content}
            </Link>
          </li>
        );
      }

      // Render as plain text if no link
      return (
        <li key={index} className={itemClassNames}>
          <span className="vtx-breadcrumb-item-content">{content}</span>
        </li>
      );
    };

    return (
      <nav ref={ref} className={breadcrumbClassNames} aria-label="Breadcrumb">
        {/* Desktop view */}
        <ol className="vtx-breadcrumb-list vtx-breadcrumb-list--desktop">
          {displayItems.map((item, index) => (
            <React.Fragment key={index}>
              {renderItem(item, index)}
              {index < displayItems.length - 1 && (
                <li className={separatorClassNames} aria-hidden="true">
                  {separator}
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
        
        {/* Mobile view */}
        <ol className="vtx-breadcrumb-list vtx-breadcrumb-list--mobile">
          {mobileDisplayItems.map((item, index) => (
            <React.Fragment key={index}>
              {renderItem(item, index)}
              {index < mobileDisplayItems.length - 1 && (
                <li className={separatorClassNames} aria-hidden="true">
                  {separator}
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb as React.FC<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
export { Breadcrumb };
