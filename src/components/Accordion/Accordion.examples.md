# Accordion Examples

## Basic Usage

A simple accordion with text content.

```tsx
import { Accordion } from 'src/components/Accordion';

const BasicExample = () => (
  <Accordion
    items={[
      { id: '1', header: 'Section 1', children: 'Content for section 1' },
      { id: '2', header: 'Section 2', children: 'Content for section 2' }
    ]}
  />
);
```

## Customization Examples

### Multiple Open Items

Allow multiple sections to be open simultaneously.

```tsx
import { Accordion } from 'src/components/Accordion';

const MultiOpenExample = () => (
  <Accordion
    allowMultiple
    variant="bordered"
    items={[
      { id: '1', header: 'Overview', children: 'Overview content...' },
      { id: '2', header: 'Details', children: 'Details content...' }
    ]}
  />
);
```

## Enterprise Scenarios

### Dynamic Settings Panel

Use accordion for complex settings forms.

```tsx
import { Accordion } from 'src/components/Accordion';
import { Input } from 'src/components/Input';

const SettingsPanel = () => (
  <Accordion
    items={[
      {
        id: 'profile',
        header: 'Profile Settings',
        children: <Input label="Username" />
      },
      {
        id: 'security',
        header: 'Security',
        children: <Input label="Password" type="password" />
      }
    ]}
  />
);
```

## Accessibility Example

The component handles ARIA attributes automatically. Ensure headers are descriptive.

```tsx
import { Accordion } from 'src/components/Accordion';

const A11yExample = () => (
  <section aria-label="FAQ">
    <Accordion
      items={[
        { id: 'q1', header: 'How to reset password?', children: 'Go to settings...' }
      ]}
    />
  </section>
);
```
