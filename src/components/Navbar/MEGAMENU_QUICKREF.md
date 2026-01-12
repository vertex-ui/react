# Mega Menu Quick Reference

## 🚀 Quick Start

### Basic Mega Menu
```tsx
<Navbar
  navigationItems={[
    {
      label: 'Products',
      megaMenu: [
        {
          title: 'Category 1',
          items: [
            { label: 'Item 1', href: '/item-1' },
            { label: 'Item 2', href: '/item-2' },
          ],
        },
      ],
    },
  ]}
/>
```

### With Icons
```tsx
import { Icon1, Icon2 } from '@vtx-ui/react/icons';

megaMenu: [{
  title: 'Products',
  items: [
    { label: 'Item', href: '/item', icon: <Icon1 size={20} /> },
  ],
}]
```

### With Descriptions
```tsx
items: [
  {
    label: 'Item',
    href: '/item',
    description: 'Short description here',
  },
]
```

### With Tags
```tsx
items: [
  { label: 'New Feature', tagVariant: 'new' },
  { label: 'Hot Deal', tagVariant: 'hot' },
  { label: 'On Sale', tagVariant: 'sale' },
  { label: 'Beta', tagVariant: 'beta' },
]
```

### With Badges
```tsx
items: [
  {
    label: 'Products',
    badge: '50+',
    badgeVariant: 'primary',
  },
]
```

### Featured Item
```tsx
items: [
  {
    label: 'Featured Item',
    href: '/featured',
    featured: true,
    description: 'This item stands out',
  },
]
```

### Featured Column
```tsx
megaMenu: [{
  title: 'Featured',
  featured: true,
  span: 2, // Takes 2 columns
  image: 'https://example.com/image.jpg',
  items: [
    { label: 'Special Item', featured: true },
  ],
  cta: {
    label: 'View All',
    href: '/all',
  },
}]
```

### Full Example
```tsx
import { ShoppingBagIcon, TruckIcon } from '@vtx-ui/react/icons';

<Navbar
  variant="two-row"
  sticky
  logo="logo.png"
  navigationItems={[
    {
      label: 'Shop',
      megaMenu: [
        // Regular column
        {
          title: 'Products',
          description: 'Browse our catalog',
          items: [
            {
              label: 'Fresh Vegetables',
              href: '/vegetables',
              icon: <ShoppingBagIcon size={20} />,
              description: 'Farm-fresh organic',
              tagVariant: 'new',
            },
            {
              label: 'Exotic Fruits',
              href: '/fruits',
              icon: <ShoppingBagIcon size={20} />,
              description: 'Premium quality',
              badge: '50+',
            },
          ],
        },
        
        // Featured column
        {
          title: 'Featured',
          featured: true,
          span: 2,
          image: 'https://example.com/featured.jpg',
          items: [
            {
              label: 'Summer Box',
              href: '/summer',
              featured: true,
              description: 'Seasonal favorites',
            },
          ],
          cta: {
            label: 'View All',
            href: '/collections',
          },
        },
        
        // Service links
        {
          title: 'Help',
          items: [
            {
              label: 'Track Order',
              href: '/track',
              icon: <TruckIcon size={20} />,
              description: 'Real-time tracking',
            },
          ],
          cta: {
            label: 'Contact Support',
            href: '/support',
          },
        },
      ],
    },
  ]}
/>
```

## 📋 Properties Cheatsheet

### NavigationItem
| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Item text (required) |
| `href` | `string` | Link URL |
| `icon` | `ReactNode` | Icon component |
| `description` | `string` | Helper text |
| `badge` | `string \| number` | Badge content |
| `badgeVariant` | `'primary' \| 'success' \| ...` | Badge color |
| `tagVariant` | `'new' \| 'hot' \| 'sale' \| 'beta'` | Tag style |
| `featured` | `boolean` | Highlight item |
| `active` | `boolean` | Active state |
| `image` | `string` | Thumbnail URL |

### MegaMenuColumn
| Property | Type | Description |
|----------|------|-------------|
| `title` | `string` | Column header |
| `description` | `string` | Column subtext |
| `items` | `NavigationItem[]` | Menu items (required) |
| `featured` | `boolean` | Featured styling |
| `span` | `number` | Grid columns (1-4) |
| `image` | `string` | Header image URL |
| `cta` | `object` | Call-to-action link |

### CTA Object
| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Link text |
| `href` | `string` | Link URL |
| `variant` | `'primary' \| 'secondary'` | Style variant |

## 🎨 CSS Classes

### Main Elements
- `.vtx-navbar__megamenu` - Container
- `.vtx-navbar__megamenu-content` - Grid wrapper
- `.vtx-navbar__megamenu-column` - Column container
- `.vtx-navbar__megamenu-column--featured` - Featured column
- `.vtx-navbar__megamenu-column--span-{n}` - Column span

### Column Parts
- `.vtx-navbar__megamenu-header` - Column header
- `.vtx-navbar__megamenu-title` - Column title
- `.vtx-navbar__megamenu-description` - Column description
- `.vtx-navbar__megamenu-image` - Header image
- `.vtx-navbar__megamenu-items` - Items container
- `.vtx-navbar__megamenu-cta` - CTA container

### Menu Items
- `.vtx-navbar__megamenu-item` - Item container
- `.vtx-navbar__megamenu-item--featured` - Featured item
- `.vtx-navbar__megamenu-item--active` - Active item
- `.vtx-navbar__megamenu-item-icon` - Icon container
- `.vtx-navbar__megamenu-item-image` - Thumbnail
- `.vtx-navbar__megamenu-item-label` - Item text
- `.vtx-navbar__megamenu-item-description` - Item description
- `.vtx-navbar__megamenu-item-tag` - Tag element
- `.vtx-navbar__megamenu-item-tag--{variant}` - Tag variant

## 🎯 Common Patterns

### E-commerce Navigation
```tsx
{
  title: 'Shop',
  items: [
    { label: 'New Arrivals', tagVariant: 'new' },
    { label: 'Best Sellers', badge: 'Hot' },
    { label: 'Sale', tagVariant: 'sale', badge: '50% OFF' },
  ],
}
```

### Feature Showcase
```tsx
{
  title: 'Features',
  featured: true,
  image: '/features.jpg',
  items: [
    {
      label: 'Analytics',
      icon: <ChartIcon />,
      description: 'Track your performance',
    },
  ],
  cta: { label: 'Learn More', href: '/features' },
}
```

### Help/Support
```tsx
{
  title: 'Support',
  items: [
    {
      label: 'Documentation',
      icon: <DocsIcon />,
      description: 'Guides and tutorials',
    },
    {
      label: 'API Reference',
      icon: <CodeIcon />,
      description: 'Complete API docs',
    },
  ],
  cta: { label: 'Contact Us', href: '/contact' },
}
```

## 🔧 Customization

### Custom Colors
```css
.vtx-navbar__megamenu-item--featured {
  background: linear-gradient(90deg, #your-color-1, #your-color-2);
}
```

### Custom Hover
```css
.vtx-navbar__megamenu-item:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}
```

### Custom Tag Colors
```css
.vtx-navbar__megamenu-item-tag--custom {
  background: #your-color;
  color: white;
}
```

## ⚡ Performance Tips

1. **Lazy Load Images**: Use loading="lazy" for images
2. **Optimize Icons**: Use SVG icons, keep size small
3. **Limit Items**: Max 5-7 items per column
4. **Cache Data**: Cache mega menu config if from API
5. **Minimize Columns**: 3-5 columns ideal

## ♿ Accessibility

- All items are keyboard navigable (Tab, Enter)
- Screen reader friendly with proper ARIA labels
- Sufficient color contrast (WCAG AA compliant)
- Focus indicators visible
- Touch targets minimum 44x44px

## 📱 Responsive Behavior

- **Desktop**: Full grid layout
- **Tablet**: 2-3 columns
- **Mobile**: Single column accordion

## 🐛 Troubleshooting

### Mega Menu Not Appearing
- Check `megaMenu` array is not empty
- Ensure `items` array has items
- Verify parent has `hover` capability

### Styles Not Applied
- Import Navbar CSS: `import '@vtx-ui/react/styles'`
- Check CSS variable values
- Verify no conflicting styles

### Icons Not Showing
- Import icon components correctly
- Pass as React elements: `icon={<Icon />}`
- Check icon size (recommend 16-20px)

### Layout Issues
- Max 4 columns recommended
- Use `span` for wider columns
- Test on different screen sizes

## 📚 More Resources

- **Full Guide**: [MEGAMENU_GUIDE.md](./MEGAMENU_GUIDE.md)
- **Redesign Notes**: [REDESIGN_NOTES.md](./REDESIGN_NOTES.md)
- **Component Docs**: [README.md](./README.md)
- **Live Examples**: Run `npm run storybook`
