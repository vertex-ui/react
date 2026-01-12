# PricingTable Examples

## Basic Usage

Display a set of pricing tiers.

```tsx
import PricingTable from 'src/widgets/PricingTable';

const BasicExample = () => (
  <PricingTable
    tiers={[
      {
        id: 'basic',
        name: 'Basic',
        price: '10',
        features: [{ text: '1 User', included: true }],
        buttonText: 'Buy Now'
      },
      {
        id: 'pro',
        name: 'Pro',
        price: '20',
        features: [{ text: '5 Users', included: true }],
        buttonText: 'Buy Now',
        popular: true
      }
    ]}
  />
);
```

## Customization Examples

### 4 Columns Layout

Display more options with a wider grid.

```tsx
import PricingTable from 'src/widgets/PricingTable';

const WideExample = () => (
  <PricingTable
    columns={4}
    tiers={tiersData}
  />
);
```

## Enterprise Scenarios

### Dynamic Feature Lists

Load features from a configuration object.

```tsx
import PricingTable from 'src/widgets/PricingTable';

const EnterprisePricing = () => {
  const tiers = [
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        { text: 'SSO', included: true },
        { text: 'SLA', included: true },
        { text: 'Dedicated Support', included: true }
      ],
      buttonText: 'Contact Sales',
      onButtonClick: () => window.location.href = '/contact'
    }
  ];

  return <PricingTable tiers={tiers} columns={1} />;
};
```

## Accessibility Example

Ensure pricing cards are navigable. The component uses standard buttons.

```tsx
import PricingTable from 'src/widgets/PricingTable';

const A11yExample = () => (
  <section aria-label="Subscription Plans">
    <PricingTable tiers={tiers} />
  </section>
);
```
