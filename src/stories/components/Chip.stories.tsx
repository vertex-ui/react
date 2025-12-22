import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../../components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
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
      options: ['filled', 'outlined', 'light'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Chip',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    color: 'success',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    color: 'error',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    color: 'warning',
  },
};

export const Info: Story = {
  args: {
    label: 'Info',
    color: 'info',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
    color: 'primary',
  },
};

export const Light: Story = {
  args: {
    label: 'Light',
    variant: 'light',
    color: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    icon: <span>⭐</span>,
  },
};

export const WithAvatar: Story = {
  args: {
    label: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
  },
};

export const Deletable: Story = {
  args: {
    label: 'Deletable',
    onDelete: () => alert('Delete clicked'),
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable',
    onClick: () => alert('Chip clicked'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Filled" variant="filled" color="primary" />
      <Chip label="Outlined" variant="outlined" color="primary" />
      <Chip label="Light" variant="light" color="primary" />
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Success" color="success" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
    </div>
  ),
};