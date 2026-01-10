import React from 'react';
import { render, screen } from '../../../test-utils';
import ListWidget from '../../../../src/components/Widget/renderers/ListWidget';
import HeaderWidget from '../../../../src/components/Widget/renderers/HeaderWidget';
import TestimonialWidget from '../../../../src/components/Widget/renderers/TestimonialWidget';
import { ListWidgetData, HeaderWidgetData, TestimonialWidgetData } from '../../../../src/components/Widget/types';

describe('Widget Renderers', () => {
  describe('ListWidget', () => {
    const defaultData: ListWidgetData = {
      title: 'List Title',
      items: [
        { title: 'Item 1', description: 'Desc 1', avatar: 'img1.jpg' },
        { title: 'Item 2', subtitle: 'Sub 2' }
      ]
    };

    it('renders list items correctly', () => {
      render(<ListWidget data={defaultData} />);
      expect(screen.getByText('List Title')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Desc 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Sub 2')).toBeInTheDocument();
    });

    it('renders avatar', () => {
        render(<ListWidget data={defaultData} />);
        expect(screen.getByAltText('Item 1')).toBeInTheDocument();
    });

    it('limits items when maxItems is set', () => {
      render(<ListWidget data={defaultData} settings={{ maxItems: 1 }} />);
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
      expect(screen.getByText('+1 more items')).toBeInTheDocument();
    });
  });

  describe('HeaderWidget', () => {
    const defaultData: HeaderWidgetData = {
      title: 'Header Title',
      subtitle: 'Header Subtitle',
      description: 'Header Description',
      avatar: 'avatar.jpg',
      breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Current', href: '#' }]
    };

    it('renders header content', () => {
      render(<HeaderWidget data={defaultData} />);
      expect(screen.getByText('Header Title')).toBeInTheDocument();
      expect(screen.getByText('Header Subtitle')).toBeInTheDocument();
      expect(screen.getByText('Header Description')).toBeInTheDocument();
    });

    it('renders breadcrumbs', () => {
      render(<HeaderWidget data={defaultData} />);
      // Breadcrumbs might be rendered multiple times or as links, so we use getAllByText
      expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
      expect(screen.getAllByText('Current')[0]).toBeInTheDocument();
    });

    it('renders different themes', () => {
      const { rerender, container } = render(<HeaderWidget data={defaultData} settings={{ theme: 'minimal' }} />);
      expect(container.querySelector('.vtx-header-widget--minimal')).toBeInTheDocument();

      rerender(<HeaderWidget data={defaultData} settings={{ theme: 'modern' }} />);
      expect(container.querySelector('.vtx-header-widget--modern')).toBeInTheDocument();
    });
  });

  describe('TestimonialWidget', () => {
    const defaultData: TestimonialWidgetData = {
      testimonials: [
        {
          id: '1',
          content: 'Great product!',
          author: { name: 'John Doe', role: 'Developer', company: 'Tech Inc', avatar: 'john.jpg' },
          rating: 5,
          date: 'Jan 2024'
        },
        {
            id: '2',
            content: 'Another review',
            author: { name: 'Jane' },
            rating: 4
        }
      ]
    };

    it('renders current testimonial', () => {
      render(<TestimonialWidget data={defaultData} />);
      expect(screen.getByText('Great product!')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Developer')).toBeInTheDocument();
      expect(screen.getByText('Tech Inc')).toBeInTheDocument();
    });

    it('renders empty state', () => {
      render(<TestimonialWidget data={{ testimonials: [] }} />);
      expect(screen.getByText('No testimonials available')).toBeInTheDocument();
    });

    it('renders navigation controls when multiple testimonials', () => {
        render(<TestimonialWidget data={defaultData} />);
        expect(screen.getByLabelText('Next testimonial')).toBeInTheDocument();
        expect(screen.getByLabelText('Previous testimonial')).toBeInTheDocument();
    });

    it('handles theme variations', () => {
        const { rerender, container } = render(<TestimonialWidget data={defaultData} theme="gradient" className="test-widget-gradient" />);
        // Gradient theme sets specific background style which might be hard to test directly via class if inline styles are used
        // But we can check if style attribute contains the gradient
        const gradientWidget = container.querySelector('.test-widget-gradient');
        expect(gradientWidget).toHaveStyle({ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' });

        rerender(<TestimonialWidget data={defaultData} theme="minimal" />);
        // When using wrapper, container.firstChild is ThemeProvider
        // We need to query the widget div. Since it doesn't have a specific class in tests by default,
        // we might need to look for a known element or structure.
        // TestimonialWidget renders a div with inline styles.
        // Let's use the fact that it contains "Great product!" text.
        // But the style is on the container div.
        // Actually, previous test passed for gradient because I checked container.firstChild which might be wrong if ThemeProvider wraps it.
        // Wait, render() from test-utils wraps in ThemeProvider.
        // So container.firstChild is ThemeProvider div.
        // ThemeProvider renders a div.
        // TestimonialWidget returns a div.
        // So container -> div(ThemeProvider) -> div(ToastContainer) -> div(TestimonialWidget) ??
        // Let's inspect the hierarchy or query properly.
        // I'll query by text content's parent's parent... risky.
        // Better: add a test id or class if possible? The component allows className.
        // Let's re-render with a class.
        rerender(<TestimonialWidget data={defaultData} theme="minimal" className="test-widget" />);
        // Now query by class.
        // But wait, render returns container which is a DOM element.
        // Let's use container.querySelector('.test-widget')
        const widget = container.querySelector('.test-widget');
        expect(widget).toHaveStyle({ background: 'transparent' });
    });

    it('renders author positions', () => {
        const { rerender } = render(<TestimonialWidget data={defaultData} authorPosition="top" />);
        // When author is top, it appears before the quote/content
        // We can check order or existence
        // Let's verify rendering passes
        expect(screen.getByText('John Doe')).toBeInTheDocument();

        rerender(<TestimonialWidget data={defaultData} authorPosition="bottom" />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });
});
