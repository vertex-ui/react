import React from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './InfoCard.css';
import { Card } from '../../components/Card';
import { Grid } from '../../components/Grid';
import { Flex } from '../../components/Flex';
import { Typography } from '../../components/Typography';

export interface InfoCardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon element to display
   */
  icon: React.ReactNode;
  /**
   * Visual variant for the icon styling
   * @default 'primary'
   */
  iconVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * Main text content
   */
  text: React.ReactNode;
  /**
   * Optional secondary text below main text
   */
  subText?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * InfoCard.Base - Icon with text information card
 *
 * Displays an icon with primary and optional secondary text in a card layout
 *
 * @example
 * ```tsx
 * <InfoCard.Base
 *   icon={<UserIcon />}
 *   iconVariant="primary"
 *   text="125 Users"
 *   subText="Active today"
 * />
 * ```
 */
const InfoCardBase = React.forwardRef<HTMLDivElement, InfoCardBaseProps>(
  (
    {
      icon,
      iconVariant = 'primary',
      text,
      subText,
      className = '',
      style,
      ...props
    },
    ref
  ) => (
    <Card variant="outlined" className={className} style={style} ref={ref as any} {...props}>
      <Grid container spacing={2} alignItems="center" wrap="nowrap" justifyContent="center">
        {/* ICON */}
        <Grid item xs="auto">
          <Flex align="center" justify="center">
            <span className={`infocard-icon infocard-icon--${iconVariant}`}>{icon}</span>
          </Flex>
        </Grid>
        {/* TEXT */}
        <Grid item xs>
          <Typography variant="caption">{text}</Typography>
          {subText && <Typography variant="subtitle2">{subText}</Typography>}
        </Grid>
      </Grid>
    </Card>
  )
);

InfoCardBase.displayName = 'InfoCardBase';

export interface InfoCardMetricProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Primary value/metric to display
   */
  value: React.ReactNode;
  /**
   * Optional label for the metric
   */
  label?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * InfoCard.Metric - Centered metric display card
 *
 * Displays a large metric value with optional label in a centered card layout
 *
 * @example
 * ```tsx
 * <InfoCard.Metric
 *   value="1,234"
 *   label="Total Sales"
 * />
 * ```
 */
const InfoCardMetric = React.forwardRef<HTMLDivElement, InfoCardMetricProps>(
  (
    {
      value,
      label,
      className = '',
      style,
      ...props
    },
    ref
  ) => (
    <Card variant="outlined" className={className} style={style} ref={ref as any} {...props}>
      <Flex direction="column" align="center" justify="center" style={{ minHeight: 80 }}>
        <Typography variant="h4">{value}</Typography>
        {label && <Typography variant="caption">{label}</Typography>}
      </Flex>
    </Card>
  )
);

InfoCardMetric.displayName = 'InfoCardMetric';

const InfoCardBaseWithParsedClasses = withParsedClasses(InfoCardBase);
const InfoCardMetricWithParsedClasses = withParsedClasses(InfoCardMetric);

export const InfoCard = {
  Base: InfoCardBaseWithParsedClasses as React.FC<InfoCardBaseProps & React.RefAttributes<HTMLDivElement>>,
  Metric: InfoCardMetricWithParsedClasses as React.FC<InfoCardMetricProps & React.RefAttributes<HTMLDivElement>>,
};

export default InfoCard;
