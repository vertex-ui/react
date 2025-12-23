# Testimonial Widget

A professional, customizable testimonial slider component with multiple theme options.

## Features

- 🎨 **6 Professional Themes**: minimal, card, gradient, modern, professional, glassmorphism
- ⭐ **Rating Display**: Optional star ratings for testimonials
- 🔄 **Auto-play Support**: Automatic testimonial rotation
- 📱 **Fully Responsive**: Works beautifully on all screen sizes
- 🎯 **Navigation Controls**: Arrow buttons and dot indicators
- 🖼️ **Avatar Support**: Display author images
- ✨ **Smooth Animations**: Professional transitions and hover effects

## Basic Usage

```tsx
import { TestimonialWidget } from '@vtx-ui/react';

const testimonialData = {
  testimonials: [
    {
      id: '1',
      content: 'This product has completely transformed our workflow!',
      author: {
        name: 'Sarah Johnson',
        role: 'Product Manager',
        company: 'TechCorp Inc.',
        avatar: 'https://example.com/avatar.jpg',
      },
      rating: 5,
      date: 'December 2025',
    },
    // ... more testimonials
  ],
  showNavigation: true,
  showDots: true,
};

<TestimonialWidget 
  data={testimonialData} 
  theme="card" 
  borderRadius={true}
/>
```

## Themes

### Card Theme
Clean, light background with subtle border and shadow.
```tsx
<TestimonialWidget data={data} theme="card" />
```

### Minimal Theme
Simple, transparent background with clean typography.
```tsx
<TestimonialWidget data={data} theme="minimal" />
```

### Gradient Theme
Eye-catching purple gradient background with white text.
```tsx
<TestimonialWidget data={data} theme="gradient" />
```

### Modern Theme
Dark background with elegant contrast and modern styling.
```tsx
<TestimonialWidget data={data} theme="modern" />
```

### Professional Theme
White background with primary color border and shadow.
```tsx
<TestimonialWidget data={data} theme="professional" />
```

### Glassmorphism Theme
Frosted glass effect with backdrop blur (best on colored backgrounds).
```tsx
<div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
  <TestimonialWidget data={data} theme="glassmorphism" />
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TestimonialWidgetData` | Required | Testimonial data including testimonials array |
| `theme` | `'minimal' \| 'card' \| 'gradient' \| 'modern' \| 'professional' \| 'glassmorphism'` | `'card'` | Visual theme |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `React.CSSProperties` | `{}` | Inline styles |
| `autoplay` | `boolean` | `false` | Enable auto-play |
| `autoplayDelay` | `number` | `5000` | Delay between slides (ms) |
| `borderRadius` | `boolean` | `true` | Apply border radius |

## Data Structure

```typescript
interface TestimonialWidgetData {
  testimonials: Array<{
    id?: string;
    content: React.ReactNode;
    author: {
      name: string;
      role?: string;
      company?: string;
      avatar?: string;
    };
    rating?: number; // 1-5 stars
    date?: string;
  }>;
  showNavigation?: boolean; // Show arrow buttons
  showDots?: boolean; // Show pagination dots
}
```

## Examples

### With Auto-play
```tsx
<TestimonialWidget 
  data={testimonialData}
  theme="gradient"
  autoplay={true}
  autoplayDelay={3000}
/>
```

### Single Testimonial (No Navigation)
```tsx
<TestimonialWidget 
  data={{
    testimonials: [singleTestimonial],
    showNavigation: false,
    showDots: false,
  }}
  theme="professional"
/>
```

### Without Ratings
```tsx
<TestimonialWidget 
  data={{
    testimonials: testimonials.map(t => ({ ...t, rating: undefined })),
    showNavigation: true,
    showDots: true,
  }}
  theme="modern"
/>
```

## Best Practices

1. **Use high-quality images** for author avatars (at least 150x150px)
2. **Keep testimonial content concise** (2-3 sentences work best)
3. **Include company/role information** for credibility
4. **Use the glassmorphism theme on colored backgrounds** for best effect
5. **Enable autoplay for 3-5 second intervals** to keep visitors engaged
6. **Add 3-5 testimonials** for optimal rotation

## Accessibility

The component includes:
- ARIA labels for navigation buttons
- Keyboard navigation support
- Semantic HTML structure
- Proper contrast ratios in all themes
