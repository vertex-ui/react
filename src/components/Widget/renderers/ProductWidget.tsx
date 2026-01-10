import React from 'react';
import { ProductWidgetData, ProductWidgetSettings } from '../types';
import { ProductCard } from '../../../widgets/ProductCard';

interface ProductWidgetProps {
  data: ProductWidgetData;
  settings?: ProductWidgetSettings;
}

/**
 * ProductWidget - Renders a ProductCard with data and settings
 *
 * Properly maps all ProductCard props from widget data and settings.
 * Handles type conversions and provides sensible defaults.
 */
const ProductWidget: React.FC<ProductWidgetProps> = ({ data, settings = {} }) => {
  // Extract data props
  const {
    id,
    name,
    price,
    originalPrice,
    category,
    categoryHref,
    categoryUrl,
    rating,
    image,
    imageAlt,
    weight,
    units,
    discount,
    initialQuantity,
    featured,
    featuredText,
    href,
    url,
  } = data;

  // Extract settings/handlers
  const {
    showWishlist,
    isWishlisted,
    cartIcon,
    wishlistIcon,
    wishlistFilledIcon,
    quickViewIcon,
    linkComponent,
    onAddToCart,
    onIncrementCart,
    onDecrementCart,
    onWishlist,
    onQuickView,
    onClick,
    onCategoryClick,
    loading,
    className,
    style,
  } = settings;

  return (
    <ProductCard.Base
      // Identity & Content
      id={id}
      name={name}
      image={image || ''}
      imageAlt={imageAlt}
      category={category}
      categoryHref={categoryHref || categoryUrl}

      // Pricing
      price={Number(price)}
      originalPrice={originalPrice ? Number(originalPrice) : undefined}
      discount={discount}

      // Product Details
      weight={weight}
      units={units}
      rating={rating}
      featured={featured}
      featuredText={featuredText}

      // Cart State
      initialQuantity={initialQuantity}

      // Navigation
      href={href || url || '/'}
      linkComponent={linkComponent}

      // Wishlist
      showWishlist={showWishlist !== undefined ? showWishlist : true}
      isWishlisted={isWishlisted}

      // Icons
      cartIcon={cartIcon}
      wishlistIcon={wishlistIcon}
      wishlistFilledIcon={wishlistFilledIcon}
      quickViewIcon={quickViewIcon}

      // Event Handlers
      onAddToCart={onAddToCart}
      onIncrementCart={onIncrementCart}
      onDecrementCart={onDecrementCart}
      onWishlist={onWishlist}
      onQuickView={onQuickView}
      onClick={onClick}
      onCategoryClick={onCategoryClick}

      // UI State
      loading={loading}
      className={className}
      style={style}
    />
  );
};

ProductWidget.displayName = 'ProductWidget';

export default ProductWidget;