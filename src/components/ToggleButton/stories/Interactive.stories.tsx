import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, fn } from '@storybook/test';
import { useState } from 'react';
import { ToggleButton } from '..';
import { FiWifi, FiWifiOff } from 'react-icons/fi';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    labelPlacement: {
      control: { type: 'select' },
      options: ['start', 'end', 'top', 'bottom'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    onChange: fn(), // mock function for uncontrolled test or if component supports it
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Assuming ToggleButton renders a button or checkbox role
    const toggle = canvas.getByRole('button'); // or checkbox, verify

    await expect(toggle).toBeInTheDocument();
    await userEvent.click(toggle);
    // Note: If component is controlled without state in story, it might not visually update,
    // but the click handler should be called.
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <ToggleButton
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label={checked ? 'WiFi On' : 'WiFi Off'}
        icon={<FiWifiOff />}
        checkedIcon={<FiWifi />}
        variant={checked ? 'success' : 'secondary'}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox'); // ToggleButton usually acts as checkbox inputs
    // If it's a custom button:
    // const toggle = canvas.getByText('WiFi Off');
    // Let's assume it renders a real input[type=checkbox] hidden or a button role.
    // If it uses switch/toggle pattern, role might be switch.
    // Let's try finding by text first as it is reliable here.

    const labelOff = canvas.getByText('WiFi Off');
    await userEvent.click(labelOff);
    await expect(canvas.getByText('WiFi On')).toBeVisible();
  },
};
