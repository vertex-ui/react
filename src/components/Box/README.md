# Box Component

A flexible, MUI-inspired layout component that serves as a replacement for `div` and provides a prop-based interface for styling and layout.

## Overview

The Box component is the foundation for building layouts in Vertex UI. It accepts style props that map directly to CSS properties, eliminating the need to write custom CSS for common styling tasks.

## Features

- 🎨 **Style Props** - Apply styles directly via props (no CSS needed)
- 🧩 **Semantic HTML** - Render as any HTML element using the `as` prop
- 📦 **Layout Systems** - Built-in support for Flexbox and Grid
- 🎯 **Type-Safe** - Full TypeScript support with prop intellisense
- 🔄 **Component Wrapper** - Can wrap any React component or element
- 📱 **Responsive** - All props accept responsive values

## Installation

```bash
npm install @vertex-ui/react
```

## Basic Usage

```tsx
import { Box } from '@vertex-ui/react';

function MyComponent() {
  return (
    <Box p={4} bg="#f0f0f0" borderRadius={8}>
      Simple box with padding, background, and rounded corners
    </Box>
  );
}
```

## Props

### Core Props

| Prop | Type | Description |
|------|------|-------------|
| `as` | `'div' \| 'section' \| 'article' \| ...` | HTML element to render (default: 'div') |
| `children` | `ReactNode` | Content to display |
| `className` | `string` | Additional CSS classes |
| `style` | `CSSProperties` | Inline styles object |

### Spacing Props

Short and long aliases are available for all spacing props:

| Prop | Alias | Description |
|------|-------|-------------|
| `m` | `margin` | Margin (all sides) |
| `mt` | `marginTop` | Margin top |
| `mr` | `marginRight` | Margin right |
| `mb` | `marginBottom` | Margin bottom |
| `ml` | `marginLeft` | Margin left |
| `mx` | - | Margin horizontal (left & right) |
| `my` | - | Margin vertical (top & bottom) |
| `p` | `padding` | Padding (all sides) |
| `pt` | `paddingTop` | Padding top |
| `pr` | `paddingRight` | Padding right |
| `pb` | `paddingBottom` | Padding bottom |
| `pl` | `paddingLeft` | Padding left |
| `px` | - | Padding horizontal (left & right) |
| `py` | - | Padding vertical (top & bottom) |

**Value Types:** `string | number` (numbers are converted to px)

```tsx
<Box m={4} />           // margin: 16px (4 * 4px base unit)
<Box mx="auto" />       // margin-left: auto; margin-right: auto
<Box p="1rem 2rem" />   // padding: 1rem 2rem
```

### Dimension Props

| Prop | Alias | Description |
|------|-------|-------------|
| `w` | `width` | Width |
| `h` | `height` | Height |
| `minW` | `minWidth` | Minimum width |
| `maxW` | `maxWidth` | Maximum width |
| `minH` | `minHeight` | Minimum height |
| `maxH` | `maxHeight` | Maximum height |

### Color Props

| Prop | Type | Description |
|------|------|-------------|
| `bg` / `backgroundColor` | `string` | Background color |
| `color` | `string` | Text/foreground color |

### Display & Layout Props

| Prop | Type | Description |
|------|------|-------------|
| `display` | `'block' \| 'flex' \| 'grid' \| ...` | CSS display property |
| `position` | `'relative' \| 'absolute' \| ...` | CSS position property |
| `overflow` | `'visible' \| 'hidden' \| ...` | Overflow behavior |
| `overflowX` | `'visible' \| 'hidden' \| ...` | Horizontal overflow |
| `overflowY` | `'visible' \| 'hidden' \| ...` | Vertical overflow |

### Border Props

| Prop | Type | Description |
|------|------|-------------|
| `border` | `string \| number` | Border (all sides) |
| `borderTop` | `string \| number` | Border top |
| `borderRight` | `string \| number` | Border right |
| `borderBottom` | `string \| number` | Border bottom |
| `borderLeft` | `string \| number` | Border left |
| `borderColor` | `string` | Border color |
| `borderRadius` / `rounded` | `string \| number` | Border radius |

### Shadow Props

| Prop | Type | Description |
|------|------|-------------|
| `shadow` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| string` | Box shadow preset or custom |
| `boxShadow` | `string` | Custom box shadow |

### Flexbox Props

| Prop | Type | Description |
|------|------|-------------|
| `flexDirection` | `'row' \| 'column' \| ...` | Flex direction |
| `justifyContent` | `'flex-start' \| 'center' \| ...` | Main axis alignment |
| `alignItems` | `'flex-start' \| 'center' \| ...` | Cross axis alignment |
| `alignContent` | `'flex-start' \| 'center' \| ...` | Multi-line alignment |
| `flexWrap` | `'nowrap' \| 'wrap' \| ...` | Flex wrapping |
| `gap` | `string \| number` | Gap between items |
| `rowGap` | `string \| number` | Row gap |
| `columnGap` | `string \| number` | Column gap |
| `flexGrow` | `number` | Flex grow factor |
| `flexShrink` | `number` | Flex shrink factor |
| `flexBasis` | `string \| number` | Flex basis |

### Grid Props

| Prop | Type | Description |
|------|------|-------------|
| `gridTemplateColumns` | `string` | Grid column template |
| `gridTemplateRows` | `string` | Grid row template |
| `gridColumn` | `string` | Grid column placement |
| `gridRow` | `string` | Grid row placement |

### Position Props

| Prop | Type | Description |
|------|------|-------------|
| `top` | `string \| number` | Top position |
| `right` | `string \| number` | Right position |
| `bottom` | `string \| number` | Bottom position |
| `left` | `string \| number` | Left position |
| `zIndex` | `number` | Stack order |

### Other Props

| Prop | Type | Description |
|------|------|-------------|
| `opacity` | `number` | Opacity (0-1) |
| `textAlign` | `'left' \| 'center' \| 'right' \| 'justify'` | Text alignment |
| `cursor` | `string` | Cursor style |
| `pointerEvents` | `'auto' \| 'none'` | Pointer events |
| `userSelect` | `'auto' \| 'none' \| 'text' \| 'all'` | User selection |
| `transition` | `string` | CSS transitions |

## Examples

### Flexbox Layout

```tsx
// Horizontal layout with spacing
<Box display="flex" justifyContent="space-between" alignItems="center" gap={2}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Box>

// Vertical centered layout
<Box display="flex" flexDirection="column" alignItems="center" gap={3}>
  <Typography>Centered vertically</Typography>
  <Button>Click me</Button>
</Box>

// Wrapping flex container
<Box display="flex" flexWrap="wrap" gap={2}>
  {items.map(item => <Box key={item.id}>{item.name}</Box>)}
</Box>
```

### Grid Layout

```tsx
// Simple 3-column grid
<Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4}>
  <Box>Column 1</Box>
  <Box>Column 2</Box>
  <Box>Column 3</Box>
</Box>

// Responsive grid
<Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={3}>
  {cards.map(card => <Card key={card.id} {...card} />)}
</Box>

// Complex grid layout
<Box display="grid" gridTemplateColumns="200px 1fr 200px" gap={2}>
  <Box>Sidebar</Box>
  <Box>Main Content</Box>
  <Box>Sidebar</Box>
</Box>
```

### Card Component

```tsx
<Box
  maxW={400}
  bg="white"
  shadow="md"
  borderRadius={12}
  overflow="hidden"
>
  <Box h={200} bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" />
  <Box p={4}>
    <Typography variant="h4" mb={2}>Card Title</Typography>
    <Typography variant="body2" color="#666" mb={3}>
      Card description goes here.
    </Typography>
    <Button>Learn More</Button>
  </Box>
</Box>
```

### Responsive Container

```tsx
<Box maxW={1200} mx="auto" px={4}>
  <Box p={6} bg="#f5f5f5" borderRadius={8}>
    <Typography variant="h3">Responsive Container</Typography>
    <Typography>
      This container has a max width and is centered with auto margins.
      It also has horizontal padding for mobile screens.
    </Typography>
  </Box>
</Box>
```

### Semantic HTML

```tsx
<Box as="article" maxW={800} mx="auto">
  <Box as="header" mb={4}>
    <Typography variant="h2">Article Title</Typography>
  </Box>
  
  <Box as="section" mb={4}>
    <Typography variant="h4">Section 1</Typography>
    <Typography>Content...</Typography>
  </Box>
  
  <Box as="footer" pt={4} borderTop="1px solid #e0e0e0">
    <Typography variant="body2">Footer content</Typography>
  </Box>
</Box>
```

### Positioned Elements

```tsx
<Box position="relative" h={300}>
  <Box
    position="absolute"
    top="50%"
    left="50%"
    style={{ transform: 'translate(-50%, -50%)' }}
  >
    Centered Content
  </Box>
  
  <Box position="absolute" top={10} right={10}>
    Top Right Badge
  </Box>
</Box>
```

### Wrapping Components

```tsx
// Button group
<Box display="flex" gap={2}>
  <Button>Save</Button>
  <Button variant="outline">Cancel</Button>
</Box>

// Form layout
<Box display="flex" flexDirection="column" gap={3}>
  <Input label="Name" />
  <Input label="Email" />
  <Box display="flex" justifyContent="flex-end" gap={2}>
    <Button>Submit</Button>
  </Box>
</Box>
```

## Comparison with Native Elements

### Before (with div)

```tsx
<div style={{ 
  display: 'flex', 
  justifyContent: 'space-between',
  padding: '16px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px'
}}>
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### After (with Box)

```tsx
<Box display="flex" justifyContent="space-between" p={4} bg="#f5f5f5" borderRadius={8}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Box>
```

## Best Practices

### 1. Use Box for Layout, Components for Content

```tsx
// ✅ Good
<Box display="flex" gap={2}>
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</Box>

// ❌ Avoid
<Flex gap={2}>
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</Flex>
// Use Box instead of specialized layout components when you need custom styling
```

### 2. Use Semantic Elements

```tsx
// ✅ Good - semantic HTML
<Box as="section" py={8}>
  <Box as="header">
    <Typography variant="h2">Section Title</Typography>
  </Box>
</Box>

// ❌ Avoid - non-semantic
<Box py={8}>
  <Box>
    <Typography variant="h2">Section Title</Typography>
  </Box>
</Box>
```

### 3. Combine with Theme Tokens

```tsx
// ✅ Good - using theme values
<Box 
  p={4} 
  bg="var(--vtx-color-background)" 
  borderRadius="var(--vtx-border-radius-md)"
/>

// ✅ Also good - direct values for custom needs
<Box p={4} bg="#f5f5f5" borderRadius={8} />
```

### 4. Keep Props Readable

```tsx
// ✅ Good - easy to read
<Box 
  display="flex" 
  flexDirection="column" 
  gap={3}
  p={4}
  bg="white"
  shadow="md"
>
  Content
</Box>

// ❌ Harder to read - too many props on one line
<Box display="flex" flexDirection="column" gap={3} p={4} bg="white" shadow="md">Content</Box>
```

## TypeScript

The Box component is fully typed with TypeScript:

```tsx
import { Box, BoxProps } from '@vertex-ui/react';

// Custom component using Box
interface CustomCardProps extends BoxProps {
  title: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, children, ...boxProps }) => {
  return (
    <Box p={4} bg="white" shadow="md" borderRadius={8} {...boxProps}>
      <Typography variant="h4" mb={2}>{title}</Typography>
      {children}
    </Box>
  );
};
```

## Accessibility

- Use semantic HTML elements via the `as` prop for better accessibility
- Box accepts all standard HTML attributes including ARIA attributes
- Preserve proper heading hierarchy when using `as` prop

```tsx
<Box as="nav" aria-label="Main navigation">
  <Box as="ul" display="flex" gap={4} role="list">
    <Box as="li"><Link href="/">Home</Link></Box>
    <Box as="li"><Link href="/about">About</Link></Box>
  </Box>
</Box>
```

## Browser Support

Box component works in all modern browsers that support:
- CSS Flexbox
- CSS Grid
- CSS Custom Properties (for theming)

## Related Components

- **Container** - Responsive container with max-width constraints
- **Flex** - Specialized flexbox layout component
- **Grid** - Specialized grid layout component
- **Text** - Typography component with similar style props

## Migration from Other Libraries

### From MUI Box

Vertex UI Box is inspired by MUI's Box and shares similar API:

```tsx
// MUI
<Box sx={{ p: 2, bgcolor: 'background.paper' }}>Content</Box>

// Vertex UI
<Box p={2} bg="var(--vtx-color-background)">Content</Box>
```

### From Chakra UI Box

Very similar API, most props work the same:

```tsx
// Chakra UI
<Box p={4} bg="gray.100">Content</Box>

// Vertex UI
<Box p={4} bg="#f5f5f5">Content</Box>
```

## License

MIT © Vertex UI
