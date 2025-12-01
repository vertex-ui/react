import type { Meta, StoryObj } from '@storybook/react';
import { SideMenu } from '../src/components/SideMenu';
import { useState } from 'react';

const meta: Meta<typeof SideMenu> = {
  title: 'Components/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SideMenu>;

// Icons for examples
const DashboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect
      x="3"
      y="3"
      width="7"
      height="7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="14"
      y="3"
      width="7"
      height="7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="14"
      y="14"
      width="7"
      height="7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="3"
      y="14"
      width="7"
      height="7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProductIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M20 7h-9m9 0v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7m16 0-2-4H6L4 7m7 10v-4m0 4h2m-2 0H9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m22 0v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OrdersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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

const AnalyticsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M18 20V10M12 20V4M6 20v-6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Basic: Story = {
  args: {
    items: [
      {
        label: 'Dashboard',
        icon: <DashboardIcon />,
        active: true,
        onClick: () => console.log('Dashboard clicked'),
      },
      {
        label: 'Products',
        icon: <ProductIcon />,
        onClick: () => console.log('Products clicked'),
      },
      {
        label: 'Orders',
        icon: <OrdersIcon />,
        badge: 5,
        onClick: () => console.log('Orders clicked'),
      },
      {
        label: 'Users',
        icon: <UsersIcon />,
        onClick: () => console.log('Users clicked'),
      },
      {
        label: 'Settings',
        icon: <SettingsIcon />,
        onClick: () => console.log('Settings clicked'),
      },
    ],
  },
};

export const WithSubmenu: Story = {
  args: {
    items: [
      {
        label: 'Dashboard',
        icon: <DashboardIcon />,
        active: true,
        onClick: () => console.log('Dashboard clicked'),
      },
      {
        label: 'Products',
        icon: <ProductIcon />,
        items: [
          { label: 'All Products', onClick: () => console.log('All Products') },
          { label: 'Categories', onClick: () => console.log('Categories') },
          { label: 'Inventory', onClick: () => console.log('Inventory') },
          { label: 'Attributes', onClick: () => console.log('Attributes') },
        ],
      },
      {
        label: 'Orders',
        icon: <OrdersIcon />,
        badge: 12,
        items: [
          { label: 'All Orders', onClick: () => console.log('All Orders') },
          { label: 'Pending', badge: 5, onClick: () => console.log('Pending') },
          { label: 'Completed', onClick: () => console.log('Completed') },
          { label: 'Cancelled', onClick: () => console.log('Cancelled') },
        ],
      },
      {
        label: 'Users',
        icon: <UsersIcon />,
        items: [
          { label: 'Customers', onClick: () => console.log('Customers') },
          { label: 'Admins', onClick: () => console.log('Admins') },
          { label: 'Roles', onClick: () => console.log('Roles') },
        ],
      },
      {
        label: 'Analytics',
        icon: <AnalyticsIcon />,
        onClick: () => console.log('Analytics clicked'),
      },
      {
        label: 'Settings',
        icon: <SettingsIcon />,
        onClick: () => console.log('Settings clicked'),
      },
    ],
  },
};

export const Collapsible: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <SideMenu
        collapsed={collapsed}
        onCollapseToggle={setCollapsed}
        items={[
          {
            label: 'Dashboard',
            icon: <DashboardIcon />,
            active: true,
            onClick: () => console.log('Dashboard'),
          },
          {
            label: 'Products',
            icon: <ProductIcon />,
            items: [
              { label: 'All Products', onClick: () => console.log('All Products') },
              { label: 'Categories', onClick: () => console.log('Categories') },
            ],
          },
          {
            label: 'Orders',
            icon: <OrdersIcon />,
            badge: 5,
            onClick: () => console.log('Orders'),
          },
          {
            label: 'Users',
            icon: <UsersIcon />,
            onClick: () => console.log('Users'),
          },
          {
            label: 'Settings',
            icon: <SettingsIcon />,
            onClick: () => console.log('Settings'),
          },
        ]}
      />
    );
  },
};

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

export const WithHeaderAndFooter: Story = {
  args: {
    header: (
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
            fontSize: '18px',
          }}
        >
          V
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '14px' }}>Vertex UI</div>
          <div style={{ fontSize: '12px', color: '#737373' }}>Admin Panel</div>
        </div>
      </div>
    ),
    footer: (
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold',
            flexShrink: 0,
          }}
        >
          JD
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: '13px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            John Doe
          </div>
          <div
            style={{
              fontSize: '11px',
              color: '#737373',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            john@example.com
          </div>
        </div>
        <button
          onClick={() => console.log('Logout clicked')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            padding: 0,
            border: 'none',
            borderRadius: '6px',
            background: 'transparent',
            color: '#dc2626',
            cursor: 'pointer',
            transition: 'all 0.15s',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#fef2f2';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
          title="Logout"
        >
          <LogoutIcon />
        </button>
      </div>
    ),
    items: [
      { label: 'Dashboard', icon: <DashboardIcon />, active: true },
      { label: 'Products', icon: <ProductIcon /> },
      { label: 'Orders', icon: <OrdersIcon />, badge: 5 },
      { label: 'Users', icon: <UsersIcon /> },
      { label: 'Settings', icon: <SettingsIcon /> },
    ],
  },
};

export const FullLayout: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');

    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
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
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: '13px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    John Doe
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#737373',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Admin
                  </div>
                </div>
                <button
                  onClick={() => console.log('Logout')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    padding: 0,
                    border: 'none',
                    borderRadius: '6px',
                    background: 'transparent',
                    color: '#dc2626',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#fef2f2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                  title="Logout"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                onClick={() => console.log('Logout')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  margin: '0 auto',
                  padding: 0,
                  border: 'none',
                  borderRadius: '50%',
                  background: '#3b82f6',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                title="John Doe - Click to logout"
              >
                JD
              </button>
            )
          }
          items={[
            {
              label: 'Dashboard',
              icon: <DashboardIcon />,
              active: activeItem === 'dashboard',
              onClick: () => setActiveItem('dashboard'),
            },
            {
              label: 'Products',
              icon: <ProductIcon />,
              active: activeItem === 'products',
              items: [
                {
                  label: 'All Products',
                  active: activeItem === 'all-products',
                  onClick: () => setActiveItem('all-products'),
                },
                {
                  label: 'Categories',
                  active: activeItem === 'categories',
                  onClick: () => setActiveItem('categories'),
                },
                {
                  label: 'Inventory',
                  active: activeItem === 'inventory',
                  onClick: () => setActiveItem('inventory'),
                },
              ],
            },
            {
              label: 'Orders',
              icon: <OrdersIcon />,
              badge: 12,
              active: activeItem === 'orders',
              items: [
                {
                  label: 'All Orders',
                  active: activeItem === 'all-orders',
                  onClick: () => setActiveItem('all-orders'),
                },
                {
                  label: 'Pending',
                  badge: 5,
                  active: activeItem === 'pending',
                  onClick: () => setActiveItem('pending'),
                },
                {
                  label: 'Completed',
                  active: activeItem === 'completed',
                  onClick: () => setActiveItem('completed'),
                },
              ],
            },
            {
              label: 'Users',
              icon: <UsersIcon />,
              active: activeItem === 'users',
              onClick: () => setActiveItem('users'),
            },
            {
              label: 'Analytics',
              icon: <AnalyticsIcon />,
              active: activeItem === 'analytics',
              onClick: () => setActiveItem('analytics'),
            },
            {
              label: 'Settings',
              icon: <SettingsIcon />,
              active: activeItem === 'settings',
              onClick: () => setActiveItem('settings'),
            },
          ]}
        />

        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            padding: '32px',
            background: '#fafafa',
            overflowY: 'auto',
          }}
        >
          <h1 style={{ marginTop: 0 }}>
            {activeItem.charAt(0).toUpperCase() + activeItem.slice(1).replace('-', ' ')}
          </h1>
          <p style={{ color: '#737373' }}>
            This is the main content area. The sidebar navigation helps users navigate between
            different sections.
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
    );
  },
};
