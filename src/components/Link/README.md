# Link Component

A flexible hyperlink component that works with native anchors, React Router, Next.js, or any custom routing library.

## Features

- ✅ Native HTML anchor support
- ✅ React Router DOM compatibility
- ✅ Next.js Link compatibility
- ✅ Text variants (h1-h6, body1-2, caption, small)
- ✅ Color variants (primary, secondary, neutral, inherit)
- ✅ Icon support (left/right)
- ✅ External link handling
- ✅ Disabled state
- ✅ Underline control
- ✅ Theme-aware colors

## Usage

### Native Link
```tsx
<Link href="/about">About Us</Link>
```

### With React Router
```tsx
import { Link as RouterLink } from 'react-router-dom';

<Link component={RouterLink} to="/dashboard">
  Dashboard
</Link>
```

### With Next.js
```tsx
import NextLink from 'next/link';

<Link component={NextLink} href="/profile">
  Profile
</Link>
```

### With Variants
```tsx
<Link href="/page" variant="h4" color="secondary">
  Large Link
</Link>
```

### With Icons
```tsx
<Link 
  href="/downloads" 
  leftIcon={<DownloadIcon />}
>
  Download
</Link>
```

### External Links
```tsx
<Link href="https://example.com" external>
  Visit Website
</Link>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | string | - | URL to navigate to |
| `component` | ElementType | - | Custom Link component (React Router, Next.js, etc.) |
| `componentProps` | object | {} | Props to pass to custom component |
| `variant` | string | 'body1' | Text size/style variant |
| `color` | string | 'primary' | Link color |
| `noUnderline` | boolean | false | Remove underline decoration |
| `disabled` | boolean | false | Disable the link |
| `leftIcon` | ReactNode | - | Icon before text |
| `rightIcon` | ReactNode | - | Icon after text |
| `external` | boolean | false | Open in new tab |
