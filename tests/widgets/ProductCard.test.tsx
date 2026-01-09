import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from '../../src/widgets/ProductCard/ProductCard';
import { ThemeProvider } from '../../src/theme/ThemeProvider';

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('ProductCard Widget', () => {
  const defaultProps = {
    id: 'prod-1',
    name: 'Test Product',
    image: 'test-image.jpg',
    price: 99.99,
  };

  describe('ProductCard.Base', () => {
    it('renders correctly with default props', () => {
      renderWithTheme(<ProductCard.Base {...defaultProps} />);
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('$99.99')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });

    it('handles readonly mode', () => {
      renderWithTheme(<ProductCard.Base {...defaultProps} readonly={true} initialQuantity={2} />);
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      // Should not show Add to Cart button
      expect(screen.queryByRole('button', { name: /add to cart/i })).not.toBeInTheDocument();
      // Should show quantity text
      expect(screen.getByText('Qty: 2')).toBeInTheDocument();
    });

    it('renders variant text when provided', () => {
      renderWithTheme(<ProductCard.Base {...defaultProps} variant="Size: L" />);
      expect(screen.getByText('Size: L')).toBeInTheDocument();
    });
  });

  describe('ProductCard.List', () => {
    it('renders correctly', () => {
      renderWithTheme(<ProductCard.List {...defaultProps} />);
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('$99.99')).toBeInTheDocument();
    });

    it('calculates total price based on quantity', () => {
      renderWithTheme(<ProductCard.List {...defaultProps} initialQuantity={2} />);
      // 99.99 * 2 = 199.98
      expect(screen.getByText('$199.98')).toBeInTheDocument();
    });

    it('renders variant text', () => {
      renderWithTheme(<ProductCard.List {...defaultProps} variant="Color: Blue" />);
      expect(screen.getByText('Color: Blue')).toBeInTheDocument();
    });

    it('handles readonly mode', () => {
      renderWithTheme(<ProductCard.List {...defaultProps} readonly={true} initialQuantity={3} />);
      expect(screen.getByText('Qty: 3')).toBeInTheDocument();
      // Should not have increment/decrement buttons (checking by class or role usually, but here checking absence)
       const buttons = screen.queryAllByRole('button');
       // In readonly, buttons should be absent or disabled?
       // In my implementation: {!readonly && buttons}
       expect(buttons.length).toBe(0);
    });
  });
});
