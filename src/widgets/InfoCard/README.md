# InfoCard Widget

A collection of informational cards for displaying metrics, statuses, and simple data points.

## Features

- **Base Variant**: Icon + Text + Subtext layout.
- **Metric Variant**: Centered Large Value + Label layout.
- **Styling**: Uses `Card` component for consistent container styling.
- **Icon Variants**: Supports primary, secondary, success, danger, warning, and info colors.

## Installation

```tsx
import { InfoCard } from '@vtx-ui/react';
```

## InfoCard.Base

Used for displaying a data point with an associated icon.

```tsx
import { UserIcon } from 'lucide-react';

<InfoCard.Base
  icon={<UserIcon />}
  iconVariant="primary"
  text="Total Users"
  subText="1,245 active"
/>
```

### Icon Variants

Change the color of the icon background.

```tsx
<InfoCard.Base
  icon={<AlertIcon />}
  iconVariant="danger"
  text="Errors"
  subText="3 critical"
/>
```

## InfoCard.Metric

Used for displaying a key metric prominently.

```tsx
<InfoCard.Metric
  value="$50,000"
  label="Monthly Revenue"
/>
```

## API Reference

### InfoCard.Base Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | **required** | Icon element |
| `iconVariant` | `'primary' \| 'secondary' \| ...` | `'primary'` | Icon styling |
| `text` | `ReactNode` | **required** | Primary text |
| `subText` | `ReactNode` | - | Secondary text |
| `className` | `string` | - | Custom class |

### InfoCard.Metric Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `ReactNode` | **required** | Large metric value |
| `label` | `ReactNode` | - | Label under metric |
| `className` | `string` | - | Custom class |

## Accessibility

- The cards use standard `div` elements.
- Text content is readable by screen readers.
- Ensure icons have appropriate `aria-hidden` or `aria-label` attributes if they convey meaning not covered by the text.
