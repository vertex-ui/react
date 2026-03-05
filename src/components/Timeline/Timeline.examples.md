# Timeline Examples

## Basic Usage

Display a sequence of events.

```tsx
import { Timeline } from 'src/components/Timeline';

const BasicExample = () => (
  <Timeline
    currentStep={1}
    steps={['Ordered', 'Shipped', 'Delivered']}
  />
);
```

## Customization Examples

### Vertical with Descriptions

Detailed progress.

```tsx
import { Timeline } from 'src/components/Timeline';

const OrderTracking = () => (
  <Timeline
    orientation="vertical"
    currentStep={1}
    steps={[
      { label: 'Order Placed', description: 'Jan 1, 10:00 AM' },
      { label: 'Processing', description: 'Jan 1, 2:00 PM' },
      { label: 'Shipped', description: 'Pending' }
    ]}
  />
);
```

## Enterprise Scenarios

### Workflow Steps

Multi-step form indicator.

```tsx
import { Timeline } from 'src/components/Timeline';

const FormProgress = ({ currentStep }) => (
  <Timeline
    variant="numbered"
    currentStep={currentStep}
    steps={['Info', 'Payment', 'Review', 'Confirm']}
  />
);
```

## Accessibility Example

Use `aria-current` on active steps (handled internally).

```tsx
import { Timeline } from 'src/components/Timeline';

const A11yExample = () => (
  <nav aria-label="Progress">
    <Timeline currentStep={0} steps={['Start', 'Finish']} />
  </nav>
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-timeline.css`**
```css
.custom-timeline {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Timeline } from 'src/components/Timeline';
import './custom-timeline.css';

const StyledExample = () => (
  <Timeline className="custom-timeline">
    Custom Styled Content
  </Timeline>
);
```
