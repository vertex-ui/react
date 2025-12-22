import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../../components/Breadcrumb';
import {
  HomeIcon,
  PackageIcon,
  SettingsIcon,
  ChevronRightIcon,
} from '../../icons/IconComponents';

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

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <HomeIcon size={16} /> },
      { label: 'Products', href: '/products', icon: <PackageIcon size={16} /> },
      { label: 'Settings', href: '/settings', icon: <SettingsIcon size={16} /> },
      { label: 'General', active: true },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    separator: '/',
    items: basicItems,
  },
};

export const CustomSeparatorIcon: Story = {
  args: {
    separator: '›',
    items: basicItems,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#6b7280' }}>Small</h4>
        <Breadcrumb size="sm" items={basicItems} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#6b7280' }}>Medium (Default)</h4>
        <Breadcrumb size="md" items={basicItems} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#6b7280' }}>Large</h4>
        <Breadcrumb size="lg" items={basicItems} />
      </div>
    </div>
  ),
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Dashboard', active: true },
    ],
  },
};

export const SingleLevel: Story = {
  args: {
    items: [
      { label: 'Home', active: true },
    ],
  },
};

export const DeepHierarchy: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Computers', href: '/products/electronics/computers' },
      { label: 'Laptops', href: '/products/electronics/computers/laptops' },
      { label: 'Gaming', href: '/products/electronics/computers/laptops/gaming' },
      { label: 'Product Details', active: true },
    ],
  },
};

export const WithMaxItems: Story = {
  args: {
    maxItems: 4,
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Computers', href: '/products/electronics/computers' },
      { label: 'Laptops', href: '/products/electronics/computers/laptops' },
      { label: 'Gaming', href: '/products/electronics/computers/laptops/gaming' },
      { label: 'Product Details', active: true },
    ],
  },
};

export const CustomLinkComponent: Story = {
  render: () => {
    // Mock router link component
    const MockRouterLink = ({ to, children, ...props }: any) => (
      <a href={to} {...props} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        {children} <small style={{ fontSize: '10px', opacity: 0.6 }}>(router)</small>
      </a>
    );

    return (
      <Breadcrumb
        linkComponent={MockRouterLink}
        items={[
          { label: 'Home', linkProps: { to: '/' } },
          { label: 'Dashboard', linkProps: { to: '/dashboard' } },
          { label: 'Settings', linkProps: { to: '/settings' } },
          { label: 'Profile', active: true },
        ]}
      />
    );
  },
};

export const IconsAndSeparator: Story = {
  args: {
    separator: <ChevronRightIcon size={14} />,
    items: [
      { label: 'Home', href: '/', icon: <HomeIcon size={16} /> },
      { label: 'Products', href: '/products', icon: <PackageIcon size={16} /> },
      { label: 'Settings', href: '/settings', icon: <SettingsIcon size={16} /> },
      { label: 'Profile', active: true },
    ],
  },
};

export const InCard: Story = {
  render: () => (
    <div
      style={{
        padding: '24px',
        background: 'white',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      <Breadcrumb
        items={[
          { label: 'Home', href: '/', icon: <HomeIcon size={16} /> },
          { label: 'Products', href: '/products' },
          { label: 'Electronics', href: '/products/electronics' },
          { label: 'Laptops', active: true },
        ]}
      />
      <div style={{ marginTop: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Laptops</h2>
        <p style={{ color: '#6b7280' }}>Browse our collection of high-performance laptops.</p>
      </div>
    </div>
  ),
};

export const MultipleExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>E-commerce</h3>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/', icon: <HomeIcon size={16} /> },
            { label: 'Electronics', href: '/electronics' },
            { label: 'Laptops', href: '/electronics/laptops' },
            { label: 'Gaming Laptops', active: true },
          ]}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>Admin Panel</h3>
        <Breadcrumb
          separator="›"
          items={[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Users', href: '/dashboard/users' },
            { label: 'Edit User', active: true },
          ]}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>Documentation</h3>
        <Breadcrumb
          size="sm"
          items={[
            { label: 'Docs', href: '/docs' },
            { label: 'Components', href: '/docs/components' },
            { label: 'Breadcrumb', active: true },
          ]}
        />
      </div>
    </div>
  ),
};
