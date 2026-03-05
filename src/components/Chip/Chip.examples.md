# Chip Examples

## Basic Usage

Display a simple tag.

```tsx
import { Chip } from 'src/components/Chip';

const BasicExample = () => (
  <Chip label="React" />
);
```

## Customization Examples

### Deletable Chip

A chip that can be removed.

```tsx
import { Chip } from 'src/components/Chip';

const DeletableExample = () => (
  <Chip
    label="Filter: Active"
    onDelete={() => console.log('Deleted')}
    variant="outlined"
  />
);
```

## Enterprise Scenarios

### User Avatars

Chips representing users.

```tsx
import { Chip } from 'src/components/Chip';

const UserChip = ({ user }) => (
  <Chip
    avatar={user.avatarUrl}
    label={user.name}
    onClick={() => openProfile(user.id)}
  />
);
```

## Accessibility Example

Interactive chips are keyboard accessible.

```tsx
import { Chip } from 'src/components/Chip';

const A11yExample = () => (
  <Chip
    label="Clickable"
    onClick={() => {}}
    aria-label="Filter by Clickable"
  />
);
```


## States Example

Demonstrating different states of the Chip.

```tsx
import { Chip } from 'src/components/Chip';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <Chip>
        Chip Text
      </Chip>
    </div>
    <div>
      <h3>Disabled State</h3>
      <Chip disabled>
        Chip Text
      </Chip>
    </div>
  </div>
);
```
