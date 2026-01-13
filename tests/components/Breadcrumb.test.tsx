import React from 'react';
import { render, screen } from '../test-utils';
import { Breadcrumb } from '../../src/components/Breadcrumb/Breadcrumb';

describe('Breadcrumb', () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Details' } // Current page
  ];

  it('renders correctly', () => {
    render(<Breadcrumb items={items} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('renders items', () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
  });

  it('renders separators', () => {
    const { container } = render(<Breadcrumb items={items} separator=">" />);
    // Check for separators. Assuming text content or aria-hidden span
    expect(screen.getAllByText('>').length).toBeGreaterThan(0);
  });
});
