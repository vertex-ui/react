import type { Meta, StoryObj } from '@storybook/react';
import { DashboardCard } from '../../widgets/DashboardCard';
import {
  UserIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  StarIcon,
  ServerIcon,
  ChartBarIcon,
  PackageIcon,
  CheckCircleIcon,
  WarningIcon,
  ErrorIcon,
  InboxIcon,
  ZapIcon,
  DollarSignIcon,
  ActivityIcon,
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
      theme: 'danger',
      showTrend: true,
    },
  },
};

export const StatCardClickable: Story = {
  args: {
    type: 'stat',
    data: {
      label: 'Total Orders',
      value: '1,234',
      icon: getIconWithColor(ShoppingCartIcon, '#0284c7'),
      trend: {
        value: 5.2,
        isPositive: true,
      },
    },
    settings: {
      theme: 'info',
    },
    onClick: () => alert('Card clicked!'),
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

export const ProgressCardExceeded: Story = {
  args: {
    type: 'progress',
    data: {
      label: 'Customer Satisfaction',
      current: 4.8,
      target: 4.5,
      icon: getIconWithColor(StarIcon, '#059669'),
    },
    settings: {
      theme: 'success',
      showPercentage: true,
      status: 'exceeded',
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

// ==================== ACTIVITY CARD STORIES ====================

export const ActivityCardBasic: Story = {
  args: {
    type: 'activity',
    data: {
      title: 'Recent Orders',
      onViewAll: () => alert('View all clicked'),
      activities: [
        { id: '1', label: 'Order #12345 placed', value: '$125.00', timestamp: '2 min ago', status: 'success' },
        { id: '2', label: 'Order #12344 shipped', value: '$89.99', timestamp: '15 min ago', status: 'info' },
        { id: '3', label: 'Order #12343 delivered', value: '$234.50', timestamp: '1 hour ago', status: 'success' },
        { id: '4', label: 'Order #12342 cancelled', value: '$45.00', timestamp: '2 hours ago', status: 'danger' },
        { id: '5', label: 'Order #12341 pending', value: '$156.75', timestamp: '3 hours ago', status: 'warning' },
      ],
    },
    settings: {
      theme: 'primary',
      maxItems: 5,
      showTimestamps: true,
    },
  },
};

export const ActivityCardCompact: Story = {
  args: {
    type: 'activity',
    data: {
      title: 'System Events',
      activities: [
        { id: '1', label: 'Database backup completed', timestamp: '10 min ago', status: 'success' },
        { id: '2', label: 'High CPU usage detected', timestamp: '25 min ago', status: 'warning' },
        { id: '3', label: 'New user registered', timestamp: '1 hour ago', status: 'info' },
        { id: '4', label: 'Server restart initiated', timestamp: '2 hours ago', status: 'info' },
      ],
    },
    settings: {
      theme: 'info',
      maxItems: 4,
      showTimestamps: true,
      compact: true,
    },
  },
};

// ==================== ORDER CARD STORIES ====================

export const OrderCardDetailed: Story = {
  args: {
    type: 'order',
    data: {
      orderId: '12345',
      status: 'processing',
      amount: 234.99,
      currency: 'USD',
      customer: 'John Doe',
      items: 5,
      date: '2024-01-15',
      icon: getIconWithColor(ShoppingCartIcon, '#2563eb'),
    },
    settings: {
      theme: 'primary',
      showCustomer: true,
      showItems: true,
      showDate: true,
      layout: 'detailed',
    },
  },
};

export const OrderCardShipped: Story = {
  args: {
    type: 'order',
    data: {
      orderId: '12346',
      status: 'shipped',
      amount: 89.99,
      currency: 'USD',
      customer: 'Jane Smith',
      items: 2,
      date: '2024-01-14',
      icon: getIconWithColor(PackageIcon, '#0284c7'),
    },
    settings: {
      theme: 'info',
      showCustomer: true,
      showItems: true,
      showDate: true,
      layout: 'detailed',
    },
  },
};

export const OrderCardDelivered: Story = {
  args: {
    type: 'order',
    data: {
      orderId: '12347',
      status: 'delivered',
      amount: 156.50,
      currency: 'USD',
      customer: 'Bob Johnson',
      items: 3,
      date: '2024-01-13',
      icon: getIconWithColor(CheckCircleIcon, '#059669'),
    },
    settings: {
      theme: 'success',
      showCustomer: true,
      showItems: true,
      showDate: true,
    },
  },
};

export const OrderCardCancelled: Story = {
  args: {
    type: 'order',
    data: {
      orderId: '12348',
      status: 'cancelled',
      amount: 45.00,
      currency: 'USD',
      customer: 'Alice Brown',
      items: 1,
      date: '2024-01-12',
    },
    settings: {
      theme: 'danger',
      showCustomer: true,
      showItems: false,
      showDate: true,
      layout: 'compact',
    },
  },
};

// ==================== USER CARD (HRMS) STORIES ====================

export const UserCardHorizontal: Story = {
  args: {
    type: 'user',
    data: {
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      department: 'Engineering',
      avatar: getIconWithColor(UserIcon, '#2563eb'),
      status: 'active',
      metrics: [
        { label: 'Projects', value: '12' },
        { label: 'Tasks Completed', value: '145' },
        { label: 'Team Size', value: '8' },
      ],
    },
    settings: {
      theme: 'primary',
      showStatus: true,
      showMetrics: true,
      layout: 'horizontal',
      avatarSize: 'md',
    },
  },
};

export const UserCardAway: Story = {
  args: {
    type: 'user',
    data: {
      name: 'Michael Chen',
      role: 'Product Manager',
      department: 'Product',
      avatar: getIconWithColor(UserIcon, '#d97706'),
      status: 'away',
      metrics: [
        { label: 'Active Projects', value: '5' },
        { label: 'Team Members', value: '15' },
      ],
    },
    settings: {
      theme: 'warning',
      showStatus: true,
      showMetrics: true,
      layout: 'horizontal',
      avatarSize: 'lg',
    },
  },
};

export const UserCardOffline: Story = {
  args: {
    type: 'user',
    data: {
      name: 'Emily Davis',
      role: 'UX Designer',
      department: 'Design',
      avatar: getIconWithColor(UserIcon, '#4b5563'),
      status: 'offline',
    },
    settings: {
      theme: 'secondary',
      showStatus: true,
      showMetrics: false,
      layout: 'horizontal',
      avatarSize: 'sm',
    },
  },
};

// ==================== REVENUE CARD STORIES ====================

export const RevenueCardDetailed: Story = {
  args: {
    type: 'revenue',
    data: {
      label: 'Total Revenue',
      amount: 125430,
      currency: 'USD',
      period: 'Last 30 days',
      icon: getIconWithColor(InboxIcon, '#059669'),
      trend: {
        value: 18.5,
        label: 'vs last month',
        isPositive: true,
      },
      breakdown: [
        { label: 'Product Sales', value: 89500, percentage: 71 },
        { label: 'Services', value: 25430, percentage: 20 },
        { label: 'Other', value: 10500, percentage: 9 },
      ],
    },
    settings: {
      theme: 'success',
      showTrend: true,
      showBreakdown: true,
      showPeriod: true,
      format: 'detailed',
    },
  },
};

export const RevenueCardCompact: Story = {
  args: {
    type: 'revenue',
    data: {
      label: 'Monthly Recurring Revenue',
      amount: 45230,
      currency: 'USD',
      period: 'January 2024',
      icon: getIconWithColor(InboxIcon, '#2563eb'),
      trend: {
        value: 12.3,
        isPositive: true,
      },
    },
    settings: {
      theme: 'primary',
      showTrend: true,
      showBreakdown: false,
      showPeriod: true,
      format: 'compact',
    },
  },
};

// ==================== ALERT CARD STORIES ====================

export const AlertCardError: Story = {
  args: {
    type: 'alert',
    data: {
      title: 'Critical Error',
      message: 'Payment gateway connection failed. Immediate attention required.',
      severity: 'error',
      icon: getIconWithColor(ErrorIcon, '#dc2626'),
      timestamp: '2 minutes ago',
      actionLabel: 'View Details',
      onAction: () => alert('View details clicked'),
    },
    settings: {
      showIcon: true,
      showTimestamp: true,
      dismissible: true,
      onDismiss: () => alert('Alert dismissed'),
    },
  },
};

export const AlertCardWarning: Story = {
  args: {
    type: 'alert',
    data: {
      title: 'Low Stock Warning',
      message: '15 products are running low on inventory. Consider restocking soon.',
      severity: 'warning',
      icon: getIconWithColor(WarningIcon, '#d97706'),
      timestamp: '15 minutes ago',
      actionLabel: 'View Products',
      onAction: () => alert('View products clicked'),
    },
    settings: {
      showIcon: true,
      showTimestamp: true,
      dismissible: true,
    },
  },
};

export const AlertCardSuccess: Story = {
  args: {
    type: 'alert',
    data: {
      title: 'Deployment Successful',
      message: 'Your application has been successfully deployed to production.',
      severity: 'success',
      icon: getIconWithColor(CheckCircleIcon, '#059669'),
      timestamp: '5 minutes ago',
    },
    settings: {
      showIcon: true,
      showTimestamp: true,
      dismissible: false,
    },
  },
};

export const AlertCardInfo: Story = {
  args: {
    type: 'alert',
    data: {
      title: 'System Maintenance',
      message: 'Scheduled maintenance is planned for tonight at 11 PM EST. Expected downtime: 2 hours.',
      severity: 'info',
      icon: getIconWithColor(ServerIcon, '#0284c7'),
      timestamp: '1 hour ago',
      actionLabel: 'Learn More',
      onAction: () => alert('Learn more clicked'),
    },
    settings: {
      showIcon: true,
      showTimestamp: true,
    },
  },
};

// ==================== RANKING CARD STORIES ====================

export const RankingCardProducts: Story = {
  args: {
    type: 'ranking',
    data: {
      title: 'Top Selling Products',
      items: [
        { rank: 1, label: 'Wireless Headphones', value: 1245, percentage: 100, icon: getIconWithColor(StarIcon, '#f59e0b') },
        { rank: 2, label: 'Smart Watch', value: 987, percentage: 79, icon: getIconWithColor(StarIcon, '#f59e0b') },
        { rank: 3, label: 'Laptop Stand', value: 756, percentage: 61, icon: getIconWithColor(StarIcon, '#f59e0b') },
        { rank: 4, label: 'USB-C Cable', value: 623, percentage: 50 },
        { rank: 5, label: 'Phone Case', value: 445, percentage: 36 },
      ],
    },
    settings: {
      theme: 'primary',
      maxItems: 5,
      showPercentages: true,
      showBars: true,
      highlightTop: 3,
    },
  },
};

export const RankingCardEmployees: Story = {
  args: {
    type: 'ranking',
    data: {
      title: 'Top Performers',
      items: [
        { rank: 1, label: 'John Smith', value: '98%', icon: getIconWithColor(UserIcon, '#059669') },
        { rank: 2, label: 'Sarah Johnson', value: '96%', icon: getIconWithColor(UserIcon, '#059669') },
        { rank: 3, label: 'Michael Chen', value: '94%', icon: getIconWithColor(UserIcon, '#059669') },
        { rank: 4, label: 'Emily Davis', value: '92%' },
        { rank: 5, label: 'David Wilson', value: '90%' },
      ],
    },
    settings: {
      theme: 'success',
      maxItems: 5,
      showPercentages: false,
      showBars: false,
      highlightTop: 3,
    },
  },
};

// ==================== STATUS CARD STORIES ====================

export const StatusCardOnline: Story = {
  args: {
    type: 'status',
    data: {
      service: 'API Server',
      status: 'online',
      icon: getIconWithColor(ServerIcon, '#059669'),
      uptime: '99.9%',
      lastChecked: '1 minute ago',
      metrics: [
        { label: 'Response Time', value: '45ms' },
        { label: 'Requests/min', value: '12.5K' },
        { label: 'Error Rate', value: '0.01%' },
      ],
    },
    settings: {
      theme: 'success',
      showMetrics: true,
      showUptime: true,
      showLastChecked: true,
      layout: 'detailed',
    },
  },
};

export const StatusCardDegraded: Story = {
  args: {
    type: 'status',
    data: {
      service: 'Database',
      status: 'degraded',
      icon: getIconWithColor(ServerIcon, '#d97706'),
      uptime: '97.5%',
      lastChecked: '30 seconds ago',
      metrics: [
        { label: 'Query Time', value: '250ms' },
        { label: 'Connection Pool', value: '85%' },
      ],
    },
    settings: {
      theme: 'warning',
      showMetrics: true,
      showUptime: true,
      showLastChecked: true,
      layout: 'detailed',
    },
  },
};

export const StatusCardOffline: Story = {
  args: {
    type: 'status',
    data: {
      service: 'Payment Gateway',
      status: 'offline',
      icon: getIconWithColor(WarningIcon, '#dc2626'),
      uptime: '0%',
      lastChecked: 'Just now',
    },
    settings: {
      theme: 'danger',
      showMetrics: false,
      showUptime: true,
      showLastChecked: true,
      layout: 'compact',
    },
  },
};

export const StatusCardMaintenance: Story = {
  args: {
    type: 'status',
    data: {
      service: 'CDN',
      status: 'maintenance',
      icon: getIconWithColor(ServerIcon, '#0284c7'),
      lastChecked: '5 minutes ago',
    },
    settings: {
      theme: 'info',
      showMetrics: false,
      showUptime: false,
      showLastChecked: true,
      layout: 'compact',
    },
  },
};

// ==================== LOADING STATE ====================

export const LoadingState: Story = {
  args: {
    type: 'stat',
    data: {
      label: 'Loading...',
      value: '---',
    },
    loading: true,
  },
};

// ==================== DASHBOARD GRID EXAMPLE ====================

export const DashboardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
      <DashboardCard
        type="stat"
        data={{
          label: 'Total Revenue',
          value: '$125,430',
          icon: getIconWithColor(InboxIcon, '#059669'),
          trend: { value: 18.5, isPositive: true },
        }}
        settings={{ theme: 'success' }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Total Orders',
          value: '1,234',
          icon: getIconWithColor(ShoppingCartIcon, '#2563eb'),
          trend: { value: 5.2, isPositive: true },
        }}
        settings={{ theme: 'primary' }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Active Users',
          value: '8,945',
          icon: getIconWithColor(UserIcon, '#0284c7'),
          trend: { value: -2.1, isPositive: false },
        }}
        settings={{ theme: 'info' }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Conversion Rate',
          value: '3.2%',
          icon: getIconWithColor(TrendingUpIcon, '#d97706'),
          trend: { value: 12.3, isPositive: true },
        }}
        settings={{ theme: 'warning' }}
      />
    </div>
  ),
};

// ==================== E-COMMERCE DASHBOARD ====================

export const EcommerceDashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
      <DashboardCard
        type="revenue"
        data={{
          label: 'Total Revenue',
          amount: 125430,
          currency: 'USD',
          period: 'Last 30 days',
          icon: getIconWithColor(InboxIcon, '#059669'),
          trend: { value: 18.5, isPositive: true },
        }}
        settings={{ theme: 'success', showTrend: true }}
      />
      <DashboardCard
        type="progress"
        data={{
          label: 'Monthly Sales Goal',
          current: 75000,
          target: 100000,
          unit: '$',
          icon: getIconWithColor(InboxIcon, '#2563eb'),
        }}
        settings={{ theme: 'primary', status: 'on-track' }}
      />
      <DashboardCard
        type="order"
        data={{
          orderId: '12345',
          status: 'processing',
          amount: 234.99,
          customer: 'John Doe',
          items: 5,
          date: '2024-01-15',
          icon: getIconWithColor(ShoppingCartIcon, '#0284c7'),
        }}
        settings={{ theme: 'info', layout: 'detailed' }}
      />
      <DashboardCard
        type="ranking"
        data={{
          title: 'Top Products',
          items: [
            { rank: 1, label: 'Wireless Headphones', value: 1245 },
            { rank: 2, label: 'Smart Watch', value: 987 },
            { rank: 3, label: 'Laptop Stand', value: 756 },
          ],
        }}
        settings={{ theme: 'primary', highlightTop: 3, showBars: true }}
      />
    </div>
  ),
};

// ==================== HRMS DASHBOARD ====================

export const HRMSDashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
      <DashboardCard
        type="stat"
        data={{
          label: 'Total Employees',
          value: '245',
          icon: getIconWithColor(UserIcon, '#2563eb'),
          trend: { value: 5.2, label: 'this quarter', isPositive: true },
        }}
        settings={{ theme: 'primary' }}
      />
      <DashboardCard
        type="user"
        data={{
          name: 'Sarah Johnson',
          role: 'Senior Developer',
          department: 'Engineering',
          avatar: getIconWithColor(UserIcon, '#059669'),
          status: 'active',
          metrics: [
            { label: 'Projects', value: '12' },
            { label: 'Tasks', value: '145' },
          ],
        }}
        settings={{ theme: 'success', showMetrics: true }}
      />
      <DashboardCard
        type="progress"
        data={{
          label: 'Hiring Target',
          current: 18,
          target: 25,
          unit: 'hires',
          subtitle: 'Q1 2024',
        }}
        settings={{ theme: 'info', status: 'on-track' }}
      />
      <DashboardCard
        type="activity"
        data={{
          title: 'Recent Activities',
          activities: [
            { id: '1', label: 'New hire onboarded', timestamp: '2 hours ago', status: 'success' },
            { id: '2', label: 'Leave request pending', timestamp: '4 hours ago', status: 'warning' },
            { id: '3', label: 'Performance review completed', timestamp: '1 day ago', status: 'info' },
          ],
        }}
        settings={{ compact: true }}
      />
    </div>
  ),
};

// ==================== SYSTEM MONITORING DASHBOARD ====================

export const SystemMonitoringDashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
      <DashboardCard
        type="status"
        data={{
          service: 'API Server',
          status: 'online',
          icon: getIconWithColor(ServerIcon, '#059669'),
          uptime: '99.9%',
          lastChecked: '1 min ago',
          metrics: [
            { label: 'Response Time', value: '45ms' },
            { label: 'Requests/min', value: '12.5K' },
          ],
        }}
        settings={{ theme: 'success', showMetrics: true }}
      />
      <DashboardCard
        type="status"
        data={{
          service: 'Database',
          status: 'degraded',
          icon: getIconWithColor(ServerIcon, '#d97706'),
          uptime: '97.5%',
          lastChecked: '30 sec ago',
        }}
        settings={{ theme: 'warning' }}
      />
      <DashboardCard
        type="alert"
        data={{
          title: 'High CPU Usage',
          message: 'Server CPU usage is at 87%. Consider scaling up.',
          severity: 'warning',
          icon: getIconWithColor(WarningIcon, '#d97706'),
          timestamp: '5 minutes ago',
          actionLabel: 'View Metrics',
        }}
        settings={{ showIcon: true }}
      />
      <DashboardCard
        type="activity"
        data={{
          title: 'System Events',
          activities: [
            { id: '1', label: 'Backup completed', timestamp: '10 min ago', status: 'success' },
            { id: '2', label: 'High memory usage', timestamp: '25 min ago', status: 'warning' },
            { id: '3', label: 'User login spike', timestamp: '1 hour ago', status: 'info' },
          ],
        }}
        settings={{ compact: true }}
      />
    </div>
  ),
};

// ==================== FILLED VARIANT EXAMPLES ====================

export const FilledStatCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <DashboardCard
        type="stat"
        data={{
          label: 'Total Revenue',
          value: '$125,430',
          subtitle: 'Last 30 days',
          icon: <InboxIcon size={20} />,
          trend: { value: 12.5, label: 'vs last month', isPositive: true },
        }}
        settings={{ theme: 'primary', variant: 'filled', showTrend: true }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Active Users',
          value: '8,542',
          subtitle: 'Online now',
          icon: <UserIcon size={20} />,
          trend: { value: 8.3, label: 'vs yesterday', isPositive: true },
        }}
        settings={{ theme: 'success', variant: 'filled', showTrend: true }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Bounce Rate',
          value: '42.8%',
          subtitle: 'Last 7 days',
          icon: <TrendingUpIcon size={20} />,
          trend: { value: -3.2, label: 'vs last week', isPositive: false },
        }}
        settings={{ theme: 'danger', variant: 'filled', showTrend: true }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Pending Orders',
          value: '156',
          subtitle: 'Awaiting processing',
          icon: <ShoppingCartIcon size={20} />,
        }}
        settings={{ theme: 'warning', variant: 'filled' }}
      />
    </div>
  ),
};

export const FilledActivityCard: Story = {
  args: {
    type: 'activity',
    data: {
      title: 'Recent Orders',
      onViewAll: () => alert('View all clicked'),
      activities: [
        {
          id: '1',
          label: 'Order #12345 placed',
          value: '$234.50',
          timestamp: '2 min ago',
          status: 'success',
        },
        {
          id: '2',
          label: 'Order #12346 shipped',
          value: '$189.00',
          timestamp: '15 min ago',
          status: 'info',
        },
        {
          id: '3',
          label: 'Order #12347 pending',
          value: '$567.25',
          timestamp: '1 hour ago',
          status: 'warning',
        },
      ],
    },
    settings: {
      theme: 'primary',
      variant: 'filled',
    },
  },
};

export const FilledProgressCard: Story = {
  args: {
    type: 'progress',
    data: {
      label: 'Sales Target',
      current: 72500,
      target: 100000,
      unit: '$',
      subtitle: 'Q4 2024',
      icon: <ChartBarIcon size={20} />,
    },
    settings: {
      theme: 'success',
      variant: 'filled',
      showPercentage: true,
      showValues: true,
    },
  },
};

export const FilledUserCard: Story = {
  args: {
    type: 'user',
    data: {
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      avatar: 'https://i.pravatar.cc/150?img=5',
      status: 'active',
      department: 'Engineering',
      metrics: [
        { label: 'Projects', value: '12' },
        { label: 'Tasks', value: '45' },
      ],
    },
    settings: {
      theme: 'primary',
      variant: 'filled',
      showMetrics: true,
      layout: 'vertical',
    },
  },
};

export const FilledOrderCard: Story = {
  args: {
    type: 'order',
    data: {
      orderId: '#ORD-2024-1234',
      status: 'delivered',
      amount: 299.99,
      currency: 'USD',
      customer: 'John Smith',
      items: 3,
      date: '2024-01-15',
    },
    settings: {
      theme: 'success',
      variant: 'filled',
    },
  },
};

export const FilledComparison: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
      <DashboardCard
        type="comparison"
        data={{
          label: 'Sales Overview',
          items: [
            {
              label: 'This Month',
              value: '$45,231',
              trend: { value: 12.5, isPositive: true },
              icon: <TrendingUpIcon size={18} />,
            },
            {
              label: 'Last Month',
              value: '$38,542',
              trend: { value: -5.2, isPositive: false },
              icon: <TrendingUpIcon size={18} />,
            },
          ],
        }}
        settings={{ theme: 'primary', variant: 'filled', showTrends: true }}
      />
      <DashboardCard
        type="comparison"
        data={{
          label: 'User Metrics',
          items: [
            { label: 'Active', value: '8,542', icon: <CheckCircleIcon size={18} /> },
            { label: 'Inactive', value: '1,234', icon: <WarningIcon size={18} /> },
          ],
        }}
        settings={{ theme: 'info', variant: 'filled', layout: 'horizontal' }}
      />
    </div>
  ),
};

export const FilledDashboardMix: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
      <DashboardCard
        type="stat"
        data={{
          label: 'Total Orders',
          value: '1,543',
          icon: <ShoppingCartIcon size={20} />,
          trend: { value: 18.2, label: '+182 today', isPositive: true },
        }}
        settings={{ theme: 'primary', variant: 'filled', showTrend: true }}
      />
      <DashboardCard
        type="revenue"
        data={{
          label: 'Monthly Revenue',
          amount: 125430,
          currency: 'USD',
          period: 'month',
          breakdown: [
            { label: 'Products', value: 85000 },
            { label: 'Services', value: 40430 },
          ],
        }}
        settings={{ theme: 'success', variant: 'filled', showBreakdown: true }}
      />
      <DashboardCard
        type="ranking"
        data={{
          title: 'Server Metrics',
          items: [
            { rank: 1, label: 'API Server', value: '99.9%' },
            { rank: 2, label: 'Database', value: '100%' },
            { rank: 3, label: 'CDN', value: '95.2%' },
          ],
        }}
        settings={{ theme: 'info', variant: 'filled', highlightTop: 3 }}
      />
    </div>
  ),
};

// ==================== METRIC CARD STORIES ====================

export const MetricCardLineChart: Story = {
  args: {
    type: 'metric',
    data: {
      label: 'Total Revenue',
      value: '$124,563',
      icon: getIconWithColor(DollarSignIcon, '#2563eb'),
      trend: {
        value: 12.5,
        isPositive: true,
      },
      subtitle: 'Last 30 days',
      chartData: [45, 52, 48, 65, 58, 72, 68, 85, 92, 88, 95, 102, 98, 115],
      chartType: 'line',
    },
    settings: {
      theme: 'primary',
      variant: 'outlined',
      showChart: true,
      showTrend: true,
      chartHeight: 80,
      valueSize: 'lg',
    },
  },
};

export const MetricCardBarChart: Story = {
  args: {
    type: 'metric',
    data: {
      label: 'Active Users',
      value: '8,542',
      icon: getIconWithColor(UserIcon, '#059669'),
      trend: {
        value: 8.3,
        isPositive: true,
      },
      subtitle: 'Daily active users',
      chartData: [420, 380, 510, 490, 620, 580, 710, 690, 780, 820, 750, 890, 850, 920],
      chartType: 'bar',
    },
    settings: {
      theme: 'success',
      variant: 'outlined',
      showChart: true,
      showTrend: true,
      chartHeight: 70,
      valueSize: 'lg',
    },
  },
};

export const MetricCardWithComparison: Story = {
  args: {
    type: 'metric',
    data: {
      label: 'Orders Completed',
      value: '2,847',
      icon: getIconWithColor(ShoppingCartIcon, '#d97706'),
      trend: {
        value: 5.2,
        isPositive: true,
      },
      subtitle: 'This month',
      comparisonValue: '2,703',
      comparisonLabel: 'Last month',
      chartData: [180, 195, 165, 210, 205, 230, 225, 250, 245, 270, 285, 280, 295, 310],
      chartType: 'line',
    },
    settings: {
      theme: 'warning',
      variant: 'outlined',
      showChart: true,
      showTrend: true,
      showComparison: true,
      chartHeight: 75,
      valueSize: 'lg',
    },
  },
};

export const MetricCardNegativeTrend: Story = {
  args: {
    type: 'metric',
    data: {
      label: 'Server Load',
      value: '78%',
      icon: getIconWithColor(ServerIcon, '#dc2626'),
      trend: {
        value: 3.8,
        isPositive: false,
      },
      subtitle: 'Increased from last hour',
      chartData: [45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 77, 78, 78, 78],
      chartType: 'line',
      targetValue: 80,
    },
    settings: {
      theme: 'danger',
      variant: 'outlined',
      showChart: true,
      showTrend: true,
      chartHeight: 70,
      valueSize: 'lg',
    },
  },
};

export const MetricCardCompact: Story = {
  args: {
    type: 'metric',
    size: 'sm',
    data: {
      label: 'Page Views',
      value: '45.2K',
      icon: getIconWithColor(ActivityIcon, '#0284c7'),
      trend: {
        value: 15.3,
        isPositive: true,
      },
      chartData: [320, 350, 340, 380, 390, 420, 410, 450, 440, 480, 490, 520],
      chartType: 'bar',
    },
    settings: {
      theme: 'info',
      variant: 'outlined',
      showChart: true,
      showTrend: true,
      chartHeight: 50,
      valueSize: 'md',
    },
  },
};

export const MetricCardNoChart: Story = {
  args: {
    type: 'metric',
    data: {
      label: 'Conversion Rate',
      value: '3.24%',
      icon: getIconWithColor(TrendingUpIcon, '#059669'),
      trend: {
        value: 0.8,
        isPositive: true,
      },
      subtitle: 'Above target of 3%',
      comparisonValue: '2.95%',
      comparisonLabel: 'Previous period',
    },
    settings: {
      theme: 'success',
      variant: 'outlined',
      showChart: false,
      showTrend: true,
      showComparison: true,
      valueSize: 'lg',
    },
  },
};

export const FilledMetricCardPrimary: Story = {
  args: {
    type: 'metric',
    data: {
      label: 'Total Sales',
      value: '$342.5K',
      icon: getIconWithColor(DollarSignIcon, '#ffffff'),
      trend: {
        value: 18.7,
        isPositive: true,
      },
      subtitle: 'Quarterly performance',
      chartData: [280, 310, 295, 340, 355, 390, 380, 425, 440, 470, 490, 520, 510, 560],
      chartType: 'line',
    },
    settings: {
      theme: 'primary',
      variant: 'filled',
      showChart: true,
      showTrend: true,
      chartHeight: 80,
      valueSize: 'lg',
    },
  },
};

export const FilledMetricCardSuccess: Story = {
  args: {
    type: 'metric',
    data: {
      label: 'Customer Satisfaction',
      value: '94.2%',
      icon: getIconWithColor(StarIcon, '#ffffff'),
      trend: {
        value: 2.3,
        isPositive: true,
      },
      subtitle: 'Based on 1,240 reviews',
      comparisonValue: '92.1%',
      comparisonLabel: 'Last quarter',
      chartData: [88, 89, 90, 91, 90, 92, 91, 93, 92, 94, 93, 94, 94, 94],
      chartType: 'bar',
    },
    settings: {
      theme: 'success',
      variant: 'filled',
      showChart: true,
      showTrend: true,
      showComparison: true,
      chartHeight: 70,
      valueSize: 'lg',
    },
  },
};

export const FilledMetricCardDanger: Story = {
  args: {
    type: 'metric',
    data: {
      label: 'Error Rate',
      value: '0.42%',
      icon: getIconWithColor(ErrorIcon, '#ffffff'),
      trend: {
        value: 0.15,
        isPositive: false,
      },
      subtitle: 'Action required',
      chartData: [0.2, 0.22, 0.25, 0.28, 0.3, 0.32, 0.35, 0.37, 0.39, 0.4, 0.41, 0.42],
      chartType: 'line',
      targetValue: 0.5,
    },
    settings: {
      theme: 'danger',
      variant: 'filled',
      showChart: true,
      showTrend: true,
      chartHeight: 70,
      valueSize: 'lg',
    },
  },
};

// ==================== DASHBOARD EXAMPLES WITH METRICS ====================

export const AnalyticsDashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', padding: '16px' }}>
      <DashboardCard
        type="metric"
        data={{
          label: 'Total Revenue',
          value: '$284.5K',
          icon: getIconWithColor(DollarSignIcon, '#2563eb'),
          trend: { value: 24.3, isPositive: true },
          subtitle: 'Last 30 days',
          chartData: [180, 195, 210, 205, 240, 235, 260, 255, 285, 280, 295, 310, 305, 330],
          chartType: 'line',
        }}
        settings={{ theme: 'primary', variant: 'outlined', showChart: true, showTrend: true, chartHeight: 70 }}
      />
      <DashboardCard
        type="metric"
        data={{
          label: 'Active Users',
          value: '12,847',
          icon: getIconWithColor(UserIcon, '#059669'),
          trend: { value: 12.8, isPositive: true },
          subtitle: 'Daily average',
          chartData: [820, 850, 810, 890, 920, 880, 950, 980, 940, 1020, 1050, 1030, 1100, 1120],
          chartType: 'bar',
        }}
        settings={{ theme: 'success', variant: 'outlined', showChart: true, showTrend: true, chartHeight: 70 }}
      />
      <DashboardCard
        type="metric"
        data={{
          label: 'Conversion Rate',
          value: '3.42%',
          icon: getIconWithColor(TrendingUpIcon, '#d97706'),
          trend: { value: 0.6, isPositive: true },
          subtitle: 'Above target',
          comparisonValue: '3.15%',
          comparisonLabel: 'Last period',
        }}
        settings={{ theme: 'warning', variant: 'outlined', showChart: false, showTrend: true, showComparison: true }}
      />
      <DashboardCard
        type="metric"
        data={{
          label: 'Page Views',
          value: '124.8K',
          icon: getIconWithColor(ActivityIcon, '#0284c7'),
          trend: { value: 18.5, isPositive: true },
          subtitle: 'This week',
          chartData: [8200, 8900, 9100, 9800, 10400, 11200, 12480],
          chartType: 'bar',
        }}
        settings={{ theme: 'info', variant: 'outlined', showChart: true, showTrend: true, chartHeight: 70 }}
      />
    </div>
  ),
};

export const FilledMetricsDashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', padding: '20px', background: '#f9fafb' }}>
      <DashboardCard
        type="metric"
        data={{
          label: 'Total Sales',
          value: '$548.2K',
          icon: getIconWithColor(DollarSignIcon, '#ffffff'),
          trend: { value: 32.5, isPositive: true },
          subtitle: 'Quarterly performance',
          chartData: [320, 340, 360, 380, 410, 430, 460, 480, 510, 530, 548],
          chartType: 'line',
        }}
        settings={{ theme: 'primary', variant: 'filled', showChart: true, showTrend: true, chartHeight: 80 }}
      />
      <DashboardCard
        type="metric"
        data={{
          label: 'New Customers',
          value: '2,847',
          icon: getIconWithColor(UserIcon, '#ffffff'),
          trend: { value: 18.2, isPositive: true },
          subtitle: 'This month',
          chartData: [180, 195, 210, 230, 245, 265, 280, 285],
          chartType: 'bar',
        }}
        settings={{ theme: 'success', variant: 'filled', showChart: true, showTrend: true, chartHeight: 70 }}
      />
      <DashboardCard
        type="metric"
        data={{
          label: 'Avg Order Value',
          value: '$192.45',
          icon: getIconWithColor(ShoppingCartIcon, '#ffffff'),
          trend: { value: 5.8, isPositive: true },
          subtitle: 'Per transaction',
          comparisonValue: '$182.10',
          comparisonLabel: 'Previous month',
          chartData: [175, 178, 182, 185, 188, 190, 192],
          chartType: 'line',
        }}
        settings={{ theme: 'warning', variant: 'filled', showChart: true, showTrend: true, showComparison: true, chartHeight: 60 }}
      />
      <DashboardCard
        type="metric"
        data={{
          label: 'Customer Satisfaction',
          value: '96.8%',
          icon: getIconWithColor(StarIcon, '#ffffff'),
          trend: { value: 2.4, isPositive: true },
          subtitle: '2,340 reviews',
          chartData: [92, 93, 94, 94, 95, 95, 96, 96, 97],
          chartType: 'bar',
        }}
        settings={{ theme: 'info', variant: 'filled', showChart: true, showTrend: true, chartHeight: 70 }}
      />
    </div>
  ),
};
