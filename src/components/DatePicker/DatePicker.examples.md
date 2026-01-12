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
