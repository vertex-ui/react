import React from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './InfoText.css';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';

export interface InfoTextBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon element to display
   */
  icon: React.ReactNode;
  /**
   * Visual variant for icon styling
   * @default 'primary'
   */
  iconVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * Display icon in a circle
   * @default true
   */
  iconCircle?: boolean;
  /**
   * Main heading text
   */
  heading: React.ReactNode;
  /**
   * Optional secondary text
   */
  subText?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * InfoText.Base - Horizontal icon with text
 *
 * Displays an icon with heading and optional subtext in a horizontal layout
 *
 * @example
 * ```tsx
 * <InfoText.Base
 *   icon={<CheckIcon />}
 *   iconVariant="success"
 *   heading="Order Confirmed"
 *   subText="Your order has been placed"
 * />
 * ```
 */
const InfoTextBase = React.forwardRef<HTMLDivElement, InfoTextBaseProps>(
  (
    {
      icon,
      iconVariant = 'primary',
      iconCircle = true,
      heading,
      subText,
      className = '',
      style,
      ...props
    },
    ref
  ) => (
    <Flex
      direction="row"
      align="center"
      gap={8}
      className={`infotext-base ${className}`}
      style={style}
      ref={ref}
      {...props}
    >
      {/* ICON */}
      <Flex align="center" justify="center" className="infotext-icon-wrapper">
        {iconCircle ? (
          <span className={`infotext-icon infotext-icon--${iconVariant}`}>{icon}</span>
        ) : (
          <span className="infotext-icon-plain">{icon}</span>
        )}
      </Flex>
      {/* TEXT */}
      <Flex direction="column" gap={4}>
        <Text variant="body1" weight="medium" noMargin>
          {heading}
        </Text>
        {subText && (
          <Text variant="caption" textColor="var(--text-secondary)" noMargin>
            {subText}
          </Text>
        )}
      </Flex>
    </Flex>
  )
);

InfoTextBase.displayName = 'InfoTextBase';

export interface InfoTextStatProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional icon element
   */
  icon?: React.ReactNode;
  /**
   * Visual variant for icon styling
   * @default 'primary'
   */
  iconVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * Display icon in a circle
   * @default true
   */
  iconCircle?: boolean;
  /**
   * Metric/stat value
   */
  value: React.ReactNode;
  /**
   * Label for the stat
   */
  label: React.ReactNode;
  /**
   * Optional additional text
   */
  subText?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * InfoText.Stat - Metric display with icon
 *
 * Displays a large stat value with label and optional icon
 *
 * @example
 * ```tsx
 * <InfoText.Stat
 *   icon={<ChartIcon />}
 *   value="1,234"
 *   label="Total Sales"
 *   subText="This month"
 * />
 * ```
 */
const InfoTextStat = React.forwardRef<HTMLDivElement, InfoTextStatProps>(
  (
    {
      icon,
      iconVariant = 'primary',
      iconCircle = true,
      value,
      label,
      subText,
      className = '',
      style,
      ...props
    },
    ref
  ) => (
    <Flex
      direction="row"
      align="center"
      gap={8}
      className={`infotext-stat ${className}`}
      style={style}
      ref={ref}
      {...props}
    >
      {/* ICON (Optional) */}
      {icon && (
        <Flex align="center" justify="center" className="infotext-icon-wrapper">
          {iconCircle ? (
            <span className={`infotext-icon infotext-icon--${iconVariant}`}>{icon}</span>
          ) : (
            <span className="infotext-icon-plain">{icon}</span>
          )}
        </Flex>
      )}
      {/* TEXT */}
      <Flex direction="column" gap={4}>
        <Text variant="h5" weight="bold" noMargin>
          {value}
        </Text>
        <Text variant="body2" weight="medium" noMargin>
          {label}
        </Text>
        {subText && (
          <Text variant="caption" textColor="var(--text-secondary)" noMargin>
            {subText}
          </Text>
        )}
      </Flex>
    </Flex>
  )
);

InfoTextStat.displayName = 'InfoTextStat';

export interface InfoTextFeatureProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Icon element to display
   */
  icon: React.ReactNode;
  /**
   * Visual variant for icon styling
   * @default 'primary'
   */
  iconVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * Display icon in a circle
   * @default true
   */
  iconCircle?: boolean;
  /**
   * Feature title
   */
  title: React.ReactNode;
  /**
   * Feature description
   */
  description: React.ReactNode;
  /**
   * Optional badge element
   */
  badge?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * InfoText.Feature - Feature display with icon and description
 *
 * Displays a feature with icon, title, description, and optional badge
 *
 * @example
 * ```tsx
 * <InfoText.Feature
 *   icon={<ShieldIcon />}
 *   title="Secure Payment"
 *   description="Your payment information is encrypted and secure"
 *   badge={<Badge>New</Badge>}
 * />
 * ```
 */
const InfoTextFeature = React.forwardRef<HTMLDivElement, InfoTextFeatureProps>(
  (
    {
      icon,
      iconVariant = 'primary',
      iconCircle = true,
      title,
      description,
      badge,
      className = '',
      style,
      ...props
    },
    ref
  ) => (
    <Flex
      direction="row"
      align="start"
      gap={8}
      className={`infotext-feature ${className}`}
      style={style}
      ref={ref}
      {...props}
    >
      {/* ICON */}
      <Flex align="center" justify="center" className="infotext-icon-wrapper">
        {iconCircle ? (
          <span className={`infotext-icon infotext-icon--${iconVariant}`}>{icon}</span>
        ) : (
          <span className="infotext-icon-plain">{icon}</span>
        )}
      </Flex>
      {/* TEXT */}
      <Flex direction="column" gap={6} style={{ flex: 1 }}>
        <Flex align="center" gap={8}>
          <Text variant="h6" weight="semibold" noMargin>
            {title}
          </Text>
          {badge && <span className="infotext-badge">{badge}</span>}
        </Flex>
        <Text variant="body2" textColor="var(--text-secondary)" noMargin>
          {description}
        </Text>
      </Flex>
    </Flex>
  )
);

InfoTextFeature.displayName = 'InfoTextFeature';

export interface InfoTextCompactProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon element to display
   */
  icon: React.ReactNode;
  /**
   * Visual variant for icon styling
   * @default 'primary'
   */
  iconVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * Display icon in a circle
   * @default true
   */
  iconCircle?: boolean;
  /**
   * Text content
   */
  text: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * InfoText.Compact - Compact icon with text
 *
 * Displays a small icon with text in a compact horizontal layout
 *
 * @example
 * ```tsx
 * <InfoText.Compact
 *   icon={<ClockIcon />}
 *   text="Delivery in 2 hours"
 * />
 * ```
 */
const InfoTextCompact = React.forwardRef<HTMLDivElement, InfoTextCompactProps>(
  (
    {
      icon,
      iconVariant = 'primary',
      iconCircle = true,
      text,
      className = '',
      style,
      ...props
    },
    ref
  ) => (
    <Flex
      direction="row"
      align="center"
      gap={8}
      className={`infotext-compact ${className}`}
      style={style}
      ref={ref}
      {...props}
    >
      {/* ICON */}
      {iconCircle ? (
        <span className={`infotext-icon-small infotext-icon-small--${iconVariant}`}>{icon}</span>
      ) : (
        <span className="infotext-icon-small-plain">{icon}</span>
      )}
      {/* TEXT */}
      <Text variant="body2" noMargin>{text}</Text>
    </Flex>
  )
);

InfoTextCompact.displayName = 'InfoTextCompact';

export interface InfoTextVerticalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon element to display
   */
  icon: React.ReactNode;
  /**
   * Visual variant for icon styling
   * @default 'primary'
   */
  iconVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * Display icon in a circle
   * @default true
   */
  iconCircle?: boolean;
  /**
   * Main heading text
   */
  heading: React.ReactNode;
  /**
   * Optional secondary text
   */
  subText?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * InfoText.Vertical - Vertical icon with text
 *
 * Displays an icon above heading and optional subtext in a vertical centered layout
 *
 * @example
 * ```tsx
 * <InfoText.Vertical
 *   icon={<TrophyIcon />}
 *   heading="Achievement Unlocked"
 *   subText="You've completed all tasks"
 * />
 * ```
 */
const InfoTextVertical = React.forwardRef<HTMLDivElement, InfoTextVerticalProps>(
  (
    {
      icon,
      iconVariant = 'primary',
      iconCircle = true,
      heading,
      subText,
      className = '',
      style,
      ...props
    },
    ref
  ) => (
    <Flex
      direction="column"
      align="center"
      gap={10}
      className={`infotext-vertical ${className}`}
      style={style}
      ref={ref}
      {...props}
    >
      {/* ICON */}
      <Flex align="center" justify="center" className="infotext-icon-wrapper">
        {iconCircle ? (
          <span className={`infotext-icon infotext-icon--${iconVariant}`}>{icon}</span>
        ) : (
          <span className="infotext-icon-plain">{icon}</span>
        )}
      </Flex>
      {/* TEXT */}
      <Flex direction="column" gap={4} align="center">
        <Text variant="body1" weight="medium" align="center" noMargin>
          {heading}
        </Text>
        {subText && (
          <Text variant="caption" textColor="var(--text-secondary)" align="center" noMargin>
            {subText}
          </Text>
        )}
      </Flex>
    </Flex>
  )
);

InfoTextVertical.displayName = 'InfoTextVertical';

const InfoTextBaseWithParsedClasses = withParsedClasses(InfoTextBase);
const InfoTextStatWithParsedClasses = withParsedClasses(InfoTextStat);
const InfoTextFeatureWithParsedClasses = withParsedClasses(InfoTextFeature);
const InfoTextCompactWithParsedClasses = withParsedClasses(InfoTextCompact);
const InfoTextVerticalWithParsedClasses = withParsedClasses(InfoTextVertical);

export const InfoText = {
  Base: InfoTextBaseWithParsedClasses as React.FC<InfoTextBaseProps & React.RefAttributes<HTMLDivElement>>,
  Stat: InfoTextStatWithParsedClasses as React.FC<InfoTextStatProps & React.RefAttributes<HTMLDivElement>>,
  Feature: InfoTextFeatureWithParsedClasses as React.FC<InfoTextFeatureProps & React.RefAttributes<HTMLDivElement>>,
  Compact: InfoTextCompactWithParsedClasses as React.FC<InfoTextCompactProps & React.RefAttributes<HTMLDivElement>>,
  Vertical: InfoTextVerticalWithParsedClasses as React.FC<InfoTextVerticalProps & React.RefAttributes<HTMLDivElement>>,
};

export default InfoText;

