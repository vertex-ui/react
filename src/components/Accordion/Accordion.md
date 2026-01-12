# Accordion

## 1. Overview
The **Accordion** component organizes content into collapsible panels, allowing users to toggle the visibility of sections. This is essential for enterprise dashboards and settings pages where space optimization and information hierarchy are critical. It supports single or multiple open items and various styling variants.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Accordion, AccordionItem } from '@/components/Accordion';
```

## 3. Customization Options

### Accordion Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItemProps[]` | `undefined` | Array of data objects to render items. |
| `allowMultiple` | `boolean` | `false` | Allows multiple panels to be open simultaneously. |
| `defaultOpenItems` | `string[]` | `[]` | Array of item IDs to be open by default (uncontrolled). |
| `openItems` | `string[]` | `undefined` | Array of item IDs to be open (controlled). |
| `onToggle` | `(ids: string[]) => void` | `undefined` | Callback fired when items are toggled. |
| `variant` | `'default' \| 'bordered' \| 'separated' \| 'flush'` | `'default'` | Visual style of the accordion. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the headers and content padding. |
| `showChevron` | `boolean` | `true` | Toggles the visibility of the expand/collapse icon. |
| `chevronPosition` | `'left' \| 'right'` | `'right'` | Position of the chevron icon. |
| `disableAnimations` | `boolean` | `false` | Disables transition animations for performance or accessibility. |

### AccordionItem Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | required | Unique identifier for the item. |
| `header` | `ReactNode` | required | Content displayed in the clickable header. |
| `children` | `ReactNode` | required | Content displayed in the collapsible body. |
| `disabled` | `boolean` | `false` | Disables interaction for this specific item. |

## 4. Accessibility
- **WAI-ARIA Pattern**: Follows the Accordion pattern.
- **Roles**: Headers use `button` role with `aria-expanded` and `aria-controls`. Panels use `region` role with `aria-labelledby`.
- **Keyboard**: Headers are focusable. `Enter` or `Space` toggles the panel.

## 5. Best Practices
- **Performance**: Use `disableAnimations` if rendering heavy content or large lists to improve rendering speed.
- **User Experience**: Use `allowMultiple={false}` (default) to reduce cognitive load, unless comparison between sections is needed.
- **Security**: Avoid rendering unsanitized HTML in headers or bodies.

## 6. Integration Notes
- Ideal for FAQs, settings groups, and complex forms.
- Can be controlled via state for wizard-like flows where one section opens after another completes.

## 7. Do’s and Don’ts
- **Do** use clear, concise headers.
- **Do** ensure unique `id`s for all items.
- **Don't** nest accordions too deeply as it complicates navigation.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
- **Note**: Ensure `id` props are stable references if dynamically generating items.
