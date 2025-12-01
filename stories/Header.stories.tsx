import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../src/components/Header';
import { SideMenu } from '../src/components/SideMenu';
import { useState } from 'react';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

// Icons
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PackageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M20 7h-9m9 0v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7m16 0-2-4H6L4 7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="9" cy="21" r="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="21" r="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M22 4L12 14.01l-3-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8v4m0 4h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Basic: Story = {
  args: {
    title: 'Admin Dashboard',
    userName: 'John Doe',
    userSubtitle: 'Administrator',
    userMenuItems: [
      { label: 'Profile', icon: <UserIcon />, onClick: () => console.log('Profile') },
      { label: 'Settings', icon: <SettingsIcon />, onClick: () => console.log('Settings') },
      {
        label: 'Logout',
        icon: <LogoutIcon />,
        onClick: () => console.log('Logout'),
        variant: 'danger',
        divider: true,
      },
    ],
    onToggleSidebar: () => console.log('Toggle sidebar'),
  },
};

export const WithNotifications: Story = {
  args: {
    title: 'Dashboard',
    notifications: [
      {
        id: '1',
        title: 'New order received',
        description: 'Order #1234 from John Smith',
        time: '2 min ago',
        read: false,
        icon: <ShoppingCartIcon />,
        type: 'info',
      },
      {
        id: '2',
        title: 'Payment processed',
        description: '$299.00 received',
        time: '15 min ago',
        read: false,
        icon: <CheckCircleIcon />,
        type: 'success',
      },
      {
        id: '3',
        title: 'Low stock alert',
        description: 'Product "Widget X" is running low',
        time: '1 hour ago',
        read: true,
        icon: <AlertIcon />,
        type: 'warning',
      },
      {
        id: '4',
        title: 'New product added',
        description: '"Premium Widget" is now available',
        time: '2 hours ago',
        read: true,
        icon: <PackageIcon />,
        type: 'info',
      },
    ],
    onNotificationClick: (notification) => console.log('Notification clicked:', notification),
    onMarkAllAsRead: () => console.log('Mark all as read'),
    userName: 'John Doe',
    userSubtitle: 'Admin',
    userMenuItems: [
      { label: 'Profile', icon: <UserIcon /> },
      { label: 'Settings', icon: <SettingsIcon /> },
      { label: 'Logout', icon: <LogoutIcon />, variant: 'danger', divider: true },
    ],
  },
};

export const WithCustomLogo: Story = {
  args: {
    logo: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
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
            fontSize: '18px',
          }}
        >
          V
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '14px' }}>Vertex UI</div>
          <div style={{ fontSize: '11px', color: '#737373' }}>Admin Panel</div>
        </div>
      </div>
    ),
    notifications: [{ id: '1', title: 'New notification', time: '5 min ago', read: false }],
    userName: 'Jane Smith',
    userSubtitle: 'Super Admin',
    userMenuItems: [
      { label: 'Profile', icon: <UserIcon /> },
      { label: 'Logout', icon: <LogoutIcon />, variant: 'danger' },
    ],
    onToggleSidebar: () => console.log('Toggle'),
  },
};

export const FullLayout: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [notifications, setNotifications] = useState([
      {
        id: '1',
        title: 'New order received',
        description: 'Order #1234 from John Smith',
        time: '2 min ago',
        read: false,
        icon: <ShoppingCartIcon />,
        type: 'info' as const,
      },
      {
        id: '2',
        title: 'Payment processed',
        description: '$299.00 received',
        time: '15 min ago',
        read: false,
        icon: <CheckCircleIcon />,
        type: 'success' as const,
      },
      {
        id: '3',
        title: 'Low stock alert',
        description: 'Product "Widget X" is running low',
        time: '1 hour ago',
        read: true,
        icon: <AlertIcon />,
        type: 'warning' as const,
      },
    ]);

    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        {/* Sidebar */}
        <SideMenu
          collapsed={collapsed}
          onCollapseToggle={setCollapsed}
          header={
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
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
              {!collapsed && (
                <div>
                  <div style={{ fontWeight: 600 }}>Vertex UI</div>
                  <div style={{ fontSize: '12px', color: '#737373' }}>Admin</div>
                </div>
              )}
            </div>
          }
          footer={
            !collapsed ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: '#f5f5f5',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#3b82f6',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  JD
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: '13px' }}>John Doe</div>
                  <div style={{ fontSize: '11px', color: '#737373' }}>Admin</div>
                </div>
                <button
                  style={{
                    width: '32px',
                    height: '32px',
                    border: 'none',
                    borderRadius: '6px',
                    background: 'transparent',
                    color: '#dc2626',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LogoutIcon />
                </button>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    margin: '0 auto',
                    borderRadius: '50%',
                    background: '#3b82f6',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  JD
                </div>
              </div>
            )
          }
          items={[
            { label: 'Dashboard', active: true },
            { label: 'Products', items: [{ label: 'All Products' }, { label: 'Categories' }] },
            { label: 'Orders', badge: 5 },
            { label: 'Users' },
            { label: 'Settings' },
          ]}
        />

        {/* Main Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Header */}
          <Header
            title="Dashboard"
            onToggleSidebar={() => setCollapsed(!collapsed)}
            notifications={notifications}
            onNotificationClick={(notification) => {
              console.log('Clicked:', notification);
              setNotifications((prev) =>
                prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n))
              );
            }}
            onMarkAllAsRead={() => {
              setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
            }}
            userName="John Doe"
            userSubtitle="Administrator"
            userMenuItems={[
              { label: 'Profile', icon: <UserIcon />, onClick: () => console.log('Profile') },
              { label: 'Settings', icon: <SettingsIcon />, onClick: () => console.log('Settings') },
              {
                label: 'Logout',
                icon: <LogoutIcon />,
                onClick: () => console.log('Logout'),
                variant: 'danger',
                divider: true,
              },
            ]}
          />

          {/* Content Area */}
          <div
            style={{
              flex: 1,
              padding: '32px',
              background: '#fafafa',
              overflowY: 'auto',
            }}
          >
            <h1 style={{ marginTop: 0 }}>Welcome to Dashboard</h1>
            <p style={{ color: '#737373' }}>
              This is a complete admin panel layout with header, sidebar, and content area.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                marginTop: '24px',
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    border: '1px solid #e5e5e5',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  <h3 style={{ marginTop: 0 }}>Card {i}</h3>
                  <p style={{ color: '#737373', fontSize: '14px' }}>
                    Sample content for demonstration
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
};
