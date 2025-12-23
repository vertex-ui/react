import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, DateRangePicker } from '../../components/DatePicker';
import { useState } from 'react';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    format: {
      control: { type: 'select' },
      options: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic date picker with label and placeholder
 */
export const Basic: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    
    return (
      <DatePicker
        label="Birth Date"
        placeholder="Select your birth date"
        value={date}
        onChange={setDate}
        helperText="Choose a date from the calendar"
      />
    );
  },
};

/**
 * Date picker with default value
 */
export const WithValue: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    
    return (
      <DatePicker
        label="Event Date"
        placeholder="Select event date"
        value={date}
        onChange={setDate}
      />
    );
  },
};

/**
 * Date picker with validation states
 */
export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <DatePicker
        label="Valid Date"
        value={new Date()}
        onChange={() => {}}
        success="Date is valid"
      />
      
      <DatePicker
        label="Invalid Date"
        placeholder="Select date"
        error="Date is required"
      />
      
      <DatePicker
        label="Disabled Date"
        placeholder="Cannot select"
        disabled
      />
    </div>
  ),
};

/**
 * Date picker with constraints
 */
export const WithConstraints: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30);
    
    return (
      <DatePicker
        label="Appointment Date"
        placeholder="Select appointment date"
        value={date}
        onChange={setDate}
        minDate={today}
        maxDate={maxDate}
        helperText="Select a date within the next 30 days"
      />
    );
  },
};

/**
 * Date picker with disabled dates
 */
export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    
    // Disable weekends
    const isWeekend = (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6; // Sunday or Saturday
    };
    
    return (
      <DatePicker
        label="Business Date"
        placeholder="Select business day"
        value={date}
        onChange={setDate}
        isDateDisabled={isWeekend}
        helperText="Weekends are disabled"
      />
    );
  },
};

/**
 * Date picker with different formats
 */
export const DateFormats: Story = {
  render: () => {
    const [date1, setDate1] = useState<Date | null>(null);
    const [date2, setDate2] = useState<Date | null>(null);
    const [date3, setDate3] = useState<Date | null>(null);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
        <DatePicker
          label="US Format (MM/DD/YYYY)"
          format="MM/DD/YYYY"
          value={date1}
          onChange={setDate1}
        />
        
        <DatePicker
          label="European Format (DD/MM/YYYY)"
          format="DD/MM/YYYY"
          value={date2}
          onChange={setDate2}
        />
        
        <DatePicker
          label="ISO Format (YYYY-MM-DD)"
          format="YYYY-MM-DD"
          value={date3}
          onChange={setDate3}
        />
      </div>
    );
  },
};

/**
 * Date picker sizes
 */
export const Sizes: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
        <DatePicker
          label="Small Size"
          size="sm"
          value={date}
          onChange={setDate}
        />
        
        <DatePicker
          label="Medium Size (default)"
          size="md"
          value={date}
          onChange={setDate}
        />
        
        <DatePicker
          label="Large Size"
          size="lg"
          value={date}
          onChange={setDate}
        />
      </div>
    );
  },
};

/**
 * Full width date picker
 */
export const FullWidth: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    
    return (
      <div style={{ width: '400px' }}>
        <DatePicker
          label="Full Width Date Picker"
          placeholder="Select date"
          value={date}
          onChange={setDate}
          fullWidth
          helperText="This date picker takes the full width of its container"
        />
      </div>
    );
  },
};

/**
 * Date picker without today button
 */
export const WithoutTodayButton: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    
    return (
      <DatePicker
        label="Simple Date Picker"
        placeholder="Select date"
        value={date}
        onChange={setDate}
        showToday={false}
      />
    );
  },
};

/**
 * Date picker with clearable functionality
 */
export const Clearable: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
        <DatePicker
          label="Clearable Date Picker"
          placeholder="Select date"
          value={date}
          onChange={setDate}
          clearable
          helperText="Shows clear button when there's a value"
        />
        
        <DatePicker
          label="Non-clearable Date Picker"
          placeholder="Select date"
          value={date}
          onChange={setDate}
          clearable={false}
          helperText="Always shows calendar icon"
        />
      </div>
    );
  },
};

/**
 * Date range picker basic usage
 */
export const DateRangeBasic: Story = {
  render: () => {
    const [range, setRange] = useState<{start: Date | null, end: Date | null}>({ start: null, end: null });
    
    return (
      <DateRangePicker
        label="Date Range"
        startPlaceholder="Start date"
        endPlaceholder="End date"
        value={range}
        onChange={setRange}
        helperText="Select a date range from the calendar"
      />
    );
  },
};

/**
 * Date range picker with presets
 */
export const DateRangeWithPresets: Story = {
  render: () => {
    const [range, setRange] = useState<{start: Date | null, end: Date | null}>({ start: null, end: null });
    
    return (
      <DateRangePicker
        label="Reporting Period"
        value={range}
        onChange={setRange}
        helperText="Use presets for quick selection or pick custom dates"
        clearable
      />
    );
  },
};

/**
 * Date range picker with custom presets
 */
export const DateRangeCustomPresets: Story = {
  render: () => {
    const [range, setRange] = useState<{start: Date | null, end: Date | null}>({ start: null, end: null });
    
    const customPresets = [
      {
        label: 'Next 7 days',
        range: {
          start: new Date(),
          end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      },
      {
        label: 'Next 30 days',
        range: {
          start: new Date(),
          end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      },
      {
        label: 'Q1 2024',
        range: {
          start: new Date(2024, 0, 1),
          end: new Date(2024, 2, 31),
        },
      },
    ];
    
    return (
      <DateRangePicker
        label="Custom Presets"
        value={range}
        onChange={setRange}
        presets={customPresets}
        helperText="Custom preset options for specific use cases"
      />
    );
  },
};

/**
 * Date range picker without presets
 */
export const DateRangeNoPresets: Story = {
  render: () => {
    const [range, setRange] = useState<{start: Date | null, end: Date | null}>({ start: null, end: null });
    
    return (
      <DateRangePicker
        label="Simple Range Picker"
        value={range}
        onChange={setRange}
        presets={[]}
        helperText="Range picker without preset options"
      />
    );
  },
};

/**
 * Date range picker with different separator
 */
export const DateRangeCustomSeparator: Story = {
  render: () => {
    const [range, setRange] = useState<{start: Date | null, end: Date | null}>({ start: null, end: null });
    
    return (
      <DateRangePicker
        label="Custom Separator"
        value={range}
        onChange={setRange}
        separator="→"
        helperText="Using custom separator between dates"
      />
    );
  },
};

/**
 * Complete booking form example
 */
export const BookingForm: Story = {
  render: () => {
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    
    const today = new Date();
    const maxCheckIn = new Date();
    maxCheckIn.setFullYear(today.getFullYear() + 1);
    
    return (
      <form style={{ width: '500px', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '24px', color: '#1a202c' }}>Hotel Booking</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          <DatePicker
            label="Check-in Date"
            placeholder="Select check-in"
            value={checkIn}
            onChange={setCheckIn}
            minDate={today}
            maxDate={maxCheckIn}
            required
          />
          
          <DatePicker
            label="Check-out Date"
            placeholder="Select check-out"
            value={checkOut}
            onChange={setCheckOut}
            minDate={checkIn || today}
            maxDate={maxCheckIn}
            required
          />
        </div>
        
        <DatePicker
          label="Date of Birth"
          placeholder="DD/MM/YYYY"
          format="DD/MM/YYYY"
          value={birthDate}
          onChange={setBirthDate}
          maxDate={today}
          helperText="Must be 18 years or older"
          required
        />
        
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
          <button 
            type="submit" 
            style={{ 
              padding: '8px 16px', 
              backgroundColor: '#3182ce', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Book Now
          </button>
          <button 
            type="button" 
            style={{ 
              padding: '8px 16px', 
              backgroundColor: 'transparent', 
              color: '#3182ce', 
              border: '1px solid #3182ce', 
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  },
};