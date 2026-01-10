# DatePicker Component

A comprehensive date picker component featuring a calendar dropdown, keyboard navigation, and customizable date constraints.

## Features

- **Input & Calendar**: Combines a text input with a popover calendar.
- **Date Constraints**: Support for min/max dates and specific disabled dates.
- **Navigation**: Month and year navigation within the calendar.
- **Keyboard Support**: Full keyboard accessibility.
- **Format**: Customizable date display format (default: MM/DD/YYYY).
- **Validation**: Integration with error and success states.
- **Helper Features**: "Today" shortcut and clearable options.

## Installation

```tsx
import { DatePicker } from '@vtx-ui/react';
```

## Basic Usage

```tsx
const [date, setDate] = useState(null);

<DatePicker
  label="Select Date"
  value={date}
  onChange={setDate}
/>
```

## Date Constraints

Restrict selectable dates.

```tsx
<DatePicker
  minDate={new Date()} // Disable past dates
  maxDate={new Date('2025-12-31')}
  label="Future Appointment"
/>
```

## Disabled Dates

Disable specific dates (e.g., weekends or holidays).

```tsx
<DatePicker
  isDateDisabled={(date) => date.getDay() === 0 || date.getDay() === 6}
  label="Weekdays Only"
/>
```

## Formatting

Customize how the date is displayed in the input.

```tsx
<DatePicker
  format="YYYY-MM-DD"
  placeholder="YYYY-MM-DD"
  label="ISO Date"
/>
```

## Validation

Display error or success messages.

```tsx
<DatePicker
  error="Invalid date selection"
  label="Birth Date"
/>

<DatePicker
  success="Date available"
  label="Booking Date"
/>
```

## Clearable

Allow users to clear the selection.

```tsx
<DatePicker
  clearable
  value={selectedDate}
  onChange={setSelectedDate}
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date \| null` | - | Selected date |
| `onChange` | `(date: Date \| null) => void` | - | Change handler |
| `label` | `string` | - | Input label |
| `placeholder` | `string` | `'Select date'` | Input placeholder |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |
| `disabledDates` | `Date[]` | - | Array of disabled dates |
| `isDateDisabled` | `(date: Date) => boolean` | - | Function to disable specific dates |
| `format` | `string` | `'MM/DD/YYYY'` | Date display format |
| `showToday` | `boolean` | `true` | Show "Today" button |
| `clearable` | `boolean` | `false` | Show clear button |
| `disabled` | `boolean` | `false` | Disable input |
| `error` | `string` | - | Error message |
| `success` | `string` | - | Success message |

## Accessibility

- Input field allows manual typing.
- Calendar popover is focus-managed.
- Keyboard shortcuts supported (Escape to close, Arrows to navigate calendar).
- ARIA labels for calendar controls.
