"use client";

import { useState } from 'react';
import { Flex } from '../Flex';
import { Autocomplete } from '../Autocomplete';
import { Badge } from '../Badge';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Text } from '../Text';
import { BellIcon, ShoppingCartIcon, ChevronDownIcon } from '../../icons/IconComponents';
import { NavItem } from './NavItem';
import { NavbarBaseProps } from './types';

export const useNavbarSections = (props: NavbarBaseProps) => {
  const {
    logo,
    logoAlt = 'Logo',
    onLogoClick,
    brandText,
    navigationItems = [],
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
    user,
  } = props;

  const [searchQuery, setSearchQuery] = useState('');

  const logoSection = (logo || brandText) && (
    <Flex align="center" className="vtx-navbar__logo">
      {logo ? (
        <img
          src={logo}
          alt={logoAlt}
          className="vtx-navbar__logo-image"
          onClick={onLogoClick}
          style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
        />
      ) : (
        <Text 
          variant="h5" 
          as="span" 
          className="vtx-navbar__brand-text" 
          onClick={onLogoClick} 
          weight="bold"
          style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
        >
          {brandText}
        </Text>
      )}
    </Flex>
  );

  const navigationSection = navigationItems.length > 0 && (
    <Flex as="nav" align="center" gap={4} className="vtx-navbar__nav">
      {navigationItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </Flex>
  );

  const searchSection = (search || searchOptions.length > 0) && (
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
  );

  const iconsSection = (notificationCount !== undefined || cartCount !== undefined) && (
    <Flex align="center" gap={12}>
      {notificationCount !== undefined && (
        <Button variant="ghost" iconOnly onClick={onNotificationClick}>
          <Badge
            content={notificationCount > 0 ? String(notificationCount) : ''}
            variant="error"
            size="sm"
          >
            <BellIcon size={20} />
          </Badge>
        </Button>
      )}
      {cartCount !== undefined && (
        <Button variant="ghost" iconOnly onClick={onCartClick}>
          <Badge content={cartCount > 0 ? String(cartCount) : ''} variant="error" size="sm">
            <ShoppingCartIcon size={20} />
          </Badge>
        </Button>
      )}
    </Flex>
  );

  const userSection = user && (
    <Button variant="ghost" className="vtx-navbar__user-button">
      <Flex align="center" gap={8}>
        <Avatar src={user.avatar} alt={user.name} size="sm" />
        {user.name && <Text variant="body2" weight="medium">{user.name}</Text>}
        <ChevronDownIcon size={16} />
      </Flex>
    </Button>
  );

  const actionsSection = actions;

  return {
    logoSection,
    navigationSection,
    searchSection,
    iconsSection,
    userSection,
    actionsSection,
  };
};
