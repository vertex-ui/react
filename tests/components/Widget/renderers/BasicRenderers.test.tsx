import React from 'react';
import { render, screen } from '../../../test-utils';
import MetricWidget from '../../../../src/components/Widget/renderers/MetricWidget';
import InfoWidget from '../../../../src/components/Widget/renderers/InfoWidget';
import OrderWidget from '../../../../src/components/Widget/renderers/OrderWidget';
import ProductWidget from '../../../../src/components/Widget/renderers/ProductWidget';
import { MetricWidgetData, InfoWidgetData, OrderWidgetData, ProductWidgetData } from '../../../../src/components/Widget/types';

describe('Basic Widget Renderers', () => {
  describe('MetricWidget', () => {
    const defaultData: MetricWidgetData = {
      label: 'Total Sales',
      value: '$50,000',
      trend: { value: 12, label: 'vs last month', direction: 'up' },
      icon: <span data-testid="metric-icon">Icon</span>
    };

    it('renders minimal theme', () => {
      render(<MetricWidget data={defaultData} settings={{ theme: 'minimal' }} />);
      expect(screen.getByText('Total Sales')).toBeInTheDocument();
      expect(screen.getByText('$50,000')).toBeInTheDocument();
      expect(screen.getByText(/12%/)).toBeInTheDocument();
    });

    it('renders modern theme', () => {
      render(<MetricWidget data={defaultData} settings={{ theme: 'modern' }} />);
      expect(screen.getByTestId('metric-icon')).toBeInTheDocument();
    });

    it('renders compact theme', () => {
      render(<MetricWidget data={defaultData} settings={{ theme: 'compact' }} />);
      expect(screen.getByText('Total Sales')).toBeInTheDocument();
    });

    it('renders badge', () => {
        const badgeData = { ...defaultData, badge: { text: 'New', variant: 'success' as const } };
        render(<MetricWidget data={badgeData} settings={{ theme: 'modern' }} />);
        expect(screen.getByText('New')).toBeInTheDocument();
    });
  });

  describe('InfoWidget', () => {
    const defaultData: InfoWidgetData = {
      text: 'Info Text',
      subText: 'Info Subtext',
      icon: <span data-testid="info-icon">Icon</span>
    };

    it('renders minimal theme using InfoText', () => {
      render(<InfoWidget data={defaultData} settings={{ theme: 'minimal' }} />);
      expect(screen.getByText('Info Text')).toBeInTheDocument();
      expect(screen.getByText('Info Subtext')).toBeInTheDocument();
      expect(screen.getByTestId('info-icon')).toBeInTheDocument();
    });

    it('renders modern theme using InfoCard', () => {
      render(<InfoWidget data={defaultData} settings={{ theme: 'modern' }} />);
      expect(screen.getByText('Info Text')).toBeInTheDocument();
    });
  });

  describe('OrderWidget', () => {
    const defaultData: OrderWidgetData = {
      id: 'ORD-123',
      status: 'delivered',
      date: '2024-01-01',
      total: 100,
      items: [{ name: 'Item 1', quantity: 1, price: 100 }],
      actions: [{ label: 'Track', onClick: jest.fn() }]
    };

    it('renders order details via OrderCard', () => {
      render(<OrderWidget data={defaultData} />);
      // Note: OrderCard uses orderId prop if orderNumber is not provided.
      // OrderWidget passes `orderNumber={data.id}`.
      // OrderCard renders `orderNumber || Order #${orderId}`.
      // So if orderNumber is passed, it renders just that.
      // Here orderNumber is 'ORD-123', so it renders 'ORD-123', NOT 'Order #ORD-123'.
      expect(screen.getByText('ORD-123')).toBeInTheDocument();
      // Case sensitivity issue: OrderCard likely capitalizes or passes status directly to Badge
      // If it passes to Badge, it might be rendered as is or capitalized depending on impl.
      // Based on OrderCard impl: getStatusText() -> charAt(0).toUpperCase() + slice(1)
      // data.status is 'delivered', so it becomes 'Delivered'.
      // But looking at error:
      // <span class="vtx-badge-content">delivered</span>
      // Wait, OrderWidget passes statusText={data.status}. So it uses data.status which is 'delivered' (lowercase).
      // So we should check for 'delivered'.
      expect(screen.getByText('delivered')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText(/Jan 1, 2024/)).toBeInTheDocument();
    });

    it('handles status mapping', () => {
      const pendingData = { ...defaultData, status: 'Completed' }; // Should map to delivered
      render(<OrderWidget data={pendingData} />);
      // Here status is 'Completed'. OrderWidget passes statusText={data.status}.
      // So text will be 'Completed'.
      // But the mapStatus logic maps 'completed' -> 'delivered' for the badge variant color.
      // The text displayed is data.status.
      expect(screen.getByText('Completed')).toBeInTheDocument();
    });
  });

  describe('ProductWidget', () => {
    const defaultData: ProductWidgetData = {
      id: 'p1',
      name: 'Product Name',
      price: '99',
      image: 'img.jpg'
    };

    it('renders product card', () => {
      render(<ProductWidget data={defaultData} />);
      expect(screen.getByText('Product Name')).toBeInTheDocument();
      expect(screen.getByText('$99.00')).toBeInTheDocument();
    });
  });
});
