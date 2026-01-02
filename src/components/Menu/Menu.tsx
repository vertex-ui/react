import { ChevronDownIcon, ChevronUpIcon, MenuIcon, CloseIcon } from '../../icons/IconComponents';
import React, { useState, useRef, useEffect } from 'react';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './Menu.css';

export interface MenuItemProps {
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
   * Icon to display after label
   */
  rightIcon?: React.ReactNode;
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
   * Item variant
   * @default 'default'
   */
  variant?: 'default' | 'danger';
  /**
   * Keyboard shortcut to display
   */
  shortcut?: string;
  /**
   * Divider after this item
   * @default false
   */
  divider?: boolean;
  /**
   * Submenu items for multi-level menus
   */
  items?: MenuItemProps[];
}

export interface MenuProps {
  /**
   * Menu items configuration
   */
  items?: MenuItemProps[];
  /**
   * Custom children (MenuItem components)
   */
  children?: React.ReactNode;
  /**
   * Menu orientation
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Whether menu is responsive (converts to hamburger on mobile)
   * @default true
   */
  responsive?: boolean;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Menu width (for vertical menus)
   */
  width?: string | number;
}

// Chevron icon for submenus (down when closed, up when open)
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  isOpen ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />
);

/**
 * MenuItem component - Individual menu item with submenu support
 */
export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      label,
      onClick,
      icon,
      rightIcon,
      disabled = false,
      active = false,
      variant = 'default',
      shortcut,
      divider = false,
      items,
    },
    ref
  ) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);
    const hasSubmenu = items && items.length > 0;

    const handleClick = () => {
      if (disabled) return;

      if (hasSubmenu) {
        setIsSubmenuOpen(!isSubmenuOpen);
      } else if (onClick) {
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
      } else if (e.key === 'ArrowDown' && hasSubmenu && !isSubmenuOpen) {
        e.preventDefault();
        setIsSubmenuOpen(true);
      } else if (e.key === 'ArrowUp' && hasSubmenu && isSubmenuOpen) {
        e.preventDefault();
        setIsSubmenuOpen(false);
      }
    };

    const displayRightIcon =
      rightIcon || (hasSubmenu ? <ChevronIcon isOpen={isSubmenuOpen} /> : null);

    return (
      <>
        <div
          ref={ref || itemRef}
          className={[
            'vtx-menu-item',
            active && 'vtx-menu-item--active',
            disabled && 'vtx-menu-item--disabled',
            variant !== 'default' && `vtx-menu-item--${variant}`,
            hasSubmenu && 'vtx-menu-item--has-submenu',
            isSubmenuOpen && 'vtx-menu-item--submenu-open',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="menuitem"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          aria-haspopup={hasSubmenu ? 'menu' : undefined}
          aria-expanded={hasSubmenu ? isSubmenuOpen : undefined}
        >
          <Flex align="center" gap={8} style={{ flex: 1 }}>
            {icon && <span className="vtx-menu-item-icon">{icon}</span>}
            <Text variant="body2" noMargin style={{ flex: 1 }}>
              {label}
            </Text>
            {shortcut && (
              <Text
                variant="caption"
                textColor="var(--color-neutral-500)"
                noMargin
                className="vtx-menu-item-shortcut"
              >
                {shortcut}
              </Text>
            )}
            {displayRightIcon && (
              <span className="vtx-menu-item-right-icon">{displayRightIcon}</span>
            )}
          </Flex>
        </div>
        {hasSubmenu && isSubmenuOpen && (
          <div className="vtx-submenu" role="menu">
            {items.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        )}
        {divider && <div className="vtx-menu-divider" role="separator" />}
      </>
    );
  }
);

MenuItem.displayName = 'MenuItem';

/**
 * Menu component - Navigation or action menu with responsive support
 *
 * @example
 * Basic menu with items array
 * ```tsx
 * <Menu
 *   items={[
 *     { label: 'Profile', icon: <UserIcon />, onClick: () => {} },
 *     { label: 'Settings', icon: <SettingsIcon />, onClick: () => {} },
 *     { label: 'Logout', icon: <LogoutIcon />, onClick: () => {}, variant: 'danger' }
 *   ]}
 * />
 * ```
 *
 * @example
 * Horizontal menu with custom children
 * ```tsx
 * <Menu orientation="horizontal">
 *   <MenuItem label="Home" active />
 *   <MenuItem label="Products" />
 *   <MenuItem label="About" />
 * </Menu>
 * ```
 *
 * @example
 * Responsive menu (hamburger on mobile)
 * ```tsx
 * <Menu responsive items={menuItems} />
 * ```
 */
const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    { items, children, orientation = 'vertical', responsive = true, className = '', width },
    ref
  ) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close mobile menu on outside click
    useEffect(() => {
      if (!responsive || !isMobileMenuOpen) return;

      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [responsive, isMobileMenuOpen]);

    // Close mobile menu on Escape key
    useEffect(() => {
      if (!responsive || !isMobileMenuOpen) return;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [responsive, isMobileMenuOpen]);

    const menuContent = items
      ? items.map((item, index) => <MenuItem key={index} {...item} />)
      : children;

    const menuClassNames = [
      'vtx-menu',
      `vtx-menu--${orientation}`,
      responsive && 'vtx-menu--responsive',
      isMobileMenuOpen && 'vtx-menu--mobile-open',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const menuStyle: React.CSSProperties = {
      width:
        orientation === 'vertical' && width
          ? typeof width === 'number'
            ? `${width}px`
            : width
          : undefined,
    };

    return (
      <div ref={menuRef} className="vtx-menu-container">
        {responsive && (
          <button
            className="vtx-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        )}
        <div ref={ref} className={menuClassNames} role="menu" style={menuStyle}>
          {menuContent}
        </div>
      </div>
    );
  }
);

Menu.displayName = 'Menu';

const MenuWithParsedClasses = withParsedClasses(Menu);
export default MenuWithParsedClasses as React.FC<MenuProps & React.RefAttributes<HTMLDivElement>>;
export { MenuWithParsedClasses as Menu };
