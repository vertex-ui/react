# DashboardCard Widget

A comprehensive, flexible dashboard card widget system with strict TypeScript typing for building professional admin dashboards. Supports multiple card types for various use cases including e-commerce, HRMS, analytics, and system monitoring.

## Features

✅ **10 Card Types** - Stat, Progress, Comparison, Activity, Order, User, Revenue, Alert, Ranking, Status  
✅ **Strict Type Safety** - Discriminated union types ensure type-safe props based on card type  
✅ **Flexible Theming** - 6 theme variants (primary, secondary, success, danger, warning, info)  
✅ **Responsive Design** - Mobile-optimized with responsive layouts  
✅ **Loading States** - Built-in loading state support  
✅ **Clickable Cards** - Optional onClick handlers with hover effects  
✅ **Accessibility** - Keyboard navigation and ARIA support  
✅ **Dark Mode Ready** - Optional dark mode support via CSS custom properties

## Installation

The DashboardCard widget is part of the Vertex UI React library:

```tsx
import { DashboardCard } from 'vertex-ui-react';
```

## Basic Usage

The DashboardCard uses a discriminated union type system. The `type` prop determines which data and settings are required:

```tsx
<DashboardCard
  type="stat"
  data={{
    label: 'Total Users',
    value: '12,543',
    icon: <UserIcon />,
    trend: { value: 12.5, isPositive: true }
  }}
  settings={{
    theme: 'primary',
    showTrend: true
  }}
/>
```

## Card Types

### 1. StatCard - Statistics Display

Display key metrics with icon, value, and trend indicator.

```tsx
<DashboardCard
  type="stat"
  data={{
    label: 'Total Revenue',
    value: '$125,430',
    subtitle: 'Last 30 days',
    icon: <DollarIcon />,
    trend: {
      value: 18.5,
      label: 'vs last month',
      isPositive: true
    }
  }}
  settings={{
    theme: 'success',
    showTrend: true,
    valueSize: 'lg',
    layout: 'vertical'
  }}
/>
```

**Data Props:**
- `label` (string) - Label text
- `value` (string | number) - Main metric value
- `icon?` (ReactNode) - Optional icon
- `subtitle?` (ReactNode) - Optional secondary text
- `trend?` (TrendData) - Optional trend indicator

**Settings:**
- `theme?` - Color theme
- `showIcon?` (boolean) - Show/hide icon
- `showTrend?` (boolean) - Show/hide trend
- `valueSize?` ('sm' | 'md' | 'lg') - Value text size
- `layout?` ('horizontal' | 'vertical') - Layout direction

---

### 2. ProgressCard - Goal Progress Tracking

Display goal progress with progress bar and status.

```tsx
<DashboardCard
  type="progress"
  data={{
    label: 'Monthly Sales Goal',
    current: 75000,
    target: 100000,
    unit: '$',
    subtitle: '15 days remaining',
    icon: <TargetIcon />
  }}
  settings={{
    theme: 'primary',
    showPercentage: true,
    showValues: true,
    progressType: 'bar',
    status: 'on-track'
  }}
/>
```

**Data Props:**
- `label` (string) - Goal label
- `current` (number) - Current progress value
- `target` (number) - Target value
- `unit?` (string) - Unit label (e.g., '$', 'items')
- `subtitle?` (ReactNode) - Optional subtitle
- `icon?` (ReactNode) - Optional icon

**Settings:**
- `theme?` - Color theme
- `showPercentage?` (boolean) - Show percentage
- `showValues?` (boolean) - Show current/target values
- `progressType?` ('bar' | 'circle') - Progress visualization type
- `status?` ('on-track' | 'at-risk' | 'exceeded' | 'behind') - Progress status

---

### 3. ComparisonCard - Side-by-Side Comparison

Compare two or more related metrics.

```tsx
<DashboardCard
  type="comparison"
  data={{
    label: 'Traffic Sources',
    items: [
      {
        label: 'Desktop',
        value: '12.5K',
        trend: { value: 15.3, isPositive: true },
        icon: <DesktopIcon />
      },
      {
        label: 'Mobile',
        value: '8.3K',
        trend: { value: 8.7, isPositive: true },
        icon: <MobileIcon />
      }
    ]
  }}
  settings={{
    theme: 'primary',
    layout: 'horizontal',
    showTrends: true,
    showDivider: true
  }}
/>
```

**Data Props:**
- `label` (string) - Card label
- `items` (Array) - Array of comparison items
  - `label` (string) - Item label
  - `value` (string | number) - Item value
  - `trend?` (TrendData) - Optional trend
  - `icon?` (ReactNode) - Optional icon

**Settings:**
- `theme?` - Color theme
- `layout?` ('horizontal' | 'vertical') - Layout direction
- `showTrends?` (boolean) - Show trend indicators
- `showDivider?` (boolean) - Show divider between items

---

### 4. ActivityCard - Activity Timeline

Display recent activities or events.

```tsx
<DashboardCard
  type="activity"
  data={{
    title: 'Recent Orders',
    activities: [
      {
        id: '1',
        label: 'Order #12345 placed',
        value: '$125.00',
        timestamp: '2 min ago',
        status: 'success',
        icon: <CheckIcon />
      },
      // ... more activities
    ]
  }}
  settings={{
    theme: 'primary',
    maxItems: 5,
    showTimestamps: true,
    showIcons: true,
    compact: false
  }}
/>
```

**Data Props:**
- `title` (string) - Card title
- `activities` (Array) - Array of activities
  - `id` (string) - Unique ID
  - `label` (string) - Activity label
  - `value?` (string | number) - Optional value
  - `timestamp?` (string) - Optional timestamp
  - `icon?` (ReactNode) - Optional icon
  - `status?` ('success' | 'warning' | 'danger' | 'info') - Status indicator

**Settings:**
- `theme?` - Color theme
- `maxItems?` (number) - Max items to display
- `showTimestamps?` (boolean) - Show timestamps
- `showIcons?` (boolean) - Show icons
- `compact?` (boolean) - Compact layout

---

### 5. OrderCard - E-Commerce Orders

Display order information for e-commerce dashboards.

```tsx
<DashboardCard
  type="order"
  data={{
    orderId: '12345',
    status: 'processing',
    amount: 234.99,
    currency: 'USD',
    customer: 'John Doe',
    items: 5,
    date: '2024-01-15',
    icon: <ShoppingCartIcon />
  }}
  settings={{
    theme: 'primary',
    showCustomer: true,
    showItems: true,
    showDate: true,
    layout: 'detailed'
  }}
/>
```

**Data Props:**
- `orderId` (string) - Order ID
- `status` ('pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled') - Order status
- `amount` (number) - Order amount
- `currency?` (string) - Currency code (default: 'USD')
- `customer?` (string) - Customer name
- `items?` (number) - Number of items
- `date?` (string) - Order date
- `icon?` (ReactNode) - Optional icon

**Settings:**
- `theme?` - Color theme
- `showCustomer?` (boolean) - Show customer name
- `showItems?` (boolean) - Show item count
- `showDate?` (boolean) - Show order date
- `layout?` ('compact' | 'detailed') - Layout style

---

### 6. UserCard - User/Employee Information

Display user or employee information for HRMS dashboards.

```tsx
<DashboardCard
  type="user"
  data={{
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    department: 'Engineering',
    avatar: <Avatar src="..." />,
    status: 'active',
    metrics: [
      { label: 'Projects', value: '12' },
      { label: 'Tasks Completed', value: '145' }
    ]
  }}
  settings={{
    theme: 'primary',
    showStatus: true,
    showMetrics: true,
    layout: 'horizontal',
    avatarSize: 'md'
  }}
/>
```

**Data Props:**
- `name` (string) - User name
- `role?` (string) - User role/title
- `department?` (string) - Department name
- `avatar?` (ReactNode) - Avatar component
- `status?` ('active' | 'away' | 'offline') - User status
- `metrics?` (Array) - Array of metric objects
  - `label` (string) - Metric label
  - `value` (string | number) - Metric value

**Settings:**
- `theme?` - Color theme
- `showStatus?` (boolean) - Show status badge
- `showMetrics?` (boolean) - Show metrics section
- `layout?` ('horizontal' | 'vertical') - Layout direction
- `avatarSize?` ('sm' | 'md' | 'lg') - Avatar size

---

### 7. RevenueCard - Financial Metrics

Display revenue information with optional breakdown.

```tsx
<DashboardCard
  type="revenue"
  data={{
    label: 'Total Revenue',
    amount: 125430,
    currency: 'USD',
    period: 'Last 30 days',
    icon: <DollarIcon />,
    trend: {
      value: 18.5,
      label: 'vs last month',
      isPositive: true
    },
    breakdown: [
      { label: 'Product Sales', value: 89500, percentage: 71 },
      { label: 'Services', value: 25430, percentage: 20 },
      { label: 'Other', value: 10500, percentage: 9 }
    ]
  }}
  settings={{
    theme: 'success',
    showTrend: true,
    showBreakdown: true,
    showPeriod: true,
    format: 'detailed'
  }}
/>
```

**Data Props:**
- `label` (string) - Revenue label
- `amount` (number) - Revenue amount
- `currency?` (string) - Currency code (default: 'USD')
- `period?` (string) - Time period
- `icon?` (ReactNode) - Optional icon
- `trend?` (TrendData) - Optional trend
- `breakdown?` (Array) - Revenue breakdown
  - `label` (string) - Category label
  - `value` (number) - Category value
  - `percentage?` (number) - Percentage of total

**Settings:**
- `theme?` - Color theme
- `showTrend?` (boolean) - Show trend indicator
- `showBreakdown?` (boolean) - Show revenue breakdown
- `showPeriod?` (boolean) - Show time period
- `format?` ('compact' | 'detailed') - Display format

---

### 8. AlertCard - Alerts & Notifications

Display important alerts and notifications.

```tsx
<DashboardCard
  type="alert"
  data={{
    title: 'Critical Error',
    message: 'Payment gateway connection failed. Immediate attention required.',
    severity: 'error',
    icon: <AlertIcon />,
    timestamp: '2 minutes ago',
    actionLabel: 'View Details',
    onAction: () => handleAction()
  }}
  settings={{
    showIcon: true,
    showTimestamp: true,
    dismissible: true,
    onDismiss: () => handleDismiss()
  }}
/>
```

**Data Props:**
- `title` (string) - Alert title
- `message` (string) - Alert message
- `severity` ('info' | 'warning' | 'error' | 'success') - Alert severity
- `icon?` (ReactNode) - Optional icon
- `timestamp?` (string) - Optional timestamp
- `actionLabel?` (string) - Action button label
- `onAction?` (Function) - Action button handler

**Settings:**
- `theme?` - Color theme (overrides severity theme)
- `showIcon?` (boolean) - Show icon
- `showTimestamp?` (boolean) - Show timestamp
- `dismissible?` (boolean) - Can be dismissed
- `onDismiss?` (Function) - Dismiss handler

---

### 9. RankingCard - Top Items/Rankings

Display ranked lists (top products, performers, etc.).

```tsx
<DashboardCard
  type="ranking"
  data={{
    title: 'Top Selling Products',
    items: [
      {
        rank: 1,
        label: 'Wireless Headphones',
        value: 1245,
        percentage: 100,
        icon: <StarIcon />
      },
      // ... more items
    ]
  }}
  settings={{
    theme: 'primary',
    maxItems: 5,
    showPercentages: true,
    showBars: true,
    highlightTop: 3
  }}
/>
```

**Data Props:**
- `title` (string) - Card title
- `items` (Array) - Ranked items
  - `rank` (number) - Rank position
  - `label` (string) - Item label
  - `value` (string | number) - Item value
  - `icon?` (ReactNode) - Optional icon
  - `percentage?` (number) - Optional percentage

**Settings:**
- `theme?` - Color theme
- `maxItems?` (number) - Max items to display
- `showPercentages?` (boolean) - Show percentages
- `showBars?` (boolean) - Show progress bars
- `highlightTop?` (number) - Number of top items to highlight

---

### 10. StatusCard - Service/System Status

Display service or system status information.

```tsx
<DashboardCard
  type="status"
  data={{
    service: 'API Server',
    status: 'online',
    icon: <ServerIcon />,
    uptime: '99.9%',
    lastChecked: '1 minute ago',
    metrics: [
      { label: 'Response Time', value: '45ms' },
      { label: 'Requests/min', value: '12.5K' }
    ]
  }}
  settings={{
    theme: 'success',
    showMetrics: true,
    showUptime: true,
    showLastChecked: true,
    layout: 'detailed'
  }}
/>
```

**Data Props:**
- `service` (string) - Service name
- `status` ('online' | 'offline' | 'degraded' | 'maintenance') - Service status
- `icon?` (ReactNode) - Optional icon
- `uptime?` (string) - Uptime percentage
- `lastChecked?` (string) - Last check time
- `metrics?` (Array) - Status metrics
  - `label` (string) - Metric label
  - `value` (string | number) - Metric value

**Settings:**
- `theme?` - Color theme
- `showMetrics?` (boolean) - Show metrics
- `showUptime?` (boolean) - Show uptime
- `showLastChecked?` (boolean) - Show last checked time
- `layout?` ('compact' | 'detailed') - Display layout

---

## Common Props

All card types support these common props:

```tsx
interface BaseDashboardCardProps {
  className?: string;           // Custom CSS class
  style?: React.CSSProperties;  // Inline styles
  onClick?: () => void;         // Click handler (makes card clickable)
  loading?: boolean;            // Loading state
  size?: 'sm' | 'md' | 'lg';   // Card size
}
```

## Theme Variants

All cards support 6 theme variants:

- `primary` - Blue theme (default)
- `secondary` - Gray theme
- `success` - Green theme
- `danger` - Red theme
- `warning` - Orange/yellow theme
- `info` - Light blue theme

## Dashboard Layout Examples

### E-Commerce Dashboard

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
  <DashboardCard type="revenue" data={...} settings={...} />
  <DashboardCard type="progress" data={...} settings={...} />
  <DashboardCard type="order" data={...} settings={...} />
  <DashboardCard type="ranking" data={...} settings={...} />
</div>
```

### HRMS Dashboard

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
  <DashboardCard type="stat" data={...} settings={...} />
  <DashboardCard type="user" data={...} settings={...} />
  <DashboardCard type="progress" data={...} settings={...} />
  <DashboardCard type="activity" data={...} settings={...} />
</div>
```

### Analytics Dashboard

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
  <DashboardCard type="comparison" data={...} settings={...} />
  <DashboardCard type="stat" data={...} settings={...} />
  <DashboardCard type="ranking" data={...} settings={...} />
</div>
```

### System Monitoring Dashboard

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
  <DashboardCard type="status" data={...} settings={...} />
  <DashboardCard type="alert" data={...} settings={...} />
  <DashboardCard type="activity" data={...} settings={...} />
</div>
```

## TypeScript Support

The DashboardCard uses discriminated union types for complete type safety:

```tsx
// Type is automatically inferred based on the 'type' prop
<DashboardCard
  type="stat"
  data={{
    // TypeScript knows these are StatCardData props
    label: 'Users',
    value: 1234
  }}
  settings={{
    // TypeScript knows these are StatCardSettings
    theme: 'primary'
  }}
/>
```

## Styling & Customization

### CSS Variables

The component uses CSS custom properties that can be overridden:

```css
:root {
  --color-primary-100: #dbeafe;
  --color-primary-600: #2563eb;
  /* ... other theme colors */
}
```

### Custom Classes

Add custom classes for additional styling:

```tsx
<DashboardCard
  type="stat"
  data={...}
  className="my-custom-card"
  style={{ borderRadius: '16px' }}
/>
```

## Accessibility

- Keyboard navigation support
- ARIA labels and roles
- Focus indicators
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lightweight (~15KB gzipped)
- Optimized re-renders with React.memo
- No external dependencies beyond Vertex UI components

## Best Practices

1. **Use appropriate card types** - Choose the card type that matches your data
2. **Keep labels concise** - Short, descriptive labels work best
3. **Limit activity items** - Use `maxItems` to prevent long lists
4. **Provide loading states** - Use the `loading` prop during data fetching
5. **Handle errors gracefully** - Use AlertCard for error states
6. **Responsive grids** - Use CSS Grid with `repeat(auto-fit, minmax(...))`
7. **Consistent themes** - Use consistent theme colors across your dashboard

## License

Part of Vertex UI React - MIT License
