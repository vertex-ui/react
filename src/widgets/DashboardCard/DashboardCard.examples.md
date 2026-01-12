# DashboardCard Widget Examples

## Basic Usage

Render a statistic card.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'stat',
      data: {
        label: 'Total Revenue',
        value: '$50,000'
      }
    }}
  />
);
```

## Customization Examples

### Progress Card

Show progress towards a goal.

```tsx
import { Widget } from 'src/components/Widget';

const ProgressExample = () => (
  <Widget
    config={{
      type: 'progress',
      data: {
        label: 'Monthly Goal',
        current: 75,
        target: 100,
        unit: '%'
      },
      settings: {
        variant: 'filled',
        theme: 'success',
        progressType: 'bar',
        showPercentage: true
      }
    }}
  />
);
```

### Comparison Card

Compare values side-by-side.

```tsx
import { Widget } from 'src/components/Widget';

const ComparisonExample = () => (
  <Widget
    config={{
      type: 'comparison',
      data: {
        label: 'Device Traffic',
        items: [
          { label: 'Mobile', value: '60%' },
          { label: 'Desktop', value: '40%' }
        ]
      },
      settings: {
        layout: 'horizontal'
      }
    }}
  />
);
```

## Enterprise Scenarios

### Dashboard Grid

Combine multiple cards in a grid layout.

```tsx
import { Widget } from 'src/components/Widget';

const Dashboard = () => (
  <Widget
    config={{
      type: 'grid',
      data: {
        widgets: [
          {
            type: 'stat',
            data: { label: 'Users', value: '1.2k', trend: { value: 12, direction: 'up' } }
          },
          {
            type: 'stat',
            data: { label: 'Sales', value: '$34k', trend: { value: 5, direction: 'down' } }
          },
          {
            type: 'progress',
            data: { label: 'Storage', current: 80, target: 100, unit: 'GB' }
          }
        ]
      },
      settings: {
        grid: {
          desktop: 3,
          tablet: 2,
          mobile: 1,
          spacing: 'md'
        }
      }
    }}
  />
);
```

## Accessibility Example

Semantic labeling for trends.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <Widget
    config={{
      type: 'stat',
      data: {
        label: 'Active Sessions',
        value: 45,
        trend: { value: 10, direction: 'up', label: '10% increase from last hour' }
      }
    }}
  />
);
```
