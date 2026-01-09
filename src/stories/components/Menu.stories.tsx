"use client";

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicMenuItems = [
  {
    label: 'Profile',
    onClick: () => alert('Profile clicked'),
    icon: <span>👤</span>,
  },
  {
    label: 'Settings',
    onClick: () => alert('Settings clicked'),
    icon: <span>⚙️</span>,
  },
  {
    label: 'Help',
    onClick: () => alert('Help clicked'),
    icon: <span>❓</span>,
  },
  {
    label: 'Logout',
    onClick: () => alert('Logout clicked'),
    variant: 'danger' as const,
    icon: <span>🚪</span>,
    divider: true,
  },
];

const fileMenuItems = [
  {
    label: 'New File',
    onClick: () => alert('New File'),
    shortcut: 'Ctrl+N',
  },
  {
    label: 'Open File',
    onClick: () => alert('Open File'),
    shortcut: 'Ctrl+O',
  },
  {
    label: 'Save',
    onClick: () => alert('Save'),
    shortcut: 'Ctrl+S',
    divider: true,
  },
  {
    label: 'Export',
    items: [
      {
        label: 'Export as PDF',
        onClick: () => alert('Export as PDF'),
      },
      {
        label: 'Export as CSV',
        onClick: () => alert('Export as CSV'),
      },
      {
        label: 'Export as JSON',
        onClick: () => alert('Export as JSON'),
      },
    ],
  },
  {
    label: 'Print',
    onClick: () => alert('Print'),
    shortcut: 'Ctrl+P',
    divider: true,
  },
  {
    label: 'Exit',
    onClick: () => alert('Exit'),
    variant: 'danger' as const,
  },
];

export const Default: Story = {
  render: () => (
    <Menu items={basicMenuItems}>
      <Button>Open Menu</Button>
    </Menu>
  ),
};

export const WithSubmenus: Story = {
  render: () => (
    <Menu items={fileMenuItems}>
      <Button>File Menu</Button>
    </Menu>
  ),
};

export const HoverTrigger: Story = {
  render: () => (
    <Menu items={basicMenuItems}>
      <Button>Hover Me</Button>
    </Menu>
  ),
};

export const DifferentPlacements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Menu items={basicMenuItems}>
        <Button>Menu 1</Button>
      </Menu>
      <Menu items={basicMenuItems}>
        <Button>Menu 2</Button>
      </Menu>
      <Menu items={basicMenuItems}>
        <Button>Menu 3</Button>
      </Menu>
      <Menu items={basicMenuItems}>
        <Button>Menu 4</Button>
      </Menu>
    </div>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Menu
      items={[
        {
          label: 'Available Option',
          onClick: () => alert('Available'),
        },
        {
          label: 'Disabled Option',
          onClick: () => alert('This should not fire'),
          disabled: true,
        },
        {
          label: 'Another Available',
          onClick: () => alert('Another Available'),
        },
        {
          label: 'Another Disabled',
          onClick: () => alert('This should not fire either'),
          disabled: true,
        },
      ]}
    >
      <Button>Menu with Disabled Items</Button>
    </Menu>
  ),
};

export const MinimalVariant: Story = {
  render: () => (
    <Menu items={basicMenuItems}>
      <Button variant="ghost">Minimal Menu</Button>
    </Menu>
  ),
};

export const ActiveItems: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('profile');
    
    const menuItems = [
      {
        label: 'Profile',
        onClick: () => setActiveItem('profile'),
        active: activeItem === 'profile',
        icon: <span>👤</span>,
      },
      {
        label: 'Dashboard',
        onClick: () => setActiveItem('dashboard'),
        active: activeItem === 'dashboard',
        icon: <span>📊</span>,
      },
      {
        label: 'Settings',
        onClick: () => setActiveItem('settings'),
        active: activeItem === 'settings',
        icon: <span>⚙️</span>,
      },
    ];
    
    return (
      <Menu items={menuItems}>
        <Button>Navigation Menu</Button>
      </Menu>
    );
  },
};

export const LongMenu: Story = {
  render: () => {
    const longMenuItems = Array.from({ length: 15 }, (_, i) => ({
      label: `Menu Item ${i + 1}`,
      onClick: () => alert(`Item ${i + 1} clicked`),
      icon: <span>📄</span>,
    }));
    
    return (
      <Menu items={longMenuItems}>
        <Button>Long Menu</Button>
      </Menu>
    );
  },
};