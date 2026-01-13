# Header

## 1. Overview
The **Header** component is a standard top navigation bar for the application. It typically contains the logo, page title, global actions, and user profile.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Header } from '@/components/Header';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | Page title. |
| `logo` | `ReactNode` | `undefined` | Logo element. |
| `userName` | `string` | `undefined` | User display name. |
| `notifications` | `NotificationItem[]` | `[]` | Notification list. |
| `onToggleSidebar` | `() => void` | `undefined` | Sidebar toggle callback. |
| `sticky` | `boolean` | `true` | Fix to top. |

## 4. Accessibility
- **Landmark**: `<header>` element.
- **Navigation**: Interactive elements are accessible.

## 5. Best Practices
- **Consistency**: Keep the header content stable across pages.
- **Branding**: Use the logo prop for home navigation.

## 6. Integration Notes
- Often paired with `SideMenu`.
- Simpler version of `AdminHeader`.

## 7. Do’s and Don’ts
- **Do** use for main app layout.
- **Don't** clutter with too many actions.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
