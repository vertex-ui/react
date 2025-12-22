# InfoText Widget - Text Component Usage

The InfoText widget extensively uses the `Text` component from your component library as JSX elements throughout all variants.

## Text Component Usage by Variant

### 1. InfoText.Base
```tsx
<Text variant="body1" weight="medium">
  {heading}
</Text>
<Text variant="caption" color="text-secondary">
  {subText}
</Text>
```

### 2. InfoText.Stat
```tsx
<Text variant="h5" weight="bold">
  {value}
</Text>
<Text variant="body2" weight="medium">
  {label}
</Text>
<Text variant="caption" color="text-secondary">
  {subText}
</Text>
```

### 3. InfoText.Feature
```tsx
<Text variant="h6" weight="semibold">
  {title}
</Text>
<Text variant="body2" color="text-secondary">
  {description}
</Text>
```

### 4. InfoText.Compact
```tsx
<Text variant="body2">
  {text}
</Text>
```

### 5. InfoText.Vertical
```tsx
<Text variant="body1" weight="medium" align="center">
  {heading}
</Text>
<Text variant="caption" color="text-secondary" align="center">
  {subText}
</Text>
```

## Text Component Features Utilized

✅ **Variant System** - h5, h6, body1, body2, caption
✅ **Weight Property** - medium, semibold, bold  
✅ **Color Theming** - text-secondary color token
✅ **Alignment** - center alignment in Vertical variant
✅ **Typography Consistency** - All text follows design system

## Benefits

1. **Consistent Typography** - All text follows the same design system
2. **Theme Support** - Text colors automatically adapt to theme
3. **Responsive** - Text scales appropriately across devices
4. **Accessible** - Semantic HTML elements from Text component
5. **Maintainable** - Changes to Text component propagate to all InfoText variants

## Example Usage in Your App

```tsx
import { InfoText } from 'vertex-ui-react';

// Text component is used internally
<InfoText.Base
  icon={<YourIcon />}
  heading="This uses Text component internally"
  subText="With proper typography variants"
/>
```

The Text component handles all typography concerns including:
- Font sizes and line heights
- Font weights
- Text colors
- Text alignment
- Responsive scaling
- Accessibility

No need to manually style text - it's all handled by the Text component! 🎨
