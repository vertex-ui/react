import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPageWidget } from '../../components/Widget';
import { ThemeProvider } from '../../theme';

const meta: Meta<typeof ErrorPageWidget> = {
  title: 'Widgets/ErrorPageWidget',
  component: ErrorPageWidget,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ minHeight: '100vh', width: '100%' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Professional error page widget with multiple themes and error types. Includes 404, 500, 403, 401, 503, and search error pages.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorPageWidget>;

// ========================================================================
// 404 ERROR PAGES
// ========================================================================

export const Error404Modern: Story = {
  args: {
    data: {
      errorCode: '404',
      actions: [
        { variant: 'primary', label: 'Back to Home', href: '/', icon: 'home' },
        { variant: 'outline', label: 'Go Back', icon: 'back', onClick: () => window.history.back() },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Modern theme with gradient backgrounds and bold typography.',
      },
    },
  },
};

export const Error404Minimal: Story = {
  args: {
    data: {
      errorCode: '404',
      title: 'Page Not Found',
      message: "We couldn't find the page you're looking for.",
      suggestion: 'The page may have been moved or deleted.',
      actions: [
        { variant: 'primary', label: 'Go Home', href: '/', icon: 'home' },
      ],
    },
    settings: {
      theme: 'minimal',
      variant: 'neutral',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal theme with clean, simple design and subtle colors.',
      },
    },
  },
};

export const Error404Professional: Story = {
  args: {
    data: {
      errorCode: '404',
      actions: [
        { variant: 'primary', label: 'Return Home', href: '/', icon: 'home' },
        { variant: 'secondary', label: 'Contact Support', href: '/support' },
      ],
    },
    settings: {
      theme: 'professional',
      variant: 'primary',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Professional theme suitable for business and corporate applications.',
      },
    },
  },
};

export const Error404Playful: Story = {
  args: {
    data: {
      errorCode: '404',
      title: 'Oops! Lost in Space',
      message: "We can't seem to find that page anywhere!",
      suggestion: "Let's get you back on track.",
      primaryAction: {
        label: 'Take Me Home',
        href: '/',
        icon: 'home',
      },
      secondaryAction: {
        label: 'Go Back',
        icon: 'back',
      },
    },
    settings: {
      theme: 'playful',
      variant: 'primary',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Playful theme with fun, energetic design and vibrant colors.',
      },
    },
  },
};

export const Error404Technical: Story = {
  args: {
    data: {
      errorCode: '404',
      title: 'HTTP 404: Resource Not Found',
      message: 'The requested URL was not found on this server.',
      suggestion: 'Check the URL for typos or use the navigation to find what you need.',
      primaryAction: {
        label: '> Return Home',
        href: '/',
        icon: 'home',
      },
      secondaryAction: {
        label: '> Go Back',
        icon: 'back',
      },
      additionalInfo: 'Error ID: ERR_404_NOT_FOUND | Timestamp: 2026-01-08T12:00:00Z',
    },
    settings: {
      theme: 'technical',
      variant: 'success',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Technical theme with terminal/code-like appearance, perfect for developer tools.',
      },
    },
  },
};

export const Error404Elegant: Story = {
  args: {
    data: {
      errorCode: '404',
      title: 'Page Not Found',
      message: 'The page you are looking for does not exist.',
      suggestion: 'Please check the URL or navigate back to our homepage.',
      primaryAction: {
        label: 'Home',
        href: '/',
        icon: 'home',
      },
      secondaryAction: {
        label: 'Back',
        icon: 'back',
      },
    },
    settings: {
      theme: 'elegant',
      variant: 'primary',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Elegant theme with sophisticated, refined design.',
      },
    },
  },
};

// ========================================================================
// 500 ERROR PAGES
// ========================================================================

export const Error500Modern: Story = {
  args: {
    data: {
      errorCode: '500',
      primaryAction: {
        label: 'Refresh Page',
        onClick: () => window.location.reload(),
        icon: 'refresh',
      },
      secondaryAction: {
        label: 'Go Home',
        href: '/',
        icon: 'home',
      },
    },
    settings: {
      theme: 'modern',
      variant: 'danger',
    },
  },
  parameters: {
    docs: {
      description: {
        story: '500 Internal Server Error with modern theme.',
      },
    },
  },
};

export const Error500Professional: Story = {
  args: {
    data: {
      errorCode: '500',
      title: 'Internal Server Error',
      message: 'An unexpected error occurred on our servers.',
      suggestion: 'Our team has been notified and is working on a fix. Please try again later.',
      primaryAction: {
        label: 'Try Again',
        onClick: () => window.location.reload(),
        icon: 'refresh',
      },
      secondaryAction: {
        label: 'Contact Support',
        href: '/support',
      },
      additionalInfo: 'If this problem persists, please contact our support team with error code: ERR-500-2026-01-08',
    },
    settings: {
      theme: 'professional',
      variant: 'danger',
    },
  },
  parameters: {
    docs: {
      description: {
        story: '500 error with professional theme and additional support information.',
      },
    },
  },
};

// ========================================================================
// 403 FORBIDDEN
// ========================================================================

export const Error403Modern: Story = {
  args: {
    data: {
      errorCode: '403',
      primaryAction: {
        label: 'Go Home',
        href: '/',
        icon: 'home',
      },
      secondaryAction: {
        label: 'Request Access',
        href: '/request-access',
      },
    },
    settings: {
      theme: 'modern',
      variant: 'warning',
    },
  },
  parameters: {
    docs: {
      description: {
        story: '403 Forbidden error indicating access restrictions.',
      },
    },
  },
};

// ========================================================================
// 401 UNAUTHORIZED
// ========================================================================

export const Error401Modern: Story = {
  args: {
    data: {
      errorCode: '401',
      primaryAction: {
        label: 'Sign In',
        href: '/login',
      },
      secondaryAction: {
        label: 'Go Home',
        href: '/',
        icon: 'home',
      },
    },
    settings: {
      theme: 'modern',
      variant: 'info',
    },
  },
  parameters: {
    docs: {
      description: {
        story: '401 Unauthorized error for authentication required pages.',
      },
    },
  },
};

// ========================================================================
// 503 SERVICE UNAVAILABLE
// ========================================================================

export const Error503Modern: Story = {
  args: {
    data: {
      errorCode: '503',
      title: 'Under Maintenance',
      message: "We're currently performing scheduled maintenance.",
      suggestion: "We'll be back online shortly. Thank you for your patience!",
      primaryAction: {
        label: 'Check Status',
        href: '/status',
      },
      secondaryAction: {
        label: 'Refresh',
        onClick: () => window.location.reload(),
        icon: 'refresh',
      },
    },
    settings: {
      theme: 'modern',
      variant: 'warning',
    },
  },
  parameters: {
    docs: {
      description: {
        story: '503 Service Unavailable for maintenance periods.',
      },
    },
  },
};

// ========================================================================
// SEARCH NOT FOUND
// ========================================================================

export const SearchNotFoundModern: Story = {
  args: {
    data: {
      errorCode: 'search',
      title: 'No Results Found',
      message: "We couldn't find anything matching your search.",
      suggestion: 'Try using different keywords or browse our categories.',
      primaryAction: {
        label: 'Browse All',
        href: '/browse',
      },
      secondaryAction: {
        label: 'Clear Search',
        onClick: () => console.log('Clear search'),
      },
    },
    settings: {
      theme: 'modern',
      variant: 'info',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Search results not found page.',
      },
    },
  },
};

// ========================================================================
// CUSTOM ERROR WITH ILLUSTRATION OFF
// ========================================================================

export const CustomErrorNoIllustration: Story = {
  args: {
    data: {
      errorCode: '418',
      title: "I'm a teapot",
      message: 'The server refuses to brew coffee because it is, permanently, a teapot.',
      suggestion: 'This is a joke error code defined in RFC 2324.',
      primaryAction: {
        label: 'Get Coffee Elsewhere',
        href: '/',
      },
    },
    settings: {
      theme: 'playful',
      variant: 'primary',
      showIllustration: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom error code without illustration.',
      },
    },
  },
};

// ========================================================================
// CUSTOM BACKGROUND
// ========================================================================

export const CustomBackground: Story = {
  args: {
    data: {
      errorCode: '404',
      actions: [
        { variant: 'primary', label: 'Go Home', href: '/', icon: 'home' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom gradient background overriding theme default.',
      },
    },
  },
};

export const CustomSolidBackground: Story = {
  args: {
    data: {
      errorCode: '404',
      title: 'Page Not Found',
      message: "We couldn't find this page.",
      actions: [
        { variant: 'primary', label: 'Go Home', href: '/', icon: 'home' },
      ],
    },
    settings: {
      theme: 'minimal',
      variant: 'primary',
      backgroundColor: '#fef3c7',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom solid color background.',
      },
    },
  },
};

export const DarkCustomBackground: Story = {
  args: {
    data: {
      errorCode: '404',
      actions: [
        { variant: 'success', label: 'Return Home', href: '/', icon: 'home' },
      ],
    },
    settings: {
      theme: 'technical',
      variant: 'success',
      backgroundColor: 'linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark gradient background with technical theme.',
      },
    },
  },
};

// ========================================================================
// LEFT ALIGNED
// ========================================================================

export const LeftAligned: Story = {
  args: {
    data: {
      errorCode: '404',
      primaryAction: {
        label: 'Back to Home',
        href: '/',
        icon: 'home',
      },
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
      centered: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Error page with left-aligned content.',
      },
    },
  },
};

// ========================================================================
// COMPACT (NOT FULL HEIGHT)
// ========================================================================

export const Compact: Story = {
  args: {
    data: {
      errorCode: '404',
      title: 'Page Not Found',
      message: "The page you're looking for doesn't exist.",
      primaryAction: {
        label: 'Go Home',
        href: '/',
        icon: 'home',
      },
    },
    settings: {
      theme: 'minimal',
      variant: 'primary',
      fullHeight: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact version without full viewport height, suitable for embedding in layouts.',
      },
    },
  },
};

// ========================================================================
// ALL THEMES COMPARISON
// ========================================================================

export const AllThemesComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Modern Theme</h3>
        <ErrorPageWidget
          data={{
            errorCode: '404',
            primaryAction: { label: 'Go Home', href: '/', icon: 'home' },
          }}
          settings={{ theme: 'modern', variant: 'primary', fullHeight: false }}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Professional Theme</h3>
        <ErrorPageWidget
          data={{
            errorCode: '404',
            primaryAction: { label: 'Go Home', href: '/', icon: 'home' },
          }}
          settings={{ theme: 'professional', variant: 'primary', fullHeight: false }}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Playful Theme</h3>
        <ErrorPageWidget
          data={{
            errorCode: '404',
            title: 'Oops! Lost in Space',
            message: "We can't find that page!",
            primaryAction: { label: 'Take Me Home', href: '/', icon: 'home' },
          }}
          settings={{ theme: 'playful', variant: 'primary', fullHeight: false }}
        />
      </div>

      <div style={{ background: '#000', padding: '20px' }}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center', color: '#fff' }}>Technical Theme</h3>
        <ErrorPageWidget
          data={{
            errorCode: '404',
            title: 'HTTP 404: Not Found',
            message: 'Resource not found on server.',
            primaryAction: { label: '> Home', href: '/', icon: 'home' },
          }}
          settings={{ theme: 'technical', variant: 'success', fullHeight: false }}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Elegant Theme</h3>
        <ErrorPageWidget
          data={{
            errorCode: '404',
            primaryAction: { label: 'Home', href: '/', icon: 'home' },
          }}
          settings={{ theme: 'elegant', variant: 'primary', fullHeight: false }}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Minimal Theme</h3>
        <ErrorPageWidget
          data={{
            errorCode: '404',
            primaryAction: { label: 'Go Home', href: '/', icon: 'home' },
          }}
          settings={{ theme: 'minimal', variant: 'neutral', fullHeight: false }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available themes.',
      },
    },
  },
};
