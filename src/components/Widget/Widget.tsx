"use client";

import React from 'react';
import {
  WidgetConfig,
  WidgetSettings,
  WidgetTheme,
  WidgetVariant,
  MetricWidgetData,
  InfoWidgetData,
  ProductWidgetData,
  OrderWidgetData,
  OrderConfirmationWidgetData,
  OrderDetailsWidgetData,
  ListWidgetData,
  TextWidgetData,
  HeaderWidgetData,
  CarouselWidgetData,
  TestimonialWidgetData,
  GridCarouselWidgetData,
  GridWidgetData,
  ContentBlockWidgetData,
  ErrorPageWidgetData,
  EmptyStateWidgetData,
} from './types';
import IntelligentGrid from './IntelligentGrid';
import './Widget.css';
import MetricWidget from './renderers/MetricWidget';
import InfoWidget from './renderers/InfoWidget';
import ProductWidget from './renderers/ProductWidget';
import OrderWidget from './renderers/OrderWidget';
import OrderConfirmationWidget from './renderers/OrderConfirmationWidget';
import OrderDetailsWidget from './renderers/OrderDetailsWidget';
import ListWidget from './renderers/ListWidget';
import TextWidget from './renderers/TextWidget';
import HeaderWidget from './renderers/HeaderWidget';
import CarouselWidget from './renderers/CarouselWidget';
import TestimonialWidget from './renderers/TestimonialWidget';
import GridCarouselWidget from './renderers/GridCarouselWidget';
import ContentBlockWidget from './renderers/ContentBlockWidget';
import ErrorPageWidget from './renderers/ErrorPageWidget';
import EmptyStateWidget from './renderers/EmptyStateWidget';

export interface WidgetProps {
  config: WidgetConfig;
  className?: string;
  style?: React.CSSProperties;
}

const Widget: React.FC<WidgetProps> = ({
  config,
  className = '',
  style,
}) => {
  const renderSingleWidget = (
    type: string,
    data: any,
    settings?: WidgetSettings,
    // Legacy support
    theme?: WidgetTheme,
    variant?: WidgetVariant,
    size?: 'sm' | 'md' | 'lg'
  ) => {
    // Support both new settings object and legacy props
    const widgetSettings = settings || {
      theme: theme || 'modern',
      variant: variant || 'primary',
      size: size || 'md',
      className,
      style,
    };

    switch (type) {
      case 'metric':
        return <MetricWidget data={data as MetricWidgetData} settings={widgetSettings as any} />;
      case 'info':
        return <InfoWidget data={data as InfoWidgetData} settings={widgetSettings as any} />;
      case 'product':
        return <ProductWidget data={data as ProductWidgetData} settings={widgetSettings as any} />;
      case 'order':
        return <OrderWidget data={data as OrderWidgetData} settings={widgetSettings as any} />;
      case 'order-confirmation':
        return <OrderConfirmationWidget data={data as OrderConfirmationWidgetData} settings={widgetSettings as any} />;
      case 'order-details':
        return <OrderDetailsWidget data={data as OrderDetailsWidgetData} settings={widgetSettings as any} />;
      case 'list':
        return <ListWidget data={data as ListWidgetData} settings={widgetSettings as any} />;
      case 'text':
        return <TextWidget data={data as TextWidgetData} settings={widgetSettings as any} />;
      case 'header':
        return <HeaderWidget data={data as HeaderWidgetData} settings={widgetSettings as any} />;
      case 'carousel':
        return <CarouselWidget data={data as CarouselWidgetData} settings={widgetSettings as any} />;
      case 'testimonial':
        return <TestimonialWidget data={data as TestimonialWidgetData} className={className} style={style} />;
      case 'gridCarousel':
        return <GridCarouselWidget data={data as GridCarouselWidgetData} settings={widgetSettings as any} />;
      case 'contentBlock':
        return <ContentBlockWidget data={data as ContentBlockWidgetData} settings={widgetSettings as any} />;
      case 'errorPage':
        return <ErrorPageWidget data={data as ErrorPageWidgetData} settings={widgetSettings as any} className={className} style={style} />;
      case 'emptyState':
        return <EmptyStateWidget data={data as EmptyStateWidgetData} settings={widgetSettings as any} className={className} style={style} />;
      default:
        console.warn(`Unknown widget type: ${type}`);
        return null;
    }
  };

  // Handle grid configuration
  if (config.type === 'grid') {
    const gridData = config.data as GridWidgetData;
    const gridSettings = (config.settings as any) || {};
    
    // Merge grid config with gap/spacing from settings if needed
    const gridConfig = config.grid || gridSettings.grid || {};
    const finalGridConfig = {
      ...gridConfig,
      // Support both 'spacing' (correct) and 'gap' (legacy) properties
      spacing: gridConfig.spacing || gridSettings.gap || gridSettings.spacing || 'md',
    };
    
    return (
      <IntelligentGrid
        data={gridData.widgets}
        grid={finalGridConfig}
        renderItem={(widgetConfig: WidgetConfig) =>
          renderSingleWidget(
            widgetConfig.type,
            widgetConfig.data,
            widgetConfig.settings,
            widgetConfig.theme,
            widgetConfig.variant,
            widgetConfig.size
          )
        }
        className={className}
      />
    );
  }

  // Handle array data with auto-grid
  if (Array.isArray(config.data)) {
    const gridSettings = (config.settings as any) || {};
    
    // Merge grid config with gap/spacing from settings if needed
    const gridConfig = config.grid || gridSettings.grid || {};
    const finalGridConfig = {
      ...gridConfig,
      // Support both 'spacing' (correct) and 'gap' (legacy) properties
      spacing: gridConfig.spacing || gridSettings.gap || gridSettings.spacing || 'md',
    };
    
    return (
      <IntelligentGrid
        data={config.data}
        grid={finalGridConfig}
        renderItem={(item: any) =>
          renderSingleWidget(
            config.type,
            item,
            config.settings,
            config.theme,
            config.variant,
            config.size
          )
        }
        className={className}
      />
    );
  }

  // Handle single widget
  return renderSingleWidget(
    config.type,
    config.data,
    config.settings,
    config.theme,
    config.variant,
    config.size
  );
};

Widget.displayName = 'Widget';

export default Widget as React.FC<WidgetProps & React.RefAttributes<HTMLDivElement>>;
export { Widget };