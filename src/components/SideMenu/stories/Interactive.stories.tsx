import type { Meta, StoryObj } from '@storybook/react';
import { SideMenu, SideMenuProps } from '../SideMenu';
import { useState } from 'react';
import {
  HomeIcon,
  UserIcon,
  SettingsIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  BellIcon,
  InboxIcon,
  DocumentIcon,
} from '../../../icons/IconComponents';
import { Typography } from '../../Typography';
import { Avatar } from '../../Avatar';
import { Flex } from '../../Flex';

const meta = {
  title: 'Components/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Professional sidebar navigation for admin panels with support for nested menus, badges, icons, tooltips, and collapsible state.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Menu items configuration',
    },
    collapsed: {
      control: 'boolean',
      description: 'Whether the sidebar is collapsed',
    },
    width: {
      control: 'text',
      description: 'Sidebar width when expanded (default: 260px)',
    },
    collapsedWidth: {
      control: 'text',
      description: 'Sidebar width when collapsed (default: 80px)',
    },
  },
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample menu items
const sampleMenuItems = [
  {
    label: 'Dashboard',
    icon: <HomeIcon size={20} />,
    active: true,
  },
  {
    label: 'Analytics',
    icon: <ChartBarIcon size={20} />,
    badge: '5',
    items: [
      { label: 'Overview', href: '#overview' },
      { label: 'Reports', href: '#reports', badge: '3' },
      { label: 'Real-time', href: '#realtime' },
    ],
  },
  {
    label: 'E-Commerce',
    icon: <ShoppingCartIcon size={20} />,
    items: [
      { label: 'Products', href: '#products' },
      { label: 'Orders', href: '#orders', badge: 'New' },
      { label: 'Customers', href: '#customers' },
      { label: 'Inventory', href: '#inventory' },
    ],
  },
  {
    label: 'Documents',
    icon: <DocumentIcon size={20} />,
  },
  {
    label: 'Messages',
    icon: <InboxIcon size={20} />,
    badge: '12',
  },
  {
    label: 'Notifications',
    icon: <BellIcon size={20} />,
    badge: '99+',
  },
  {
    label: 'Team',
    icon: <UserIcon size={20} />,
    items: [
      { label: 'Members', href: '#members' },
      { label: 'Roles', href: '#roles' },
      { label: 'Permissions', href: '#permissions' },
    ],
  },
  {
    label: 'Settings',
    icon: <SettingsIcon size={20} />,
    items: [
      { label: 'General', href: '#general' },
      { label: 'Security', href: '#security' },
      { label: 'Billing', href: '#billing' },
      { label: 'Integrations', href: '#integrations' },
    ],
  },
];

// Logo component for header
const Logo = ({ collapsed }: { collapsed?: boolean }) => (
  <Flex align="center" gap={12}>
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
      }}
    >
      V
    </div>
    {!collapsed && (
      <Typography variant="h6" weight="bold" noMargin>
        Vertex UI
      </Typography>
    )}
  </Flex>
);

// User profile for footer
const UserProfile = ({ collapsed }: { collapsed?: boolean }) => (
  <Flex align="center" gap={12}>
    <Avatar src="https://i.pravatar.cc/150?img=3" alt="John Doe" size="md" />
    {!collapsed && (
      <div style={{ flex: 1, minWidth: 0 }}>
        <Typography variant="body2" weight="semibold" noMargin>
          John Doe
        </Typography>
        <Typography variant="caption" textColor="#6b7280" noMargin>
          john@example.com
        </Typography>
      </div>
    )}
  </Flex>
);

// Interactive wrapper component
const InteractiveSideMenu = (props: SideMenuProps) => {
  const [collapsed, setCollapsed] = useState(props.collapsed || false);

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f3f4f6' }}>
      <SideMenu
        {...props}
        collapsed={collapsed}
        onCollapseToggle={setCollapsed}
        header={<Logo collapsed={collapsed} />}
        footer={<UserProfile collapsed={collapsed} />}
      />
      <div style={{ flex: 1, padding: 32 }}>
        <Typography variant="h4" weight="bold">
          Main Content Area
        </Typography>
        <Typography variant="body1" textColor="#6b7280">
          Sidebar navigation with collapsible state and nested menus.
        </Typography>
      </div>
    </div>
  );
};

/**
 * Default sidebar
 */
export const Default: Story = {
  render: (args) => <InteractiveSideMenu {...args} items={sampleMenuItems} />,
  args: {
    items: sampleMenuItems,
    collapsed: false,
  },
};

/**
 * Collapsed sidebar state
 */

/**
 * With custom width
 */

/**
 * Simple menu without header/footer
 */

/**
 * With nested menus
 */

/**
 * With badges
 */

