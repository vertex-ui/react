# ParseClass Utility - Usage Guide

The `parseClass` utility provides Tailwind-like utility classes that work with **both React components and plain HTML**. It automatically injects CSS rules at runtime.

## ✨ Features

- 🎯 **Automatic Global Processing** - Works automatically on all elements (React & HTML)
- 🔄 **Dynamic Updates** - Watches for new elements and className changes
- 📦 **Standard Scale Values** - `mb-2`, `p-4`, `gap-6`, etc.
- 🎨 **Arbitrary Values** - `mb-[2px]`, `p-[1.5rem]`, `gap-[10px]`, etc.
- 🚀 **Zero Configuration** - Auto-initializes in browser environment

## 📋 Usage Methods

### 1. Automatic with ThemeProvider (Recommended - Zero Setup!)

If you're using `ThemeProvider` (which most apps do), the global styles **auto-initialize automatically**. No extra imports needed!

```tsx
// In your App.tsx or main entry file
import { ThemeProvider, Button } from 'vertex-ui-react';

function App() {
  return (
    <ThemeProvider>
      {/* Global parseClass styles are already active! */}
      <div className="p-4 mb-6">
        <h1 className="mb-4 fs-[32px]">Hello World</h1>
        <Button className="mt-2">Click me</Button>
        
        {/* Even plain HTML works automatically */}
        <p className="mb-[10px]">Plain HTML with utility classes!</p>
      </div>
    </ThemeProvider>
  );
}
```

### 2. Without ThemeProvider (Manual Initialization)

If you're not using `ThemeProvider`, you can manually initialize:

```typescript
import { initGlobalStyles } from 'vertex-ui-react';

// Call once in your app entry point
initGlobalStyles();
```

### 3. Plain HTML (After Initialization)

Once initialized (automatically via ThemeProvider or manually), plain HTML just works:

```html
<!-- Plain HTML - works automatically after ThemeProvider is mounted! -->
<div class="mb-4 p-2 gap-3">
  <h1 class="mb-[10px] fs-[24px]">Hello World</h1>
  <p class="mt-2">This just works!</p>
</div>
```

### 4. React Components with HOC (Alternative Approach)

Use `withParsedClasses` HOC for React components:

```typescript
import { withParsedClasses } from 'vertex-ui-react';

const MyComponent = ({ className }: { className?: string }) => (
  <div className={className}>Content</div>
);

export default withParsedClasses(MyComponent);

// Usage:
<MyComponent className="mb-4 p-2 gap-3" />
```

### 3. Manual Processing

If you need manual control:

```typescript
import { parseClass } from 'vertex-ui-react';

const processedClass = parseClass('mb-4'); // Returns processed class name
```
5. Manual Processing (Advanced)
## 🎨 Supported Utilities

### Spacing (Margin & Padding)

**Standard Scale:**
```html
<!-- Margin -->
<div class="m-4">All margins</div>
<div class="mt-2 mb-4">Top & bottom</div>
<div class="mx-auto">Horizontal centering</div>
<div class="my-6">Vertical spacing</div>

<!-- Padding -->
<div class="p-4">All padding</div>
<div class="px-2 py-4">Horizontal & vertical</div>
<div class="pt-8 pb-2">Top & bottom</div>
```

**Arbitrary Values:**
```html
<div class="mb-[15px] p-[2rem]">Custom values</div>
```

**Scale Reference:**
- `0` → `0`
- `px` → `1px`
- `0.5` → `0.125rem` (2px)
- `1` → `0.25rem` (4px)
- `2` → `0.5rem` (8px)
- `3` → `0.75rem` (12px)
- `4` → `1rem` (16px)
- `5` → `1.25rem` (20px)
- `6` → `1.5rem` (24px)
- `8` → `2rem` (32px)
- `10` → `2.5rem` (40px)
- `12` → `3rem` (48px)
- `16` → `4rem` (64px)
- `20` → `5rem` (80px)
- `24` → `6rem` (96px)
- `32` → `8rem` (128px)
- `40` → `10rem` (160px)
- `48` → `12rem` (192px)
- `56` → `14rem` (224px)
- `64` → `16rem` (256px)

### Dimensions

```html
<div class="w-64 h-32">Fixed size</div>
<div class="w-[200px] h-[100px]">Custom size</div>
```

### Typography

```html
<h1 class="fs-[24px] lh-[1.5] ls-[0.05em]">Styled text</h1>
```

### Layout

```html
<div class="gap-4">Flex/Grid gap</div>
<div class="gap-[20px]">Custom gap</div>
<div class="rounded-[8px]">Border radius</div>
```

## 🔧 Advanced Configuration

### Manual Control

```typescript
import { initGlobalStyles, cleanupGlobalStyles } from 'vertex-ui-react';

// Initialize manually (if auto-init was disabled)
initGlobalStyles();

// Cleanup when needed (e.g., in tests)
cleanupGlobalStyles();
```

### Server-Side Rendering (SSR)

The utility checks for browser environment before initializing:

```typescript
// Safe for SSR - only runs in browser
if (typeof window !== 'undefined') {
  initGlobalStyles();
}
```

## 🎯 Examples

### Example 1: Mixed React & HTML

```tsx
import React from 'react';
import { Button, withParsedClasses } from 'vertex-ui-react';

const CustomCard = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

const StyledCard = withParsedClasses(CustomCard);

function App() {
  return (
    <div className="p-4">
      {/* Plain HTML - works automatically */}
      <h1 className="mb-4 fs-[32px]">My App</h1>
      
      {/* React component with HOC */}
      <StyledCard className="mb-6 p-4 rounded-[8px]">
        <p className="mb-2">Card content</p>
        <Button className="mt-4">Click me</Button>
      </StyledCard>
      
      {/* More plain HTML */}
      <footer className="mt-8 pt-4">
        Footer content
      </footer>
    </div>
  );
}
```

### Example 2: Dynamic Classes

```tsx
import React, { useState } from 'react';

function DynamicExample() {
  const [spacing, setSpacing] = useState('4');
  
  return (
    <div>
      <button onClick={() => setSpacing('8')}>
        Increase spacing
      </button>
      
      {/* Classes update automatically via MutationObserver */}
      <div className={`mt-${spacing} p-${spacing}`}>
        Content with dynamic spacing
      </div>
    </div>
  );
}
```

### Example 3: Conditional Classes

```tsx
function ConditionalExample({ isCompact }: { isCompact: boolean }) {
  return (
    <div className={isCompact ? 'p-2 gap-2' : 'p-4 gap-4'}>
      Content adapts to compact mode
    </div>
  );
}
```

## 🚦 How It Works

1. **Auto-initialization** - On load, scans all existing elements
2. **MutationObserver** - Watches for:
   - New elements added to DOM
   - Changes to `class` attributes
3. **CSS Injection** - Generates and injects CSS rules into `<style id="dynamic-styles">`
4. **Class Transformation** - Converts utility classes to generated class names
5. **Caching** - Prevents duplicate rule injection

## ⚡ Performance

- ✅ Rules are cached to avoid duplication
- ✅ Only processes elements with classes
- ✅ Efficient MutationObserver with filtered attributes
- ✅ No redundant processing of unchanged elements

## 🎓 Best Practices

1. **Use standard scale values** when possible (better consistency)
2. **Combine with CSS modules** or styled-components for complex styling
3. **Test in development** before deploying (check browser console for errors)
4. **Use HOC for React components** that need heavy processing
5. **Let auto-init handle plain HTML** - no manual setup needed

## 🐛 Troubleshooting

**Classes not working?**
- Check browser console for errors
- Verify class syntax: `property-value` or `property-[value]`
- Ensure utility is imported in your app

**Styles appearing late?**
- This is expected for dynamically added elements
- MutationObserver processes them within milliseconds

**SSR Issues?**
- The utility auto-detects browser environment
- No action needed for Next.js, Gatsby, etc.

## 📚 See Also

- [withParsedClasses HOC](src/hoc/withParsedClasses.tsx)
- [parseClass Implementation](src/utils/parseClass.ts)
