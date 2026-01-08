import React, { useState, useEffect } from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import {
  NavbarDesktopProps,
  NavbarMobileProps,
  NavbarResponsiveProps,
} from './types';
import { SingleRowNavbar } from './variants/SingleRowNavbar';
import { TwoRowNavbar } from './variants/TwoRowNavbar';
import { CenteredNavbar } from './variants/CenteredNavbar';
import { TransparentNavbar } from './variants/TransparentNavbar';
import { TopBar } from './TopBar';
import { NavItem } from './NavItem';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { Autocomplete } from '../Autocomplete';
import { Badge } from '../Badge';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import {
  MenuIcon,
  CloseIcon,
  BellIcon,
  ShoppingCartIcon,
} from '../../icons/IconComponents';

import './Navbar.css';

// Re-export types
export * from './types';

// ----- Desktop Navbar Component -----

const NavbarDesktop: React.FC<NavbarDesktopProps> = (props) => {
  const { variant = 'single-row', layout, transparent, sticky, topBar, containerized = true } = props;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (transparent && sticky) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return undefined;
  }, [transparent, sticky]);

  const wrapperClass = [
    'vtx-navbar-wrapper',
    transparent && 'vtx-navbar-wrapper--transparent',
    isScrolled && 'vtx-navbar-wrapper--scrolled',
  ].filter(Boolean).join(' ');

  const renderVariant = () => {
    if (variant === 'two-row' || layout === 'two-row') {
      return <TwoRowNavbar {...props} topBar={undefined} />; // TopBar handled by wrapper
    }
    if (variant === 'centered' || layout === 'centered') {
      return <CenteredNavbar {...props} topBar={undefined} />;
    }
    if (variant === 'transparent') {
      return <TransparentNavbar {...props} topBar={undefined} />;
    }
    return <SingleRowNavbar {...props} topBar={undefined} />;
  };

  return (
    <div className={wrapperClass}>
      {topBar && <TopBar config={topBar} containerized={containerized} />}
      {renderVariant()}
    </div>
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
                  <Button variant="ghost" iconOnly onClick={onNotificationClick} className="vtx-navbar__icon-button">
                    <Badge content={notificationCount > 0 ? String(notificationCount) : ''} variant="error" size="sm">
                      <BellIcon size={20} />
                    </Badge>
                  </Button>
                )}
                {cartCount !== undefined && (
                  <Button variant="ghost" iconOnly onClick={onCartClick} className="vtx-navbar__icon-button">
                    <Badge content={cartCount > 0 ? String(cartCount) : ''} variant="error" size="sm">
                      <ShoppingCartIcon size={20} />
                    </Badge>
                  </Button>
                )}
                <Button variant="ghost" iconOnly onClick={handleToggle} className="vtx-navbar__menu-button">
                  {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                </Button>
              </div>
            </Flex>
          </Container>
        ) : (
          <Flex justify="between" align="center" className="vtx-navbar__mobile-header">
            {/* ... same content without Container ... */}
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
                  <Button variant="ghost" iconOnly onClick={onNotificationClick} className="vtx-navbar__icon-button">
                    <Badge content={notificationCount > 0 ? String(notificationCount) : ''} variant="error" size="sm">
                      <BellIcon size={20} />
                    </Badge>
                  </Button>
                )}
                {cartCount !== undefined && (
                  <Button variant="ghost" iconOnly onClick={onCartClick} className="vtx-navbar__icon-button">
                    <Badge content={cartCount > 0 ? String(cartCount) : ''} variant="error" size="sm">
                      <ShoppingCartIcon size={20} />
                    </Badge>
                  </Button>
                )}
                <Button variant="ghost" iconOnly onClick={handleToggle} className="vtx-navbar__menu-button">
                  {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                </Button>
              </div>
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
  onlyDesktop,
  onlyMobile,
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

  if (onlyDesktop) {
    return <NavbarDesktop {...props} layout={desktopLayout} />;
  }

  if (onlyMobile) {
    return <NavbarMobile {...props} />;
  }

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
