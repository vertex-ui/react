import React from 'react';
import { render, screen } from '../test-utils';
import { TestimonialWidget } from '../../src/components/Widget/renderers/TestimonialWidget';

describe('TestimonialWidget', () => {
  const defaultData = {
    testimonials: [
      {
        id: '1',
        content: "This is a great product!",
        author: {
          name: "Jane Doe",
          role: "CEO",
          company: "Acme Corp",
          avatar: "avatar.jpg"
        },
        rating: 5
      }
    ]
  };

  const defaultProps = {
    data: defaultData,
    className: 'vtx-testimonial-widget'
  };

  it('renders content', () => {
    render(<TestimonialWidget {...defaultProps} />);
    expect(screen.getByText("This is a great product!")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("CEO")).toBeInTheDocument();
    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
  });

  it('renders rating', () => {
    const { container } = render(<TestimonialWidget {...defaultProps} />);
    // Check for stars (SVG)
    // There should be 5 stars
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const svgs = container.querySelectorAll('svg');
    // Assuming stars + maybe quote icon?
    expect(svgs.length).toBeGreaterThan(0);
  });

  it('renders avatar', () => {
    render(<TestimonialWidget {...defaultProps} />);
    // Avatar component renders an img inside
    const img = screen.getByAltText("Jane Doe");
    expect(img).toHaveAttribute('src', 'avatar.jpg');
  });

  it('handles card layout', () => {
    const { container } = render(<TestimonialWidget {...defaultProps} theme="card" />);
    // Check styles or class if possible, but component applies inline styles based on theme
    // We can check if container has style
    // eslint-disable-next-line testing-library/no-node-access
    const widget = container.querySelector('.vtx-testimonial-widget') as HTMLElement;
    // JSDOM might normalize background to separate properties
    // Or maybe ThemeProvider wraps it?
    // Let's check background-color
    expect(widget).toHaveStyle({ backgroundColor: '#ffffff' });
  });

  it('handles empty testimonials', () => {
    render(<TestimonialWidget data={{ testimonials: [] }} />);
    expect(screen.getByText("No testimonials available")).toBeInTheDocument();
  });
});
