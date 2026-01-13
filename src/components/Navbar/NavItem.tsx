"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { Link } from '../Link';
import { Badge } from '../Badge';
import { Typography } from '../Typography';
import { ChevronDownIcon } from '../../icons/IconComponents';
import { NavigationItem } from './types';

interface NavItemProps {
  item: NavigationItem;
  mobile?: boolean;
  onItemClick?: () => void;
  uppercase?: boolean;
  linkComponent?: React.ElementType;
  defaultHoverColor?: string;
  defaultActiveColor?: string;
  activeIndicatorStyle?: 'underline' | 'background' | 'none';
  activeIndicatorBehavior?: 'always' | 'hover' | 'never';
}

export const NavItem: React.FC<NavItemProps> = ({ 
  item, 
  mobile = false, 
  onItemClick, 
  uppercase = false, 
  linkComponent, 
  defaultHoverColor,
  defaultActiveColor = 'primary',
  activeIndicatorStyle = 'underline',
  activeIndicatorBehavior = 'always'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [megaMenuTop, setMegaMenuTop] = useState<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const hasSubmenu = item.children && item.children.length > 0;
  const hasMegaMenu = item.megaMenu && item.megaMenu.length > 0;

  // Use custom link component if provided at item level, navbar level, or default Link
  const LinkComponent = item.component || linkComponent || Link;
  
  // Determine active color (item-specific or default)
  const activeColor = item.activeColor || defaultActiveColor;
  
  // Generate active style classes
  const getActiveStyleClasses = () => {
    const classes = [];
    
    if (item.active) {
      classes.push('vtx-navbar__nav-item--active');
      
      // Color variant class
      if (activeColor && ['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info'].includes(activeColor)) {
        classes.push(`vtx-navbar__nav-item--active-${activeColor}`);
      } else if (activeColor && activeColor !== 'primary') {
        classes.push('vtx-navbar__nav-item--active-custom');
      } else {
        classes.push('vtx-navbar__nav-item--active-primary');
      }
      
      // Indicator style class
      if (activeIndicatorStyle === 'background') {
        classes.push('vtx-navbar__nav-item--active-background');
      } else if (activeIndicatorStyle === 'underline') {
        classes.push('vtx-navbar__nav-item--active-underline');
      }
    }
    
    // Indicator behavior class
    if (activeIndicatorBehavior === 'hover') {
      classes.push('vtx-navbar__nav-item--indicator-hover');
    } else if (activeIndicatorBehavior === 'never') {
      classes.push('vtx-navbar__nav-item--indicator-never');
    }
    
    return classes;
  };

  useEffect(() => {
    if (hasMegaMenu && isOpen && wrapperRef.current) {
      const navbar = wrapperRef.current.closest('.vtx-navbar-wrapper');
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        setMegaMenuTop(rect.bottom);
      }
    }
  }, [isOpen, hasMegaMenu]);

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
    ...getActiveStyleClasses(),
    item.disabled && 'vtx-navbar__nav-item--disabled',
    (hasSubmenu || hasMegaMenu) && 'vtx-navbar__nav-item--with-submenu',
    mobile && 'vtx-navbar__nav-item--mobile',
    uppercase && 'vtx-navbar__nav-item--uppercase',
  ]
    .filter(Boolean)
    .join(' ');

  // Custom CSS variables for non-theme colors
  const customActiveStyles: React.CSSProperties = (
    item.active && 
    activeColor && 
    !['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info'].includes(activeColor)
  ) ? {
    '--nav-active-current': activeColor
  } as React.CSSProperties : {};

  const wrapperClass = [
    'vtx-navbar__nav-item-wrapper',
    hasMegaMenu && 'vtx-navbar__nav-item-wrapper--mega',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <Flex align="center" gap={8}>
      {item.icon}
      <Typography variant="body2" noMargin as="span" weight="medium" color="inherit">
        {item.label}
      </Typography>
      {item.badge && (
        <Badge variant={item.badgeVariant || 'primary'} size="sm">
          {item.badge}
        </Badge>
      )}
      {(hasSubmenu || hasMegaMenu) && (
        <ChevronDownIcon
          size={16}
          className={`vtx-navbar__nav-item-arrow ${isOpen ? 'vtx-navbar__nav-item-arrow--open' : ''
            }`}
        />
      )}
    </Flex>
  );

  if (mobile) {
    return (
      <Box className="vtx-navbar__mobile-nav-item-wrapper">
        {item.href && !hasSubmenu && !hasMegaMenu ? (
          <LinkComponent
            href={item.href}
            className={itemClass}
            onClick={handleClick}
            hoverColor={item.hoverColor}
            style={customActiveStyles}
            {...(LinkComponent === Link ? { noUnderline: true } : {})}
            {...(item.componentProps || {})}
          >
            <Flex align="center" justify="between" style={{ width: '100%' }}>
              <Flex align="center" gap={12}>
                {item.icon}
                <Typography variant="body2" weight="medium" noMargin>
                  {item.label}
                </Typography>
                {item.badge && (
                  <Badge variant={item.badgeVariant || 'primary'} size="sm">
                    {item.badge}
                  </Badge>
                )}
              </Flex>
            </Flex>
          </LinkComponent>
        ) : (
          <button 
            className={itemClass} 
            onClick={handleClick} 
            disabled={item.disabled}
            style={customActiveStyles}
          >
            <Flex align="center" justify="between" style={{ width: '100%' }}>
              <Flex align="center" gap={12}>
                {item.icon}
                <Typography variant="body2" weight="medium" noMargin>
                  {item.label}
                </Typography>
                {item.badge && (
                  <Badge variant={item.badgeVariant || 'neutral'} size="sm">
                    {item.badge}
                  </Badge>
                )}
              </Flex>
              {(hasSubmenu || hasMegaMenu) && (
                <ChevronDownIcon
                  size={20}
                  className={`vtx-navbar__nav-item-arrow ${isOpen ? 'vtx-navbar__nav-item-arrow--open' : ''
                    }`}
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}
                />
              )}
            </Flex>
          </button>
        )}
        {(hasSubmenu || hasMegaMenu) && isOpen && (
          <Box className="vtx-navbar__mobile-submenu">
            {hasSubmenu &&
              item.children!.map((child, index) => (
                <NavItem 
                  key={index} 
                  item={child} 
                  mobile 
                  onItemClick={onItemClick} 
                  linkComponent={linkComponent} 
                  defaultHoverColor={defaultHoverColor}
                  defaultActiveColor={defaultActiveColor}
                  activeIndicatorStyle={activeIndicatorStyle}
                  activeIndicatorBehavior={activeIndicatorBehavior}
                />
              ))}
            {hasMegaMenu &&
              item.megaMenu!.map((column, colIndex) => (
                <Box
                  key={colIndex}
                  className="vtx-navbar__mobile-megamenu-column"
                >
                  {column.title && (
                    <Typography variant="overline" weight="bold" className="vtx-navbar__mobile-megamenu-title">
                      {column.title}
                    </Typography>
                  )}
                  {column.items.map((child, index) => (
                    <NavItem 
                      key={index} 
                      item={child} 
                      mobile 
                      onItemClick={onItemClick} 
                      linkComponent={linkComponent} 
                      defaultHoverColor={defaultHoverColor}
                      defaultActiveColor={defaultActiveColor}
                      activeIndicatorStyle={activeIndicatorStyle}
                      activeIndicatorBehavior={activeIndicatorBehavior}
                    />
                  ))}
                </Box>
              ))}
          </Box>
        )}
      </Box>
    );
  }

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    if (hasSubmenu || hasMegaMenu) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsOpen(false), 150);
    setCloseTimeout(timeout);
  };

  return (
    <div
      ref={wrapperRef}
      className={wrapperClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.href && !hasSubmenu && !hasMegaMenu ? (
        <LinkComponent
          href={item.href}
          className={itemClass}
          onClick={handleClick}
          hoverColor={item.hoverColor}
          style={customActiveStyles}
          {...(LinkComponent === Link ? { noUnderline: true } : {})}
          {...(item.componentProps || {})}
        >
          {content}
        </LinkComponent>
      ) : (
        <button 
          className={itemClass} 
          onClick={handleClick} 
          disabled={item.disabled}
          style={customActiveStyles}
        >
          {content}
        </button>
      )}
      {hasSubmenu && isOpen && (
        <div className="vtx-navbar__submenu">
          {item.children!.map((child, index) => (
            <NavItem 
              key={index} 
              item={child} 
              onItemClick={() => setIsOpen(false)} 
              linkComponent={linkComponent} 
              defaultHoverColor={defaultHoverColor}
              defaultActiveColor={defaultActiveColor}
              activeIndicatorStyle={activeIndicatorStyle}
              activeIndicatorBehavior={activeIndicatorBehavior}
            />
          ))}
        </div>
      )}
      {hasMegaMenu && isOpen && (
        <div
          className="vtx-navbar__megamenu"
          style={{
            top: megaMenuTop > 0 ? `${megaMenuTop}px` : undefined
          }}
        >
          <div className="vtx-navbar__megamenu-container">
            <div className="vtx-navbar__megamenu-content">
              {item.megaMenu!.map((column, colIndex) => {
                const columnClass = [
                  'vtx-navbar__megamenu-column',
                  column.featured && 'vtx-navbar__megamenu-column--featured',
                  column.span && `vtx-navbar__megamenu-column--span-${column.span}`,
                ]
                  .filter(Boolean)
                  .join(' ');

                return (
                  <div key={colIndex} className={columnClass}>
                    <div className="vtx-navbar__megamenu-column-inner">
                      {/* Column Header */}
                      {column.title && (
                        <div className="vtx-navbar__megamenu-header">
                          <Typography
                            variant="caption"
                            weight="bold"
                            transform="uppercase"
                            className="vtx-navbar__megamenu-title"
                          >
                            {column.title}
                          </Typography>
                          {column.description && (
                            <Typography
                              variant="caption"
                              className="vtx-navbar__megamenu-description"
                            >
                              {column.description}
                            </Typography>
                          )}
                        </div>
                      )}

                      {/* Featured Image */}
                      {column.image && (
                        <div className="vtx-navbar__megamenu-image">
                          <img src={column.image} alt={column.title || 'Featured'} />
                        </div>
                      )}

                      {/* Menu Items */}
                      <div className="vtx-navbar__megamenu-items">
                        {column.items.map((child, index) => {
                          const itemClass = [
                            'vtx-navbar__megamenu-item',
                            child.featured && 'vtx-navbar__megamenu-item--featured',
                            child.active && 'vtx-navbar__megamenu-item--active',
                          ]
                            .filter(Boolean)
                            .join(' ');

                          return (
                            <LinkComponent
                              key={index}
                              href={child.href || '#'}
                              className={itemClass}
                              onClick={() => {
                                child.onClick?.();
                                setIsOpen(false);
                              }}
                              hoverColor={child.hoverColor || defaultHoverColor}
                              {...(LinkComponent === Link ? { noUnderline: true } : {})}
                              {...(child.componentProps || {})}
                            >
                              <Box display="flex" alignItems="flex-start" gap={12}>
                                {child.icon && (
                                  <Box className="vtx-navbar__megamenu-item-icon">
                                    {child.icon}
                                  </Box>
                                )}
                                {child.image && (
                                  <Box className="vtx-navbar__megamenu-item-image">
                                    <img src={child.image} alt={child.label} />
                                  </Box>
                                )}
                                <Box display="flex" flexDirection="column" gap={2} className="vtx-navbar__megamenu-item-text">
                                  <Box display="flex" alignItems="center" gap={6}>
                                    <Typography
                                      variant="body2"
                                      weight="medium"
                                      noMargin
                                      className="vtx-navbar__megamenu-item-label"
                                    >
                                      {child.label}
                                    </Typography>
                                    {child.tagVariant && (
                                      <Badge
                                        variant={child.tagVariant as any}
                                        size="sm"
                                        pill
                                        className="vtx-navbar__megamenu-item-tag"
                                      >
                                        {child.tag || child.tagVariant}
                                      </Badge>
                                    )}
                                    {child.badge && (
                                      <Badge
                                        variant={child.badgeVariant || 'primary'}
                                        size="sm"
                                      >
                                        {child.badge}
                                      </Badge>
                                    )}
                                  </Box>
                                  {child.description && (
                                    <Typography
                                      variant="caption"
                                      noMargin
                                      className="vtx-navbar__megamenu-item-description"
                                    >
                                      {child.description}
                                    </Typography>
                                  )}
                                </Box>
                              </Box>
                            </LinkComponent>
                          );
                        })}
                      </div>

                      {/* Column CTA */}
                      {column.cta && (
                        <div className="vtx-navbar__megamenu-cta">
                          <LinkComponent
                            href={column.cta.href}
                            className="vtx-navbar__megamenu-cta-link"
                            hoverColor={column.cta.hoverColor}
                            {...(LinkComponent === Link ? { noUnderline: true } : {})}
                          >
                            <Typography variant="body2" noMargin weight="semibold">
                              {column.cta.label}
                            </Typography>
                          </LinkComponent>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
