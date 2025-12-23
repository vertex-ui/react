import React from 'react';
import { GridCarouselWidget } from './src/components/Widget';
import { Card } from './src/components/Card';
import { Text } from './src/components/Text';
import { Badge } from './src/components/Badge';
import { Flex } from './src/components/Flex';

/**
 * Example: GridCarouselWidget Usage
 * 
 * A responsive carousel that displays multiple grid items at once.
 * The number of visible items adapts to the device/screen size:
 * - Mobile: 1 item
 * - Tablet: 2 items
 * - Desktop: 3+ items
 */

const GridCarouselExample = () => {
  // Example 1: Simple product cards
  const productItems = [
    <Card key="1" variant="elevated" style={{ padding: '20px', height: '100%' }}>
      <Flex direction="column" gap={12}>
        <Text variant="h3">Product 1</Text>
        <Text variant="body1" color="secondary">
          High-quality wireless headphones with noise cancellation.
        </Text>
        <Text variant="h4" style={{ color: '#667eea' }}>$199</Text>
        <Badge variant="primary">Featured</Badge>
      </Flex>
    </Card>,
    <Card key="2" variant="elevated" style={{ padding: '20px', height: '100%' }}>
      <Flex direction="column" gap={12}>
        <Text variant="h3">Product 2</Text>
        <Text variant="body1" color="secondary">
          Premium smart watch with fitness tracking.
        </Text>
        <Text variant="h4" style={{ color: '#667eea' }}>$299</Text>
        <Badge variant="success">New</Badge>
      </Flex>
    </Card>,
    <Card key="3" variant="elevated" style={{ padding: '20px', height: '100%' }}>
      <Flex direction="column" gap={12}>
        <Text variant="h3">Product 3</Text>
        <Text variant="body1" color="secondary">
          Ergonomic laptop stand for better posture.
        </Text>
        <Text variant="h4" style={{ color: '#667eea' }}>$49</Text>
        <Badge variant="warning">Sale</Badge>
      </Flex>
    </Card>,
    <Card key="4" variant="elevated" style={{ padding: '20px', height: '100%' }}>
      <Flex direction="column" gap={12}>
        <Text variant="h3">Product 4</Text>
        <Text variant="body1" color="secondary">
          USB-C hub with multiple ports.
        </Text>
        <Text variant="h4" style={{ color: '#667eea' }}>$79</Text>
        <Badge variant="info">Popular</Badge>
      </Flex>
    </Card>,
    <Card key="5" variant="elevated" style={{ padding: '20px', height: '100%' }}>
      <Flex direction="column" gap={12}>
        <Text variant="h3">Product 5</Text>
        <Text variant="body1" color="secondary">
          Mechanical keyboard with RGB lighting.
        </Text>
        <Text variant="h4" style={{ color: '#667eea' }}>$159</Text>
        <Badge variant="primary">Featured</Badge>
      </Flex>
    </Card>,
    <Card key="6" variant="elevated" style={{ padding: '20px', height: '100%' }}>
      <Flex direction="column" gap={12}>
        <Text variant="h3">Product 6</Text>
        <Text variant="body1" color="secondary">
          Wireless mouse with precision tracking.
        </Text>
        <Text variant="h4" style={{ color: '#667eea' }}>$69</Text>
        <Badge variant="success">Best Seller</Badge>
      </Flex>
    </Card>,
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1>GridCarouselWidget Examples</h1>

      {/* Example 1: Default Configuration */}
      <section style={{ marginBottom: '60px' }}>
        <h2>Default: 3 Items per View (Desktop)</h2>
        <GridCarouselWidget
          items={productItems}
          borderRadius={true}
          itemsPerView={{
            mobile: 1,
            tablet: 2,
            desktop: 3,
          }}
          gap="20px"
          showNavigation={true}
          showPagination={true}
          scrollBehavior="page"
        />
      </section>

      {/* Example 2: Auto-play */}
      <section style={{ marginBottom: '60px' }}>
        <h2>With Auto-play (3 second delay)</h2>
        <GridCarouselWidget
          items={productItems}
          borderRadius={true}
          autoplay={true}
          autoplayDelay={3000}
          itemsPerView={{
            mobile: 1,
            tablet: 2,
            desktop: 3,
          }}
          gap="20px"
          showNavigation={true}
          showPagination={true}
          scrollBehavior="page"
        />
      </section>

      {/* Example 3: 4 Items per View */}
      <section style={{ marginBottom: '60px' }}>
        <h2>4 Items per View (Desktop)</h2>
        <GridCarouselWidget
          items={productItems}
          borderRadius={true}
          itemsPerView={{
            mobile: 1,
            tablet: 2,
            desktop: 4,
          }}
          gap="16px"
          showNavigation={true}
          showPagination={true}
          scrollBehavior="page"
        />
      </section>

      {/* Example 4: Item Scroll Behavior */}
      <section style={{ marginBottom: '60px' }}>
        <h2>Scroll One Item at a Time</h2>
        <GridCarouselWidget
          items={productItems}
          borderRadius={true}
          itemsPerView={{
            mobile: 1,
            tablet: 2,
            desktop: 3,
          }}
          gap="20px"
          showNavigation={true}
          showPagination={true}
          scrollBehavior="item"
        />
      </section>

      {/* Example 5: Custom Gap */}
      <section style={{ marginBottom: '60px' }}>
        <h2>Large Gap Between Items</h2>
        <GridCarouselWidget
          items={productItems}
          borderRadius={true}
          itemsPerView={{
            mobile: 1,
            tablet: 2,
            desktop: 3,
          }}
          gap="40px"
          showNavigation={true}
          showPagination={true}
          scrollBehavior="page"
        />
      </section>

      {/* Example 6: Minimal Controls */}
      <section style={{ marginBottom: '60px' }}>
        <h2>Pagination Only (No Navigation Arrows)</h2>
        <GridCarouselWidget
          items={productItems}
          borderRadius={true}
          itemsPerView={{
            mobile: 1,
            tablet: 2,
            desktop: 3,
          }}
          gap="20px"
          showNavigation={false}
          showPagination={true}
          scrollBehavior="page"
        />
      </section>
    </div>
  );
};

export default GridCarouselExample;
