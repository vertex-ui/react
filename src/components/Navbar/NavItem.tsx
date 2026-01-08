import React, { useState } from 'react';
import { Flex } from '../Flex';
import { Link } from '../Link';
import { Badge } from '../Badge';
import { Text } from '../Text';
import { ChevronDownIcon } from '../../icons/IconComponents';
import { NavigationItem } from './types';

interface NavItemProps {
  item: NavigationItem;
  mobile?: boolean;
  onItemClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ item, mobile = false, onItemClick }) => {
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

  const wrapperClass = [
    'vtx-navbar__nav-item-wrapper',
    hasMegaMenu && 'vtx-navbar__nav-item-wrapper--mega',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <Flex align="center" gap={8}>
      {item.icon}
      <Text variant="body2" as="span" weight="medium" color="inherit">
        {item.label}
      </Text>
      {item.badge && (
        <Badge variant={item.badgeVariant || 'primary'} size="sm">
          {item.badge}
        </Badge>
      )}
      {(hasSubmenu || hasMegaMenu) && (
        <ChevronDownIcon
          size={16}
          className={`vtx-navbar__nav-item-arrow ${
            isOpen ? 'vtx-navbar__nav-item-arrow--open' : ''
          }`}
        />
      )}
    </Flex>
  );

  if (mobile) {
    return (
      <div className="vtx-navbar__mobile-nav-item-wrapper">
        {item.href && !hasSubmenu && !hasMegaMenu ? (
          <Link href={item.href} className={itemClass} onClick={handleClick} noUnderline>
            {content}
          </Link>
        ) : (
          <button className={itemClass} onClick={handleClick} disabled={item.disabled}>
            {content}
          </button>
        )}
        {(hasSubmenu || hasMegaMenu) && isOpen && (
          <Flex direction="column" gap={4} className="vtx-navbar__mobile-submenu">
            {hasSubmenu &&
              item.children!.map((child, index) => (
                <NavItem key={index} item={child} mobile onItemClick={onItemClick} />
              ))}
            {hasMegaMenu &&
              item.megaMenu!.map((column, colIndex) => (
                <Flex
                  key={colIndex}
                  direction="column"
                  gap={8}
                  className="vtx-navbar__mobile-megamenu-column"
                >
                  {column.title && (
                    <Text variant="overline" className="vtx-navbar__mobile-megamenu-title">
                      {column.title}
                    </Text>
                  )}
                  {column.items.map((child, index) => (
                    <NavItem key={index} item={child} mobile onItemClick={onItemClick} />
                  ))}
                </Flex>
              ))}
          </Flex>
        )}
      </div>
    );
  }

  return (
    <div
      className={wrapperClass}
      onMouseEnter={() => (hasSubmenu || hasMegaMenu) && setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {item.href && !hasSubmenu && !hasMegaMenu ? (
        <Link href={item.href} className={itemClass} onClick={handleClick} noUnderline>
          {content}
        </Link>
      ) : (
        <button className={itemClass} onClick={handleClick} disabled={item.disabled}>
          {content}
        </button>
      )}
      {hasSubmenu && isOpen && (
        <Flex direction="column" gap={4} className="vtx-navbar__submenu">
          {item.children!.map((child, index) => (
            <NavItem key={index} item={child} onItemClick={() => setIsOpen(false)} />
          ))}
        </Flex>
      )}
      {hasMegaMenu && isOpen && (
        <div className="vtx-navbar__megamenu">
          <Flex gap={32} className="vtx-navbar__megamenu-content">
            {item.megaMenu!.map((column, colIndex) => (
              <Flex
                key={colIndex}
                direction="column"
                gap={8}
                className="vtx-navbar__megamenu-column"
              >
                {column.title && (
                  <Text
                    variant="caption"
                    weight="bold"
                    transform="uppercase"
                    className="vtx-navbar__megamenu-title"
                  >
                    {column.title}
                  </Text>
                )}
                <Flex direction="column" gap={4}>
                  {column.items.map((child, index) => (
                    <NavItem key={index} item={child} onItemClick={() => setIsOpen(false)} />
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </div>
      )}
    </div>
  );
};
