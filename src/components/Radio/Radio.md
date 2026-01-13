# Radio

## 1. Overview
The **Radio** component allows selection of a single option from a set. It is mutually exclusive by definition.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Radio } from '@/components/Radio';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | Selected state. |
| `label` | `ReactNode` | `undefined` | Text label. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size. |
| `variant` | `'primary' \| 'secondary' ...` | `'primary'` | Color. |
| `error` | `boolean` | `false` | Error state. |

## 4. Accessibility
- **Grouping**: Should be used within a `RadioGroup` or fieldset for proper association.
- **Keyboard**: Arrow keys navigate between radios in the same group.

## 5. Best Practices
- **Defaults**: Always have one option selected by default if possible.
- **Labels**: Clickable labels enlarge the hit area.

## 6. Integration Notes
- Use `RadioGroup` for easier management.

## 7. Do’s and Don’ts
- **Do** use for mutually exclusive choices (e.g., "Yes/No").
- **Don't** use a single radio button (use a Checkbox).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
