# Navbar

## 1. Overview
The **Navbar** component is the main responsive navigation bar. It automatically switches between a desktop layout (links, dropdowns) and a mobile layout (hamburger menu, drawer).

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Navbar } from '@/components/Navbar';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `ReactNode` | `undefined` | Brand logo. |
| `sections` | `NavbarSection[]` | `[]` | Navigation links and submenus. |
| `actions` | `ReactNode` | `undefined` | Right-side actions (Auth buttons, etc.). |
| `mobileBreakpoint` | `number` | `1024` | Pixel width to switch layouts. |
| `desktopLayout` | `'single-row' \| 'double-row'` | `'single-row'` | Layout style. |
| `linkComponent` | `ElementType` | `undefined` | Router link component. |

## 4. Accessibility
- **Landmark**: `<nav>`.
- **Mobile**: Uses a dialog/modal pattern for the mobile drawer.
- **Focus**: Manages focus within the mobile menu.

## 5. Best Practices
- **Hierarchy**: Limit top-level items to 5-7. Use submenus for the rest.
- **Mobile**: Ensure `mobileBreakpoint` matches your grid system.

## 6. Integration Notes
- Supports mega-menus via nested sections structure.

## 7. Do’s and Don’ts
- **Do** keep the logo visible on mobile.
- **Don't** hide critical actions (like Login) in deep submenus.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
