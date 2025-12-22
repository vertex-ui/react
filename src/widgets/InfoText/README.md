# InfoText Widget

A collection of flexible text-based information display components with icons, perfect for showing stats, features, notifications, and other informational content.

## Variants

### InfoText.Base
Basic info text with icon, heading, and optional subtext. Ideal for displaying status messages, notifications, or simple information.

**Props:**
- `icon` (React.ReactNode) - Icon or emoji to display
- `iconVariant` ('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info') - Icon color variant (default: 'primary')
- `heading` (React.ReactNode) - Main heading text
- `subText` (React.ReactNode) - Optional secondary text
- `className` (string) - Additional CSS classes
- `style` (React.CSSProperties) - Inline styles

**Usage:**
```tsx
<InfoText.Base
  icon="📧"
  iconVariant="primary"
  heading="Email Notifications"
  subText="Receive updates about your account activity"
/>
```

---

### InfoText.Stat
Statistics display with icon, large value, label, and optional subtext. Perfect for dashboards and analytics.

**Props:**
- `icon` (React.ReactNode) - Optional icon or emoji
- `iconVariant` ('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info') - Icon color variant (default: 'primary')
- `value` (React.ReactNode) - Large value to display (number, percentage, etc.)
- `label` (React.ReactNode) - Label describing the stat
- `subText` (React.ReactNode) - Optional additional context
- `className` (string) - Additional CSS classes
- `style` (React.CSSProperties) - Inline styles

**Usage:**
```tsx
<InfoText.Stat
  icon="👥"
  iconVariant="primary"
  value="1,234"
  label="Active Users"
  subText="+12% from last month"
/>
```

---

### InfoText.Feature
Feature highlights with icon, title, description, and optional badge. Great for feature lists, product highlights, and marketing content.

**Props:**
- `icon` (React.ReactNode) - Icon or emoji to display
- `iconVariant` ('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info') - Icon color variant (default: 'primary')
- `title` (React.ReactNode) - Feature title
- `description` (React.ReactNode) - Feature description
- `badge` (React.ReactNode) - Optional badge (e.g., "New", "Popular")
- `className` (string) - Additional CSS classes
- `style` (React.CSSProperties) - Inline styles

**Usage:**
```tsx
<InfoText.Feature
  icon="🚀"
  iconVariant="primary"
  title="Fast Performance"
  description="Lightning-fast load times with optimized rendering."
  badge="New"
/>
```

---

### InfoText.Compact
Compact info display with small icon and text. Perfect for inline use, lists, and space-constrained layouts.

**Props:**
- `icon` (React.ReactNode) - Icon or emoji to display (smaller size)
- `iconVariant` ('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info') - Icon color variant (default: 'primary')
- `text` (React.ReactNode) - Text to display
- `className` (string) - Additional CSS classes
- `style` (React.CSSProperties) - Inline styles

**Usage:**
```tsx
<InfoText.Compact
  icon="✓"
  iconVariant="success"
  text="Payment successful"
/>
```

---

### InfoText.Vertical
Vertical layout with centered icon and text. Ideal for feature grids, icon cards, and centered content displays.

**Props:**
- `icon` (React.ReactNode) - Icon or emoji to display
- `iconVariant` ('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info') - Icon color variant (default: 'primary')
- `heading` (React.ReactNode) - Main heading text
- `subText` (React.ReactNode) - Optional secondary text
- `className` (string) - Additional CSS classes
- `style` (React.CSSProperties) - Inline styles

**Usage:**
```tsx
<InfoText.Vertical
  icon="📱"
  iconVariant="primary"
  heading="Mobile Ready"
  subText="Works on all devices"
/>
```

---

## Icon Variants

All variants support the following icon color schemes:
- `primary` - Blue theme
- `secondary` - Purple theme
- `success` - Green theme
- `danger` - Red theme
- `warning` - Yellow theme
- `info` - Cyan theme

Each variant applies a colored background circle with the appropriate icon color.

---

## Common Use Cases

### Dashboard Statistics
```tsx
<InfoText.Stat
  icon="📈"
  iconVariant="success"
  value="89%"
  label="Completion Rate"
  subText="Above target"
/>
```

### Feature List
```tsx
<InfoText.Feature
  icon="🔒"
  iconVariant="success"
  title="Secure & Private"
  description="Enterprise-grade security with end-to-end encryption."
/>
```

### Notifications & Alerts
```tsx
<InfoText.Base
  icon="⚠"
  iconVariant="warning"
  heading="Action Required"
  subText="Please update your payment method"
/>
```

### Inline Status
```tsx
<InfoText.Compact
  icon="✓"
  iconVariant="success"
  text="Payment successful"
/>
```

### Feature Grid
```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
  <InfoText.Vertical icon="🚀" heading="Fast" subText="Optimized" />
  <InfoText.Vertical icon="🔐" heading="Secure" subText="Protected" />
  <InfoText.Vertical icon="🎯" heading="Easy" subText="Intuitive" />
</div>
```

---

## Styling

Each variant comes with predefined styles but can be customized using:
- `className` - Add custom CSS classes
- `style` - Apply inline styles
- CSS variables - Override theme colors

The icon backgrounds and colors automatically adapt to the selected `iconVariant`.

---

## Accessibility

- All text content is semantic HTML
- Icons use appropriate contrast ratios
- Focus states are visible (when interactive)
- Screen reader compatible

---

## Notes

- Icons can be any React element: emojis, SVG icons, or icon library components
- All text fields support React nodes, allowing for rich content
- The `Compact` variant uses smaller icons (24px vs 40px)
- The `Feature` variant aligns icon to the top for multi-line descriptions
- Hover effects provide subtle scale animations on icons
