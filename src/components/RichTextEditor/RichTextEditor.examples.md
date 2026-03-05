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


## States Example

Demonstrating different states of the RichTextEditor.

```tsx
import { RichTextEditor } from 'src/components/RichTextEditor';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <RichTextEditor value="<p>Hello World</p>" onChange={() => {}} />
    </div>
    <div>
      <h3>Disabled State</h3>
      <RichTextEditor value="<p>Hello World</p>" onChange={() => {}} disabled />
    </div>
  </div>
);
```
