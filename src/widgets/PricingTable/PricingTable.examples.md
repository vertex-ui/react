# PricingTable Widget Examples

## Basic Usage

Render pricing tiers.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'pricing-table',
      data: {
        tiers: [
          {
            id: 'basic',
            name: 'Basic',
            price: 10,
            currency: '$',
            features: [{ text: '1 User', included: true }],
            buttonText: 'Sign Up'
          },
          {
            id: 'pro',
            name: 'Pro',
            price: 29,
            currency: '$',
            features: [{ text: 'Unlimited Users', included: true }],
            buttonText: 'Go Pro',
            popular: true
          }
        ]
      }
    }}
  />
);
```

## Customization Examples

### 4 Columns Layout

Display more options.

```tsx
import { Widget } from 'src/components/Widget';

const WideLayout = () => (
  <Widget
    config={{
      type: 'pricing-table',
      data: {
        tiers: fourTiersArray
      },
      settings: {
        columns: 4
      }
    }}
  />
);
```

## Enterprise Scenarios

### Custom Actions

Handle plan selection.

```tsx
import { Widget } from 'src/components/Widget';

const PricingPage = () => {
  const handleSelect = (tierId) => {
    console.log('Selected plan:', tierId);
  };

  return (
    <Widget
      config={{
        type: 'pricing-table',
        data: {
          tiers: [
            {
              id: 'enterprise',
              name: 'Enterprise',
              price: 'Contact Us',
              features: [{ text: 'SSO', included: true }],
              buttonText: 'Contact Sales',
              onButtonClick: () => handleSelect('enterprise')
            }
          ]
        },
        settings: {
          theme: 'professional'
        }
      }}
    />
  );
};
```

## Accessibility Example

Ensure buttons have accessible names.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <Widget
    config={{
      type: 'pricing-table',
      data: {
        tiers: tiers
      }
    }}
  />
);
```
