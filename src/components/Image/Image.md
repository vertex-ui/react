# Image

## 1. Overview
The **Image** component is an enhanced `<img>` wrapper that handles loading states, errors, and fallbacks. It supports eager loading priorities and integration with framework-specific image components.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Image } from '@/components/Image';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | required | Image URL. |
| `alt` | `string` | required | Alt text. |
| `fallback` | `string` | `undefined` | Placeholder URL. |
| `priority` | `boolean` | `false` | Eager loading/Fetch priority high. |
| `component` | `ElementType` | `'img'` | Custom underlying component. |

## 4. Accessibility
- **Alt Text**: Required prop.
- **State**: Hides broken images from view to avoid confusion.

## 5. Best Practices
- **LCP**: Use `priority` for the main hero image.
- **Fallbacks**: Always provide a fallback for user-generated content.

## 6. Integration Notes
- Pass `NextImage` to `component` prop to use Next.js optimization.

## 7. Do’s and Don’ts
- **Do** use for all content images.
- **Don't** use for decorative CSS background images.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
