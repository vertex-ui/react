# Divider Examples

## Basic Usage

A horizontal line.

```tsx
import { Divider } from 'src/components/Divider';

const BasicExample = () => (
  <Divider />
);
```

## Customization Examples

### With Text

Divider with centered text.

```tsx
import { Divider } from 'src/components/Divider';

const TextExample = () => (
  <Divider>OR</Divider>
);
```

### Vertical

Vertical separator (requires height).

```tsx
import { Divider } from 'src/components/Divider';
import { Flex } from 'src/components/Flex';

const VerticalExample = () => (
  <Flex height="50px" align="center">
    <span>Item 1</span>
    <Divider orientation="vertical" />
    <span>Item 2</span>
  </Flex>
);
```

## Enterprise Scenarios

### Section Separator

Group related content form sections.

```tsx
import { Divider } from 'src/components/Divider';

const FormSection = () => (
  <form>
    <h3>Personal Info</h3>
    {/* inputs */}
    <Divider textAlign="left">Contact Details</Divider>
    {/* inputs */}
  </form>
);
```

## Accessibility Example

Automatically uses `separator` role when not an HR.

```tsx
import { Divider } from 'src/components/Divider';

const A11yExample = () => (
  <Divider aria-hidden="true" />
);
```
