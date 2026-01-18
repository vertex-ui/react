import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonTheme } from '..';

const meta: Meta<typeof SkeletonTheme> = {
  title: 'Components/Skeleton/SkeletonTheme',
  component: SkeletonTheme,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: [
        'card',
        'product',
        'article',
        'blog-post',
        'profile',
        'comment',
        'list-item',
        'table-row',
        'form',
        'hero',
        'about-section',
        'feature-card',
        'testimonial',
        'pricing-card',
        'stats',
        'team-member',
        'gallery-item',
        'video-card',
        'order-card',
        'order-confirmation',
        'order-details',
        'product-grid',
        'content-block',
        'cart-list',
        'home-page',
        'checkout',
      ],
    },
    animation: {
      control: { type: 'radio' },
      options: ['wave', 'pulse', 'none'],
    },
    count: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    theme: 'card',
    animation: 'wave',
    count: 1,
  },
};

export const CartList: Story = {
  args: {
    theme: 'cart-list',
    count: 3,
  },
};

export const HomePage: Story = {
  args: {
    theme: 'home-page',
  },
};

export const Checkout: Story = {
  args: {
    theme: 'checkout',
  },
};
