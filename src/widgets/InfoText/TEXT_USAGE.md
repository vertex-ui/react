# InfoText Widget - Typography Component Usage

The InfoText widget extensively uses the `Typography` component from your component library as JSX elements throughout all variants.

## Typography Component Usage by Variant

### 1. InfoText.Base
```tsx
<Typography variant="body1" weight="medium">
  {heading}
</Typography>
<Typography variant="caption" color="text-secondary">
  {subText}
</Typography>
```

### 2. InfoText.Stat
```tsx
<Typography variant="h5" weight="bold">
  {value}
</Typography>
<Typography variant="body2" weight="medium">
  {label}
</Typography>
<Typography variant="caption" color="text-secondary">
  {subText}
</Typography>
```

### 3. InfoText.Feature
```tsx
<Typography variant="h6" weight="semibold">
  {title}
</Typography>
<Typography variant="body2" color="text-secondary">
  {description}
</Typography>
```

### 4. InfoText.Compact
```tsx
<Typography variant="body2">
  {text}
</Typography>
```

### 5. InfoText.Vertical
```tsx
<Typography variant="body1" weight="medium" align="center">
  {heading}
</Typography>
<Typography variant="caption" color="text-secondary" align="center">
  {subText}
</Typography>
```

## Typography Component Features Utilized

✅ **Variant System** - h5, h6, body1, body2, caption
✅ **Weight Property** - medium, semibold, bold  
✅ **Color Theming** - text-secondary color token
✅ **Alignment** - center alignment in Vertical variant
✅ **Typography Consistency** - All text follows design system

## Benefits

1. **Consistent Typography** - All text follows the same design system
2. **Theme Support** - Text colors automatically adapt to theme
3. **Responsive** - Text scales appropriately across devices
4. **Accessible** - Semantic HTML elements from Typography component
5. **Maintainable** - Changes to Typography component propagate to all InfoText variants

## Example Usage in Your App

```tsx
import { InfoText } from 'vertex-ui-react';

// Typography component is used internally
<InfoText.Base
  icon={<YourIcon />}
  heading="This uses Typography component internally"
  subText="With proper typography variants"
/>
```

The Typography component handles all typography concerns including:
- Font sizes and line heights
- Font weights
- Text colors
- Text alignment
- Responsive scaling
- Accessibility

No need to manually style text - it's all handled by the Typography component! 🎨
