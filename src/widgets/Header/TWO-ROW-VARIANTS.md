# Header Two-Row Styling Variants - Visual Comparison

## Quick Reference

| Variant | Background | Border | Shadow | Best For |
|---------|------------|--------|--------|----------|
| **default** | Light gray (3% black) | Subtle top border | Inset highlight | General purpose |
| **divider** | Transparent | Strong top border (2px) | None | Minimal, clean design |
| **dark-bottom** | Medium gray (8% black) | Subtle top border | Inset shadow | Bold, professional |
| **gradient-bottom** | Gradient (2% → 5% black) | Subtle top border | Inset highlight | Modern, polished |
| **elevated-bottom** | Pure white | None | Drop shadow | Floating, card-like |

## Visual Breakdown

### Default Style
```
┌─────────────────────────────────────────────┐
│ Logo         [Search...]         [Actions]  │  ← Top row (white)
├─────────────────────────────────────────────┤  ← 1px subtle border
│  Home  │ Products │ Solutions │ Pricing     │  ← Bottom row (light gray)
└─────────────────────────────────────────────┘
```
**Visual Characteristics:**
- Subtle background color (barely visible gray)
- Inset white highlight at top of bottom row
- Professional, standard appearance

---

### Divider Style
```
┌─────────────────────────────────────────────┐
│ Logo         [Search...]         [Actions]  │  ← Top row (white)
┝━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┥  ← 2px strong border
│  Home  │ Products │ Solutions │ Pricing     │  ← Bottom row (transparent)
└─────────────────────────────────────────────┘  ← 1px subtle border
```
**Visual Characteristics:**
- Strong 2px divider between rows
- Transparent bottom row (no background)
- Clean, minimal aesthetic
- Clear visual separation

---

### Dark Bottom Style
```
┌─────────────────────────────────────────────┐
│ Logo         [Search...]         [Actions]  │  ← Top row (white)
├─────────────────────────────────────────────┤  ← 1px subtle border
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│  Home  │ Products │ Solutions │ Pricing     │  ← Bottom row (darker gray)
└─────────────────────────────────────────────┘
```
**Visual Characteristics:**
- Noticeably darker background (8% black)
- Inset shadow for depth
- Bold, professional appearance
- Strong visual hierarchy

---

### Gradient Bottom Style
```
┌─────────────────────────────────────────────┐
│ Logo         [Search...]         [Actions]  │  ← Top row (white)
├─────────────────────────────────────────────┤  ← 1px subtle border
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  ← Light gray
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│  ← Darker gray
│  Home  │ Products │ Solutions │ Pricing     │  ← Bottom row (gradient)
└─────────────────────────────────────────────┘
```
**Visual Characteristics:**
- Smooth gradient from light to dark
- Subtle transition (2% to 5% black)
- Inset highlight at top
- Modern, polished look

---

### Elevated Bottom Style
```
┌─────────────────────────────────────────────┐
│ Logo         [Search...]         [Actions]  │  ← Top row (white)
│                                             │  ← No border
┌─────────────────────────────────────────────┐
│  Home  │ Products │ Solutions │ Pricing     │  ← Bottom row (white)
└─────────────────────────────────────────────┘
       └──── Drop shadow ────┘
```
**Visual Characteristics:**
- Pure white background
- Drop shadow for floating effect
- No borders between rows
- Card-like, elevated appearance

---

## Navigation Item Spacing

All variants use the same navigation layout:

```
┌─────────────────────────────────────────────┐
│                  BOTTOM ROW                  │
├─────────────────────────────────────────────┤
│                                             │
│ ┌────────┐   │   ┌──────────┐   │   ┌─────┐│
│ │  Home  │   │   │ Products │   │   │ ... ││
│ └────────┘   │   └──────────┘   │   └─────┘│
│              ↑                ↑             │
│          Pipe separator   Pipe separator    │
│          (rgba 0,0,0,0.15)                  │
└─────────────────────────────────────────────┘
     ↑                                     ↑
  32px padding                        32px padding
```

**Spacing Details:**
- Container padding: 32px left/right
- Navigation max-width: 1400px
- Item distribution: `justify-content: space-evenly`
- Pipe margin: 16px left/right
- Link padding: 8px vertical, 24px horizontal

---

## Active State Indicator

All variants show active states consistently:

```
┌─────────────────────────────────────────────┐
│  Home  │ Products │ Solutions │ Pricing     │
│        │          │           │             │
│   ══   │          │           │             │
│   ↑                                         │
│   Active indicator (3px height, 60% width)  │
└─────────────────────────────────────────────┘
```

**Active State Features:**
- Background: `rgba(0, 0, 0, 0.06)`
- Font weight: 600 (semibold)
- Bottom border: 3px, current color
- Width: 60% of link width
- Centered horizontally
- Border radius: 3px 3px 0 0

---

## Hover States

```
Before Hover:
┌──────────┐
│ Products │  ← Normal state
└──────────┘

During Hover:
┌──────────┐
│ Products │  ← Lifted by 1px
└──────────┘    Background: rgba(0, 0, 0, 0.04)
```

---

## Color Values Reference

### Background Colors
- **Default:** `rgba(0, 0, 0, 0.03)`
- **Divider:** `transparent`
- **Dark Bottom:** `rgba(0, 0, 0, 0.08)`
- **Gradient Top:** `rgba(0, 0, 0, 0.02)`
- **Gradient Bottom:** `rgba(0, 0, 0, 0.05)`
- **Elevated:** `#ffffff`

### Border Colors
- **Subtle:** `rgba(0, 0, 0, 0.08)`
- **Strong:** `rgba(0, 0, 0, 0.12)`
- **Light:** `rgba(0, 0, 0, 0.06)`

### Shadow Values
- **Inset Highlight:** `inset 0 1px 0 rgba(255, 255, 255, 0.5)`
- **Inset Shadow:** `inset 0 1px 2px rgba(0, 0, 0, 0.05)`
- **Drop Shadow:** `0 2px 8px rgba(0, 0, 0, 0.08)`

### Text Colors
- **Normal:** `inherit` (from parent theme)
- **Dark Bottom:** `rgba(0, 0, 0, 0.85)`

---

## Use Case Recommendations

### 🏢 Enterprise/B2B Applications
**Recommended:** Dark Bottom or Default
- Bold, professional appearance
- Clear visual hierarchy
- Suitable for complex interfaces

### 🎨 Creative/Design Studios
**Recommended:** Divider or Elevated Bottom
- Clean, minimal aesthetic
- Focus on content
- Modern, sophisticated

### 💻 SaaS Platforms
**Recommended:** Gradient Bottom or Default
- Polished, modern look
- Professional yet friendly
- Versatile for various contexts

### 🛍️ E-commerce
**Recommended:** Elevated Bottom or Gradient Bottom
- Premium feel
- Clear navigation emphasis
- Engaging visual appeal

### 📱 Tech/Startup
**Recommended:** Gradient Bottom or Dark Bottom
- Modern, innovative appearance
- Strong brand presence
- Tech-forward aesthetic

---

## Combining with Theme Variants

All two-row bottom styles work with all theme variants:

```tsx
// Primary theme with dark bottom
<Header.Desktop
  variant="primary"
  layout="two-row"
  twoRowBottomStyle="dark-bottom"
/>

// Dark theme with elevated bottom
<Header.Desktop
  variant="dark"
  layout="two-row"
  twoRowBottomStyle="elevated-bottom"
/>

// Gradient theme with gradient bottom
<Header.Desktop
  variant="gradient"
  layout="two-row"
  twoRowBottomStyle="gradient-bottom"
/>
```

---

## Accessibility Considerations

All variants maintain:
- ✅ Minimum 4.5:1 contrast ratio for text
- ✅ Clear focus indicators
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Touch-friendly tap targets (minimum 44x44px)

---

## Performance Notes

All styling is CSS-only:
- No JavaScript calculations
- Hardware-accelerated transforms
- Optimized pseudo-elements
- Minimal repaints
- GPU-accelerated shadows

---

## Migration from Old Two-Row

If you're using the old two-row layout:

```tsx
// Old (still works, uses default style)
<Header.Desktop layout="two-row" />

// New (explicit default)
<Header.Desktop layout="two-row" twoRowBottomStyle="default" />

// New styles
<Header.Desktop layout="two-row" twoRowBottomStyle="divider" />
<Header.Desktop layout="two-row" twoRowBottomStyle="dark-bottom" />
<Header.Desktop layout="two-row" twoRowBottomStyle="gradient-bottom" />
<Header.Desktop layout="two-row" twoRowBottomStyle="elevated-bottom" />
```

No breaking changes - all existing implementations continue to work!
