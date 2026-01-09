"use client";

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AdminHeader } from './AdminHeader';
import type { NotificationItem, UserMenuItem, QuickAction, SearchSuggestion } from './AdminHeader';
import {
  UserIcon,
  SettingsIcon,
  HelpCircleIcon,
  LogOutIcon,
  InboxIcon,
  HomeIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  TrendingUpIcon,
  PackageIcon,
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  ErrorIcon,
} from '../../icons/IconComponents';

const meta: Meta<typeof AdminHeader> = {
  title: 'Components/AdminHeader',
  component: AdminHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# AdminHeader

Professional admin panel header component with comprehensive features for modern dashboards.

## Features

- **Mobile Menu Toggle**: Hamburger button for responsive sidebar control
- **Search**: Live search with suggestions and keyboard navigation
- **Notifications**: Rich notification panel with badges, types, and actions
- **Quick Actions**: Customizable icon buttons with badges
- **User Menu**: Dropdown menu with avatar, roles, and shortcuts
- **Breadcrumbs**: Optional breadcrumb navigation
- **Themes**: Light, dark, primary, and gradient variants
- **Fully Responsive**: Mobile-first design with adaptive layouts
- **Accessible**: ARIA labels, keyboard navigation, focus management

## Usage

\`\`\`tsx
import { AdminHeader } from '@vertex-ui/react';

function App() {
  return (
    <AdminHeader
      logo={<Logo />}
      title="Admin Dashboard"
      onToggleSidebar={() => console.log('Toggle')}
      showSearch
      searchPlaceholder="Search anything..."
      notifications={notifications}
      userName="John Doe"
      userRole="Administrator"
      userMenuItems={menuItems}
    />
  );
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'bordered', 'minimal', 'transparent'],
      description: 'Visual style variant',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark', 'primary', 'gradient'],
      description: 'Color theme',
    },
    sticky: {
      control: 'boolean',
      description: 'Make header sticky on scroll',
    },
    blur: {
      control: 'boolean',
      description: 'Add backdrop blur effect',
    },
    showToggleButton: {
      control: 'boolean',
      description: 'Show mobile menu toggle button',
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search bar',
    },
    showNotifications: {
      control: 'boolean',
      description: 'Show notifications bell',
    },
    showUserMenu: {
      control: 'boolean',
      description: 'Show user menu',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AdminHeader>;

// ==================== MOCK DATA ====================

const mockNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'New order received',
    description: 'Order #12345 from John Smith',
    time: '2 minutes ago',
    read: false,
    icon: <ShoppingCartIcon />,
    type: 'success',
  },
  {
    id: '2',
    title: 'Server maintenance scheduled',
    description: 'Downtime expected on Dec 25 at 2:00 AM',
    time: '1 hour ago',
    read: false,
    icon: <InfoIcon />,
    type: 'info',
  },
  {
    id: '3',
    title: 'Low inventory alert',
    description: 'Product XYZ has only 5 items left',
    time: '3 hours ago',
    read: true,
    icon: <WarningIcon />,
    type: 'warning',
  },
  {
    id: '4',
    title: 'Payment failed',
    description: 'Transaction #78901 could not be processed',
    time: '5 hours ago',
    read: true,
    icon: <ErrorIcon />,
    type: 'error',
  },
  {
    id: '5',
    title: 'Welcome to Admin Panel!',
    description: 'Check out the new features we added',
    time: 'Yesterday',
    read: true,
    icon: <CheckCircleIcon />,
    type: 'success',
  },
];

const mockUserMenuItems: UserMenuItem[] = [
  {
    label: 'Profile',
    icon: <UserIcon />,
    onClick: () => console.log('Profile clicked'),
    shortcut: '⌘P',
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    onClick: () => console.log('Settings clicked'),
    shortcut: '⌘,',
  },
  {
    label: 'Messages',
    icon: <InboxIcon />,
    onClick: () => console.log('Messages clicked'),
    badge: '3',
  },
  {
    divider: true,
    label: '',
  },
  {
    label: 'Help & Support',
    icon: <HelpCircleIcon />,
    onClick: () => console.log('Help clicked'),
  },
  {
    label: 'Logout',
    icon: <LogOutIcon />,
    onClick: () => console.log('Logout clicked'),
    variant: 'danger',
    shortcut: '⌘Q',
  },
];

const mockQuickActions: QuickAction[] = [
  {
    id: 'home',
    label: 'Dashboard',
    icon: <HomeIcon />,
    onClick: () => console.log('Dashboard'),
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <ChartBarIcon />,
    onClick: () => console.log('Analytics'),
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: <PackageIcon />,
    onClick: () => console.log('Orders'),
    badge: '12',
  },
];

const mockSearchSuggestions: SearchSuggestion[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: <HomeIcon />,
    category: 'Pages',
  },
  {
    id: '2',
    label: 'Analytics Report',
    icon: <TrendingUpIcon />,
    category: 'Reports',
  },
  {
    id: '3',
    label: 'Order #12345',
    icon: <PackageIcon />,
    category: 'Orders',
  },
  {
    id: '4',
    label: 'Customer Settings',
    icon: <SettingsIcon />,
    category: 'Settings',
  },
];

// ==================== STORIES ====================

/**
 * Default admin header with all features enabled
 */
export const Default: Story = {
  args: {
    logo: <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--vtx-color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>V</div>,
    title: 'Admin Dashboard',
    subtitle: 'Control Panel',
    onToggleSidebar: () => console.log('Toggle sidebar'),
    showSearch: true,
    searchPlaceholder: 'Search anything...',
    notifications: mockNotifications,
    userName: 'John Doe',
    userRole: 'Administrator',
    userAvatar: 'https://i.pravatar.cc/150?img=12',
    userMenuItems: mockUserMenuItems,
    quickActions: mockQuickActions,
    variant: 'default',
    theme: 'light',
    sticky: true,
  },
};

/**
 * Interactive example with search functionality
 */
export const WithSearch: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    return (
      <AdminHeader
        logo={<div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--vtx-color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>V</div>}
        title="Dashboard"
        onToggleSidebar={() => console.log('Toggle')}
        showSearch
        searchValue={searchValue}
        onSearchChange={(value) => {
          setSearchValue(value);
          setShowSuggestions(value.length > 0);
        }}
        onSearchSubmit={(value) => console.log('Search:', value)}
        searchSuggestions={showSuggestions ? mockSearchSuggestions : []}
        searchPlaceholder="Search pages, orders, customers..."
        userName="Jane Smith"
        userRole="Admin"
        userMenuItems={mockUserMenuItems}
        notifications={mockNotifications}
      />
    );
  },
};

/**
 * Header with dark theme
 */
export const DarkTheme: Story = {
  args: {
    logo: <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--vtx-color-primary-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>V</div>,
    title: 'Admin Portal',
    onToggleSidebar: () => console.log('Toggle'),
    showSearch: true,
    notifications: mockNotifications,
    userName: 'Alex Johnson',
    userRole: 'Super Admin',
    userAvatar: 'https://i.pravatar.cc/150?img=33',
    userMenuItems: mockUserMenuItems,
    quickActions: mockQuickActions,
    theme: 'dark',
    variant: 'elevated',
  },
};

/**
 * Header with primary color theme
 */
export const PrimaryTheme: Story = {
  args: {
    logo: <div style={{ width: 32, height: 32, borderRadius: 8, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--vtx-color-primary-500)', fontWeight: 'bold' }}>V</div>,
    title: 'Control Center',
    onToggleSidebar: () => console.log('Toggle'),
    showSearch: true,
    notifications: mockNotifications,
    userName: 'Sarah Wilson',
    userRole: 'Manager',
    userAvatar: 'https://i.pravatar.cc/150?img=45',
    userMenuItems: mockUserMenuItems,
    theme: 'primary',
  },
};

/**
 * Header with gradient theme
 */
export const GradientTheme: Story = {
  args: {
    logo: <div style={{ width: 32, height: 32, borderRadius: 8, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--vtx-color-primary-500)', fontWeight: 'bold' }}>V</div>,
    title: 'Modern Dashboard',
    subtitle: 'Analytics & Insights',
    onToggleSidebar: () => console.log('Toggle'),
    showSearch: true,
    searchPlaceholder: 'Search...',
    notifications: mockNotifications,
    userName: 'Mike Chen',
    userRole: 'Data Analyst',
    userAvatar: 'https://i.pravatar.cc/150?img=68',
    userMenuItems: mockUserMenuItems,
    quickActions: mockQuickActions,
    theme: 'gradient',
    blur: true,
  },
};

/**
 * Minimal header without extra features
 */
export const Minimal: Story = {
  args: {
    title: 'Simple Admin',
    onToggleSidebar: () => console.log('Toggle'),
    userName: 'Admin User',
    userRole: 'Administrator',
    variant: 'minimal',
    showNotifications: false,
    showSearch: false,
  },
};

/**
 * Header with breadcrumbs
 */
export const WithBreadcrumbs: Story = {
  args: {
    logo: <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--vtx-color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>V</div>,
    title: 'Dashboard',
    onToggleSidebar: () => console.log('Toggle'),
    showBreadcrumbs: true,
    breadcrumbs: [
      { label: 'Home', onClick: () => console.log('Home') },
      { label: 'Analytics', onClick: () => console.log('Analytics') },
      { label: 'Reports', onClick: () => console.log('Reports') },
      { label: 'Monthly Summary' },
    ],
    userName: 'John Doe',
    userRole: 'Admin',
    userMenuItems: mockUserMenuItems,
    notifications: mockNotifications,
  },
};

/**
 * Header without avatar (showing fallback)
 */
export const WithoutAvatar: Story = {
  args: {
    logo: <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--vtx-color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>V</div>,
    title: 'Admin Panel',
    onToggleSidebar: () => console.log('Toggle'),
    showSearch: true,
    notifications: mockNotifications,
    userName: 'Emily Davis',
    userRole: 'Moderator',
    userMenuItems: mockUserMenuItems,
  },
};

/**
 * Header with custom quick actions
 */
export const WithQuickActions: Story = {
  args: {
    logo: <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--vtx-color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>V</div>,
    title: 'E-Commerce Admin',
    onToggleSidebar: () => console.log('Toggle'),
    quickActions: [
      {
        id: 'home',
        label: 'Home',
        icon: <HomeIcon />,
        onClick: () => console.log('Home'),
      },
      {
        id: 'orders',
        label: 'Orders',
        icon: <PackageIcon />,
        onClick: () => console.log('Orders'),
        badge: '24',
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <TrendingUpIcon />,
        onClick: () => console.log('Analytics'),
      },
      {
        id: 'inbox',
        label: 'Messages',
        icon: <InboxIcon />,
        onClick: () => console.log('Messages'),
        badge: '5',
      },
    ],
    showSearch: true,
    notifications: mockNotifications,
    userName: 'Store Manager',
    userRole: 'Admin',
    userMenuItems: mockUserMenuItems,
  },
};

/**
 * Header with transparent variant and blur
 */
export const TransparentWithBlur: Story = {
  args: {
    logo: <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--vtx-color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>V</div>,
    title: 'Modern Admin',
    onToggleSidebar: () => console.log('Toggle'),
    showSearch: true,
    notifications: mockNotifications,
    userName: 'Chris Taylor',
    userRole: 'Developer',
    userAvatar: 'https://i.pravatar.cc/150?img=15',
    userMenuItems: mockUserMenuItems,
    variant: 'transparent',
    blur: true,
    theme: 'light',
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Story />
        <div style={{ padding: '2rem', color: 'white' }}>
          <h1>Content Below Header</h1>
          <p>The transparent header with blur effect creates a modern glassmorphism look.</p>
        </div>
      </div>
    ),
  ],
};

/**
 * Interactive example with notification management
 */
export const InteractiveNotifications: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(mockNotifications);

    const handleNotificationClick = (notification: NotificationItem) => {
      console.log('Clicked:', notification);
      setNotifications(prev =>
        prev.map(n => n.id === notification.id ? { ...n, read: true } : n)
      );
    };

    const handleMarkAllAsRead = () => {
      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const handleClearAll = () => {
      setNotifications([]);
    };

    return (
      <AdminHeader
        logo={<div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--vtx-color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>V</div>}
        title="Notification Demo"
        onToggleSidebar={() => console.log('Toggle')}
        notifications={notifications}
        onNotificationClick={handleNotificationClick}
        onMarkAllAsRead={handleMarkAllAsRead}
        onClearAllNotifications={handleClearAll}
        userName="Demo User"
        userRole="Admin"
        userMenuItems={mockUserMenuItems}
      />
    );
  },
};

/**
 * Mobile optimized header
 */
export const MobileOptimized: Story = {
  args: {
    title: 'Mobile Admin',
    onToggleSidebar: () => console.log('Toggle'),
    showSearch: false, // Hide search on mobile
    notifications: mockNotifications.slice(0, 3), // Fewer notifications
    userName: 'Mobile User',
    userRole: 'Admin',
    variant: 'default',
    height: '56px', // Smaller height for mobile
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
