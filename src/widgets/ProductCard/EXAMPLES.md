# ProductCard - Usage Examples

## Real-World Implementations

### 1. Product Catalog Page

```tsx
import { ProductCard } from 'vertex-ui-react';
import { Grid } from 'vertex-ui-react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

function ProductCatalog() {
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState(new Set());

  const products = [
    {
      id: 'p1',
      image: '/images/headphones.jpg',
      category: 'Electronics',
      name: 'Premium Wireless Headphones',
      weight: 250,
      units: 'g',
      price: 199.99,
      originalPrice: 249.99,
      discount: '-20%',
      rating: 4.5,
      featured: true,
    },
    // ... more products
  ];

  const handleAddToCart = async (productId, quantity) => {
    await api.cart.add(productId, quantity);
    setCart(prev => ({ ...prev, [productId]: quantity }));
  };

  const handleIncrement = async (productId, currentQty) => {
    const newQty = currentQty + 1;
    await api.cart.update(productId, newQty);
    setCart(prev => ({ ...prev, [productId]: newQty }));
  };

  const handleDecrement = async (productId, currentQty) => {
    const newQty = currentQty - 1;
    if (newQty === 0) {
      await api.cart.remove(productId);
      const newCart = { ...cart };
      delete newCart[productId];
      setCart(newCart);
    } else {
      await api.cart.update(productId, newQty);
      setCart(prev => ({ ...prev, [productId]: newQty }));
    }
  };

  const handleWishlist = async (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
      await api.wishlist.remove(productId);
    } else {
      newWishlist.add(productId);
      await api.wishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <ProductCard.Base
            {...product}
            initialQuantity={cart[product.id] || 0}
            showWishlist={true}
            isWishlisted={wishlist.has(product.id)}
            cartIcon={<FaShoppingCart />}
            wishlistIcon={<FaHeart />}
            onAddToCart={handleAddToCart}
            onIncrementCart={handleIncrement}
            onDecrementCart={handleDecrement}
            onWishlist={() => handleWishlist(product.id)}
            onQuickView={() => router.push(`/product/${product.id}`)}
            onClick={() => router.push(`/product/${product.id}`)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
```

### 2. Shopping Cart Page (Wide Variant)

```tsx
import { ProductCard } from 'vertex-ui-react';
import { Flex } from 'vertex-ui-react';
import { FaTrash } from 'react-icons/fa';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const handleRemove = async (productId) => {
    await api.cart.remove(productId);
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = async (productId, newQty) => {
    await api.cart.update(productId, newQty);
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <Flex direction="column" gap={16}>
        {cartItems.map(item => (
          <ProductCard.Wide
            key={item.id}
            {...item}
            imagePosition="left"
            initialQuantity={item.quantity}
            onIncrementCart={(id, qty) => handleUpdateQuantity(id, qty + 1)}
            onDecrementCart={(id, qty) => {
              if (qty === 1) {
                handleRemove(id);
              } else {
                handleUpdateQuantity(id, qty - 1);
              }
            }}
            onClick={() => router.push(`/product/${item.id}`)}
          />
        ))}
      </Flex>

      <div className="cart-summary">
        <h3>Total: ${calculateTotal(cartItems)}</h3>
        <Button onClick={handleCheckout}>Proceed to Checkout</Button>
      </div>
    </div>
  );
}
```

### 3. Sidebar Recommendations (Minimal Variant)

```tsx
import { ProductCard } from 'vertex-ui-react';
import { Flex } from 'vertex-ui-react';

function ProductSidebar({ currentProductId }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    api.products.getRecommendations(currentProductId)
      .then(setRecommendations);
  }, [currentProductId]);

  return (
    <div className="sidebar">
      <h4>You May Also Like</h4>
      <Flex direction="column" gap={16}>
        {recommendations.map(product => (
          <ProductCard.Minimal
            key={product.id}
            {...product}
            showWishlist={true}
            onAddToCart={(id) => {
              api.cart.add(id, 1);
              toast.success('Added to cart!');
            }}
            onClick={() => router.push(`/product/${product.id}`)}
          />
        ))}
      </Flex>
    </div>
  );
}
```

### 4. Featured Products Banner (Wide Variant)

```tsx
import { ProductCard } from 'vertex-ui-react';
import { Flex } from 'vertex-ui-react';

function FeaturedProductsBanner() {
  const featuredProducts = [
    {
      id: 'f1',
      image: '/images/featured-1.jpg',
      category: 'New Arrival',
      name: 'Latest Smartphone',
      price: 999.99,
      originalPrice: 1199.99,
      discount: '-17%',
      rating: 4.9,
      featured: true,
      featuredText: 'Bestseller',
    },
  ];

  return (
    <section className="featured-section">
      <h2>Featured Products</h2>
      <Flex direction="column" gap={24}>
        {featuredProducts.map(product => (
          <ProductCard.Wide
            key={product.id}
            {...product}
            imagePosition="left"
            showWishlist={true}
            onAddToCart={(id) => handleAddToCart(id, 1)}
            onQuickView={() => setQuickViewModal(product)}
            onClick={() => router.push(`/product/${product.id}`)}
          />
        ))}
      </Flex>
    </section>
  );
}
```

### 5. Mobile Product Grid (Minimal Variant)

```tsx
import { ProductCard } from 'vertex-ui-react';
import { Grid } from 'vertex-ui-react';

function MobileProductGrid({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid key={product.id} item xs={6}>
          <ProductCard.Minimal
            {...product}
            onAddToCart={(id) => {
              addToCart(id);
              showMiniCart();
            }}
            onClick={() => router.push(`/product/${product.id}`)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
```

### 6. Quick Add Widget (Minimal Variant)

```tsx
import { ProductCard } from 'vertex-ui-react';
import { Flex } from 'vertex-ui-react';

function QuickAddWidget() {
  const [trendingProducts, setTrendingProducts] = useState([]);

  return (
    <div className="quick-add-widget">
      <h4>🔥 Trending Now</h4>
      <Grid container spacing={2}>
        {trendingProducts.slice(0, 4).map(product => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <ProductCard.Minimal
              {...product}
              showWishlist={false}
              onAddToCart={async (id) => {
                await api.cart.add(id, 1);
                toast.success('Added to cart!', {
                  action: {
                    label: 'View Cart',
                    onClick: () => router.push('/cart')
                  }
                });
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
```

### 7. Product Comparison (Wide Variant)

```tsx
import { ProductCard } from 'vertex-ui-react';
import { Flex } from 'vertex-ui-react';

function ProductComparison({ productIds }) {
  const [products, setProducts] = useState([]);

  return (
    <div className="comparison-view">
      <h2>Compare Products</h2>
      <Flex direction="column" gap={16}>
        {products.map(product => (
          <ProductCard.Wide
            key={product.id}
            {...product}
            imagePosition="left"
            showWishlist={true}
            onAddToCart={(id) => handleAddToCart(id, 1)}
            onQuickView={() => openDetailModal(product)}
          />
        ))}
      </Flex>
    </div>
  );
}
```

### 8. Order History (Wide Variant)

```tsx
import { ProductCard } from 'vertex-ui-react';
import { Flex, Button } from 'vertex-ui-react';

function OrderHistory({ orders }) {
  return (
    <div className="order-history">
      {orders.map(order => (
        <div key={order.id} className="order">
          <h3>Order #{order.id}</h3>
          <p>{new Date(order.date).toLocaleDateString()}</p>
          
          <Flex direction="column" gap={12}>
            {order.items.map(item => (
              <ProductCard.Wide
                key={item.id}
                {...item}
                imagePosition="left"
                initialQuantity={item.quantity}
                onAddToCart={undefined} // Read-only
                onIncrementCart={undefined} // Read-only
                onDecrementCart={undefined} // Read-only
                onClick={() => router.push(`/product/${item.id}`)}
              />
            ))}
          </Flex>

          <Button onClick={() => reorder(order.id)}>
            Reorder All Items
          </Button>
        </div>
      ))}
    </div>
  );
}
```

## Tips & Tricks

### 1. Optimistic UI Updates

```tsx
const handleAddToCart = async (productId, quantity) => {
  // Update UI immediately
  setCart(prev => ({ ...prev, [productId]: quantity }));
  
  try {
    await api.cart.add(productId, quantity);
  } catch (error) {
    // Revert on error
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
    toast.error('Failed to add to cart');
  }
};
```

### 2. Debounced Quantity Updates

```tsx
const debouncedUpdate = useCallback(
  debounce(async (productId, quantity) => {
    await api.cart.update(productId, quantity);
  }, 500),
  []
);

const handleIncrement = (productId, currentQty) => {
  const newQty = currentQty + 1;
  setCart(prev => ({ ...prev, [productId]: newQty }));
  debouncedUpdate(productId, newQty);
};
```

### 3. Loading States

```tsx
const [loadingProducts, setLoadingProducts] = useState(new Set());

const handleAddToCart = async (productId, quantity) => {
  setLoadingProducts(prev => new Set(prev).add(productId));
  
  try {
    await api.cart.add(productId, quantity);
    setCart(prev => ({ ...prev, [productId]: quantity }));
  } finally {
    setLoadingProducts(prev => {
      const newSet = new Set(prev);
      newSet.delete(productId);
      return newSet;
    });
  }
};

// In render:
<ProductCard.Base
  {...product}
  loading={loadingProducts.has(product.id)}
/>
```

### 4. Image Lazy Loading

```tsx
<ProductCard.Base
  image={`${product.imageUrl}?w=400&q=75`}
  imageAlt={product.name}
  // Images will lazy load by default with modern browsers
/>
```
