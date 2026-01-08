/**
 * ErrorPageWidget Usage Examples
 * 
 * Professional error page widget with multiple themes and customization options.
 * Supports 404, 500, 403, 401, 503, and custom error pages.
 */

import { ErrorPageWidget } from '../../Widget';

// ========================================================================
// BASIC USAGE
// ========================================================================

// Simple 404 page with defaults
export const Basic404Example = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      primaryAction: {
        label: 'Go Home',
        href: '/',
        icon: 'home',
      },
    }}
  />
);

// ========================================================================
// DIFFERENT ERROR TYPES
// ========================================================================

// 500 Internal Server Error
export const Error500Example = () => (
  <ErrorPageWidget
    data={{
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
    }}
    settings={{
      theme: 'modern',
      variant: 'danger',
    }}
  />
);

// 403 Forbidden
export const Error403Example = () => (
  <ErrorPageWidget
    data={{
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
    }}
    settings={{
      theme: 'professional',
      variant: 'warning',
    }}
  />
);

// 401 Unauthorized
export const Error401Example = () => (
  <ErrorPageWidget
    data={{
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
    }}
    settings={{
      theme: 'modern',
      variant: 'info',
    }}
  />
);

// ========================================================================
// CUSTOM CONTENT
// ========================================================================

// Custom messages and suggestions
export const CustomContentExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      title: 'Product Not Found',
      message: 'Sorry, this product is no longer available.',
      suggestion: 'Browse our latest collection or search for similar items.',
      primaryAction: {
        label: 'Browse Products',
        href: '/products',
      },
      secondaryAction: {
        label: 'Search',
        href: '/search',
      },
      additionalInfo: 'Need help? Contact our support team at support@example.com',
    }}
    settings={{
      theme: 'modern',
      variant: 'primary',
    }}
  />
);

// ========================================================================
// THEME VARIATIONS
// ========================================================================

// Minimal Theme
export const MinimalThemeExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      primaryAction: {
        label: 'Go Home',
        href: '/',
        icon: 'home',
      },
    }}
    settings={{
      theme: 'minimal',
      variant: 'neutral',
    }}
  />
);

// Modern Theme (Default)
export const ModernThemeExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      primaryAction: {
        label: 'Go Home',
        href: '/',
        icon: 'home',
      },
    }}
    settings={{
      theme: 'modern',
      variant: 'primary',
    }}
  />
);

// Professional Theme
export const ProfessionalThemeExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      primaryAction: {
        label: 'Return Home',
        href: '/',
        icon: 'home',
      },
    }}
    settings={{
      theme: 'professional',
      variant: 'primary',
    }}
  />
);

// Playful Theme
export const PlayfulThemeExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      title: 'Oops! Lost in Space',
      message: "We can't find that page!",
      primaryAction: {
        label: 'Take Me Home',
        href: '/',
        icon: 'home',
      },
    }}
    settings={{
      theme: 'playful',
      variant: 'primary',
    }}
  />
);

// Technical Theme
export const TechnicalThemeExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      title: 'HTTP 404: Resource Not Found',
      message: 'The requested URL was not found on this server.',
      suggestion: 'Check the URL for typos or use navigation.',
      primaryAction: {
        label: '> Return Home',
        href: '/',
        icon: 'home',
      },
      additionalInfo: 'Error ID: ERR_404_NOT_FOUND | Timestamp: 2026-01-08T12:00:00Z',
    }}
    settings={{
      theme: 'technical',
      variant: 'success',
    }}
  />
);

// Elegant Theme
export const ElegantThemeExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      primaryAction: {
        label: 'Home',
        href: '/',
        icon: 'home',
      },
    }}
    settings={{
      theme: 'elegant',
      variant: 'primary',
    }}
  />
);

// ========================================================================
// LAYOUT OPTIONS
// ========================================================================

// Left Aligned
export const LeftAlignedExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      primaryAction: {
        label: 'Go Home',
        href: '/',
        icon: 'home',
      },
    }}
    settings={{
      theme: 'modern',
      variant: 'primary',
      centered: false,
    }}
  />
);

// Without Illustration
export const NoIllustrationExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      primaryAction: {
        label: 'Go Home',
        href: '/',
        icon: 'home',
      },
    }}
    settings={{
      theme: 'modern',
      variant: 'primary',
      showIllustration: false,
    }}
  />
);

// Compact (Not Full Height)
export const CompactExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      primaryAction: {
        label: 'Go Home',
        href: '/',
        icon: 'home',
      },
    }}
    settings={{
      theme: 'minimal',
      variant: 'primary',
      fullHeight: false,
    }}
  />
);

// ========================================================================
// SEARCH NOT FOUND
// ========================================================================

export const SearchNotFoundExample = () => (
  <ErrorPageWidget
    data={{
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
    }}
    settings={{
      theme: 'modern',
      variant: 'info',
    }}
  />
);

// ========================================================================
// MAINTENANCE PAGE
// ========================================================================

export const MaintenanceExample = () => (
  <ErrorPageWidget
    data={{
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
    }}
    settings={{
      theme: 'modern',
      variant: 'warning',
    }}
  />
);

// ========================================================================
// WITH ROUTER INTEGRATION
// ========================================================================

// Example with React Router
export const WithRouterExample = () => {
  const navigate = (path: string) => {
    // Your router navigation logic
    console.log('Navigate to:', path);
  };

  return (
    <ErrorPageWidget
      data={{
        errorCode: '404',
        primaryAction: {
          label: 'Go Home',
          onClick: () => navigate('/'),
          icon: 'home',
        },
        secondaryAction: {
          label: 'Go Back',
          onClick: () => window.history.back(),
          icon: 'back',
        },
      }}
      settings={{
        theme: 'modern',
        variant: 'primary',
      }}
    />
  );
};

// ========================================================================
// CUSTOM BACKGROUNDS
// ========================================================================

// Custom Gradient Background
export const CustomGradientExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      actions: [
        { variant: 'primary', label: 'Go Home', href: '/', icon: 'home' },
      ],
    }}
    settings={{
      theme: 'modern',
      variant: 'primary',
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}
  />
);

// Custom Solid Color
export const CustomSolidColorExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '500',
      actions: [
        { variant: 'danger', label: 'Refresh', onClick: () => window.location.reload(), icon: 'refresh' },
        { variant: 'outline', label: 'Go Home', href: '/', icon: 'home' },
      ],
    }}
    settings={{
      theme: 'professional',
      variant: 'danger',
      backgroundColor: '#fef2f2',
    }}
  />
);

// Dark Custom Background
export const DarkCustomBackgroundExample = () => (
  <ErrorPageWidget
    data={{
      errorCode: '404',
      actions: [
        { variant: 'success', label: 'Return', href: '/', icon: 'home' },
      ],
    }}
    settings={{
      theme: 'technical',
      variant: 'success',
      backgroundColor: 'linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)',
    }}
  />
);

// ========================================================================
// USING WITH WIDGET COMPONENT
// ========================================================================

import { Widget } from '../../Widget';

export const WithWidgetExample = () => (
  <Widget
    config={{
      type: 'errorPage',
      data: {
        errorCode: '404',
        primaryAction: {
          label: 'Go Home',
          href: '/',
          icon: 'home',
        },
      },
      settings: {
        theme: 'modern',
        variant: 'primary',
      },
    }}
  />
);

// ========================================================================
// REAL-WORLD USAGE IN APP
// ========================================================================

// In your App.tsx or routing file
export const AppErrorBoundary = () => {
  return (
    <div>
      {/* Your Router Setup */}
      {/* 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={
          <ErrorPageWidget
            data={{
              errorCode: '404',
              primaryAction: {
                label: 'Go Home',
                href: '/',
                icon: 'home',
              },
            }}
            settings={{
              theme: 'modern',
              variant: 'primary',
            }}
          />
        } />
      </Routes>
      */}
    </div>
  );
};
