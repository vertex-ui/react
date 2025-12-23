import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from '../../components/Widget';
import { CarouselWidgetData } from '../../components/Widget/types';

const meta: Meta<typeof Widget> = {
  title: 'Widgets/CarouselWidget',
  component: Widget,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    config: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Widget>;

const sampleSlides = [
  {
    id: '1',
    image: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Beautiful mountain landscape',
      priority: true,
    },
    caption: {
      heading: 'Discover Nature',
      subheading: 'Breathtaking Mountain Views',
      description: 'Experience the beauty of untouched nature with our guided tours to the most spectacular mountain ranges.',
      buttonText: 'Book Tour',
      buttonUrl: 'https://example.com/book',
      position: 'right' as const,
    },
    seo: {
      structuredData: {
        '@type': 'ImageObject',
        contentUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      },
    },
  },
  {
    id: '2',
    image: {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Modern city skyline at sunset',
    },
    caption: {
      heading: 'Urban Adventure',
      subheading: 'City Life Awaits',
      description: 'Explore vibrant cityscapes and modern architecture.',
      buttonText: 'Explore Cities',
      buttonUrl: 'https://example.com/cities',
      position: 'center' as const,
    },
  },
  {
    id: '3',
    image: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Peaceful beach sunset',
    },
    caption: {
      heading: 'Relax & Unwind',
      subheading: 'Beach Paradise',
      description: 'Find peace and tranquility on pristine sandy beaches.',
      buttonText: 'Beach Resorts',
      buttonUrl: 'https://example.com/beaches',
      position: 'left' as const,
    },
  },
];

export const Default: Story = {
  args: {
    config: {
      type: 'carousel',
      theme: 'modern',
      variant: 'primary',
      data: {
        slides: sampleSlides,
        swiperConfig: {
          navigation: { enabled: true },
          pagination: { enabled: true, clickable: true },
          autoplay: { enabled: true, delay: 4000, pauseOnMouseEnter: true },
          loop: true,
        },
        overlayTheme: 'dark',
        height: '60vh',
        minHeight: '400px',
        maxHeight: '600px',
        showOverlay: true,
      } as CarouselWidgetData,
    },
  },
};

export const WithLightOverlay: Story = {
  args: {
    config: {
      type: 'carousel',
      theme: 'modern',
      variant: 'primary',
      data: {
        slides: sampleSlides,
        swiperConfig: {
          navigation: { enabled: true },
          pagination: { enabled: true, clickable: true },
          autoplay: { enabled: false },
          loop: true,
        },
        overlayTheme: 'light',
        height: '50vh',
        minHeight: '350px',
        maxHeight: '500px',
        showOverlay: true,
      } as CarouselWidgetData,
    },
  },
};

export const NoOverlay: Story = {
  args: {
    config: {
      type: 'carousel',
      theme: 'modern',
      variant: 'primary',
      data: {
        slides: sampleSlides,
        swiperConfig: {
          navigation: { enabled: true },
          pagination: { enabled: true, clickable: true },
          autoplay: { enabled: false },
          loop: true,
        },
        overlayTheme: 'dark',
        height: '45vh',
        minHeight: '300px',
        maxHeight: '450px',
        showOverlay: false,
      } as CarouselWidgetData,
    },
  },
};

export const MinimalNavigation: Story = {
  args: {
    config: {
      type: 'carousel',
      theme: 'minimal',
      variant: 'primary',
      data: {
        slides: sampleSlides,
        swiperConfig: {
          navigation: { enabled: false },
          pagination: { enabled: true, clickable: true },
          autoplay: { enabled: true, delay: 3000 },
          loop: true,
        },
        overlayTheme: 'dark',
        height: '40vh',
        minHeight: '300px',
        maxHeight: '400px',
        showOverlay: true,
      } as CarouselWidgetData,
    },
  },
};

export const SingleSlide: Story = {
  args: {
    config: {
      type: 'carousel',
      theme: 'modern',
      variant: 'primary',
      data: {
        slides: [sampleSlides[0]],
        swiperConfig: {
          navigation: { enabled: false },
          pagination: { enabled: false },
          autoplay: { enabled: false },
          loop: false,
        },
        overlayTheme: 'dark',
        height: '50vh',
        minHeight: '400px',
        maxHeight: '600px',
        showOverlay: true,
      } as CarouselWidgetData,
    },
  },
};

// Example with custom carousel component (Swiper.js)
export const WithSwiperComponent: Story = {
  parameters: {
    docs: {
      description: {
        story: `
This example shows how to use the CarouselWidget with a custom carousel library like Swiper.js:

\`\`\`tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

<Widget
  config={{
    type: 'carousel',
    data: {
      slides: [...],
      // ... other config
    }
  }}
  carouselComponent={Swiper}
  slideComponent={SwiperSlide}
  carouselProps={{
    modules: [Navigation, Pagination, Autoplay],
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 3000 },
  }}
  imageComponent={NextImage} // or any other Image component
  imageProps={{ priority: true }}
/>
\`\`\`
        `,
      },
    },
  },
  args: {
    config: {
      type: 'carousel',
      theme: 'modern',
      variant: 'primary',
      data: {
        slides: sampleSlides,
        overlayTheme: 'dark',
        height: '60vh',
        minHeight: '400px',
        maxHeight: '600px',
        showOverlay: true,
      } as CarouselWidgetData,
    },
  },
};