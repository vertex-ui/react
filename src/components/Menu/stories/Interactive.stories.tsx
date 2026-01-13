import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '..';
import { Button } from '../../Button';

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



export const Default: Story = {
  render: () => (
    <Menu items={basicMenuItems}>
      <Button>Open Menu</Button>
    </Menu>
  ),
};


