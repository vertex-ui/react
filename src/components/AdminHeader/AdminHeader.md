# AdminHeader

## 1. Overview
The **AdminHeader** component is a comprehensive, enterprise-grade header designed for admin dashboards and complex web applications. It unifies navigation, search, notifications, and user profile management into a single, responsive bar. This component is critical for providing a consistent and accessible top-level navigation structure.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { AdminHeader } from '@/components/AdminHeader';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `ReactNode` | `undefined` | The logo element to display on the left. |
| `title` | `string` | `undefined` | The application title displayed next to the logo. |
| `subtitle` | `string` | `undefined` | A subtitle or tagline below the title. |
| `showSearch` | `boolean` | `false` | Enables the search bar functionality. |
| `searchPlaceholder` | `string` | `'Search...'` | Placeholder text for the search input. |
| `notifications` | `NotificationItem[]` | `[]` | List of notification objects to display. |
| `showNotifications` | `boolean` | `true` | Toggles the notification bell icon. |
| `userName` | `string` | `undefined` | Display name of the current user. |
| `userRole` | `string` | `undefined` | Role or subtitle for the user. |
| `userAvatar` | `string` | `undefined` | URL for the user's avatar image. |
| `userMenuItems` | `UserMenuItem[]` | `[]` | Array of items for the user dropdown menu. |
| `onToggleSidebar` | `() => void` | `undefined` | Callback for the mobile menu toggle button. |
| `variant` | `'default' \| 'elevated' \| 'bordered' \| 'minimal'` | `'default'` | Visual style variant of the header. |
| `theme` | `'light' \| 'dark' \| 'primary'` | `'light'` | Color theme for the header background. |
| `sticky` | `boolean` | `true` | Keeps the header fixed at the top of the viewport. |

## 4. Accessibility
- **Landmark Role**: Uses the `<header>` HTML element.
- **Keyboard Navigation**: All interactive elements (search, buttons, menus) are focusable via Tab.
- **ARIA Attributes**:
  - `aria-label` provided for icon-only buttons (toggle, notifications).
  - Search input has proper labels and focus management.
  - Dropdowns use appropriate roles and manage `aria-expanded` states.

## 5. Best Practices
- **Performance**: Minimize the number of notification items passed initially; lazy load if possible.
- **Scalability**: Use the `variant` prop to match different sub-brands or sections within the enterprise suite.
- **Security**: Sanitize any user-generated content passed to `title` or notification bodies.

## 6. Integration Notes
- Designed to work alongside a `SideMenu` or sidebar component.
- The `onSearchSubmit` callback can hook into global search services.
- `quickActions` allow for context-specific shortcuts (e.g., "Create Ticket") directly in the header.

## 7. Do’s and Don’ts
- **Do** provide a `userAvatarFallback` (like initials) if the image load fails.
- **Do** use `sticky` for long pages to keep navigation accessible.
- **Don't** overload the `quickActions` area; keep it to 3-4 essential items max.

## 8. Versioning & Maintenance
- **Updates**: New props for advanced search filtering may be added in v2.0.
- **Compatibility**: Fully backward compatible with v1.x.
