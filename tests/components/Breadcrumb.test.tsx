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
    // Use getAllByText because Breadcrumb might render mobile and desktop versions or screen reader text
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Products/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Details/i)[0]).toBeInTheDocument();
  });

  it('renders separators', () => {
    const { container } = render(<Breadcrumb items={items} separator=">" />);
    // Check for separators. Assuming text content or aria-hidden span
    expect(screen.getAllByText('>').length).toBeGreaterThan(0);
  });
});
