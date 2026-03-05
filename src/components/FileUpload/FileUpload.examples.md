# FileUpload Examples

## Basic Usage

A simple file uploader.

```tsx
import { FileUpload } from 'src/components/FileUpload';

const BasicExample = () => (
  <FileUpload
    label="Upload Document"
    onUpload={(files) => console.log(files)}
  />
);
```

## Customization Examples

### Image Upload

Restricted to images with multiple selection.

```tsx
import { FileUpload } from 'src/components/FileUpload';

const ImageUploader = () => (
  <FileUpload
    multiple
    accept="image/*"
    label="Gallery Images"
    helperText="Upload up to 5 images"
  />
);
```

## Enterprise Scenarios

### Validation

Max size and file type restrictions.

```tsx
import { FileUpload } from 'src/components/FileUpload';

const SecureUpload = () => (
  <FileUpload
    maxSize={5 * 1024 * 1024} // 5MB
    accept=".pdf,.docx"
    error="File too large"
    label="Contract (PDF/DOCX only)"
  />
);
```

## Accessibility Example

The component uses a button for keyboard interaction.

```tsx
import { FileUpload } from 'src/components/FileUpload';

const A11yExample = () => (
  <FileUpload
    label="Upload Resume"
    required
  />
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-fileupload.css`**
```css
.custom-fileupload {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { FileUpload } from 'src/components/FileUpload';
import './custom-fileupload.css';

const StyledExample = () => (
  <FileUpload className="custom-fileupload">
    Custom Styled Content
  </FileUpload>
);
```
