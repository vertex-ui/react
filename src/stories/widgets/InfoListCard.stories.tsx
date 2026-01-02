import type { Meta, StoryObj } from '@storybook/react';
import Widget from '../../components/Widget/Widget';
import { Flex } from '../../components/Flex';

const meta: Meta<typeof Widget> = {
  title: 'Widgets/InfoListCard',
  component: Widget,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'InfoListCard via `Widget` config (list widget).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Widget>;

export const PaymentInformation: Story = {
  args: {
    config: {
      type: 'list',
      data: {
        title: 'Payment Information',
        items: [
          { title: 'Payment Method', subtitle: 'VISA', metadata: { note: 'value-bold' } },
          { title: 'Discount Status', subtitle: 'Paid', metadata: { note: 'value-success' } },
          { title: 'Transaction ID', subtitle: '7892' },
        ],
      },
      settings: { theme: 'modern' },
    },
  },
};

export const MultipleCards: Story = {
  render: () => (
    <Flex direction="column" gap={16} style={{ maxWidth: '600px' }}>
      <Widget
        config={{
          type: 'list',
          data: {
            title: 'Payment Information',
            items: [
              { title: 'Payment Method', subtitle: 'VISA ****1234' },
              { title: 'Status', subtitle: 'Paid' },
              { title: 'Transaction ID', subtitle: 'TXN-7892-2025' },
            ],
          },
        }}
      />
      <Widget
        config={{
          type: 'list',
          data: {
            title: 'Delivery Information',
            items: [
              { title: 'Courier', subtitle: 'FedEx Express' },
              { title: 'Tracking', subtitle: 'FDX123456789' },
              { title: 'Estimated Delivery', subtitle: 'Dec 22, 2025' },
            ],
          },
          settings: { showDividers: true },
        }}
      />
      <Widget
        config={{
          type: 'list',
          data: {
            title: 'Order Summary',
            items: [
              { title: 'Items', subtitle: '3' },
              { title: 'Subtotal', subtitle: '$2,199.00' },
              { title: 'Shipping', subtitle: '$15.00' },
              { title: 'Total', subtitle: '$2,499.00' },
            ],
          },
        }}
      />
    </Flex>
  ),
};
