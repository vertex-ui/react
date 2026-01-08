import type { Meta, StoryObj } from '@storybook/react';
import { EmptyStateWidget } from '../../components/Widget';

const meta = {
  title: 'Widgets/EmptyStateWidget',
  component: EmptyStateWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyStateWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Basic Examples by Type
// ============================================

export const General: Story = {
  args: {
    data: {
      type: 'general',
      actions: [
        { label: 'Get Started', icon: 'plus', variant: 'primary' },
        { label: 'Learn More', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
};

export const NoSearchResults: Story = {
  args: {
    data: {
      type: 'search',
      actions: [
        { label: 'Clear Search', icon: 'refresh', variant: 'primary' },
        { label: 'Browse All', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
};

export const NoData: Story = {
  args: {
    data: {
      type: 'data',
      actions: [
        { label: 'Add Entry', icon: 'plus', variant: 'primary' },
        { label: 'Import Data', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
};

export const NoNotifications: Story = {
  args: {
    data: {
      type: 'notification',
      actions: [
        { label: 'View Settings', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
};

export const EmptyCart: Story = {
  args: {
    data: {
      type: 'cart',
      actions: [
        { label: 'Browse Products', icon: 'search', variant: 'primary' },
        { label: 'View Wishlist', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
};

export const NoFiles: Story = {
  args: {
    data: {
      type: 'file',
      actions: [
        { label: 'Upload Files', icon: 'plus', variant: 'primary' },
        { label: 'Create Document', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
};

// ============================================
// Theme Examples
// ============================================

export const MinimalTheme: Story = {
  args: {
    data: {
      type: 'search',
      actions: [
        { label: 'Try Again', icon: 'refresh', variant: 'primary' },
      ],
    },
    settings: {
      theme: 'minimal',
      variant: 'primary',
    },
  },
};

export const ModernTheme: Story = {
  args: {
    data: {
      type: 'cart',
      actions: [
        { label: 'Start Shopping', icon: 'search', variant: 'primary' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
};

export const ProfessionalTheme: Story = {
  args: {
    data: {
      type: 'data',
      actions: [
        { label: 'Add Data', icon: 'plus', variant: 'primary' },
        { label: 'Import', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'professional',
      variant: 'primary',
    },
  },
};

export const PlayfulTheme: Story = {
  args: {
    data: {
      type: 'notification',
      actions: [
        { label: 'Explore', icon: 'search', variant: 'primary' },
      ],
    },
    settings: {
      theme: 'playful',
      variant: 'primary',
    },
  },
};

export const TechnicalTheme: Story = {
  args: {
    data: {
      type: 'data',
      title: 'No Records Found',
      message: 'The database query returned 0 results. Check your filters or add new entries.',
      actions: [
        { label: 'Clear Filters', icon: 'refresh', variant: 'primary' },
        { label: 'Add Record', icon: 'plus', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'technical',
      variant: 'primary',
    },
  },
};

export const ElegantTheme: Story = {
  args: {
    data: {
      type: 'cart',
      actions: [
        { label: 'Continue Shopping', variant: 'primary' },
      ],
    },
    settings: {
      theme: 'elegant',
      variant: 'primary',
    },
  },
};

// ============================================
// Custom Content
// ============================================

export const CustomContent: Story = {
  args: {
    data: {
      type: 'general',
      title: 'Welcome to Your Dashboard',
      message: 'You haven\'t created any projects yet. Start by creating your first project.',
      actions: [
        { label: 'Create Project', icon: 'plus', variant: 'primary' },
        { label: 'Watch Tutorial', variant: 'outline' },
      ],
      additionalInfo: 'Need help getting started? Check out our documentation.',
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
};

export const WithLinks: Story = {
  args: {
    data: {
      type: 'search',
      title: 'No Products Found',
      message: 'We couldn\'t find any products matching your search criteria.',
      actions: [
        { label: 'Browse All Products', href: '/products', variant: 'primary' },
        { label: 'View Categories', href: '/categories', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'professional',
      variant: 'primary',
    },
  },
};

// ============================================
// Layout Variants
// ============================================

export const LeftAligned: Story = {
  args: {
    data: {
      type: 'data',
      actions: [
        { label: 'Add Entry', icon: 'plus', variant: 'primary' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
      centered: false,
    },
  },
};

export const CompactMode: Story = {
  args: {
    data: {
      type: 'notification',
      actions: [
        { label: 'Refresh', icon: 'refresh', variant: 'primary' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
      compact: true,
    },
  },
};

export const WithoutIllustration: Story = {
  args: {
    data: {
      type: 'search',
      title: 'No Results',
      message: 'Try adjusting your search terms.',
      actions: [
        { label: 'Clear Search', variant: 'primary' },
      ],
    },
    settings: {
      theme: 'minimal',
      variant: 'primary',
      showIllustration: false,
    },
  },
};

// ============================================
// Color Variants
// ============================================

export const DangerVariant: Story = {
  args: {
    data: {
      type: 'data',
      title: 'No Data Available',
      message: 'There was an issue loading your data. Please try again.',
      actions: [
        { label: 'Retry', icon: 'refresh', variant: 'primary' },
        { label: 'Contact Support', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'danger',
    },
  },
};

export const WarningVariant: Story = {
  args: {
    data: {
      type: 'file',
      title: 'No Files Uploaded',
      message: 'Your storage is ready, but no files have been uploaded yet.',
      actions: [
        { label: 'Upload Now', icon: 'plus', variant: 'primary' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'warning',
    },
  },
};

// ============================================
// Custom Background
// ============================================

export const CustomBackground: Story = {
  args: {
    data: {
      type: 'cart',
      actions: [
        { label: 'Start Shopping', icon: 'search', variant: 'primary' },
      ],
    },
    settings: {
      theme: 'elegant',
      variant: 'primary',
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
  },
};

// ============================================
// Real-World Examples
// ============================================

export const EcommerceEmptyCart: Story = {
  args: {
    data: {
      type: 'cart',
      title: 'Your Shopping Cart is Empty',
      message: 'Looks like you haven\'t added anything to your cart yet. Start shopping to add items!',
      actions: [
        { label: 'Browse Products', href: '/products', icon: 'search', variant: 'primary' },
        { label: 'View Wishlist', href: '/wishlist', variant: 'outline' },
      ],
      additionalInfo: 'Free shipping on orders over $50',
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
};

export const DashboardNoData: Story = {
  args: {
    data: {
      type: 'data',
      title: 'No Analytics Data Yet',
      message: 'Start tracking your metrics by connecting your first data source.',
      actions: [
        { label: 'Connect Data Source', icon: 'plus', variant: 'primary' },
        { label: 'View Documentation', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'professional',
      variant: 'primary',
    },
  },
};

export const InboxEmpty: Story = {
  args: {
    data: {
      type: 'notification',
      title: 'All Caught Up! 🎉',
      message: 'You have no new notifications. Check back later for updates.',
      actions: [
        { label: 'View Archive', variant: 'outline' },
      ],
      additionalInfo: 'Last checked: Just now',
    },
    settings: {
      theme: 'playful',
      variant: 'primary',
    },
  },
};

export const SearchNoResults: Story = {
  args: {
    data: {
      type: 'search',
      title: 'No Results for "react components"',
      message: 'We couldn\'t find any matches for your search. Try different keywords or browse our categories.',
      actions: [
        { label: 'Clear Search', icon: 'refresh', variant: 'primary' },
        { label: 'Browse All', href: '/browse', variant: 'outline' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
};

export const FileManagerEmpty: Story = {
  args: {
    data: {
      type: 'file',
      title: 'No Documents Yet',
      message: 'Upload your first document to get started with file management.',
      actions: [
        { label: 'Upload Files', icon: 'plus', variant: 'primary' },
        { label: 'Create Folder', variant: 'outline' },
      ],
      additionalInfo: 'Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG',
    },
    settings: {
      theme: 'professional',
      variant: 'primary',
    },
  },
};
