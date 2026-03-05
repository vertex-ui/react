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


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-widget.css`**
```css
.custom-widget {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Widget } from 'src/components/Widget';
import './custom-widget.css';

const StyledExample = () => (
  <Widget className="custom-widget">
    Custom Styled Content
  </Widget>
);
```
