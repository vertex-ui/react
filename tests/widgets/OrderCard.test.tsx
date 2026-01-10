import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { OrderCard } from '../../src/widgets/OrderCard/OrderCard';

describe('OrderCard', () => {
  const mockItems = [
    { id: '1', name: 'Product 1', quantity: 2, image: 'img1.jpg' },
    { id: '2', name: 'Product 2', quantity: 1 }
  ];

  const defaultProps = {
    orderId: 'ORD-123',
    items: mockItems,
    totalAmount: 99.99,
  };

  it('renders order number and items', () => {
    render(<OrderCard {...defaultProps} />);
    expect(screen.getByText('Order #ORD-123')).toBeInTheDocument();
    // The text might be broken up, so we look for the element containing the text or partial match if needed
    // But based on source: {firstItem.name}{firstItem.quantity && firstItem.quantity > 1 && ` × ${firstItem.quantity}`}
    // It's in one Text component node.
    // However, if it fails, it might be due to how testing library queries text with spaces or breaks.
    // Let's use a regex to be safer or check partial content.
    expect(screen.getByText(/Product 1/)).toBeInTheDocument();
    expect(screen.getByText(/× 2/)).toBeInTheDocument();
    // Second item should be indicated as "+ 1 more item"
    expect(screen.getByText('+ 1 more item')).toBeInTheDocument();
  });

  it('renders custom order number', () => {
    render(<OrderCard {...defaultProps} orderNumber="CUSTOM-001" />);
    expect(screen.getByText('CUSTOM-001')).toBeInTheDocument();
  });

  it('renders correct status text and badge', () => {
    render(<OrderCard {...defaultProps} status="delivered" />);
    expect(screen.getByText('Delivered')).toBeInTheDocument();
  });

  it('renders custom status text', () => {
    render(<OrderCard {...defaultProps} statusText="In Transit" />);
    expect(screen.getByText('In Transit')).toBeInTheDocument();
  });

  it('renders price and delivery date', () => {
    render(<OrderCard {...defaultProps} deliveryDate="Jan 1, 2024" />);
    expect(screen.getByText('₹99.99')).toBeInTheDocument();
    expect(screen.getByText(/Delivered on: Jan 1, 2024/)).toBeInTheDocument();
  });

  it('handles track order button click', () => {
    const handleTrack = jest.fn();
    render(<OrderCard {...defaultProps} onTrackOrder={handleTrack} />);

    const trackBtn = screen.getByRole('button', { name: 'Track Order' });
    fireEvent.click(trackBtn);

    expect(handleTrack).toHaveBeenCalledWith('ORD-123');
  });

  it('handles view details click', () => {
    const handleViewDetails = jest.fn();
    render(<OrderCard {...defaultProps} onViewDetails={handleViewDetails} />);

    // OrderCard is clickable when onViewDetails is provided
    const card = screen.getByText('Order #ORD-123').closest('.ordercard');
    fireEvent.click(card!);

    expect(handleViewDetails).toHaveBeenCalledWith('ORD-123');
  });

  it('renders product image', () => {
    render(<OrderCard {...defaultProps} />);
    const img = screen.getByAltText('Product 1');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'img1.jpg');
  });
});
