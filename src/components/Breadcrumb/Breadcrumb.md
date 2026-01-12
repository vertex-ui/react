# Breadcrumb

## 1. Overview
The **Breadcrumb** component provides a navigation trail showing the user's current location within the application hierarchy. It allows for quick navigation back to parent pages. This is a staple in enterprise applications with deep navigation structures.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Breadcrumb } from '@/components/Breadcrumb';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | required | Array of items `{ label, href, icon, active }`. |
| `separator` | `ReactNode` | `ChevronRight` | Custom element between items. |
| `maxItems` | `number` | `undefined` | Maximum visible items; collapses middle items if exceeded. |
| `linkComponent` | `ElementType` | `a` | Custom link component (e.g., Next.js `Link`). |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of text and icons. |

## 4. Accessibility
- **Nav Role**: Wrapped in a `<nav>` element with `aria-label="Breadcrumb"`.
- **Current Page**: The last item (or active item) has `aria-current="page"`.
- **List Structure**: Uses an ordered list `<ol>` for hierarchy.

## 5. Best Practices
- **Truncation**: Use `maxItems` for deep hierarchies to prevent wrapping on smaller screens.
- **Labels**: Keep labels short and matching the page titles.
- **Navigation**: The last item should generally be non-clickable (plain text) as it represents the current page.

## 6. Integration Notes
- Compatible with client-side routers (React Router, Next.js) via the `linkComponent` prop.
- responsive: Automatically collapses to showing start and end items on mobile.

## 7. Do’s and Don’ts
- **Do** include the "Home" link as the first item.
- **Don't** use breadcrumbs as the *only* navigation method; they are secondary.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
