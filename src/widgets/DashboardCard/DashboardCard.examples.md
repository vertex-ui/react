# DashboardCard Examples

## Basic Usage

Display a simple statistic using the `stat` type.

```tsx
import { DashboardCard } from 'src/widgets/DashboardCard';

const BasicStat = () => (
  <DashboardCard
    type="stat"
    data={{
      label: "Total Users",
      value: "1,234"
    }}
  />
);
```

## Customization Examples

### Progress Card

Display progress towards a target.

```tsx
import { DashboardCard } from 'src/widgets/DashboardCard';

const ProgressExample = () => (
  <DashboardCard
    type="progress"
    data={{
      label: "Monthly Goal",
      current: 75000,
      target: 100000,
      unit: "$"
    }}
    settings={{
      theme: "success",
      progressType: "bar",
      showPercentage: true
    }}
  />
);
```

### Comparison Card

Compare multiple values side-by-side.

```tsx
import { DashboardCard } from 'src/widgets/DashboardCard';

const ComparisonExample = () => (
  <DashboardCard
    type="comparison"
    data={{
      label: "Device Usage",
      items: [
        { label: "Mobile", value: "60%" },
        { label: "Desktop", value: "40%" }
      ]
    }}
    settings={{
      layout: "horizontal"
    }}
  />
);
```

## Enterprise Scenarios

### Data Driven Dashboard

Map API data to multiple cards.

```tsx
import { DashboardCard } from 'src/widgets/DashboardCard';

const DashboardExample = ({ metrics }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
    {metrics.map((metric) => (
      <DashboardCard
        key={metric.id}
        type="stat"
        data={{
          label: metric.name,
          value: metric.value,
          trend: {
            value: metric.growth,
            isPositive: metric.growth > 0
          }
        }}
        settings={{
          theme: metric.growth > 0 ? 'success' : 'error'
        }}
      />
    ))}
  </div>
);
```

## Accessibility Example

Ensure trend indicators have appropriate labels. The component handles basic ARIA labels for trends.

```tsx
import { DashboardCard } from 'src/widgets/DashboardCard';

const A11yExample = () => (
  <DashboardCard
    type="stat"
    data={{
      label: "Revenue",
      value: "$50K",
      trend: {
        value: 12,
        isPositive: true,
        label: "Increase from last month"
      }
    }}
  />
);
```
