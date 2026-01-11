"use client";
import React from 'react';
import { ProductWidgetData, ProductWidgetSettings } from '../types';
import { ProductCard, ProductCardButtonVariant } from '../../../widgets/ProductCard';

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
    quantity,
    initialQuantity,
    featured,
    featuredText,
    href,

    url,
    currency,
    readonly,
  } = data;

  // Extract settings/handlers
  const {
    theme = 'modern',
    imagePosition,
    showWishlist,
    isWishlisted,
    cartIcon,
    wishlistIcon,
    wishlistFilledIcon,
    quickViewIcon,
    addToCartButtonVariant,
    incrementButtonVariant,
    decrementButtonVariant,
    quickViewButtonVariant,
    linkComponent,
    imageComponent,
    fallbackImage,
    priority,
    onAddToCart,
    onIncrementCart,
    onDecrementCart,
    onWishlist,
    onQuickView,
    onClick,
    onCategoryClick,
    loading,
    actionLoading,
    featuredBadgeVariant,
    featuredBadgeColor,
    discountBadgeVariant,
    discountBadgeColor,
    wishlistButtonColor,
    className,
    style,
  } = settings;

  // Common props shared across all variants
  const commonProps = {
    // Identity & Content
    id,
    name,
    image: image || '',
    imageAlt,
    category,
    categoryHref: categoryHref || categoryUrl,
    currency,
    readonly,

    // Pricing
    price: Number(price),
    originalPrice: originalPrice ? Number(originalPrice) : undefined,
    discount,

    // Product Details
    weight,
    units,
    rating,
    featured,
    featuredText,

    // Cart State
    quantity: quantity ?? initialQuantity,
    priority,
    imageComponent,
    fallbackImage,

    // Navigation
    href: href || url || '/',
    linkComponent,

    // Wishlist
    showWishlist: showWishlist !== undefined ? showWishlist : true,
    isWishlisted,

    // Icons
    cartIcon,
    wishlistIcon,
    wishlistFilledIcon,
    quickViewIcon,
    addToCartButtonVariant: addToCartButtonVariant as ProductCardButtonVariant,
    incrementButtonVariant: incrementButtonVariant as ProductCardButtonVariant,
    decrementButtonVariant: decrementButtonVariant as ProductCardButtonVariant,
    quickViewButtonVariant: quickViewButtonVariant as ProductCardButtonVariant,

    // Event Handlers
    onAddToCart,
    onIncrementCart,
    onDecrementCart,
    onWishlist,
    onQuickView,
    onClick,
    onCategoryClick,

    // UI State
    loading,
    actionLoading,
    featuredBadgeVariant,
    featuredBadgeColor,
    discountBadgeVariant,
    discountBadgeColor,
    wishlistButtonColor,
    className,
    style,
  };

  // Determine which variant to render based on theme/settings
  if (theme === 'minimal') {
    return <ProductCard.Minimal {...commonProps} />;
  }

  if (theme === 'inline' || theme === 'list') {
    return <ProductCard.List {...commonProps} />;
  }

  if (imagePosition === 'left' || imagePosition === 'right') {
    return <ProductCard.Wide imagePosition={imagePosition} {...commonProps} />;
  }

  // Default to Base variant
  return <ProductCard.Base {...commonProps} />;
};

ProductWidget.displayName = 'ProductWidget';

export default ProductWidget;