# Timeline

## 1. Overview
The **Timeline** component displays a sequence of events or steps. It is useful for history logs, tracking orders, or wizard progress.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Timeline } from '@/components/Timeline';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `TimelineStep[]` | required | Array of steps. |
| `currentStep` | `number` | required | Index of current active step. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout. |
| `variant` | `'default' \| 'numbered' ...` | `'default'` | Visual style. |
| `showCheckmarks` | `boolean` | `true` | Check icon for completed steps. |

### TimelineStep
| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Step title. |
| `description` | `string` | Detail text. |
| `onClick` | `() => void` | Click handler. |

## 4. Accessibility
- **Structure**: Ordered list logical flow.
- **Current**: Indicates current step visually.

## 5. Best Practices
- **Labels**: Keep concise.
- **Orientation**: Use horizontal for wizards, vertical for activity logs.

## 6. Integration Notes
- Purely presentational; does not manage state itself.

## 7. Do’s and Don’ts
- **Do** indicate status clearly.
- **Don't** use for non-sequential data.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
