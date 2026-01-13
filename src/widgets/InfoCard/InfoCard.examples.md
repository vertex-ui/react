# InfoCard Widget Examples

## Basic Usage

Render an information card.

```tsx
import { Widget } from 'src/components/Widget';
import { UserIcon } from 'src/icons';

const BasicExample = () => (
  <Widget
    config={{
      type: 'info',
      data: {
        text: '125 Users',
        subText: 'Active today',
        icon: <UserIcon />
      }
    }}
  />
);
```

## Customization Examples

### Styled Variant

Customize visual appearance.

```tsx
import { Widget } from 'src/components/Widget';
import { WarningIcon } from 'src/icons';

const WarningExample = () => (
  <Widget
    config={{
      type: 'info',
      data: {
        text: 'System Warning',
        subText: 'High CPU usage',
        icon: <WarningIcon />
      },
      settings: {
        iconVariant: 'warning',
        layout: 'horizontal',
        alignment: 'left'
      }
    }}
  />
);
```

## Enterprise Scenarios

### Status Grid

Monitor system status.

```tsx
import { Widget } from 'src/components/Widget';

const SystemStatus = () => (
  <Widget
    config={{
      type: 'grid',
      data: {
        widgets: [
          {
            type: 'info',
            data: { text: 'API Status', subText: 'Operational', icon: <CheckIcon /> },
            settings: { iconVariant: 'success' }
          },
          {
            type: 'info',
            data: { text: 'Database', subText: 'Maintenance', icon: <InfoIcon /> },
            settings: { iconVariant: 'info' }
          }
        ]
      },
      settings: {
        grid: { columns: 2 }
      }
    }}
  />
);
```

## Accessibility Example

Icons are decorative unless specified otherwise.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <Widget
    config={{
      type: 'info',
      data: {
        text: 'Notifications',
        icon: <BellIcon aria-hidden="true" />
      }
    }}
  />
);
```
