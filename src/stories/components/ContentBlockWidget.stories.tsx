import type { Meta, StoryObj } from '@storybook/react';
import type { WidgetConfig } from '../../components/Widget/types';
import { Widget } from '../../components/Widget';

const meta: Meta<typeof Widget> = {
  title: 'Widgets/ContentBlockWidget',
  component: Widget,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Widget>;

// ==================== E-COMMERCE STORIES ====================

export const EcommerceProductShowcase: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'ecommerce',
      data: {
        media: {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
          alt: 'Premium Headphones',
          rounded: 'lg',
          shadow: 'md',
          zoom: true,
          aspectRatio: '1:1',
        },
        content: {
          eyebrow: 'NEW ARRIVAL',
          heading: 'Premium Wireless Headphones',
          headingVariant: 'h2',
          body: 'Experience crystal-clear sound with advanced noise cancellation technology. Perfect for music lovers and professionals.',
          list: [
            { text: 'Active Noise Cancellation', checked: true },
            { text: '40-hour battery life', checked: true },
            { text: 'Premium comfort padding', checked: true },
            { text: 'Bluetooth 5.0 connectivity', checked: true },
          ],
          listType: 'check',
        },
        product: {
          price: 199.99,
          comparePrice: 299.99,
          currency: '$',
          rating: 4.8,
          reviewCount: 1250,
          stock: 'in-stock',
          discount: '33% OFF',
        },
        tags: [
          { text: 'Free Shipping', variant: 'success' },
          { text: 'Best Seller', variant: 'warning' },
        ],
        actions: [
          { label: 'Add to Cart', variant: 'primary', size: 'lg' },
          { label: 'Add to Wishlist', variant: 'outline', size: 'lg' },
        ],
      },
      settings: {
        layout: 'media-left',
        variant: 'card',
        gap: 'xl',
        padding: 'xl',
        hover: { enabled: true, effect: 'lift' },
      },
    } as WidgetConfig,
  },
};

export const EcommerceProductGrid: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'ecommerce',
      data: {
        media: {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
          alt: 'Watch',
          rounded: 'md',
          aspectRatio: '4:3',
        },
        content: {
          heading: 'Luxury Smart Watch',
          headingVariant: 'h4',
          body: 'Combines classic design with modern technology',
        },
        product: {
          price: 399,
          currency: '$',
          rating: 4.6,
          reviewCount: 324,
        },
        tags: [{ text: 'Premium', variant: 'warning' }],
        actions: [
          { label: 'Buy Now', variant: 'primary', fullWidth: true },
        ],
      },
      settings: {
        layout: 'media-top',
        variant: 'card',
        gap: 'md',
        padding: 'lg',
        hover: { enabled: true, effect: 'lift', mediaZoom: true },
      },
    } as WidgetConfig,
  },
};

export const EcommerceCategoryBanner: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'hero',
      data: {
        media: {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
          alt: 'Fashion Collection',
        },
        content: {
          eyebrow: 'WINTER COLLECTION 2026',
          heading: 'Discover Your Style',
          headingVariant: 'h1',
          body: 'Explore our latest winter collection with exclusive designs and premium quality.',
        },
        actions: [
          { label: 'Shop Now', variant: 'primary', size: 'lg' },
          { label: 'Learn More', variant: 'outline', size: 'lg' },
        ],
        colors: {
          heading: '#ffffff',
          body: '#f0f0f0',
        },
      },
      settings: {
        layout: 'media-background',
        overlay: {
          enabled: true,
          color: 'rgba(0, 0, 0, 0.4)',
          opacity: 1,
        },
        padding: 'xl',
      },
    } as WidgetConfig,
  },
};

// ==================== BLOG/EDITORIAL STORIES ====================

export const BlogFeaturedPost: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'editorial',
      data: {
        media: {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
          alt: 'Blog Post',
          rounded: 'lg',
          aspectRatio: '16:9',
        },
        content: {
          eyebrow: 'DESIGN',
          heading: '10 Essential UI Design Principles for 2026',
          headingVariant: 'h2',
          body: 'Learn the fundamental principles that every designer should know to create stunning and user-friendly interfaces.',
        },
        author: {
          name: 'Jane Doe',
          role: 'Senior Designer',
          company: 'DesignCo',
          avatar: 'https://i.pravatar.cc/150?img=5',
        },
        metadata: [
          { label: 'Published', value: 'Jan 2, 2026' },
          { label: 'Read time', value: '5 min' },
          { label: 'Category', value: 'Design' },
        ],
        tags: [
          { text: 'UI Design', variant: 'primary' },
          { text: 'Tutorial', variant: 'secondary' },
        ],
        actions: [
          { label: 'Read Article', variant: 'primary' },
          { label: 'Bookmark', variant: 'ghost' },
        ],
      },
      settings: {
        layout: 'media-top',
        variant: 'card',
        gap: 'lg',
        padding: 'xl',
      },
    } as WidgetConfig,
  },
};

export const BlogQuoteBlock: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'editorial',
      data: {
        media: {
          type: 'avatar',
          src: 'https://i.pravatar.cc/150?img=12',
          alt: 'Author',
          iconSize: 'xl',
        },
        quote: {
          text: 'Design is not just what it looks like and feels like. Design is how it works.',
          author: 'Steve Jobs',
        },
        content: {
          heading: 'On Design Philosophy',
          headingVariant: 'h4',
        },
      },
      settings: {
        layout: 'centered-media-top',
        variant: 'minimal',
        gap: 'lg',
        padding: 'xl',
        contentAlign: 'center',
      },
    } as WidgetConfig,
  },
};

// ==================== SERVICE/AGENCY STORIES ====================

export const ServiceFeatureHighlight: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'professional',
      data: {
        media: {
          type: 'icon',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="var(--color-primary)"/>
            </svg>
          ),
          iconSize: 'xl',
        },
        content: {
          heading: 'Lightning Fast Performance',
          headingVariant: 'h3',
          body: 'Our optimized infrastructure ensures your applications run at peak performance with minimal latency.',
          list: [
            { text: 'Sub-100ms response times', checked: true },
            { text: 'Global CDN distribution', checked: true },
            { text: 'Auto-scaling capabilities', checked: true },
            { text: '99.99% uptime guarantee', checked: true },
          ],
          listType: 'check',
        },
        actions: [
          { label: 'Learn More', variant: 'primary' },
        ],
      },
      settings: {
        layout: 'media-left',
        variant: 'bordered',
        gap: 'lg',
        padding: 'xl',
        border: 'left',
        mediaWidth: '30%',
      },
    } as WidgetConfig,
  },
};

export const ServiceTeamMember: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'professional',
      data: {
        media: {
          type: 'avatar',
          src: 'https://i.pravatar.cc/300?img=33',
          alt: 'John Smith',
          iconSize: 'xl',
        },
        content: {
          heading: 'John Smith',
          headingVariant: 'h3',
          subheading: 'Chief Technology Officer',
          body: '15+ years of experience in software architecture and engineering leadership. Passionate about building scalable systems.',
        },
        author: {
          name: 'John Smith',
          role: 'CTO',
          company: 'TechCorp',
          social: [
            { platform: 'LinkedIn', url: '#', icon: '💼' },
            { platform: 'Twitter', url: '#', icon: '🐦' },
            { platform: 'GitHub', url: '#', icon: '🔗' },
          ],
        },
      },
      settings: {
        layout: 'media-top',
        variant: 'card',
        gap: 'md',
        padding: 'lg',
        contentAlign: 'center',
        hover: { enabled: true, effect: 'lift' },
      },
    } as WidgetConfig,
  },
};

export const ServiceAboutUs: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'professional',
      data: {
        media: {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
          alt: 'Our Team',
          rounded: 'lg',
          shadow: 'lg',
        },
        content: {
          eyebrow: 'ABOUT US',
          heading: 'Building the Future Together',
          headingVariant: 'h2',
          body: 'We are a passionate team of innovators dedicated to creating cutting-edge solutions that transform businesses and improve lives.',
        },
        stats: [
          { value: '10+', label: 'Years Experience' },
          { value: '500+', label: 'Happy Clients' },
          { value: '50+', label: 'Team Members' },
          { value: '1000+', label: 'Projects Delivered' },
        ],
        actions: [
          { label: 'Meet the Team', variant: 'primary' },
          { label: 'Our Story', variant: 'outline' },
        ],
      },
      settings: {
        layout: 'media-right',
        variant: 'minimal',
        gap: 'xl',
        padding: 'xl',
        mediaWidth: '50%',
      },
    } as WidgetConfig,
  },
};

export const ServiceProcessStep: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'modern',
      data: {
        media: {
          type: 'icon',
          icon: (
            <div style={{ 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}>
              1
            </div>
          ),
          iconSize: 'lg',
        },
        content: {
          heading: 'Discovery & Planning',
          headingVariant: 'h3',
          body: 'We start by understanding your business goals, target audience, and project requirements through in-depth consultations.',
          list: [
            { text: 'Stakeholder interviews', icon: '✓' },
            { text: 'Market research', icon: '✓' },
            { text: 'Requirement analysis', icon: '✓' },
          ],
          listType: 'icon',
        },
      },
      settings: {
        layout: 'media-left',
        variant: 'minimal',
        gap: 'lg',
        padding: 'md',
        mediaWidth: '20%',
      },
    } as WidgetConfig,
  },
};

// ==================== SAAS/TECH STORIES ====================

export const SaaSFeature: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'modern',
      data: {
        media: {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
          alt: 'Analytics Dashboard',
          rounded: 'lg',
          shadow: 'md',
        },
        content: {
          eyebrow: 'ANALYTICS',
          heading: 'Real-time Analytics Dashboard',
          headingVariant: 'h2',
          body: 'Get instant insights into your business performance with our powerful analytics platform.',
          list: [
            { text: 'Real-time data updates', checked: true },
            { text: 'Customizable dashboards', checked: true },
            { text: 'Advanced filtering & segmentation', checked: true },
            { text: 'Export & scheduling', checked: true },
          ],
          listType: 'check',
        },
        tags: [
          { text: 'NEW', variant: 'success' },
          { text: 'Pro Feature', variant: 'warning' },
        ],
        actions: [
          { label: 'Try for Free', variant: 'primary', size: 'lg' },
          { label: 'Watch Demo', variant: 'ghost', size: 'lg' },
        ],
      },
      settings: {
        layout: 'media-right',
        variant: 'minimal',
        gap: 'xl',
        padding: 'xl',
        mediaWidth: '50%',
      },
    } as WidgetConfig,
  },
};

export const SaaSPricingCard: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'modern',
      data: {
        media: {
          type: 'icon',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="var(--color-warning)" stroke="var(--color-warning)" strokeWidth="2"/>
            </svg>
          ),
          iconSize: 'lg',
        },
        content: {
          eyebrow: 'MOST POPULAR',
          heading: 'Professional Plan',
          headingVariant: 'h3',
          body: 'Perfect for growing teams and businesses',
          list: [
            { text: 'Unlimited projects', checked: true },
            { text: 'Advanced analytics', checked: true },
            { text: 'Priority support', checked: true },
            { text: 'Custom integrations', checked: true },
            { text: 'Team collaboration', checked: true },
          ],
          listType: 'check',
        },
        product: {
          price: 49,
          currency: '$',
        },
        actions: [
          { label: 'Start Free Trial', variant: 'primary', fullWidth: true, size: 'lg' },
          { label: 'Contact Sales', variant: 'ghost', fullWidth: true },
        ],
      },
      settings: {
        layout: 'centered-media-top',
        variant: 'elevated',
        gap: 'lg',
        padding: 'xl',
        contentAlign: 'center',
        rounded: 'lg',
        hover: { enabled: true, effect: 'lift' },
      },
    } as WidgetConfig,
  },
};

export const SaaSCustomerTestimonial: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'modern',
      data: {
        media: {
          type: 'avatar',
          src: 'https://i.pravatar.cc/150?img=45',
          alt: 'Customer',
          iconSize: 'lg',
        },
        quote: {
          text: 'This platform has completely transformed how we manage our projects. The team collaboration features are game-changing!',
          author: 'Sarah Johnson',
        },
        author: {
          name: 'Sarah Johnson',
          role: 'Product Manager',
          company: 'TechStartup Inc.',
        },
        stats: [
          { value: '200%', label: 'Productivity Increase' },
          { value: '50hrs', label: 'Saved per Month' },
        ],
      },
      settings: {
        layout: 'media-left',
        variant: 'card',
        gap: 'lg',
        padding: 'xl',
        mediaWidth: '25%',
      },
    } as WidgetConfig,
  },
};

// ==================== PORTFOLIO STORIES ====================

export const PortfolioProject: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'creative',
      data: {
        media: {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
          alt: 'Project Screenshot',
          rounded: 'lg',
          shadow: 'xl',
          zoom: true,
        },
        content: {
          eyebrow: 'WEB DESIGN',
          heading: 'E-Commerce Platform Redesign',
          headingVariant: 'h2',
          body: 'A complete redesign of a major e-commerce platform focusing on user experience and conversion optimization.',
        },
        tags: [
          { text: 'UI/UX Design', variant: 'primary' },
          { text: 'Frontend Dev', variant: 'secondary' },
          { text: 'React', variant: 'info' },
        ],
        metadata: [
          { label: 'Client', value: 'RetailCorp' },
          { label: 'Year', value: '2026' },
          { label: 'Duration', value: '6 months' },
        ],
        actions: [
          { label: 'View Case Study', variant: 'primary' },
          { label: 'Live Preview', variant: 'outline' },
        ],
      },
      settings: {
        layout: 'media-top',
        variant: 'card',
        gap: 'lg',
        padding: 'xl',
        hover: { enabled: true, effect: 'lift', mediaZoom: true },
      },
    } as WidgetConfig,
  },
};

// ==================== CALL-TO-ACTION STORIES ====================

export const CTABanner: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'hero',
      data: {
        content: {
          heading: 'Ready to Get Started?',
          headingVariant: 'h1',
          body: 'Join thousands of businesses already using our platform to accelerate their growth.',
        },
        stats: [
          { value: '10K+', label: 'Active Users' },
          { value: '99.9%', label: 'Uptime' },
          { value: '24/7', label: 'Support' },
        ],
        actions: [
          { label: 'Start Free Trial', variant: 'primary', size: 'lg' },
          { label: 'Schedule Demo', variant: 'outline', size: 'lg' },
        ],
      },
      settings: {
        layout: 'centered',
        variant: 'elevated',
        gap: 'xl',
        padding: '2xl',
        contentAlign: 'center',
        background: {
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        rounded: 'xl',
      },
    } as WidgetConfig,
  },
};

// ==================== COMPLEX LAYOUTS ====================

export const SplitLayoutFeature: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'modern',
      data: {
        media: {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
          alt: 'Coding',
          rounded: false,
          objectFit: 'cover',
        },
        content: {
          heading: 'Built for Developers',
          headingVariant: 'h2',
          body: 'A powerful API and SDK that gives you complete control over your application.',
          list: [
            { text: 'RESTful API with comprehensive docs', icon: '🚀' },
            { text: 'SDKs for all major languages', icon: '💻' },
            { text: 'Webhooks for real-time events', icon: '⚡' },
            { text: 'GraphQL support', icon: '📊' },
          ],
          listType: 'icon',
        },
        actions: [
          { label: 'View Documentation', variant: 'primary' },
          { label: 'API Reference', variant: 'outline' },
        ],
      },
      settings: {
        layout: 'split-equal',
        variant: 'minimal',
        gap: '2xl',
        padding: '2xl',
        verticalAlign: 'center',
      },
    } as WidgetConfig,
  },
};

export const SidebarLayout: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'editorial',
      data: {
        media: {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
          alt: 'Related Content',
          rounded: 'md',
          aspectRatio: '1:1',
        },
        content: {
          heading: 'Main Article Content',
          headingVariant: 'h2',
          body: 'This is the main content area. The sidebar on the right contains related information, ads, or supplementary content.',
          list: [
            { text: 'Key point one', icon: '•' },
            { text: 'Key point two', icon: '•' },
            { text: 'Key point three', icon: '•' },
          ],
          listType: 'icon',
        },
      },
      settings: {
        layout: 'sidebar-right',
        variant: 'minimal',
        gap: 'xl',
        padding: 'lg',
      },
    } as WidgetConfig,
  },
};

// ==================== REAL ESTATE STORY ====================

export const RealEstateProperty: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'luxury',
      data: {
        media: {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
          alt: 'Luxury Home',
          rounded: 'lg',
          shadow: 'lg',
          aspectRatio: '16:9',
        },
        content: {
          eyebrow: 'LUXURY ESTATE',
          heading: 'Modern Waterfront Villa',
          headingVariant: 'h2',
          body: 'Spectacular 5-bedroom villa with panoramic ocean views, infinity pool, and private beach access.',
        },
        product: {
          price: '2,500,000',
          currency: '$',
        },
        metadata: [
          { label: 'Bedrooms', value: '5', icon: '🛏️' },
          { label: 'Bathrooms', value: '4', icon: '🚿' },
          { label: 'Area', value: '4,500 sq ft', icon: '📐' },
          { label: 'Location', value: 'Miami Beach, FL', icon: '📍' },
        ],
        tags: [
          { text: 'Waterfront', variant: 'info' },
          { text: 'Pool', variant: 'success' },
          { text: 'New Listing', variant: 'danger' },
        ],
        actions: [
          { label: 'Schedule Tour', variant: 'primary', size: 'lg' },
          { label: 'Save Property', variant: 'outline', size: 'lg' },
        ],
      },
      settings: {
        layout: 'media-top',
        variant: 'card',
        gap: 'lg',
        padding: 'xl',
        rounded: 'lg',
        hover: { enabled: true, effect: 'lift' },
      },
    } as WidgetConfig,
  },
};

// ==================== MINIMAL & COMPACT STORIES ====================

export const MinimalInfoCard: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'minimal',
      data: {
        media: {
          type: 'icon',
          icon: '🎯',
          iconSize: 'md',
        },
        content: {
          heading: 'Our Mission',
          headingVariant: 'h4',
          body: 'To empower businesses with innovative technology solutions that drive growth and success.',
        },
      },
      settings: {
        layout: 'media-left',
        variant: 'minimal',
        gap: 'md',
        padding: 'md',
        mediaWidth: '20%',
      },
    } as WidgetConfig,
  },
};

export const CompactFeatureList: Story = {
  args: {
    config: {
      type: 'contentBlock',
      theme: 'compact',
      data: {
        content: {
          heading: 'Key Features',
          headingVariant: 'h5',
          list: [
            { text: 'Drag & drop builder', checked: true },
            { text: 'Custom templates', checked: true },
            { text: 'Real-time preview', checked: true },
            { text: 'Export anywhere', checked: true },
          ],
          listType: 'check',
        },
      },
      settings: {
        layout: 'centered',
        variant: 'bordered',
        gap: 'sm',
        padding: 'md',
        rounded: 'md',
      },
    } as WidgetConfig,
  },
};
