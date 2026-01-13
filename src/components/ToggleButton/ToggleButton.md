# ToggleButton

## 1. Overview
The **ToggleButton** (Switch) allows users to toggle a binary state on or off. It mimics a physical switch and is preferred over checkboxes for instant-action settings (e.g., "WiFi On").

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { ToggleButton } from '@/components/ToggleButton';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | State. |
| `onChange` | `(e) => void` | `undefined` | Callback. |
| `label` | `ReactNode` | `undefined` | Label text. |
| `labelPlacement` | `'start' \| 'end'` | `'end'` | Label position. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size. |
| `icon` | `ReactNode` | `undefined` | Icon inside thumb. |

## 4. Accessibility
- **Role**: `role="switch"`.
- **State**: `aria-checked`.
- **Keyboard**: Space to toggle.

## 5. Best Practices
- **Usage**: Use for settings that apply immediately.
- **Labels**: "On/Off" labels should be outside the switch, or implied by state.

## 6. Integration Notes
- Standard input behavior.

## 7. Do’s and Don’ts
- **Do** use for "Activate/Deactivate".
- **Don't** use for "Accept Terms" (use Checkbox).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
