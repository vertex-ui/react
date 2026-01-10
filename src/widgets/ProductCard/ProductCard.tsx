"use client";

import React, { useState } from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './ProductCard.css';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { Chip } from '../../components/Chip';
import { Rating } from '../../components/Rating';
import { SkeletonTheme } from '../../components/Skeleton';
import { FiHeart, FiEye, FiShoppingCart } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
  initialQuantity?: number;
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
  onAddToCart?: (id?: string, quantity?: number) => void | Promise<void>;
  onIncrementCart?: (id?: string, quantity?: number) => void | Promise<void>;
  onDecrementCart?: (id?: string, quantity?: number) => void | Promise<void>;
  onWishlist?: () => void;
  onQuickView?: () => void;
  onClick?: () => void;
  onCategoryClick?: () => void;
  loading?: boolean;
  /**
   * Whether this card is high priority (e.g. LCP element)
   * If true, image will be eager loaded with high priority
   * @default false
   */
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
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
  initialQuantity = 0,
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
  priority = false,
  className = '',
  style,
  ...props
    },
    ref
  ) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!onAddToCart) return;
    
    setIsLoading(true);
    try {
      await onAddToCart(id, 1);
      setQuantity(1);
    } catch (error) {
      console.error('Add to cart error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleIncrement = async () => {
    if (!onIncrementCart) return;
    
    setIsLoading(true);
    try {
      await onIncrementCart(id, quantity);
      setQuantity(quantity + 1);
    } catch (error) {
      console.error('Increment error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecrement = async () => {
    if (!onDecrementCart || quantity <= 0) return;
    
    setIsLoading(true);
    try {
      await onDecrementCart(id, quantity);
      setQuantity(quantity - 1);
    } catch (error) {
      console.error('Decrement error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const showLoading = isLoading || loading;

  // Render skeleton loading state
  if (loading && !isLoading) {
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
                <img src={image} alt={imageAlt} className="productcard-image" />
              </LinkComponent>
            ) : (
              <a href={href} className="productcard-image-link">
                <img src={image} alt={imageAlt} className="productcard-image" />
              </a>
            )
          ) : (
            <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
              <img src={image} alt={imageAlt} className="productcard-image" />
            </div>
          )}
          
          {/* BADGES */}
          <div className="productcard-badges">
            {featured && (
              <span className="productcard-featured-badge">{featuredText}</span>
            )}
            {discount && (
              <span className="productcard-discount-badge">{discount}</span>
            )}
          </div>

          {/* WISHLIST BUTTON */}
          {showWishlist && (
            <button
              className={`productcard-wishlist-btn ${isWishlisted ? 'productcard-wishlist-btn--active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onWishlist?.();
              }}
              disabled={!onWishlist}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              style={{
                cursor: onWishlist ? 'pointer' : 'default',
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
                variant="secondary"
                size="sm"
                leftIcon={quickViewIcon || <FiEye />}
                onClick={(e) => {
                  e.stopPropagation();
                  onQuickView();
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
                  onClick={onCategoryClick}
                />
              )}
            </div>
          )}

          {/* NAME */}
          {href ? (
            LinkComponent ? (
              <LinkComponent href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Text variant="body1" noMargin style={{ cursor: 'pointer' }}>
                  {name}
                </Text>
              </LinkComponent>
            ) : (
              <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Text variant="body1" noMargin style={{ cursor: 'pointer' }}>
                  {name}
                </Text>
              </a>
            )
          ) : (
            <Text
              variant="body1"
              noMargin
              onClick={onClick}
              style={{ cursor: onClick ? 'pointer' : 'default' }}
            >
              {name}
            </Text>
          )}

          {/* WEIGHT */}
          {(weight !== undefined || units) && (
            <Text variant="body1" noMargin className="productcard-weight">
              {weight !== undefined && units
                ? `${weight} ${units}`
                : weight !== undefined
                  ? weight
                  : '-'}
            </Text>
          )}

          {/* RATING */}
          {rating !== undefined && (
            <Rating value={rating} size="sm" showValue />
          )}

          {/* PRICE */}
          <Flex align="center" gap={8}>
            <Text variant="h5" noMargin className="productcard-price">
              ${Number(price).toFixed(2)}
            </Text>
            {originalPrice && originalPrice > price && (
              <Text variant="body2" noMargin className="productcard-original-price">
                ${Number(originalPrice).toFixed(2)}
              </Text>
            )}
          </Flex>

          {/* CART ACTION */}
          {showLoading ? (
            <Button fullWidth loading variant="primary">
              Loading
            </Button>
          ) : quantity === 0 ? (
            <Button
              fullWidth
              variant="primary"
              leftIcon={cartIcon || <FiShoppingCart />}
              onClick={handleAddToCart}
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
              <Button variant="secondary" onClick={handleDecrement}>
                -
              </Button>
              <Text noMargin className="productcard-quantity-value">
                {quantity}
              </Text>
              <Button variant="secondary" onClick={handleIncrement}>
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
    initialQuantity = 0,
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
    priority = false,
    className = '',
    style,
  } = props;

  const [quantity, setQuantity] = useState(initialQuantity);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!onAddToCart) return;
    setIsLoading(true);
    try {
      await onAddToCart(id, 1);
      setQuantity(1);
    } catch (error) {
      console.error('Add to cart error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleIncrement = async () => {
    if (!onIncrementCart) return;
    setIsLoading(true);
    try {
      await onIncrementCart(id, quantity);
      setQuantity(quantity + 1);
    } catch (error) {
      console.error('Increment error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecrement = async () => {
    if (!onDecrementCart || quantity <= 0) return;
    setIsLoading(true);
    try {
      await onDecrementCart(id, quantity);
      setQuantity(quantity - 1);
    } catch (error) {
      console.error('Decrement error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const showLoading = isLoading || loading;

  // Render skeleton loading state
  if (loading && !isLoading) {
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
                <img src={image} alt={imageAlt} className="productcard-wide-image" />
              </LinkComponent>
            ) : (
              <a href={href} className="productcard-image-link">
                <img src={image} alt={imageAlt} className="productcard-wide-image" />
              </a>
            )
          ) : (
            <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
              <img src={image} alt={imageAlt} className="productcard-wide-image" />
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
                onWishlist?.();
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
                <Chip label={category} variant="outlined" className="productcard-category" onClick={onCategoryClick} />
              )}
            </div>
          )}

          <Flex direction="column" gap={6}>
            {href ? (
              LinkComponent ? (
                <LinkComponent href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text variant="h5" weight="bold" noMargin style={{ cursor: 'pointer', wordBreak: 'break-word' }}>
                    {name}
                  </Text>
                </LinkComponent>
              ) : (
                <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text variant="h5" weight="bold" noMargin style={{ cursor: 'pointer', wordBreak: 'break-word' }}>
                    {name}
                  </Text>
                </a>
              )
            ) : (
              <Text variant="h5" weight="bold" noMargin onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', wordBreak: 'break-word' }}>
                {name}
              </Text>
            )}

            {(weight !== undefined || units) && (
              <Text variant="body2" noMargin className="productcard-weight">
                {weight !== undefined && units ? `${weight} ${units}` : weight !== undefined ? weight : '-'}
              </Text>
            )}
          </Flex>

          {rating !== undefined && (
            <Rating value={rating} size="sm" showValue />
          )}

          <Flex align="center" gap={8} wrap="wrap" style={{ marginTop: 'auto' }}>
            <Text variant="h4" weight="bold" noMargin className="productcard-price">
              ${Number(price).toFixed(2)}
            </Text>
            {originalPrice && originalPrice > price && (
              <Text variant="body1" noMargin className="productcard-original-price">
                ${Number(originalPrice).toFixed(2)}
              </Text>
            )}
          </Flex>

          <Flex gap={12} align="center" direction="row" wrap="wrap">
            <div style={{ flex: '1 1 auto', minWidth: '140px' }}>
              {showLoading ? (
                <Button fullWidth loading variant="primary">
                  Loading
                </Button>
              ) : quantity === 0 ? (
                <Button fullWidth variant="primary" leftIcon={cartIcon || <FiShoppingCart />} onClick={handleAddToCart}>
                  Add to cart
                </Button>
              ) : (
                <Flex align="center" direction="row" justify="between" className="productcard-quantity-selector">
                  <Button variant="secondary" onClick={handleDecrement}>
                    -
                  </Button>
                  <Text noMargin className="productcard-quantity-value">
                    {quantity}
                  </Text>
                  <Button variant="primary" onClick={handleIncrement}>
                    +
                  </Button>
                </Flex>
              )}
            </div>
            {onQuickView && (
              <Button variant="outline" size="md" leftIcon={quickViewIcon || <FiEye />} onClick={onQuickView}>
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
    initialQuantity = 0,
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
    priority = false,
    className = '',
    style,
  } = props;

  const [quantity, setQuantity] = useState(initialQuantity);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!onAddToCart) return;
    setIsLoading(true);
    try {
      await onAddToCart(id, 1);
      setQuantity(1);
    } catch (error) {
      console.error('Add to cart error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleIncrement = async () => {
    if (!onIncrementCart) return;
    setIsLoading(true);
    try {
      await onIncrementCart(id, quantity);
      setQuantity(quantity + 1);
    } catch (error) {
      console.error('Increment error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecrement = async () => {
    if (!onDecrementCart || quantity <= 0) return;
    setIsLoading(true);
    try {
      await onDecrementCart(id, quantity);
      setQuantity(quantity - 1);
    } catch (error) {
      console.error('Decrement error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const showLoading = isLoading || loading;

  // Render skeleton loading state
  if (loading && !isLoading) {
    return <SkeletonTheme theme="product" />;
  }

  return (
    <div className={`productcard-minimal ${className}`} style={style} ref={ref}>
      {/* IMAGE */}
      <div className="productcard-minimal-image-wrapper">
        {href ? (
          LinkComponent ? (
            <LinkComponent href={href} className="productcard-image-link">
              <img src={image} alt={imageAlt} className="productcard-minimal-image" />
            </LinkComponent>
          ) : (
            <a href={href} className="productcard-image-link">
              <img src={image} alt={imageAlt} className="productcard-minimal-image" />
            </a>
          )
        ) : (
          <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <img src={image} alt={imageAlt} className="productcard-minimal-image" />
          </div>
        )}

        {discount && <span className="productcard-minimal-discount">{discount}</span>}

        {showWishlist && (
          <button
            className={`productcard-minimal-wishlist ${isWishlisted ? 'productcard-minimal-wishlist--active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onWishlist?.();
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
              <Text variant="body1" weight="medium" noMargin style={{ cursor: 'pointer' }}>
                {name}
              </Text>
            </LinkComponent>
          ) : (
            <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text variant="body1" weight="medium" noMargin style={{ cursor: 'pointer' }}>
                {name}
              </Text>
            </a>
          )
        ) : (
          <Text variant="body1" weight="medium" noMargin onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            {name}
          </Text>
        )}

        <Flex align="center" gap={8}>
          <Text variant="h6" weight="bold" noMargin className="productcard-price">
            ${Number(price).toFixed(2)}
          </Text>
          {originalPrice && originalPrice > price && (
            <Text variant="caption" noMargin className="productcard-original-price">
              ${Number(originalPrice).toFixed(2)}
            </Text>
          )}
        </Flex>

        {rating !== undefined && (
          <Rating value={rating} size="sm" />
        )}

        {showLoading ? (
          <Button loading variant="primary" size="sm">
            Loading
          </Button>
        ) : quantity === 0 ? (
          <Button variant="primary" size="sm" leftIcon={cartIcon || <FiShoppingCart />} onClick={handleAddToCart} fullWidth>
            Add
          </Button>
        ) : (
          <Flex align="center" justify="between" className="productcard-quantity-selector-minimal">
            <Button variant="secondary" size="sm" onClick={handleDecrement}>
              -
            </Button>
            <Text variant="body2" noMargin weight="medium">
              {quantity}
            </Text>
            <Button variant="primary" size="sm" onClick={handleIncrement}>
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

const ProductCardBaseWithParsedClasses = withParsedClasses(ProductCardBase);
const ProductCardWideWithParsedClasses = withParsedClasses(ProductCardWide);
const ProductCardMinimalWithParsedClasses = withParsedClasses(ProductCardMinimal);

export const ProductCard = {
  Base: ProductCardBaseWithParsedClasses as React.FC<ProductCardProps & React.RefAttributes<HTMLDivElement>>,
  Wide: ProductCardWideWithParsedClasses as React.FC<ProductCardWideProps & React.RefAttributes<HTMLDivElement>>,
  Minimal: ProductCardMinimalWithParsedClasses as React.FC<ProductCardProps & React.RefAttributes<HTMLDivElement>>,
};

export default ProductCard;
