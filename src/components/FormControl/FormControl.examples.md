# FormControl Examples

## Basic Usage

Wrap an input with a label.

```tsx
import { FormControl } from 'src/components/FormControl';
import { Input } from 'src/components/Input';

const BasicExample = () => (
  <FormControl label="Username">
    <Input />
  </FormControl>
);
```

## Customization Examples

### With Helper Text and Error

Show validation state.

```tsx
import { FormControl } from 'src/components/FormControl';
import { Input } from 'src/components/Input';

const ValidationExample = () => (
  <FormControl
    label="Email"
    helperText="We'll never share your email."
    error="Invalid email address"
  >
    <Input type="email" error />
  </FormControl>
);
```

## Enterprise Scenarios

### Complex Form Layout

Stack multiple controls.

```tsx
import { FormControl } from 'src/components/FormControl';
import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';

const LoginForm = () => (
  <form>
    <FormControl label="User" required>
      <Input />
    </FormControl>
    <FormControl label="Password" required>
      <Input type="password" />
    </FormControl>
    <Button type="submit">Login</Button>
  </form>
);
```

## Accessibility Example

Automatically associates label with input using `id` (if not provided, `useId` is used).

```tsx
import { FormControl } from 'src/components/FormControl';
import { Input } from 'src/components/Input';

const A11yExample = () => (
  <FormControl label="Search" id="search-field">
    <Input id="search-field" />
  </FormControl>
);
```
