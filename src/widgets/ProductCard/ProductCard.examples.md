# Product Widget Examples

## Basic Usage

Render a product card.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'product',
      data: {
        name: 'Wireless Headphones',
        price: 199.99,
        image: '/headphones.jpg'
      }
    }}
  />
);
```

## Customization Examples

### Full Feature Card

With ratings, discount, and cart actions.

```tsx
import { Widget } from 'src/components/Widget';

const FullProduct = () => (
  <Widget
    config={{
      type: 'product',
      data: {
        id: 'p1',
        name: 'Smart Watch',
        price: 299,
        originalPrice: 350,
        discount: '-15%',
        rating: 4.5,
        image: '/watch.jpg',
        inStock: true
      },
      settings: {
        showRating: true,
        showWishlist: true,
        onAddToCart: (item, qty) => console.log('Added', item, qty)
      }
    }}
  />
);
```

## Enterprise Scenarios

### Product Grid

Multiple products in a grid layout.

```tsx
import { Widget } from 'src/components/Widget';

const ProductCatalog = ({ products }) => (
  <Widget
    config={{
      type: 'grid',
      data: {
        widgets: products.map(p => ({
          type: 'product',
          data: p
        }))
      },
      settings: {
        grid: { desktop: 4, tablet: 2, mobile: 1, spacing: 'md' }
      }
    }}
  />
);
```

## Accessibility Example

Ensures images have alt text and buttons are labeled.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <Widget
    config={{
      type: 'product',
      data: {
        name: 'Keyboard',
        price: 100,
        image: '/kb.jpg',
        imageAlt: 'Mechanical keyboard with RGB lighting'
      }
    }}
  />
);
```
