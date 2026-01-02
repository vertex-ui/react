import React from 'react';
import { ProductCard, ProductCardProps } from '../../../widgets/ProductCard';

const ProductWidget: React.FC<ProductCardProps> = (props) => {
  return <ProductCard.Base {...props} />;
};

export default ProductWidget;