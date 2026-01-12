# RadioGroup

## 1. Overview
The **RadioGroup** component manages a set of `Radio` buttons. It ensures only one option is selected at a time and handles keyboard navigation between them.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { RadioGroup } from '@/components/RadioGroup';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | required | Form field name. |
| `options` | `RadioOption[]` | required | List of options. |
| `value` | `string` | `undefined` | Selected value. |
| `onChange` | `(value) => void` | `undefined` | Change callback. |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout. |
| `label` | `ReactNode` | `undefined` | Group label. |

## 4. Accessibility
- **Role**: `role="radiogroup"`.
- **Navigation**: Manages focus within the group.

## 5. Best Practices
- **Layout**: Use `horizontal` for short options (e.g., "S", "M", "L").
- **Clarity**: Ensure the label clearly describes the choice.

## 6. Integration Notes
- Simplifies validation by treating the group as a single field.

## 7. Do’s and Don’ts
- **Do** use for small sets (2-5 options).
- **Don't** use for large sets (>10 options); use a Select.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
