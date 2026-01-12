# Tabs

## 1. Overview
The **Tabs** component organizes content into multiple panels where only one is visible at a time. It saves space and reduces clutter in complex interfaces.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@/components/Tabs';
```

## 3. Customization Options

### Tabs (Root)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | `undefined` | Initial tab value. |
| `value` | `string` | `undefined` | Controlled value. |
| `onChange` | `(val) => void` | `undefined` | Change callback. |
| `variant` | `'line' \| 'enclosed' ...` | `'line'` | Visual style. |
| `isLazy` | `boolean` | `false` | Defer rendering of hidden panels. |

### Tab
| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | Unique identifier. |
| `icon` | `ReactNode` | Optional icon. |

## 4. Accessibility
- **Roles**: `tablist`, `tab`, `tabpanel`.
- **Keyboard**: Arrow keys focus tabs. Enter/Space selects.
- **ARIA**: `aria-selected`, `aria-controls`.

## 5. Best Practices
- **Lazy**: Use `isLazy` for performance if tabs contain heavy content (charts, data grids).
- **Labels**: Keep labels short.

## 6. Integration Notes
- Composable API allows flexible markup.

## 7. Do’s and Don’ts
- **Do** use for switching between related views.
- **Don't** use for navigation (use Links/Menu).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
