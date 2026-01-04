import type { Meta, StoryObj } from '@storybook/react';
import { DashboardCard } from '../../widgets/DashboardCard';
import {
  UserIcon,
  TrendingUpIcon,
  ChartBarIcon,
  WarningIcon,
  InboxIcon
} from '../../icons';

const meta: Meta<typeof DashboardCard> = {
  title: 'Widgets/DashboardCard',
  component: DashboardCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Flexible dashboard card widget with multiple variants for different use cases. Supports e-commerce, HRMS, analytics, and more with strict TypeScript typing based on card type.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DashboardCard>;

// Helper to get icon with theme color
const getIconWithColor = (IconComponent: React.ComponentType<any>, color: string) => (
  <IconComponent size={20} style={{ color }} />
);

// ==================== STAT CARD STORIES ====================

export const StatCardBasic: Story = {
  args: {
    type: 'stat',
    data: {
      label: 'Total Users',
      value: '12,543',
      icon: getIconWithColor(UserIcon, '#2563eb'),
    },
    settings: {
      theme: 'primary',
    },
  },
};

export const StatCardWithTrend: Story = {
  args: {
    type: 'stat',
    data: {
      label: 'Revenue',
      value: '$45,231',
      subtitle: 'Last 30 days',
      icon: getIconWithColor(InboxIcon, '#059669'),
      trend: {
        value: 12.5,
        label: 'vs last month',
        isPositive: true,
      },
    },
    settings: {
      theme: 'success',
      showTrend: true,
      valueSize: 'lg',
    },
  },
};

export const StatCardNegativeTrend: Story = {
  args: {
    type: 'stat',
    data: {
      label: 'Bounce Rate',
      value: '42.8%',
      subtitle: 'Last 7 days',
      icon: getIconWithColor(TrendingUpIcon, '#dc2626'),
      trend: {
        value: -8.3,
        label: 'vs last week',
        isPositive: false,
      },
    },
    settings: {
      theme: 'error',
      showTrend: true,
    },
  },
};

// ==================== PROGRESS CARD STORIES ====================

export const ProgressCardBasic: Story = {
  args: {
    type: 'progress',
    data: {
      label: 'Monthly Sales Goal',
      current: 75000,
      target: 100000,
      unit: '$',
      icon: getIconWithColor(InboxIcon, '#2563eb'),
    },
    settings: {
      theme: 'primary',
      showPercentage: true,
      showValues: true,
      progressType: 'bar',
    },
  },
};

export const ProgressCardOnTrack: Story = {
  args: {
    type: 'progress',
    data: {
      label: 'Q1 Target Achievement',
      current: 850,
      target: 1000,
      unit: 'deals',
      subtitle: '15 days remaining',
      icon: getIconWithColor(TrendingUpIcon, '#059669'),
    },
    settings: {
      theme: 'success',
      showPercentage: true,
      showValues: true,
      status: 'on-track',
    },
  },
};

export const ProgressCardAtRisk: Story = {
  args: {
    type: 'progress',
    data: {
      label: 'Project Completion',
      current: 45,
      target: 100,
      unit: '%',
      subtitle: '3 days overdue',
      icon: getIconWithColor(WarningIcon, '#d97706'),
    },
    settings: {
      theme: 'warning',
      showPercentage: true,
      showValues: true,
      status: 'at-risk',
    },
  },
};

// ==================== COMPARISON CARD STORIES ====================

export const ComparisonCardHorizontal: Story = {
  args: {
    type: 'comparison',
    data: {
      label: 'Traffic Sources',
      items: [
        {
          label: 'Desktop',
          value: '12.5K',
          trend: { value: 15.3, isPositive: true },
          icon: getIconWithColor(ChartBarIcon, '#2563eb'),
        },
        {
          label: 'Mobile',
          value: '8.3K',
          trend: { value: 8.7, isPositive: true },
          icon: getIconWithColor(ChartBarIcon, '#2563eb'),
        },
      ],
    },
    settings: {
      theme: 'primary',
      layout: 'horizontal',
      showTrends: true,
      showDivider: true,
    },
  },
};

export const ComparisonCardVertical: Story = {
  args: {
    type: 'comparison',
    data: {
      label: 'User Engagement',
      items: [
        {
          label: 'New Users',
          value: '3,245',
          trend: { value: 22.5, isPositive: true },
        },
        {
          label: 'Returning Users',
          value: '8,123',
          trend: { value: 5.3, isPositive: true },
        },
      ],
    },
    settings: {
      theme: 'info',
      layout: 'vertical',
      showTrends: true,
    },
  },
};

