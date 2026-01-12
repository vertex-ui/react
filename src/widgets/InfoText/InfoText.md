# InfoText

## 1. Overview
The **InfoText** widget displays text paired with an icon in various layouts (Stat, Feature, Compact). It is lighter than a Card, meant for inline use.

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { InfoText } from '@/widgets/InfoText';
```

## 3. Customization Options

| Variant | Props | Description |
|---------|-------|-------------|
| `Base` | `icon`, `heading`, `subText` | Standard horizontal. |
| `Stat` | `value`, `label` | Large number display. |
| `Feature` | `title`, `description` | Feature block. |
| `Compact` | `text` | Small inline info. |
| `Vertical` | `heading` | Centered stack. |

## 4. Accessibility
- **Text**: Standard typography.

## 5. Best Practices
- **Layout**: Use `Vertical` for empty states or centered landing page features.
- **Consistency**: Stick to one variant per section.

## 6. Integration Notes
- Pure presentation component.

## 7. Do’s and Don’ts
- **Do** use `iconCircle` for emphasis.
- **Don't** use for main navigation.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
