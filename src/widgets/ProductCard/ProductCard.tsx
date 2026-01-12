"use client";

import React from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './ProductCard.css';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { Chip } from '../../components/Chip';
import { Rating } from '../../components/Rating';
import { SkeletonTheme } from '../../components/Skeleton';
import { Image } from '../../components/Image';
import { FiHeart, FiEye, FiShoppingCart } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';

export interface ProductCoreData {
  id?: string;
  name: React.ReactNode;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  category?: string;
  weight?: number;
  units?: string;
}

export type ProductCardButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'outline' | 'ghost' | 'danger';

export interface ProductCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  // ... existing props ...
  id?: string;
  image: string;
  imageAlt?: string;
  category?: string;
  categoryHref?: string;
  name: React.ReactNode;
  weight?: number;
  units?: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating?: number;
  featured?: boolean;
  featuredText?: string;
  showWishlist?: boolean;
  isWishlisted?: boolean;
  cartIcon?: React.ReactNode;
  wishlistIcon?: React.ReactNode;
  wishlistFilledIcon?: React.ReactNode;
  quickViewIcon?: React.ReactNode;
  href?: string;
  linkComponent?: React.ComponentType<any>;
  onAddToCart?: (data: ProductCoreData, quantity: number) => void | Promise<void>;
  onIncrementCart?: (data: ProductCoreData, quantity: number) => void | Promise<void>;
  onDecrementCart?: (data: ProductCoreData, quantity: number) => void | Promise<void>;
  onWishlist?: (data: ProductCoreData) => void;
  onQuickView?: (data: ProductCoreData) => void;
  onClick?: (data: ProductCoreData) => void;
  onCategoryClick?: (data: ProductCoreData) => void;
  loading?: boolean;
  /**
   * Action loading state (e.g. adding to cart)
   */
  actionLoading?: boolean;
  /**
   * Current quantity
   */
  quantity?: number;
  /**
   * Custom image component (e.g. Next.js Image)
   */
  imageComponent?: React.ElementType;
  /**
   * Fallback image to show while loading or on error
   */
  fallbackImage?: string;
  /**
   * Whether to prioritize loading the image (eager load)
   * @default false
   */
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  addToCartButtonVariant?: ProductCardButtonVariant;
  incrementButtonVariant?: ProductCardButtonVariant;
  decrementButtonVariant?: ProductCardButtonVariant;
  quickViewButtonVariant?: ProductCardButtonVariant;
  featuredBadgeVariant?: 'filled' | 'outlined' | 'light';
  featuredBadgeColor?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';
  discountBadgeVariant?: 'filled' | 'outlined' | 'light';
  discountBadgeColor?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';
  wishlistButtonColor?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';
}

/**
 * ProductCard.Base - Standard product card
 * 
 * Feature-rich product card with image, pricing, ratings, cart actions, and wishlist
 * 
 * @example
 * ```tsx
 * <ProductCard.Base
 *   id="prod-1"
 *   name="Product Name"
 *   image="/product.jpg"
 *   price={29.99}
 *   originalPrice={39.99}
 *   discount="-25%"
 *   onAddToCart={(id, qty) => console.log('Added', id, qty)}
 * />
 * ```
 */
const ProductCardBase = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      id,
      image,
      imageAlt = 'Product',
      category,
      categoryHref,
      name,
      weight,
      units,
      price,
      originalPrice,
      discount,
      rating,
      featured = false,
      featuredText = 'Featured',
      showWishlist = false,
      isWishlisted = false,
      cartIcon,
      wishlistIcon,
      wishlistFilledIcon,
      quickViewIcon,
      href,
      linkComponent: LinkComponent,
      onAddToCart,
      onIncrementCart,
      onDecrementCart,
      onWishlist,
      onQuickView,
      onClick,
      onCategoryClick,
      loading = false,
      actionLoading = false,
      quantity = 0,
      imageComponent,
      fallbackImage,

      priority = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const showLoading = actionLoading || loading;

    // Core data for callbacks
    const coreData: ProductCoreData = {
      id,
      name,
      image,
      price,
      originalPrice,
      discount,
      category,
      weight,
      units
    };

    // Render skeleton loading state
    if (loading && !actionLoading) {
      return <SkeletonTheme theme="product" />;
    }

    return (
      <Card
        variant="outlined"
        className={`productcard ${className}`}
        style={{ ...style }}
        noPadding
        ref={ref as any}
        {...props}
      >
        <Flex direction="column">
          {/* IMAGE */}
          <div className="productcard-image-wrapper">
            {href ? (
              LinkComponent ? (
                <LinkComponent href={href} className="productcard-image-link">
                  <Image
                    component={imageComponent}
                    src={image}
                    alt={imageAlt}

                    fallback={fallbackImage}
                    priority={priority}
                    imageProps={{ className: 'productcard-image' }}
                    className="productcard-image-container"
                  />
                </LinkComponent>
              ) : (
                <a href={href} className="productcard-image-link">
                  <Image
                    component={imageComponent}
                    src={image}
                    alt={imageAlt}
                    fallback={fallbackImage}
                    priority={priority}
                    imageProps={{ className: 'productcard-image' }}
                    className="productcard-image-container"
                  />
                </a>
              )
            ) : (
              <div onClick={onClick ? (() => onClick(coreData)) : undefined} style={{ cursor: onClick ? 'pointer' : 'default', height: '100%' }}>
                <Image
                  component={imageComponent}
                  src={image}
                  alt={imageAlt}
                  fallback={fallbackImage}
                  priority={priority}
                  imageProps={{ className: 'productcard-image' }}
                  className="productcard-image-container"
                />
              </div>
            )}

            {/* BADGES */}
            <div className="productcard-badges">
              {featured && (
                <Chip
                  label={featuredText || 'Featured'}
                  variant={props.featuredBadgeVariant || 'filled'}
                  color={props.featuredBadgeColor || 'success'}
                  size="sm"
                  className="productcard-featured-badge"
                />
              )}
              {discount && (
                <Chip
                  label={discount}
                  variant={props.discountBadgeVariant || 'filled'}
                  color={props.discountBadgeColor || 'error'}
                  size="sm"
                  className="productcard-discount-badge"
                />
              )}
            </div>

            {/* WISHLIST BUTTON */}
            {showWishlist && (
              <button
                className={`productcard-wishlist-btn ${isWishlisted ? 'productcard-wishlist-btn--active' : ''} ${onWishlist ? 'vtx-cursor-pointer' : 'vtx-cursor-default'} productcard-wishlist-btn--${props.wishlistButtonColor || 'error'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onWishlist?.(coreData);
                }}
                disabled={!onWishlist}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                style={{
                  opacity: onWishlist ? 1 : 0.6,
                }}
              >
                {isWishlisted
                  ? (wishlistFilledIcon || <AiFillHeart />)
                  : (wishlistIcon || <FiHeart />)
                }
              </button>
            )}

            {/* QUICK VIEW OVERLAY */}
            {onQuickView && (
              <div className="productcard-hover-overlay">
                <Button
                  variant={props.quickViewButtonVariant || 'secondary'}
                  size="sm"
                  leftIcon={quickViewIcon || <FiEye />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickView(coreData);
                  }}
                >
                  Quick View
                </Button>
              </div>
            )}
          </div>

          {/* CONTENT */}
          <Flex direction="column" gap={5} className='p-3'>
            {/* CATEGORY */}
            {category && (
              <div style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
                {categoryHref ? (
                  LinkComponent ? (
                    <LinkComponent href={categoryHref} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                      <Chip
                        label={category}
                        variant="outlined"
                        className="productcard-category"
                      />
                    </LinkComponent>
                  ) : (
                    <a href={categoryHref} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                      <Chip
                        label={category}
                        variant="outlined"
                        className="productcard-category"
                      />
                    </a>
                  )
                ) : (
                  <Chip
                    label={category}
                    variant="outlined"
                    className="productcard-category"
                    onClick={onCategoryClick ? (() => onCategoryClick(coreData)) : undefined}
                  />
                )}
              </div>
            )}

            {/* NAME */}
            {href ? (
              LinkComponent ? (
                <LinkComponent href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body1" noMargin style={{ cursor: 'pointer' }}>
                    {name}
                  </Typography>
                </LinkComponent>
              ) : (
                <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body1" noMargin style={{ cursor: 'pointer' }}>
                    {name}
                  </Typography>
                </a>
              )
            ) : (
              <Typography
                variant="body1"
                noMargin
                onClick={onClick ? (() => onClick(coreData)) : undefined}
                style={{ cursor: onClick ? 'pointer' : 'default' }}
              >
                {name}
              </Typography>
            )}

            {/* WEIGHT */}
            {(weight !== undefined || units) && (
              <Typography variant="body1" noMargin className="productcard-weight">
                {weight !== undefined && units
                  ? `${weight} ${units}`
                  : weight !== undefined
                    ? weight
                    : '-'}
              </Typography>
            )}

            {/* RATING */}
            {rating !== undefined && (
              <Rating value={rating} size="sm" showValue />
            )}

            {/* PRICE */}
            <Flex align="center" gap={8}>
              <Typography variant="h5" noMargin className="productcard-price">
                ${Number(price).toFixed(2)}
              </Typography>
              {originalPrice && originalPrice > price && (
                <Typography variant="body2" noMargin className="productcard-original-price">
                  ${Number(originalPrice).toFixed(2)}
                </Typography>
              )}
            </Flex>

            {/* CART ACTION */}
            {showLoading ? (
              <Button fullWidth loading variant={props.addToCartButtonVariant || 'primary'}>
                Loading
              </Button>
            ) : quantity === 0 ? (
              <Button
                fullWidth
                variant={props.addToCartButtonVariant || 'primary'}
                leftIcon={cartIcon || <FiShoppingCart />}
                onClick={() => onAddToCart?.(coreData, 1)}
              >
                Add to cart
              </Button>
            ) : (
              <Flex
                align="center"
                direction="row"
                justify="between"
                className="productcard-quantity-selector"
              >
                <Button variant={props.decrementButtonVariant || 'secondary'} onClick={() => onDecrementCart?.(coreData, quantity)}>
                  -
                </Button>
                <Typography noMargin className="productcard-quantity-value">
                  {quantity}
                </Typography>
                <Button variant={props.incrementButtonVariant || 'secondary'} onClick={() => onIncrementCart?.(coreData, quantity)}>
                  +
                </Button>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Card>
    );
  }
);

ProductCardBase.displayName = 'ProductCardBase';

// ==================== Wide Variant (Horizontal Layout) ====================

export interface ProductCardWideProps extends ProductCardProps {
  imagePosition?: 'left' | 'right';
}

/**
 * ProductCard.Wide - Horizontal product card layout
 * 
 * Wide format product card with horizontal image and content layout
 * 
 * @example
 * ```tsx
 * <ProductCard.Wide
 *   name="Product"
 *   image="/product.jpg"
 *   price={49.99}
 *   imagePosition="left"
 * />
 * ```
 */
const ProductCardWide = React.forwardRef<HTMLDivElement, ProductCardWideProps>(
  (
    {
      imagePosition = 'left',
      ...props
    },
    ref
  ) => {
    const {
      id,
      image,
      imageAlt = 'Product',
      category,
      categoryHref,
      name,
      weight,
      units,
      price,
      originalPrice,
      discount,
      rating,
      featured = false,
      featuredText = 'Featured',
      showWishlist = false,
      isWishlisted = false,
      cartIcon,
      wishlistIcon,
      wishlistFilledIcon,
      quickViewIcon,
      href,
      linkComponent: LinkComponent,
      onAddToCart,
      onIncrementCart,
      onDecrementCart,
      onWishlist,
      onQuickView,
      onClick,
      onCategoryClick,
      loading = false,
      actionLoading = false,
      quantity = 0,
      imageComponent,
      fallbackImage,

      priority = false,
      className = '',
      style,
    } = props;

    const showLoading = actionLoading || loading;

    // Core data for callbacks
    const coreData: ProductCoreData = {
      id,
      name,
      image,
      price,
      originalPrice,
      discount,
      category,
      weight,
      units
    };

    // Render skeleton loading state
    if (loading && !actionLoading) {
      return <SkeletonTheme theme="product" />;
    }

    return (
      <Card
        variant="outlined"
        className={`productcard-wide ${className}`}
        style={{ padding: 0, ...style }}
        ref={ref as any}
      >
        <Flex direction={imagePosition === 'left' ? 'row' : 'row-reverse'}>
          {/* IMAGE */}
          <div className="productcard-wide-image-wrapper">
            {href ? (
              LinkComponent ? (
                <LinkComponent href={href} className="productcard-image-link">
                  <Image
                    component={imageComponent}
                    src={image}
                    alt={imageAlt}

                    fallback={fallbackImage}
                    priority={priority}
                    imageProps={{ className: 'productcard-wide-image' }}
                    className="productcard-wide-image-container"
                  />
                </LinkComponent>
              ) : (
                <a href={href} className="productcard-image-link">
                  <Image
                    component={imageComponent}
                    src={image}
                    alt={imageAlt}
                    fallback={fallbackImage}
                    priority={priority}
                    imageProps={{ className: 'productcard-wide-image' }}
                    className="productcard-wide-image-container"
                  />
                </a>
              )
            ) : (
              <div onClick={onClick ? () => onClick(coreData) : undefined} style={{ cursor: onClick ? 'pointer' : 'default', height: '100%' }}>
                <Image
                  component={imageComponent}
                  src={image}
                  alt={imageAlt}
                  fallback={fallbackImage}
                  priority={priority}
                  imageProps={{ className: 'productcard-wide-image' }}
                  className="productcard-wide-image-container"
                />
              </div>
            )}

            {/* BADGES */}
            <div className="productcard-badges">
              {featured && <span className="productcard-featured-badge">{featuredText}</span>}
              {discount && <span className="productcard-discount-badge">{discount}</span>}
            </div>

            {/* WISHLIST BUTTON */}
            {showWishlist && (
              <button
                className={`productcard-wishlist-btn ${isWishlisted ? 'productcard-wishlist-btn--active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onWishlist?.(coreData);
                }}
                disabled={!onWishlist}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                style={{
                  cursor: onWishlist ? 'pointer' : 'default',
                  opacity: onWishlist ? 1 : 0.6,
                }}
              >
                {isWishlisted ? (wishlistFilledIcon || <AiFillHeart />) : (wishlistIcon || <FiHeart />)}
              </button>
            )}
          </div>

          {/* CONTENT */}
          <Flex direction="column" gap={12} style={{ padding: '16px 20px', flex: 1, minWidth: 0 }}>
            {category && (
              <div style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
                {categoryHref ? (
                  LinkComponent ? (
                    <LinkComponent href={categoryHref} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                      <Chip label={category} variant="outlined" className="productcard-category" />
                    </LinkComponent>
                  ) : (
                    <a href={categoryHref} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                      <Chip label={category} variant="outlined" className="productcard-category" />
                    </a>
                  )
                ) : (
                  <Chip label={category} variant="outlined" className="productcard-category" onClick={onCategoryClick ? () => onCategoryClick(coreData) : undefined} />
                )}
              </div>
            )}

            <Flex direction="column" gap={6}>
              {href ? (
                LinkComponent ? (
                  <LinkComponent href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h5" weight="bold" noMargin style={{ cursor: 'pointer', wordBreak: 'break-word' }}>
                      {name}
                    </Typography>
                  </LinkComponent>
                ) : (
                  <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h5" weight="bold" noMargin style={{ cursor: 'pointer', wordBreak: 'break-word' }}>
                      {name}
                    </Typography>
                  </a>
                )
              ) : (
                <Typography variant="h5" weight="bold" noMargin onClick={onClick ? () => onClick(coreData) : undefined} style={{ cursor: onClick ? 'pointer' : 'default', wordBreak: 'break-word' }}>
                  {name}
                </Typography>
              )}

              {(weight !== undefined || units) && (
                <Typography variant="body2" noMargin className="productcard-weight">
                  {weight !== undefined && units ? `${weight} ${units}` : weight !== undefined ? weight : '-'}
                </Typography>
              )}
            </Flex>

            {rating !== undefined && (
              <Rating value={rating} size="sm" showValue />
            )}

            <Flex align="center" gap={8} wrap="wrap" style={{ marginTop: 'auto' }}>
              <Typography variant="h4" weight="bold" noMargin className="productcard-price">
                ${Number(price).toFixed(2)}
              </Typography>
              {originalPrice && originalPrice > price && (
                <Typography variant="body1" noMargin className="productcard-original-price">
                  ${Number(originalPrice).toFixed(2)}
                </Typography>
              )}
            </Flex>

            <Flex gap={12} align="center" direction="row" wrap="wrap">
              <div style={{ flex: '1 1 auto', minWidth: '140px' }}>
                {showLoading ? (
                  <Button fullWidth loading variant={props.addToCartButtonVariant || 'primary'}>
                    Loading
                  </Button>
                ) : quantity === 0 ? (
                  <Button fullWidth variant={props.addToCartButtonVariant || 'primary'} leftIcon={cartIcon || <FiShoppingCart />} onClick={() => onAddToCart?.(coreData, 1)}>
                    Add to cart
                  </Button>
                ) : (
                  <Flex align="center" direction="row" justify="between" className="productcard-quantity-selector">
                    <Button variant={props.decrementButtonVariant || 'secondary'} onClick={() => onDecrementCart?.(coreData, quantity)}>
                      -
                    </Button>
                    <Typography noMargin className="productcard-quantity-value">
                      {quantity}
                    </Typography>
                    <Button variant={props.incrementButtonVariant || 'secondary'} onClick={() => onIncrementCart?.(coreData, quantity)}>
                      +
                    </Button>
                  </Flex>
                )}
              </div>
              {onQuickView && (
                <Button variant="outline" size="md" leftIcon={quickViewIcon || <FiEye />} onClick={() => onQuickView(coreData)}>
                  View
                </Button>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Card>
    );
  }
);

ProductCardWide.displayName = 'ProductCardWide';

// ==================== Minimal Variant ====================

/**
 * ProductCard.Minimal - Compact product card
 * 
 * Minimalist product card with essential information and compact layout
 * 
 * @example
 * ```tsx
 * <ProductCard.Minimal
 *   name="Product"
 *   image="/product.jpg"
 *   price={19.99}
 * />
 * ```
 */
const ProductCardMinimal = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (props, ref) => {
    const {
      id,
      image,
      imageAlt = 'Product',
      name,
      price,
      originalPrice,
      discount,
      rating,
      showWishlist = false,
      isWishlisted = false,
      cartIcon,
      wishlistIcon,
      wishlistFilledIcon,
      href,
      linkComponent: LinkComponent,
      onAddToCart,
      onIncrementCart,
      onDecrementCart,
      onWishlist,
      onClick,
      loading = false,
      actionLoading = false,
      quantity = 0,
      imageComponent,
      fallbackImage,

      priority = false,
      className = '',
      style,
    } = props;

    const showLoading = actionLoading || loading;

    // Core data for callbacks
    const coreData: ProductCoreData = {
      id,
      name,
      image,
      price,
      originalPrice,
      discount,
      category: undefined,
      weight: undefined,
      units: undefined
    };

    // Render skeleton loading state
    if (loading && !actionLoading) {
      return <SkeletonTheme theme="product" />;
    }

    return (
      <div className={`productcard-minimal ${className}`} style={style} ref={ref}>
        {/* IMAGE */}
        <div className="productcard-minimal-image-wrapper">
          {href ? (
            LinkComponent ? (
              <LinkComponent href={href} className="productcard-image-link">
                <Image
                  component={imageComponent}
                  src={image}
                  alt={imageAlt}

                  fallback={fallbackImage}
                  priority={priority}
                  imageProps={{ className: 'productcard-minimal-image' }}
                  className="productcard-minimal-image-container"
                />
              </LinkComponent>
            ) : (
              <a href={href} className="productcard-image-link">
                <Image
                  component={imageComponent}
                  src={image}
                  alt={imageAlt}
                  fallback={fallbackImage}
                  priority={priority}
                  imageProps={{ className: 'productcard-minimal-image' }}
                  className="productcard-minimal-image-container"
                />
              </a>
            )
          ) : (
            <div onClick={onClick ? () => onClick(coreData) : undefined} style={{ cursor: onClick ? 'pointer' : 'default', height: '100%' }}>
              <Image
                component={imageComponent}
                src={image}
                alt={imageAlt}
                fallback={fallbackImage}
                priority={priority}
                imageProps={{ className: 'productcard-minimal-image' }}
                className="productcard-minimal-image-container"
              />
            </div>
          )}

          {discount && <span className="productcard-minimal-discount">{discount}</span>}

          {showWishlist && (
            <button
              className={`productcard-minimal-wishlist ${isWishlisted ? 'productcard-minimal-wishlist--active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onWishlist?.(coreData);
              }}
              disabled={!onWishlist}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              style={{
                cursor: onWishlist ? 'pointer' : 'default',
                opacity: onWishlist ? 1 : 0.6,
              }}
            >
              {isWishlisted ? (wishlistFilledIcon || <AiFillHeart />) : (wishlistIcon || <FiHeart />)}
            </button>
          )}
        </div>

        {/* CONTENT */}
        <Flex direction="column" gap={8} style={{ padding: '12px 0' }}>
          {href ? (
            LinkComponent ? (
              <LinkComponent href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body1" weight="medium" noMargin style={{ cursor: 'pointer' }}>
                  {name}
                </Typography>
              </LinkComponent>
            ) : (
              <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body1" weight="medium" noMargin style={{ cursor: 'pointer' }}>
                  {name}
                </Typography>
              </a>
            )
          ) : (
            <Typography variant="body1" weight="medium" noMargin onClick={onClick ? () => onClick(coreData) : undefined} style={{ cursor: onClick ? 'pointer' : 'default' }}>
              {name}
            </Typography>
          )}

          <Flex align="center" gap={8}>
            <Typography variant="h6" weight="bold" noMargin className="productcard-price">
              ${Number(price).toFixed(2)}
            </Typography>
            {originalPrice && originalPrice > price && (
              <Typography variant="caption" noMargin className="productcard-original-price">
                ${Number(originalPrice).toFixed(2)}
              </Typography>
            )}
          </Flex>

          {rating !== undefined && (
            <Rating value={rating} size="sm" />
          )}

          {showLoading ? (
            <Button loading variant={props.addToCartButtonVariant || 'primary'} size="sm">
              Loading
            </Button>
          ) : quantity === 0 ? (
            <Button variant={props.addToCartButtonVariant || 'primary'} size="sm" leftIcon={cartIcon || <FiShoppingCart />} onClick={() => onAddToCart?.(coreData, 1)} fullWidth>
              Add
            </Button>
          ) : (
            <Flex align="center" justify="between" className="productcard-quantity-selector-minimal">
              <Button variant={props.decrementButtonVariant || 'secondary'} size="sm" onClick={() => onDecrementCart?.(coreData, quantity)}>
                -
              </Button>
              <Typography variant="body2" noMargin weight="medium">
                {quantity}
              </Typography>
              <Button variant={props.incrementButtonVariant || 'primary'} size="sm" onClick={() => onIncrementCart?.(coreData, quantity)}>
                +
              </Button>
            </Flex>
          )}
        </Flex>
      </div>
    );
  }
);

ProductCardMinimal.displayName = 'ProductCardMinimal';

// ==================== List Variant (Order List Layout) ====================

export interface ProductCardListProps extends Omit<ProductCardProps, 'onAddToCart' | 'onIncrementCart' | 'onDecrementCart'> {
  variant?: string;
  readonly?: boolean;
  currency?: string;
  quantity?: number;
}

/**
 * ProductCard.List - Compact list item for orders
 * 
 * Read-only horizontal layout for displaying order items with quantity
 * 
 * @example
 * ```tsx
 * <ProductCard.List
 *   name="Product"
 *   image="/product.jpg"
 *   price={29.99}
 *   quantity={2}
 *   readonly={true}
 * />
 * ```
 */
const ProductCardList = React.forwardRef<HTMLDivElement, ProductCardListProps>(
  (props, ref) => {
    const {
      id,
      image,
      imageAlt = 'Product',
      name,
      price,
      quantity = 1,
      variant,
      readonly = true,
      currency = '$',
      imageComponent,
      fallbackImage,
      priority = false,
      className = '',
      style,
      onClick,
      ...rest
    } = props;

    const coreData: ProductCoreData = {
      id,
      name,
      image,
      price,
    };

    return (
      <div
        className={`productcard-list ${className}`}
        style={{ ...style, cursor: onClick ? 'pointer' : undefined }}
        ref={ref}
        onClick={onClick ? () => onClick(coreData) : undefined}
        {...rest}
      >
        <Flex direction="row" align="center" gap={12}>
          {/* IMAGE */}
          <div className="productcard-list-image-wrapper">
            <Image
              component={imageComponent}
              src={image}
              alt={imageAlt}
              fallback={fallbackImage}
              priority={priority}
              imageProps={{ className: 'productcard-list-image' }}
              className="productcard-list-image-container"
            />
          </div>

          {/* CONTENT */}
          <Flex direction="column" gap={4} style={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body1" weight="medium" noMargin style={{ wordBreak: 'break-word' }}>
              {name}
            </Typography>
            {variant && (
              <Typography variant="caption" noMargin className="productcard-list-variant">
                {variant}
              </Typography>
            )}
            <Flex align="center" gap={8}>
              <Typography variant="body2" noMargin className="productcard-list-quantity">
                Qty: {quantity}
              </Typography>
              <Typography variant="body2" weight="semibold" noMargin className="productcard-price">
                {currency}{Number(price).toFixed(2)}
              </Typography>
            </Flex>
          </Flex>

          {/* TOTAL PRICE */}
          <Typography variant="body1" weight="bold" noMargin className="productcard-list-total">
            {currency}{(Number(price) * quantity).toFixed(2)}
          </Typography>
        </Flex>
      </div>
    );
  }
);

ProductCardList.displayName = 'ProductCardList';

const ProductCardBaseWithParsedClasses = withParsedClasses(ProductCardBase);
const ProductCardWideWithParsedClasses = withParsedClasses(ProductCardWide);
const ProductCardMinimalWithParsedClasses = withParsedClasses(ProductCardMinimal);
const ProductCardListWithParsedClasses = withParsedClasses(ProductCardList);

export const ProductCard = {
  Base: ProductCardBaseWithParsedClasses as React.FC<ProductCardProps & React.RefAttributes<HTMLDivElement>>,
  Wide: ProductCardWideWithParsedClasses as React.FC<ProductCardWideProps & React.RefAttributes<HTMLDivElement>>,
  Minimal: ProductCardMinimalWithParsedClasses as React.FC<ProductCardProps & React.RefAttributes<HTMLDivElement>>,
  List: ProductCardListWithParsedClasses as React.FC<ProductCardListProps & React.RefAttributes<HTMLDivElement>>,
};

export default ProductCard;