# Autocomplete

## 1. Overview
The **Autocomplete** component is an enhanced text input that provides suggestions as the user types. It is essential for enterprise forms requiring selection from large datasets (e.g., users, products, locations) where a standard dropdown is inefficient. It supports asynchronous loading, custom rendering, and keyboard navigation.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Autocomplete } from '@/components/Autocomplete';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `any[]` | `[]` | Array of data objects for suggestions. |
| `value` | `string` | `undefined` | Controlled input value. |
| `onChange` | `(value: string) => void` | `undefined` | Callback for input changes. |
| `onSelect` | `(value: string, option: any) => void` | `undefined` | Callback when an option is selected. |
| `getOptionLabel` | `string \| (opt) => string` | `'label'` | logic to extract the display text. |
| `getOptionValue` | `string \| (opt) => string` | `'value'` | logic to extract the unique identifier. |
| `loading` | `boolean` | `false` | Shows a spinner indicating data fetch. |
| `clearable` | `boolean` | `false` | Shows a clear (X) button when populated. |
| `renderOption` | `(opt, index) => ReactNode` | `undefined` | Custom renderer for dropdown items. |
| `error` | `string` | `undefined` | Error message to display. |
| `showSearchIcon` | `boolean` | `false` | Displays a search icon in the input. |

## 4. Accessibility
- **ARIA Pattern**: Implements the Combobox pattern.
- **Roles**: `role="combobox"`, `aria-autocomplete="list"`, `aria-expanded`.
- **Keyboard**:
  - `ArrowDown`/`ArrowUp` to navigate suggestions.
  - `Enter` to select.
  - `Escape` to close the dropdown.

## 5. Best Practices
- **Performance**: Debounce API calls in `onChange` to avoid flooding the server.
- **UX**: Use `loading` state to provide feedback during async searches.
- **Data**: Ensure `getOptionValue` returns a unique stable ID for list rendering.

## 6. Integration Notes
- Connects easily with backend search endpoints.
- Can be used as a controlled component in form libraries (e.g., React Hook Form).

## 7. Do’s and Don’ts
- **Do** provide `noOptionsMessage` to inform users when no matches are found.
- **Do** allow `minSearchLength` (e.g., 2 chars) before triggering searches on large datasets.
- **Don't** rely solely on autocomplete for small, static lists; use `Select` instead.

## 8. Versioning & Maintenance
- **Updates**: Future versions may include virtual scrolling for massive option lists.
