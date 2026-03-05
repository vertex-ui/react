# MultiSelect Examples

## Basic Usage

Select multiple options.

```tsx
import { MultiSelect } from 'src/components/MultiSelect';

const BasicExample = () => (
  <MultiSelect
    label="Tags"
    options={[
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' }
    ]}
  />
);
```

## Customization Examples

### Search and Select All

Enhanced selection features.

```tsx
import { MultiSelect } from 'src/components/MultiSelect';

const AdvancedSelect = () => (
  <MultiSelect
    searchable
    showSelectAll
    label="Assignees"
    options={users}
    placeholder="Search users..."
  />
);
```

## Enterprise Scenarios

### Grouped Options

Categorized selection.

```tsx
import { MultiSelect } from 'src/components/MultiSelect';

const GroupedSelect = () => (
  <MultiSelect
    grouped
    label="Filter by Region"
    options={[
      { value: 'us-east', label: 'US East', group: 'Americas' },
      { value: 'eu-west', label: 'EU West', group: 'Europe' }
    ]}
  />
);
```

## Accessibility Example

Uses listbox pattern.

```tsx
import { MultiSelect } from 'src/components/MultiSelect';

const A11yExample = () => (
  <MultiSelect
    label="Skills"
    helperText="Select at least one skill"
    options={skills}
  />
);
```


## States Example

Demonstrating different states of the MultiSelect.

```tsx
import { MultiSelect } from 'src/components/MultiSelect';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <MultiSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select options" />
    </div>
    <div>
      <h3>Disabled State</h3>
      <MultiSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select options" disabled />
    </div>
    <div>
      <h3>Loading State</h3>
      <MultiSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select options" loading />
    </div>
    <div>
      <h3>Loading & Disabled State</h3>
      <MultiSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} placeholder="Select options" loading disabled />
    </div>
  </div>
);
```
