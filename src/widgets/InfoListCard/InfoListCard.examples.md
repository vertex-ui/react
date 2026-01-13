# List Widget Examples

## Basic Usage

Render a simple list.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'list',
      data: {
        items: [
          { title: 'Item 1', subtitle: 'Description 1' },
          { title: 'Item 2', subtitle: 'Description 2' }
        ]
      }
    }}
  />
);
```

## Customization Examples

### With Avatars and Actions

Rich list items.

```tsx
import { Widget } from 'src/components/Widget';

const UserList = () => (
  <Widget
    config={{
      type: 'list',
      data: {
        items: [
          {
            title: 'Jane Doe',
            subtitle: 'Admin',
            avatar: { src: '/jane.jpg', alt: 'Jane' },
            actions: [{ label: 'Edit', onClick: () => {} }]
          }
        ]
      },
      settings: {
        showDividers: true,
        layout: 'comfortable'
      }
    }}
  />
);
```

## Enterprise Scenarios

### Paginated Data

List with pagination controls.

```tsx
import { Widget } from 'src/components/Widget';

const PaginatedList = ({ items }) => (
  <Widget
    config={{
      type: 'list',
      data: {
        items: items // Array of many items
      },
      settings: {
        itemsPerPage: 5,
        showPagination: true
      }
    }}
  />
);
```

## Accessibility Example

Renders as a semantic list.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <Widget
    config={{
      type: 'list',
      data: {
        items: [{ title: 'Accessible Item' }]
      }
    }}
  />
);
```
