# GridCarouselWidget

A responsive carousel component that displays multiple grid items at once, with the number of visible items automatically adapting to device/screen size.

## Features

- ✅ **Fully Responsive** - Adapts to mobile, tablet, and desktop screen sizes
- ✅ **Flexible Grid Layout** - Display 1-5+ items per view
- ✅ **Auto-play Support** - Optional automatic rotation with configurable delay
- ✅ **Navigation Controls** - Arrow buttons and pagination dots
- ✅ **Smooth Animations** - Fluid transitions between pages
- ✅ **Customizable** - Gap, border radius, and scroll behavior options
- ✅ **Accessibility** - ARIA labels and screen reader support
- ✅ **Any Content** - Works with any React components (cards, products, profiles, etc.)

## Basic Usage

```tsx
import { GridCarouselWidget } from './components/Widget';
import { Card } from './components/Card';

const items = [
  <Card key="1">Item 1</Card>,
  <Card key="2">Item 2</Card>,
  <Card key="3">Item 3</Card>,
  // ... more items
];

<GridCarouselWidget
  items={items}
  itemsPerView={{
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }}
/>
```

## Props

### `items` (required)
- **Type:** `React.ReactNode[]`
- **Description:** Array of React components/elements to display in the carousel

### `itemsPerView`
- **Type:** `{ mobile?: number; tablet?: number; desktop?: number }`
- **Default:** `{ mobile: 1, tablet: 2, desktop: 3 }`
- **Description:** Number of items to show at each breakpoint
  - `mobile`: < 768px
  - `tablet`: 768px - 1023px
  - `desktop`: >= 1024px

### `gap`
- **Type:** `number | string`
- **Default:** `'20px'`
- **Description:** Space between grid items (e.g., `20`, `'24px'`, `'2rem'`)

### `borderRadius`
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Apply rounded corners to the carousel container

### `autoplay`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Enable automatic rotation through items

### `autoplayDelay`
- **Type:** `number`
- **Default:** `3000`
- **Description:** Delay between auto-play transitions in milliseconds

### `showNavigation`
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Show previous/next arrow buttons

### `showPagination`
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Show pagination dots at the bottom

### `scrollBehavior`
- **Type:** `'page' | 'item'`
- **Default:** `'page'`
- **Description:** 
  - `'page'`: Scroll by full page width (all visible items)
  - `'item'`: Scroll by one item at a time

### `className`
- **Type:** `string`
- **Description:** Additional CSS class names

### `style`
- **Type:** `React.CSSProperties`
- **Description:** Inline styles for the carousel container

## Examples

### Product Showcase (4 items per view)

```tsx
<GridCarouselWidget
  items={productCards}
  borderRadius={true}
  autoplay={true}
  autoplayDelay={4000}
  itemsPerView={{
    mobile: 1,
    tablet: 2,
    desktop: 4,
  }}
  gap="16px"
/>
```

### Team Members Grid

```tsx
<GridCarouselWidget
  items={teamMemberCards}
  borderRadius={true}
  itemsPerView={{
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }}
  gap="24px"
  scrollBehavior="page"
/>
```

### Minimal Controls (Pagination Only)

```tsx
<GridCarouselWidget
  items={items}
  showNavigation={false}
  showPagination={true}
  itemsPerView={{
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }}
/>
```

### Item-by-Item Navigation

```tsx
<GridCarouselWidget
  items={items}
  scrollBehavior="item"
  itemsPerView={{
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }}
/>
```

### Custom Gap and 5 Columns

```tsx
<GridCarouselWidget
  items={items}
  gap="12px"
  itemsPerView={{
    mobile: 2,
    tablet: 3,
    desktop: 5,
  }}
/>
```

## Responsive Breakpoints

The component automatically adjusts based on screen width:

| Breakpoint | Width Range | Default Items |
|------------|-------------|---------------|
| Mobile | < 768px | 1 |
| Tablet | 768px - 1023px | 2 |
| Desktop | >= 1024px | 3 |

You can customize the number of items per view at each breakpoint using the `itemsPerView` prop.

## Keyboard Navigation

- **Left Arrow**: Previous page/item
- **Right Arrow**: Next page/item
- **Tab**: Focus navigation buttons

## Accessibility

- ARIA labels on navigation buttons
- Screen reader announcements for current position
- Keyboard navigation support
- Semantic HTML structure

## Styling

The carousel uses theme tokens for consistent styling:
- Colors from `tokens.colors`
- Border radius from `tokens.borderRadius`
- Shadows from `tokens.shadows`

You can override styles using the `style` and `className` props.

## Use Cases

1. **E-commerce Product Carousels** - Showcase multiple products
2. **Team Member Directories** - Display team profiles
3. **Portfolio Galleries** - Show project thumbnails
4. **Feature Highlights** - Present app features or benefits
5. **Testimonial Grids** - Display customer reviews
6. **Blog Post Previews** - Show latest articles
7. **Course Catalogs** - Educational content browsing
8. **Event Listings** - Upcoming events or webinars

## Integration with Widget System

You can also use GridCarouselWidget through the Widget system:

```tsx
import { Widget } from './components/Widget';

<Widget
  config={{
    type: 'gridCarousel',
    theme: 'modern',
    data: {
      items: yourItems,
      itemsPerView: {
        mobile: 1,
        tablet: 2,
        desktop: 3,
      },
      autoplay: true,
      autoplayDelay: 3000,
    },
  }}
/>
```

## Performance Considerations

- Only renders visible items + 1 extra page for smooth transitions
- Uses CSS transforms for smooth animations
- Debounced resize events for responsive behavior
- Optimized re-renders with React.useCallback

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires CSS Grid and Flexbox support

## Tips

1. **Keep item heights consistent** - Use `height: '100%'` on cards for best results
2. **Use appropriate gap values** - Smaller gaps (12-16px) for more items, larger gaps (24-40px) for fewer items
3. **Test at different breakpoints** - Ensure your items look good at 1, 2, 3, and 4+ columns
4. **Consider content** - Text-heavy items work better with fewer columns (2-3), while images can handle more (4-5)
5. **Auto-play timing** - 3-5 seconds is typically good; faster for simple content, slower for text-heavy content

## Troubleshooting

### Items not aligning properly
- Ensure all items have `height: '100%'` or consistent heights
- Check that your items don't have conflicting flex/grid styles

### Navigation not working
- Verify you have enough items to paginate
- Check `showNavigation` and `showPagination` props are not both false

### Responsive behavior issues
- Test window resize - the component listens to resize events
- Verify your items don't have fixed widths that prevent responsive behavior

### Auto-play not starting
- Ensure `autoplay={true}` is set
- Check that you have more items than can fit in one view
- Verify `autoplayDelay` is a reasonable value (> 1000ms recommended)
