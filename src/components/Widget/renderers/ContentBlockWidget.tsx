import React from 'react';
import { ContentBlockWidgetData, ContentBlockWidgetSettings, WidgetTheme } from '../types';
import { FeatureHighlightTheme } from './ContentBlock/FeatureHighlightTheme';
import { VisualBlockTheme } from './ContentBlock/VisualBlockTheme';
import './ContentBlockWidget.css';

export interface ContentBlockWidgetProps {
  data: ContentBlockWidgetData;
  settings?: ContentBlockWidgetSettings;
  theme?: WidgetTheme;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

const ContentBlockWidget: React.FC<ContentBlockWidgetProps> = (props) => {
  const {
    settings = {},
    theme = 'feature-highlight',
    className = '',
  } = props;

  // Extract settings for basic styling/layout
  const contentAlign = settings.contentAlign ?? 'left';
  const displayMode = settings.displayMode;
  const colorMode = settings.colorMode;

  // Resolve Spacing
  const gap = settings.gap;
  const spacing = settings.spacing || {};

  const getGapValue = (val?: string) => {
    if (!val) return undefined;
    const spacingMap: Record<string, string> = {
      'none': '0',
      'xs': 'var(--lxs-spacing-1)',
      'sm': 'var(--lxs-spacing-2)',
      'md': 'var(--lxs-spacing-4)',
      'lg': 'var(--lxs-spacing-6)',
      'xl': 'var(--lxs-spacing-8)',
      '2xl': 'var(--lxs-spacing-12)'
    };
    return spacingMap[val] || val;
  };

  const globalGap = getGapValue(gap) || 'var(--lxs-spacing-4)';

  // Specific spacing overrides with defaults
  const gapValues = {
    captionGap: getGapValue(spacing.caption) || 'var(--lxs-spacing-2)',
    headingGap: getGapValue(spacing.heading) || globalGap,
    subheadingGap: getGapValue(spacing.subheading) || globalGap,
    bodyGap: getGapValue(spacing.body) || globalGap,
    listGap: getGapValue(spacing.list) || globalGap,
    mediaGap: getGapValue(spacing.media) || globalGap,
  };

  // Resolve Alignment
  // For now simple single value
  const textAlign = contentAlign;

  const getAlignItems = (align: string) => {
    switch (align) {
      case 'center': return 'center';
      case 'right': return 'flex-end';
      default: return 'flex-start';
    }
  };

  const alignItems = getAlignItems(contentAlign);

  const wrapperClass = [
    'lxs-content-block',
    `lxs-content-block--theme-${theme}`,
    `lxs-content-block--align-${contentAlign}`,
    displayMode && `lxs-content-block--${displayMode}`,
    colorMode && `lxs-content-block--${colorMode}`, // e.g. lxs-content-block--dark
    className,
  ].filter(Boolean).join(' ');

  const themeProps = {
    ...props,
    wrapperClass,
    alignItems,
    textAlign,
    gapValues
  };

  switch (theme) {
    case 'visual-block':
      return <VisualBlockTheme {...themeProps} />;
    case 'feature-highlight':
    default:
      return <FeatureHighlightTheme {...themeProps} />;
  }
};

export default ContentBlockWidget;
