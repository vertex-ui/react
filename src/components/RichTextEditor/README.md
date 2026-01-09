# RichTextEditor Component

A WYSIWYG text editor component that allows users to create formatted content. It includes a customizable toolbar and supports common text operations.

## Features

- **Formatting**: Bold, Italic, Underline, Strikethrough, Headings, Lists, etc.
- **Toolbar**: Configurable toolbar buttons.
- **Validation**: Error, success, and helper text support.
- **Character Count**: Built-in counter with limit enforcement.
- **State Management**: Fully controlled via `value` and `onChange`.
- **Accessibility**: Keyboard navigable toolbar and content area.

## Installation

```tsx
import { RichTextEditor } from '@vtx-ui/react';
```

## Basic Usage

```tsx
const [content, setContent] = useState('<p>Hello World</p>');

<RichTextEditor
  value={content}
  onChange={(html, text) => setContent(html)}
  label="Post Content"
/>
```

## Customizable Toolbar

Specify which buttons to display.

```tsx
<RichTextEditor
  toolbarButtons={['bold', 'italic', 'underline', 'link', 'h1']}
  label="Simple Editor"
/>
```

## Validation & Limits

```tsx
<RichTextEditor
  maxLength={500}
  showCount
  required
  error={isTooShort ? 'Content must be at least 100 characters' : undefined}
/>
```

## Layout Control

```tsx
<RichTextEditor
  minHeight={300}
  fullWidth
  placeholder="Start writing your story..."
/>
```

## Clearable

Allow users to reset the content quickly.

```tsx
<RichTextEditor
  clearable
  onClear={() => setContent('')}
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | HTML content |
| `defaultValue` | `string` | - | Initial content |
| `onChange` | `(html, text) => void` | - | Change handler |
| `label` | `string` | - | Editor label |
| `placeholder` | `string` | - | Placeholder text |
| `minHeight` | `number` | `200` | Minimum height (px) |
| `maxLength` | `number` | - | Max characters |
| `showCount` | `boolean` | `false` | Show counter |
| `toolbarButtons` | `ToolbarButton[]` | `[all]` | Toolbar config |
| `hideToolbar` | `boolean` | `false` | Hide toolbar |
| `disabled` | `boolean` | `false` | Read-only mode |
| `error` | `string` | - | Error message |

## Accessibility

- **Toolbar**: Uses `role="toolbar"` and accessible button labels.
- **Editor**: Uses `contentEditable` with `role="textbox"` and `aria-multiline="true"`.
- **Validation**: Links error messages via `aria-describedby`.
