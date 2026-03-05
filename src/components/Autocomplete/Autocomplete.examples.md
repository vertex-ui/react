# Autocomplete Examples

## Basic Usage

A simple autocomplete with a list of strings.

```tsx
import { Autocomplete } from 'src/components/Autocomplete';

const BasicExample = () => (
  <Autocomplete
    label="Choose a Fruit"
    options={['Apple', 'Banana', 'Cherry']}
    onSelect={(val) => console.log(val)}
  />
);
```

## Customization Examples

### Async Loading

Fetch options from an API.

```tsx
import { Autocomplete } from 'src/components/Autocomplete';

const AsyncExample = () => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = async (query) => {
    setLoading(true);
    const results = await fetchAPI(query);
    setOptions(results);
    setLoading(false);
  };

  return (
    <Autocomplete
      loading={loading}
      options={options}
      onChange={handleSearch}
    />
  );
};
```

## Enterprise Scenarios

### Complex Object Selection

Select from a list of user objects.

```tsx
import { Autocomplete } from 'src/components/Autocomplete';

const UserSelect = () => (
  <Autocomplete
    label="Assign to User"
    options={[
      { id: 1, name: 'John Doe', role: 'Admin' },
      { id: 2, name: 'Jane Smith', role: 'User' }
    ]}
    getOptionLabel={(opt) => opt.name}
    getOptionValue={(opt) => opt.id}
    getOptionDescription={(opt) => opt.role}
  />
);
```

## Accessibility Example

The component handles ARIA combobox patterns. Ensure labels are associated.

```tsx
import { Autocomplete } from 'src/components/Autocomplete';

const A11yExample = () => (
  <Autocomplete
    id="country-select"
    label="Select Country"
    options={['USA', 'Canada']}
  />
);
```
