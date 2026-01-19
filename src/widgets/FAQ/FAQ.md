# FAQ

## 1. Overview
The **FAQ** widget displays a list of questions and answers, often using an accordion layout. It supports categorization.

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { FAQ } from '@/widgets/FAQ';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | Section title. |
| `subtitle` | `string` | `undefined` |   |
| `items` | `FAQItem[] \| FAQCategory[]; // Support flat list or categories` | `undefined` | required |
| `allowMultiple` | `boolean` | `undefined` | Expand multiple items. |
| `variant` | `'default' \| 'boxed' \| 'minimal'` | `undefined` | `'default'` |
| `className` | `string` | `undefined` |   |
| `style` | `React.CSSProperties` | `undefined` |   |

## 4. Accessibility
- **Accordions**: Uses proper button/region ARIA roles via `Accordion` component.

## 5. Best Practices
- **Grouping**: Use categories if you have > 10 questions.
- **Search**: For very large FAQs, consider adding a search bar (external to this widget).

## 6. Integration Notes
- Wrapper around `Accordion` component.

## 7. Do’s and Don’ts
- **Do** keep answers concise.
- **Don't** use for critical documentation; use a knowledge base.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
