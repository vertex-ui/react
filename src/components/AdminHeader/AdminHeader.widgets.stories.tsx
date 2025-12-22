import type { Meta, StoryObj } from '@storybook/react';
import { AdminHeader } from './AdminHeader';
import type { NotificationItem, UserMenuItem, QuickAction, SearchSuggestion } from './AdminHeader';
import {
  UserIcon,
  SettingsIcon,
  HelpCircleIcon,
  LogOutIcon,
  HomeIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  TrendingUpIcon,
  PackageIcon,
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  InboxIcon,
  LayersIcon,
  ServerIcon,
  CodeIcon,
  ZapIcon,
  DocumentIcon,
} from '../../icons/IconComponents';

const meta: Meta<typeof AdminHeader> = {
  title: 'Widgets/AdminHeader',
  component: AdminHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# AdminHeader Widgets

Production-ready widget examples of AdminHeader component for various use cases.

These examples demonstrate complete, real-world implementations that can be directly
used or adapted for different types of admin panels and dashboards.

## Widget Categories

1. **Complete Dashboard** - Full-featured admin header
2. **Dark Theme** - Modern dark mode interface
3. **Minimal** - Clean, simple header
4. **E-Commerce** - Online store management
5. **Gradient** - Modern gradient design
6. **SaaS Application** - Software-as-a-Service admin
7. **Compact Mobile** - Mobile-optimized design
8. **Corporate** - Enterprise-style header
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AdminHeader>;

// ==================== MOCK DATA ====================

const dashboardNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'System Update Available',
    description: 'Version 2.1.0 is ready to install',
    time: '5 min ago',
    read: false,
    icon: <InfoIcon />,
    type: 'info',
  },
  {
    id: '2',
    title: 'Backup Completed',
    description: 'Daily backup finished successfully',
    time: '1 hour ago',
    read: false,
    icon: <CheckCircleIcon />,
    type: 'success',
  },
  {
    id: '3',
    title: 'High CPU Usage',
    description: 'Server load is above 80%',
    time: '2 hours ago',
    read: true,
    icon: <WarningIcon />,
    type: 'warning',
  },
];

const ecommerceNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'New Order #12345',
    description: 'John Smith placed an order worth $299.99',
    time: '2 min ago',
    read: false,
    icon: <ShoppingCartIcon />,
    type: 'success',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: '2',
    title: 'Low Stock Alert',
    description: 'Product "Wireless Headphones" has only 3 items left',
    time: '15 min ago',
    read: false,
    icon: <WarningIcon />,
    type: 'warning',
  },
  {
    id: '3',
    title: 'Payment Received',
    description: 'Order #12340 payment confirmed',
    time: '30 min ago',
    read: true,
    icon: <CheckCircleIcon />,
    type: 'success',
  },
  {
    id: '4',
    title: 'Customer Review',
    description: 'New 5-star review on "Premium Laptop"',
    time: '1 hour ago',
    read: true,
    icon: <InfoIcon />,
    type: 'info',
    avatar: 'https://i.pravatar.cc/150?img=25',
  },
];

const standardUserMenu: UserMenuItem[] = [
  {
    label: 'Profile',
    icon: <UserIcon />,
    onClick: () => console.log('Profile'),
    shortcut: '⌘P',
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    onClick: () => console.log('Settings'),
    shortcut: '⌘,',
  },
  {
    label: 'Messages',
    icon: <InboxIcon />,
    onClick: () => console.log('Messages'),
    badge: '3',
  },
  { divider: true, label: '' },
  {
    label: 'Help Center',
    icon: <HelpCircleIcon />,
    onClick: () => console.log('Help'),
  },
  {
    label: 'Logout',
    icon: <LogOutIcon />,
    onClick: () => console.log('Logout'),
    variant: 'danger',
    shortcut: '⌘Q',
  },
];

const dashboardQuickActions: QuickAction[] = [
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
    id: 'reports',
    label: 'Reports',
    icon: <DocumentIcon />,
    onClick: () => console.log('Reports'),
  },
];

const ecommerceQuickActions: QuickAction[] = [
  {
    id: 'orders',
    label: 'Orders',
    icon: <PackageIcon />,
    onClick: () => console.log('Orders'),
    badge: '12',
  },
  {
    id: 'products',
    label: 'Products',
    icon: <LayersIcon />,
    onClick: () => console.log('Products'),
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: <UserIcon />,
    onClick: () => console.log('Customers'),
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <TrendingUpIcon />,
    onClick: () => console.log('Analytics'),
  },
];

const searchSuggestions: SearchSuggestion[] = [
  {
    id: '1',
    label: 'Dashboard Overview',
    icon: <HomeIcon />,
    category: 'Pages',
  },
  {
    id: '2',
    label: 'User Management',
    icon: <UserIcon />,
    category: 'Pages',
  },
  {
    id: '3',
    label: 'Analytics Report',
    icon: <TrendingUpIcon />,
    category: 'Reports',
  },
  {
    id: '4',
    label: 'System Settings',
    icon: <SettingsIcon />,
    category: 'Settings',
  },
];

// ==================== WIDGET STORIES ====================

/**
 * Complete Dashboard Header
 * 
 * Full-featured admin header with all elements:
 * - Logo and branding
 * - Search with suggestions
 * - Quick action buttons
 * - Notifications panel
 * - User menu with avatar
 */
export const CompleteDashboard: Story = {
  args: {
    logo: (
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        V
      </div>
    ),
    title: 'Vertex Admin',
    subtitle: 'Dashboard v2.0',
    onLogoClick: () => console.log('Logo clicked'),
    onToggleSidebar: () => console.log('Toggle sidebar'),
    showSearch: true,
    searchPlaceholder: 'Search pages, users, orders...',
    searchSuggestions,
    onSearchChange: (value) => console.log('Search:', value),
    onSearchSubmit: (value) => console.log('Submit:', value),
    quickActions: dashboardQuickActions,
    notifications: dashboardNotifications,
    onNotificationClick: (notif) => console.log('Notification:', notif),
    onMarkAllAsRead: () => console.log('Mark all read'),
    onClearAllNotifications: () => console.log('Clear all'),
    userName: 'Sarah Johnson',
    userRole: 'System Administrator',
    userAvatar: 'https://i.pravatar.cc/150?img=45',
    userMenuItems: standardUserMenu,
    variant: 'elevated',
    theme: 'light',
    sticky: true,
    blur: false,
  },
};

/**
 * Dark Theme Header
 * 
 * Modern dark mode interface perfect for:
 * - Developer tools
 * - Late-night admin work
 * - Reduced eye strain
 * - Modern aesthetic
 */
export const DarkTheme: Story = {
  args: {
    logo: (
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: 'var(--vtx-color-primary-500)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        D
      </div>
    ),
    title: 'Dark Console',
    subtitle: 'Admin Portal',
    onToggleSidebar: () => console.log('Toggle'),
    showSearch: true,
    searchPlaceholder: 'Search...',
    quickActions: [
      {
        id: 'server',
        label: 'Servers',
        icon: <ServerIcon />,
        onClick: () => console.log('Servers'),
      },
      {
        id: 'code',
        label: 'Code',
        icon: <CodeIcon />,
        onClick: () => console.log('Code'),
      },
      {
        id: 'performance',
        label: 'Performance',
        icon: <ZapIcon />,
        onClick: () => console.log('Performance'),
        badge: '!',
      },
    ],
    notifications: dashboardNotifications,
    userName: 'Alex Chen',
    userRole: 'DevOps Engineer',
    userAvatar: 'https://i.pravatar.cc/150?img=33',
    userMenuItems: standardUserMenu,
    theme: 'dark',
    variant: 'default',
    sticky: true,
  },
};

/**
 * Minimal Header
 * 
 * Clean, distraction-free header for:
 * - Simple admin panels
 * - Internal tools
 * - Minimal interfaces
 * - Focus-first design
 */
export const Minimal: Story = {
  args: {
    title: 'Simple Admin',
    subtitle: 'Internal Tools',
    onToggleSidebar: () => console.log('Toggle'),
    userName: 'Admin User',
    userRole: 'Administrator',
    userMenuItems: [
      {
        label: 'Profile',
        icon: <UserIcon />,
        onClick: () => console.log('Profile'),
      },
      {
        label: 'Settings',
        icon: <SettingsIcon />,
        onClick: () => console.log('Settings'),
      },
      { divider: true, label: '' },
      {
        label: 'Logout',
        icon: <LogOutIcon />,
        onClick: () => console.log('Logout'),
        variant: 'danger',
      },
    ],
    variant: 'minimal',
    theme: 'light',
    showNotifications: false,
    showSearch: false,
  },
};

/**
 * E-Commerce Admin Header
 * 
 * Optimized for online store management with:
 * - Order notifications
 * - Product quick actions
 * - Customer insights
 * - Sales analytics
 */
export const EcommerceAdmin: Story = {
  args: {
    logo: (
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: '#10B981',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        🛒
      </div>
    ),
    title: 'Store Admin',
    subtitle: 'E-Commerce Dashboard',
    onToggleSidebar: () => console.log('Toggle'),
    showSearch: true,
    searchPlaceholder: 'Search products, orders, customers...',
    quickActions: ecommerceQuickActions,
    notifications: ecommerceNotifications,
    onNotificationClick: (notif) => console.log('Notification:', notif),
    userName: 'Emma Wilson',
    userRole: 'Store Manager',
    userAvatar: 'https://i.pravatar.cc/150?img=20',
    userMenuItems: [
      {
        label: 'My Store',
        icon: <HomeIcon />,
        onClick: () => console.log('Store'),
      },
      {
        label: 'Orders',
        icon: <PackageIcon />,
        onClick: () => console.log('Orders'),
        badge: '12',
      },
      {
        label: 'Messages',
        icon: <InboxIcon />,
        onClick: () => console.log('Messages'),
        badge: '5',
      },
      { divider: true, label: '' },
      {
        label: 'Settings',
        icon: <SettingsIcon />,
        onClick: () => console.log('Settings'),
      },
      {
        label: 'Logout',
        icon: <LogOutIcon />,
        onClick: () => console.log('Logout'),
        variant: 'danger',
      },
    ],
    variant: 'elevated',
    theme: 'light',
    sticky: true,
  },
};

/**
 * Gradient Theme Header
 * 
 * Eye-catching gradient design for:
 * - Modern dashboards
 * - Creative tools
 * - Brand-focused interfaces
 * - Marketing platforms
 */
export const GradientHeader: Story = {
  args: {
    logo: (
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6366F1',
          fontWeight: 'bold',
          fontSize: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        G
      </div>
    ),
    title: 'Gradient Admin',
    subtitle: 'Modern Dashboard',
    onToggleSidebar: () => console.log('Toggle'),
    showSearch: true,
    searchPlaceholder: 'Search anything...',
    quickActions: dashboardQuickActions,
    notifications: dashboardNotifications,
    userName: 'Mike Taylor',
    userRole: 'Creative Director',
    userAvatar: 'https://i.pravatar.cc/150?img=68',
    userMenuItems: standardUserMenu,
    theme: 'gradient',
    variant: 'default',
    blur: true,
    sticky: true,
  },
};

/**
 * SaaS Application Header
 * 
 * Perfect for Software-as-a-Service platforms with:
 * - Multi-tenant support
 * - Workspace switcher
 * - Breadcrumb navigation
 * - Team collaboration features
 */
export const SaasApplication: Story = {
  args: {
    logo: (
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: 'var(--vtx-color-primary-500)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        S
      </div>
    ),
    title: 'SaaS Platform',
    subtitle: 'Workspace: Acme Corp',
    onToggleSidebar: () => console.log('Toggle'),
    showBreadcrumbs: true,
    breadcrumbs: [
      { label: 'Dashboard', onClick: () => console.log('Dashboard') },
      { label: 'Projects', onClick: () => console.log('Projects') },
      { label: 'Analytics' },
    ],
    showSearch: true,
    searchPlaceholder: 'Search projects, tasks, users...',
    quickActions: [
      {
        id: 'projects',
        label: 'Projects',
        icon: <LayersIcon />,
        onClick: () => console.log('Projects'),
      },
      {
        id: 'tasks',
        label: 'Tasks',
        icon: <CheckCircleIcon />,
        onClick: () => console.log('Tasks'),
        badge: '8',
      },
      {
        id: 'team',
        label: 'Team',
        icon: <UserIcon />,
        onClick: () => console.log('Team'),
      },
    ],
    notifications: dashboardNotifications,
    userName: 'Chris Anderson',
    userRole: 'Project Manager',
    userAvatar: 'https://i.pravatar.cc/150?img=15',
    userMenuItems: standardUserMenu,
    variant: 'elevated',
    theme: 'light',
    sticky: true,
  },
};

/**
 * Compact Mobile Header
 * 
 * Optimized for mobile devices with:
 * - Compact layout
 * - Essential features only
 * - Touch-friendly buttons
 * - Responsive design
 */
export const CompactMobile: Story = {
  args: {
    logo: (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: 'var(--vtx-color-primary-500)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      >
        M
      </div>
    ),
    title: 'Mobile Admin',
    onToggleSidebar: () => console.log('Toggle'),
    notifications: ecommerceNotifications.slice(0, 3),
    userName: 'User',
    userRole: 'Admin',
    userAvatar: 'https://i.pravatar.cc/150?img=40',
    userMenuItems: [
      {
        label: 'Profile',
        icon: <UserIcon />,
        onClick: () => console.log('Profile'),
      },
      {
        label: 'Settings',
        icon: <SettingsIcon />,
        onClick: () => console.log('Settings'),
      },
      { divider: true, label: '' },
      {
        label: 'Logout',
        icon: <LogOutIcon />,
        onClick: () => console.log('Logout'),
        variant: 'danger',
      },
    ],
    variant: 'default',
    theme: 'light',
    height: '56px',
    showSearch: false, // Hide search on mobile
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Corporate Enterprise Header
 * 
 * Professional design for enterprise applications:
 * - Formal aesthetic
 * - Comprehensive features
 * - Multi-level navigation
 * - Business intelligence focus
 */
export const CorporateHeader: Story = {
  args: {
    logo: (
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 4,
          background: '#1E40AF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        C
      </div>
    ),
    title: 'Corporate Portal',
    subtitle: 'Enterprise Dashboard',
    onToggleSidebar: () => console.log('Toggle'),
    showBreadcrumbs: true,
    breadcrumbs: [
      { label: 'Home', onClick: () => console.log('Home') },
      { label: 'Analytics', onClick: () => console.log('Analytics') },
      { label: 'Financial Reports' },
    ],
    showSearch: true,
    searchPlaceholder: 'Search employees, reports, documents...',
    quickActions: [
      {
        id: 'reports',
        label: 'Reports',
        icon: <DocumentIcon />,
        onClick: () => console.log('Reports'),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <ChartBarIcon />,
        onClick: () => console.log('Analytics'),
      },
      {
        id: 'alerts',
        label: 'Alerts',
        icon: <WarningIcon />,
        onClick: () => console.log('Alerts'),
        badge: '2',
      },
    ],
    notifications: dashboardNotifications,
    userName: 'John Corporate',
    userRole: 'Chief Technology Officer',
    userAvatar: 'https://i.pravatar.cc/150?img=50',
    userMenuItems: [
      {
        label: 'My Profile',
        icon: <UserIcon />,
        onClick: () => console.log('Profile'),
      },
      {
        label: 'Company Settings',
        icon: <SettingsIcon />,
        onClick: () => console.log('Settings'),
      },
      {
        label: 'Documents',
        icon: <DocumentIcon />,
        onClick: () => console.log('Documents'),
      },
      { divider: true, label: '' },
      {
        label: 'Help & Support',
        icon: <HelpCircleIcon />,
        onClick: () => console.log('Help'),
      },
      {
        label: 'Sign Out',
        icon: <LogOutIcon />,
        onClick: () => console.log('Logout'),
        variant: 'danger',
      },
    ],
    variant: 'bordered',
    theme: 'light',
    sticky: true,
  },
};
