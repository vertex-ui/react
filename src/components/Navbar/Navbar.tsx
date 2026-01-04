import React, { useState, useEffect } from 'react';
import { Link } from '../Link';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Flex } from '../Flex';
import { Container } from '../Container';
import { Autocomplete } from '../Autocomplete';
import {
  MenuIcon,
  CloseIcon,
  BellIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
} from '../../icons/IconComponents';
import { withParsedClasses } from '../../hoc/withParsedClasses';

import './Navbar.css';

// ----- Type Definitions -----

/**
 * Navigation item configuration
 */
export interface NavigationItem {
  /**
   * Label to display
   */
  label: string;
  /**
   * Link URL
   */
  href?: string;
  /**
   * Click handler (alternative to href)
   */
  onClick?: () => void;
  /**
   * Icon to display before label
   */
  icon?: React.ReactNode;
  /**
   * Badge to display next to label
   */
  badge?: string | number;
  /**
   * Badge variant
   */
  badgeVariant?: 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  /**
   * If true, item is marked as active
   */
  active?: boolean;
  /**
   * If true, item is disabled
   */
  disabled?: boolean;
  /**
   * Submenu items (for dropdown menus)
   */
  children?: NavigationItem[];
  /**
   * Mega menu columns (for large dropdown menus)
   */
  megaMenu?: MegaMenuColumn[];
}

/**
 * Mega menu column configuration
 */
export interface MegaMenuColumn {
  /**
   * Column title
   */
  title?: string;
  /**
   * Items in this column
   */
  items: NavigationItem[];
}

/**
 * Top bar configuration (above main navbar)
 */
export interface TopBarConfig {
  /**
   * Left side content/links
   */
  left?: React.ReactNode | NavigationItem[];
  /**
   * Right side content/links
   */
  right?: React.ReactNode | NavigationItem[];
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  textColor?: string;
}

// ----- Base Props -----

interface NavbarBaseProps {
  /**
   * Logo image source
   */
  logo?: string;
  /**
   * Logo alt text
   */
  logoAlt?: string;
  /**
   * Logo click handler
   */
  onLogoClick?: () => void;
  /**
   * Brand text (shown if no logo)
   */
  brandText?: string;
  /**
   * Main navigation items
   */
  navigationItems?: NavigationItem[];
  /**
   * If true, navbar will be sticky at the top
   * @default false
   */
  sticky?: boolean;
  /**
   * If true, navbar has a shadow
   * @default true
   */
  shadow?: boolean;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Top bar configuration
   */
  topBar?: TopBarConfig;
  /**
   * User profile section
   */
  user?: {
    name?: string;
    email?: string;
    avatar?: string;
    menuItems?: NavigationItem[];
  };
  /**
   * Search configuration
   */
  search?: {
    placeholder?: string;
    onSearch?: (query: string) => void;
  };
  /**
   * Search options for autocomplete
   */
  searchOptions?: any[];
  /**
   * Function to get label from search option
   */
  searchGetOptionLabel?: string | ((option: any) => string);
  /**
   * Function to get value from search option
   */
  searchGetOptionValue?: string | ((option: any) => string);
  /**
   * Function to get description from search option
   */
  searchGetOptionDescription?: string | ((option: any) => string | undefined);
  /**
   * Function to get icon from search option
   */
  searchGetOptionIcon?: string | ((option: any) => React.ReactNode);
  /**
   * No options message for search
   */
  searchNoOptionsMessage?: string;
  /**
   * If true, search is in loading state
   */
  searchLoading?: boolean;
  /**
   * Callback when search option is selected
   */
  onSearchSelect?: (value: string, option: any) => void;
  /**
   * Notifications badge count
   */
  notificationCount?: number;
  /**
   * Notification click handler
   */
  onNotificationClick?: () => void;
  /**
   * Shopping cart badge count
   */
  cartCount?: number;
  /**
   * Cart click handler
   */
  onCartClick?: () => void;
  /**
   * Action buttons (e.g., Login, Sign Up)
   */
  actions?: React.ReactNode;
  /**
   * If true, uses container for content width
   * @default true
   */
  containerized?: boolean;
}

// ----- Desktop Navbar Props -----

export interface NavbarDesktopProps extends NavbarBaseProps {
  /**
   * Layout variant
   * - single-row: Logo, nav, search, and actions in one row
   * - two-row: Logo/search in first row, nav in second row
   * - centered: Logo/nav/actions centered
   * @default 'single-row'
   */
  layout?: 'single-row' | 'two-row' | 'centered';
}

// ----- Mobile Navbar Props -----

export interface NavbarMobileProps extends NavbarBaseProps {
  /**
   * If true, drawer is open
   */
  isOpen?: boolean;
  /**
   * Callback when drawer state changes
   */
  onOpenChange?: (open: boolean) => void;
}

// ----- Responsive Navbar Props -----

export interface NavbarResponsiveProps extends NavbarBaseProps {
  /**
   * Layout variant for desktop
   * @default 'single-row'
   */
  desktopLayout?: 'single-row' | 'two-row' | 'centered';
  /**
   * Breakpoint for switching to mobile view (px)
   * @default 768
   */
  mobileBreakpoint?: number;
}

// ----- Helper Components -----

const NavItem: React.FC<{
  item: NavigationItem;
  mobile?: boolean;
  onItemClick?: () => void;
}> = ({ item, mobile = false, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.children && item.children.length > 0;
  const hasMegaMenu = item.megaMenu && item.megaMenu.length > 0;

  const handleClick = () => {
    if (item.onClick) {
      item.onClick();
      onItemClick?.();
    } else if (hasSubmenu || hasMegaMenu) {
      setIsOpen(!isOpen);
    } else if (item.href) {
      onItemClick?.();
    }
  };

  const itemClass = [
    'vtx-navbar__nav-item',
    item.active && 'vtx-navbar__nav-item--active',
    item.disabled && 'vtx-navbar__nav-item--disabled',
    (hasSubmenu || hasMegaMenu) && 'vtx-navbar__nav-item--with-submenu',
    mobile && 'vtx-navbar__nav-item--mobile',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {item.icon && <span className="vtx-navbar__nav-item-icon">{item.icon}</span>}
      <span className="vtx-navbar__nav-item-label">{item.label}</span>
      {item.badge && (
        <Badge size="sm" variant={item.badgeVariant || 'primary'}>
          {item.badge}
        </Badge>
      )}
      {(hasSubmenu || hasMegaMenu) && (
        <ChevronDownIcon
          size={16}
          className={`vtx-navbar__nav-item-arrow ${isOpen ? 'vtx-navbar__nav-item-arrow--open' : ''}`}
        />
      )}
    </>
  );

  if (mobile) {
    return (
      <div className="vtx-navbar__mobile-nav-item-wrapper">
        {item.href && !hasSubmenu && !hasMegaMenu ? (
          <Link href={item.href} className={itemClass} onClick={handleClick}>
            {content}
          </Link>
        ) : (
          <button className={itemClass} onClick={handleClick} disabled={item.disabled}>
            {content}
          </button>
        )}
        {(hasSubmenu || hasMegaMenu) && isOpen && (
          <div className="vtx-navbar__mobile-submenu">
            {hasSubmenu &&
              item.children!.map((child, index) => (
                <NavItem key={index} item={child} mobile onItemClick={onItemClick} />
              ))}
            {hasMegaMenu &&
              item.megaMenu!.map((column, colIndex) => (
                <div key={colIndex} className="vtx-navbar__mobile-megamenu-column">
                  {column.title && <div className="vtx-navbar__mobile-megamenu-title">{column.title}</div>}
                  {column.items.map((child, index) => (
                    <NavItem key={index} item={child} mobile onItemClick={onItemClick} />
                  ))}
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="vtx-navbar__nav-item-wrapper" onMouseLeave={() => setIsOpen(false)}>
      {item.href && !hasSubmenu && !hasMegaMenu ? (
        <Link href={item.href} className={itemClass} onClick={handleClick}>
          {content}
        </Link>
      ) : (
        <button
          className={itemClass}
          onClick={handleClick}
          onMouseEnter={() => (hasSubmenu || hasMegaMenu) && setIsOpen(true)}
          disabled={item.disabled}
        >
          {content}
        </button>
      )}
      {hasSubmenu && isOpen && (
        <div className="vtx-navbar__submenu">
          {item.children!.map((child, index) => (
            <NavItem key={index} item={child} onItemClick={() => setIsOpen(false)} />
          ))}
        </div>
      )}
      {hasMegaMenu && isOpen && (
        <div className="vtx-navbar__megamenu">
          <div className="vtx-navbar__megamenu-content">
            {item.megaMenu!.map((column, colIndex) => (
              <div key={colIndex} className="vtx-navbar__megamenu-column">
                {column.title && <div className="vtx-navbar__megamenu-title">{column.title}</div>}
                <div className="vtx-navbar__megamenu-items">
                  {column.items.map((child, index) => (
                    <NavItem key={index} item={child} onItemClick={() => setIsOpen(false)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const TopBar: React.FC<{ config: TopBarConfig; containerized?: boolean }> = ({
  config,
  containerized = true,
}) => {
  const renderItems = (items: React.ReactNode | NavigationItem[]) => {
    if (!items) return null;
    if (React.isValidElement(items)) return items;
    if (Array.isArray(items)) {
      return items.map((item, index) => <NavItem key={index} item={item} />);
    }
    return items;
  };

  const style: React.CSSProperties = {};
  if (config.backgroundColor) style.backgroundColor = config.backgroundColor;
  if (config.textColor) style.color = config.textColor;

  const content = (
    <Flex justify="between" align="center" className="vtx-navbar__topbar-content">
      <div className="vtx-navbar__topbar-left">{renderItems(config.left)}</div>
      <div className="vtx-navbar__topbar-right">{renderItems(config.right)}</div>
    </Flex>
  );

  return (
    <div className="vtx-navbar__topbar" style={style}>
      {containerized ? <Container>{content}</Container> : content}
    </div>
  );
};

// ----- Desktop Navbar Component -----

const NavbarDesktop: React.FC<NavbarDesktopProps> = ({
  logo,
  logoAlt = 'Logo',
  onLogoClick,
  brandText,
  navigationItems = [],
  sticky = false,
  shadow = true,
  backgroundColor,
  className = '',
  topBar,
  user,
  search,
  searchOptions = [],
  searchGetOptionLabel,
  searchGetOptionValue,
  searchGetOptionDescription,
  searchGetOptionIcon,
  searchNoOptionsMessage,
  searchLoading,
  onSearchSelect,
  notificationCount,
  onNotificationClick,
  cartCount,
  onCartClick,
  actions,
  containerized = true,
  layout = 'single-row',
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navbarClass = [
    'vtx-navbar',
    'vtx-navbar--desktop',
    `vtx-navbar--${layout}`,
    sticky && 'vtx-navbar--sticky',
    shadow && 'vtx-navbar--shadow',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {};
  if (backgroundColor) style.backgroundColor = backgroundColor;

  const logoSection = (
    <div className="vtx-navbar__logo">
      {logo ? (
        <img
          src={logo}
          alt={logoAlt}
          className="vtx-navbar__logo-image"
          onClick={onLogoClick}
          style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
        />
      ) : brandText ? (
        <span className="vtx-navbar__brand-text" onClick={onLogoClick}>
          {brandText}
        </span>
      ) : null}
    </div>
  );

  const navigationSection = navigationItems.length > 0 && (
    <nav className="vtx-navbar__nav">
      {navigationItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </nav>
  );

  const searchSection = (search || searchOptions.length > 0) && (
    <div className="vtx-navbar__search">
      <Autocomplete
        placeholder={search?.placeholder || 'Search...'}
        value={searchQuery}
        onChange={(value: string) => {
          setSearchQuery(value);
          search?.onSearch?.(value);
        }}
        options={searchOptions}
        getOptionLabel={searchGetOptionLabel}
        getOptionValue={searchGetOptionValue}
        getOptionDescription={searchGetOptionDescription}
        getOptionIcon={searchGetOptionIcon}
        noOptionsMessage={searchNoOptionsMessage || 'No results found'}
        loading={searchLoading}
        onSelect={(value: string, option: any) => {
          onSearchSelect?.(value, option);
          setSearchQuery('');
        }}
        showSearchIcon
        clearable
        size="sm"
        className="vtx-navbar__search-input"
      />
    </div>
  );

  const iconsSection = (
    <div className="vtx-navbar__icons">
      {notificationCount !== undefined && (
        <button className="vtx-navbar__icon-button" onClick={onNotificationClick}>
          <Badge
            content={notificationCount > 0 ? String(notificationCount) : ''}
            variant="error"
            size="sm"
          >
            <BellIcon size={20} />
          </Badge>
        </button>
      )}
      {cartCount !== undefined && (
        <button className="vtx-navbar__icon-button" onClick={onCartClick}>
          <Badge content={cartCount > 0 ? String(cartCount) : ''} variant="error" size="sm">
            <ShoppingCartIcon size={20} />
          </Badge>
        </button>
      )}
    </div>
  );

  const userSection = user && (
    <button className="vtx-navbar__user-button">
      <Avatar src={user.avatar} alt={user.name} size="sm" />
      {user.name && <span className="vtx-navbar__user-name">{user.name}</span>}
      <ChevronDownIcon size={16} />
    </button>
  );

  const actionsSection = actions && <div className="vtx-navbar__actions">{actions}</div>;

  const renderLayout = () => {
    if (layout === 'two-row') {
      return (
        <>
          <div className="vtx-navbar__row vtx-navbar__row--top">
            {logoSection}
            {searchSection}
            <div className="vtx-navbar__row-end">
              {iconsSection}
              {userSection}
              {actionsSection}
            </div>
          </div>
          <div className="vtx-navbar__row vtx-navbar__row--bottom">{navigationSection}</div>
        </>
      );
    }

    if (layout === 'centered') {
      return (
        <div className="vtx-navbar__row vtx-navbar__row--centered">
          {logoSection}
          {navigationSection}
          <div className="vtx-navbar__row-end">
            {searchSection}
            {iconsSection}
            {userSection}
            {actionsSection}
          </div>
        </div>
      );
    }

    // single-row (default)
    return (
      <div className="vtx-navbar__row">
        {logoSection}
        {navigationSection}
        <div className="vtx-navbar__row-end">
          {searchSection}
          {iconsSection}
          {userSection}
          {actionsSection}
        </div>
      </div>
    );
  };

  return (
    <>
      {topBar && <TopBar config={topBar} containerized={containerized} />}
      <div className={navbarClass} style={style}>
        {containerized ? <Container>{renderLayout()}</Container> : renderLayout()}
      </div>
    </>
  );
};

// ----- Mobile Navbar Component -----

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  logo,
  logoAlt = 'Logo',
  onLogoClick,
  brandText,
  navigationItems = [],
  sticky = false,
  shadow = true,
  backgroundColor,
  className = '',
  topBar,
  user,
  search,
  searchOptions = [],
  searchGetOptionLabel,
  searchGetOptionValue,
  searchGetOptionDescription,
  searchGetOptionIcon,
  searchNoOptionsMessage,
  searchLoading,
  onSearchSelect,
  notificationCount,
  onNotificationClick,
  cartCount,
  onCartClick,
  actions,
  containerized = true,
  isOpen: controlledIsOpen,
  onOpenChange,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    const newValue = !isOpen;
    if (!isControlled) {
      setInternalIsOpen(newValue);
    }
    onOpenChange?.(newValue);
  };

  const handleClose = () => {
    if (!isControlled) {
      setInternalIsOpen(false);
    }
    onOpenChange?.(false);
  };

  const navbarClass = [
    'vtx-navbar',
    'vtx-navbar--mobile',
    sticky && 'vtx-navbar--sticky',
    shadow && 'vtx-navbar--shadow',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {};
  if (backgroundColor) style.backgroundColor = backgroundColor;

  return (
    <>
      {topBar && <TopBar config={topBar} containerized={containerized} />}
      <div className={navbarClass} style={style}>
        {containerized ? (
          <Container>
            <Flex justify="between" align="center" className="vtx-navbar__mobile-header">
              <div className="vtx-navbar__logo">
                {logo ? (
                  <img
                    src={logo}
                    alt={logoAlt}
                    className="vtx-navbar__logo-image"
                    onClick={onLogoClick}
                  />
                ) : brandText ? (
                  <span className="vtx-navbar__brand-text" onClick={onLogoClick}>
                    {brandText}
                  </span>
                ) : null}
              </div>
              <div className="vtx-navbar__mobile-icons">
                {notificationCount !== undefined && (
                  <button className="vtx-navbar__icon-button" onClick={onNotificationClick}>
                    <Badge content={notificationCount > 0 ? String(notificationCount) : ''} variant="error" size="sm">
                      <BellIcon size={20} />
                    </Badge>
                  </button>
                )}
                {cartCount !== undefined && (
                  <button className="vtx-navbar__icon-button" onClick={onCartClick}>
                    <Badge content={cartCount > 0 ? String(cartCount) : ''} variant="error" size="sm">
                      <ShoppingCartIcon size={20} />
                    </Badge>
                  </button>
                )}
                <button className="vtx-navbar__menu-button" onClick={handleToggle}>
                  {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                </button>
              </div>
            </Flex>
          </Container>
        ) : (
          <Flex justify="between" align="center" className="vtx-navbar__mobile-header">
            {/* ... same content without Container ... */}
          </Flex>
        )}
      </div>

      {/* Mobile Drawer */}
      <div className={`vtx-navbar__drawer ${isOpen ? 'vtx-navbar__drawer--open' : ''}`}>
        <div className="vtx-navbar__drawer-content">
          {(search || searchOptions.length > 0) && (
            <div className="vtx-navbar__drawer-search">
              <Autocomplete
                placeholder={search?.placeholder || 'Search...'}
                value={searchQuery}
                onChange={(value: string) => {
                  setSearchQuery(value);
                  search?.onSearch?.(value);
                }}
                options={searchOptions}
                getOptionLabel={searchGetOptionLabel}
                getOptionValue={searchGetOptionValue}
                getOptionDescription={searchGetOptionDescription}
                getOptionIcon={searchGetOptionIcon}
                noOptionsMessage={searchNoOptionsMessage || 'No results found'}
                loading={searchLoading}
                onSelect={(value: string, option: any) => {
                  onSearchSelect?.(value, option);
                  setSearchQuery('');
                  handleClose();
                }}
                showSearchIcon
                clearable
                fullWidth
                size="md"
              />
            </div>
          )}

          {navigationItems.length > 0 && (
            <nav className="vtx-navbar__drawer-nav">
              {navigationItems.map((item, index) => (
                <NavItem key={index} item={item} mobile onItemClick={handleClose} />
              ))}
            </nav>
          )}

          {user && (
            <div className="vtx-navbar__drawer-user">
              <Flex align="center" gap={3}>
                <Avatar src={user.avatar} alt={user.name} size="md" />
                <div>
                  {user.name && <div className="vtx-navbar__drawer-user-name">{user.name}</div>}
                  {user.email && <div className="vtx-navbar__drawer-user-email">{user.email}</div>}
                </div>
              </Flex>
              {user.menuItems && user.menuItems.length > 0 && (
                <div className="vtx-navbar__drawer-user-menu">
                  {user.menuItems.map((item, index) => (
                    <NavItem key={index} item={item} mobile onItemClick={handleClose} />
                  ))}
                </div>
              )}
            </div>
          )}

          {actions && <div className="vtx-navbar__drawer-actions">{actions}</div>}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="vtx-navbar__overlay" onClick={handleClose} />}
    </>
  );
};

// ----- Responsive Navbar Component -----

const NavbarResponsive: React.FC<NavbarResponsiveProps> = ({
  desktopLayout = 'single-row',
  mobileBreakpoint = 768,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  return isMobile ? (
    <NavbarMobile {...props} />
  ) : (
    <NavbarDesktop {...props} layout={desktopLayout} />
  );
};

// ----- Exports -----

export const Navbar = Object.assign(NavbarResponsive, {
  Desktop: withParsedClasses(NavbarDesktop) as React.FC<NavbarDesktopProps>,
  Mobile: withParsedClasses(NavbarMobile) as React.FC<NavbarMobileProps>,
  Responsive: withParsedClasses(NavbarResponsive) as React.FC<NavbarResponsiveProps>,
});

export default Navbar as React.FC<NavbarResponsiveProps & React.RefAttributes<HTMLDivElement>>;
