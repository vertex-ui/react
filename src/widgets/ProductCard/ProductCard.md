# ProductCard

## 1. Overview
The **ProductCard** widget is a versatile, high-level component designed to display product information in e-commerce applications. It supports multiple layout variants (Base, Wide, Minimal, List) and includes built-in functionality for cart actions, wishlisting, and quick views. It is designed for high performance and enterprise-grade extensibility.

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { ProductCard } from '@/widgets/ProductCard';

// Usage
<ProductCard.Base ... />
<ProductCard.Wide ... />
<ProductCard.Minimal ... />
<ProductCard.List ... />
```

## 3. Customization Options

### Common Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `ReactNode` | required | Product name. |
| `image` | `string` | required | Product image URL. |
| `price` | `number` | required | Product price. |
| `originalPrice` | `number` | `undefined` | Original price for discount display. |
| `discount` | `string` | `undefined` | Discount badge text (e.g., "-20%"). |
| `rating` | `number` | `undefined` | Product rating (0-5). |
| `loading` | `boolean` | `false` | Shows skeleton loading state. |
| `onAddToCart` | `(data, qty) => void` | `undefined` | Callback for adding to cart. |
| `priority` | `boolean` | `false` | Prioritizes image loading (LCP optimization). |
| `imageComponent` | `React.ElementType` | `undefined` | Custom image component (e.g., Next.js Image). |

### Variants
- **Base**: Standard vertical card.
- **Wide**: Horizontal card with side-by-side image and details (`imagePosition` prop available).
- **Minimal**: Compact vertical card with essential details only.
- **List**: Read-only horizontal item for order summaries.

## 4. Accessibility
- **Images**: Always provide `imageAlt` for screen readers.
- **Buttons**: Interactive elements (Cart, Wishlist) have appropriate `aria-label` attributes.
- **Focus Management**: Focus states are preserved for keyboard navigation.
- **Semantic Structure**: Uses headings (`h5`, `h6`) for product names and prices to maintain document outline.

## 5. Best Practices
- **LCP Optimization**: Set `priority={true}` for ProductCards visible above the fold to improve Core Web Vitals.
- **Image Optimization**: Use `imageComponent` to leverage framework-specific image optimization (e.g., Next.js `next/image`).
- **Error Handling**: Provide `fallbackImage` to handle broken image links gracefully.

## 6. Integration Notes
- Designed to work within `Grid` or `Flex` layouts.
- Integrates with global state management (Redux/Context) via callback props (`onAddToCart`, `onWishlist`).
- The `List` variant is specifically optimized for "My Order" or "Cart" pages.

## 7. Do’s and Don’ts
- **Do** pass `priority` for the first row of products on a listing page.
- **Do** use `actionLoading` when an add-to-cart operation is in progress.
- **Don't** use `ProductCard.Base` in narrow sidebars; use `ProductCard.Minimal` instead.

## 8. Versioning & Maintenance
- **Update Path**: Check `ProductCoreData` interface when upgrading to ensure data compatibility.
