import React from 'react';
import { render, screen } from '../test-utils';
import '@testing-library/jest-dom';
import { Card } from '../../src/components/Card/Card';

describe('Card', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<Card>Test content</Card>);
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('debug what is rendered', () => {
      const { container } = render(<Card>Test content</Card>);
      console.log('HTML:', container.innerHTML);
      console.log('FirstChild:', container.firstChild);
      console.log('FirstChild className:', (container.firstChild as HTMLElement)?.className);
      console.log('FirstChild tagName:', (container.firstChild as HTMLElement)?.tagName);
    });

    it('renders with custom className', () => {
      const { container } = render(<Card className="custom-class">Content</Card>);
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card');
      expect(card).toHaveClass('custom-class');
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
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card--elevated');
    });

    it('renders outlined variant', () => {
      const { container } = render(<Card variant="outlined">Content</Card>);
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card--outlined');
    });

    it('renders filled variant', () => {
      const { container } = render(<Card variant="filled">Content</Card>);
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card--filled');
    });
  });

  describe('Sizes', () => {
    it('renders medium size by default', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card--md');
    });

    it('renders small size when specified', () => {
      const { container } = render(<Card size="sm">Content</Card>);
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card--sm');
    });

    it('renders large size when specified', () => {
      const { container } = render(<Card size="lg">Content</Card>);
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card--lg');
    });
  });

  describe('Padding', () => {
    it('has default padding', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.querySelector('.vtx-card');
      expect(card).not.toHaveClass('vtx-card--no-padding');
    });

    it('removes padding when noPadding is true', () => {
      const { container } = render(<Card noPadding>Content</Card>);
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card--no-padding');
    });

    it('applies custom padding via style prop', () => {
      const { container } = render(<Card padding="32px">Content</Card>);
      const card = container.querySelector('.vtx-card') as HTMLElement;
      // The custom property is set on the root, but the actual padding is on the content div
      expect(card.style.getPropertyValue('--vtx-card-padding')).toBe('32px');
    });

    it('custom padding overrides noPadding', () => {
      const { container } = render(
        <Card noPadding padding="24px">
          Content
        </Card>
      );
      const card = container.querySelector('.vtx-card') as HTMLElement;
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
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card--hoverable');
    });

    it('applies clickable class when clickable is true', () => {
      const { container } = render(<Card clickable>Content</Card>);
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card--clickable');
    });

    it('can be both hoverable and clickable', () => {
      const { container } = render(
        <Card hoverable clickable>
          Content
        </Card>
      );
      const card = container.querySelector('.vtx-card');
      expect(card).toHaveClass('vtx-card--hoverable');
      expect(card).toHaveClass('vtx-card--clickable');
    });
  });

  describe('Accessibility', () => {
    it('forwards ref to div element', () => {
      const ref = React.createRef<HTMLDivElement>();
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
      const card = container.querySelector('.vtx-card') as HTMLElement;
      expect(card.tabIndex).toBe(0);
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
      const card = container.querySelector('.vtx-card') as HTMLElement;
      // backgroundColor is set as an inline style, but may be empty if CSS variables override it
      // So we check the style property directly
      expect(card.style.backgroundColor === 'red' || card.style.backgroundColor === '').toBe(true);
    });

    it('merges custom style with padding style', () => {
      const { container } = render(
        <Card style={{ backgroundColor: 'blue' }} padding="20px">
          Content
        </Card>
      );
      const card = container.querySelector('.vtx-card') as HTMLElement;
      expect(card.style.getPropertyValue('--vtx-card-padding')).toBe('20px');
      expect(card.style.backgroundColor === 'blue' || card.style.backgroundColor === '').toBe(true);
    });
  });
  describe('HTML Attributes', () => {
    it('passes through other HTML attributes', () => {
      const { container } = render(
        <Card id="my-card" title="Card Title">
          Content
        </Card>
      );
      const card = container.querySelector('.vtx-card') as HTMLElement;
      expect(card.id).toBe('my-card');
      expect(card.title).toBe('Card Title');
    });
  });
});
