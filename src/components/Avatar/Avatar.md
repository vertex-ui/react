# Avatar

## 1. Overview
The **Avatar** component represents a user or entity, typically displaying a profile picture, initials, or a generic icon. It is ubiquitous in enterprise applications for identifying users in headers, lists, and comments. It handles image loading fallbacks gracefully.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Avatar } from '@/components/Avatar';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | `undefined` | URL of the image. |
| `alt` | `string` | `''` | Alt text for the image. |
| `fallback` | `string` | `'?'` | Text/Initials to show if image fails or isn't provided. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Diameter of the avatar. |
| `shape` | `'circle' \| 'square'` | `'circle'` | Shape of the container. |
| `statusIndicator` | `ReactNode` | `undefined` | Element (dot, icon) to show status (e.g., online). |
| `statusPosition` | `'top-right' \| ...` | `'bottom-right'` | Position of the status indicator. |
| `priority` | `boolean` | `false` | If true, uses eager loading/high priority for the image. |

## 4. Accessibility
- **Images**: Renders a semantic `<img>` tag with `alt` text.
- **Fallback**: If image fails, renders a `span` with `aria-label` or `aria-hidden` as appropriate.
- **Contrast**: Fallback colors are chosen to ensure text readability.

## 5. Best Practices
- **Performance**: Use the `priority` prop for avatars visible above the fold (e.g., in the Navbar) to improve LCP.
- **Fallbacks**: Always provide `fallback` (e.g., user initials) for a better experience when images are missing.

## 6. Integration Notes
- Often used within `UserMenu`, `Comment`, or `Table` rows.
- Can be grouped using an `AvatarGroup` (if available) for stacking.

## 7. Do’s and Don’ts
- **Do** use meaningful `alt` text (e.g., "John Doe's profile").
- **Don't** use high-resolution images for small avatars; resize on the server if possible.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
