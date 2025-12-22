# ProductCard Variants Comparison

## Quick Reference

| Feature | Base | Wide | Minimal |
|---------|------|------|---------|
| **Layout** | Vertical | Horizontal | Vertical |
| **Max Width** | 320px | 100% | 240px |
| **Image Size** | 200px (h) | 280px (w) | 240px (h) |
| **Category** | ✅ | ✅ | ❌ |
| **Weight/Units** | ✅ | ✅ | ❌ |
| **Featured Badge** | ✅ | ✅ | ❌ |
| **Discount Badge** | ✅ | ✅ | ✅ |
| **Wishlist** | ✅ | ✅ | ✅ |
| **Quick View** | ✅ | ✅ | ❌ |
| **Rating** | ✅ | ✅ | ✅ |
| **Cart Management** | ✅ | ✅ | ✅ |
| **Button Size** | Default | Default | Small |
| **Best For** | Grids | Lists/Featured | Compact Grids |

## Visual Comparison

### Base Variant
```
┌────────────────────┐
│                    │
│      IMAGE         │
│     (200px h)      │
│                    │
├────────────────────┤
│ [Category Chip]    │
│                    │
│ Product Name       │
│ 250g               │
│                    │
│ ★★★★☆ 4.5         │
│                    │
│ $199.99  $249.99   │
│                    │
│ [Add to Cart] [👁] │
└────────────────────┘
     320px max
```

**Use Cases:**
- Main product grids (3-4 columns)
- Category pages
- Search results
- Shop pages

### Wide Variant
```
┌──────────────────────────────────────────────────────┐
│         │  [Category]                                │
│  IMAGE  │  Product Name                              │
│ (280px) │  250g                                      │
│         │  ★★★★☆ 4.5                                │
│         │  $199.99  $249.99                          │
│         │  [Add to Cart]          [View]             │
└──────────────────────────────────────────────────────┘
                    Full Width
```

**Use Cases:**
- Cart items
- Featured products
- Product detail page suggestions
- List view mode
- Comparison tables

### Minimal Variant
```
┌──────────────┐
│              │
│    IMAGE     │
│   (240px h)  │
│              │
├──────────────┤
│ Product Name │
│              │
│ $199.99      │
│ $249.99      │
│              │
│ ★★★★☆        │
│              │
│   [Add]      │
└──────────────┘
   240px max
```

**Use Cases:**
- Sidebar widgets
- "You may also like"
- Dense grids (4-5 columns)
- Mobile views
- Upsell sections

## Code Examples

### Base - Product Grid
```tsx
<Grid container spacing={3}>
  {products.map(product => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ProductCard.Base
        {...product}
        showWishlist={true}
        onAddToCart={handleAddToCart}
      />
    </Grid>
  ))}
</Grid>
```

### Wide - Cart View
```tsx
<Flex direction="column" gap={16}>
  {cartItems.map(item => (
    <ProductCard.Wide
      key={item.id}
      {...item}
      imagePosition="left"
      initialQuantity={item.quantity}
      onIncrementCart={handleIncrement}
      onDecrementCart={handleDecrement}
    />
  ))}
</Flex>
```

### Minimal - Sidebar
```tsx
<div className="sidebar">
  <h4>Related Products</h4>
  <Flex direction="column" gap={16}>
    {relatedProducts.map(product => (
      <ProductCard.Minimal
        key={product.id}
        {...product}
        showWishlist={true}
        onAddToCart={handleAddToCart}
      />
    ))}
  </Flex>
</div>
```

## Responsive Behavior

### Base
- Desktop: 320px max-width
- Tablet: Same
- Mobile: 100% width, maintains aspect ratio

### Wide
- Desktop: Full width, horizontal layout
- Tablet: Same
- Mobile: Switches to vertical (column) layout

### Minimal
- Desktop: 240px max-width
- Tablet: Same
- Mobile: 100% width, maintains aspect ratio

## Performance Considerations

| Variant | DOM Elements | Rerenders | Best Grid Size |
|---------|--------------|-----------|----------------|
| Base | ~15-20 | Medium | 3-4 cols |
| Wide | ~15-20 | Medium | 1-2 cols |
| Minimal | ~10-12 | Low | 4-6 cols |

## Migration Guide

### From Base to Wide
```tsx
// Before
<ProductCard.Base {...props} />

// After (add imagePosition)
<ProductCard.Wide 
  {...props} 
  imagePosition="left" 
/>
```

### From Base to Minimal
```tsx
// Before (with all features)
<ProductCard.Base
  {...props}
  category="Electronics"
  weight={250}
  units="g"
  featured={true}
  onQuickView={handleQuickView}
/>

// After (simplified, no category/weight/quickView)
<ProductCard.Minimal
  {...props}
  // category, weight, units, featured, onQuickView not supported
/>
```

## Choosing the Right Variant

### Choose Base when:
- Building traditional product grids
- Need all product information visible
- 3-4 column layout
- Standard e-commerce shop page

### Choose Wide when:
- Building cart page
- Showing featured/highlighted products
- Need horizontal layout
- More content space needed
- List view option

### Choose Minimal when:
- Space is limited
- Sidebar recommendations
- 4+ column dense grids
- Quick add functionality
- Mobile-first design
- Performance is critical

## Customization

All variants support:
- `className` for custom styles
- `style` for inline styles
- Theme variable overrides
- Custom icons
- Click handlers

```tsx
<ProductCard.Base
  className="custom-product-card"
  style={{ 
    borderRadius: '16px',
    maxWidth: '350px' 
  }}
  cartIcon={<CustomIcon />}
  onClick={() => router.push(`/product/${id}`)}
/>
```
