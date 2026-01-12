# InfoListCard Examples

## Basic Usage

Display a list of information with a heading.

```tsx
import { InfoListCard } from 'src/widgets/InfoListCard';

const BasicExample = () => (
  <InfoListCard
    heading="User Details"
    items={[
      { label: "Name", value: "John Doe" },
      { label: "Email", value: "john@example.com" }
    ]}
  />
);
```

## Customization Examples

### Compact Mode with Dividers

Use a compact layout with dividers for denser data.

```tsx
import { InfoListCard } from 'src/widgets/InfoListCard';

const CompactExample = () => (
  <InfoListCard
    compact
    showDividers
    heading="System Specs"
    items={[
      { label: "CPU", value: "8 Core" },
      { label: "RAM", value: "16 GB" },
      { label: "OS", value: "Linux" }
    ]}
  />
);
```

### Custom Styling

Style values and labels individually.

```tsx
import { InfoListCard } from 'src/widgets/InfoListCard';

const StyledExample = () => (
  <InfoListCard
    items={[
      {
        label: "Status",
        value: "Active",
        valueClass: "text-success-500 font-bold"
      },
      {
        label: "Risk Level",
        value: "High",
        valueClass: "text-error-500"
      }
    ]}
  />
);
```

## Enterprise Scenarios

### Order Summary

Display financial details with custom formatting.

```tsx
import { InfoListCard } from 'src/widgets/InfoListCard';

const OrderSummary = ({ order }) => (
  <InfoListCard
    heading={`Order #${order.id}`}
    variant="elevated"
    items={[
      { label: "Subtotal", value: `$${order.subtotal}` },
      { label: "Tax", value: `$${order.tax}` },
      { label: "Total", value: `$${order.total}`, valueClass: "text-xl font-bold" }
    ]}
  />
);
```

## Accessibility Example

The component uses semantic HTML but you should ensure labels are descriptive.

```tsx
import { InfoListCard } from 'src/widgets/InfoListCard';

const A11yExample = () => (
  <section aria-label="Account Information">
    <InfoListCard
      heading="Profile"
      items={[
        { label: "Username", value: "jdoe" }
      ]}
    />
  </section>
);
```
