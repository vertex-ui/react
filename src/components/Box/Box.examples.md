# Box Examples

## Basic Usage

A simple container component.

```tsx
import { Box } from 'src/components/Box';

const BasicExample = () => (
  <Box p={4} bg="gray.100">
    Content inside a box
  </Box>
);
```

## Customization Examples

### Flexbox Layout

Use Box for layout without writing CSS.

```tsx
import { Box } from 'src/components/Box';

const FlexExample = () => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Box>Left</Box>
    <Box>Right</Box>
  </Box>
);
```

## Enterprise Scenarios

### Semantic HTML Wrapper

Render as different HTML elements.

```tsx
import { Box } from 'src/components/Box';

const SemanticLayout = () => (
  <Box as="main" p={8}>
    <Box as="header" mb={4}>Header</Box>
    <Box as="section">Content</Box>
  </Box>
);
```

## Accessibility Example

Box passes through all props, including ARIA.

```tsx
import { Box } from 'src/components/Box';

const A11yExample = () => (
  <Box as="nav" aria-label="Main Navigation">
    Navigation Links
  </Box>
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-box.css`**
```css
.custom-box {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Box } from 'src/components/Box';
import './custom-box.css';

const StyledExample = () => (
  <Box className="custom-box">
    Custom Styled Content
  </Box>
);
```
