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
};

export const Basic = () => (
  <Widget config={{ type: 'product', data: { ...sampleProduct }, settings: { theme: 'ecommerce' } }} />
);

export const WithWishlist = () => (
  <Widget
    config={{
      type: 'product',
      data: { ...sampleProduct, id: 'wish-1' },
      settings: { theme: 'ecommerce' },
    }}
  />
);

export const FeaturedProduct = () => (
  <Widget
    config={{ type: 'product', data: { ...sampleProduct, originalPrice: 249.99 }, settings: { theme: 'ecommerce' } }}
  />
);

export const ProductGrid = () => (
  <Widget
    config={{
      type: 'product',
      data: { id: '1', image: sampleProduct.image, category: 'Electronics', name: 'Wireless Headphones', price: 199.99 },
      settings: { theme: 'ecommerce' },
    }}
  />
);

export const Interactive = () => {
  const [products] = React.useState([
    { ...sampleProduct, id: '1', initialQuantity: 0 },
    { ...sampleProduct, id: '2', name: 'Smart Watch', price: 299.99, initialQuantity: 0 },
  ]);

  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <Widget
            config={{
              type: 'product',
              data: product,
              settings: { theme: 'ecommerce' },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

