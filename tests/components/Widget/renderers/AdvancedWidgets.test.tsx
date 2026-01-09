import React from 'react';
import { render, screen } from '../../../test-utils';
import CarouselWidget from '../../../../src/components/Widget/renderers/CarouselWidget';
import ContentBlockWidget from '../../../../src/components/Widget/renderers/ContentBlockWidget';
import GridCarouselWidget from '../../../../src/components/Widget/renderers/GridCarouselWidget';
import { CarouselWidgetData, ContentBlockWidgetData } from '../../../../src/components/Widget/types';

describe('Advanced Widget Renderers', () => {
  describe('CarouselWidget', () => {
    const defaultData: CarouselWidgetData = {
      slides: [
        {
          id: '1',
          image: { src: 'img1.jpg', alt: 'Image 1' },
          caption: { heading: 'Slide 1', description: 'Desc 1', buttonText: 'Click Me' }
        },
        {
          id: '2',
          image: { src: 'img2.jpg', alt: 'Image 2' }
        }
      ]
    };

    it('renders slides correctly', () => {
      render(<CarouselWidget data={defaultData} />);
      expect(screen.getByAltText('Image 1')).toBeInTheDocument();
      expect(screen.getByText('Slide 1')).toBeInTheDocument();
      expect(screen.getByText('Desc 1')).toBeInTheDocument();
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('renders empty state', () => {
      render(<CarouselWidget data={{ slides: [] }} />);
      expect(screen.getByText('No slides available')).toBeInTheDocument();
    });

    it('renders pagination', () => {
        render(<CarouselWidget data={defaultData} settings={{ swiperConfig: { pagination: { enabled: true } } }} />);
        // 2 slides = 2 pagination dots. In the implementation they are buttons
        const dots = screen.getAllByRole('button', { name: /Go to slide/i });
        expect(dots).toHaveLength(2);
    });
  });

  describe('ContentBlockWidget', () => {
    const defaultData: ContentBlockWidgetData = {
      content: {
        heading: 'Content Heading',
        body: 'Content Body',
        eyebrow: 'EYEBROW'
      },
      media: {
        type: 'image',
        src: 'media.jpg',
        alt: 'Media Alt'
      }
    };

    it('renders content and media', () => {
      render(<ContentBlockWidget data={defaultData} />);
      expect(screen.getByText('Content Heading')).toBeInTheDocument();
      expect(screen.getByText('Content Body')).toBeInTheDocument();
      expect(screen.getByText('EYEBROW')).toBeInTheDocument();
      expect(screen.getByAltText('Media Alt')).toBeInTheDocument();
    });

    it('renders list items', () => {
      const listData = {
        ...defaultData,
        content: {
          ...defaultData.content,
          list: [{ text: 'Item 1' }, { text: 'Item 2' }]
        }
      };
      render(<ContentBlockWidget data={listData} />);
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('renders product info', () => {
      const productData = {
        ...defaultData,
        product: {
          price: 99,
          currency: '$',
          rating: 4.5
        }
      };
      render(<ContentBlockWidget data={productData} />);
      expect(screen.getByText('$99')).toBeInTheDocument();
      expect(screen.getByText(/4.5/)).toBeInTheDocument();
    });

    it('renders stats', () => {
        const statData = {
            ...defaultData,
            stats: [
                { label: 'Users', value: '1M' }
            ]
        };
        render(<ContentBlockWidget data={statData} />);
        expect(screen.getByText('Users')).toBeInTheDocument();
        expect(screen.getByText('1M')).toBeInTheDocument();
    });
  });

  describe('GridCarouselWidget', () => {
    const items = [
      <div key="1">Item 1</div>,
      <div key="2">Item 2</div>,
      <div key="3">Item 3</div>
    ];

    it('renders grid items', () => {
      render(<GridCarouselWidget items={items} />);
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('renders empty state', () => {
      render(<GridCarouselWidget items={[]} />);
      expect(screen.getByText('No items to display')).toBeInTheDocument();
    });

    it('renders navigation controls', () => {
      render(<GridCarouselWidget items={items} showNavigation={true} />);
      expect(screen.getByLabelText('Next')).toBeInTheDocument();
      expect(screen.getByLabelText('Previous')).toBeInTheDocument();
    });
  });
});
