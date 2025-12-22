import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'John Doe',
  },
};

export const WithFallback: Story = {
  args: {
    fallback: 'JD',
    alt: 'John Doe',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    alt: 'Jane Smith',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    alt: 'Mike Johnson',
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    alt: 'Sarah Wilson',
  },
};

export const BrokenImage: Story = {
  args: {
    src: 'https://broken-image-url.jpg',
    fallback: 'BI',
    alt: 'Broken Image',
  },
};

export const LongFallbackText: Story = {
  args: {
    fallback: 'ABCD',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
    </div>
  ),
};