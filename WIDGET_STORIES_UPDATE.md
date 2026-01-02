# Widget Stories - Data/Settings Pattern Examples

This document provides copy-paste examples for all widget stories using the new data/settings pattern.

## ✅ Updated Stories

### Widget.stories.tsx - Metric Widget
```tsx
// Sample Metric Configs
const sampleMetricConfigs: WidgetConfig[] = [
  {
    type: 'metric',
    data: {
      value: '1,234',
      label: 'Total Sales',
      trend: { direction: 'up', value: 12, label: 'vs last month' },
      icon: 'TrendingUp',
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
      showTrend: true,
    },
  },
  {
    type: 'metric',
    data: {
      value: '$45,678',
      label: 'Revenue',
      trend: { direction: 'up', value: 5.3, label: 'vs last quarter' },
      target: { value: '$50,000', label: 'Target' },
      progress: 91,
    },
    settings: {
      theme: 'professional',
      variant: 'success',
      showTrend: true,
      showTarget: true,
      showProgress: true,
    },
  },
];

export const MetricWidgets: Story = {
  args: {
    config: {
      type: 'grid',
      data: {
        widgets: sampleMetricConfigs,
      },
      settings: {
        theme: 'modern',
        gap: 'lg',
        grid: { mobile: 1, tablet: 2, desktop: 3 },
      },
    },
  },
};
```

### Widget.stories.tsx - Info Widget
```tsx
const sampleInfoConfigs: WidgetConfig[] = [
  {
    type: 'info',
    data: {
      title: 'Server Status',
      text: 'All systems operational',
      badge: { text: 'Online', variant: 'success' },
      metadata: {
        'Uptime': '99.9%',
        'Last Check': '2 minutes ago',
      },
    },
    settings: {
      theme: 'modern',
      variant: 'success',
    },
  },
];
```

### CarouselWidget.stories.tsx
```tsx
export const Default: Story = {
  args: {
    config: {
      type: 'carousel',
      data: {
        slides: sampleSlides,
      },
      settings: {
        theme: 'modern',
        variant: 'primary',
        swiperConfig: {
          navigation: { enabled: true },
          pagination: { enabled: true, clickable: true },
          autoplay: { enabled: true, delay: 4000, pauseOnMouseEnter: true },
          loop: true,
        },
        overlayTheme: 'dark',
        height: '60vh',
        minHeight: '400px',
        maxHeight: '600px',
        showOverlay: true,
      },
    },
  },
};
```

## 📝 Pattern Summary

### Widget with Config (Metric, Info, Header, List, Text, Carousel)
```tsx
config: {
  type: 'widgetType',
  data: {
    // Content only - values, text, items, etc.
  },
  settings: {
    // Configuration only - theme, variant, display options
    theme: 'modern',
    variant: 'primary',
    size: 'md',
    // ... widget-specific settings
  }
}
```

### Grid Layout
```tsx
config: {
  type: 'grid',
  data: {
    widgets: [...],  // Array of widget configs
  },
  settings: {
    theme: 'modern',
    gap: 'lg',
    grid: { mobile: 1, tablet: 2, desktop: 3 },
  }
}
```

### Direct Component Usage (TestimonialWidget, GridCarouselWidget)
These components use direct props and don't need to be updated as they don't use the WidgetConfig pattern:
```tsx
// These are fine as-is
<TestimonialWidget
  data={sampleTestimonials}
  theme="card"
  autoplay={true}
  autoplayDelay={3000}
/>

<GridCarouselWidget
  items={items}
  autoplay={true}
  showNavigation={true}
/>
```

## ✨ Key Points

1. **data** = content (values, text, images, items)
2. **settings** = configuration (theme, variant, size, behavior)
3. Grid configs use `data.widgets` array with `settings.gap` and `settings.grid`
4. All theme, variant, size props moved to settings
5. Widget-specific options (showTrend, showDividers, etc.) in settings
6. Backward compatible - old format still works

## 📚 All Updated Files

- ✅ `src/stories/components/Widget.stories.tsx` - Metric and Info widgets
- ✅ `src/stories/components/CarouselWidget.stories.tsx` - All carousel examples
- ℹ️ `src/stories/components/TestimonialWidget.stories.tsx` - Uses direct props (no changes needed)
- ℹ️ `src/stories/components/GridCarouselWidget.stories.tsx` - Uses direct props (no changes needed)
- ℹ️ `src/components/Widget/renderers/ContentBlockWidget.stories.tsx` - Already uses settings (correct format)
