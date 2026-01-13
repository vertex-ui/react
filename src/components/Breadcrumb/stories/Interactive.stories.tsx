import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { Breadcrumb } from '..';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops', active: true },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Home')).toBeInTheDocument();
    await expect(canvas.getByText('Products')).toBeInTheDocument();
    await expect(canvas.getByText('Electronics')).toBeInTheDocument();
    await expect(canvas.getByText('Laptops')).toBeInTheDocument();
  },
};
