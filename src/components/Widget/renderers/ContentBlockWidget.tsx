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
    data,
    settings = {},
    theme = 'feature-highlight',
    className = '',
    style,
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
      'xs': 'var(--vtx-spacing-1)',
      'sm': 'var(--vtx-spacing-2)',
      'md': 'var(--vtx-spacing-4)',
      'lg': 'var(--vtx-spacing-6)',
      'xl': 'var(--vtx-spacing-8)',
      '2xl': 'var(--vtx-spacing-12)'
    };
    return spacingMap[val] || val;
  };

  const globalGap = getGapValue(gap) || 'var(--vtx-spacing-4)';

  // Specific spacing overrides with defaults
  const gapValues = {
    captionGap: getGapValue(spacing.caption) || 'var(--vtx-spacing-2)',
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
    'vtx-content-block',
    `vtx-content-block--theme-${theme}`,
    `vtx-content-block--align-${contentAlign}`,
    displayMode && `vtx-content-block--${displayMode}`,
    colorMode && `vtx-content-block--${colorMode}`, // e.g. vtx-content-block--dark
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
