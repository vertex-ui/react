import React from 'react';
import {
  WidgetConfig,
  WidgetTheme,
  WidgetVariant,
  MetricWidgetData,
  InfoWidgetData,
  ProductWidgetData,
  OrderWidgetData,
  ListWidgetData,
  TextWidgetData,
  HeaderWidgetData,
  CarouselWidgetData,
  TestimonialWidgetData,
  GridCarouselWidgetData,
  GridWidgetData,
} from './types';
import IntelligentGrid from './IntelligentGrid';
import MetricWidget from './renderers/MetricWidget';
import InfoWidget from './renderers/InfoWidget';
import ProductWidget from './renderers/ProductWidget';
import OrderWidget from './renderers/OrderWidget';
import ListWidget from './renderers/ListWidget';
import TextWidget from './renderers/TextWidget';
import HeaderWidget from './renderers/HeaderWidget';
import CarouselWidget from './renderers/CarouselWidget';
import TestimonialWidget from './renderers/TestimonialWidget';
import GridCarouselWidget from './renderers/GridCarouselWidget';

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
    theme: WidgetTheme = 'modern',
    variant: WidgetVariant = 'primary',
    size: 'sm' | 'md' | 'lg' = 'md'
  ) => {
    const commonProps = {
      theme,
      variant,
      size,
      className,
      style,
    };

    switch (type) {
      case 'metric':
        return <MetricWidget data={data as MetricWidgetData} {...commonProps} />;
      case 'info':
        return <InfoWidget data={data as InfoWidgetData} {...commonProps} />;
      case 'product':
        return <ProductWidget data={data as ProductWidgetData} {...commonProps} />;
      case 'order':
        return <OrderWidget data={data as OrderWidgetData} {...commonProps} />;
      case 'list':
        return <ListWidget data={data as ListWidgetData} {...commonProps} />;
      case 'text':
        return <TextWidget data={data as TextWidgetData} {...commonProps} />;
      case 'header':
        return <HeaderWidget data={data as HeaderWidgetData} {...commonProps} />;
      case 'carousel':
        return <CarouselWidget data={data as CarouselWidgetData} {...commonProps} />;
      case 'testimonial':
        return <TestimonialWidget data={data as TestimonialWidgetData} className={className} style={style} />;
      case 'gridCarousel':
        return <GridCarouselWidget {...(data as GridCarouselWidgetData)} className={className} style={style} />;
      default:
        console.warn(`Unknown widget type: ${type}`);
        return null;
    }
  };

  // Handle grid configuration
  if (config.type === 'grid') {
    const gridData = config.data as GridWidgetData;
    
    return (
      <IntelligentGrid
        data={gridData.widgets}
        grid={config.grid}
        renderItem={(widgetConfig: WidgetConfig) =>
          renderSingleWidget(
            widgetConfig.type,
            widgetConfig.data,
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
    return (
      <IntelligentGrid
        data={config.data}
        grid={config.grid}
        renderItem={(item: any) =>
          renderSingleWidget(
            config.type,
            item,
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
    config.theme,
    config.variant,
    config.size
  );
};

export default Widget;