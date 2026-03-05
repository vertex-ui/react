# DatePicker Examples

## Basic Usage

Select a date.

```tsx
import { DatePicker } from 'src/components/DatePicker';

const BasicExample = () => {
  const [date, setDate] = useState(null);
  return (
    <DatePicker
      label="Select Date"
      value={date}
      onChange={setDate}
    />
  );
};
```

## Customization Examples

### Min/Max Dates

Restrict selection range.

```tsx
import { DatePicker } from 'src/components/DatePicker';

const RestrictedExample = () => (
  <DatePicker
    minDate={new Date()}
    maxDate={new Date('2025-12-31')}
    label="Booking Date"
  />
);
```

## Enterprise Scenarios

### Form Integration

Use within a form.

```tsx
import { DatePicker } from 'src/components/DatePicker';

const RegistrationForm = () => (
  <form onSubmit={handleSubmit}>
    <DatePicker
      required
      label="Date of Birth"
      name="dob"
      format="YYYY-MM-DD"
    />
    <button type="submit">Submit</button>
  </form>
);
```

## Accessibility Example

Supports keyboard navigation in calendar.

```tsx
import { DatePicker } from 'src/components/DatePicker';

const A11yExample = () => (
  <DatePicker
    label="Accessible Date"
    placeholder="MM/DD/YYYY"
  />
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-datepicker.css`**
```css
.custom-datepicker {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { DatePicker } from 'src/components/DatePicker';
import './custom-datepicker.css';

const StyledExample = () => (
  <DatePicker className="custom-datepicker">
    Custom Styled Content
  </DatePicker>
);
```
