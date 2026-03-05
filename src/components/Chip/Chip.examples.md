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


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-chip.css`**
```css
.custom-chip {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Chip } from 'src/components/Chip';
import './custom-chip.css';

const StyledExample = () => (
  <Chip className="custom-chip">
    Custom Styled Content
  </Chip>
);
```
