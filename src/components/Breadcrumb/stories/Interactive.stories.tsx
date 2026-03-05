import type { Meta, StoryObj } from '@storybook/react';
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
};

export const Small: Story = {
  args: {
    items: basicItems,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    items: basicItems,
    size: 'lg',
  },
};

export const WithMaxItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Computers', href: '/products/electronics/computers' },
      { label: 'Laptops', active: true },
    ],
    maxItems: 3,
  },
};

export const CustomSeparator: Story = {
  args: {
    items: basicItems,
    separator: '>',
  },
};
