import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem } from '../src/components/Menu';
import { useState } from 'react';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

// Icons for examples
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const LogoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

const HelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * Default vertical menu with items array
 */
export const Default: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('profile');

    return (
      <Menu
        items={[
          {
            label: 'Profile',
            icon: <UserIcon />,
            active: activeItem === 'profile',
            onClick: () => setActiveItem('profile'),
          },
          {
            label: 'Settings',
            icon: <SettingsIcon />,
            active: activeItem === 'settings',
            onClick: () => setActiveItem('settings'),
          },
          {
            label: 'Notifications',
            icon: <BellIcon />,
            active: activeItem === 'notifications',
            onClick: () => setActiveItem('notifications'),
          },
          {
            label: 'Help',
            icon: <HelpIcon />,
            active: activeItem === 'help',
            onClick: () => setActiveItem('help'),
          },
        ]}
      />
    );
  },
};

/**
 * Horizontal navigation menu
 */
export const Horizontal: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('home');

    return (
      <Menu
        orientation="horizontal"
        responsive={false}
        items={[
          {
            label: 'Home',
            active: activeItem === 'home',
            onClick: () => setActiveItem('home'),
          },
          {
            label: 'Products',
            active: activeItem === 'products',
            onClick: () => setActiveItem('products'),
          },
          {
            label: 'About',
            active: activeItem === 'about',
            onClick: () => setActiveItem('about'),
          },
          {
            label: 'Contact',
            active: activeItem === 'contact',
            onClick: () => setActiveItem('contact'),
          },
        ]}
      />
    );
  },
};

/**
 * Responsive menu that converts to hamburger on mobile
 */
export const Responsive: Story = {
  render: () => (
    <div style={{ maxWidth: '768px' }}>
      <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--vtx-text-secondary)' }}>
        Resize your browser to mobile width to see the hamburger menu
      </p>
      <Menu
        responsive
        items={[
          { label: 'Home', icon: <HomeIcon />, onClick: () => console.log('Home') },
          { label: 'Profile', icon: <UserIcon />, onClick: () => console.log('Profile') },
          { label: 'Settings', icon: <SettingsIcon />, onClick: () => console.log('Settings') },
          { label: 'Help', icon: <HelpIcon />, onClick: () => console.log('Help') },
        ]}
      />
    </div>
  ),
};

/**
 * Menu with custom children (MenuItem components)
 */
export const WithChildren: Story = {
  render: () => (
    <Menu>
      <MenuItem label="Dashboard" icon={<HomeIcon />} active />
      <MenuItem label="Profile" icon={<UserIcon />} />
      <MenuItem label="Settings" icon={<SettingsIcon />} />
      <MenuItem label="Logout" icon={<LogoutIcon />} variant="danger" />
    </Menu>
  ),
};

/**
 * Menu with keyboard shortcuts
 */
export const WithShortcuts: Story = {
  render: () => (
    <Menu
      items={[
        {
          label: 'New File',
          shortcut: 'Ctrl+N',
          onClick: () => console.log('New File'),
        },
        {
          label: 'Open',
          shortcut: 'Ctrl+O',
          onClick: () => console.log('Open'),
        },
        {
          label: 'Save',
          shortcut: 'Ctrl+S',
          onClick: () => console.log('Save'),
        },
        {
          label: 'Save As',
          shortcut: 'Ctrl+Shift+S',
          onClick: () => console.log('Save As'),
        },
      ]}
    />
  ),
};

/**
 * Menu with dividers
 */
export const WithDividers: Story = {
  render: () => (
    <Menu
      items={[
        { label: 'Profile', icon: <UserIcon />, onClick: () => console.log('Profile') },
        {
          label: 'Settings',
          icon: <SettingsIcon />,
          onClick: () => console.log('Settings'),
          divider: true,
        },
        { label: 'Help', icon: <HelpIcon />, onClick: () => console.log('Help') },
        { label: 'Documentation', onClick: () => console.log('Documentation'), divider: true },
        {
          label: 'Logout',
          icon: <LogoutIcon />,
          onClick: () => console.log('Logout'),
          variant: 'danger',
        },
      ]}
    />
  ),
};

/**
 * Menu with right icons (submenu indicators)
 */
export const WithRightIcons: Story = {
  render: () => (
    <Menu
      items={[
        {
          label: 'Account',
          icon: <UserIcon />,
          rightIcon: <ChevronRightIcon />,
          onClick: () => console.log('Account submenu'),
        },
        {
          label: 'Preferences',
          icon: <SettingsIcon />,
          rightIcon: <ChevronRightIcon />,
          onClick: () => console.log('Preferences submenu'),
        },
        {
          label: 'Notifications',
          icon: <BellIcon />,
          rightIcon: <ChevronRightIcon />,
          onClick: () => console.log('Notifications submenu'),
        },
      ]}
    />
  ),
};

/**
 * Menu with disabled items
 */
export const WithDisabledItems: Story = {
  render: () => (
    <Menu
      items={[
        { label: 'Available Action', icon: <UserIcon />, onClick: () => console.log('Available') },
        {
          label: 'Disabled Action',
          icon: <SettingsIcon />,
          onClick: () => console.log('Disabled'),
          disabled: true,
        },
        { label: 'Another Available', icon: <BellIcon />, onClick: () => console.log('Available') },
        {
          label: 'Also Disabled',
          icon: <HelpIcon />,
          onClick: () => console.log('Disabled'),
          disabled: true,
        },
      ]}
    />
  ),
};

/**
 * Menu with danger actions
 */
export const WithDangerActions: Story = {
  render: () => (
    <Menu
      items={[
        { label: 'Edit', icon: <SettingsIcon />, onClick: () => console.log('Edit') },
        { label: 'Duplicate', onClick: () => console.log('Duplicate') },
        { label: 'Archive', onClick: () => console.log('Archive'), divider: true },
        {
          label: 'Delete',
          icon: <LogoutIcon />,
          onClick: () => console.log('Delete'),
          variant: 'danger',
        },
      ]}
    />
  ),
};

/**
 * Custom width menu
 */
export const CustomWidth: Story = {
  render: () => (
    <Menu
      width={300}
      items={[
        {
          label: 'This is a wider menu item',
          icon: <HomeIcon />,
          onClick: () => console.log('Item 1'),
        },
        {
          label: 'With more space for content',
          icon: <UserIcon />,
          onClick: () => console.log('Item 2'),
        },
        {
          label: 'Custom width: 300px',
          icon: <SettingsIcon />,
          onClick: () => console.log('Item 3'),
        },
      ]}
    />
  ),
};

/**
 * Sidebar navigation example
 */
export const SidebarNavigation: Story = {
  render: () => {
    const [activePage, setActivePage] = useState('dashboard');

    return (
      <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
        <Menu
          width={250}
          responsive={false}
          items={[
            {
              label: 'Dashboard',
              icon: <HomeIcon />,
              active: activePage === 'dashboard',
              onClick: () => setActivePage('dashboard'),
            },
            {
              label: 'Users',
              icon: <UserIcon />,
              active: activePage === 'users',
              onClick: () => setActivePage('users'),
            },
            {
              label: 'Settings',
              icon: <SettingsIcon />,
              active: activePage === 'settings',
              onClick: () => setActivePage('settings'),
              divider: true,
            },
            {
              label: 'Notifications',
              icon: <BellIcon />,
              active: activePage === 'notifications',
              onClick: () => setActivePage('notifications'),
            },
            {
              label: 'Help & Support',
              icon: <HelpIcon />,
              active: activePage === 'help',
              onClick: () => setActivePage('help'),
            },
          ]}
        />
        <div
          style={{
            flex: 1,
            padding: '24px',
            background: 'var(--vtx-background-secondary)',
            borderRadius: '8px',
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
          </h2>
          <p>Content for {activePage} page goes here...</p>
        </div>
      </div>
    );
  },
};

/**
 * Context menu example
 */
export const ContextMenu: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--vtx-text-secondary)' }}>
        Example of a context menu (right-click menu style)
      </p>
      <Menu
        width={220}
        responsive={false}
        items={[
          { label: 'Open', shortcut: 'Enter', onClick: () => console.log('Open') },
          {
            label: 'Open in New Tab',
            shortcut: 'Ctrl+Enter',
            onClick: () => console.log('Open in new tab'),
          },
          { label: 'Copy', shortcut: 'Ctrl+C', onClick: () => console.log('Copy'), divider: true },
          { label: 'Rename', shortcut: 'F2', onClick: () => console.log('Rename') },
          {
            label: 'Move to',
            rightIcon: <ChevronRightIcon />,
            onClick: () => console.log('Move to'),
            divider: true,
          },
          {
            label: 'Delete',
            shortcut: 'Del',
            onClick: () => console.log('Delete'),
            variant: 'danger',
          },
        ]}
      />
    </div>
  ),
};

/**
 * Multi-level menu (nested submenus) - Admin Sidebar
 */
export const MultiLevel: Story = {
  render: () => {
    const [activePage, setActivePage] = useState('dashboard');

    return (
      <div>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--vtx-text-secondary)' }}>
          Click items with chevron icons to expand/collapse submenus
        </p>
        <Menu
          width={280}
          responsive={false}
          items={[
            {
              label: 'Dashboard',
              icon: <HomeIcon />,
              active: activePage === 'dashboard',
              onClick: () => setActivePage('dashboard'),
            },
            {
              label: 'Account',
              icon: <UserIcon />,
              items: [
                {
                  label: 'Profile',
                  active: activePage === 'profile',
                  onClick: () => setActivePage('profile'),
                },
                {
                  label: 'Billing',
                  active: activePage === 'billing',
                  onClick: () => setActivePage('billing'),
                },
                {
                  label: 'Security',
                  items: [
                    {
                      label: 'Password',
                      active: activePage === 'password',
                      onClick: () => setActivePage('password'),
                    },
                    {
                      label: '2FA',
                      active: activePage === '2fa',
                      onClick: () => setActivePage('2fa'),
                    },
                    {
                      label: 'Sessions',
                      active: activePage === 'sessions',
                      onClick: () => setActivePage('sessions'),
                    },
                  ],
                },
                {
                  label: 'Notifications',
                  active: activePage === 'notifications',
                  onClick: () => setActivePage('notifications'),
                },
              ],
            },
            {
              label: 'Settings',
              icon: <SettingsIcon />,
              items: [
                {
                  label: 'General',
                  active: activePage === 'general',
                  onClick: () => setActivePage('general'),
                },
                {
                  label: 'Appearance',
                  items: [
                    {
                      label: 'Theme',
                      active: activePage === 'theme',
                      onClick: () => setActivePage('theme'),
                    },
                    {
                      label: 'Font Size',
                      active: activePage === 'fontsize',
                      onClick: () => setActivePage('fontsize'),
                    },
                    {
                      label: 'Language',
                      active: activePage === 'language',
                      onClick: () => setActivePage('language'),
                    },
                  ],
                },
                {
                  label: 'Privacy',
                  items: [
                    {
                      label: 'Data Sharing',
                      active: activePage === 'datasharing',
                      onClick: () => setActivePage('datasharing'),
                    },
                    {
                      label: 'Cookies',
                      active: activePage === 'cookies',
                      onClick: () => setActivePage('cookies'),
                    },
                  ],
                },
                {
                  label: 'Advanced',
                  active: activePage === 'advanced',
                  onClick: () => setActivePage('advanced'),
                },
              ],
            },
            {
              label: 'Help',
              icon: <HelpIcon />,
              active: activePage === 'help',
              onClick: () => setActivePage('help'),
              divider: true,
            },
            {
              label: 'Logout',
              icon: <LogoutIcon />,
              onClick: () => console.log('Logout'),
              variant: 'danger',
            },
          ]}
        />
      </div>
    );
  },
};

/**
 * Deep nested menu (3+ levels)
 */
export const DeepNested: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--vtx-text-secondary)' }}>
        Example with deeply nested menus (up to 4 levels)
      </p>
      <Menu
        width={220}
        responsive={false}
        items={[
          { label: 'File', onClick: () => console.log('File') },
          {
            label: 'Edit',
            items: [
              { label: 'Undo', shortcut: 'Ctrl+Z', onClick: () => console.log('Undo') },
              {
                label: 'Redo',
                shortcut: 'Ctrl+Y',
                onClick: () => console.log('Redo'),
                divider: true,
              },
              { label: 'Cut', shortcut: 'Ctrl+X', onClick: () => console.log('Cut') },
              { label: 'Copy', shortcut: 'Ctrl+C', onClick: () => console.log('Copy') },
              { label: 'Paste', shortcut: 'Ctrl+V', onClick: () => console.log('Paste') },
              {
                label: 'Find',
                items: [
                  { label: 'Find...', shortcut: 'Ctrl+F', onClick: () => console.log('Find') },
                  { label: 'Find Next', shortcut: 'F3', onClick: () => console.log('Find Next') },
                  {
                    label: 'Replace...',
                    shortcut: 'Ctrl+H',
                    onClick: () => console.log('Replace'),
                  },
                  {
                    label: 'Advanced',
                    items: [
                      { label: 'Regex Search', onClick: () => console.log('Regex Search') },
                      { label: 'Case Sensitive', onClick: () => console.log('Case Sensitive') },
                      {
                        label: 'More Options',
                        items: [
                          { label: 'Whole Word', onClick: () => console.log('Whole Word') },
                          { label: 'Wrap Around', onClick: () => console.log('Wrap Around') },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          { label: 'View', onClick: () => console.log('View') },
        ]}
      />
    </div>
  ),
};

/**
 * Admin Panel Sidebar - Full Example
 */
export const AdminSidebar: Story = {
  render: () => {
    const [activePage, setActivePage] = useState('overview');

    return (
      <div
        style={{
          display: 'flex',
          gap: '24px',
          minHeight: '600px',
          background: 'var(--vtx-background-secondary)',
          padding: '24px',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            width: '280px',
            background: 'var(--vtx-background-primary)',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: 'var(--vtx-shadow-sm)',
          }}
        >
          <div style={{ marginBottom: '24px', padding: '0 8px' }}>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 600 }}>Admin Panel</h3>
            <p style={{ margin: 0, fontSize: '12px', color: 'var(--vtx-text-secondary)' }}>
              Manage your application
            </p>
          </div>
          <Menu
            responsive={false}
            items={[
              {
                label: 'Overview',
                icon: <HomeIcon />,
                active: activePage === 'overview',
                onClick: () => setActivePage('overview'),
              },
              {
                label: 'Users',
                icon: <UserIcon />,
                items: [
                  {
                    label: 'All Users',
                    active: activePage === 'users-all',
                    onClick: () => setActivePage('users-all'),
                  },
                  {
                    label: 'Active Users',
                    active: activePage === 'users-active',
                    onClick: () => setActivePage('users-active'),
                  },
                  {
                    label: 'Roles & Permissions',
                    active: activePage === 'users-roles',
                    onClick: () => setActivePage('users-roles'),
                  },
                  {
                    label: 'User Groups',
                    active: activePage === 'users-groups',
                    onClick: () => setActivePage('users-groups'),
                  },
                ],
              },
              {
                label: 'Content',
                icon: <SettingsIcon />,
                items: [
                  {
                    label: 'Posts',
                    active: activePage === 'content-posts',
                    onClick: () => setActivePage('content-posts'),
                  },
                  {
                    label: 'Pages',
                    active: activePage === 'content-pages',
                    onClick: () => setActivePage('content-pages'),
                  },
                  {
                    label: 'Media',
                    items: [
                      {
                        label: 'Images',
                        active: activePage === 'media-images',
                        onClick: () => setActivePage('media-images'),
                      },
                      {
                        label: 'Videos',
                        active: activePage === 'media-videos',
                        onClick: () => setActivePage('media-videos'),
                      },
                      {
                        label: 'Documents',
                        active: activePage === 'media-docs',
                        onClick: () => setActivePage('media-docs'),
                      },
                    ],
                  },
                  {
                    label: 'Categories',
                    active: activePage === 'content-categories',
                    onClick: () => setActivePage('content-categories'),
                  },
                ],
              },
              {
                label: 'Analytics',
                icon: <BellIcon />,
                items: [
                  {
                    label: 'Reports',
                    active: activePage === 'analytics-reports',
                    onClick: () => setActivePage('analytics-reports'),
                  },
                  {
                    label: 'Traffic',
                    active: activePage === 'analytics-traffic',
                    onClick: () => setActivePage('analytics-traffic'),
                  },
                  {
                    label: 'Conversions',
                    active: activePage === 'analytics-conversions',
                    onClick: () => setActivePage('analytics-conversions'),
                  },
                ],
              },
              {
                label: 'Settings',
                icon: <SettingsIcon />,
                items: [
                  {
                    label: 'General',
                    active: activePage === 'settings-general',
                    onClick: () => setActivePage('settings-general'),
                  },
                  {
                    label: 'Security',
                    active: activePage === 'settings-security',
                    onClick: () => setActivePage('settings-security'),
                  },
                  {
                    label: 'Integrations',
                    active: activePage === 'settings-integrations',
                    onClick: () => setActivePage('settings-integrations'),
                  },
                ],
              },
              {
                label: 'Help & Support',
                icon: <HelpIcon />,
                active: activePage === 'help',
                onClick: () => setActivePage('help'),
                divider: true,
              },
              {
                label: 'Logout',
                icon: <LogoutIcon />,
                onClick: () => console.log('Logout'),
                variant: 'danger',
              },
            ]}
          />
        </div>
        <div
          style={{
            flex: 1,
            background: 'var(--vtx-background-primary)',
            borderRadius: '8px',
            padding: '32px',
            boxShadow: 'var(--vtx-shadow-sm)',
          }}
        >
          <h2 style={{ marginTop: 0, textTransform: 'capitalize' }}>
            {activePage.replace('-', ' > ')}
          </h2>
          <p style={{ color: 'var(--vtx-text-secondary)' }}>
            Content for the selected page goes here. Click different menu items to see the active
            state update.
          </p>
        </div>
      </div>
    );
  },
};

/**
 * File explorer context menu with nested folders
 */
export const FileExplorer: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--vtx-text-secondary)' }}>
        Simulated file explorer right-click menu
      </p>
      <Menu
        width={240}
        responsive={false}
        items={[
          { label: 'Open', onClick: () => console.log('Open') },
          { label: 'Open with...', onClick: () => console.log('Open with'), divider: true },
          { label: 'Cut', shortcut: 'Ctrl+X', onClick: () => console.log('Cut') },
          { label: 'Copy', shortcut: 'Ctrl+C', onClick: () => console.log('Copy') },
          {
            label: 'Paste',
            shortcut: 'Ctrl+V',
            onClick: () => console.log('Paste'),
            divider: true,
          },
          {
            label: 'Copy to',
            items: [
              { label: 'Documents', onClick: () => console.log('Documents') },
              { label: 'Desktop', onClick: () => console.log('Desktop') },
              { label: 'Downloads', onClick: () => console.log('Downloads') },
              {
                label: 'Cloud Storage',
                items: [
                  { label: 'Google Drive', onClick: () => console.log('Google Drive') },
                  { label: 'Dropbox', onClick: () => console.log('Dropbox') },
                  { label: 'OneDrive', onClick: () => console.log('OneDrive') },
                ],
              },
              { label: 'Choose location...', onClick: () => console.log('Choose location') },
            ],
          },
          {
            label: 'Move to',
            items: [
              { label: 'Documents', onClick: () => console.log('Documents') },
              { label: 'Desktop', onClick: () => console.log('Desktop') },
              { label: 'Downloads', onClick: () => console.log('Downloads') },
              { label: 'Choose location...', onClick: () => console.log('Choose location') },
            ],
          },
          { label: 'Rename', shortcut: 'F2', onClick: () => console.log('Rename'), divider: true },
          {
            label: 'Send to',
            items: [
              { label: 'Email', onClick: () => console.log('Email') },
              { label: 'Compressed folder', onClick: () => console.log('Compressed folder') },
              { label: 'Bluetooth device', onClick: () => console.log('Bluetooth device') },
            ],
          },
          { label: 'Properties', onClick: () => console.log('Properties'), divider: true },
          {
            label: 'Delete',
            shortcut: 'Del',
            onClick: () => console.log('Delete'),
            variant: 'danger',
          },
        ]}
      />
    </div>
  ),
};
