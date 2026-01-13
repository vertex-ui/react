import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, fn } from '@storybook/test';
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
    onClick: fn(),
    icon: <span>👤</span>,
  },
  {
    label: 'Settings',
    onClick: fn(),
    icon: <span>⚙️</span>,
  },
  {
    label: 'Help',
    onClick: fn(),
    icon: <span>❓</span>,
  },
  {
    label: 'Logout',
    onClick: fn(),
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Open Menu' });
    await expect(button).toBeInTheDocument();

    // Open the menu
    await userEvent.click(button);

    // Menu usually opens in a Portal (document.body)
    const body = within(document.body);

    const profileItem = await body.findByText('Profile');
    await expect(profileItem).toBeVisible();
    await expect(body.getByText('Settings')).toBeVisible();
    await expect(body.getByText('Logout')).toBeVisible();

    // Test click interaction
    await userEvent.click(profileItem);
    await expect(basicMenuItems[0].onClick).toHaveBeenCalled();
  },
};
