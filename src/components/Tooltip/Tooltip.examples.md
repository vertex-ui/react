# Tooltip Examples

## Basic Usage

Hover text.

```tsx
import { Tooltip } from 'src/components/Tooltip';
import { Button } from 'src/components/Button';

const BasicExample = () => (
  <Tooltip content="Save changes">
    <Button>Save</Button>
  </Tooltip>
);
```

## Customization Examples

### Placements

Position tooltip relative to target.

```tsx
import { Tooltip } from 'src/components/Tooltip';

const PlacementExample = () => (
  <Tooltip content="More info" placement="right" arrow>
    <span>Hover me</span>
  </Tooltip>
);
```

## Enterprise Scenarios

### Rich Content

Tooltip with complex layout.

```tsx
import { Tooltip } from 'src/components/Tooltip';

const UserPreview = () => (
  <Tooltip
    content={
      <div>
        <strong>John Doe</strong>
        <p>Software Engineer</p>
      </div>
    }
  >
    <Avatar src="/user.jpg" />
  </Tooltip>
);
```

## Accessibility Example

Associates description via `aria-describedby`.

```tsx
import { Tooltip } from 'src/components/Tooltip';

const A11yExample = () => (
  <Tooltip content="Field description">
    <input aria-label="Input with tooltip" />
  </Tooltip>
);
```


## States Example

Demonstrating different states of the Tooltip.

```tsx
import { Tooltip } from 'src/components/Tooltip';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <Tooltip content="This is a tooltip">
        <span>Hover me</span>
      </Tooltip>
    </div>
    <div>
      <h3>Disabled State</h3>
      <Tooltip content="This is a tooltip" disabled>
        <span>Hover me</span>
      </Tooltip>
    </div>
  </div>
);
```
