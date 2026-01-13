import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { Widget } from '../../../components/Widget';
import {
  UserIcon,
  TrendingUpIcon,
  ChartBarIcon,
  WarningIcon,
  InboxIcon
} from '../../../icons';

const meta: Meta<typeof Widget> = {
  title: 'Widgets/DashboardCard',
  component: Widget,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Flexible dashboard card widget with multiple variants for different use cases. Supports e-commerce, HRMS, analytics, and more with strict TypeScript typing based on card type. Accessed via the unified `Widget` component.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Widget>;

// Helper to get icon with theme color
const getIconWithColor = (IconComponent: React.ComponentType<any>, color: string) => (
  <IconComponent size={20} style={{ color }} />
);

// ==================== STAT CARD STORIES ====================

export const StatCardBasic: Story = {
  args: {
    config: {
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Total Users')).toBeInTheDocument();
    await expect(canvas.getByText('12,543')).toBeInTheDocument();
  },
};

export const StatCardWithTrend: Story = {
  args: {
    config: {
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Revenue')).toBeInTheDocument();
    await expect(canvas.getByText('$45,231')).toBeInTheDocument();
    await expect(canvas.getByText(/12.5/)).toBeInTheDocument();
    await expect(canvas.getByText(/vs last month/)).toBeInTheDocument();
  },
};

export const StatCardNegativeTrend: Story = {
  args: {
    config: {
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Bounce Rate')).toBeInTheDocument();
    await expect(canvas.getByText('42.8%')).toBeInTheDocument();
    await expect(canvas.getByText(/-8.3/)).toBeInTheDocument();
  },
};

// ==================== PROGRESS CARD STORIES ====================

export const ProgressCardBasic: Story = {
  args: {
    config: {
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Monthly Sales Goal')).toBeInTheDocument();
    await expect(canvas.getByText(/75000/)).toBeInTheDocument();
    await expect(canvas.getByText(/75%/)).toBeInTheDocument();
  },
};

export const ProgressCardOnTrack: Story = {
  args: {
    config: {
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Q1 Target Achievement')).toBeInTheDocument();
    await expect(canvas.getByText('15 days remaining')).toBeInTheDocument();
  },
};

export const ProgressCardAtRisk: Story = {
  args: {
    config: {
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
  },
};

// ==================== COMPARISON CARD STORIES ====================

export const ComparisonCardHorizontal: Story = {
  args: {
    config: {
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Traffic Sources')).toBeInTheDocument();
    await expect(canvas.getByText('Desktop')).toBeInTheDocument();
    await expect(canvas.getByText('12.5K')).toBeInTheDocument();
    await expect(canvas.getByText('Mobile')).toBeInTheDocument();
  },
};

export const ComparisonCardVertical: Story = {
  args: {
    config: {
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('User Engagement')).toBeInTheDocument();
    await expect(canvas.getByText('New Users')).toBeInTheDocument();
    await expect(canvas.getByText('Returning Users')).toBeInTheDocument();
  },
};
