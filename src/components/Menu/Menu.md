# Menu

## 1. Overview
The **Menu** component provides a list of actions or navigation links. It supports submenus, responsive layouts (hamburger menu), and grouping. It's commonly used in headers, sidebars, and dropdowns.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Menu, MenuItem } from '@/components/Menu';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `MenuItemProps[]` | `undefined` | Configuration array for menu items. |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction. |
| `responsive` | `boolean` | `true` | Collapses to hamburger on mobile. |
| `width` | `string \| number` | `undefined` | Fixed width for vertical menu. |

### MenuItem Props
| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Display text. |
| `icon` | `ReactNode` | Icon on the left. |
| `onClick` | `() => void` | Click handler. |
| `items` | `MenuItemProps[]` | Submenu items. |
| `variant` | `'default' \| 'danger'` | Style variant. |

## 4. Accessibility
- **Roles**: `role="menu"`, `role="menuitem"`.
- **Keyboard**: Supports Arrow key navigation and Escape to close submenus.

## 5. Best Practices
- **Hierarchy**: Limit nesting depth to 2 levels for usability.
- **Grouping**: Use dividers to group related actions (e.g., Edit/Delete separated from View).

## 6. Integration Notes
- Often used inside `Header` or `SideMenu`.

## 7. Do’s and Don’ts
- **Do** use icons to aid recognition.
- **Don't** put complex forms inside a menu; use a Modal instead.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
