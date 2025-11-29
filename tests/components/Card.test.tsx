import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from '../../src/components/Card/Card';

describe('Card', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<Card>Test content</Card>);
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(<Card className="custom-class">Content</Card>);
      expect(container.firstChild).toHaveClass('vtx-card', 'custom-class');
    });

    it('renders children correctly', () => {
      render(
        <Card>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
        </Card>
      );
      expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
      expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
    });

    it('applies data-testid attribute', () => {
      render(<Card data-testid="test-card">Content</Card>);
      expect(screen.getByTestId('test-card')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders elevated variant by default', () => {
      const { container } = render(<Card>Content</Card>);
      expect(container.firstChild).toHaveClass('vtx-card--elevated');
    });

    it('renders outlined variant', () => {
      const { container } = render(<Card variant="outlined">Content</Card>);
      expect(container.firstChild).toHaveClass('vtx-card--outlined');
    });

    it('renders filled variant', () => {
      const { container } = render(<Card variant="filled">Content</Card>);
      expect(container.firstChild).toHaveClass('vtx-card--filled');
    });
  });

  describe('Padding', () => {
    it('has default padding', () => {
      const { container } = render(<Card>Content</Card>);
      expect(container.firstChild).not.toHaveClass('vtx-card--no-padding');
    });

    it('removes padding when noPadding is true', () => {
      const { container } = render(<Card noPadding>Content</Card>);
      expect(container.firstChild).toHaveClass('vtx-card--no-padding');
    });

    it('applies custom padding via style prop', () => {
      const { container } = render(<Card padding="32px">Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card.style.getPropertyValue('--vtx-card-padding')).toBe('32px');
    });

    it('custom padding overrides noPadding', () => {
      const { container } = render(
        <Card noPadding padding="24px">
          Content
        </Card>
      );
      const card = container.firstChild as HTMLElement;
      expect(card.style.getPropertyValue('--vtx-card-padding')).toBe('24px');
      expect(card).not.toHaveClass('vtx-card--no-padding');
    });
  });

  describe('Header and Footer', () => {
    it('renders header when provided', () => {
      render(<Card header={<h3>Card Header</h3>}>Content</Card>);
      expect(screen.getByText('Card Header')).toBeInTheDocument();
    });

    it('renders footer when provided', () => {
      render(<Card footer={<button>Action</button>}>Content</Card>);
      expect(screen.getByText('Action')).toBeInTheDocument();
    });

    it('renders both header and footer', () => {
      render(
        <Card header={<h3>Header</h3>} footer={<button>Footer</button>}>
          Content
        </Card>
      );
      expect(screen.getByText('Header')).toBeInTheDocument();
      expect(screen.getByText('Footer')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('applies divider class to header when divider is true', () => {
      const { container } = render(
        <Card header={<h3>Header</h3>} divider>
          Content
        </Card>
      );
      const header = container.querySelector('.vtx-card-header');
      expect(header).toHaveClass('vtx-card-header--divider');
    });

    it('applies divider class to footer when divider is true', () => {
      const { container } = render(
        <Card footer={<button>Footer</button>} divider>
          Content
        </Card>
      );
      const footer = container.querySelector('.vtx-card-footer');
      expect(footer).toHaveClass('vtx-card-footer--divider');
    });
  });

  describe('Interactive States', () => {
    it('applies hoverable class when hoverable is true', () => {
      const { container } = render(<Card hoverable>Content</Card>);
      expect(container.firstChild).toHaveClass('vtx-card--hoverable');
    });

    it('applies clickable class when clickable is true', () => {
      const { container } = render(<Card clickable>Content</Card>);
      expect(container.firstChild).toHaveClass('vtx-card--clickable');
    });

    it('handles onClick event', () => {
      const handleClick = jest.fn();
      const { container } = render(
        <Card clickable onClick={handleClick}>
          Content
        </Card>
      );
      const card = container.firstChild as HTMLElement;
      card.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('can be both hoverable and clickable', () => {
      const { container } = render(
        <Card hoverable clickable>
          Content
        </Card>
      );
      expect(container.firstChild).toHaveClass('vtx-card--hoverable');
      expect(container.firstChild).toHaveClass('vtx-card--clickable');
    });
  });

  describe('Accessibility', () => {
    it('forwards ref to div element', () => {
      const ref = { current: null } as React.RefObject<HTMLDivElement>;
      render(<Card ref={ref}>Content</Card>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.tagName).toBe('DIV');
    });

    it('supports tabIndex for keyboard navigation', () => {
      const { container } = render(
        <Card tabIndex={0} clickable>
          Content
        </Card>
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveAttribute('tabIndex', '0');
    });

    it('supports aria attributes', () => {
      render(
        <Card aria-label="Custom card" role="article">
          Content
        </Card>
      );
      const card = screen.getByRole('article');
      expect(card).toHaveAttribute('aria-label', 'Custom card');
    });
  });

  describe('Custom Styling', () => {
    it('applies custom style prop', () => {
      const { container } = render(<Card style={{ backgroundColor: 'red' }}>Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card.style.backgroundColor).toBe('red');
    });

    it('merges custom style with padding style', () => {
      const { container } = render(
        <Card style={{ backgroundColor: 'blue' }} padding="20px">
          Content
        </Card>
      );
      const card = container.firstChild as HTMLElement;
      expect(card.style.backgroundColor).toBe('blue');
      expect(card.style.getPropertyValue('--vtx-card-padding')).toBe('20px');
    });
  });
  describe('HTML Attributes', () => {
    it('passes through other HTML attributes', () => {
      const { container } = render(
        <Card id="my-card" title="Card Title">
          Content
        </Card>
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveAttribute('id', 'my-card');
      expect(card).toHaveAttribute('title', 'Card Title');
    });
  });
});
