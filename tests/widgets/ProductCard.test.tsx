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
      // Rating component displays numeric rating rounded to nearest integer
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
      // Button order: Decrement (-), Increment (+)
      fireEvent.click(buttons[0]); // -
      expect(handleDecrement).toHaveBeenCalledWith(expect.objectContaining({ id: 'prod-1' }), 1);

      fireEvent.click(buttons[1]); // +
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
        // Quick view overlay appears on hover usually, but in DOM it exists if rendered.
        // Assuming it's rendered but maybe hidden visually or requires hover state simulation which JSDOM doesn't do fully.
        // But the button is in the DOM.
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
        expect(container.querySelector('.vtx-skeleton')).toBeInTheDocument();
    });

    it('renders original price and discount', () => {
      render(
        <ProductCard.Base
          {...defaultProps}
          originalPrice={120}
          discount="-20%"
        />
      );
      expect(screen.getByText('$120.00')).toBeInTheDocument();
      expect(screen.getByText('-20%')).toBeInTheDocument();
    });

    it('renders badges', () => {
      render(
        <ProductCard.Base
          {...defaultProps}
          featured
          featuredText="Best Seller"
        />
      );
      expect(screen.getByText('Best Seller')).toBeInTheDocument();
    });

    it('handles loading state on add to cart', () => {
      render(
        <ProductCard.Base
          {...defaultProps}
          actionLoading
          addToCartButtonVariant="primary"
        />
      );
      expect(screen.getByText('Loading')).toBeInTheDocument();
    });

    it('renders as link when href provided', () => {
      render(<ProductCard.Base {...defaultProps} href="/product/1" />);
      // Image and Title become links
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
      expect(links[0]).toHaveAttribute('href', '/product/1');
    });
  });

  describe('ProductCard.Wide', () => {
    it('renders in wide layout', () => {
      const { container } = render(<ProductCard.Wide {...defaultProps} imagePosition="right" />);
      expect(container.querySelector('.productcard-wide')).toBeInTheDocument();
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      // Check for row-reverse class/style or structure if needed, but existence is key
    });

    it('handles interactions in wide mode', () => {
      const handleAdd = jest.fn();
      render(<ProductCard.Wide {...defaultProps} onAddToCart={handleAdd} />);
      fireEvent.click(screen.getByText('Add to cart'));
      expect(handleAdd).toHaveBeenCalled();
    });
  });

  describe('ProductCard.Minimal', () => {
    it('renders minimal version', () => {
      const { container } = render(<ProductCard.Minimal {...defaultProps} />);
      expect(container.querySelector('.productcard-minimal')).toBeInTheDocument();
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    it('renders wishlist button in minimal', () => {
      const handleWishlist = jest.fn();
      render(
        <ProductCard.Minimal
          {...defaultProps}
          showWishlist
          onWishlist={handleWishlist}
        />
      );
      const btn = screen.getByLabelText('Add to wishlist');
      fireEvent.click(btn);
      expect(handleWishlist).toHaveBeenCalled();
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

      it('calls onClick', () => {
        const handleClick = jest.fn();
        render(<ProductCard.List {...defaultProps} onClick={handleClick} />);
        fireEvent.click(screen.getByText('Test Product'));
        expect(handleClick).toHaveBeenCalled();
      });
  });
});
