import React from 'react';
import { render, screen } from '../../../test-utils';
import { OrderWidget } from '../../../../src/components/Widget/renderers/OrderWidget';

describe('OrderWidget', () => {
  const data = {
    id: 'ORD-001',
    items: [{ name: 'Item 1', quantity: 1, image: 'img.jpg' }],
    status: 'delivered' as const,
    total: 100,
    date: '2024-01-01'
  };

  it('renders correctly', () => {
    render(
      <OrderWidget
        data={data}
        type="order"
        settings={{}}
      />
    );
    expect(screen.getByText('ORD-001')).toBeInTheDocument();
  });

  it('handles empty items', () => {
    render(
      <OrderWidget
        data={{ ...data, items: [] }}
        type="order"
        settings={{}}
      />
    );
    // Should still render ID
    expect(screen.getByText('ORD-001')).toBeInTheDocument();
  });
});
