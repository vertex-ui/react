import type { Meta, StoryObj } from '@storybook/react';
import { DashboardCard } from '../../widgets/DashboardCard';

// Mock icons (you can replace with your actual icons)
const UserIcon = () => <span>👤</span>;
const DollarIcon = () => <span>💰</span>;
const ShoppingCartIcon = () => <span>🛒</span>;
const TrendingUpIcon = () => <span>📈</span>;
const TrendingDownIcon = () => <span>📉</span>;
const CheckCircleIcon = () => <span>✅</span>;
const AlertIcon = () => <span>⚠️</span>;
const StarIcon = () => <span>⭐</span>;
const ServerIcon = () => <span>🖥️</span>;
const ChartIcon = () => <span>📊</span>;
const ClockIcon = () => <span>🕐</span>;
const PackageIcon = () => <span>📦</span>;

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

// ==================== STAT CARD STORIES ====================

export const StatCardBasic: Story = {
  args: {
    type: 'stat',
    data: {
      label: 'Total Users',
      value: '12,543',
      icon: <UserIcon />,
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
      icon: <DollarIcon />,
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
      icon: <TrendingDownIcon />,
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
      icon: <ShoppingCartIcon />,
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
      icon: <DollarIcon />,
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
      icon: <TrendingUpIcon />,
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
      icon: <AlertIcon />,
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
      icon: <StarIcon />,
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
          icon: <ChartIcon />,
        },
        {
          label: 'Mobile',
          value: '8.3K',
          trend: { value: 8.7, isPositive: true },
          icon: <ChartIcon />,
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
      showIcons: false,
    },
  },
};

export const ActivityCardCompact: Story = {
  args: {
    type: 'activity',
    data: {
      title: 'System Events',
      activities: [
        { id: '1', label: 'Database backup completed', icon: <CheckCircleIcon />, timestamp: '10 min ago', status: 'success' },
        { id: '2', label: 'High CPU usage detected', icon: <AlertIcon />, timestamp: '25 min ago', status: 'warning' },
        { id: '3', label: 'New user registered', icon: <UserIcon />, timestamp: '1 hour ago', status: 'info' },
        { id: '4', label: 'Server restart initiated', icon: <ServerIcon />, timestamp: '2 hours ago', status: 'info' },
      ],
    },
    settings: {
      theme: 'info',
      maxItems: 4,
      showTimestamps: true,
      showIcons: true,
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
      icon: <ShoppingCartIcon />,
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
      icon: <PackageIcon />,
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
      icon: <CheckCircleIcon />,
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
      avatar: <UserIcon />,
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
      avatar: <UserIcon />,
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
      avatar: <UserIcon />,
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
      icon: <DollarIcon />,
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
      icon: <DollarIcon />,
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
      icon: <AlertIcon />,
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
      icon: <AlertIcon />,
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
      icon: <CheckCircleIcon />,
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
      icon: <ServerIcon />,
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
        { rank: 1, label: 'Wireless Headphones', value: 1245, percentage: 100, icon: <StarIcon /> },
        { rank: 2, label: 'Smart Watch', value: 987, percentage: 79, icon: <StarIcon /> },
        { rank: 3, label: 'Laptop Stand', value: 756, percentage: 61, icon: <StarIcon /> },
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
        { rank: 1, label: 'John Smith', value: '98%', icon: <UserIcon /> },
        { rank: 2, label: 'Sarah Johnson', value: '96%', icon: <UserIcon /> },
        { rank: 3, label: 'Michael Chen', value: '94%', icon: <UserIcon /> },
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
      icon: <ServerIcon />,
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
      icon: <ServerIcon />,
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
      icon: <AlertIcon />,
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
      icon: <ServerIcon />,
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
          icon: <DollarIcon />,
          trend: { value: 18.5, isPositive: true },
        }}
        settings={{ theme: 'success' }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Total Orders',
          value: '1,234',
          icon: <ShoppingCartIcon />,
          trend: { value: 5.2, isPositive: true },
        }}
        settings={{ theme: 'primary' }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Active Users',
          value: '8,945',
          icon: <UserIcon />,
          trend: { value: -2.1, isPositive: false },
        }}
        settings={{ theme: 'info' }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Conversion Rate',
          value: '3.2%',
          icon: <TrendingUpIcon />,
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
          icon: <DollarIcon />,
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
          icon: <DollarIcon />,
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
          icon: <ShoppingCartIcon />,
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
          icon: <UserIcon />,
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
          avatar: <UserIcon />,
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

// ==================== ANALYTICS DASHBOARD ====================

export const AnalyticsDashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
      <DashboardCard
        type="comparison"
        data={{
          label: 'Traffic Sources',
          items: [
            { label: 'Desktop', value: '12.5K', trend: { value: 15.3, isPositive: true } },
            { label: 'Mobile', value: '8.3K', trend: { value: 8.7, isPositive: true } },
          ],
        }}
        settings={{ theme: 'primary', layout: 'horizontal', showTrends: true }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Bounce Rate',
          value: '42.8%',
          icon: <TrendingDownIcon />,
          trend: { value: -8.3, isPositive: false },
        }}
        settings={{ theme: 'danger' }}
      />
      <DashboardCard
        type="stat"
        data={{
          label: 'Avg. Session Duration',
          value: '4m 32s',
          icon: <ClockIcon />,
          trend: { value: 12.5, isPositive: true },
        }}
        settings={{ theme: 'success' }}
      />
      <DashboardCard
        type="ranking"
        data={{
          title: 'Top Pages',
          items: [
            { rank: 1, label: '/products', value: '12.5K' },
            { rank: 2, label: '/about', value: '8.3K' },
            { rank: 3, label: '/contact', value: '6.1K' },
          ],
        }}
        settings={{ showBars: true, highlightTop: 3 }}
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
          icon: <ServerIcon />,
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
          icon: <ServerIcon />,
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
          icon: <AlertIcon />,
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
