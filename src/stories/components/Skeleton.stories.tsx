import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonTheme } from '../../components/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ==================== Base Skeleton ====================

export const TextVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="90%" />
    </div>
  ),
};

export const CircularVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="circular" width={60} height={60} />
      <Skeleton variant="circular" width={80} height={80} />
    </div>
  ),
};

export const RectangularVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Skeleton variant="rectangular" width={300} height={200} />
      <Skeleton variant="rectangular" width={250} height={150} />
    </div>
  ),
};

export const RoundedVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Skeleton variant="rounded" width={300} height={200} />
      <Skeleton variant="rounded" width={250} height={150} />
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Wave (default)</h4>
        <Skeleton animation="wave" width="100%" height={60} />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Pulse</h4>
        <Skeleton animation="pulse" width="100%" height={60} />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>None</h4>
        <Skeleton animation="none" width="100%" height={60} />
      </div>
    </div>
  ),
};

// ==================== Website Content Themes ====================

export const CardTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '320px' }}>
      <SkeletonTheme theme="card" />
    </div>
  ),
};

export const ProductTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '320px' }}>
      <SkeletonTheme theme="product" />
    </div>
  ),
};

export const ArticleTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <SkeletonTheme theme="article" />
    </div>
  ),
};

export const BlogPostTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <SkeletonTheme theme="blog-post" />
    </div>
  ),
};

export const ProfileTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <SkeletonTheme theme="profile" />
    </div>
  ),
};

export const CommentTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <SkeletonTheme theme="comment" count={3} />
    </div>
  ),
};

export const ListItemTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '700px', border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden' }}>
      <SkeletonTheme theme="list-item" count={5} />
    </div>
  ),
};

export const TableRowTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '900px', border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden' }}>
      <SkeletonTheme theme="table-row" count={6} />
    </div>
  ),
};

export const FormTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <SkeletonTheme theme="form" />
    </div>
  ),
};

export const HeroTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '1000px', background: '#fafafa', borderRadius: '12px' }}>
      <SkeletonTheme theme="hero" />
    </div>
  ),
};

export const AboutSectionTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <SkeletonTheme theme="about-section" />
    </div>
  ),
};

export const ContentBlockTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <SkeletonTheme theme="content-block" />
    </div>
  ),
};

export const FeatureCardTheme: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px' }}>
      <SkeletonTheme theme="feature-card" />
      <SkeletonTheme theme="feature-card" />
      <SkeletonTheme theme="feature-card" />
    </div>
  ),
};

export const TestimonialTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <SkeletonTheme theme="testimonial" count={2} />
    </div>
  ),
};

export const PricingCardTheme: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1000px' }}>
      <SkeletonTheme theme="pricing-card" />
      <SkeletonTheme theme="pricing-card" />
      <SkeletonTheme theme="pricing-card" />
    </div>
  ),
};

export const StatsTheme: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '1000px' }}>
      <SkeletonTheme theme="stats" />
      <SkeletonTheme theme="stats" />
      <SkeletonTheme theme="stats" />
      <SkeletonTheme theme="stats" />
    </div>
  ),
};

export const TeamMemberTheme: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px' }}>
      <SkeletonTheme theme="team-member" />
      <SkeletonTheme theme="team-member" />
      <SkeletonTheme theme="team-member" />
    </div>
  ),
};

export const GalleryItemTheme: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px' }}>
      <SkeletonTheme theme="gallery-item" />
      <SkeletonTheme theme="gallery-item" />
      <SkeletonTheme theme="gallery-item" />
      <SkeletonTheme theme="gallery-item" />
    </div>
  ),
};

export const VideoCardTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <SkeletonTheme theme="video-card" count={3} />
    </div>
  ),
};

export const OrderCardTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '700px' }}>
      <SkeletonTheme theme="order-card" count={3} />
    </div>
  ),
};

export const OrderConfirmationTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <SkeletonTheme theme="order-confirmation" />
    </div>
  ),
};

export const OrderDetailsTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <SkeletonTheme theme="order-details" />
    </div>
  ),
};

export const ProductGridTheme: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px' }}>
      <SkeletonTheme theme="product-grid" count={6} />
    </div>
  ),
};

// ==================== Real-World Scenarios ====================

export const ECommerceHomePage: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px' }}>
      <h2 style={{ marginBottom: '24px' }}>E-Commerce Home Page Loading</h2>
      
      {/* Hero */}
      <div style={{ marginBottom: '40px' }}>
        <SkeletonTheme theme="hero" />
      </div>

      {/* Featured Products */}
      <h3 style={{ marginBottom: '20px' }}>Featured Products</h3>
      <SkeletonTheme theme="product-grid" count={4} />
    </div>
  ),
};

export const BlogPage: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <h2 style={{ marginBottom: '24px' }}>Blog Post Loading</h2>
      <SkeletonTheme theme="blog-post" />
      
      <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Comments</h3>
      <SkeletonTheme theme="comment" count={4} />
    </div>
  ),
};

export const AboutUsPage: Story = {
  render: () => (
    <div style={{ maxWidth: '1100px' }}>
      <h2 style={{ marginBottom: '24px' }}>About Us Page Loading</h2>
      
      {/* Hero */}
      <div style={{ marginBottom: '40px' }}>
        <SkeletonTheme theme="hero" />
      </div>

      {/* About Content */}
      <div style={{ marginBottom: '40px' }}>
        <SkeletonTheme theme="about-section" />
      </div>

      {/* Team Members */}
      <h3 style={{ marginBottom: '20px' }}>Our Team</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <SkeletonTheme theme="team-member" />
        <SkeletonTheme theme="team-member" />
        <SkeletonTheme theme="team-member" />
        <SkeletonTheme theme="team-member" />
      </div>
    </div>
  ),
};

export const PricingPage: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px' }}>
      <h2 style={{ marginBottom: '24px' }}>Pricing Page Loading</h2>
      
      {/* Hero */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <Skeleton variant="text" width="50%" height={40} style={{ margin: '0 auto' }} />
        <Skeleton variant="text" width="70%" style={{ margin: '16px auto 0' }} />
      </div>

      {/* Pricing Cards */}
      <SkeletonTheme theme="pricing-card" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <SkeletonTheme theme="pricing-card" />
        <SkeletonTheme theme="pricing-card" />
      </div>
    </div>
  ),
};

export const ContactPage: Story = {
  render: () => (
    <div style={{ maxWidth: '1000px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
      <div>
        <h2 style={{ marginBottom: '24px' }}>Contact Information</h2>
        <SkeletonTheme theme="content-block" />
      </div>
      <div>
        <h2 style={{ marginBottom: '24px' }}>Contact Form</h2>
        <SkeletonTheme theme="form" />
      </div>
    </div>
  ),
};

export const DashboardPage: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px' }}>
      <h2 style={{ marginBottom: '24px' }}>Dashboard Loading</h2>
      
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <SkeletonTheme theme="stats" />
        <SkeletonTheme theme="stats" />
        <SkeletonTheme theme="stats" />
        <SkeletonTheme theme="stats" />
      </div>

      {/* Recent Orders */}
      <h3 style={{ marginBottom: '20px' }}>Recent Orders</h3>
      <SkeletonTheme theme="order-card" count={3} />
    </div>
  ),
};

export const UserProfilePage: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <h2 style={{ marginBottom: '24px' }}>User Profile Loading</h2>
      
      <SkeletonTheme theme="profile" />
      
      <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Recent Activity</h3>
      <SkeletonTheme theme="list-item" count={5} />
    </div>
  ),
};

export const PrivacyPolicyPage: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <h2 style={{ marginBottom: '24px' }}>Privacy Policy Loading</h2>
      
      <Skeleton variant="text" width="50%" height={32} />
      <div style={{ marginTop: '24px' }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="95%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="90%" />
      </div>

      <Skeleton variant="text" width="50%" height={24} style={{ marginTop: '32px' }} />
      <div style={{ marginTop: '16px' }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="98%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="85%" />
      </div>

      <Skeleton variant="text" width="50%" height={24} style={{ marginTop: '32px' }} />
      <div style={{ marginTop: '16px' }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="95%" />
        <Skeleton variant="text" width="100%" />
      </div>
    </div>
  ),
};

export const GalleryPage: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px' }}>
      <h2 style={{ marginBottom: '24px' }}>Gallery Loading</h2>
      <SkeletonTheme theme="gallery-item" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonTheme key={i} theme="gallery-item" />
        ))}
      </div>
    </div>
  ),
};
