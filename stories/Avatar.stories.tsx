import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../src/components/Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
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
    size: 'small',
    fallback: 'SM',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    fallback: 'MD',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    fallback: 'LG',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
    fallback: 'XL',
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    fallback: 'SQ',
  },
};

export const Circle: Story = {
  args: {
    shape: 'circle',
    fallback: 'CR',
  },
};
