import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { Avatar } from '..';

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const img = canvas.getByRole('img');
    await expect(img).toBeInTheDocument();
    await expect(img).toHaveAttribute('alt', 'John Doe');
  },
};
