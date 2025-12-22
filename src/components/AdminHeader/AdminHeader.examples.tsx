import { useState } from 'react';
import { AdminHeader } from './AdminHeader';
import type { NotificationItem, UserMenuItem, QuickAction, SearchSuggestion } from './AdminHeader';
import {
  HomeIcon,
  PlusIcon,
  SettingsIcon,
  UserIcon,
  LogOutIcon,
  InboxIcon,
  HelpCircleIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  PackageIcon,
  CreditCardIcon,
  TrendingUpIcon,
  LayersIcon,
  CodeIcon,
  ZapIcon,
  DocumentIcon,
  WarningIcon,
  CheckCircleIcon,
} from '../../icons/IconComponents';

/**
 * Widget 1: Complete Admin Dashboard Header
 * Full-featured header with all components
 */
export const CompleteDashboardHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      title: 'New order received',
      description: 'Order #12345 from John Doe',
      time: '2 minutes ago',
      read: false,
      type: 'success',
      icon: <ShoppingCartIcon />,
    },
    {
      id: '2',
      title: 'Server maintenance scheduled',
      description: 'Maintenance window: Tonight at 2 AM',
      time: '1 hour ago',
      read: false,
      type: 'warning',
      icon: <WarningIcon />,
    },
    {
      id: '3',
      title: 'User registration',
      description: 'Jane Smith registered an account',
      time: '3 hours ago',
      read: true,
      type: 'info',
      icon: <UserIcon />,
    },
  ]);

  const searchSuggestions: SearchSuggestion[] = [
    { id: '1', label: 'Dashboard', icon: <HomeIcon />, category: 'Pages' },
    { id: '2', label: 'Products', icon: <PackageIcon />, category: 'Pages' },
    { id: '3', label: 'Order #12345', icon: <ShoppingCartIcon />, category: 'Orders' },
    { id: '4', label: 'Customer: John Doe', icon: <UserIcon />, category: 'Customers' },
  ];

  const quickActions: QuickAction[] = [
    { id: '1', label: 'New order', icon: <PlusIcon />, tooltip: 'Create new order' },
    { id: '2', label: 'Messages', icon: <InboxIcon />, tooltip: 'View messages', badge: '3' },
    { id: '3', label: 'Help', icon: <HelpCircleIcon />, tooltip: 'Help center' },
  ];

  const userMenuItems: UserMenuItem[] = [
    { label: 'Profile', icon: <UserIcon />, onClick: () => console.log('Profile') },
    { label: 'Settings', icon: <SettingsIcon />, onClick: () => console.log('Settings'), shortcut: '⌘,' },
    { label: 'Billing', icon: <CreditCardIcon />, onClick: () => console.log('Billing'), badge: 'Pro' },
    { divider: true, label: '' },
    { label: 'Theme', icon: <LayersIcon />, onClick: () => console.log('Theme') },
    { label: 'Keyboard shortcuts', icon: <CodeIcon />, onClick: () => console.log('Shortcuts'), shortcut: '⌘K' },
    { divider: true, label: '' },
    { label: 'Logout', icon: <LogOutIcon />, onClick: () => console.log('Logout'), variant: 'danger' },
  ];

  return (
    <AdminHeader
      logo={
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          V
        </div>
      }
      title="Vertex Admin"
      subtitle="v2.0.0"
      onToggleSidebar={() => setMobileOpen(!mobileOpen)}
      showSearch
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      searchPlaceholder="Search products, orders, customers..."
      searchSuggestions={searchValue ? searchSuggestions : []}
      notifications={notifications}
      onNotificationClick={(notif) => console.log('Clicked:', notif)}
      onMarkAllAsRead={() => setNotifications(notifications.map((n) => ({ ...n, read: true })))}
      onClearAllNotifications={() => setNotifications([])}
      onViewAllNotifications={() => console.log('View all')}
      quickActions={quickActions}
      userName="John Doe"
      userRole="Administrator"
      userAvatar="https://i.pravatar.cc/150?img=12"
      userMenuItems={userMenuItems}
      variant="elevated"
      sticky
    />
  );
};

/**
 * Widget 2: Dark Theme Dashboard Header
 * Professional dark mode header
 */
export const DarkThemeHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  const userMenuItems: UserMenuItem[] = [
    { label: 'Dashboard', icon: <HomeIcon /> },
    { label: 'Analytics', icon: <ChartBarIcon />, badge: 'New' },
    { divider: true, label: '' },
    { label: 'Settings', icon: <SettingsIcon /> },
    { label: 'Logout', icon: <LogOutIcon />, variant: 'danger' },
  ];

  return (
    <AdminHeader
      logo={<div style={{ fontSize: '24px', color: 'var(--vtx-color-primary-500)' }}><ZapIcon /></div>}
      title="Dashboard"
      onToggleSidebar={() => console.log('Toggle')}
      showSearch
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      searchPlaceholder="Quick search..."
      notifications={[
        {
          id: '1',
          title: 'System update available',
          time: '5 min ago',
          read: false,
          type: 'info',
        },
      ]}
      userName="Admin User"
      userRole="Super Admin"
      userMenuItems={userMenuItems}
      theme="dark"
      variant="bordered"
      sticky
      blur
    />
  );
};

/**
 * Widget 3: Minimal Clean Header
 * Simple, clean header for focused interfaces
 */
export const MinimalHeader = () => {
  return (
    <AdminHeader
      logo={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Logo</span>}
      title="Application"
      onToggleSidebar={() => console.log('Toggle')}
      userName="User"
      userRole="Member"
      userMenuItems={[
        { label: 'Profile', icon: <UserIcon /> },
        { label: 'Logout', icon: <LogOutIcon />, variant: 'danger' },
      ]}
      variant="minimal"
      sticky={false}
    />
  );
};

/**
 * Widget 4: E-commerce Admin Header
 * Header optimized for e-commerce admin panels
 */
export const EcommerceAdminHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  const notifications: NotificationItem[] = [
    {
      id: '1',
      title: 'New Order #5847',
      description: '$249.00 - 3 items',
      time: 'Just now',
      read: false,
      type: 'success',
      avatar: 'https://i.pravatar.cc/40?img=1',
    },
    {
      id: '2',
      title: 'Low Stock Alert',
      description: 'iPhone 15 Pro - Only 5 left',
      time: '10 min ago',
      read: false,
      type: 'warning',
      icon: <WarningIcon />,
    },
    {
      id: '3',
      title: 'Payment Received',
      description: 'Order #5846 - $189.00',
      time: '1 hour ago',
      read: true,
      type: 'success',
      icon: <CheckCircleIcon />,
    },
  ];

  const quickActions: QuickAction[] = [
    { id: '1', label: 'Add Product', icon: <PlusIcon />, tooltip: 'Add new product' },
    { id: '2', label: 'Orders', icon: <ShoppingCartIcon />, tooltip: 'View orders', badge: '12' },
    { id: '3', label: 'Reports', icon: <ChartBarIcon />, tooltip: 'View reports' },
  ];

  return (
    <AdminHeader
      logo={
        <div
          style={{
            padding: '8px 16px',
            background: '#f59e0b',
            borderRadius: '6px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
          }}
        >
          SHOP
        </div>
      }
      title="Store Manager"
      onToggleSidebar={() => console.log('Toggle')}
      showSearch
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      searchPlaceholder="Search products, orders, customers..."
      notifications={notifications}
      quickActions={quickActions}
      userName="Store Admin"
      userRole="Manager"
      userAvatar="https://i.pravatar.cc/150?img=5"
      userMenuItems={[
        { label: 'My Profile', icon: <UserIcon /> },
        { label: 'Store Settings', icon: <SettingsIcon /> },
        { label: 'Analytics', icon: <ChartBarIcon />, badge: 'Beta' },
        { divider: true, label: '' },
        { label: 'Help Center', icon: <HelpCircleIcon /> },
        { label: 'Logout', icon: <LogOutIcon />, variant: 'danger' },
      ]}
      variant="elevated"
      height={68}
      sticky
    />
  );
};

/**
 * Widget 5: Gradient Header
 * Eye-catching gradient header for modern apps
 */
export const GradientHeader = () => {
  return (
    <AdminHeader
      logo={<div style={{ fontSize: '24px', color: 'var(--vtx-color-primary-500)' }}><ZapIcon /></div>}
      title="Modern App"
      subtitle="Dashboard"
      onToggleSidebar={() => console.log('Toggle')}
      notifications={[
        {
          id: '1',
          title: 'Welcome!',
          description: 'Get started with your dashboard',
          time: 'Now',
          read: false,
          type: 'info',
        },
      ]}
      userName="John Doe"
      userRole="Pro User"
      userMenuItems={[
        { label: 'Profile', icon: <UserIcon /> },
        { label: 'Upgrade to Pro', icon: <TrendingUpIcon />, variant: 'success' },
        { divider: true, label: '' },
        { label: 'Logout', icon: <LogOutIcon />, variant: 'danger' },
      ]}
      theme="gradient"
      variant="elevated"
      sticky
      blur
    />
  );
};

/**
 * Widget 6: SaaS Application Header
 * Professional SaaS application header
 */
export const SaasApplicationHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  const breadcrumbs = [
    { label: 'Dashboard', onClick: () => console.log('Dashboard') },
    { label: 'Projects', onClick: () => console.log('Projects') },
    { label: 'Website Redesign' },
  ];

  return (
    <AdminHeader
      logo={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              background: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            S
          </div>
          <span style={{ fontWeight: 600, fontSize: '16px' }}>SaaS App</span>
        </div>
      }
      onToggleSidebar={() => console.log('Toggle')}
      showSearch
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      searchPlaceholder="Search anything..."
      notifications={[]}
      quickActions={[
        { id: '1', label: 'New Project', icon: <PlusIcon />, tooltip: 'Create new project' },
        { id: '2', label: 'Notifications', icon: <InboxIcon />, tooltip: 'Notifications' },
      ]}
      userName="Sarah Johnson"
      userRole="Product Manager"
      userAvatar="https://i.pravatar.cc/150?img=10"
      userMenuItems={[
        { label: 'Your Profile', icon: <UserIcon />, shortcut: '⌘P' },
        { label: 'Team Settings', icon: <SettingsIcon />, shortcut: '⌘T' },
        { label: 'Billing', icon: <CreditCardIcon />, badge: 'Pro' },
        { divider: true, label: '' },
        { label: 'Documentation', icon: <DocumentIcon /> },
        { label: 'API Keys', icon: <CodeIcon /> },
        { divider: true, label: '' },
        { label: 'Sign out', icon: <LogOutIcon />, variant: 'danger' },
      ]}
      showBreadcrumbs
      breadcrumbs={breadcrumbs}
      variant="bordered"
      sticky
    />
  );
};

/**
 * Widget 7: Compact Mobile-First Header
 * Optimized for mobile devices
 */
export const CompactMobileHeader = () => {
  return (
    <AdminHeader
      logo={<div style={{ width: 32, height: 32, borderRadius: 6, background: 'var(--vtx-color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>M</div>}
      title="App"
      onToggleSidebar={() => console.log('Toggle')}
      notifications={[
        {
          id: '1',
          title: 'New message',
          time: '1m ago',
          read: false,
        },
      ]}
      userName="User"
      userMenuItems={[
        { label: 'Profile', icon: <UserIcon /> },
        { label: 'Logout', icon: <LogOutIcon />, variant: 'danger' },
      ]}
      variant="elevated"
      height={56}
      sticky
    />
  );
};

/**
 * Widget 8: Primary Theme Corporate Header
 * Professional corporate style
 */
export const CorporateHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <AdminHeader
      logo={
        <div
          style={{
            padding: '6px 12px',
            background: 'white',
            borderRadius: '4px',
            color: '#2563eb',
            fontWeight: 'bold',
            fontSize: '14px',
          }}
        >
          CORP
        </div>
      }
      title="Enterprise Portal"
      onToggleSidebar={() => console.log('Toggle')}
      showSearch
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      searchPlaceholder="Search portal..."
      notifications={[
        {
          id: '1',
          title: 'Quarterly Review',
          description: 'Meeting starts in 15 minutes',
          time: '15 min',
          read: false,
          type: 'warning',
        },
      ]}
      userName="Michael Chen"
      userRole="VP of Operations"
      userAvatar="https://i.pravatar.cc/150?img=8"
      userMenuItems={[
        { label: 'My Dashboard', icon: <HomeIcon /> },
        { label: 'Settings', icon: <SettingsIcon /> },
        { label: 'Support', icon: <HelpCircleIcon /> },
        { divider: true, label: '' },
        { label: 'Sign Out', icon: <LogOutIcon />, variant: 'danger' },
      ]}
      theme="primary"
      variant="elevated"
      sticky
    />
  );
};

/**
 * Complete Demo Page
 */
export const AdminHeaderShowcase = () => {
  return (
    <div style={{ background: '#f5f5f5' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ padding: '20px', margin: 0 }}>1. Complete Dashboard Header</h2>
        <CompleteDashboardHeader />
        <div style={{ height: '200px', padding: '20px', background: 'white' }}>
          <p>Page content here...</p>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ padding: '20px', margin: 0 }}>2. Dark Theme Header</h2>
        <DarkThemeHeader />
        <div style={{ height: '200px', padding: '20px', background: '#111' }}>
          <p style={{ color: 'white' }}>Dark theme content...</p>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ padding: '20px', margin: 0 }}>3. E-commerce Admin Header</h2>
        <EcommerceAdminHeader />
        <div style={{ height: '200px', padding: '20px', background: 'white' }}>
          <p>Store management content...</p>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ padding: '20px', margin: 0 }}>4. Gradient Header</h2>
        <GradientHeader />
        <div style={{ height: '200px', padding: '20px', background: 'white' }}>
          <p>Modern app content...</p>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ padding: '20px', margin: 0 }}>5. SaaS Application Header</h2>
        <SaasApplicationHeader />
        <div style={{ height: '200px', padding: '20px', background: 'white' }}>
          <p>SaaS application content...</p>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ padding: '20px', margin: 0 }}>6. Corporate Primary Header</h2>
        <CorporateHeader />
        <div style={{ height: '200px', padding: '20px', background: 'white' }}>
          <p>Corporate portal content...</p>
        </div>
      </div>
    </div>
  );
};
