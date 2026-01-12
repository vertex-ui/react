# Rating

## 1. Overview
The **Rating** component allows users to view or provide feedback via star ratings. It supports half-stars, custom icons, and different sizes.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Rating } from '@/components/Rating';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Rating value (0-5). |
| `max` | `number` | `5` | Total stars. |
| `selectable` | `boolean` | `false` | Enable user input. |
| `allowHalf` | `boolean` | `false` | Support 0.5 steps. |
| `showValue` | `boolean` | `false` | Display text value. |
| `color` | `'warning' \| 'primary' ...` | `'warning'` | Star color. |

## 4. Accessibility
- **Roles**: Interactive stars act as radio buttons or slider.
- **Labels**: Provide context (e.g., "Rated 4 out of 5").

## 5. Best Practices
- **Feedback**: Use for product reviews or service quality.
- **Read Only**: Use `readOnly` prop for displaying averages.

## 6. Integration Notes
- Can be used in form submissions.

## 7. Do’s and Don’ts
- **Do** use standard yellow/gold for stars to match user expectations.
- **Don't** use for binary choices (Like/Dislike).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
