"use client";
import React, { forwardRef } from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Typography } from '../../components/Typography';
import { Badge } from '../../components/Badge';
import { ArrowUpIcon, ArrowDownIcon } from '../../icons/IconComponents';

// ==================== BASE TYPES ====================
export type DashboardCardTheme = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'inherit';
export type DashboardCardSize = 'sm' | 'md' | 'lg';
type Variant = 'outlined' | 'filled';
interface BaseDashboardCardProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  loading?: boolean;
  size?: DashboardCardSize;
  variant?: Variant;
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

// ==================== UNION TYPE ====================

export type DashboardCardProps =
  | StatCardProps
  | ProgressCardProps
  | ComparisonCardProps;

// ==================== HELPER COMPONENTS ====================
const TrendIndicator: React.FC<{ trend: TrendData; size?: 'sm' | 'md' }> = ({ trend, size = 'md' }) => {
  const isPositive = trend.isPositive ?? trend.value > 0;
  return (
    <Flex align="center" gap={0.5} className={`dashboard-card__trend dashboard-card__trend--${isPositive ? 'positive' : 'negative'} dashboard-card__trend--${size}`}>
      <span className="dashboard-card__trend-icon" aria-label={isPositive ? 'Up' : 'Down'}>
        {isPositive ? <ArrowUpIcon size={14} /> : <ArrowDownIcon size={14} />}
      </span>
      <Typography variant="caption" className="dashboard-card__trend-value">{Math.abs(trend.value)}%</Typography>
      {trend.label && <Typography variant="caption" className="dashboard-card__trend-label">{trend.label}</Typography>}
    </Flex>
  );
};

const ProgressBar: React.FC<{ percentage: number; theme?: DashboardCardTheme; status?: string }> = ({ percentage, theme = 'primary', status }) => {
  const clamped = Math.min(Math.max(percentage, 0), 100);
  const statusClass = status ? `dashboard-card__progress-bar--${status}` : `dashboard-card__progress-bar--${theme}`;
  return (
    <div className="dashboard-card__progress-bar-container">
      <div className={`dashboard-card__progress-bar ${statusClass}`} style={{ width: `${clamped}%` }} />
    </div>
  );
};

const IconWrapper: React.FC<{ icon: React.ReactNode; theme?: DashboardCardTheme; size?: DashboardCardSize }> = ({ icon, theme = 'primary', size = 'md' }) => (
  <div className={`dashboard-card__icon dashboard-card__icon--${theme} dashboard-card__icon--${size}`}>{icon}</div>
);

const StatusBadge: React.FC<{ status: string; label?: string }> = ({ status, label }) => {
  const variantMap: Record<string, 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info'> = {
    active: 'success', online: 'success', delivered: 'success', success: 'success',
    pending: 'warning', processing: 'warning', warning: 'warning', 'at-risk': 'warning', away: 'warning', degraded: 'warning',
    cancelled: 'error', offline: 'error', error: 'error', danger: 'error', behind: 'error',
    shipped: 'info', info: 'info', maintenance: 'info',
  };
  return <Badge variant={variantMap[status] || 'neutral'} size="sm">{label || status}</Badge>;
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
          <Typography variant="body2">Loading...</Typography>
        </Flex>
      ) : (
        <Flex direction="column" gap={2}>
          <Flex align="center" justify="between" wrap="nowrap" gap={2}>
            <Typography
              variant="overline"
              weight="semibold"
              className="dashboard-card__label"
              style={{ flex: 1 }}
              color={theme}
            >
              {data.label}
            </Typography>
            {showIcon && data.icon && <IconWrapper icon={data.icon} theme={theme} size={size} />}
          </Flex>

          <Flex direction="column" gap={0.5}>
            <Typography
              variant={valueSize === 'lg' ? 'h2' : valueSize === 'md' ? 'h3' : 'h4'}
              weight="bold"
              className="dashboard-card__value"
            >
              {data.value}
            </Typography>
            {data.subtitle && (
              <Typography variant="caption" className="dashboard-card__subtitle" color={theme}>
                {data.subtitle}
              </Typography>
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
          <Typography variant="body2">Loading...</Typography>
        </Flex>
      ) : (
        <Flex direction="column" gap={2}>
          <Flex align="center" justify="between" gap={2}>
            <Flex direction="column" gap={0.5} style={{ flex: 1 }}>
              <Typography
                variant="overline"
                weight="semibold"
                className="dashboard-card__label"
              >
                {data.label}
              </Typography>
              {data.subtitle && (
                <Typography variant="caption" className="dashboard-card__subtitle" color={theme}>
                  {data.subtitle}
                </Typography>
              )}
            </Flex>
            {data.icon && <IconWrapper icon={data.icon} theme={theme} size={size} />}
          </Flex>

          <Flex direction="column" gap={1.5}>
            {progressType === 'bar' && <ProgressBar percentage={percentage} theme={theme} status={status} />}

            <Flex align="center" justify="between" gap={2}>
              {showValues && (
                <Typography
                  variant="body2"
                  weight="medium"
                  className="dashboard-card__progress-values"
                >
                  {data.current}{data.unit && ` ${data.unit}`} / {data.target}{data.unit && ` ${data.unit}`}
                </Typography>
              )}
              {showPercentage && (
                <Typography
                  variant="h3"
                  weight="bold"
                  className={`dashboard-card__percentage dashboard-card__percentage--${theme}`}
                >
                  {Math.round(percentage)}%
                </Typography>
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
          <Typography variant="body2">Loading...</Typography>
        </Flex>
      ) : (
        <Flex direction="column" gap={2}>
          <Typography
            variant="overline"
            weight="semibold"
            className="dashboard-card__label"
          >
            {data.label}
          </Typography>

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
                    <Typography
                      variant="caption"
                      weight="medium"
                      className="dashboard-card__comparison-label"
                      truncate
                      color={theme}
                    >
                      {item.label}
                    </Typography>
                  </Flex>
                  <Typography variant="h3" weight="bold" className="dashboard-card__value">
                    {item.value}
                  </Typography>
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

// ==================== MAIN COMPONENT ====================
const DashboardCardComponent = forwardRef<HTMLDivElement, DashboardCardProps>((props, ref) => {
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
    case 'stat': return <StatCard {...props} {...commonProps} />;
    case 'progress': return <ProgressCard {...props} {...commonProps} />;
    case 'comparison': return <ComparisonCard {...props} {...commonProps} />;
    default: return null;
  }
});
DashboardCardComponent.displayName = 'DashboardCard';
export const DashboardCard = withParsedClasses(DashboardCardComponent) as <T extends DashboardCardProps>(
  props: T & React.RefAttributes<HTMLDivElement>
) => React.ReactElement;
export default DashboardCard;
