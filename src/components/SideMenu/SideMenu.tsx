"use client";

import React, { useState } from 'react';
import { Flex } from '../Flex';
import { Typography } from '../Typography';
import './SideMenu.css';

export interface SideMenuItemProps {
  /**
   * Menu item label
   */
  label: string;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Icon to display before label
   */
  icon?: React.ReactNode;
  /**
   * Whether the item is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether the item is active/selected
   * @default false
   */
  active?: boolean;
  /**
   * Submenu items for nested navigation
   */
  items?: SideMenuItemProps[];
  /**
   * Badge content (number or text)
   */
  badge?: string | number;
  /**
   * Custom href for links
   */
  href?: string;
}

export interface SideMenuProps {
  /**
   * Menu items configuration
   */
  items: SideMenuItemProps[];
  /**
   * Whether the sidebar is collapsed
   * @default false
   */
  collapsed?: boolean;
  /**
   * Collapse toggle handler
   */
  onCollapseToggle?: (collapsed: boolean) => void;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Sidebar width when expanded
   * @default '260px'
   */
  width?: string | number;
  /**
   * Sidebar width when collapsed
   * @default '80px'
   */
  collapsedWidth?: string | number;
  /**
   * Header content (logo, title)
   */
  header?: React.ReactNode;
  /**
   * Footer content
   */
  footer?: React.ReactNode;
  /**
   * Custom padding for header
   * @default '20px 16px'
   */
  headerPadding?: string | number;
  /**
   * Custom padding for footer
   * @default '20px 16px'
   */
  footerPadding?: string | number;
}

// Chevron icon for submenu expansion
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={`vtx-sidemenu-chevron ${isOpen ? 'vtx-sidemenu-chevron--open' : ''}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

/**
 * SideMenuItem component - Individual sidebar menu item with submenu support
 */
export const SideMenuItem = React.forwardRef<
  HTMLDivElement,
  SideMenuItemProps & { collapsed?: boolean; level?: number }
>(
  (
    {
      label,
      onClick,
      icon,
      disabled = false,
      active = false,
      items,
      badge,
      href,
      collapsed = false,
      level = 0,
    },
    ref
  ) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const hasSubmenu = items && items.length > 0;

    const handleClick = (e: React.MouseEvent) => {
      if (disabled) return;

      if (hasSubmenu) {
        e.preventDefault();
        setIsSubmenuOpen(!isSubmenuOpen);
      } else if (onClick) {
        e.preventDefault();
        onClick();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (hasSubmenu) {
          setIsSubmenuOpen(!isSubmenuOpen);
        } else {
          onClick?.();
        }
      }
    };

    const content = (
      <>
        <Flex align="center" gap={collapsed ? 0 : 12} style={{ flex: 1, minWidth: 0 }}>
          {icon && <span className="vtx-sidemenu-item-icon">{icon}</span>}
          {!collapsed && (
            <>
              <Typography
                variant="body2"
                noMargin
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </Typography>
              {badge && <span className="vtx-sidemenu-item-badge">{badge}</span>}
              {hasSubmenu && <ChevronIcon isOpen={isSubmenuOpen} />}
            </>
          )}
        </Flex>
      </>
    );

    const itemClasses = [
      'vtx-sidemenu-item',
      active && 'vtx-sidemenu-item--active',
      disabled && 'vtx-sidemenu-item--disabled',
      hasSubmenu && 'vtx-sidemenu-item--has-submenu',
      collapsed && 'vtx-sidemenu-item--collapsed',
    ]
      .filter(Boolean)
      .join(' ');

    const ItemWrapper = href ? 'a' : 'div';

    return (
      <>
        <ItemWrapper
          ref={ref as any}
          className={itemClasses}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="menuitem"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          aria-expanded={hasSubmenu ? isSubmenuOpen : undefined}
          href={href}
          title={collapsed ? label : undefined}
          data-label={collapsed ? label : undefined}
        >
          {content}
        </ItemWrapper>
        {hasSubmenu && isSubmenuOpen && !collapsed && (
          <div className="vtx-sidemenu-submenu">
            {items.map((item, index) => (
              <SideMenuItem key={index} {...item} collapsed={collapsed} level={level + 1} />
            ))}
          </div>
        )}
      </>
    );
  }
);

SideMenuItem.displayName = 'SideMenuItem';

/**
 * SideMenu component - Professional sidebar navigation for admin panels
 *
 * @example
 * Basic sidebar menu
 * ```tsx
 * <SideMenu
 *   items={[
 *     { label: 'Dashboard', icon: <DashboardIcon />, active: true },
 *     {
 *       label: 'Products',
 *       icon: <ProductIcon />,
 *       items: [
 *         { label: 'All Products', onClick: () => {} },
 *         { label: 'Categories', onClick: () => {} }
 *       ]
 *     },
 *     { label: 'Settings', icon: <SettingsIcon />, onClick: () => {} }
 *   ]}
 * />
 * ```
 *
 * @example
 * Collapsible sidebar with header
 * ```tsx
 * <SideMenu
 *   collapsed={isCollapsed}
 *   onCollapseToggle={setIsCollapsed}
 *   header={<Logo />}
 *   items={menuItems}
 * />
 * ```
 */
const SideMenu = React.forwardRef<HTMLDivElement, SideMenuProps>(
  (
    {
      items,
      collapsed = false,
      onCollapseToggle: _onCollapseToggle,
      className = '',
      width = '260px',
      collapsedWidth = '80px',
      header,
      footer,
      headerPadding,
      footerPadding,
    },
    ref
  ) => {
    const sidebarWidth = collapsed
      ? typeof collapsedWidth === 'number'
        ? `${collapsedWidth}px`
        : collapsedWidth
      : typeof width === 'number'
      ? `${width}px`
      : width;

    const sidebarClasses = ['vtx-sidemenu', collapsed && 'vtx-sidemenu--collapsed', className]
      .filter(Boolean)
      .join(' ');

    return (
      <aside ref={ref} className={sidebarClasses} style={{ width: sidebarWidth }} role="navigation">
        {header && (
          <div
            className="vtx-sidemenu-header"
            style={headerPadding ? { padding: typeof headerPadding === 'number' ? `${headerPadding}px` : headerPadding } : undefined}
          >
            {header}
          </div>
        )}

        <div className="vtx-sidemenu-content">
          {items.map((item, index) => (
            <SideMenuItem key={index} {...item} collapsed={collapsed} />
          ))}
        </div>

        {footer && (
          <div
            className="vtx-sidemenu-footer"
            style={footerPadding ? { padding: typeof footerPadding === 'number' ? `${footerPadding}px` : footerPadding } : undefined}
          >
            {footer}
          </div>
        )}
      </aside>
    );
  }
);

SideMenu.displayName = 'SideMenu';

export default SideMenu as React.FC<SideMenuProps & React.RefAttributes<HTMLDivElement>>;
export { SideMenu };
