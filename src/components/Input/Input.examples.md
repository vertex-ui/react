# Input Examples

## Basic Usage

A text input.

```tsx
import { Input } from 'src/components/Input';

const BasicExample = () => (
  <Input placeholder="Enter text..." />
);
```

## Customization Examples

### Icons and Clear Button

Input with visual aids.

```tsx
import { Input } from 'src/components/Input';
import { SearchIcon } from 'src/icons';

const SearchInput = () => (
  <Input
    leftIcon={<SearchIcon />}
    placeholder="Search..."
    clearable
    onClear={() => console.log('Cleared')}
  />
);
```

## Enterprise Scenarios

### Form Validation

Input with error and success states.

```tsx
import { Input } from 'src/components/Input';

const ValidatedInput = ({ isValid, errorMessage }) => (
  <Input
    label="Username"
    error={!isValid ? errorMessage : undefined}
    success={isValid ? "Username available" : undefined}
    required
  />
);
```

## Accessibility Example

Includes accessible labels and error messages.

```tsx
import { Input } from 'src/components/Input';

const A11yExample = () => (
  <Input
    label="Email Address"
    type="email"
    autoComplete="email"
  />
);
```


## States Example

Demonstrating different states of the Input.

```tsx
import { Input } from 'src/components/Input';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <Input placeholder="Enter value..." />
    </div>
    <div>
      <h3>Disabled State</h3>
      <Input placeholder="Enter value..." disabled />
    </div>
  </div>
);
```
