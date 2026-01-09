"use client";

import React from 'react';
import Widget from '../../components/Widget/Widget';
import { Grid } from '../../components/Grid';

export default {
  title: 'Widgets/ProductCard',
  component: Widget,
};

const sampleProduct = {
  id: '1',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  imageAlt: 'Wireless Headphones',
  category: 'Electronics',
  name: 'Premium Wireless Headphones',
  price: 199.99,
  rating: 4.5,
  href: '/products/wireless-headphones',
};

export const Basic = () => (
  <Widget 
    config={{ 
      type: 'product', 
      data: { ...sampleProduct },
    }} 
  />
);

export const Loading = () => (
  <Widget 
    config={{ 
      type: 'product', 
      data: { ...sampleProduct }, 
      settings: { loading: true } 
    }} 
  />
);

export const WithWishlist = () => {
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  return (
    <Widget
      config={{
        type: 'product',
        data: { 
          ...sampleProduct, 
          id: 'wish-1',
        },
        settings: {
          showWishlist: true,
          isWishlisted: isWishlisted,
          onWishlist: () => {
            setIsWishlisted(!isWishlisted);
            console.log('Wishlist toggled:', !isWishlisted);
          },
          onAddToCart: (id, qty) => console.log('Added to cart:', id, qty),
          onIncrementCart: (id, qty) => console.log('Incremented:', id, qty),
          onDecrementCart: (id, qty) => console.log('Decremented:', id, qty),
        },
      }}
    />
  );
};

export const FeaturedProduct = () => (
  <Widget
    config={{ 
      type: 'product', 
      data: { 
        ...sampleProduct, 
        originalPrice: 249.99,
        discount: '-20%',
        featured: true,
        featuredText: 'Best Seller',
        weight: 250,
        units: 'g',
        categoryHref: '/category/electronics',
      },
      settings: {
        onAddToCart: (_id, qty) => alert(`Added ${qty} item(s) to cart`),
        onIncrementCart: (id, qty) => console.log('Incremented:', id, qty),
        onDecrementCart: (id, qty) => console.log('Decremented:', id, qty),
        onCategoryClick: () => console.log('Category clicked'),
      },
    }}
  />
);

export const FeaturedGrid = () => {
  const featuredProducts = [
    { 
      ...sampleProduct, 
      id: '1', 
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      discount: '-25%',
      featured: true,
      featuredText: 'Best Seller',
      categoryHref: '/category/electronics',
      href: '/products/headphones',
    },
    { 
      ...sampleProduct, 
      id: '2', 
      name: 'Ultra HD 4K Monitor',
      price: 599.99,
      originalPrice: 799.99,
      discount: '-25%',
      featured: true,
      featuredText: 'Top Rated',
      category: 'Displays',
      categoryHref: '/category/displays',
      href: '/products/monitor',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    },
    { 
      ...sampleProduct, 
      id: '3', 
      name: 'Mechanical Gaming Keyboard',
      price: 149.99,
      originalPrice: 199.99,
      discount: '-25%',
      featured: true,
      featuredText: 'Limited Edition',
      category: 'Accessories',
      categoryHref: '/category/accessories',
      href: '/products/keyboard',
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400',
    },
  ];

  return (
    <Grid container spacing={3}>
      {featuredProducts.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <Widget
            config={{
              type: 'product',
              data: product,
              settings: {
                onAddToCart: (id, qty) => console.log('Added:', id, qty),
                onIncrementCart: (id, qty) => console.log('Increment:', id, qty),
                onDecrementCart: (id, qty) => console.log('Decrement:', id, qty),
                onWishlist: () => console.log('Wishlist toggled'),
                onCategoryClick: () => console.log('Category clicked:', product.category),
              },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export const WithQuickView = () => (
  <Widget
    config={{
      type: 'product',
      data: { 
        ...sampleProduct,
        weight: 250,
        units: 'g',
      },
      settings: {
        showWishlist: true,
        onWishlist: () => alert('Added to wishlist!'),
        onQuickView: () => alert('Quick view opened!'),
        onAddToCart: (id, qty) => console.log('Added to cart:', id, qty),
        onIncrementCart: (id, qty) => console.log('Incremented:', id, qty),
        onDecrementCart: (id, qty) => console.log('Decremented:', id, qty),
        onClick: () => console.log('Product clicked'),
      },
    }}
  />
);

export const FullyInteractive = () => {
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  return (
    <Widget
      config={{
        type: 'product',
        data: { 
          ...sampleProduct,
          originalPrice: 249.99,
          discount: '-20%',
          featured: true,
          featuredText: 'Hot Deal',
          weight: 250,
          units: 'g',
          initialQuantity: 0,
        },
        settings: {
          showWishlist: true,
          isWishlisted: isWishlisted,
          onAddToCart: async (id, qty) => {
            console.log('Adding to cart...', id, qty);
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(`Added ${qty} item to cart!`);
          },
          onIncrementCart: async (id, qty) => {
            console.log('Incrementing...', id, qty);
            await new Promise(resolve => setTimeout(resolve, 300));
          },
          onDecrementCart: async (id, qty) => {
            console.log('Decrementing...', id, qty);
            await new Promise(resolve => setTimeout(resolve, 300));
          },
          onWishlist: () => {
            setIsWishlisted(!isWishlisted);
            console.log('Wishlist toggled:', !isWishlisted);
          },
          onQuickView: () => alert('Opening quick view...'),
          onClick: () => console.log('Product page opened'),
        },
      }}
    />
  );
};

export const ProductGrid = () => {
  const products = [
    { ...sampleProduct, id: '1', name: 'Wireless Headphones', price: 199.99, href: '/products/headphones', categoryHref: '/category/electronics' },
    { ...sampleProduct, id: '2', name: 'Smart Watch', price: 299.99, category: 'Wearables', href: '/products/smart-watch', categoryHref: '/category/wearables' },
    { ...sampleProduct, id: '3', name: 'Bluetooth Speaker', price: 149.99, category: 'Audio', href: '/products/speaker', categoryHref: '/category/audio' },
  ];

  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <Widget
            config={{
              type: 'product',
              data: product,
              settings: {
                showWishlist: true,
                onWishlist: () => console.log('Wishlist:', product.id),
                onAddToCart: (id, qty) => console.log('Added:', id, qty),
                onIncrementCart: (id, qty) => console.log('Increment:', id, qty),
                onDecrementCart: (id, qty) => console.log('Decrement:', id, qty),
              },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export const Interactive = () => {
  const [products, setProducts] = React.useState([
    { ...sampleProduct, id: '1', initialQuantity: 0, isWishlisted: false, href: '/products/headphones' },
    { ...sampleProduct, id: '2', name: 'Smart Watch', price: 299.99, initialQuantity: 2, isWishlisted: true, href: '/products/watch' },
    { ...sampleProduct, id: '3', name: 'Bluetooth Speaker', price: 149.99, initialQuantity: 1, isWishlisted: false, href: '/products/speaker' },
  ]);

  const toggleWishlist = (id: string) => {
    setProducts(prev => 
      prev.map(p => p.id === id ? { ...p, isWishlisted: !p.isWishlisted } : p)
    );
  };

  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <Widget
            config={{
              type: 'product',
              data: product,
              settings: {
                showWishlist: true,
                isWishlisted: product.isWishlisted,
                onWishlist: () => toggleWishlist(product.id),
                onQuickView: () => alert(`Quick view: ${product.name}`),
                onAddToCart: (id, qty) => console.log('Added:', id, qty),
                onIncrementCart: (id, qty) => console.log('Increment:', id, qty),
                onDecrementCart: (id, qty) => console.log('Decrement:', id, qty),
                onClick: () => console.log('Clicked:', product.name),
              },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

