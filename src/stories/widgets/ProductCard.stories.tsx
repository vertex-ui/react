import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import { ProductCard } from '../../widgets/ProductCard/ProductCard';
import { Grid } from '../../components/Grid';
import { Flex } from '../../components/Flex';

export default {
  title: 'Widgets/ProductCard',
  component: ProductCard,
};

// Sample product data
const sampleProduct = {
  id: '1',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  imageAlt: 'Wireless Headphones',
  category: 'Electronics',
  name: 'Premium Wireless Headphones',
  weight: 250,
  units: 'g',
  price: 199.99,
  rating: 4.5,
};

// ==================== Basic Example ====================

export const Basic = () => (
  <ProductCard.Base
    {...sampleProduct}
    onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
    onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
    onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
  />
);

// ==================== With Wishlist ====================

export const WithWishlist = () => (
  <ProductCard.Base
    {...sampleProduct}
    showWishlist={true}
    cartIcon={<FaShoppingCart />}
    wishlistIcon={<FaHeart />}
    onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
    onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
    onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
    onWishlist={() => console.log('Add to wishlist')}
  />
);

// ==================== Featured Product ====================

export const FeaturedProduct = () => (
  <ProductCard.Base
    {...sampleProduct}
    featured={true}
    discount="-20%"
    originalPrice={249.99}
    showWishlist={true}
    cartIcon={<FaShoppingCart />}
    wishlistIcon={<FaHeart />}
    quickViewIcon={<FaEye />}
    onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
    onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
    onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
    onWishlist={() => console.log('Add to wishlist')}
    onQuickView={() => console.log('Quick view')}
  />
);

// ==================== With Quick View ====================

export const WithQuickView = () => (
  <ProductCard.Base
    {...sampleProduct}
    showWishlist={true}
    cartIcon={<FaShoppingCart />}
    wishlistIcon={<FaHeart />}
    quickViewIcon={<FaEye />}
    onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
    onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
    onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
    onWishlist={() => console.log('Add to wishlist')}
    onQuickView={() => console.log('Quick view')}
  />
);

// ==================== With Initial Quantity ====================

export const WithInitialQuantity = () => (
  <ProductCard.Base
    {...sampleProduct}
    initialQuantity={2}
    onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
    onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
    onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
  />
);

// ==================== Loading State ====================

export const Loading = () => (
  <ProductCard.Base
    {...sampleProduct}
    loading={true}
    onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
  />
);

// ==================== Without Category ====================

export const WithoutCategory = () => (
  <ProductCard.Base
    {...sampleProduct}
    category={undefined}
    onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
    onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
    onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
  />
);

// ==================== Without Weight ====================

export const WithoutWeight = () => (
  <ProductCard.Base
    {...sampleProduct}
    weight={undefined}
    units={undefined}
    onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
    onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
    onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
  />
);

// ==================== Without Rating ====================

export const WithoutRating = () => (
  <ProductCard.Base
    {...sampleProduct}
    rating={undefined}
    onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
    onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
    onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
  />
);

// ==================== Product Grid ====================

export const ProductGrid = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4}>
      <ProductCard.Base
        id="1"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
        category="Electronics"
        name="Wireless Headphones"
        weight={250}
        units="g"
        price={199.99}
        originalPrice={249.99}
        discount="-20%"
        rating={4.5}
        featured={true}
        showWishlist={true}
        cartIcon={<FaShoppingCart />}
        wishlistIcon={<FaHeart />}
        quickViewIcon={<FaEye />}
        onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
        onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
        onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
        onWishlist={() => console.log('Wishlist')}
        onQuickView={() => console.log('Quick view')}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <ProductCard.Base
        id="2"
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
        category="Accessories"
        name="Smart Watch"
        weight={45}
        units="g"
        price={299.99}
        rating={5}
        showWishlist={true}
        cartIcon={<FaShoppingCart />}
        wishlistIcon={<FaHeart />}
        quickViewIcon={<FaEye />}
        onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
        onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
        onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
        onWishlist={() => console.log('Wishlist')}
        onQuickView={() => console.log('Quick view')}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <ProductCard.Base
        id="3"
        image="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400"
        category="Fashion"
        name="Designer Sunglasses"
        weight={30}
        units="g"
        price={149.99}
        originalPrice={179.99}
        discount="-15%"
        rating={4}
        showWishlist={true}
        isWishlisted={true}
        cartIcon={<FaShoppingCart />}
        wishlistIcon={<FaHeart />}
        quickViewIcon={<FaEye />}
        onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
        onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
        onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
        onWishlist={() => console.log('Wishlist')}
        onQuickView={() => console.log('Quick view')}
      />
    </Grid>
  </Grid>
);

// ==================== Interactive Example ====================

export const Interactive = () => {
  const [products, setProducts] = React.useState([
    { ...sampleProduct, id: '1', initialQuantity: 0 },
    { ...sampleProduct, id: '2', name: 'Smart Watch', price: 299.99, initialQuantity: 0 },
  ]);

  const handleAddToCart = async (id?: string) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, initialQuantity: 1 } : p))
    );
  };

  const handleIncrement = async (id?: string, qty?: number) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, initialQuantity: (qty || 0) + 1 } : p))
    );
  };

  const handleDecrement = async (id?: string, qty?: number) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, initialQuantity: Math.max(0, (qty || 0) - 1) } : p))
    );
  };

  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <ProductCard.Base
            {...product}
            cartIcon={<FaShoppingCart />}
            wishlistIcon={<FaHeart />}
            quickViewIcon={<FaEye />}
            onAddToCart={handleAddToCart}
            onIncrementCart={handleIncrement}
            onDecrementCart={handleDecrement}
            onWishlist={() => console.log('Wishlist:', product.id)}
            onQuickView={() => console.log('Quick view:', product.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

// ==================== Wide Variant (Horizontal Layout) ====================

export const WideVariant = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <ProductCard.Wide
      {...sampleProduct}
      featured={true}
      discount="-20%"
      originalPrice={249.99}
      showWishlist={true}
      isWishlisted={isWishlisted}
      cartIcon={<FaShoppingCart />}
      wishlistIcon={<FaHeart />}
      wishlistFilledIcon={<FaHeart />}
      quickViewIcon={<FaEye />}
      onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
      onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
      onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
      onWishlist={() => setIsWishlisted(!isWishlisted)}
      onQuickView={() => console.log('Quick view')}
      onClick={() => console.log('Product clicked')}
    />
  );
};

export const WideVariantImageRight = () => (
  <ProductCard.Wide
    {...sampleProduct}
    imagePosition="right"
    discount="-15%"
    originalPrice={229.99}
    showWishlist={true}
    cartIcon={<FaShoppingCart />}
    wishlistIcon={<FaHeart />}
    quickViewIcon={<FaEye />}
    onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
    onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
    onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
    onWishlist={() => console.log('Add to wishlist')}
    onQuickView={() => console.log('Quick view')}
  />
);

// ==================== Minimal Variant ====================

export const MinimalVariant = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <ProductCard.Minimal
      {...sampleProduct}
      discount="-20%"
      originalPrice={249.99}
      showWishlist={true}
      isWishlisted={isWishlisted}
      cartIcon={<FaShoppingCart />}
      wishlistIcon={<FaHeart />}
      wishlistFilledIcon={<FaHeart />}
      onAddToCart={(id, qty) => console.log('Add to cart:', id, qty)}
      onIncrementCart={(id, qty) => console.log('Increment:', id, qty)}
      onDecrementCart={(id, qty) => console.log('Decrement:', id, qty)}
      onWishlist={() => setIsWishlisted(!isWishlisted)}
      onClick={() => console.log('Product clicked')}
    />
  );
};

// ==================== All Variants Grid ====================

export const AllVariants = () => {
  const products = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      category: 'Electronics',
      name: 'Premium Headphones',
      weight: 250,
      units: 'g',
      price: 199.99,
      originalPrice: 249.99,
      discount: '-20%',
      rating: 4.5,
      featured: true,
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      category: 'Accessories',
      name: 'Smart Watch',
      weight: 50,
      units: 'g',
      price: 299.99,
      rating: 4.8,
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      category: 'Fashion',
      name: 'Designer Sunglasses',
      price: 149.99,
      originalPrice: 199.99,
      discount: '-25%',
      rating: 4.2,
    },
  ];

  return (
    <Flex direction="column" gap={32}>
      <div>
        <h3>Base Variant</h3>
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <ProductCard.Base
                {...product}
                showWishlist={true}
                cartIcon={<FaShoppingCart />}
                wishlistIcon={<FaHeart />}
                quickViewIcon={<FaEye />}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onIncrementCart={(id) => console.log('Increment:', id)}
                onDecrementCart={(id) => console.log('Decrement:', id)}
                onWishlist={() => console.log('Wishlist:', product.id)}
                onQuickView={() => console.log('Quick view:', product.id)}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <div>
        <h3>Wide Variant</h3>
        <Flex direction="column" gap={16}>
          {products.map(product => (
            <ProductCard.Wide
              key={product.id}
              {...product}
              showWishlist={true}
              cartIcon={<FaShoppingCart />}
              wishlistIcon={<FaHeart />}
              quickViewIcon={<FaEye />}
              onAddToCart={(id) => console.log('Add to cart:', id)}
              onIncrementCart={(id) => console.log('Increment:', id)}
              onDecrementCart={(id) => console.log('Decrement:', id)}
              onWishlist={() => console.log('Wishlist:', product.id)}
              onQuickView={() => console.log('Quick view:', product.id)}
            />
          ))}
        </Flex>
      </div>

      <div>
        <h3>Minimal Variant</h3>
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid key={product.id} item xs={12} sm={6} md={3}>
              <ProductCard.Minimal
                {...product}
                showWishlist={true}
                cartIcon={<FaShoppingCart />}
                wishlistIcon={<FaHeart />}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onIncrementCart={(id) => console.log('Increment:', id)}
                onDecrementCart={(id) => console.log('Decrement:', id)}
                onWishlist={() => console.log('Wishlist:', product.id)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Flex>
  );
};
