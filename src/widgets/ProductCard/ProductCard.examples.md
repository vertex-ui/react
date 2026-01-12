# ProductCard Examples

## Basic Usage

Display a product with `ProductCard.Base`.

```tsx
import { ProductCard } from 'src/widgets/ProductCard';

const BasicExample = () => (
  <ProductCard.Base
    id="p1"
    name="Wireless Mouse"
    image="/mouse.jpg"
    price={25.99}
    onAddToCart={(data, qty) => console.log(data, qty)}
  />
);
```

## Customization Examples

### Wide Variant

Display product in a horizontal layout.

```tsx
import { ProductCard } from 'src/widgets/ProductCard';

const WideExample = () => (
  <ProductCard.Wide
    id="p2"
    name="Mechanical Keyboard"
    image="/keyboard.jpg"
    price={150.00}
    imagePosition="left"
    description="Tactile switches for typing."
  />
);
```

### Minimal Variant

Compact card for tight spaces.

```tsx
import { ProductCard } from 'src/widgets/ProductCard';

const MinimalExample = () => (
  <ProductCard.Minimal
    id="p3"
    name="USB Cable"
    image="/cable.jpg"
    price={5.99}
  />
);
```

## Enterprise Scenarios

### E-commerce Listing with Wishlist

Integrate wishlist functionality.

```tsx
import { ProductCard } from 'src/widgets/ProductCard';

const ProductListing = ({ product, userWishlist }) => {
  const isWishlisted = userWishlist.includes(product.id);

  return (
    <ProductCard.Base
      {...product}
      showWishlist
      isWishlisted={isWishlisted}
      onWishlist={(p) => toggleWishlist(p.id)}
    />
  );
};
```

## Accessibility Example

Ensure interactive elements have labels.

```tsx
import { ProductCard } from 'src/widgets/ProductCard';

const A11yExample = () => (
  <ProductCard.Base
    name="Accessible Product"
    image="/img.jpg"
    imageAlt="Detailed view of product"
    price={10}
    cartIcon={<span aria-hidden="true">🛒</span>}
    // Button internal text provides context
  />
);
```
