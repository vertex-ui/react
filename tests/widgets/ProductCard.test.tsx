import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import { ProductCard } from '../../src/widgets/ProductCard/ProductCard';

describe('ProductCard', () => {
  const mockProps = {
    id: 'prod-1',
    name: 'Test Product',
    image: 'test.jpg',
    price: 99.99,
  };

  describe('Base Variant', () => {
    it('renders product information', () => {
      render(<ProductCard.Base {...mockProps} />);
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('$99.99')).toBeInTheDocument();
    });

    it('handles add to cart interaction', async () => {
      const onAddToCart = jest.fn();
      render(<ProductCard.Base {...mockProps} onAddToCart={onAddToCart} />);

      const addButton = screen.getByText('Add to cart');
      fireEvent.click(addButton);

      await waitFor(() => {
        expect(onAddToCart).toHaveBeenCalledWith('prod-1', 1);
      });
    });
  });

  describe('Wide Variant', () => {
    it('renders wide card correctly', () => {
      render(<ProductCard.Wide {...mockProps} />);
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });
  });

  describe('Minimal Variant', () => {
    it('renders minimal card correctly', () => {
      render(<ProductCard.Minimal {...mockProps} />);
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });
  });
});
