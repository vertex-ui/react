# FAQ Widget Examples

## Basic Usage

Render a list of FAQs.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'faq',
      data: {
        title: 'Common Questions',
        items: [
          { question: 'What is this?', answer: 'It is a widget.' },
          { question: 'Is it free?', answer: 'Yes.' }
        ]
      }
    }}
  />
);
```

## Customization Examples

### Categorized and Boxed

Group questions into categories with a boxed style.

```tsx
import { Widget } from 'src/components/Widget';

const CategorizedExample = () => (
  <Widget
    config={{
      type: 'faq',
      data: {
        title: 'Help Center',
        items: [
          {
            title: 'Billing',
            items: [
              { question: 'How do I pay?', answer: 'Credit card.' }
            ]
          },
          {
            title: 'Account',
            items: [
              { question: 'Can I delete my account?', answer: 'Yes, in settings.' }
            ]
          }
        ]
      },
      settings: {
        variant: 'secondary', // May map to specific styles in renderer
        allowMultiple: true
      }
    }}
  />
);
```

## Enterprise Scenarios

### Dynamic Data Loading

Load FAQs from an external source.

```tsx
import { Widget } from 'src/components/Widget';

const DynamicFAQ = ({ faqData }) => (
  <Widget
    config={{
      type: 'faq',
      data: {
        title: 'Knowledge Base',
        subtitle: 'Find answers to your questions',
        items: faqData
      },
      settings: {
        theme: 'modern'
      }
    }}
  />
);
```

## Accessibility Example

The widget uses the Accordion component which manages ARIA states.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <Widget
    config={{
      type: 'faq',
      data: {
        title: 'Accessibility FAQs',
        items: [
          { question: 'Keyboard Navigation', answer: 'Use Tab and Enter keys.' }
        ]
      }
    }}
  />
);
```
