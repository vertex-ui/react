# ProductCard Widget

Professional e-commerce product card widget with multiple variants for different layout needs.

## Features

- 🎨 **Three Professional Variants**: Base, Wide, and Minimal layouts
- 🛒 **Cart Management**: Add to cart with quantity selector
- ❤️ **Wishlist Support**: Optional wishlist button with active state
- 🏷️ **Badges**: Featured and discount badges
- 👁️ **Quick View**: Hover overlay with quick view action
- ⭐ **Rating Display**: Star rating visualization
- 💰 **Price Display**: With optional strikethrough for original price
- 📱 **Responsive**: Mobile-friendly with breakpoint adjustments
- ♿ **Accessible**: Keyboard navigation and screen reader support

## Variants

### Base Variant

Classic vertical product card with image on top and details below. Perfect for product grids.

**Max Width**: 320px  
**Image Height**: 200px  
**Layout**: Vertical (Column)

```tsx
<ProductCard.Base
  id="product-1"
  image="https://example.com/product.jpg"
  category="Electronics"
  name="Premium Headphones"
  price={199.99}
  originalPrice={249.99}
  discount="-20%"
  rating={4.5}
  featured={true}
  showWishlist={true}
  cartIcon={<FaShoppingCart />}
  wishlistIcon={<FaHeart />}
  quickViewIcon={<FaEye />}
  onAddToCart={(id, qty) => console.log('Add to cart')}
  onIncrementCart={(id, qty) => console.log('Increment')}
  onDecrementCart={(id, qty) => console.log('Decrement')}
  onWishlist={() => console.log('Toggle wishlist')}
  onQuickView={() => console.log('Quick view')}
/>
```

### Wide Variant (Horizontal Layout)

Horizontal product card with image on left/right and content beside it. Great for list views, cart pages, and featured products.

**Max Width**: 100% (full width)  
**Image Width**: 280px  
**Layout**: Horizontal (Row)

```tsx
<ProductCard.Wide
  id="product-2"
  image="https://example.com/product.jpg"
  imagePosition="left" // or "right"
  category="Fashion"
  name="Designer Watch"
  weight={50}
  units="g"
  price={299.99}
  discount="-15%"
  rating={4.8}
  featured={true}
  showWishlist={true}
  onAddToCart={(id, qty) => console.log('Add to cart')}
  onIncrementCart={(id, qty) => console.log('Increment')}
  onDecrementCart={(id, qty) => console.log('Decrement')}
  onWishlist={() => console.log('Toggle wishlist')}
  onQuickView={() => console.log('Quick view')}
/>
```

### Minimal Variant

Compact, clean design perfect for dense grids or sidebar product suggestions.

**Max Width**: 240px  
**Image Height**: 240px  
**Layout**: Vertical (Column)  
**Features**: Essential information only (no category, weight, or quick view)

```tsx
<ProductCard.Minimal
  id="product-3"
  image="https://example.com/product.jpg"
  name="Smart Watch"
  price={149.99}
  originalPrice={199.99}
  discount="-25%"
  rating={4.2}
  showWishlist={true}
  cartIcon={<FaShoppingCart />}
  wishlistIcon={<FaHeart />}
  onAddToCart={(id, qty) => console.log('Add to cart')}
  onIncrementCart={(id, qty) => console.log('Increment')}
  onDecrementCart={(id, qty) => console.log('Decrement')}
  onWishlist={() => console.log('Toggle wishlist')}
/>
```

## Props

### Common Props (All Variants)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique product identifier |
| `image` | `string` | **required** | Product image URL |
| `imageAlt` | `string` | `'Product'` | Image alt text |
| `name` | `React.ReactNode` | **required** | Product name |
| `price` | `number` | **required** | Current price |
| `originalPrice` | `number` | - | Original price (shows strikethrough) |
| `discount` | `string` | - | Discount badge text (e.g., "-20%") |
| `rating` | `number` | - | Star rating (0-5) |
| `initialQuantity` | `number` | `0` | Initial cart quantity |
| `loading` | `boolean` | `false` | Loading state |
| `cartIcon` | `React.ReactNode` | - | Custom cart icon |
| `wishlistIcon` | `React.ReactNode` | `'♡'` | Custom wishlist icon |
| `wishlistFilledIcon` | `React.ReactNode` | `'♥'` | Custom filled wishlist icon |
| `showWishlist` | `boolean` | `false` | Show wishlist button |
| `isWishlisted` | `boolean` | `false` | Wishlist active state |
| `onAddToCart` | `(id?, qty?) => void \| Promise<void>` | - | Add to cart handler |
| `onIncrementCart` | `(id?, qty?) => void \| Promise<void>` | - | Increment quantity handler |
| `onDecrementCart` | `(id?, qty?) => void \| Promise<void>` | - | Decrement quantity handler |
| `onWishlist` | `() => void` | - | Wishlist toggle handler |
| `onClick` | `() => void` | - | Click handler for product name/image |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `React.CSSProperties` | - | Inline styles |

### Base & Wide Variant Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `category` | `string` | - | Product category |
| `weight` | `number` | - | Product weight |
| `units` | `string` | - | Weight units (g, kg, oz, lb) |
| `featured` | `boolean` | `false` | Show featured badge |
| `featuredText` | `string` | `'Featured'` | Featured badge text |
| `quickViewIcon` | `React.ReactNode` | `'👁'` | Custom quick view icon |
| `onQuickView` | `() => void` | - | Quick view handler |

### Wide Variant Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imagePosition` | `'left' \| 'right'` | `'left'` | Image position |

## Use Cases

### Base Variant
- Product catalog grids
- Shop pages
- Category listings
- Search results
- Related products section

### Wide Variant
- Product detail pages (similar items)
- Shopping cart items
- Order history
- Featured products banner
- Comparison views
- List view toggle on shop pages

### Minimal Variant
- Sidebar suggestions
- "You may also like" sections
- Quick add widgets
- Mobile-optimized views
- Dense product grids
- Upsell/cross-sell sections

## Cart Integration

All variants include built-in cart quantity management:

```tsx
const [cart, setCart] = useState({});

const handleAddToCart = async (productId, quantity) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  setCart(prev => ({
    ...prev,
    [productId]: quantity
  }));
};

const handleIncrement = async (productId, currentQty) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  setCart(prev => ({
    ...prev,
    [productId]: currentQty + 1
  }));
};

const handleDecrement = async (productId, currentQty) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const newQty = currentQty - 1;
  if (newQty === 0) {
    const newCart = { ...cart };
    delete newCart[productId];
    setCart(newCart);
  } else {
    setCart(prev => ({
      ...prev,
      [productId]: newQty
    }));
  }
};

<ProductCard.Base
  {...product}
  initialQuantity={cart[product.id] || 0}
  onAddToCart={handleAddToCart}
  onIncrementCart={handleIncrement}
  onDecrementCart={handleDecrement}
/>
```

## Styling

All variants use professional e-commerce styling with:
- Smooth hover transitions
- Shadow elevation on hover
- Image scale effects
- Responsive breakpoints
- Color-coded badges
- Accessible contrast ratios

### CSS Variables

The components respect theme variables:

```css
--vtx-color-primary-*: Primary color shades
--vtx-color-neutral-*: Neutral grays
--vtx-color-warning-500: Star rating color
```

### Custom Styling

```tsx
<ProductCard.Base
  className="my-custom-product"
  style={{ maxWidth: '280px' }}
/>
```

## Accessibility

- Keyboard navigation support
- ARIA labels on buttons
- Semantic HTML structure
- Focus visible indicators
- Screen reader announcements for cart actions

## Best Practices

1. **Use Base for grids**: 3-4 columns on desktop
2. **Use Wide for featured**: Full-width showcase sections
3. **Use Minimal for sidebars**: Space-constrained areas
4. **Provide onClick**: Make product name/image clickable
5. **Handle async operations**: Use loading states for cart actions
6. **Optimize images**: Use appropriate sizes for each variant
7. **Provide alt text**: Descriptive image alternatives
8. **Use icons consistently**: Same icons across all products

## Examples

See [ProductCard.stories.tsx](../../stories/widgets/ProductCard.stories.tsx) for comprehensive examples including:
- Basic usage
- Wishlist integration
- Loading states
- Grid layouts
- All three variants
- Responsive behavior
