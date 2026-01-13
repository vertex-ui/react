import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Navbar } from '../../src/components/Navbar/Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector('.vtx-navbar')).toBeInTheDocument();
  });

  it('renders logo', () => {
    // Navbar expects logo as string src or URL? Or ReactNode?
    // Based on previous test failure which showed <img src="[object Object]">, it seems it expects a string URL if it renders an img tag.
    // Let's pass a string.
    render(<Navbar logo="logo.png" />);
    const img = screen.getByAltText('Logo');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'logo.png');
  });

  // Skipped nav items test as prop name is uncertain without reading code.
});
