# InfoCard Examples

## Basic Usage

Display simple information using `InfoCard.Base`.

```tsx
import { InfoCard } from 'src/widgets/InfoCard';
import { FaUser } from 'react-icons/fa';

const BasicExample = () => (
  <InfoCard.Base
    icon={<FaUser />}
    text="Account Status"
    subText="Active"
  />
);
```

## Customization Examples

### Metric Card

Display key performance indicators.

```tsx
import { InfoCard } from 'src/widgets/InfoCard';

const MetricExample = () => (
  <InfoCard.Metric
    value="98.5%"
    label="Uptime"
    style={{ borderColor: 'green' }}
  />
);
```

### Colored Variants

Use different icon variants to convey meaning.

```tsx
import { InfoCard } from 'src/widgets/InfoCard';
import { FaExclamationTriangle } from 'react-icons/fa';

const WarningExample = () => (
  <InfoCard.Base
    icon={<FaExclamationTriangle />}
    iconVariant="warning"
    text="Storage Warning"
    subText="80% full"
  />
);
```

## Enterprise Scenarios

### Dashboard Grid

Combine multiple InfoCards in a responsive grid.

```tsx
import { InfoCard } from 'src/widgets/InfoCard';
import { Grid } from 'src/components/Grid';

const DashboardGrid = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={3}>
      <InfoCard.Metric value="1.2M" label="Revenue" />
    </Grid>
    <Grid item xs={12} md={3}>
      <InfoCard.Metric value="450" label="New Users" />
    </Grid>
  </Grid>
);
```

## Accessibility Example

Ensure icons are decorative or have labels if they convey unique info not present in text.

```tsx
import { InfoCard } from 'src/widgets/InfoCard';
import { FaCheck } from 'react-icons/fa';

const A11yExample = () => (
  <InfoCard.Base
    icon={<FaCheck aria-hidden="true" />}
    text="System Healthy"
    role="status"
  />
);
```
