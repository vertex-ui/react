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
      render(
        <ProductCard.Base
          {...defaultProps}
          category="Electronics"
          rating={4.5}
        />
      );
      expect(screen.getByText('Electronics')).toBeInTheDocument();
      // "Rating component displays the numeric rating rounded to the nearest integer (e.g., 4.5 renders as 5) inside an element with class .vtx-rating-value"
      // The dump shows: <span class="vtx-rating-value">5</span>
      // So it renders "5".
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('renders weight and units', () => {
        render(<ProductCard.Base {...defaultProps} weight={500} units="g" />);
        expect(screen.getByText('500 g')).toBeInTheDocument();
    });

    it('handles add to cart interaction', async () => {
      const handleAddToCart = jest.fn().mockResolvedValue(undefined);
      render(
        <ProductCard.Base
          {...defaultProps}
          onAddToCart={handleAddToCart}
          cartIcon={<span>Cart</span>}
        />
      );

      const addBtn = screen.getByText('Add to cart');
      fireEvent.click(addBtn);

      expect(handleAddToCart).toHaveBeenCalledWith(
        expect.objectContaining({ id: 'prod-1' }),
        1
      );
    });

    it('handles increment/decrement', async () => {
      const handleIncrement = jest.fn().mockResolvedValue(undefined);
      const handleDecrement = jest.fn().mockResolvedValue(undefined);

      render(
        <ProductCard.Base
          {...defaultProps}
          quantity={1}
          onIncrementCart={handleIncrement}
          onDecrementCart={handleDecrement}
        />
      );

      const buttons = screen.getAllByRole('button');
      // Usually - is first, then +, or surrounding the input.
      // Assuming + button has some identifying text or icon or order.
      // Based on code: - button, qty, + button.
      // We can click buttons.

      // Click first button (decrement)
      fireEvent.click(buttons[0]);
      expect(handleDecrement).toHaveBeenCalledWith(expect.objectContaining({ id: 'prod-1' }), 1);

      // Click second button (increment)
      fireEvent.click(buttons[1]);
      expect(handleIncrement).toHaveBeenCalledWith(expect.objectContaining({ id: 'prod-1' }), 1);
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

    it('handles quick view', () => {
        const handleQuickView = jest.fn();
        render(
            <ProductCard.Base
                {...defaultProps}
                onQuickView={handleQuickView}
            />
        );
        const qvBtn = screen.getByText('Quick View');
        fireEvent.click(qvBtn);
        expect(handleQuickView).toHaveBeenCalledWith(expect.objectContaining({ id: 'prod-1' }));
    });

    it('handles category click', () => {
        const handleCategoryClick = jest.fn();
        render(
            <ProductCard.Base
                {...defaultProps}
                category="Tech"
                onCategoryClick={handleCategoryClick}
            />
        );
        const catChip = screen.getByText('Tech');
        fireEvent.click(catChip);
        expect(handleCategoryClick).toHaveBeenCalledWith(expect.objectContaining({ id: 'prod-1' }));
    });

    it('renders skeleton when loading', () => {
        const { container } = render(<ProductCard.Base {...defaultProps} loading />);
        // Check for skeleton classes
        expect(container.querySelector('.vtx-skeleton')).toBeInTheDocument();
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

  describe('ProductCard.List', () => {
      it('renders list item', () => {
          render(<ProductCard.List {...defaultProps} quantity={3} variant="Blue" />);
          expect(screen.getByText('Test Product')).toBeInTheDocument();
          expect(screen.getByText('Qty: 3')).toBeInTheDocument();
          expect(screen.getByText('Blue')).toBeInTheDocument();
          // Total price: 99.99 * 3 = 299.97
          expect(screen.getByText('$299.97')).toBeInTheDocument();
      });
  });
});
