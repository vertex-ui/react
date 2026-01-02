import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from '../../components/Widget';
import type { WidgetConfig, MetricWidgetData } from '../../components/Widget/types';

const meta: Meta<typeof Widget> = {
  title: 'Components/Widget',
  component: Widget,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A unified, flexible widget system for building CMS-configurable dashboards and interfaces. Replace fragmented components with a single Widget that adapts to any data and theme.',
      },
    },
  },
  argTypes: {
    config: {
      description: 'Widget configuration object',
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Widget>;

// Metric Widget Examples
const sampleMetricConfigs: WidgetConfig[] = [
  {
    type: 'metric',
    data: {
      value: '1,234',
      label: 'Total Sales',
      trend: { direction: 'up', value: 12, label: 'vs last month' },
      icon: 'TrendingUp',
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
      showTrend: true,
    },
  },
  {
    type: 'metric',
    data: {
      value: '$45,678',
      label: 'Revenue',
      trend: { direction: 'up', value: 5.3, label: 'vs last quarter' },
      target: { value: '$50,000', label: 'Target' },
      progress: 91,
    },
    settings: {
      theme: 'professional',
      variant: 'success',
      showTrend: true,
      showTarget: true,
      showProgress: true,
    },
  },
  {
    type: 'metric',
    data: {
      value: '89',
      label: 'Active Users',
      trend: { direction: 'down', value: -3, label: 'vs yesterday' },
    },
    settings: {
      theme: 'minimal',
      variant: 'info',
      showTrend: true,
    },
  },
];

export const MetricWidgets: Story = {
  args: {
    config: {
      type: 'grid',
      data: {
        widgets: sampleMetricConfigs,
      },
      settings: {
        theme: 'modern',
        gap: 'lg',
        grid: { mobile: 1, tablet: 2, desktop: 3 },
      },
    },
  },
};

// Info Widget Examples
const sampleInfoConfigs: WidgetConfig[] = [
  {
    type: 'info',
    data: {
      title: 'Server Status',
      text: 'All systems operational',
      badge: { text: 'Online', variant: 'success' },
      metadata: {
        'Uptime': '99.9%',
        'Last Check': '2 minutes ago',
      },
    },
    settings: {
      theme: 'modern',
      variant: 'success',
    },
  },
  {
    type: 'info',
    data: {
      title: 'Database Performance',
      text: 'Query response time within acceptable limits',
      icon: 'Database',
      badge: { text: 'Healthy', variant: 'success' },
      metadata: {
        'Avg Response': '45ms',
        'Connections': '23/100',
        'CPU Usage': '12%',
      },
      actions: [
        { label: 'View Details', variant: 'primary' },
        { label: 'Optimize', variant: 'secondary' },
      ],
    },
    settings: {
      theme: 'professional',
      variant: 'info',
    },
  },
];

export const InfoWidgets: Story = {
  args: {
    config: {
      type: 'grid',
      data: {
        widgets: sampleInfoConfigs,
      },
      settings: {
        theme: 'modern',
        gap: 'lg',
        grid: { mobile: 1, tablet: 1, desktop: 2 },
      },
    },
  },
};

// Auto Grid Example
export const AutoGrid: Story = {
  args: {
    config: {
      type: 'metric',
      data: [
        {
          value: '1,234',
          label: 'Total Sales',
          trend: { direction: 'up' as const, value: 12 },
        },
        {
          value: '$45,678',
          label: 'Revenue',
          trend: { direction: 'up' as const, value: 5.3 },
        },
        {
          value: '89',
          label: 'Active Users',
          trend: { direction: 'down' as const, value: -3 },
        },
        {
          value: '567',
          label: 'Orders',
          trend: { direction: 'up' as const, value: 8 },
        },
      ] as MetricWidgetData[],
      settings: {
        theme: 'modern',
        grid: { mobile: 1, tablet: 2, desktop: 3, spacing: 'md' },
      },
    },
  },
};

// Theme Comparison
export const ThemeComparison: Story = {
  render: () => {
    const themes: Array<{ theme: string; label: string }> = [
      { theme: 'minimal', label: 'Minimal' },
      { theme: 'modern', label: 'Modern' },
      { theme: 'professional', label: 'Professional' },
      { theme: 'compact', label: 'Compact' },
      { theme: 'inline', label: 'Inline' },
    ];

    const sampleData = {
      value: '1,234',
      label: 'Total Sales',
      trend: { direction: 'up' as const, value: 12 },
    };

    return (
      <div style={{ display: 'grid', gap: '2rem' }}>
        {themes.map(({ theme, label }) => (
          <div key={theme}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
              {label} Theme
            </h3>
            <Widget
              config={{
                type: 'metric',
                data: sampleData,
                settings: {
                  theme: theme as any,
                },
              }}
            />
          </div>
        ))}
      </div>
    );
  },
};

// Simple Metric Widget
export const SimpleMetric: Story = {
  args: {
    config: {
      type: 'metric',
      data: {
        value: '1,234',
        label: 'Total Sales',
        trend: { direction: 'up', value: 12 },
      },
      settings: {
        theme: 'modern',
        variant: 'primary',
        showTrend: true,
      },
    },
  },
};