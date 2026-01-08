import React, { useState, useCallback } from 'react';
import { withParsedClasses } from '../../hoc/withParsedClasses';
import './ProductCard.css';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { Chip } from '../../components/Chip';

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  image: string;
  imageAlt?: string;
  category?: string;
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
  onAddToCart?: (id?: string, quantity?: number) => void | Promise<void>;
  onIncrementCart?: (id?: string, quantity?: number) => void | Promise<void>;
  onDecrementCart?: (id?: string, quantity?: number) => void | Promise<void>;
  onWishlist?: () => void;
  onQuickView?: () => void;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// Custom hook to manage cart logic
const useProductCart = (
  id: string | undefined,
  initialQuantity: number,
  onAddToCart?: (id?: string, quantity?: number) => void | Promise<void>,
  onIncrementCart?: (id?: string, quantity?: number) => void | Promise<void>,
  onDecrementCart?: (id?: string, quantity?: number) => void | Promise<void>,
) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = useCallback(async () => {
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
  }, [id, onAddToCart]);

  const handleIncrement = useCallback(async () => {
    if (!onIncrementCart) return;

    setIsLoading(true);
    try {
      await onIncrementCart(id, quantity);
      setQuantity(prev => prev + 1);
    } catch (error) {
      console.error('Increment error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [id, quantity, onIncrementCart]);

  const handleDecrement = useCallback(async () => {
    if (!onDecrementCart || quantity <= 0) return;

    setIsLoading(true);
    try {
      await onDecrementCart(id, quantity);
      setQuantity(prev => prev - 1);
    } catch (error) {
      console.error('Decrement error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [id, quantity, onDecrementCart]);

  return {
    quantity,
    isLoading,
    handleAddToCart,
    handleIncrement,
    handleDecrement
  };
};

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
  onAddToCart,
  onIncrementCart,
  onDecrementCart,
  onWishlist,
  onQuickView,
  onClick,
  loading = false,
  className = '',
  style,
  ...props
    },
    ref
  ) => {
  const { quantity, isLoading, handleAddToCart, handleIncrement, handleDecrement } = useProductCart(
    id,
    initialQuantity,
    onAddToCart,
    onIncrementCart,
    onDecrementCart
  );

  const showLoading = isLoading || loading;

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
        <div 
          className="productcard-image-wrapper" 
          onClick={onClick}
          style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
          <img src={image} alt={imageAlt} className="productcard-image" />
          
          {/* BADGES */}
          <div className="productcard-badges">
            {featured && (
              <span className="productcard-featured-badge">{featuredText}</span>
            )}
            {discount && (
              <span className="productcard-discount-badge">{discount}</span>
            )}
          </div>

          {/* WISHLIST ICON (Always visible if showWishlist=true) */}
          {showWishlist && onWishlist && (
            <button
              className={`productcard-wishlist-btn ${isWishlisted ? 'productcard-wishlist-btn--active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onWishlist();
              }}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              {isWishlisted 
                ? (wishlistFilledIcon || wishlistIcon || '♥')
                : (wishlistIcon || '♡')
              }
            </button>
          )}
          
          {/* HOVER OVERLAY FOR QUICK VIEW */}
          {onQuickView && (
            <div className="productcard-hover-overlay">
              <Button
                variant="secondary"
                size="sm"
                leftIcon={quickViewIcon || '👁'}
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
              <Chip
                label={category}
                variant="outlined"
                className="productcard-category"
              />
            </div>
          )}

          {/* NAME */}
          <Text 
            variant="body1" 
            noMargin
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
          >
            {name}
          </Text>

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
            <Flex align="center" gap={5} className="productcard-rating-wrapper">
              <div className="productcard-rating">
                {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
              </div>
              <Text variant="caption" noMargin>
                {rating}
              </Text>
            </Flex>
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
              leftIcon={cartIcon}
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
    onAddToCart,
    onIncrementCart,
    onDecrementCart,
    onWishlist,
    onQuickView,
    onClick,
    loading = false,
    className = '',
    style,
  } = props;

  const { quantity, isLoading, handleAddToCart, handleIncrement, handleDecrement } = useProductCart(
    id,
    initialQuantity,
    onAddToCart,
    onIncrementCart,
    onDecrementCart
  );

  const showLoading = isLoading || loading;

  return (
    <Card
      variant="outlined"
      className={`productcard-wide ${className}`}
      style={{ padding: 0, ...style }}
      ref={ref as any}
    >
      <Flex direction={imagePosition === 'left' ? 'row' : 'row-reverse'}>
        {/* IMAGE */}
        <div
          className="productcard-wide-image-wrapper"
          onClick={onClick}
          style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
          <img src={image} alt={imageAlt} className="productcard-wide-image" />

          {/* BADGES */}
          <div className="productcard-badges">
            {featured && <span className="productcard-featured-badge">{featuredText}</span>}
            {discount && <span className="productcard-discount-badge">{discount}</span>}
          </div>

          {/* WISHLIST */}
          {showWishlist && onWishlist && (
            <button
              className={`productcard-wishlist-btn ${isWishlisted ? 'productcard-wishlist-btn--active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onWishlist();
              }}
            >
              {isWishlisted ? wishlistFilledIcon || wishlistIcon || '♥' : wishlistIcon || '♡'}
            </button>
          )}
        </div>

        {/* CONTENT */}
        <Flex direction="column" gap={12} style={{ padding: '16px 20px', flex: 1, minWidth: 0 }}>
          {category && (
            <div style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
              <Chip label={category} variant="outlined" className="productcard-category" />
            </div>
          )}

          <Flex direction="column" gap={6}>
            <Text variant="h5" weight="bold" noMargin onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', wordBreak: 'break-word' }}>
              {name}
            </Text>

            {(weight !== undefined || units) && (
              <Text variant="body2" noMargin className="productcard-weight">
                {weight !== undefined && units ? `${weight} ${units}` : weight !== undefined ? weight : '-'}
              </Text>
            )}
          </Flex>

          {rating !== undefined && (
            <Flex align="center" gap={6}>
              <div className="productcard-rating">
                {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
              </div>
              <Text variant="caption" noMargin>
                {rating}
              </Text>
            </Flex>
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
                <Button fullWidth variant="primary" leftIcon={cartIcon} onClick={handleAddToCart}>
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
              <Button variant="outline" size="md" leftIcon={quickViewIcon || '👁'} onClick={onQuickView}>
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
    onAddToCart,
    onIncrementCart,
    onDecrementCart,
    onWishlist,
    onClick,
    loading = false,
    className = '',
    style,
  } = props;

  const { quantity, isLoading, handleAddToCart, handleIncrement, handleDecrement } = useProductCart(
    id,
    initialQuantity,
    onAddToCart,
    onIncrementCart,
    onDecrementCart
  );

  const showLoading = isLoading || loading;

  return (
    <div className={`productcard-minimal ${className}`} style={style} ref={ref}>
      {/* IMAGE */}
      <div className="productcard-minimal-image-wrapper" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
        <img src={image} alt={imageAlt} className="productcard-minimal-image" />

        {discount && <span className="productcard-minimal-discount">{discount}</span>}

        {showWishlist && onWishlist && (
          <button
            className={`productcard-minimal-wishlist ${isWishlisted ? 'productcard-minimal-wishlist--active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onWishlist();
            }}
          >
            {isWishlisted ? wishlistFilledIcon || wishlistIcon || '♥' : wishlistIcon || '♡'}
          </button>
        )}
      </div>

      {/* CONTENT */}
      <Flex direction="column" gap={8} style={{ padding: '12px 0' }}>
        <Text variant="body1" weight="medium" noMargin onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
          {name}
        </Text>

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
          <div className="productcard-rating-minimal">
            {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
          </div>
        )}

        {showLoading ? (
          <Button loading variant="primary" size="sm">
            Loading
          </Button>
        ) : quantity === 0 ? (
          <Button variant="primary" size="sm" leftIcon={cartIcon} onClick={handleAddToCart} fullWidth>
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

const ProductCardBaseWithParsedClasses = withParsedClasses(React.memo(ProductCardBase));
const ProductCardWideWithParsedClasses = withParsedClasses(React.memo(ProductCardWide));
const ProductCardMinimalWithParsedClasses = withParsedClasses(React.memo(ProductCardMinimal));

export const ProductCard = {
  Base: ProductCardBaseWithParsedClasses as React.FC<ProductCardProps & React.RefAttributes<HTMLDivElement>>,
  Wide: ProductCardWideWithParsedClasses as React.FC<ProductCardWideProps & React.RefAttributes<HTMLDivElement>>,
  Minimal: ProductCardMinimalWithParsedClasses as React.FC<ProductCardProps & React.RefAttributes<HTMLDivElement>>,
};

export default ProductCard;
