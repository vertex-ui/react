import React from 'react';
import { ProductWidgetData, ProductWidgetSettings } from '../types';
import { ProductCard } from '../../../widgets/ProductCard';

interface ProductWidgetProps {
  data: ProductWidgetData;
  settings?: ProductWidgetSettings;
}

const ProductWidget: React.FC<ProductWidgetProps> = ({ data, settings }) => {
  // Map widget data to ProductCard props
  return (
    <ProductCard.Base
      id={data.id}
      name={data.name}
      price={Number(data.price)}
      originalPrice={data.originalPrice ? Number(data.originalPrice) : undefined}
      category={data.category}
      rating={data.rating}
      image={data.image || ''}
      {...(settings || {})}
    />
  );
};

export default ProductWidget;