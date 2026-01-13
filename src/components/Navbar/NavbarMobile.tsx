import React, { useState } from 'react';
import { NavbarMobileProps } from './types';
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

export const NavbarMobile: React.FC<NavbarMobileProps> = ({
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
    linkComponent,
    hoverColor,
    activeColor = 'primary',
    activeIndicatorStyle = 'underline',
    activeIndicatorBehavior = 'always',
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

    const MobileHeaderContent = (
        <Flex justify="between" align="center" className="vtx-navbar__mobile-header">
            <div className="vtx-navbar__logo">
                {logo ? (
                    <img
                        src={logo}
                        alt={logoAlt}
                        className="vtx-navbar__logo-image"
                        onClick={onLogoClick}
                        loading="eager"
                        fetchPriority="high"
                    />
                ) : brandText ? (
                    <span className="vtx-navbar__brand-text" onClick={onLogoClick}>
                        {brandText}
                    </span>
                ) : null}
            </div>
            <div className="vtx-navbar__icons">
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
    );

    return (
        <>
            {topBar && <TopBar config={topBar} containerized={containerized} />}
            <div className={navbarClass} style={style}>
                {containerized ? (
                    <Container>
                        {MobileHeaderContent}
                    </Container>
                ) : (
                    MobileHeaderContent
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
                                <NavItem 
                                    key={index} 
                                    item={item} 
                                    mobile 
                                    onItemClick={handleClose} 
                                    linkComponent={linkComponent} 
                                    defaultHoverColor={hoverColor}
                                    defaultActiveColor={activeColor}
                                    activeIndicatorStyle={activeIndicatorStyle}
                                    activeIndicatorBehavior={activeIndicatorBehavior}
                                />
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
                                        <NavItem 
                                            key={index} 
                                            item={item} 
                                            mobile 
                                            onItemClick={handleClose} 
                                            linkComponent={linkComponent} 
                                            defaultHoverColor={hoverColor}
                                            defaultActiveColor={activeColor}
                                            activeIndicatorStyle={activeIndicatorStyle}
                                            activeIndicatorBehavior={activeIndicatorBehavior}
                                        />
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
