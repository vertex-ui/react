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
