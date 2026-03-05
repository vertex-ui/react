"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Typography } from '../Typography';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import {
  MenuIcon,
  SearchIcon,
  BellIcon,
  ChevronDownIcon,
  CloseIcon as XIcon,
} from '../../icons/IconComponents';
import './AdminHeader.css';

// ==================== TYPES ====================

export interface NotificationItem {
  /** Unique notification ID */
  id: string;
  /** Notification title/message */
  title: string;
  /** Optional description or body */
  description?: string;
  /** Timestamp (e.g., "2 min ago", "Today at 3:00 PM") */
  time: string;
  /** Whether notification has been read */
  read?: boolean;
  /** Icon element to display */
  icon?: React.ReactNode;
  /** Click handler for the notification */
  onClick?: () => void;
  /** Notification type for styling */
  type?: 'info' | 'success' | 'warning' | 'error';
  /** Avatar image for the notification */
  avatar?: string;
  /** Link URL if notification is clickable */
  href?: string;
}

export interface UserMenuItem {
  /** Menu item label */
  label: string;
  /** Icon element */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Visual variant */
  variant?: 'default' | 'danger' | 'success';
  /** Show divider after item */
  divider?: boolean;
  /** Keyboard shortcut hint */
  shortcut?: string;
  /** Badge content */
  badge?: React.ReactNode;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Link URL */
  href?: string;
}

export interface QuickAction {
  /** Action ID */
  id: string;
  /** Action label */
  label: string;
  /** Icon element */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Tooltip text */
  tooltip?: string;
  /** Badge content */
  badge?: React.ReactNode;
  /** Whether action is disabled */
  disabled?: boolean;
}

export interface SearchSuggestion {
  /** Suggestion ID */
  id: string;
  /** Suggestion text */
  label: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Category/group */
  category?: string;
  /** Click handler */
  onClick?: () => void;
  /** Link URL */
  href?: string;
}

export interface AdminHeaderProps {
  /* ===== BRANDING ===== */
  /** Logo element (image, SVG, component) */
  logo?: React.ReactNode;
  /** Application/brand title */
  title?: string;
  /** Subtitle or tagline */
  subtitle?: string;
  /** Logo click handler */
  onLogoClick?: () => void;

  /* ===== MOBILE MENU ===== */
  /** Toggle button click handler (opens mobile sidebar) */
  onToggleSidebar?: () => void;
  /** Whether to show toggle button */
  showToggleButton?: boolean;
  /** Custom toggle icon */
  toggleIcon?: React.ReactNode;

  /* ===== SEARCH ===== */
  /** Enable search functionality */
  showSearch?: boolean;
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Search value (controlled) */
  searchValue?: string;
  /** Search change handler */
  onSearchChange?: (value: string) => void;
  /** Search submit handler */
  onSearchSubmit?: (value: string) => void;
  /** Search focus handler */
  onSearchFocus?: () => void;
  /** Search suggestions/results */
  searchSuggestions?: SearchSuggestion[];
  /** Show search loading state */
  searchLoading?: boolean;
  /** Custom search icon */
  searchIcon?: React.ReactNode;

  /* ===== NOTIFICATIONS ===== */
  /** Notifications list */
  notifications?: NotificationItem[];
  /** Notification click handler */
  onNotificationClick?: (notification: NotificationItem) => void;
  /** Mark all notifications as read */
  onMarkAllAsRead?: () => void;
  /** Clear all notifications */
  onClearAllNotifications?: () => void;
  /** View all notifications handler */
  onViewAllNotifications?: () => void;
  /** Show notifications bell */
  showNotifications?: boolean;
  /** Custom notification icon */
  notificationIcon?: React.ReactNode;

  /* ===== QUICK ACTIONS ===== */
  /** Quick action buttons */
  quickActions?: QuickAction[];

  /* ===== USER MENU ===== */
  /** User's display name */
  userName?: string;
  /** User's role, email, or subtitle */
  userRole?: string;
  /** User avatar image URL */
  userAvatar?: string;
  /** User avatar fallback (initials) */
  userAvatarFallback?: string;
  /** User menu dropdown items */
  userMenuItems?: UserMenuItem[];
  /** Show user menu */
  showUserMenu?: boolean;
  /** User avatar click handler */
  onUserAvatarClick?: () => void;

  /* ===== CUSTOM CONTENT ===== */
  /** Custom actions/content before user section */
  actions?: React.ReactNode;
  /** Custom content in left section (after logo) */
  leftContent?: React.ReactNode;
  /** Custom content in center section */
  centerContent?: React.ReactNode;
  /** Custom content in right section (before user) */
  rightContent?: React.ReactNode;

  /* ===== STYLING ===== */
  /** Custom className */
  className?: string;
  /** Custom inline styles */
  style?: React.CSSProperties;
  /** Visual variant */
  variant?: 'default' | 'elevated' | 'bordered' | 'minimal' | 'transparent';
  /** Color theme */
  theme?: 'light' | 'dark' | 'primary' | 'gradient';
  /** Whether header is sticky */
  sticky?: boolean;
  /** Header height */
  height?: string | number;
  /** Whether header has blur effect */
  blur?: boolean;

  /* ===== BEHAVIOR ===== */
  /** Maximum notification count to display */
  maxNotifications?: number;
  /** Whether to auto-hide search on blur */
  autoHideSearch?: boolean;
  /** Whether to show breadcrumbs space */
  showBreadcrumbs?: boolean;
  /** Breadcrumb items */
  breadcrumbs?: Array<{ label: string; href?: string; onClick?: () => void }>;
}

// ==================== SUB-COMPONENTS ====================

/**
 * SearchBar Component
 */
const SearchBar: React.FC<{
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  loading?: boolean;
  suggestions?: SearchSuggestion[];
  icon?: React.ReactNode;
  autoFocus?: boolean;
}> = ({ value = '', onChange, onSubmit, onFocus, onBlur, placeholder, loading, suggestions, icon, autoFocus }) => {
  const [localValue, setLocalValue] = useState(value);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        onBlur?.();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onBlur]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange?.(newValue);
    setShowSuggestions(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(localValue);
    setShowSuggestions(false);
  };

  const handleFocus = () => {
    onFocus?.();
    if (suggestions && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Handle blur in the click outside instead so users clicking inside search form don't dismiss it
  };

  return (
    <div className="lxs-admin-header-search" ref={searchRef}>
      <form onSubmit={handleSubmit} className="lxs-admin-header-search-form">
        <div className="lxs-admin-header-search-icon">
          {loading ? <span className="lxs-admin-header-search-spinner" /> : icon || <SearchIcon />}
        </div>
        <input
          ref={inputRef}
          type="text"
          className="lxs-admin-header-search-input"
          placeholder={placeholder || 'Search...'}
          value={localValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {localValue && (
          <button
            type="button"
            className="lxs-admin-header-search-clear"
            onClick={() => {
              setLocalValue('');
              onChange?.('');
            }}
            aria-label="Clear search"
          >
            <XIcon />
          </button>
        )}
      </form>

      {showSuggestions && suggestions && suggestions.length > 0 && (
        <div className="lxs-admin-header-search-suggestions">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              type="button"
              className="lxs-admin-header-search-suggestion"
              onClick={() => {
                suggestion.onClick?.();
                setShowSuggestions(false);
              }}
            >
              {suggestion.icon && <span className="lxs-admin-header-search-suggestion-icon">{suggestion.icon}</span>}
              <div className="lxs-admin-header-search-suggestion-content">
                <span className="lxs-admin-header-search-suggestion-label">{suggestion.label}</span>
                {suggestion.category && (
                  <span className="lxs-admin-header-search-suggestion-category">{suggestion.category}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * NotificationsPanel Component
 */
const NotificationsPanel: React.FC<{
  notifications: NotificationItem[];
  onNotificationClick?: (notification: NotificationItem) => void;
  onMarkAllAsRead?: () => void;
  onClearAll?: () => void;
  onViewAll?: () => void;
  onClose: () => void;
  maxNotifications?: number;
}> = ({ notifications, onNotificationClick, onMarkAllAsRead, onClearAll, onViewAll, onClose, maxNotifications = 5 }) => {
  const unreadCount = notifications.filter((n) => !n.read).length;
  const displayNotifications = notifications.slice(0, maxNotifications);

  const handleNotificationClick = (notification: NotificationItem) => {
    onNotificationClick?.(notification);
    onClose();
  };

  return (
    <div className="lxs-admin-header-notifications-panel">
      {/* Header */}
      <div className="lxs-admin-header-notifications-header">
        <div className="lxs-admin-header-notifications-header-title">
          <Typography variant="subtitle2" noMargin style={{ fontWeight: 600 }}>
            Notifications
          </Typography>
          {unreadCount > 0 && (
            <Badge variant="primary" size="sm" style={{ marginLeft: '8px' }}>
              {unreadCount}
            </Badge>
          )}
        </div>
        <div className="lxs-admin-header-notifications-header-actions">
          {unreadCount > 0 && onMarkAllAsRead && (
            <button
              className="lxs-admin-header-notifications-action-btn"
              onClick={onMarkAllAsRead}
              title="Mark all as read"
            >
              Mark all read
            </button>
          )}
          {notifications.length > 0 && onClearAll && (
            <button
              className="lxs-admin-header-notifications-action-btn lxs-admin-header-notifications-action-btn--danger"
              onClick={onClearAll}
              title="Clear all"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div className="lxs-admin-header-notifications-list">
        {notifications.length === 0 ? (
          <div className="lxs-admin-header-notifications-empty">
            <div style={{ fontSize: '48px', opacity: 0.3 }}><BellIcon /></div>
            <Typography variant="body2" noMargin style={{ marginTop: '12px', color: 'var(--lxs-color-neutral-500)' }}>
              No notifications
            </Typography>
          </div>
        ) : (
          <>
            {displayNotifications.map((notification) => {
              const ItemTag = notification.href ? 'a' : 'button';
              return (
                <ItemTag
                  key={notification.id}
                  className={`lxs-admin-header-notification-item ${
                    !notification.read ? 'lxs-admin-header-notification-item--unread' : ''
                  } ${notification.type ? `lxs-admin-header-notification-item--${notification.type}` : ''}`}
                  onClick={() => handleNotificationClick(notification)}
                  href={notification.href}
                  type={notification.href ? undefined : 'button'}
                >
                  {/* Icon/Avatar */}
                  {(notification.icon || notification.avatar) && (
                    <div className="lxs-admin-header-notification-icon">
                      {notification.avatar ? (
                        <Avatar src={notification.avatar} size="sm" alt="Notification" />
                      ) : (
                        notification.icon
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="lxs-admin-header-notification-content">
                    <Typography variant="body2" noMargin style={{ fontWeight: notification.read ? 400 : 600 }}>
                      {notification.title}
                    </Typography>
                    {notification.description && (
                      <Typography variant="caption" noMargin style={{ color: 'var(--lxs-color-neutral-600)', marginTop: '2px' }}>
                        {notification.description}
                      </Typography>
                    )}
                    <Typography variant="caption" noMargin style={{ color: 'var(--lxs-color-neutral-500)', marginTop: '4px' }}>
                      {notification.time}
                    </Typography>
                  </div>

                  {/* Unread indicator */}
                  {!notification.read && <div className="lxs-admin-header-notification-dot" />}
                </ItemTag>
              );
            })}
          </>
        )}
      </div>

      {/* Footer */}
      {notifications.length > maxNotifications && onViewAll && (
        <div className="lxs-admin-header-notifications-footer">
          <button
            className="lxs-admin-header-notifications-view-all"
            onClick={() => {
              onViewAll();
              onClose();
            }}
          >
            View all {notifications.length} notifications
          </button>
        </div>
      )}
    </div>
  );
};

/**
 * UserMenu Component
 */
const UserMenu: React.FC<{
  items: UserMenuItem[];
  onClose: () => void;
}> = ({ items, onClose }) => {
  const handleItemClick = (item: UserMenuItem) => {
    if (!item.disabled) {
      item.onClick?.();
      onClose();
    }
  };

  return (
    <div className="lxs-admin-header-user-dropdown">
      {items.map((item, index) => {
        const ItemTag = item.href ? 'a' : 'button';
        return (
          <React.Fragment key={index}>
            <ItemTag
              className={`lxs-admin-header-user-menu-item ${
                item.variant ? `lxs-admin-header-user-menu-item--${item.variant}` : ''
              } ${item.disabled ? 'lxs-admin-header-user-menu-item--disabled' : ''}`}
              onClick={() => handleItemClick(item)}
              href={item.href}
              type={item.href ? undefined : 'button'}
              disabled={item.disabled}
            >
              {item.icon && <span className="lxs-admin-header-user-menu-icon">{item.icon}</span>}
              <span className="lxs-admin-header-user-menu-label">{item.label}</span>
              {item.badge && <Badge size="sm" className="lxs-admin-header-user-menu-badge">{item.badge}</Badge>}
              {item.shortcut && <span className="lxs-admin-header-user-menu-shortcut">{item.shortcut}</span>}
            </ItemTag>
            {item.divider && <div className="lxs-admin-header-user-menu-divider" />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// ==================== MAIN COMPONENT ====================

/**
 * AdminHeader - Professional admin panel header
 *
 * Comprehensive header component for admin dashboards with:
 * - Mobile menu toggle
 * - Search with suggestions
 * - Notifications with badge
 * - Quick actions
 * - User menu with avatar
 * - Fully responsive
 * - Theme support
 *
 * @example
 * ```tsx
 * <AdminHeader
 *   logo={<Logo />}
 *   title="Admin Dashboard"
 *   onToggleSidebar={() => setMobileOpen(true)}
 *   showSearch
 *   searchValue={search}
 *   onSearchChange={setSearch}
 *   notifications={notifications}
 *   userName="John Doe"
 *   userRole="Administrator"
 *   userAvatar="/avatar.jpg"
 *   userMenuItems={[
 *     { label: 'Profile', icon: <UserIcon />, onClick: () => {} },
 *     { label: 'Settings', icon: <SettingsIcon />, onClick: () => {} },
 *     { divider: true },
 *     { label: 'Logout', icon: <LogoutIcon />, variant: 'danger', onClick: () => {} }
 *   ]}
 * />
 * ```
 */
const AdminHeader = React.forwardRef<HTMLElement, AdminHeaderProps>(
  (
    {
      // Branding
      logo,
      title,
      subtitle,
      onLogoClick,
      // Mobile menu
      onToggleSidebar,
      showToggleButton = true,
      toggleIcon,
      // Search
      showSearch = false,
      searchPlaceholder,
      searchValue,
      onSearchChange,
      onSearchSubmit,
      onSearchFocus,
      searchSuggestions,
      searchLoading,
      searchIcon,
      // Notifications
      notifications = [],
      onNotificationClick,
      onMarkAllAsRead,
      onClearAllNotifications,
      onViewAllNotifications,
      showNotifications = true,
      notificationIcon,
      // Quick actions
      quickActions = [],
      // User menu
      userName,
      userRole,
      userAvatar,
      userAvatarFallback,
      userMenuItems = [],
      showUserMenu = true,
      onUserAvatarClick,
      // Custom content
      actions,
      leftContent,
      centerContent,
      rightContent,
      // Styling
      className = '',
      style,
      variant = 'default',
      theme = 'light',
      sticky = true,
      height = '64px',
      blur = false,
      // Behavior
      maxNotifications = 5,
      autoHideSearch = false,
      showBreadcrumbs = false,
      breadcrumbs = [],
    },
    ref
  ) => {
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [searchHidden, setSearchHidden] = useState(autoHideSearch);
    const notificationsRef = useRef<HTMLDivElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);

    const unreadCount = notifications.filter((n) => !n.read).length;

    // Close dropdowns on outside click
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
          setNotificationsOpen(false);
        }
        if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
          setUserMenuOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close dropdowns on ESC key
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setNotificationsOpen(false);
          setUserMenuOpen(false);
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const headerClasses = [
      'lxs-admin-header',
      `lxs-admin-header--${variant}`,
      `lxs-admin-header--${theme}`,
      sticky && 'lxs-admin-header--sticky',
      blur && 'lxs-admin-header--blur',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const headerStyle: React.CSSProperties = {
      ...style,
      height: typeof height === 'number' ? `${height}px` : height,
    };

    return (
      <header ref={ref} className={headerClasses} style={headerStyle}>
        <div className="lxs-admin-header-container">
          {/* Left Section */}
          <div className="lxs-admin-header-left">
            {/* Mobile Toggle */}
            {showToggleButton && onToggleSidebar && (
              <button
                className="lxs-admin-header-toggle"
                onClick={onToggleSidebar}
                aria-label="Toggle sidebar"
                type="button"
              >
                {toggleIcon || <MenuIcon />}
              </button>
            )}

            {/* Logo & Title */}
            {(logo || title) && (
              <div
                className="lxs-admin-header-brand"
                onClick={onLogoClick}
                style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
              >
                {logo && <div className="lxs-admin-header-logo">{logo}</div>}
                {title && (
                  <div className="lxs-admin-header-brand-text">
                    <Typography variant="h6" noMargin className="lxs-admin-header-title">
                      {title}
                    </Typography>
                    {subtitle && (
                      <Typography variant="caption" noMargin className="lxs-admin-header-subtitle">
                        {subtitle}
                      </Typography>
                    )}
                  </div>
                )}
              </div>
            )}

            {leftContent}
          </div>

          {/* Center Section */}
          <div className="lxs-admin-header-center">
            {/* Search */}
            {showSearch && (
              autoHideSearch && searchHidden ? (
                <button
                  className="lxs-admin-header-icon-button"
                  onClick={() => setSearchHidden(false)}
                  aria-label="Search"
                  type="button"
                >
                  {searchIcon || <SearchIcon />}
                </button>
              ) : (
                <SearchBar
                  value={searchValue}
                  onChange={onSearchChange}
                  onSubmit={onSearchSubmit}
                  onFocus={onSearchFocus}
                  onBlur={() => {
                    if (autoHideSearch) {
                      setSearchHidden(true);
                    }
                  }}
                  placeholder={searchPlaceholder}
                  loading={searchLoading}
                  suggestions={searchSuggestions}
                  icon={searchIcon}
                  autoFocus={autoHideSearch}
                />
              )
            )}

            {centerContent}
          </div>

          {/* Right Section */}
          <div className="lxs-admin-header-right">
            {/* Quick Actions */}
            {quickActions.length > 0 && (
              <div className="lxs-admin-header-quick-actions">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    className={`lxs-admin-header-icon-button ${
                      action.disabled ? 'lxs-admin-header-icon-button--disabled' : ''
                    }`}
                    onClick={action.onClick}
                    title={action.tooltip || action.label}
                    disabled={action.disabled}
                    aria-label={action.label}
                    type="button"
                  >
                    {action.icon}
                    {action.badge && (
                      <Badge variant="error" size="sm" className="lxs-admin-header-icon-badge">
                        {action.badge}
                      </Badge>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Custom Actions */}
            {actions}

            {rightContent}

            {/* Divider */}
            {(showNotifications || showUserMenu) && (
              <div className="lxs-admin-header-divider" />
            )}

            {/* Notifications */}
            {showNotifications && (
              <div className="lxs-admin-header-notifications" ref={notificationsRef}>
                <button
                  className={`lxs-admin-header-icon-button ${
                    notificationsOpen ? 'lxs-admin-header-icon-button--active' : ''
                  }`}
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  aria-label="Notifications"
                  type="button"
                >
                  {notificationIcon || <BellIcon />}
                  {unreadCount > 0 && (
                    <Badge variant="error" size="sm" className="lxs-admin-header-icon-badge">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </Badge>
                  )}
                </button>
                {notificationsOpen && (
                  <NotificationsPanel
                    notifications={notifications}
                    onNotificationClick={onNotificationClick}
                    onMarkAllAsRead={onMarkAllAsRead}
                    onClearAll={onClearAllNotifications}
                    onViewAll={onViewAllNotifications}
                    onClose={() => setNotificationsOpen(false)}
                    maxNotifications={maxNotifications}
                  />
                )}
              </div>
            )}

            {/* User Menu */}
            {showUserMenu && userName && (
              <div className="lxs-admin-header-user" ref={userMenuRef}>
                <div
                  className={`lxs-admin-header-user-button ${
                    userMenuOpen ? 'lxs-admin-header-user-button--active' : ''
                  }`}
                  style={{ cursor: 'default' }}
                >
                  {onUserAvatarClick ? (
                    <button
                      type="button"
                      onClick={onUserAvatarClick}
                      aria-label="User profile"
                      className="lxs-admin-header-user-avatar-trigger"
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', outlineOffset: '2px', borderRadius: '50%' }}
                    >
                      {userAvatar ? (
                        <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden' }}>
                          <Avatar
                            src={userAvatar}
                            alt={userName}
                            size="sm"
                            className="lxs-admin-header-user-avatar"
                          />
                        </div>
                      ) : (
                        <div className="lxs-admin-header-user-avatar lxs-admin-header-user-avatar-fallback">
                          {userAvatarFallback || userName.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </button>
                  ) : (
                    userAvatar ? (
                      <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden' }}>
                        <Avatar
                          src={userAvatar}
                          alt={userName}
                          size="sm"
                          className="lxs-admin-header-user-avatar"
                        />
                      </div>
                    ) : (
                      <div className="lxs-admin-header-user-avatar lxs-admin-header-user-avatar-fallback">
                        {userAvatarFallback || userName.charAt(0).toUpperCase()}
                      </div>
                    )
                  )}

                  {(userName || userMenuItems.length > 0) && (
                    <button
                      type="button"
                      onClick={() => {
                        if (userMenuItems.length > 0) {
                          setUserMenuOpen(!userMenuOpen);
                        } else if (!onUserAvatarClick) {
                          // Optional fallback if no onUserAvatarClick but someone clicks the name
                        }
                      }}
                      aria-label="User menu"
                      style={{ background: 'none', border: 'none', padding: 0, cursor: userMenuItems.length > 0 ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: 'var(--lxs-spacing-2, 0.5rem)', textAlign: 'left', outlineOffset: '2px', borderRadius: '4px' }}
                    >
                      <div className="lxs-admin-header-user-info">
                        <Typography variant="body2" noMargin className="lxs-admin-header-user-name">
                          {userName}
                        </Typography>
                        {userRole && (
                          <Typography variant="caption" noMargin className="lxs-admin-header-user-role">
                            {userRole}
                          </Typography>
                        )}
                      </div>
                      {userMenuItems.length > 0 && (
                        <ChevronDownIcon />
                      )}
                    </button>
                  )}
                </div>
                {userMenuOpen && userMenuItems.length > 0 && (
                  <UserMenu items={userMenuItems} onClose={() => setUserMenuOpen(false)} />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Breadcrumbs (if enabled) */}
        {showBreadcrumbs && breadcrumbs.length > 0 && (
          <div className="lxs-admin-header-breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="lxs-admin-header-breadcrumb-separator">/</span>}
                {crumb.href || crumb.onClick ? (
                  <a
                    href={crumb.href}
                    onClick={(e) => {
                      if (crumb.onClick) {
                        e.preventDefault();
                        crumb.onClick();
                      }
                    }}
                    className="lxs-admin-header-breadcrumb"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="lxs-admin-header-breadcrumb lxs-admin-header-breadcrumb--current">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </header>
    );
  }
);

AdminHeader.displayName = 'AdminHeader';

export default AdminHeader as React.FC<AdminHeaderProps & React.RefAttributes<HTMLElement>>;
export { AdminHeader };
