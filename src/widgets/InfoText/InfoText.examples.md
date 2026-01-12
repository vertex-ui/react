# InfoText Examples

## Basic Usage

Display simple text with an icon.

```tsx
import { InfoText } from 'src/widgets/InfoText';
import { FaInfoCircle } from 'react-icons/fa';

const BasicExample = () => (
  <InfoText.Base
    icon={<FaInfoCircle />}
    heading="Information"
    subText="This is a basic info text block."
  />
);
```

## Customization Examples

### Metric Display

Show a key metric with a label.

```tsx
import { InfoText } from 'src/widgets/InfoText';
import { FaChartLine } from 'react-icons/fa';

const MetricExample = () => (
  <InfoText.Stat
    icon={<FaChartLine />}
    iconVariant="success"
    value="+24%"
    label="Growth Rate"
    subText="Compared to last month"
  />
);
```

### Feature Block

Describe a feature with an optional badge.

```tsx
import { InfoText } from 'src/widgets/InfoText';
import { FaShieldAlt } from 'react-icons/fa';
import { Badge } from 'src/components/Badge';

const FeatureExample = () => (
  <InfoText.Feature
    icon={<FaShieldAlt />}
    title="Enterprise Security"
    description="Bank-grade encryption for all your data."
    badge={<Badge variant="primary">New</Badge>}
  />
);
```

## Enterprise Scenarios

### Vertical Layout for Landing Pages

Use the vertical layout to highlight key benefits.

```tsx
import { InfoText } from 'src/widgets/InfoText';
import { Grid } from 'src/components/Grid';
import { FaRocket, FaLock, FaGlobe } from 'react-icons/fa';

const BenefitsSection = () => (
  <Grid container spacing={4}>
    <Grid item xs={12} md={4}>
      <InfoText.Vertical
        icon={<FaRocket />}
        heading="Fast Performance"
        subText="Optimized for speed."
      />
    </Grid>
    <Grid item xs={12} md={4}>
      <InfoText.Vertical
        icon={<FaLock />}
        heading="Secure"
        subText="Data protection first."
      />
    </Grid>
    <Grid item xs={12} md={4}>
      <InfoText.Vertical
        icon={<FaGlobe />}
        heading="Global Reach"
        subText="Available worldwide."
      />
    </Grid>
  </Grid>
);
```

## Accessibility Example

Ensure icons are treated as decorative if they don't add unique information.

```tsx
import { InfoText } from 'src/widgets/InfoText';
import { FaCheck } from 'react-icons/fa';

const A11yExample = () => (
  <InfoText.Compact
    icon={<FaCheck aria-hidden="true" />}
    text="Verified User"
  />
);
```
