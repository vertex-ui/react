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
