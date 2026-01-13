# Tooltip

## 1. Overview
The **Tooltip** component displays informative text when a user hovers over, focuses on, or taps an element. It provides context without cluttering the UI.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Tooltip } from '@/components/Tooltip';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `ReactNode` | required | The tooltip text. |
| `children` | `ReactElement` | required | The trigger element. |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Position. |
| `delay` | `number` | `200` | Show delay (ms). |
| `arrow` | `boolean` | `false` | Show pointer arrow. |
| `variant` | `'dark' \| 'light'` | `'dark'` | Theme. |

## 4. Accessibility
- **Trigger**: Adds `aria-describedby` to the child.
- **Keyboard**: Shows on focus.
- **Dismiss**: Escape key dismisses.

## 5. Best Practices
- **Content**: Keep it short (text only ideally).
- **Trigger**: Ensure the child element is interactive/focusable (or wrap in a tabindex div).

## 6. Integration Notes
- Uses `createPortal` to render on top of everything.

## 7. Do’s and Don’ts
- **Do** use for icon-only buttons.
- **Don't** put essential information *only* in a tooltip (mobile users might miss it).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
