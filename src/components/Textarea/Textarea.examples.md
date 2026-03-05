# Textarea Examples

## Basic Usage

Multi-line text input.

```tsx
import { Textarea } from 'src/components/Textarea';

const BasicExample = () => (
  <Textarea placeholder="Type here..." />
);
```

## Customization Examples

### Auto-Resize

Expands as user types.

```tsx
import { Textarea } from 'src/components/Textarea';

const AutoGrowExample = () => (
  <Textarea
    label="Notes"
    autoResize
    minRows={3}
    maxRows={10}
  />
);
```

## Enterprise Scenarios

### Character Limit with Validation

Feedback for constraints.

```tsx
import { Textarea } from 'src/components/Textarea';

const FeedbackForm = () => (
  <Textarea
    label="Feedback"
    showCount
    maxLength={500}
    required
    helperText="Max 500 characters"
  />
);
```

## Accessibility Example

Connects labels and descriptions.

```tsx
import { Textarea } from 'src/components/Textarea';

const A11yExample = () => (
  <Textarea
    label="Comments"
    id="comments-field"
  />
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-textarea.css`**
```css
.custom-textarea {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Textarea } from 'src/components/Textarea';
import './custom-textarea.css';

const StyledExample = () => (
  <Textarea className="custom-textarea">
    Custom Styled Content
  </Textarea>
);
```
