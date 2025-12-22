import React from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './InfoListCard.css';
import { Card } from '../../components/Card';
import { Text } from '../../components/Text';
import { Divider } from '../../components/Divider';

export interface InfoListItem {
  /** Label/key - can be text or any React node */
  label: React.ReactNode;
  /** Value - can be text or any React node */
  value: React.ReactNode;
  /** Optional CSS class for value styling */
  valueClass?: string;
  /** Optional CSS class for label styling */
  labelClass?: string;
  /** Hide this item */
  hidden?: boolean;
}

export interface InfoListCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card heading/title */
  heading?: string;
  /** Array of label-value pairs */
  items: InfoListItem[];
  /** Show divider between items
   * @default false
   */
  showDividers?: boolean;
  /** Compact spacing
   * @default false
   */
  compact?: boolean;
  /** Card variant
   * @default 'outlined'
   */
  variant?: 'outlined' | 'elevated' | 'flat';
  /** Additional class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

/**
 * InfoListCard - Information display card with label-value pairs
 *
 * Displays a list of label-value pairs in a card layout with optional heading,
 * dividers, and compact mode
 *
 * @example
 * ```tsx
 * <InfoListCard
 *   heading="Order Details"
 *   items={[
 *     { label: 'Order ID', value: '#12345' },
 *     { label: 'Status', value: 'Delivered' },
 *     { label: 'Total', value: '$99.99' }
 *   ]}
 *   showDividers
 * />
 * ```
 */
const InfoListCard = React.forwardRef<HTMLDivElement, InfoListCardProps>(
  (
    {
      heading,
      items,
      showDividers = false,
      compact = false,
      variant = 'outlined',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const visibleItems = items.filter((item) => !item.hidden);

    return (
      <Card
        variant={variant === 'flat' ? 'filled' : variant}
        className={`info-list-card ${compact ? 'info-list-card--compact' : ''} ${className}`}
        style={style}
        ref={ref as any}
        {...props}
      >
        {heading && (
          <>
            <Text
              variant="h6"
              weight="semibold"
              noMargin
              className="info-list-card-heading"
            >
              {heading}
            </Text>
            <Divider style={{ margin: '12px 0 16px 0' }} />
          </>
        )}

        <div className="info-list-card-items">
          {visibleItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="info-list-card-item">
                <div className={`info-list-card-label ${item.labelClass || ''}`}>
                  {typeof item.label === 'string' ? (
                    <Text variant="body2" noMargin>
                      {item.label}
                    </Text>
                  ) : (
                    item.label
                  )}
                </div>
                <div className={`info-list-card-value ${item.valueClass || ''}`}>
                  {typeof item.value === 'string' || typeof item.value === 'number' ? (
                    <Text variant="body2" weight="medium" noMargin>
                      {item.value}
                    </Text>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
              {showDividers && index < visibleItems.length - 1 && (
                <Divider style={{ margin: compact ? '8px 0' : '12px 0' }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </Card>
    );
  }
);

InfoListCard.displayName = 'InfoListCard';

const InfoListCardWithParsedClasses = withParsedClasses(InfoListCard);

export default InfoListCardWithParsedClasses as React.FC<
  InfoListCardProps & React.RefAttributes<HTMLDivElement>
>;
export { InfoListCardWithParsedClasses as InfoListCard };
