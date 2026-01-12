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

    it('renders different layouts', () => {
        const { rerender, container } = render(<ContentBlockWidget data={defaultData} settings={{ layout: 'media-right' }} />);
        expect(container.querySelector('.vtx-content-block--media-right')).toBeInTheDocument();

        rerender(<ContentBlockWidget data={defaultData} settings={{ layout: 'centered' }} />);
        expect(container.querySelector('.vtx-content-block--centered')).toBeInTheDocument();

        rerender(<ContentBlockWidget data={defaultData} settings={{ layout: 'media-background', overlay: { enabled: true } }} />);
        expect(container.querySelector('.vtx-content-block--media-background')).toBeInTheDocument();
    });

    it('renders different media types', () => {
        const avatarData = { ...defaultData, media: { type: 'avatar' as const, src: 'avatar.jpg' } };
        const { rerender } = render(<ContentBlockWidget data={avatarData} />);
        // Avatar component renders a wrapper div with role="img" which has vtx-avatar class
        // The image inside has vtx-avatar-image but might not be the direct target of getByRole('img')
        // Actually Avatar component structure: <div role="img" class="vtx-avatar..."><img class="vtx-avatar-image"...></div>
        // So getByRole('img') returns the wrapper.
        expect(screen.getByRole('img')).toHaveClass('vtx-avatar');

        const galleryData = { ...defaultData, media: { type: 'gallery' as const, items: [{ src: 'g1.jpg' }] } };
        rerender(<ContentBlockWidget data={galleryData} />);
        // Gallery renders multiple images.
        const images = screen.getAllByRole('img');
        // Filter out any potential other images if any, but in isolation should be just the gallery items
        // Gallery items are simple <img> tags, so they have implicit role="img"
        expect(images[0]).toHaveAttribute('src', 'g1.jpg');
    });
  });

  describe('GridCarouselWidget', () => {
    const items = [
      <div key="1">Item 1</div>,
      <div key="2">Item 2</div>,
      <div key="3">Item 3</div>
    ];

    // GridCarouselWidget expects { data: { theme: 'base', items: [...] }, settings: ... }
    const baseData = { theme: 'base', items };

    it('renders grid items', () => {
      render(<GridCarouselWidget data={baseData} />);
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('renders empty state', () => {
      render(<GridCarouselWidget data={{ theme: 'base', items: [] }} />);
      expect(screen.getByText('No items to display')).toBeInTheDocument();
    });

    it('renders navigation controls', () => {
      render(<GridCarouselWidget data={baseData} settings={{ showNavigation: true }} />);
      expect(screen.getByLabelText('Next')).toBeInTheDocument();
      expect(screen.getByLabelText('Previous')).toBeInTheDocument();
    });
  });
});
