"use client";

import React from 'react';
import { Widget, EmptyStateWidget } from '../../Widget';
import type { WidgetConfig } from '../../Widget/types';

/**
 * EmptyStateWidget Examples
 * 
 * This file demonstrates various use cases for the EmptyStateWidget component
 * with different themes, types, and configurations.
 */

// ============================================
// 1. Basic Usage with Widget Component
// ============================================
export const BasicEmptyState = () => {
  const config: WidgetConfig = {
    type: 'emptyState',
    data: {
      type: 'general',
      actions: [
        { label: 'Get Started', icon: 'plus', variant: 'primary' },
      ],
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
    },
  };

  return <Widget config={config} />;
};

// ============================================
// 2. Empty Cart Example
// ============================================
export const EmptyCartExample = () => {
  return (
    <EmptyStateWidget
      data={{
        type: 'cart',
        title: 'Your Shopping Cart is Empty',
        message: 'Looks like you haven\'t added anything to your cart yet.',
        actions: [
          {
            label: 'Browse Products',
            href: '/products',
            icon: 'search',
            variant: 'primary',
          },
          {
            label: 'View Wishlist',
            href: '/wishlist',
            variant: 'outline',
          },
        ],
        additionalInfo: 'Free shipping on orders over $50',
      }}
      settings={{
        theme: 'modern',
        variant: 'primary',
      }}
    />
  );
};

// ============================================
// 3. Search No Results
// ============================================
export const SearchNoResultsExample = () => {
  const [searchTerm, setSearchTerm] = React.useState('react components');

  return (
    <EmptyStateWidget
      data={{
        type: 'search',
        title: `No Results for "${searchTerm}"`,
        message: 'We couldn\'t find any matches. Try different keywords or browse our categories.',
        actions: [
          {
            label: 'Clear Search',
            icon: 'refresh',
            variant: 'primary',
            onClick: () => setSearchTerm(''),
          },
          {
            label: 'Browse All',
            href: '/browse',
            variant: 'outline',
          },
        ],
      }}
      settings={{
        theme: 'professional',
        variant: 'primary',
      }}
    />
  );
};

// ============================================
// 4. Dashboard No Data with Custom Background
// ============================================
export const DashboardNoDataExample = () => {
  return (
    <EmptyStateWidget
      data={{
        type: 'data',
        title: 'No Analytics Data Yet',
        message: 'Start tracking your metrics by connecting your first data source.',
        actions: [
          {
            label: 'Connect Data Source',
            icon: 'plus',
            variant: 'primary',
            onClick: () => console.log('Open connection modal'),
          },
          {
            label: 'View Documentation',
            href: '/docs',
            variant: 'outline',
            external: true,
          },
        ],
      }}
      settings={{
        theme: 'elegant',
        variant: 'primary',
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    />
  );
};

// ============================================
// 5. Notifications Empty (Playful Theme)
// ============================================
export const NotificationsEmptyExample = () => {
  return (
    <EmptyStateWidget
      data={{
        type: 'notification',
        title: 'All Caught Up! 🎉',
        message: 'You have no new notifications. Check back later for updates.',
        actions: [
          {
            label: 'View Archive',
            variant: 'outline',
            onClick: () => console.log('View archive'),
          },
        ],
        additionalInfo: 'Last checked: Just now',
      }}
      settings={{
        theme: 'playful',
        variant: 'primary',
      }}
    />
  );
};

// ============================================
// 6. File Manager Empty
// ============================================
export const FileManagerEmptyExample = () => {
  return (
    <EmptyStateWidget
      data={{
        type: 'file',
        title: 'No Documents Yet',
        message: 'Upload your first document to get started with file management.',
        actions: [
          {
            label: 'Upload Files',
            icon: 'plus',
            variant: 'primary',
            onClick: () => console.log('Open upload dialog'),
          },
          {
            label: 'Create Folder',
            variant: 'outline',
            onClick: () => console.log('Create folder'),
          },
        ],
        additionalInfo: 'Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG',
      }}
      settings={{
        theme: 'professional',
        variant: 'primary',
      }}
    />
  );
};

// ============================================
// 7. Technical Theme (Dark Mode)
// ============================================
export const TechnicalThemeExample = () => {
  return (
    <EmptyStateWidget
      data={{
        type: 'data',
        title: 'No Records Found',
        message: 'The database query returned 0 results. Check your filters or add new entries.',
        actions: [
          {
            label: 'Clear Filters',
            icon: 'refresh',
            variant: 'primary',
            onClick: () => console.log('Clear filters'),
          },
          {
            label: 'Add Record',
            icon: 'plus',
            variant: 'outline',
            onClick: () => console.log('Add record'),
          },
        ],
      }}
      settings={{
        theme: 'technical',
        variant: 'primary',
      }}
    />
  );
};

// ============================================
// 8. Compact Mode (Sidebar/Card)
// ============================================
export const CompactModeExample = () => {
  return (
    <EmptyStateWidget
      data={{
        type: 'notification',
        actions: [
          {
            label: 'Refresh',
            icon: 'refresh',
            variant: 'primary',
          },
        ],
      }}
      settings={{
        theme: 'minimal',
        variant: 'primary',
        compact: true,
      }}
    />
  );
};

// ============================================
// 9. Left Aligned (In Page Section)
// ============================================
export const LeftAlignedExample = () => {
  return (
    <EmptyStateWidget
      data={{
        type: 'data',
        title: 'No Projects Yet',
        message: 'Create your first project to get started.',
        actions: [
          {
            label: 'New Project',
            icon: 'plus',
            variant: 'primary',
          },
        ],
      }}
      settings={{
        theme: 'modern',
        variant: 'primary',
        centered: false,
      }}
    />
  );
};

// ============================================
// 10. Without Illustration (Minimal)
// ============================================
export const WithoutIllustrationExample = () => {
  return (
    <EmptyStateWidget
      data={{
        type: 'search',
        title: 'No Results',
        message: 'Try adjusting your search terms.',
        actions: [
          {
            label: 'Clear Search',
            variant: 'primary',
          },
        ],
      }}
      settings={{
        theme: 'minimal',
        variant: 'primary',
        showIllustration: false,
      }}
    />
  );
};

// ============================================
// 11. Error State (Danger Variant)
// ============================================
export const ErrorStateExample = () => {
  return (
    <EmptyStateWidget
      data={{
        type: 'data',
        title: 'Failed to Load Data',
        message: 'There was an error loading your content. Please try again.',
        actions: [
          {
            label: 'Retry',
            icon: 'refresh',
            variant: 'primary',
          },
          {
            label: 'Contact Support',
            href: '/support',
            variant: 'outline',
          },
        ],
      }}
      settings={{
        theme: 'modern',
        variant: 'danger',
      }}
    />
  );
};

// ============================================
// 12. Multiple Themes Showcase
// ============================================
export const MultipleThemesShowcase = () => {
  const themes = ['minimal', 'modern', 'professional', 'playful', 'technical', 'elegant'] as const;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {themes.map((theme) => (
        <EmptyStateWidget
          key={theme}
          data={{
            type: 'general',
            title: `${theme.charAt(0).toUpperCase() + theme.slice(1)} Theme`,
            message: 'This is an example of the empty state widget.',
            actions: [
              { label: 'Primary Action', variant: 'primary' },
            ],
          }}
          settings={{
            theme,
            variant: 'primary',
          }}
        />
      ))}
    </div>
  );
};

export default {
  BasicEmptyState,
  EmptyCartExample,
  SearchNoResultsExample,
  DashboardNoDataExample,
  NotificationsEmptyExample,
  FileManagerEmptyExample,
  TechnicalThemeExample,
  CompactModeExample,
  LeftAlignedExample,
  WithoutIllustrationExample,
  ErrorStateExample,
  MultipleThemesShowcase,
};
