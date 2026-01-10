import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToggleButton } from '../../components/ToggleButton';
import { FiSun, FiMoon, FiWifi, FiWifiOff } from 'react-icons/fi';

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

export const Checked: Story = {
  args: {
    label: 'Checked toggle',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked toggle',
    disabled: true,
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Toggle with helper text',
    helperText: 'This setting will apply immediately.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Toggle with error',
    error: true,
    helperText: 'Configuration sync failed.',
  },
};

export const LabelPlacement: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <ToggleButton label="Label Start" labelPlacement="start" />
      <ToggleButton label="Label End" labelPlacement="end" />
      <ToggleButton label="Label Top" labelPlacement="top" />
      <ToggleButton label="Label Bottom" labelPlacement="bottom" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ToggleButton size="sm" label="Small toggle" />
      <ToggleButton size="md" label="Medium toggle" />
      <ToggleButton size="lg" label="Large toggle" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ToggleButton variant="primary" label="Primary" defaultChecked />
      <ToggleButton variant="secondary" label="Secondary" defaultChecked />
      <ToggleButton variant="success" label="Success" defaultChecked />
      <ToggleButton variant="warning" label="Warning" defaultChecked />
      <ToggleButton variant="error" label="Error" defaultChecked />
      <ToggleButton variant="info" label="Info" defaultChecked />
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    label: 'Dark Mode',
    icon: <FiSun />,
    checkedIcon: <FiMoon />,
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
