# Widget Examples

## Basic Usage

Render a widget by configuration.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'text',
      data: { content: 'Hello World' }
    }}
  />
);
```

## Customization Examples

### Styling

Apply settings and styles.

```tsx
import { Widget } from 'src/components/Widget';

const StyledWidget = () => (
  <Widget
    config={{
      type: 'metric',
      data: { value: '100', label: 'Score' },
      settings: { variant: 'outlined' }
    }}
    className="my-custom-widget"
  />
);
```

## Enterprise Scenarios

### Grid Layout

Compose multiple widgets.

```tsx
import { Widget } from 'src/components/Widget';

const DashboardGrid = () => (
  <Widget
    config={{
      type: 'grid',
      data: {
        widgets: [
          { type: 'stat', data: { value: '50', label: 'Users' } },
          { type: 'stat', data: { value: '20', label: 'Orders' } }
        ]
      },
      settings: { grid: { columns: 2, gap: 'md' } }
    }}
  />
);
```

## Accessibility Example

Wraps content in standard divs, ensures sub-widgets are accessible.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <section aria-label="Widget Section">
    <Widget config={config} />
  </section>
);
```
