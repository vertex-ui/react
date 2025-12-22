import React, { useState } from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './Header.css';
import { 
  MenuIcon, 
  CloseIcon, 
  ChevronDownIcon, 
  SearchIcon
} from '../../icons/IconComponents';
import { Text } from '../../components/Text';
import { Badge } from '../../components/Badge';

export interface TopBarConfig {
  /**
   * Content to display in the top bar
   */
  content?: React.ReactNode;
  /**
   * Left-aligned content
   */
  leftContent?: React.ReactNode;
  /**
   * Right-aligned content
   */
  rightContent?: React.ReactNode;
  /**
   * Top bar styling variant
   * @default 'subtle'
   */
  variant?: 'subtle' | 'bold' | 'accent' | 'dark' | 'gradient';
  /**
   * If true, shows a dismiss button
   */
  dismissible?: boolean;
  /**
   * Callback when dismiss button is clicked
   */
  onDismiss?: () => void;
}

export interface MegaMenuColumn {
  /**
   * Column title
   */
  title?: React.ReactNode;
  /**
   * Column items
   */
  items: NavigationItem[];
}

export interface NavigationItem {
  /**
   * Unique identifier for the navigation item
   */
  id: string;
  /**
   * Label text to display
   */
  label: React.ReactNode;
  /**
   * URL or path for navigation
   */
  href?: string;
  /**
   * Icon to display before label
   */
  icon?: React.ReactNode;
  /**
   * Nested child items for dropdown menus
   */
  children?: NavigationItem[];
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * If true, marks this item as active/selected
   */
  active?: boolean;
  /**
   * If true, disables the item
   */
  disabled?: boolean;
  /**
   * Badge content to display (e.g., notification count)
   */
  badge?: React.ReactNode;
  /**
   * If true, renders as a mega menu with columns
   */
  megaMenu?: boolean;
  /**
   * Mega menu columns (when megaMenu is true)
   */
  megaMenuColumns?: MegaMenuColumn[];
  /**
   * Description text for mega menu items
   */
  description?: React.ReactNode;
  /**
   * Featured image for mega menu
   */
  image?: string;
}

export interface HeaderDesktopProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Logo element or brand name
   */
  logo?: React.ReactNode;
  /**
   * Array of navigation items
   */
  navItems?: NavigationItem[];
  /**
   * Action buttons or elements to display on the right
   */
  actions?: React.ReactNode;
  /**
   * Visual theme variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'dark' | 'light' | 'transparent' | 'gradient';
  /**
   * If true, header has a shadow effect
   * @default false
   */
  elevated?: boolean;
  /**
   * If true, header sticks to top on scroll
   * @default false
   */
  sticky?: boolean;
  /**
   * If true, makes header full bleed (no max-width)
   * @default false
   */
  fullWidth?: boolean;
  /**
   * If true, enables search functionality
   * @default false
   */
  searchEnabled?: boolean;
  /**
   * Search placeholder text
   */
  searchPlaceholder?: string;
  /**
   * Search input handler
   */
  onSearch?: (query: string) => void;
  /**
   * Custom logo click handler
   */
  onLogoClick?: () => void;
  /**
   * Layout style for the header
   * @default 'single-row'
   */
  layout?: 'single-row' | 'two-row' | 'centered';
  /**
   * Two-row bottom styling variant (only applicable when layout='two-row')
   * @default 'default'
   */
  twoRowBottomStyle?: 'default' | 'divider' | 'dark-bottom' | 'gradient-bottom' | 'elevated-bottom';
  /**
   * Top bar configuration (displays above main header)
   */
  topBar?: TopBarConfig;
  /**
   * Scroll behavior - 'transparent-to-solid' makes header transparent initially and solid on scroll
   * @default undefined
   */
  scrollBehavior?: 'transparent-to-solid';
  /**
   * Scroll threshold in pixels before applying scroll effect
   * @default 50
   */
  scrollThreshold?: number;
  /**
   * Callback fired when scroll state changes
   * @param scrolled - true if user has scrolled past threshold, false otherwise
   */
  onScrollStateChange?: (scrolled: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Header.Desktop - Desktop navigation header
 *
 * Full-featured desktop header with logo, navigation, search, and actions
 * Supports nested navigation items with dropdown menus and mega menus
 *
 * @example
 * ```tsx
 * <Header.Desktop
 *   logo={<img src="/logo.svg" alt="Brand" />}
 *   variant="primary"
 *   layout="two-row"
 *   navItems={[
 *     { id: '1', label: 'Home', href: '/', active: true },
 *     { 
 *       id: '2', 
 *       label: 'Products', 
 *       megaMenu: true,
 *       megaMenuColumns: [
 *         {
 *           title: 'Category 1',
 *           items: [
 *             { id: '2-1', label: 'Item 1', href: '/products/item1', description: 'Description here' }
 *           ]
 *         }
 *       ]
 *     }
 *   ]}
 *   actions={
 *     <>
 *       <Button variant="ghost" iconOnly><BellIcon /></Button>
 *       <Button variant="primary">Sign In</Button>
 *     </>
 *   }
 * />
 * ```
 */
const HeaderDesktop = React.forwardRef<HTMLElement, HeaderDesktopProps>(
  (
    {
      logo,
      navItems = [],
      actions,
      variant = 'primary',
      elevated = false,
      sticky = false,
      fullWidth = false,
      searchEnabled = false,
      searchPlaceholder = 'Search...',
      onSearch,
      onLogoClick,
      layout = 'single-row',
      twoRowBottomStyle = 'default',
      topBar,
      scrollBehavior,
      scrollThreshold = 50,
      onScrollStateChange,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [topBarDismissed, setTopBarDismissed] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll detection for transparent-to-solid behavior
    React.useEffect(() => {
      if (!scrollBehavior) return;

      const handleScroll = () => {
        const scrolled = window.scrollY > scrollThreshold;
        setIsScrolled(prevScrolled => {
          if (prevScrolled !== scrolled) {
            onScrollStateChange?.(scrolled);
          }
          return scrolled;
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollBehavior, scrollThreshold, onScrollStateChange]);

    const classNames = [
      'vtx-header',
      'vtx-header--desktop',
      `vtx-header--${variant}`,
      `vtx-header--layout-${layout}`,
      layout === 'two-row' && twoRowBottomStyle !== 'default' && `vtx-header--${twoRowBottomStyle}`,
      elevated && 'vtx-header--elevated',
      sticky && 'vtx-header--sticky',
      fullWidth && 'vtx-header--full-width',
      topBar && !topBarDismissed && 'vtx-header--has-topbar',
      scrollBehavior && 'vtx-header--scroll-behavior',
      scrollBehavior && isScrolled && 'vtx-header--scrolled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSearch) {
        onSearch(searchQuery);
      }
    };

    const renderNavItem = (item: NavigationItem) => {
      const hasChildren = item.children && item.children.length > 0;
      const hasMegaMenu = item.megaMenu && item.megaMenuColumns && item.megaMenuColumns.length > 0;
      const isOpen = openDropdown === item.id;

      return (
        <div
          key={item.id}
          className={`vtx-header__nav-item ${hasChildren || hasMegaMenu ? 'vtx-header__nav-item--has-dropdown' : ''} ${hasMegaMenu ? 'vtx-header__nav-item--mega' : ''}`}
          onMouseEnter={() => (hasChildren || hasMegaMenu) && setOpenDropdown(item.id)}
          onMouseLeave={() => (hasChildren || hasMegaMenu) && setOpenDropdown(null)}
        >
          <a
            href={item.href}
            onClick={(e) => {
              if (item.onClick) {
                e.preventDefault();
                item.onClick();
              }
            }}
            className={`vtx-header__nav-link ${item.active ? 'vtx-header__nav-link--active' : ''} ${item.disabled ? 'vtx-header__nav-link--disabled' : ''}`}
            aria-current={item.active ? 'page' : undefined}
            aria-disabled={item.disabled}
          >
            {item.icon && <span className="vtx-header__nav-icon">{item.icon}</span>}
            <span className="vtx-header__nav-label">{item.label}</span>
            {item.badge && (
              <Badge size="sm" variant="error" className="vtx-header__nav-badge">
                {item.badge}
              </Badge>
            )}
            {(hasChildren || hasMegaMenu) && (
              <ChevronDownIcon className="vtx-header__nav-chevron" size={16} />
            )}
          </a>

          {/* Mega Menu */}
          {hasMegaMenu && isOpen && (
            <div className="vtx-header__mega-menu">
              <div className="vtx-header__mega-menu-container">
                {item.megaMenuColumns!.map((column, colIndex) => (
                  <div key={colIndex} className="vtx-header__mega-menu-column">
                    {column.title && (
                      <Text 
                        variant="overline" 
                        weight="bold" 
                        className="vtx-header__mega-menu-column-title"
                      >
                        {column.title}
                      </Text>
                    )}
                    <div className="vtx-header__mega-menu-items">
                      {column.items.map((colItem) => (
                        <a
                          key={colItem.id}
                          href={colItem.href}
                          onClick={(e) => {
                            if (colItem.onClick) {
                              e.preventDefault();
                              colItem.onClick();
                            }
                          }}
                          className={`vtx-header__mega-menu-item ${colItem.active ? 'vtx-header__mega-menu-item--active' : ''}`}
                        >
                          {colItem.icon && <span className="vtx-header__mega-menu-icon">{colItem.icon}</span>}
                          <div className="vtx-header__mega-menu-item-content">
                            <Text 
                              variant="body2" 
                              weight="semibold" 
                              className="vtx-header__mega-menu-item-label"
                            >
                              {colItem.label}
                            </Text>
                            {colItem.description && (
                              <Text 
                                variant="caption" 
                                color="#6b7280" 
                                className="vtx-header__mega-menu-item-description"
                              >
                                {colItem.description}
                              </Text>
                            )}
                          </div>
                          {colItem.badge && (
                            <Badge size="sm" variant="error" className="vtx-header__mega-menu-badge">
                              {colItem.badge}
                            </Badge>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Dropdown */}
          {hasChildren && !hasMegaMenu && isOpen && (
            <div className="vtx-header__dropdown">
              {item.children!.map((child) => (
                <a
                  key={child.id}
                  href={child.href}
                  onClick={(e) => {
                    if (child.onClick) {
                      e.preventDefault();
                      child.onClick();
                    }
                  }}
                  className={`vtx-header__dropdown-item ${child.active ? 'vtx-header__dropdown-item--active' : ''} ${child.disabled ? 'vtx-header__dropdown-item--disabled' : ''}`}
                >
                  {child.icon && <span className="vtx-header__dropdown-icon">{child.icon}</span>}
                  <span className="vtx-header__dropdown-label">{child.label}</span>
                  {child.badge && (
                    <Badge size="sm" variant="error" className="vtx-header__dropdown-badge">
                      {child.badge}
                    </Badge>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    };

    const renderTopBar = () => {
      if (!topBar || topBarDismissed) return null;

      const topBarVariant = topBar.variant || 'subtle';

      return (
        <div className={`vtx-header__topbar vtx-header__topbar--${topBarVariant}`}>
          <div className="vtx-header__topbar-container">
            {topBar.leftContent && (
              <div className="vtx-header__topbar-left">{topBar.leftContent}</div>
            )}
            {topBar.content && (
              <div className="vtx-header__topbar-content">{topBar.content}</div>
            )}
            {topBar.rightContent && (
              <div className="vtx-header__topbar-right">{topBar.rightContent}</div>
            )}
            {topBar.dismissible && (
              <button
                className="vtx-header__topbar-dismiss"
                onClick={() => {
                  setTopBarDismissed(true);
                  topBar.onDismiss?.();
                }}
                aria-label="Dismiss"
              >
                <CloseIcon size={14} />
              </button>
            )}
          </div>
        </div>
      );
    };

    // Single row layout (default)
    if (layout === 'single-row') {
      return (
        <header ref={ref} className={classNames} style={style} {...props}>
          {renderTopBar()}
          <div className="vtx-header__container">
            {/* Logo */}
            {logo && (
              <div 
                className="vtx-header__logo" 
                onClick={onLogoClick}
                style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
              >
                {logo}
              </div>
            )}

            {/* Navigation */}
            {navItems.length > 0 && (
              <nav className="vtx-header__nav" aria-label="Main navigation">
                {navItems.map(renderNavItem)}
              </nav>
            )}

            {/* Right side actions */}
            <div className="vtx-header__actions">
              {searchEnabled && (
                <form onSubmit={handleSearchSubmit} className="vtx-header__search">
                  <SearchIcon className="vtx-header__search-icon" size={18} />
                  <input
                    type="search"
                    placeholder={searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="vtx-header__search-input"
                    aria-label="Search"
                  />
                </form>
              )}
              {actions && <div className="vtx-header__actions-group">{actions}</div>}
            </div>
          </div>
        </header>
      );
    }

    // Two row layout - Top: Logo, Search, Actions | Bottom: Navigation
    if (layout === 'two-row') {
      return (
        <header ref={ref} className={classNames} style={style} {...props}>
          {renderTopBar()}
          {/* Top Row */}
          <div className="vtx-header__top-row">
            <div className="vtx-header__container">
              {/* Logo */}
              {logo && (
                <div 
                  className="vtx-header__logo" 
                  onClick={onLogoClick}
                  style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
                >
                  {logo}
                </div>
              )}

              {/* Search */}
              {searchEnabled && (
                <form onSubmit={handleSearchSubmit} className="vtx-header__search vtx-header__search--expanded">
                  <SearchIcon className="vtx-header__search-icon" size={18} />
                  <input
                    type="search"
                    placeholder={searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="vtx-header__search-input"
                    aria-label="Search"
                  />
                </form>
              )}

              {/* Actions */}
              {actions && <div className="vtx-header__actions-group">{actions}</div>}
            </div>
          </div>

          {/* Bottom Row - Navigation */}
          {navItems.length > 0 && (
            <div className="vtx-header__bottom-row">
              <div className="vtx-header__container">
                <nav className="vtx-header__nav" aria-label="Main navigation">
                  {navItems.map(renderNavItem)}
                </nav>
              </div>
            </div>
          )}
        </header>
      );
    }

    // Centered layout
    return (
      <header ref={ref} className={classNames} style={style} {...props}>
        {renderTopBar()}
        <div className="vtx-header__container">
          {/* Logo */}
          {logo && (
            <div 
              className="vtx-header__logo" 
              onClick={onLogoClick}
              style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
            >
              {logo}
            </div>
          )}

          {/* Navigation */}
          {navItems.length > 0 && (
            <nav className="vtx-header__nav" aria-label="Main navigation">
              {navItems.map(renderNavItem)}
            </nav>
          )}

          {/* Right side actions */}
          <div className="vtx-header__actions">
            {searchEnabled && (
              <form onSubmit={handleSearchSubmit} className="vtx-header__search">
                <SearchIcon className="vtx-header__search-icon" size={18} />
                <input
                  type="search"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="vtx-header__search-input"
                  aria-label="Search"
                />
              </form>
            )}
            {actions && <div className="vtx-header__actions-group">{actions}</div>}
          </div>
        </div>
      </header>
    );
  }
);

HeaderDesktop.displayName = 'HeaderDesktop';

export interface HeaderMobileProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Logo element or brand name
   */
  logo?: React.ReactNode;
  /**
   * Array of navigation items
   */
  navItems?: NavigationItem[];
  /**
   * Action buttons or elements to display on the right
   */
  actions?: React.ReactNode;
  /**
   * Visual theme variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'dark' | 'light' | 'transparent' | 'gradient';
  /**
   * If true, header has a shadow effect
   * @default false
   */
  elevated?: boolean;
  /**
   * If true, header sticks to top on scroll
   * @default false
   */
  sticky?: boolean;
  /**
   * If true, enables search functionality in mobile menu
   * @default false
   */
  searchEnabled?: boolean;
  /**
   * Search placeholder text
   */
  searchPlaceholder?: string;
  /**
   * Search input handler
   */
  onSearch?: (query: string) => void;
  /**
   * Custom logo click handler
   */
  onLogoClick?: () => void;
  /**
   * Menu open state (controlled)
   */
  menuOpen?: boolean;
  /**
   * Menu open change handler (controlled)
   */
  onMenuOpenChange?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Header.Mobile - Mobile navigation header
 *
 * Mobile-optimized header with hamburger menu and slide-out navigation
 * Supports nested navigation items with expandable sections
 *
 * @example
 * ```tsx
 * <Header.Mobile
 *   logo={<img src="/logo.svg" alt="Brand" />}
 *   variant="primary"
 *   navItems={[
 *     { id: '1', label: 'Home', href: '/', active: true },
 *     { 
 *       id: '2', 
 *       label: 'Products', 
 *       children: [
 *         { id: '2-1', label: 'Category 1', href: '/products/cat1' },
 *         { id: '2-2', label: 'Category 2', href: '/products/cat2' }
 *       ]
 *     }
 *   ]}
 *   actions={
 *     <Button variant="primary" size="sm">Sign In</Button>
 *   }
 * />
 * ```
 */
const HeaderMobile = React.forwardRef<HTMLElement, HeaderMobileProps>(
  (
    {
      logo,
      navItems = [],
      actions,
      variant = 'primary',
      elevated = false,
      sticky = false,
      searchEnabled = false,
      searchPlaceholder = 'Search...',
      onSearch,
      onLogoClick,
      menuOpen: controlledMenuOpen,
      onMenuOpenChange,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const [internalMenuOpen, setInternalMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

    const isControlled = controlledMenuOpen !== undefined;
    const menuOpen = isControlled ? controlledMenuOpen : internalMenuOpen;

    const setMenuOpen = (open: boolean) => {
      if (isControlled) {
        onMenuOpenChange?.(open);
      } else {
        setInternalMenuOpen(open);
      }
    };

    const classNames = [
      'vtx-header',
      'vtx-header--mobile',
      `vtx-header--${variant}`,
      elevated && 'vtx-header--elevated',
      sticky && 'vtx-header--sticky',
      menuOpen && 'vtx-header--menu-open',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSearch) {
        onSearch(searchQuery);
      }
    };

    const toggleExpanded = (itemId: string) => {
      const newExpanded = new Set(expandedItems);
      if (newExpanded.has(itemId)) {
        newExpanded.delete(itemId);
      } else {
        newExpanded.add(itemId);
      }
      setExpandedItems(newExpanded);
    };

    const renderMobileNavItem = (item: NavigationItem, level = 0) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedItems.has(item.id);

      return (
        <div key={item.id} className={`vtx-header__mobile-nav-item vtx-header__mobile-nav-item--level-${level}`}>
          <div className="vtx-header__mobile-nav-link-wrapper">
            <a
              href={item.href}
              onClick={(e) => {
                if (hasChildren) {
                  e.preventDefault();
                  toggleExpanded(item.id);
                } else if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                  setMenuOpen(false);
                } else {
                  setMenuOpen(false);
                }
              }}
              className={`vtx-header__mobile-nav-link ${item.active ? 'vtx-header__mobile-nav-link--active' : ''} ${item.disabled ? 'vtx-header__mobile-nav-link--disabled' : ''}`}
              aria-current={item.active ? 'page' : undefined}
              aria-disabled={item.disabled}
            >
              {item.icon && <span className="vtx-header__mobile-nav-icon">{item.icon}</span>}
              <span className="vtx-header__mobile-nav-label">{item.label}</span>
              {item.badge && (
                <Badge size="sm" variant="error" className="vtx-header__mobile-nav-badge">
                  {item.badge}
                </Badge>
              )}
            </a>
            {hasChildren && (
              <button
                className={`vtx-header__mobile-nav-toggle ${isExpanded ? 'vtx-header__mobile-nav-toggle--expanded' : ''}`}
                onClick={() => toggleExpanded(item.id)}
                aria-label={`Toggle ${item.label} submenu`}
                aria-expanded={isExpanded}
              >
                <ChevronDownIcon size={16} />
              </button>
            )}
          </div>

          {hasChildren && isExpanded && (
            <div className="vtx-header__mobile-nav-children">
              {item.children!.map((child) => renderMobileNavItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    };

    return (
      <>
        <header ref={ref} className={classNames} style={style} {...props}>
          <div className="vtx-header__container">
            {/* Menu Toggle */}
            <button
              className="vtx-header__menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>

            {/* Logo */}
            {logo && (
              <div 
                className="vtx-header__logo" 
                onClick={onLogoClick}
                style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
              >
                {logo}
              </div>
            )}

            {/* Right side actions */}
            {actions && <div className="vtx-header__actions-group">{actions}</div>}
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="vtx-header__overlay"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Drawer */}
        <div className={`vtx-header__mobile-menu ${menuOpen ? 'vtx-header__mobile-menu--open' : ''}`}>
          <div className="vtx-header__mobile-menu-content">
            {searchEnabled && (
              <form onSubmit={handleSearchSubmit} className="vtx-header__mobile-search">
                <SearchIcon className="vtx-header__mobile-search-icon" size={18} />
                <input
                  type="search"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="vtx-header__mobile-search-input"
                  aria-label="Search"
                />
              </form>
            )}

            {navItems.length > 0 && (
              <nav className="vtx-header__mobile-nav" aria-label="Mobile navigation">
                {navItems.map((item) => renderMobileNavItem(item))}
              </nav>
            )}

            {actions && (
              <div className="vtx-header__mobile-actions">
                {actions}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
);

HeaderMobile.displayName = 'HeaderMobile';

export interface HeaderResponsiveProps {
  /**
   * Props for desktop header
   */
  desktopProps: HeaderDesktopProps;
  /**
   * Props for mobile header
   */
  mobileProps: HeaderMobileProps;
  /**
   * Breakpoint in pixels to switch between desktop and mobile
   * @default 768
   */
  breakpoint?: number;
}

/**
 * Header.Responsive - Automatically switches between Desktop and Mobile headers
 *
 * Utility component that renders Desktop header on larger screens
 * and Mobile header on smaller screens based on breakpoint
 *
 * @example
 * ```tsx
 * <Header.Responsive
 *   desktopProps={{
 *     variant: 'primary',
 *     logo: <Logo />,
 *     navItems: navItems
 *   }}
 *   mobileProps={{
 *     variant: 'dark',
 *     logo: <Logo />,
 *     navItems: navItems
 *   }}
 *   breakpoint={768}
 * />
 * ```
 */
const HeaderResponsive: React.FC<HeaderResponsiveProps> = ({
  desktopProps,
  mobileProps,
  breakpoint = 768,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile ? <HeaderMobile {...mobileProps} /> : <HeaderDesktop {...desktopProps} />;
};

HeaderResponsive.displayName = 'HeaderResponsive';

const HeaderDesktopWithParsedClasses = withParsedClasses(HeaderDesktop);
const HeaderMobileWithParsedClasses = withParsedClasses(HeaderMobile);

export const Header = {
  Desktop: HeaderDesktopWithParsedClasses as React.FC<HeaderDesktopProps & React.RefAttributes<HTMLElement>>,
  Mobile: HeaderMobileWithParsedClasses as React.FC<HeaderMobileProps & React.RefAttributes<HTMLElement>>,
  Responsive: HeaderResponsive,
};

export default Header;
