# Autocomplete Component

A comprehensive autocomplete/typeahead component with dropdown suggestions, keyboard navigation, loading states, and rich customization options.

## Features

- ✅ Keyboard navigation (Arrow keys, Enter, Escape)
- ✅ Loading states with spinner
- ✅ Custom option rendering
- ✅ Icons and descriptions support
- ✅ Flexible data getters (property names or functions)
- ✅ Clear button
- ✅ Search icon
- ✅ Empty state handling
- ✅ Validation states (error, success)
- ✅ Size variants (sm, md, lg)
- ✅ Full width support
- ✅ Accessible (ARIA attributes)
- ✅ TypeScript support

## Basic Usage

```tsx
import { Autocomplete } from '@vertex-ui/react';

function MyComponent() {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  return (
    <Autocomplete
      label="Search"
      placeholder="Type to search..."
      options={options}
      onSelect={(value, option) => console.log('Selected:', value, option)}
      onChange={(value) => console.log('Search:', value)}
    />
  );
}
```

## With Icons and Descriptions

```tsx
import { Autocomplete } from '@vertex-ui/react';
import { UserIcon } from '@vertex-ui/icons';

const people = [
  {
    value: '1',
    label: 'John Doe',
    description: 'Software Engineer',
    icon: <UserIcon size={20} />,
  },
  // ...more options
];

<Autocomplete
  label="Select a person"
  placeholder="Search people..."
  options={people}
  showSearchIcon
  clearable
/>
```

## Custom Data Structure

For data that doesn't follow the default `{ value, label }` structure:

```tsx
const companies = [
  { id: '1', name: 'Acme Corp', category: 'Technology' },
  { id: '2', name: 'Global Inc', category: 'Manufacturing' },
];

<Autocomplete
  options={companies}
  getOptionLabel="name"           // Use property name
  getOptionValue="id"
  getOptionDescription="category"
/>
```

Or with functions:

```tsx
<Autocomplete
  options={companies}
  getOptionLabel={(opt) => opt.name}
  getOptionValue={(opt) => opt.id}
  getOptionDescription={(opt) => opt.category}
/>
```

## Loading State

```tsx
const [loading, setLoading] = useState(false);
const [results, setResults] = useState([]);

<Autocomplete
  loading={loading}
  loadingMessage="Searching..."
  options={results}
  onChange={(query) => {
    setLoading(true);
    fetchResults(query).then((data) => {
      setResults(data);
      setLoading(false);
    });
  }}
/>
```

## Controlled Component

```tsx
const [value, setValue] = useState('');

<Autocomplete
  value={value}
  onChange={setValue}
  options={options}
  onSelect={(value, option) => {
    console.log('Selected:', option);
    setValue(option.label);
  }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text above input |
| `placeholder` | `string` | - | Placeholder text |
| `options` | `any[]` | `[]` | Array of options to display |
| `getOptionLabel` | `string \| (option: any) => string` | `'label'` | Extract display label from option |
| `getOptionValue` | `string \| (option: any) => string` | `'value'` | Extract value from option |
| `getOptionDescription` | `string \| (option: any) => string \| undefined` | `'description'` | Extract description from option |
| `getOptionIcon` | `string \| (option: any) => React.ReactNode` | `'icon'` | Extract icon from option |
| `getOptionDisabled` | `string \| (option: any) => boolean` | `'disabled'` | Determine if option is disabled |
| `noOptionsMessage` | `string` | `'No options'` | Message when no options available |
| `loading` | `boolean` | `false` | Show loading spinner |
| `loadingMessage` | `string` | `'Loading...'` | Loading message text |
| `onChange` | `(value: string) => void` | - | Called when input value changes |
| `onSelect` | `(value: string, option: any) => void` | - | Called when option is selected |
| `showSearchIcon` | `boolean` | `false` | Show search icon on left |
| `clearable` | `boolean` | `false` | Show clear button |
| `onClear` | `() => void` | - | Called when clear button clicked |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `fullWidth` | `boolean` | `false` | Take full width of container |
| `error` | `string` | - | Error message (shows error state) |
| `success` | `string` | - | Success message (shows success state) |
| `helperText` | `string` | - | Helper text below input |
| `disabled` | `boolean` | `false` | Disable input |
| `required` | `boolean` | `false` | Mark as required |
| `value` | `string` | - | Controlled value |
| `openOnFocus` | `boolean` | `true` | Open dropdown on focus |
| `minSearchLength` | `number` | `0` | Minimum characters before showing options |
| `renderOption` | `(option: any, index: number) => React.ReactNode` | - | Custom option renderer |

## Keyboard Navigation

- **Arrow Down**: Move to next option
- **Arrow Up**: Move to previous option
- **Enter**: Select highlighted option
- **Escape**: Close dropdown

## Styling

The component uses CSS custom properties for theming:

```css
--vtx-primary-500: #3182ce;
--vtx-border-color: #e2e8f0;
--vtx-bg-primary: #ffffff;
--vtx-text-primary: #1a202c;
--vtx-text-muted: #a0aec0;
```

## Accessibility

- Full keyboard navigation support
- ARIA attributes (role, aria-expanded, aria-controls, etc.)
- Screen reader friendly
- Focus management
- Error announcements

## Examples

See the [Storybook stories](../../stories/components/Autocomplete.stories.tsx) for more examples including:
- Basic usage
- With icons and descriptions
- Custom data structures
- Loading states
- Validation states
- Size variants
- Custom rendering
