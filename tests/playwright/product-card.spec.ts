import { test, expect } from '@playwright/test';

/**
 * ProductCard Widget Visual Regression Tests
 * 
 * Comprehensive visual tests for the ProductCard widget
 * covering all states, interactions, and variants.
 */

test.describe('ProductCard Widget - Detailed Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to Storybook
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test.describe('Basic Variants', () => {
    test('should match baseline - default product card', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      // Wait for images to load
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      await expect(productCard).toHaveScreenshot('product-card-default.png', {
        maxDiffPixelRatio: 0.15, // Allow slight image loading differences
      });
    });

    test('should match baseline - with discount badge', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--with-discount&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      await expect(productCard).toHaveScreenshot('product-card-discount.png');
    });

    test('should match baseline - featured product', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--featured&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      await expect(productCard).toHaveScreenshot('product-card-featured.png');
    });

    test('should match baseline - with rating', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--with-rating&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      await expect(productCard).toHaveScreenshot('product-card-rating.png');
    });

    test('should match baseline - loading state', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--loading&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      await expect(productCard).toHaveScreenshot('product-card-loading.png');
    });
  });

  test.describe('Interactive States', () => {
    test('should match baseline - hover state', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      
      // Hover over the card
      await productCard.hover();
      await page.waitForTimeout(300); // Wait for hover effects
      
      await expect(productCard).toHaveScreenshot('product-card-hover.png');
    });

    test('should match baseline - wishlist button hover', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      const wishlistButton = productCard.locator('button').filter({ hasText: /wishlist|heart/i }).first();
      
      if (await wishlistButton.count() > 0) {
        await wishlistButton.hover();
        await page.waitForTimeout(200);
        
        await expect(productCard).toHaveScreenshot('product-card-wishlist-hover.png');
      }
    });

    test('should match baseline - wishlisted state', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--wishlisted&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      await expect(productCard).toHaveScreenshot('product-card-wishlisted.png');
    });

    test('should match baseline - add to cart button hover', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      const addToCartButton = productCard.locator('button').filter({ hasText: /add|cart/i }).first();
      
      await addToCartButton.hover();
      await page.waitForTimeout(200);
      
      await expect(addToCartButton).toHaveScreenshot('product-card-add-cart-hover.png');
    });

    test('should match baseline - quantity controls', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--with-quantity&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      await expect(productCard).toHaveScreenshot('product-card-quantity-controls.png');
    });
  });

  test.describe('Responsive Design', () => {
    test('should match baseline - mobile viewport (375px)', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      await expect(productCard).toHaveScreenshot('product-card-mobile-375.png');
    });

    test('should match baseline - tablet viewport (768px)', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      await expect(productCard).toHaveScreenshot('product-card-tablet-768.png');
    });

    test('should match baseline - desktop viewport (1280px)', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      await expect(productCard).toHaveScreenshot('product-card-desktop-1280.png');
    });
  });

  test.describe('Grid Layout', () => {
    test('should match baseline - grid of multiple cards', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--grid&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const grid = page.locator('#storybook-root').first();
      await expect(grid).toHaveScreenshot('product-card-grid.png', {
        fullPage: false,
      });
    });

    test('should match baseline - grid mobile layout', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto('/iframe.html?id=widgets-productcard--grid&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const grid = page.locator('#storybook-root').first();
      await expect(grid).toHaveScreenshot('product-card-grid-mobile.png', {
        fullPage: true,
      });
    });
  });

  test.describe('Component Parts', () => {
    test('should match baseline - product image', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productImage = page.locator('[class*="ProductCard"] img').first();
      await expect(productImage).toHaveScreenshot('product-card-image.png');
    });

    test('should match baseline - price section', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      const priceSection = page.locator('[class*="price"]').first();
      await expect(priceSection).toHaveScreenshot('product-card-price.png');
    });

    test('should match baseline - discount badge', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--with-discount&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      const discountBadge = page.locator('[class*="discount"]').or(page.locator('[class*="badge"]')).first();
      if (await discountBadge.count() > 0) {
        await expect(discountBadge).toHaveScreenshot('product-card-discount-badge.png');
      }
    });

    test('should match baseline - category chip', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      const categoryChip = page.locator('[class*="category"]').or(page.locator('[class*="Chip"]')).first();
      if (await categoryChip.count() > 0) {
        await expect(categoryChip).toHaveScreenshot('product-card-category.png');
      }
    });

    test('should match baseline - rating stars', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--with-rating&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      const rating = page.locator('[class*="rating"]').or(page.locator('[class*="Rating"]')).first();
      if (await rating.count() > 0) {
        await expect(rating).toHaveScreenshot('product-card-rating-stars.png');
      }
    });
  });

  test.describe('Accessibility States', () => {
    test('should match baseline - focus state on add to cart', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      const addToCartButton = page.locator('button').filter({ hasText: /add|cart/i }).first();
      await addToCartButton.focus();
      await page.waitForTimeout(200);
      
      await expect(addToCartButton).toHaveScreenshot('product-card-cart-focus.png');
    });

    test('should match baseline - keyboard navigation', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });
      
      const productCard = page.locator('[class*="ProductCard"]').first();
      
      // Tab to focus first interactive element
      await page.keyboard.press('Tab');
      await page.waitForTimeout(200);
      
      await expect(productCard).toHaveScreenshot('product-card-keyboard-focus.png');
    });
  });
});
