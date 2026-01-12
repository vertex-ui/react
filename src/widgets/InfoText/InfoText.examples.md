# InfoText Widget Examples

## Basic Usage

Render text content.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'text',
      data: {
        content: 'Welcome to the dashboard',
        caption: 'Overview of your activity'
      }
    }}
  />
);
```

## Customization Examples

### Heading Variant

Display as a section header.

```tsx
import { Widget } from 'src/components/Widget';

const HeadingExample = () => (
  <Widget
    config={{
      type: 'text',
      data: {
        content: 'Performance Metrics'
      },
      settings: {
        variant: 'h2',
        alignment: 'center',
        contentColor: 'primary'
      }
    }}
  />
);
```

## Enterprise Scenarios

### Call to Action

Text with action buttons.

```tsx
import { Widget } from 'src/components/Widget';

const CtaSection = () => (
  <Widget
    config={{
      type: 'text',
      data: {
        content: 'Ready to get started?',
        caption: 'Join thousands of enterprise users.',
        actions: [
          { label: 'Sign Up', href: '/register', variant: 'primary' },
          { label: 'Learn More', href: '/about', variant: 'outline' }
        ]
      },
      settings: {
        alignment: 'center',
        backgroundColor: '#f9fafb'
      }
    }}
  />
);
```

## Accessibility Example

Renders semantic HTML tags based on variant.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <Widget
    config={{
      type: 'text',
      data: { content: 'Main Title' },
      settings: { variant: 'h1' }
    }}
  />
);
```
