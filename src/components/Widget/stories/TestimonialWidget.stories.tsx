import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { TestimonialWidget } from '..';
import type { TestimonialWidgetData } from '../types';

const meta = {
  title: 'Widgets/TestimonialWidget',
  component: TestimonialWidget,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['minimal', 'card', 'gradient', 'modern', 'professional', 'glassmorphism'],
      description: 'Visual theme of the testimonial slider',
    },
    authorPosition: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Position of author information (top or bottom)',
    },
    autoplay: {
      control: 'boolean',
      description: 'Enable auto-play for testimonials',
    },
    autoplayDelay: {
      control: 'number',
      description: 'Delay between auto-play transitions (in milliseconds)',
    },
    borderRadius: {
      control: 'boolean',
      description: 'Apply border radius to the container',
    },
  },
} satisfies Meta<typeof TestimonialWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample testimonial data
const sampleTestimonials: TestimonialWidgetData = {
  testimonials: [
    {
      id: '1',
      content:
        'This product has completely transformed how we work. The intuitive design and powerful features have saved us countless hours. Highly recommended for any team looking to improve their workflow!',
      author: {
        name: 'Sarah Johnson',
        role: 'Product Manager',
        company: 'TechCorp Inc.',
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
      rating: 5,
      date: 'December 2025',
    },
    {
      id: '2',
      content:
        'Outstanding service and support! The team went above and beyond to ensure our success. The platform is robust, scalable, and exactly what we needed.',
      author: {
        name: 'Michael Chen',
        role: 'CTO',
        company: 'StartupXYZ',
        avatar: 'https://i.pravatar.cc/150?img=12',
      },
      rating: 5,
      date: 'November 2025',
    },
    {
      id: '3',
      content:
        'A game-changer for our business. The ROI was evident within the first month. The analytics and insights have helped us make better decisions.',
      author: {
        name: 'Emily Rodriguez',
        role: 'Marketing Director',
        company: 'Growth Co.',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
      rating: 5,
      date: 'October 2025',
    },
  ],
  showNavigation: true,
  showDots: true,
};

export const CardTheme: Story = {
  args: {
    data: sampleTestimonials,
    theme: 'card',
    borderRadius: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Sarah Johnson')).toBeInTheDocument();
    await expect(canvas.getByText(/completely transformed/)).toBeInTheDocument();
  },
};

export const MinimalTheme: Story = {
  args: {
    data: sampleTestimonials,
    theme: 'minimal',
    borderRadius: false,
  },
};

export const GradientTheme: Story = {
  args: {
    data: sampleTestimonials,
    theme: 'gradient',
    borderRadius: true,
  },
};

export const ModernTheme: Story = {
  args: {
    data: sampleTestimonials,
    theme: 'modern',
    borderRadius: true,
  },
};

export const ProfessionalTheme: Story = {
  args: {
    data: sampleTestimonials,
    theme: 'professional',
    borderRadius: true,
  },
};

export const GlassmorphismTheme: Story = {
  args: {
    data: sampleTestimonials,
    theme: 'glassmorphism',
    borderRadius: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '48px',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const WithAutoplay: Story = {
  args: {
    data: sampleTestimonials,
    theme: 'card',
    autoplay: true,
    autoplayDelay: 3000,
    borderRadius: true,
  },
};

export const WithoutRatings: Story = {
  args: {
    data: {
      testimonials: [
        {
          id: '1',
          content:
            'Simple and effective. This is exactly what we needed for our project.',
          author: {
            name: 'John Doe',
            role: 'Developer',
            company: 'Code Studio',
            avatar: 'https://i.pravatar.cc/150?img=8',
          },
        },
        {
          id: '2',
          content:
            'Great experience working with this platform. Clean interface and powerful features.',
          author: {
            name: 'Jane Smith',
            role: 'Designer',
            company: 'Creative Agency',
            avatar: 'https://i.pravatar.cc/150?img=9',
          },
        },
      ],
      showNavigation: true,
      showDots: true,
    },
    theme: 'professional',
    borderRadius: true,
  },
};

export const SingleTestimonial: Story = {
  args: {
    data: {
      testimonials: [
        {
          id: '1',
          content:
            'This is an amazing product that has helped our company grow exponentially. The support team is responsive and the features are exactly what we needed.',
          author: {
            name: 'Alex Thompson',
            role: 'CEO',
            company: 'Success Ventures',
            avatar: 'https://i.pravatar.cc/150?img=3',
          },
          rating: 5,
          date: 'December 2025',
        },
      ],
      showNavigation: false,
      showDots: false,
    },
    theme: 'card',
    borderRadius: true,
  },
};

export const WithoutNavigation: Story = {
  args: {
    data: {
      ...sampleTestimonials,
      showNavigation: false,
    },
    theme: 'modern',
    autoplay: true,
    autoplayDelay: 4000,
    borderRadius: true,
  },
};

export const Compact: Story = {
  args: {
    data: {
      testimonials: [
        {
          id: '1',
          content: 'Great product, highly recommended!',
          author: {
            name: 'Tom Wilson',
            role: 'Manager',
          },
          rating: 5,
        },
        {
          id: '2',
          content: 'Excellent service and support.',
          author: {
            name: 'Lisa Brown',
            role: 'Consultant',
          },
          rating: 5,
        },
      ],
      showNavigation: true,
      showDots: true,
    },
    theme: 'minimal',
    borderRadius: false,
  },
};

export const AllThemesShowcase: Story = {
  args: {
    data: sampleTestimonials,
    theme: 'card',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>
          Card Theme
        </h3>
        <TestimonialWidget data={sampleTestimonials} theme="card" borderRadius />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>
          Minimal Theme
        </h3>
        <TestimonialWidget data={sampleTestimonials} theme="minimal" />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>
          Gradient Theme
        </h3>
        <TestimonialWidget data={sampleTestimonials} theme="gradient" borderRadius />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>
          Modern Theme
        </h3>
        <TestimonialWidget data={sampleTestimonials} theme="modern" borderRadius />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>
          Professional Theme
        </h3>
        <TestimonialWidget
          data={sampleTestimonials}
          theme="professional"
          borderRadius
        />
      </div>

      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '48px',
          borderRadius: '12px',
        }}
      >
        <h3
          style={{
            marginBottom: '16px',
            fontSize: '20px',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          Glassmorphism Theme
        </h3>
        <TestimonialWidget
          data={sampleTestimonials}
          theme="glassmorphism"
          borderRadius
        />
      </div>
    </div>
  ),
};
