"use client";

import { useState } from 'react';
import { SideMenu } from './SideMenu';

/**
 * Example: Basic Layout with Collapsible Sidebar
 * 
 * This example demonstrates a simple layout with:
 * - Collapsible sidebar
 * - Nested menu items
 * - Badges for notifications
 * - Icons and tooltips
 */
export const BasicLayoutExample = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      label: 'Dashboard',
      icon: <DashboardIcon />,
      active: true,
      onClick: () => console.log('Dashboard clicked'),
    },
    {
      label: 'Products',
      icon: <BoxIcon />,
      badge: '12',
      items: [
        { label: 'All Products', onClick: () => console.log('All Products') },
        { label: 'Categories', onClick: () => console.log('Categories') },
        { label: 'Inventory', onClick: () => console.log('Inventory') },
      ],
    },
    {
      label: 'Orders',
      icon: <ShoppingCartIcon />,
      badge: '3',
      onClick: () => console.log('Orders clicked'),
    },
    {
      label: 'Customers',
      icon: <UsersIcon />,
      onClick: () => console.log('Customers clicked'),
    },
    {
      label: 'Analytics',
      icon: <ChartIcon />,
      onClick: () => console.log('Analytics clicked'),
    },
    {
      label: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => console.log('Settings clicked'),
    },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <SideMenu
        items={menuItems}
        collapsed={collapsed}
        onCollapseToggle={setCollapsed}
        header={
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
            />
            {!collapsed && (
              <div>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>VTX Admin</h3>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>v2.0.0</p>
              </div>
            )}
          </div>
        }
        footer={
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
              }}
            >
              JD
            </div>
            {!collapsed && (
              <div>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>John Doe</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>admin@vtx.com</p>
              </div>
            )}
          </div>
        }
      />

      {/* Main Content */}
      <main style={{ flex: 1, padding: '20px', backgroundColor: '#f9fafb' }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>Dashboard</h1>

        {/* Page Content */}
        <div style={{ maxWidth: '1200px' }}>
          <p>
            This is a professional sidebar navigation component with collapsible state.
            Click the toggle button to expand/collapse the sidebar.
          </p>

          <div style={{ marginTop: '24px' }}>
            <h2>Features:</h2>
            <ul>
              <li>✅ Collapsible sidebar with smooth animations</li>
              <li>✅ Nested menu items support</li>
              <li>✅ Badges for notifications</li>
              <li>✅ Icons with tooltips when collapsed</li>
              <li>✅ Active state highlighting</li>
              <li>✅ Custom header and footer</li>
              <li>✅ Keyboard navigation support</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

/**
 * Example: With Links
 */
export const WithLinksExample = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { label: 'Home', icon: <HomeIcon />, active: true, href: '#home' },
    { label: 'Projects', icon: <FolderIcon />, badge: 5, href: '#projects' },
    { label: 'Team', icon: <UsersIcon />, href: '#team' },
    { label: 'Calendar', icon: <CalendarIcon />, href: '#calendar' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <SideMenu
        items={menuItems}
        collapsed={collapsed}
        onCollapseToggle={setCollapsed}
        header={<h2 style={{ margin: 0 }}>App</h2>}
        width={280}
        collapsedWidth={72}
      />

      <main style={{ flex: 1, padding: '20px', backgroundColor: '#f9fafb' }}>
        <h1>Content Area</h1>
        <p>Menu items are rendered as links with href attributes.</p>
      </main>
    </div>
  );
};

/**
 * Example: Simple Sidebar
 */
export const SimpleExample = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: <DashboardIcon />,
      active: true,
    },
    {
      label: 'Reports',
      icon: <FileIcon />,
      items: [
        { label: 'Sales Report', href: '#sales' },
        { label: 'Analytics', href: '#analytics' },
        { label: 'Export Data', href: '#export' },
      ],
    },
    {
      label: 'User Management',
      icon: <UsersIcon />,
      href: '#users',
    },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <SideMenu
        items={menuItems}
        header={<h2 style={{ margin: 0 }}>My App</h2>}
      />

      <main style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff' }}>
        <h1>Simple Sidebar Example</h1>
        <p>A basic sidebar without collapse functionality.</p>
      </main>
    </div>
  );
};

// Placeholder icon components (replace with your actual icons)
const DashboardIcon = () => <span>📊</span>;
const BoxIcon = () => <span>📦</span>;
const ShoppingCartIcon = () => <span>🛒</span>;
const UsersIcon = () => <span>👥</span>;
const ChartIcon = () => <span>📈</span>;
const SettingsIcon = () => <span>⚙️</span>;
const HomeIcon = () => <span>🏠</span>;
const FolderIcon = () => <span>📁</span>;
const CalendarIcon = () => <span>📅</span>;
const FileIcon = () => <span>📄</span>;
