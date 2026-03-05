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


## States Example

Demonstrating different states of the Autocomplete.

```tsx
import { Autocomplete } from 'src/components/Autocomplete';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <Autocomplete options={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }]} placeholder="Search..." />
    </div>
    <div>
      <h3>Disabled State</h3>
      <Autocomplete options={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }]} placeholder="Search..." disabled />
    </div>
    <div>
      <h3>Loading State</h3>
      <Autocomplete options={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }]} placeholder="Search..." loading />
    </div>
    <div>
      <h3>Loading & Disabled State</h3>
      <Autocomplete options={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }]} placeholder="Search..." loading disabled />
    </div>
  </div>
);
```
