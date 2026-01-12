# FAQ Examples

## Basic Usage

A simple list of questions and answers.

```tsx
import { FAQ } from 'src/widgets/FAQ';

const BasicExample = () => (
  <FAQ
    title="Common Questions"
    items={[
      { question: "What is this?", answer: "This is a FAQ widget." },
      { question: "Is it free?", answer: "Yes, for open source." }
    ]}
  />
);
```

## Customization Examples

### Categorized FAQ

Group questions into categories.

```tsx
import { FAQ } from 'src/widgets/FAQ';

const CategorizedExample = () => (
  <FAQ
    title="Help Center"
    items={[
      {
        title: "Billing",
        items: [
          { question: "How to pay?", answer: "Credit card or PayPal." }
        ]
      },
      {
        title: "Technical",
        items: [
          { question: "API Access?", answer: "Available on Enterprise plan." }
        ]
      }
    ]}
    variant="boxed"
  />
);
```

## Enterprise Scenarios

### Dynamic Content Loading

Load FAQ items from a CMS or API.

```tsx
import { FAQ } from 'src/widgets/FAQ';
import { useQuery } from 'react-query'; // Example data fetcher

const DynamicFAQ = () => {
  const { data, isLoading } = useQuery('faqs', fetchFAQs);

  if (isLoading) return <div>Loading...</div>;

  return (
    <FAQ
      title="Dynamic Knowledge Base"
      items={data}
      allowMultiple={true}
    />
  );
};
```

## Accessibility Example

The FAQ uses the Accordion component which manages ARIA states for expanding/collapsing sections.

```tsx
import { FAQ } from 'src/widgets/FAQ';

const A11yExample = () => (
  <main>
    <FAQ
      title="Accessibility Info"
      items={[
        {
          question: "Keyboard Support",
          answer: "Use Tab to focus and Enter/Space to toggle items."
        }
      ]}
    />
  </main>
);
```
