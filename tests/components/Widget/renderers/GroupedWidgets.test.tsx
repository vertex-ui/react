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
  });
});
