import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Navbar } from '../../src/components/Navbar/Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector('.vtx-navbar')).toBeInTheDocument();
  });

  it('renders logo', () => {
    // Navbar base props says logo?: string.
    render(<Navbar logo="logo.png" logoAlt="Brand" />);
    const img = screen.getByAltText('Brand');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'logo.png');
  });

  it('renders navigation items', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' }
    ];
    // Prop name is `navigationItems` based on types.ts
    render(<Navbar navigationItems={items} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('handles item click', () => {
    const onItemClick = jest.fn();
    const items = [
      { label: 'Contact', onClick: onItemClick }
    ];
    render(<Navbar navigationItems={items} />);
    fireEvent.click(screen.getByText('Contact'));
    expect(onItemClick).toHaveBeenCalled();
  });
});
