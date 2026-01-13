import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { Link } from '..';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'small'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral', 'inherit'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Click here to learn more',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'Click here to learn more' });
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute('href', '#');
  },
};
