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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | `undefined` |   |
| `image` | `string` | `undefined` | Product image URL. |
| `imageAlt` | `string` | `undefined` |   |
| `category` | `string` | `undefined` |   |
| `categoryHref` | `string` | `undefined` |   |
| `name` | `React.ReactNode` | `undefined` | Product name. |
| `weight` | `number` | `undefined` |   |
| `units` | `string` | `undefined` |   |
| `price` | `number` | `undefined` | Product price. |
| `originalPrice` | `number` | `undefined` | Original price for discount display. |
| `discount` | `string` | `undefined` | Discount badge text (e.g., "-20%"). |
| `rating` | `number` | `undefined` | Product rating (0-5). |
| `featured` | `boolean` | `undefined` |   |
| `featuredText` | `string` | `undefined` |   |
| `showWishlist` | `boolean` | `undefined` |   |
| `isWishlisted` | `boolean` | `undefined` |   |
| `cartIcon` | `React.ReactNode` | `undefined` |   |
| `wishlistIcon` | `React.ReactNode` | `undefined` |   |
| `wishlistFilledIcon` | `React.ReactNode` | `undefined` |   |
| `quickViewIcon` | `React.ReactNode` | `undefined` |   |
| `href` | `string` | `undefined` |   |
| `linkComponent` | `LinkComponent,` | `undefined` | ProductCard.Base - Standard product card Feature-rich product card with image, pricing, ratings, cart actions, and wishlist |
| `onAddToCart` | `(data: ProductCoreData, quantity: number) => void \| Promise<void>` | `undefined` | Callback for adding to cart. |
| `onIncrementCart` | `(data: ProductCoreData, quantity: number) => void \| Promise<void>` | `undefined` |   |
| `onDecrementCart` | `(data: ProductCoreData, quantity: number) => void \| Promise<void>` | `undefined` |   |
| `onWishlist` | `(data: ProductCoreData) => void` | `undefined` |   |
| `onQuickView` | `(data: ProductCoreData) => void` | `undefined` |   |
| `onClick` | `(data: ProductCoreData) => void` | `undefined` |   |
| `onCategoryClick` | `(data: ProductCoreData) => void` | `undefined` |   |
| `loading` | `boolean` | `undefined` | Shows skeleton loading state. |
| `actionLoading` | `boolean` | `undefined` | Action loading state (e.g. adding to cart) |
| `quantity` | `number` | `undefined` |   |
| `imageComponent` | `React.ElementType` | `undefined` | Custom image component (e.g. Next.js Image) |
| `fallbackImage` | `string` | `undefined` | Fallback image to show while loading or on error |
| `priority` | `boolean` | `false` | Whether to prioritize loading the image (eager load) |
| `className` | `string` | `undefined` |   |
| `style` | `React.CSSProperties` | `undefined` |   |
| `addToCartButtonVariant` | `ProductCardButtonVariant` | `undefined` |   |
| `incrementButtonVariant` | `ProductCardButtonVariant` | `undefined` |   |
| `decrementButtonVariant` | `ProductCardButtonVariant` | `undefined` |   |
| `quickViewButtonVariant` | `ProductCardButtonVariant` | `undefined` |   |
| `featuredBadgeVariant` | `'filled' \| 'outlined' \| 'light'` | `undefined` |   |
| `featuredBadgeColor` | `'default' \| 'primary' \| 'success' \| 'error' \| 'warning' \| 'info'` | `undefined` |   |
| `discountBadgeVariant` | `'filled' \| 'outlined' \| 'light'` | `undefined` |   |
| `discountBadgeColor` | `'default' \| 'primary' \| 'success' \| 'error' \| 'warning' \| 'info'` | `undefined` |   |
| `wishlistButtonColor` | `'default' \| 'primary' \| 'success' \| 'error' \| 'warning' \| 'info'` | `undefined` |   |
| `imagePosition` | `'left' \| 'right'` | `undefined` |   |
| `variant` | `string` | `undefined` | ProductCard.Minimal - Compact product card Minimalist product card with essential information and compact layout |
| `readonly` | `boolean` | `undefined` |   |
| `currency` | `string` | `undefined` |   |
| `Qty` | `{quantity}` | `undefined` | ProductCard.List - Compact list item for orders Read-only horizontal layout for displaying order items with quantity |
| `Base` | `ProductCardBaseWithParsedClasses as React.FC<ProductCardProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` |   |
| `Wide` | `ProductCardWideWithParsedClasses as React.FC<ProductCardWideProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` |   |
| `Minimal` | `ProductCardMinimalWithParsedClasses as React.FC<ProductCardProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` |   |
| `List` | `ProductCardListWithParsedClasses as React.FC<ProductCardListProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` |   |

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
