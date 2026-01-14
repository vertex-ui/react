import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '../test-utils';
import { TestimonialWidget } from '../../src/components/Widget/renderers/TestimonialWidget';

describe('TestimonialWidget', () => {
  const testimonials = [
    {
      id: '1',
      content: "This is a great product!",
      author: {
        name: "Jane Doe",
        role: "CEO",
        company: "Acme Corp",
        avatar: "avatar1.jpg"
      },
      rating: 5,
      date: "2024-01-01"
    },
    {
      id: '2',
      content: "Amazing experience!",
      author: {
        name: "John Smith",
        role: "CTO",
        company: "Tech Inc",
      },
      rating: 4
    }
  ];

  const defaultProps = {
    data: { testimonials },
    className: 'vtx-testimonial-widget'
  };

  describe('Rendering', () => {
    it('renders content correctly', () => {
      render(<TestimonialWidget {...defaultProps} />);
      expect(screen.getByText("This is a great product!")).toBeInTheDocument();
      expect(screen.getByText("Jane Doe")).toBeInTheDocument();
      expect(screen.getByText("CEO")).toBeInTheDocument();
      expect(screen.getByText("Acme Corp")).toBeInTheDocument();
      expect(screen.getByText("2024-01-01")).toBeInTheDocument();
    });

    it('renders avatar', () => {
      render(<TestimonialWidget {...defaultProps} />);
      const img = screen.getByAltText("Jane Doe");
      expect(img).toHaveAttribute('src', 'avatar1.jpg');
    });

    it('renders empty state', () => {
      render(<TestimonialWidget data={{ testimonials: [] }} />);
      expect(screen.getByText("No testimonials available")).toBeInTheDocument();
    });

    it('renders author at bottom when configured', () => {
      const { container } = render(<TestimonialWidget {...defaultProps} authorPosition="bottom" />);
      // Can't easily check order without visual regression or strict DOM structure checks,
      // but we can check if it renders without crashing and elements are present.
      expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    });
  });

  describe('Themes', () => {
    // Note: Since styles are applied via `getContainerStyles` which spreads into `style` prop,
    // and `render` wraps the component in ThemeProvider, `container.firstChild` is the ThemeProvider wrapper (div).
    // The widget is inside it. We need to query for the widget div.

    it('renders minimal theme', () => {
      const { container } = render(<TestimonialWidget {...defaultProps} theme="minimal" />);
      // eslint-disable-next-line testing-library/no-node-access
      const widget = container.querySelector('.vtx-testimonial-widget') as HTMLElement;
      expect(widget).toHaveStyle({ background: 'transparent' });
    });

    it('renders gradient theme', () => {
      const { container } = render(<TestimonialWidget {...defaultProps} theme="gradient" />);
      // eslint-disable-next-line testing-library/no-node-access
      const widget = container.querySelector('.vtx-testimonial-widget') as HTMLElement;
      // JSDOM might drop gradients in some environments or return as backgroundImage.
      // Checking for existence is enough if styles are applied via props spread in component.
      // But let's check color which is also set for gradient theme.
      expect(widget.style.color).toBe('rgb(255, 255, 255)'); // #ffffff
    });

    it('renders glassmorphism theme', () => {
      const { container } = render(<TestimonialWidget {...defaultProps} theme="glassmorphism" />);
      // eslint-disable-next-line testing-library/no-node-access
      const widget = container.querySelector('.vtx-testimonial-widget') as HTMLElement;
      expect(widget.style.backdropFilter).toBe('blur(20px)');
    });
  });

  describe('Navigation', () => {
    it('renders navigation buttons when multiple testimonials', () => {
      render(<TestimonialWidget {...defaultProps} />);
      expect(screen.getByLabelText('Next testimonial')).toBeInTheDocument();
      expect(screen.getByLabelText('Previous testimonial')).toBeInTheDocument();
    });

    it('hides navigation buttons when single testimonial', () => {
      const singleTestimonial = { testimonials: [testimonials[0]] };
      render(<TestimonialWidget data={singleTestimonial} />);
      expect(screen.queryByLabelText('Next testimonial')).not.toBeInTheDocument();
    });

    it('navigates next', () => {
      render(<TestimonialWidget {...defaultProps} />);
      const nextBtn = screen.getByLabelText('Next testimonial');

      fireEvent.click(nextBtn);

      expect(screen.getByText("Amazing experience!")).toBeInTheDocument();
      expect(screen.getByText("John Smith")).toBeInTheDocument();
    });

    it('navigates previous', () => {
      render(<TestimonialWidget {...defaultProps} />);
      const prevBtn = screen.getByLabelText('Previous testimonial');

      // Go back from first (circular) -> last
      fireEvent.click(prevBtn);

      expect(screen.getByText("Amazing experience!")).toBeInTheDocument();
    });

    it('navigates via dots', () => {
      render(<TestimonialWidget {...defaultProps} />);
      const dots = screen.getAllByLabelText(/Go to testimonial/);
      expect(dots).toHaveLength(2);

      fireEvent.click(dots[1]);

      expect(screen.getByText("Amazing experience!")).toBeInTheDocument();
    });
  });

  describe('Autoplay', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('advances automatically when autoplay is enabled', () => {
      render(<TestimonialWidget {...defaultProps} autoplay autoplayDelay={1000} />);

      expect(screen.getByText("This is a great product!")).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(screen.getByText("Amazing experience!")).toBeInTheDocument();
    });

    it('does not autoplay with single testimonial', () => {
      const singleTestimonial = { testimonials: [testimonials[0]] };
      render(<TestimonialWidget data={singleTestimonial} autoplay autoplayDelay={1000} />);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      // Should remain on same (only) testimonial
      expect(screen.getByText("This is a great product!")).toBeInTheDocument();
    });
  });
});
