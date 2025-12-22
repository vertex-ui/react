import type { Meta, StoryObj } from '@storybook/react';
import InfoListCard from '../../widgets/InfoListCard/InfoListCard';
import { Flex } from '../../components/Flex';

const meta: Meta<typeof InfoListCard> = {
  title: 'Widgets/InfoListCard',
  component: InfoListCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'InfoListCard widget for displaying key-value pairs in a card. Fully responsive with automatic text wrapping for long content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['outlined', 'elevated', 'flat'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InfoListCard>;

export const PaymentInformation: Story = {
  args: {
    heading: 'Payment Information',
    items: [
      { label: 'Payment Method', value: 'VISA', valueClass: 'value-bold' },
      { label: 'Discount Status', value: 'Paid', valueClass: 'value-success' },
      { label: 'Transaction ID', value: '7892' },
    ],
    variant: 'outlined',
  },
};

export const OrderDetails: Story = {
  args: {
    heading: 'Order Details',
    items: [
      { label: 'Order Number', value: '#12345' },
      { label: 'Order Date', value: 'Dec 19, 2025' },
      { label: 'Total Amount', value: '$2,499', valueClass: 'value-large value-primary' },
      { label: 'Status', value: 'Delivered', valueClass: 'value-success' },
    ],
    variant: 'outlined',
  },
};

export const WithDividers: Story = {
  args: {
    heading: 'Shipping Information',
    items: [
      { label: 'Name', value: 'John Doe' },
      { label: 'Address', value: '123 Main Street, New York, NY 10001' },
      { label: 'Phone', value: '+1 (555) 123-4567' },
      { label: 'Email', value: 'john.doe@example.com' },
    ],
    showDividers: true,
    variant: 'outlined',
  },
};

export const LongText: Story = {
  args: {
    heading: 'Product Information',
    items: [
      {
        label: 'Product Name',
        value: 'Premium Grass-Fed Organic Australian Beef Club Steak & T-Bone Combo Pack',
      },
      {
        label: 'Description',
        value: 'High-quality organic beef sourced from free-range cattle in Australia with premium marbling',
      },
      { label: 'SKU', value: 'BEEF-COMBO-PACK-2025-PREMIUM-AUS' },
      { label: 'Price', value: '$89.99', valueClass: 'value-large value-primary' },
    ],
    variant: 'outlined',
  },
};

export const Compact: Story = {
  args: {
    heading: 'Quick Details',
    items: [
      { label: 'Item', value: 'Laptop' },
      { label: 'Brand', value: 'Dell' },
      { label: 'Model', value: 'XPS 15' },
      { label: 'Price', value: '$1,299' },
    ],
    compact: true,
    variant: 'outlined',
  },
};

export const NoHeading: Story = {
  args: {
    items: [
      { label: 'Subtotal', value: '$2,199.00' },
      { label: 'Shipping', value: '$15.00' },
      { label: 'Tax', value: '$285.00' },
      { label: 'Total', value: '$2,499.00', valueClass: 'value-large value-bold' },
    ],
    variant: 'outlined',
  },
};

export const ColorVariants: Story = {
  args: {
    heading: 'Status Information',
    items: [
      { label: 'Primary Status', value: 'Active', valueClass: 'value-primary' },
      { label: 'Success Status', value: 'Completed', valueClass: 'value-success' },
      { label: 'Warning Status', value: 'Pending', valueClass: 'value-warning' },
      { label: 'Error Status', value: 'Failed', valueClass: 'value-error' },
      { label: 'Muted Status', value: 'Inactive', valueClass: 'value-muted' },
    ],
    variant: 'outlined',
  },
};

export const AccountInfo: Story = {
  args: {
    heading: 'Account Information',
    items: [
      { label: 'Username', value: 'johndoe123' },
      { label: 'Email', value: 'john.doe@example.com' },
      { label: 'Member Since', value: 'Jan 15, 2023' },
      { label: 'Account Type', value: 'Premium', valueClass: 'value-primary value-bold' },
      { label: 'Status', value: 'Active', valueClass: 'value-success' },
    ],
    showDividers: true,
    variant: 'elevated',
  },
};

export const ElevatedVariant: Story = {
  args: {
    heading: 'Subscription Details',
    items: [
      { label: 'Plan', value: 'Pro' },
      { label: 'Price', value: '$29/month' },
      { label: 'Next Billing', value: 'Jan 19, 2026' },
      { label: 'Auto Renew', value: 'Enabled', valueClass: 'value-success' },
    ],
    variant: 'elevated',
  },
};

export const FlatVariant: Story = {
  args: {
    heading: 'System Information',
    items: [
      { label: 'OS', value: 'Windows 11' },
      { label: 'Browser', value: 'Chrome 120.0' },
      { label: 'Screen', value: '1920x1080' },
      { label: 'Language', value: 'English (US)' },
    ],
    variant: 'flat',
  },
};

export const MultipleCards: Story = {
  render: () => (
    <Flex direction="column" gap={16} style={{ maxWidth: '600px' }}>
      <InfoListCard
        heading="Payment Information"
        items={[
          { label: 'Payment Method', value: 'VISA ****1234', valueClass: 'value-bold' },
          { label: 'Status', value: 'Paid', valueClass: 'value-success' },
          { label: 'Transaction ID', value: 'TXN-7892-2025' },
        ]}
      />
      <InfoListCard
        heading="Delivery Information"
        items={[
          { label: 'Courier', value: 'FedEx Express' },
          { label: 'Tracking', value: 'FDX123456789' },
          { label: 'Estimated Delivery', value: 'Dec 22, 2025' },
        ]}
        showDividers
      />
      <InfoListCard
        heading="Order Summary"
        items={[
          { label: 'Items', value: '3' },
          { label: 'Subtotal', value: '$2,199.00' },
          { label: 'Shipping', value: '$15.00' },
          { label: 'Total', value: '$2,499.00', valueClass: 'value-large value-primary' },
        ]}
      />
    </Flex>
  ),
};

export const HiddenItems: Story = {
  args: {
    heading: 'User Profile',
    items: [
      { label: 'Name', value: 'John Doe' },
      { label: 'Email', value: 'john@example.com' },
      { label: 'Password', value: '********', hidden: true },
      { label: 'Phone', value: '+1 555-0123' },
      { label: 'Address', value: '123 Main St' },
    ],
    variant: 'outlined',
  },
};

export const ResponsiveDemo: Story = {
  args: {
    heading: 'Responsive Test',
    items: [
      {
        label: 'Very Long Label That Should Wrap',
        value: 'Very Long Value That Should Also Wrap Properly',
      },
      { label: 'Short', value: 'Short' },
      {
        label: 'Medium Length Label',
        value: 'Medium Length Value',
      },
      {
        label: 'Ultra Super Extremely Long Label',
        value: 'Ultra Super Extremely Long Value That Definitely Will Wrap',
        valueClass: 'value-primary',
      },
    ],
    variant: 'outlined',
  },
};

export const WithReactNodes: Story = {
  args: {
    heading: 'Advanced Content',
    items: [
      {
        label: <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>💳 Payment Method</span>,
        value: <strong>VISA ****1234</strong>,
      },
      {
        label: <span>✅ Status</span>,
        value: <span style={{ color: '#16a34a', fontWeight: 600 }}>Paid</span>,
      },
      {
        label: 'Transaction',
        value: (
          <code style={{ 
            background: '#f5f5f5', 
            padding: '2px 6px', 
            borderRadius: '4px',
            fontSize: '0.875rem'
          }}>
            TXN-7892-2025
          </code>
        ),
      },
      {
        label: (
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            📦 Tracking
          </span>
        ),
        value: (
          <a 
            href="#" 
            style={{ 
              color: '#2563eb', 
              textDecoration: 'none',
              fontWeight: 500 
            }}
            onClick={(e) => e.preventDefault()}
          >
            FDX123456789
          </a>
        ),
      },
    ],
    variant: 'outlined',
  },
};
