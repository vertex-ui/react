# Avatar Examples

## Basic Usage

Display a user avatar.

```tsx
import { Avatar } from 'src/components/Avatar';

const BasicExample = () => (
  <Avatar src="/user.jpg" alt="User Name" />
);
```

## Customization Examples

### With Fallback and Status

Show initials if image fails, and a status indicator.

```tsx
import { Avatar } from 'src/components/Avatar';

const StatusExample = () => (
  <Avatar
    fallback="JD"
    statusIndicator={<span className="status-dot online" />}
    size="lg"
  />
);
```

## Enterprise Scenarios

### User List

Display a list of team members.

```tsx
import { Avatar } from 'src/components/Avatar';

const UserList = ({ users }) => (
  <div style={{ display: 'flex', gap: '8px' }}>
    {users.map(user => (
      <Avatar
        key={user.id}
        src={user.avatarUrl}
        fallback={user.initials}
        title={user.name}
      />
    ))}
  </div>
);
```

## Accessibility Example

Always provide `alt` text or meaningful fallback.

```tsx
import { Avatar } from 'src/components/Avatar';

const A11yExample = () => (
  <Avatar src="/profile.jpg" alt="Profile picture of John Doe" />
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-avatar.css`**
```css
.custom-avatar {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Avatar } from 'src/components/Avatar';
import './custom-avatar.css';

const StyledExample = () => (
  <Avatar className="custom-avatar">
    Custom Styled Content
  </Avatar>
);
```
