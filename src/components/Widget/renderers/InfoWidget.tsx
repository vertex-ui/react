"use client";
import React from 'react';
import { InfoWidgetData, InfoWidgetSettings, WidgetTheme, WidgetVariant } from '../types';
import { InfoCard } from '../../../widgets/InfoCard';
import { InfoText } from '../../../widgets/InfoText';

interface InfoWidgetProps {
  data: InfoWidgetData;
  settings?: InfoWidgetSettings;

  // Deprecated: Use settings instead
  /** @deprecated Use settings.theme */
  theme?: WidgetTheme;
  /** @deprecated Use settings.variant */
  variant?: WidgetVariant;
  /** @deprecated Use settings.size */
  size?: 'sm' | 'md' | 'lg';
  /** @deprecated Use settings.className */
  className?: string;
  /** @deprecated Use settings.style */
  style?: React.CSSProperties;
}

const InfoWidget: React.FC<InfoWidgetProps> = ({
  data,
  settings,
  // Backward compatibility
  theme: legacyTheme,
  variant: legacyVariant,
  className: legacyClassName,
  style: legacyStyle,
}) => {
  // Merge settings with legacy props for backward compatibility
  const theme = settings?.theme || legacyTheme || 'modern';
  const variant = settings?.variant || legacyVariant || 'primary';
  const className = settings?.className || legacyClassName || '';
  const style = settings?.style || legacyStyle;

  // Map WidgetVariant to InfoCard/InfoText variant
  const mapVariant = (v?: WidgetVariant): 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' => {
    if (v === 'error') return 'danger';
    if (v === 'neutral') return 'secondary';
    return v as 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' || 'primary';
  };

  const iconVariant = mapVariant(settings?.iconVariant || variant);

  // Use InfoText for minimal/compact themes, InfoCard for others
  if (theme === 'minimal' || theme === 'compact') {
    return (
      <InfoText.Base
        icon={data.icon || <></>}
        iconVariant={iconVariant}
        iconCircle={theme !== 'compact'}
        heading={data.text}
        subText={data.subText}
        className={className}
        style={style}
      />
    );
  }

  // Use InfoCard for modern/default themes
  return (
    <InfoCard.Base
      icon={data.icon || <></>}
      iconVariant={iconVariant}
      text={data.text}
      subText={data.subText}
      className={className}
      style={style}
    />
  );
};

export default InfoWidget;
