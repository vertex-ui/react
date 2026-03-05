# RichTextEditor Examples

## Basic Usage

A WYSIWYG editor.

```tsx
import { RichTextEditor } from 'src/components/RichTextEditor';

const BasicExample = () => (
  <RichTextEditor label="Content" />
);
```

## Customization Examples

### With Toolbar and Character Count

Full featured editor.

```tsx
import { RichTextEditor } from 'src/components/RichTextEditor';

const FullExample = () => (
  <RichTextEditor
    label="Blog Post"
    showCount
    maxLength={1000}
    placeholder="Write your story..."
  />
);
```

## Enterprise Scenarios

### Email Composer

Restricted toolbar for emails.

```tsx
import { RichTextEditor } from 'src/components/RichTextEditor';

const EmailEditor = () => (
  <RichTextEditor
    label="Message Body"
    toolbarButtons={['bold', 'italic', 'link', 'unorderedList']}
    minHeight={300}
  />
);
```

## Accessibility Example

Uses `contentEditable` with ARIA roles.

```tsx
import { RichTextEditor } from 'src/components/RichTextEditor';

const A11yExample = () => (
  <RichTextEditor
    label="Accessible Editor"
    id="editor-1"
  />
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-richtexteditor.css`**
```css
.custom-richtexteditor {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { RichTextEditor } from 'src/components/RichTextEditor';
import './custom-richtexteditor.css';

const StyledExample = () => (
  <RichTextEditor className="custom-richtexteditor">
    Custom Styled Content
  </RichTextEditor>
);
```
