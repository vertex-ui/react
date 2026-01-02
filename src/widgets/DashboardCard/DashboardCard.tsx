import React from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './DashboardCard.css';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';
import { Badge } from '../../components/Badge';

// ==================== BASE TYPES ====================

export type DashboardCardTheme = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type DashboardCardSize = 'sm' | 'md' | 'lg';

interface BaseDashboardCardProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  loading?: boolean;
  size?: DashboardCardSize;
  variant?: 'outlined' | 'filled';
}

// ==================== TREND INDICATOR ====================

interface TrendData {
  value: number;
  label?: string;
  isPositive?: boolean;
}

// ==================== STAT CARD ====================

export interface StatCardData {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: TrendData;
  subtitle?: string;
}

export interface StatCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  showIcon?: boolean;
  showTrend?: boolean;
  valueSize?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
}

export interface StatCardProps extends BaseDashboardCardProps {
  type: 'stat';
  data: StatCardData;
  settings?: StatCardSettings;
}

// ==================== PROGRESS CARD ====================

export interface ProgressCardData {
  current: number;
  target: number;
  label: string;
  icon?: React.ReactNode;
  unit?: string;
  subtitle?: string;
}

export interface ProgressCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  showPercentage?: boolean;
  showValues?: boolean;
  progressType?: 'bar' | 'circle';
  status?: 'on-track' | 'at-risk' | 'exceeded' | 'behind';
}

export interface ProgressCardProps extends BaseDashboardCardProps {
  type: 'progress';
  data: ProgressCardData;
  settings?: ProgressCardSettings;
}

// ==================== COMPARISON CARD ====================

export interface ComparisonCardData {
  label: string;
  items: Array<{
    label: string;
    value: string | number;
    trend?: TrendData;
    icon?: React.ReactNode;
  }>;
}

export interface ComparisonCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  layout?: 'horizontal' | 'vertical';
  showTrends?: boolean;
  showDivider?: boolean;
}

export interface ComparisonCardProps extends BaseDashboardCardProps {
  type: 'comparison';
  data: ComparisonCardData;
  settings?: ComparisonCardSettings;
}

// ==================== ACTIVITY/TIMELINE CARD ====================

export interface ActivityCardData {
  title: string;
  onViewAll?: () => void;
  activities: Array<{
    id: string;
    label: string;
    value?: string | number;
    timestamp?: string;
    icon?: React.ReactNode;
    status?: 'success' | 'warning' | 'danger' | 'info';
  }>;
}

export interface ActivityCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  maxItems?: number;
  showTimestamps?: boolean;
  showIcons?: boolean;
  compact?: boolean;
}

export interface ActivityCardProps extends BaseDashboardCardProps {
  type: 'activity';
  data: ActivityCardData;
  settings?: ActivityCardSettings;
}

// ==================== ORDER CARD (E-COMMERCE) ====================

export interface OrderCardData {
  orderId: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  amount: number;
  currency?: string;
  customer?: string;
  items?: number;
  date?: string;
  icon?: React.ReactNode;
}

export interface OrderCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  showCustomer?: boolean;
  showItems?: boolean;
  showDate?: boolean;
  layout?: 'compact' | 'detailed';
}

export interface OrderCardProps extends BaseDashboardCardProps {
  type: 'order';
  data: OrderCardData;
  settings?: OrderCardSettings;
}

// ==================== USER/EMPLOYEE CARD (HRMS) ====================

export interface UserCardData {
  name: string;
  role?: string;
  department?: string;
  avatar?: React.ReactNode;
  status?: 'active' | 'away' | 'offline';
  metrics?: Array<{
    label: string;
    value: string | number;
  }>;
}

export interface UserCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  showStatus?: boolean;
  showMetrics?: boolean;
  layout?: 'horizontal' | 'vertical';
  avatarSize?: 'sm' | 'md' | 'lg';
}

export interface UserCardProps extends BaseDashboardCardProps {
  type: 'user';
  data: UserCardData;
  settings?: UserCardSettings;
}

// ==================== REVENUE CARD ====================

export interface RevenueCardData {
  amount: number;
  currency?: string;
  label: string;
  period?: string;
  trend?: TrendData;
  icon?: React.ReactNode;
  breakdown?: Array<{
    label: string;
    value: number;
    percentage?: number;
  }>;
}

export interface RevenueCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  showTrend?: boolean;
  showBreakdown?: boolean;
  showPeriod?: boolean;
  format?: 'compact' | 'detailed';
}

export interface RevenueCardProps extends BaseDashboardCardProps {
  type: 'revenue';
  data: RevenueCardData;
  settings?: RevenueCardSettings;
}

// ==================== ALERT CARD ====================

export interface AlertCardData {
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'error' | 'success';
  icon?: React.ReactNode;
  timestamp?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export interface AlertCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  showIcon?: boolean;
  showTimestamp?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export interface AlertCardProps extends BaseDashboardCardProps {
  type: 'alert';
  data: AlertCardData;
  settings?: AlertCardSettings;
}

// ==================== RANKING CARD ====================

export interface RankingCardData {
  title: string;
  items: Array<{
    rank: number;
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    percentage?: number;
  }>;
}

export interface RankingCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  maxItems?: number;
  showPercentages?: boolean;
  showBars?: boolean;
  highlightTop?: number;
}

export interface RankingCardProps extends BaseDashboardCardProps {
  type: 'ranking';
  data: RankingCardData;
  settings?: RankingCardSettings;
}

// ==================== METRIC CARD ====================

export interface MetricCardData {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: TrendData;
  subtitle?: string;
  chartData?: Array<number>;
  chartType?: 'line' | 'bar';
  targetValue?: number;
  comparisonValue?: string | number;
  comparisonLabel?: string;
}

export interface MetricCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  showChart?: boolean;
  showTrend?: boolean;
  showComparison?: boolean;
  chartHeight?: number;
  valueSize?: 'sm' | 'md' | 'lg';
}

export interface MetricCardProps extends BaseDashboardCardProps {
  type: 'metric';
  data: MetricCardData;
  settings?: MetricCardSettings;
}

// ==================== STATUS CARD ====================

export interface StatusCardData {
  service: string;
  status: 'online' | 'offline' | 'degraded' | 'maintenance';
  icon?: React.ReactNode;
  uptime?: string;
  lastChecked?: string;
  metrics?: Array<{
    label: string;
    value: string | number;
  }>;
}

export interface StatusCardSettings {
  theme?: DashboardCardTheme;
  variant?: 'outlined' | 'filled';
  showMetrics?: boolean;
  showUptime?: boolean;
  showLastChecked?: boolean;
  layout?: 'compact' | 'detailed';
}

export interface StatusCardProps extends BaseDashboardCardProps {
  type: 'status';
  data: StatusCardData;
  settings?: StatusCardSettings;
}

// ==================== UNION TYPE ====================

export type DashboardCardProps =
  | StatCardProps
  | ProgressCardProps
  | ComparisonCardProps
  | ActivityCardProps
  | OrderCardProps
  | UserCardProps
  | RevenueCardProps
  | AlertCardProps
  | RankingCardProps
  | MetricCardProps
  | StatusCardProps;

// ==================== HELPER COMPONENTS ====================

const TrendIndicator: React.FC<{ trend: TrendData; size?: 'sm' | 'md' }> = ({ trend, size = 'md' }) => {
  const isPositive = trend.isPositive ?? trend.value > 0;
  const absValue = Math.abs(trend.value);
  
  return (
    <Flex align="center" gap={0.5} className={`dashboard-card__trend dashboard-card__trend--${isPositive ? 'positive' : 'negative'} dashboard-card__trend--${size}`}>
      <span className="dashboard-card__trend-icon">
        {isPositive ? '↑' : '↓'}
      </span>
      <Text variant="caption" className="dashboard-card__trend-value">
        {absValue}%
      </Text>
      {trend.label && (
        <Text variant="caption" className="dashboard-card__trend-label">
          {trend.label}
        </Text>
      )}
    </Flex>
  );
};

const ProgressBar: React.FC<{ percentage: number; theme?: DashboardCardTheme; status?: string }> = ({ 
  percentage, 
  theme = 'primary',
  status
}) => {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
  const statusClass = status ? `dashboard-card__progress-bar--${status}` : `dashboard-card__progress-bar--${theme}`;
  
  return (
    <div className="dashboard-card__progress-bar-container">
      <div 
        className={`dashboard-card__progress-bar ${statusClass}`}
        style={{ width: `${clampedPercentage}%` }}
      />
    </div>
  );
};

const IconWrapper: React.FC<{ icon: React.ReactNode; theme?: DashboardCardTheme; size?: DashboardCardSize }> = ({ 
  icon, 
  theme = 'primary',
  size = 'md'
}) => (
  <div className={`dashboard-card__icon dashboard-card__icon--${theme} dashboard-card__icon--${size}`}>
    {icon}
  </div>
);

const StatusBadge: React.FC<{ status: string; label?: string }> = ({ status, label }) => {
  const variantMap: Record<string, any> = {
    'active': 'success',
    'online': 'success',
    'delivered': 'success',
    'success': 'success',
    'pending': 'warning',
    'processing': 'warning',
    'warning': 'warning',
    'at-risk': 'warning',
    'away': 'warning',
    'degraded': 'warning',
    'cancelled': 'danger',
    'offline': 'danger',
    'error': 'danger',
    'danger': 'danger',
    'behind': 'danger',
    'shipped': 'info',
    'info': 'info',
    'maintenance': 'info',
  };

  return (
    <Badge variant={variantMap[status] || 'secondary'} size="sm">
      {label || status}
    </Badge>
  );
};

// ==================== CARD IMPLEMENTATIONS ====================

const StatCard: React.FC<StatCardProps> = ({ data, settings = {}, className = '', style, onClick, loading, size = 'md' }) => {
  const {
    theme = 'primary',
    variant = 'outlined',
    showIcon = true,
    showTrend = true,
    valueSize = 'lg',
    layout = 'vertical'
  } = settings;

  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--stat dashboard-card--${layout} dashboard-card--${variant} dashboard-card--${theme} ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  return (
    <Card 
      variant={variant === 'filled' ? 'elevated' : 'outlined'}
      className={cardClass}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <Flex align="center" justify="center" style={{ minHeight: 120 }}>
          <Text variant="body2">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={2}>
          <Flex align="center" justify="between" wrap="nowrap" gap={2}>
            <Text 
              variant="overline" 
              weight="semibold" 
              color="secondary"
              className="dashboard-card__label"
              style={{ flex: 1 }}
            >
              {data.label}
            </Text>
            {showIcon && data.icon && <IconWrapper icon={data.icon} theme={theme} size={size} />}
          </Flex>
          
          <Flex direction="column" gap={0.5}>
            <Text 
              variant={valueSize === 'lg' ? 'h2' : valueSize === 'md' ? 'h3' : 'h4'} 
              weight="bold"
              className="dashboard-card__value"
            >
              {data.value}
            </Text>
            {data.subtitle && (
              <Text variant="caption" color="secondary" className="dashboard-card__subtitle">
                {data.subtitle}
              </Text>
            )}
          </Flex>

          {showTrend && data.trend && (
            <Flex>
              <TrendIndicator trend={data.trend} />
            </Flex>
          )}
        </Flex>
      )}
    </Card>
  );
};

const ProgressCard: React.FC<ProgressCardProps> = ({ data, settings = {}, className = '', style, onClick, loading, size = 'md' }) => {
  const {
    theme = 'primary',
    variant = 'outlined',
    showPercentage = true,
    showValues = true,
    progressType = 'bar',
    status
  } = settings;

  const percentage = (data.current / data.target) * 100;
  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--progress dashboard-card--${variant} dashboard-card--${theme} ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  return (
    <Card 
      variant={variant === 'filled' ? 'elevated' : 'outlined'}
      className={cardClass}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <Flex align="center" justify="center" style={{ minHeight: 120 }}>
          <Text variant="body2">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={2}>
          <Flex align="center" justify="between" gap={2}>
            <Flex direction="column" gap={0.5} style={{ flex: 1 }}>
              <Text 
                variant="overline" 
                weight="semibold" 
                className="dashboard-card__label"
              >
                {data.label}
              </Text>
              {data.subtitle && (
                <Text variant="caption" color="secondary" className="dashboard-card__subtitle">
                  {data.subtitle}
                </Text>
              )}
            </Flex>
            {data.icon && <IconWrapper icon={data.icon} theme={theme} size={size} />}
          </Flex>

          <Flex direction="column" gap={1.5}>
            {progressType === 'bar' && <ProgressBar percentage={percentage} theme={theme} status={status} />}
            
            <Flex align="center" justify="between" gap={2}>
              {showValues && (
                <Text 
                  variant="body2" 
                  weight="medium" 
                  className="dashboard-card__progress-values"
                >
                  {data.current}{data.unit && ` ${data.unit}`} / {data.target}{data.unit && ` ${data.unit}`}
                </Text>
              )}
              {showPercentage && (
                <Text 
                  variant="h3" 
                  weight="bold"
                  className={`dashboard-card__percentage dashboard-card__percentage--${theme}`}
                >
                  {Math.round(percentage)}%
                </Text>
              )}
            </Flex>

            {status && (
              <Flex justify="end">
                <StatusBadge status={status} />
              </Flex>
            )}
          </Flex>
        </Flex>
      )}
    </Card>
  );
};

const ComparisonCard: React.FC<ComparisonCardProps> = ({ data, settings = {}, className = '', style, onClick, loading, size = 'md' }) => {
  const {
    theme = 'primary',
    variant = 'outlined',
    layout = 'horizontal',
    showTrends = true,
    showDivider = true
  } = settings;

  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--comparison dashboard-card--${layout} dashboard-card--${variant} dashboard-card--${theme} ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  return (
    <Card 
      variant={variant === 'filled' ? 'elevated' : 'outlined'}
      className={cardClass}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <Flex align="center" justify="center" style={{ minHeight: 120 }}>
          <Text variant="body2">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={2}>
          <Text 
            variant="overline" 
            weight="semibold" 
            className="dashboard-card__label"
          >
            {data.label}
          </Text>
          
          <Flex 
            direction={layout === 'vertical' ? 'column' : 'row'} 
            gap={layout === 'vertical' ? 2 : 3} 
            justify={layout === 'horizontal' ? 'between' : 'start'}
            align={layout === 'horizontal' ? 'stretch' : 'start'}
            className="dashboard-card__comparison-items"
          >
            {data.items.map((item, index) => (
              <React.Fragment key={index}>
                <Flex direction="column" gap={1} style={{ flex: 1, minWidth: 0 }}>
                  <Flex align="center" gap={1}>
                    {item.icon && <IconWrapper icon={item.icon} theme={theme} size={size} />}
                    <Text 
                      variant="caption" 
                      weight="medium"
                      color="secondary"
                      className="dashboard-card__comparison-label"
                      truncate
                    >
                      {item.label}
                    </Text>
                  </Flex>
                  <Text variant="h3" weight="bold" className="dashboard-card__value">
                    {item.value}
                  </Text>
                  {showTrends && item.trend && (
                    <Flex>
                      <TrendIndicator trend={item.trend} size="sm" />
                    </Flex>
                  )}
                </Flex>
                
                {showDivider && index < data.items.length - 1 && (
                  <div className={`dashboard-card__divider dashboard-card__divider--${layout}`} />
                )}
              </React.Fragment>
            ))}
          </Flex>
        </Flex>
      )}
    </Card>
  );
};

const ActivityCard: React.FC<ActivityCardProps> = ({ data, settings = {}, className = '', style, onClick, loading }) => {
  const {
    theme = 'primary',
    variant = 'outlined',
    maxItems = 5,
    showTimestamps = true,
    compact = false
  } = settings;

  const displayActivities = data.activities.slice(0, maxItems);
  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--activity dashboard-card--${variant} dashboard-card--${theme} ${compact ? 'dashboard-card--compact' : ''} ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  return (
    <Card 
      variant={variant === 'filled' ? 'elevated' : 'outlined'}
      className={cardClass}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <Flex align="center" justify="center" style={{ minHeight: 120 }}>
          <Text variant="body2">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={2.5}>
          {/* Header */}
          <Flex align="center" justify="between">
            <Text 
              variant="h6" 
              weight="semibold"
              className="dashboard-card__label"
            >
              {data.title}
            </Text>
            {data.onViewAll && (
              <button 
                className="dashboard-card__view-all-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  data.onViewAll?.();
                }}
              >
                View All
                <span style={{ marginLeft: 4 }}>›</span>
              </button>
            )}
          </Flex>
          
          {/* Activity List */}
          <Flex direction="column" gap={0} className="dashboard-card__activity-list">
            {displayActivities.map((activity) => (
              <div 
                key={activity.id} 
                className="dashboard-card__activity-item"
              >
                <Flex align="start" justify="between" gap={2}>
                  {/* Left: Badge + Content */}
                  <Flex align="start" gap={1.5} style={{ flex: 1, minWidth: 0 }}>
                    {/* Status Badge */}
                    {activity.status && (
                      <Flex style={{ flexShrink: 0, paddingTop: 2 }}>
                        <StatusBadge status={activity.status} />
                      </Flex>
                    )}
                    
                    {/* Content Column */}
                    <Flex direction="column" gap={0.5} style={{ flex: 1, minWidth: 0 }}>
                      {/* Order Label */}
                      <Text 
                        variant="body2" 
                        weight="medium"
                        className="dashboard-card__activity-label"
                      >
                        {activity.label}
                      </Text>
                      
                      {/* Status Text + Timestamp */}
                      <Flex align="center" gap={1}>
                        <Text 
                          variant="caption" 
                          color="secondary"
                          className="dashboard-card__activity-status-text"
                          style={{ textTransform: 'capitalize' }}
                        >
                          {activity.status || 'Pending'}
                        </Text>
                        {showTimestamps && activity.timestamp && (
                          <>
                            <span style={{ color: 'var(--color-text-secondary, #6b7280)', fontSize: '12px' }}>•</span>
                            <Text 
                              variant="caption" 
                              color="secondary"
                              className="dashboard-card__timestamp"
                            >
                              {activity.timestamp}
                            </Text>
                          </>
                        )}
                      </Flex>
                    </Flex>
                  </Flex>
                  
                  {/* Right: Value Column */}
                  {activity.value && (
                    <Flex direction="column" align="end" gap={0.5} style={{ flexShrink: 0 }}>
                      {/* Main Value */}
                      <Text 
                        variant="body2" 
                        weight="semibold"
                        className="dashboard-card__activity-value"
                      >
                        {activity.value}
                      </Text>
                      {/* Secondary Value (lighter) */}
                      <Text 
                        variant="caption" 
                        color="secondary"
                        className="dashboard-card__activity-value-secondary"
                      >
                        {activity.value}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </div>
            ))}
          </Flex>

          {data.activities.length > maxItems && (
            <Text variant="caption" color="secondary" className="dashboard-card__more" style={{ textAlign: 'center', paddingTop: 4 }}>
              +{data.activities.length - maxItems} more
            </Text>
          )}
        </Flex>
      )}
    </Card>
  );
};

const OrderCard: React.FC<OrderCardProps> = ({ data, settings = {}, className = '', style, onClick, loading, size = 'md' }) => {
  const {
    theme = 'primary',
    variant = 'outlined',
    showCustomer = true,
    showItems = true,
    showDate = true,
    layout = 'detailed'
  } = settings;

  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--order dashboard-card--${layout} dashboard-card--${variant} dashboard-card--${theme} ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  const formatCurrency = (amount: number, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
  };

  return (
    <Card 
      variant={variant === 'filled' ? 'elevated' : 'outlined'}
      className={cardClass}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <Flex align="center" justify="center" style={{ minHeight: 120 }}>
          <Text variant="body2">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={2}>
          <Flex align="center" justify="between" gap={2}>
            <Flex align="center" gap={1}>
              {data.icon && <IconWrapper icon={data.icon} theme={theme} size={size} />}
              <Text 
                variant="body2" 
                weight="medium"
                className="dashboard-card__label dashboard-card__label--order"
              >
                Order #{data.orderId}
              </Text>
            </Flex>
            <StatusBadge status={data.status} />
          </Flex>

          <Flex direction="column" gap={1.5}>
            <Text variant="h3" weight="bold" className="dashboard-card__value">
              {formatCurrency(data.amount, data.currency)}
            </Text>

            {(showCustomer && data.customer || showItems && data.items || showDate && data.date) && (
              <Flex direction="column" gap={0.75} className="dashboard-card__order-details">
                {showCustomer && data.customer && (
                  <Flex align="center" gap={1}>
                    <Text variant="caption" weight="medium" color="secondary" className="dashboard-card__detail-label">
                      Customer:
                    </Text>
                    <Text variant="caption" className="dashboard-card__detail-value">
                      {data.customer}
                    </Text>
                  </Flex>
                )}
                {showItems && data.items && (
                  <Flex align="center" gap={1}>
                    <Text variant="caption" weight="medium" color="secondary" className="dashboard-card__detail-label">
                      Items:
                    </Text>
                    <Text variant="caption" className="dashboard-card__detail-value">
                      {data.items}
                    </Text>
                  </Flex>
                )}
                {showDate && data.date && (
                  <Flex align="center" gap={1}>
                    <Text variant="caption" weight="medium" color="secondary" className="dashboard-card__detail-label">
                      Date:
                    </Text>
                    <Text variant="caption" className="dashboard-card__detail-value">
                      {data.date}
                    </Text>
                  </Flex>
                )}
              </Flex>
            )}
          </Flex>
        </Flex>
      )}
    </Card>
  );
};

const UserCard: React.FC<UserCardProps> = ({ data, settings = {}, className = '', style, onClick, loading, size = 'md' }) => {
  const {
    theme = 'primary',
    variant = 'outlined',
    showStatus = true,
    showMetrics = true,
    layout = 'horizontal',
    avatarSize
  } = settings;
  
  const effectiveAvatarSize = avatarSize || size;

  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--user dashboard-card--${layout} dashboard-card--${variant} dashboard-card--${theme} ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  return (
    <Card 
      variant={variant === 'filled' ? 'elevated' : 'outlined'}
      className={cardClass}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <Flex align="center" justify="center" style={{ minHeight: 120 }}>
          <Text variant="body2">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={2}>
          <Flex align="center" gap={2}>
            {data.avatar && (
              <div className={`dashboard-card__avatar dashboard-card__avatar--${effectiveAvatarSize} ${variant === 'filled' ? 'dashboard-card__avatar--filled' : ''}`}>
                {data.avatar}
              </div>
            )}
            
            <Flex direction="column" gap={0.5} style={{ flex: 1, minWidth: 0 }}>
              <Flex align="center" gap={1} wrap="wrap">
                <Text variant="h4" weight="semibold" className="dashboard-card__user-name" truncate>
                  {data.name}
                </Text>
                {showStatus && data.status && (
                  <StatusBadge status={data.status} />
                )}
              </Flex>
              
              {data.role && (
                <Text variant="body2" color="secondary" className="dashboard-card__user-role" truncate>
                  {data.role}
                </Text>
              )}
              
              {data.department && (
                <Text variant="caption" color="secondary" className="dashboard-card__user-department" truncate>
                  {data.department}
                </Text>
              )}
            </Flex>
          </Flex>

          {showMetrics && data.metrics && data.metrics.length > 0 && (
            <Flex direction="column" gap={1} className="dashboard-card__user-metrics">
              {data.metrics.map((metric, index) => (
                <Flex key={index} align="center" justify="between" gap={2}>
                  <Text variant="caption" weight="medium" color="secondary" className="dashboard-card__metric-label">
                    {metric.label}
                  </Text>
                  <Text variant="body2" weight="semibold" className="dashboard-card__metric-value">
                    {metric.value}
                  </Text>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      )}
    </Card>
  );
};

const RevenueCard: React.FC<RevenueCardProps> = ({ data, settings = {}, className = '', style, onClick, loading, size = 'md' }) => {
  const {
    theme = 'primary',
    variant = 'outlined',
    showTrend = true,
    showBreakdown = true,
    showPeriod = true,
    format = 'detailed'
  } = settings;

  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--revenue dashboard-card--${format} ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  const formatCurrency = (amount: number, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <Card 
      variant={variant === 'filled' ? 'elevated' : 'outlined'}
      className={cardClass}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <Flex align="center" justify="center" style={{ minHeight: 120 }}>
          <Text variant="body2">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={1.5}>
          <Flex align="center" justify="between">
            <Text variant="body2" className="dashboard-card__label">{data.label}</Text>
            {data.icon && <IconWrapper icon={data.icon} theme={theme} size={size} />}
          </Flex>

          <Flex direction="column" gap={0.5}>
            <Text variant="h2" className="dashboard-card__value">
              {formatCurrency(data.amount, data.currency)}
            </Text>
            {showPeriod && data.period && (
              <Text variant="caption" className="dashboard-card__period">
                {data.period}
              </Text>
            )}
          </Flex>

          {showTrend && data.trend && <TrendIndicator trend={data.trend} />}

          {showBreakdown && data.breakdown && data.breakdown.length > 0 && (
            <Flex direction="column" gap={0.5} className="dashboard-card__breakdown">
              {data.breakdown.map((item, index) => (
                <Flex key={index} align="center" justify="between">
                  <Text variant="caption" className="dashboard-card__breakdown-label">
                    {item.label}
                  </Text>
                  <Flex align="center" gap={1}>
                    <Text variant="body2" className="dashboard-card__breakdown-value">
                      {formatCurrency(item.value, data.currency)}
                    </Text>
                    {item.percentage !== undefined && (
                      <Text variant="caption" className="dashboard-card__breakdown-percentage">
                        ({item.percentage}%)
                      </Text>
                    )}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      )}
    </Card>
  );
};

const AlertCard: React.FC<AlertCardProps> = ({ data, settings = {}, className = '', style, onClick, loading, size = 'md' }) => {
  const {
    theme,
    variant = 'outlined',
    showIcon = true,
    showTimestamp = true,
    dismissible = false,
    onDismiss
  } = settings;

  const severityTheme = theme || (data.severity === 'error' ? 'danger' : data.severity === 'warning' ? 'warning' : data.severity === 'success' ? 'success' : 'info');
  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--alert dashboard-card--alert-${data.severity} ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  return (
    <Card 
      variant={variant === 'filled' ? 'elevated' : 'outlined'}
      className={cardClass}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <Flex align="center" justify="center" style={{ minHeight: 120 }}>
          <Text variant="body2">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={1.5}>
          <Flex align="center" justify="between">
            <Flex align="center" gap={1}>
              {showIcon && data.icon && <IconWrapper icon={data.icon} theme={severityTheme} size={size} />}
              <Text variant="h4" className="dashboard-card__alert-title">
                {data.title}
              </Text>
            </Flex>
            {dismissible && (
              <button 
                className="dashboard-card__dismiss-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onDismiss?.();
                }}
              >
                ×
              </button>
            )}
          </Flex>

          <Text variant="body2" className="dashboard-card__alert-message">
            {data.message}
          </Text>

          <Flex align="center" justify="between">
            {showTimestamp && data.timestamp && (
              <Text variant="caption" className="dashboard-card__timestamp">
                {data.timestamp}
              </Text>
            )}
            {data.actionLabel && (
              <button
                className={`dashboard-card__action-btn dashboard-card__action-btn--${severityTheme}`}
                onClick={(e) => {
                  e.stopPropagation();
                  data.onAction?.();
                }}
              >
                {data.actionLabel}
              </button>
            )}
          </Flex>
        </Flex>
      )}
    </Card>
  );
};

const RankingCard: React.FC<RankingCardProps> = ({ data, settings = {}, className = '', style, onClick, loading, size = 'md' }) => {
  const {
    theme = 'primary',
    variant = 'outlined',
    maxItems = 5,
    showPercentages = true,
    showBars = true,
    highlightTop = 3
  } = settings;

  const displayItems = data.items.slice(0, maxItems);
  const maxValue = Math.max(...displayItems.map(item => typeof item.value === 'number' ? item.value : 0));
  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--ranking ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  return (
    <Card 
      variant={variant === 'filled' ? 'elevated' : 'outlined'}
      className={cardClass}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <Flex align="center" justify="center" style={{ minHeight: 120 }}>
          <Text variant="body2">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={1.5}>
          <Text variant="body2" className="dashboard-card__label">{data.title}</Text>
          
          <Flex direction="column" gap={1} className="dashboard-card__ranking-list">
            {displayItems.map((item) => {
              const isHighlighted = item.rank <= highlightTop;
              const barWidth = typeof item.value === 'number' && maxValue > 0 ? (item.value / maxValue) * 100 : 0;
              
              return (
                <Flex key={item.rank} direction="column" gap={0.5} className={`dashboard-card__ranking-item ${isHighlighted ? 'dashboard-card__ranking-item--highlighted' : ''}`}>
                  <Flex align="center" justify="between">
                    <Flex align="center" gap={1} style={{ flex: 1, minWidth: 0 }}>
                      <div className={`dashboard-card__rank ${isHighlighted ? `dashboard-card__rank--${theme}` : ''}`}>
                        {item.rank}
                      </div>
                      {item.icon && <IconWrapper icon={item.icon} theme={theme} size={size} />}
                      <Text variant="body2" className="dashboard-card__ranking-label" style={{ flex: 1 }}>
                        {item.label}
                      </Text>
                    </Flex>
                    
                    <Flex align="center" gap={1}>
                      <Text variant="h4" className="dashboard-card__ranking-value">
                        {item.value}
                      </Text>
                      {showPercentages && item.percentage !== undefined && (
                        <Text variant="caption" className="dashboard-card__ranking-percentage">
                          ({item.percentage}%)
                        </Text>
                      )}
                    </Flex>
                  </Flex>
                  
                  {showBars && (
                    <div className="dashboard-card__ranking-bar-container">
                      <div 
                        className={`dashboard-card__ranking-bar ${isHighlighted ? `dashboard-card__ranking-bar--${theme}` : ''}`}
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                  )}
                </Flex>
              );
            })}
          </Flex>

          {data.items.length > maxItems && (
            <Text variant="caption" className="dashboard-card__more">
              +{data.items.length - maxItems} more items
            </Text>
          )}
        </Flex>
      )}
    </Card>
  );
};

// ==================== METRIC CARD COMPONENT ====================

const MetricCard: React.FC<MetricCardProps> = ({ data, settings = {}, className = '', style, onClick, loading, size = 'md' }) => {
  const {
    theme = 'primary',
    variant = 'outlined',
    showChart = true,
    showTrend = true,
    showComparison = false,
    chartHeight = 60,
    valueSize = 'lg'
  } = settings;

  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--metric dashboard-card--${variant} dashboard-card--theme-${theme} ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  // Calculate chart dimensions
  const chartData = data.chartData || [];
  const hasChart = showChart && chartData.length > 0;
  const chartType = data.chartType || 'line';

  // Normalize chart data to percentage
  const maxValue = Math.max(...chartData, 1);
  const minValue = Math.min(...chartData, 0);
  const range = maxValue - minValue || 1;

  const normalizedData = chartData.map(value => ((value - minValue) / range) * 100);

  // Generate SVG path for line chart
  const generateLinePath = () => {
    if (normalizedData.length === 0) return '';
    
    const width = 100;
    const height = 100;
    const stepX = width / (normalizedData.length - 1 || 1);
    
    const points = normalizedData.map((value, index) => ({
      x: index * stepX,
      y: height - value
    }));

    return points.map((point, index) => 
      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ');
  };

  return (
    <Card 
      className={cardClass}
      size={size}
      style={style}
      onClick={onClick}
      padding="lg"
    >
      {loading ? (
        <Flex direction="column" gap={2} align="center" justify="center" style={{ minHeight: '200px' }}>
          <Text variant="body2" className="dashboard-card__loading">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={2} style={{ height: '100%' }}>
          {/* Header: Icon + Label */}
          <Flex align="center" justify="between" gap={2}>
            <Flex align="center" gap={1.5}>
              {data.icon && (
                <div className={`dashboard-card__metric-icon dashboard-card__metric-icon--${theme}`}>
                  {data.icon}
                </div>
              )}
              <Text variant="body2" className="dashboard-card__metric-label">
                {data.label}
              </Text>
            </Flex>

            {/* Trend Indicator */}
            {showTrend && data.trend && (
              <div className={`dashboard-card__metric-trend ${data.trend.isPositive ? 'dashboard-card__metric-trend--up' : 'dashboard-card__metric-trend--down'}`}>
                <span className="dashboard-card__metric-trend-icon">
                  {data.trend.isPositive ? '↑' : '↓'}
                </span>
                <Text variant="caption" className="dashboard-card__metric-trend-value">
                  {Math.abs(data.trend.value)}%
                </Text>
              </div>
            )}
          </Flex>

          {/* Main Value */}
          <Flex direction="column" gap={0.5}>
            <Text 
              variant="h1" 
              className={`dashboard-card__metric-value dashboard-card__metric-value--${valueSize}`}
            >
              {data.value}
            </Text>
            
            {data.subtitle && (
              <Text variant="caption" className="dashboard-card__metric-subtitle">
                {data.subtitle}
              </Text>
            )}
          </Flex>

          {/* Comparison Value */}
          {showComparison && (data.comparisonValue || data.comparisonLabel) && (
            <Flex align="center" gap={1} className="dashboard-card__metric-comparison">
              <Text variant="caption" className="dashboard-card__metric-comparison-label">
                {data.comparisonLabel || 'vs previous'}:
              </Text>
              <Text variant="caption" weight="semibold" className="dashboard-card__metric-comparison-value">
                {data.comparisonValue}
              </Text>
            </Flex>
          )}

          {/* Chart */}
          {hasChart && (
            <div className="dashboard-card__metric-chart" style={{ height: `${chartHeight}px` }}>
              {chartType === 'line' ? (
                <svg 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                  className={`dashboard-card__metric-chart-svg dashboard-card__metric-chart-svg--${theme}`}
                >
                  <defs>
                    <linearGradient id={`gradient-${theme}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" className="dashboard-card__metric-gradient-start" />
                      <stop offset="100%" className="dashboard-card__metric-gradient-end" />
                    </linearGradient>
                  </defs>
                  
                  {/* Fill area under line */}
                  <path
                    d={`${generateLinePath()} L 100 100 L 0 100 Z`}
                    className="dashboard-card__metric-chart-area"
                    fill={`url(#gradient-${theme})`}
                  />
                  
                  {/* Line */}
                  <path
                    d={generateLinePath()}
                    className={`dashboard-card__metric-chart-line dashboard-card__metric-chart-line--${theme}`}
                    fill="none"
                  />

                  {/* Target line (optional) */}
                  {data.targetValue && (
                    <line
                      x1="0"
                      y1={100 - ((data.targetValue - minValue) / range) * 100}
                      x2="100"
                      y2={100 - ((data.targetValue - minValue) / range) * 100}
                      className="dashboard-card__metric-chart-target"
                      strokeDasharray="2,2"
                    />
                  )}
                </svg>
              ) : (
                <div className="dashboard-card__metric-chart-bars">
                  {normalizedData.map((value, index) => (
                    <div key={index} className="dashboard-card__metric-chart-bar-container">
                      <div 
                        className={`dashboard-card__metric-chart-bar dashboard-card__metric-chart-bar--${theme}`}
                        style={{ height: `${value}%` }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </Flex>
      )}
    </Card>
  );
};

const StatusCard: React.FC<StatusCardProps> = ({ data, settings = {}, className = '', style, onClick, loading, size = 'md' }) => {
  const {
    theme = 'primary',
    variant = 'outlined',
    showMetrics = true,
    showUptime = true,
    showLastChecked = true,
    layout = 'detailed'
  } = settings;

  const isClickable = !!onClick;
  const cardClass = `dashboard-card dashboard-card--status dashboard-card--${layout} ${isClickable ? 'dashboard-card--clickable' : ''} ${className}`;

  return (
    <Card 
      variant={variant === 'filled' ? 'elevated' : 'outlined'}
      className={cardClass}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <Flex align="center" justify="center" style={{ minHeight: 120 }}>
          <Text variant="body2">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" gap={1.5}>
          <Flex align="center" justify="between">
            <Flex align="center" gap={1}>
              {data.icon && <IconWrapper icon={data.icon} theme={theme} size={size} />}
              <Text variant="h4" className="dashboard-card__service-name">
                {data.service}
              </Text>
            </Flex>
            <StatusBadge status={data.status} />
          </Flex>

          <Flex direction="column" gap={0.5} className="dashboard-card__status-info">
            {showUptime && data.uptime && (
              <Flex align="center" gap={0.5}>
                <Text variant="caption" className="dashboard-card__detail-label">Uptime:</Text>
                <Text variant="caption" className="dashboard-card__detail-value">{data.uptime}</Text>
              </Flex>
            )}
            {showLastChecked && data.lastChecked && (
              <Flex align="center" gap={0.5}>
                <Text variant="caption" className="dashboard-card__detail-label">Last checked:</Text>
                <Text variant="caption" className="dashboard-card__detail-value">{data.lastChecked}</Text>
              </Flex>
            )}
          </Flex>

          {showMetrics && data.metrics && data.metrics.length > 0 && (
            <Flex direction="column" gap={0.5} className="dashboard-card__status-metrics">
              {data.metrics.map((metric, index) => (
                <Flex key={index} align="center" justify="between">
                  <Text variant="caption" className="dashboard-card__metric-label">
                    {metric.label}
                  </Text>
                  <Text variant="body2" className="dashboard-card__metric-value">
                    {metric.value}
                  </Text>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      )}
    </Card>
  );
};

// ==================== MAIN COMPONENT ====================

const DashboardCardComponent = React.forwardRef<HTMLDivElement, DashboardCardProps>(
  (props, ref) => {
    const commonProps = {
      ref,
      className: props.className,
      style: props.style,
      onClick: props.onClick,
      loading: props.loading,
      size: props.size,
      variant: props.variant,
    };

    switch (props.type) {
      case 'stat':
        return <StatCard {...props} {...commonProps} />;
      case 'progress':
        return <ProgressCard {...props} {...commonProps} />;
      case 'comparison':
        return <ComparisonCard {...props} {...commonProps} />;
      case 'activity':
        return <ActivityCard {...props} {...commonProps} />;
      case 'order':
        return <OrderCard {...props} {...commonProps} />;
      case 'user':
        return <UserCard {...props} {...commonProps} />;
      case 'revenue':
        return <RevenueCard {...props} {...commonProps} />;
      case 'alert':
        return <AlertCard {...props} {...commonProps} />;
      case 'ranking':
        return <RankingCard {...props} {...commonProps} />;
      case 'metric':
        return <MetricCard {...props} {...commonProps} />;
      case 'status':
        return <StatusCard {...props} {...commonProps} />;
      default:
        return null;
    }
  }
);

DashboardCardComponent.displayName = 'DashboardCard';

export const DashboardCard = withParsedClasses(DashboardCardComponent) as <T extends DashboardCardProps>(
  props: T & React.RefAttributes<HTMLDivElement>
) => React.ReactElement;

export default DashboardCard;
