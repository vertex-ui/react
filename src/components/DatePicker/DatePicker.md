# DatePicker

## 1. Overview
The **DatePicker** component provides a user-friendly interface for selecting dates. It combines a text input with a calendar dropdown, ensuring valid date entry.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { DatePicker } from '@/components/DatePicker';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date` | `null` | Selected date. |
| `onChange` | `(date) => void` | `undefined` | Callback with new date. |
| `label` | `string` | `undefined` | Input label. |
| `minDate` | `Date` | `undefined` | Earliest selectable date. |
| `maxDate` | `Date` | `undefined` | Latest selectable date. |
| `disabled` | `boolean` | `false` | Disables input. |
| `format` | `string` | `'MM/DD/YYYY'` | Display format. |
| `showToday` | `boolean` | `true` | Show "Today" shortcut. |
| `clearable` | `boolean` | `false` | Show clear button. |

## 4. Accessibility
- **Keyboard**: Users can type the date directly or navigate the calendar grid.
- **ARIA**: The calendar popover uses dialog/grid roles.

## 5. Best Practices
- **Validation**: Use `minDate`/`maxDate` to prevent invalid selections (e.g., birth dates in the future).
- **Format**: Stick to the locale's standard format to avoid confusion.

## 6. Integration Notes
- Relies on `Input` component for the field.
- Uses `Calendar` sub-component internally.

## 7. Do’s and Don’ts
- **Do** allow manual typing for speed.
- **Don't** use a date picker for simple day/month/year selections (like credit card expiry); specific dropdowns might be faster.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
