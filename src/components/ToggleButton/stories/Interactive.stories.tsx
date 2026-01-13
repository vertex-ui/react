import type { Meta, StoryObj } from '@storybook/react';
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
};
