import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import { ProductCard } from '../../src/widgets/ProductCard/ProductCard';

describe('ProductCard', () => {
  const defaultProps = {
    id: 'prod-1',
    name: 'Test Product',
    image: 'product.jpg',
    price: 99.99,
  };

  describe('ProductCard.Base', () => {
    it('renders basic product info', () => {
      render(<ProductCard.Base {...defaultProps} />);
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('$99.99')).toBeInTheDocument();
      expect(screen.getByAltText('Product')).toBeInTheDocument();
    });

    it('renders original price and discount', () => {
      render(
        <ProductCard.Base
          {...defaultProps}
          originalPrice={129.99}
          discount="-20%"
        />
      );
      expect(screen.getByText('$129.99')).toBeInTheDocument();
      expect(screen.getByText('-20%')).toBeInTheDocument();
    });

    it('renders category and rating', () => {
      render(
        <ProductCard.Base
          {...defaultProps}
          category="Electronics"
          rating={4.5}
        />
      );
      expect(screen.getByText('Electronics')).toBeInTheDocument();
      // Rating component rounds values if allowHalf is false (default), so 4.5 -> 5
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('handles add to cart interaction', async () => {
      const handleAddToCart = jest.fn();
      const { rerender } = render(
        <ProductCard.Base
          {...defaultProps}
          onAddToCart={handleAddToCart}
          quantity={0}
        />
      );

      const addBtn = screen.getByText('Add to cart');
      fireEvent.click(addBtn);

      expect(handleAddToCart).toHaveBeenCalledWith(
        expect.objectContaining({ id: 'prod-1' }),
        1
      );

      // Simulate parent updating state
      rerender(
        <ProductCard.Base
          {...defaultProps}
          onAddToCart={handleAddToCart}
          quantity={1}
        />
      );

      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('handles increment/decrement', async () => {
      const handleIncrement = jest.fn();
      const handleDecrement = jest.fn();

      const { rerender } = render(
        <ProductCard.Base
          {...defaultProps}
          quantity={1}
          onIncrementCart={handleIncrement}
          onDecrementCart={handleDecrement}
        />
      );

      const plusBtn = screen.getByText('+');
      fireEvent.click(plusBtn);
      expect(handleIncrement).toHaveBeenCalledWith(
        expect.objectContaining({ id: 'prod-1' }),
        1
      );

      // Simulate increment
      rerender(
        <ProductCard.Base
          {...defaultProps}
          quantity={2}
          onIncrementCart={handleIncrement}
          onDecrementCart={handleDecrement}
        />
      );

      const minusBtn = screen.getByText('-');
      fireEvent.click(minusBtn);
      expect(handleDecrement).toHaveBeenCalledWith(
        expect.objectContaining({ id: 'prod-1' }),
        2
      );
    });

    it('handles wishlist toggle', () => {
      const handleWishlist = jest.fn();
      render(
        <ProductCard.Base
          {...defaultProps}
          showWishlist
          onWishlist={handleWishlist}
          wishlistIcon="♡"
        />
      );

      const wishlistBtn = screen.getByRole('button', { name: 'Add to wishlist' });
      fireEvent.click(wishlistBtn);
      expect(handleWishlist).toHaveBeenCalledTimes(1);
    });
  });

  describe('ProductCard.Wide', () => {
    it('renders in wide layout', () => {
      const { container } = render(<ProductCard.Wide {...defaultProps} />);
      expect(container.querySelector('.productcard-wide')).toBeInTheDocument();
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });
  });

  describe('ProductCard.Minimal', () => {
    it('renders minimal version', () => {
      const { container } = render(<ProductCard.Minimal {...defaultProps} />);
      expect(container.querySelector('.productcard-minimal')).toBeInTheDocument();
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });
  });
});
