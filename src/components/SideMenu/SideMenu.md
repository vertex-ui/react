# SideMenu

## 1. Overview
The **SideMenu** component is a vertical navigation drawer. It supports collapsible states, nested submenus, and badge indicators. It is key for admin dashboard layouts.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { SideMenu } from '@/components/SideMenu';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `SideMenuItemProps[]` | required | Menu structure. |
| `collapsed` | `boolean` | `false` | Collapse state. |
| `width` | `string \| number` | `'260px'` | Expanded width. |
| `collapsedWidth` | `string \| number` | `'80px'` | Collapsed width. |
| `header` | `ReactNode` | `undefined` | Top content (Logo). |
| `footer` | `ReactNode` | `undefined` | Bottom content. |

### SideMenuItemProps
| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Text. |
| `icon` | `ReactNode` | Icon. |
| `items` | `SideMenuItemProps[]` | Submenu items. |
| `badge` | `string \| number` | Notification count. |
| `active` | `boolean` | Highlight as current. |

## 4. Accessibility
- **Landmark**: `<aside>` with `role="navigation"`.
- **Keyboard**: Supports keyboard navigation through items.

## 5. Best Practices
- **Icons**: Use icons for all top-level items to support the collapsed state.
- **Depth**: Limit nesting to 2 levels.

## 6. Integration Notes
- Typically paired with `Header` and `Grid` for a full layout.

## 7. Do’s and Don’ts
- **Do** provide tooltips for collapsed state (handled internally).
- **Don't** hide primary navigation in a submenu.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
