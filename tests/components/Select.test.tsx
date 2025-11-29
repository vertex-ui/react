import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '../../src/components/Select';

describe('Select', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  it('renders with options', () => {
    render(<Select options={options} />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Select label="Choose Option" options={options} />);
    expect(screen.getByText('Choose Option')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Select placeholder="Select..." options={options} />);
    expect(screen.getByText('Select...')).toBeInTheDocument();
  });

  it('handles selection change', () => {
    const onChange = jest.fn();
    render(<Select options={options} onChange={onChange} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '2' } });

    expect(onChange).toHaveBeenCalled();
  });

  it('renders with error state', () => {
    const { container } = render(<Select options={options} error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    const selectContainer = container.querySelector('.vtx-select-container');
    expect(selectContainer).toHaveClass('vtx-select-container--error');
  });

  it('renders with success state', () => {
    const { container } = render(
      <Select options={options} success={'success'} helperText="Looks good!" />
    );
    const selectContainer = container.querySelector('.vtx-select-container');
    expect(selectContainer).toHaveClass('vtx-select-container--success');
  });

  it('renders disabled state', () => {
    render(<Select options={options} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  it('renders with grouped options', () => {
    const groupedOptions = [
      { value: '1', label: 'Option 1', group: 'Group 1' },
      { value: '2', label: 'Option 2', group: 'Group 1' },
      { value: '3', label: 'Option 3', group: 'Group 2' },
    ];

    const { container } = render(<Select options={groupedOptions} grouped />);
    const optgroups = container.querySelectorAll('optgroup');
    expect(optgroups[0]).toHaveAttribute('label', 'Group 1');
    expect(optgroups[1]).toHaveAttribute('label', 'Group 2');
  });

  it('applies custom className', () => {
    const { container } = render(<Select options={options} className="custom-select" />);
    const selectContainer = container.querySelector('.vtx-select-container');
    expect(selectContainer).toHaveClass('custom-select');
  });

  it('works with custom getOptionLabel and getOptionValue', () => {
    const customData = [
      { id: 1, name: 'First Item' },
      { id: 2, name: 'Second Item' },
      { id: 3, name: 'Third Item' },
    ];

    render(<Select options={customData as any} getOptionLabel="name" getOptionValue="id" />);

    expect(screen.getByText('First Item')).toBeInTheDocument();
    expect(screen.getByText('Second Item')).toBeInTheDocument();
    expect(screen.getByText('Third Item')).toBeInTheDocument();
  });

  it('works with custom getOptionDisabled', () => {
    const customData = [
      { id: 1, title: 'Active Option', isActive: false },
      { id: 2, title: 'Disabled Option', isActive: true },
    ];

    const { container } = render(
      <Select
        options={customData as any}
        getOptionLabel="title"
        getOptionValue="id"
        getOptionDisabled="isActive"
      />
    );

    const selectOptions = container.querySelectorAll('option');
    expect(selectOptions[0]).not.toBeDisabled();
    expect(selectOptions[1]).toBeDisabled();
  });

  it('works with custom getOptionGroup for grouped options', () => {
    const customData = [
      { productId: 'A1', productName: 'Laptop', category: 'Electronics' },
      { productId: 'A2', productName: 'Mouse', category: 'Electronics' },
      { productId: 'B1', productName: 'Desk', category: 'Furniture' },
    ];

    const { container } = render(
      <Select
        options={customData as any}
        getOptionLabel="productName"
        getOptionValue="productId"
        getOptionGroup="category"
        grouped
      />
    );

    const optgroups = container.querySelectorAll('optgroup');
    expect(optgroups[0]).toHaveAttribute('label', 'Electronics');
    expect(optgroups[1]).toHaveAttribute('label', 'Furniture');

    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Mouse')).toBeInTheDocument();
    expect(screen.getByText('Desk')).toBeInTheDocument();
  });

  it('calls onSelectChange with custom getters', () => {
    const onSelectChange = jest.fn();
    const customData = [
      { userId: 'u1', userName: 'John' },
      { userId: 'u2', userName: 'Jane' },
    ];

    render(
      <Select
        options={customData as any}
        getOptionLabel="userName"
        getOptionValue="userId"
        onSelectChange={onSelectChange}
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'u2' } });

    expect(onSelectChange).toHaveBeenCalledWith('u2', customData[1]);
  });

  it('shows loading spinner in icon when loading prop is true', () => {
    const { container } = render(<Select options={options} loading />);

    const spinner = container.querySelector('.vtx-select-icon-spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('shows loading spinner instead of chevron icon', () => {
    const { container } = render(<Select options={options} loading />);

    // Spinner should be present
    const spinner = container.querySelector('.vtx-select-icon-spinner');
    expect(spinner).toBeInTheDocument();

    // Regular chevron path should not be present
    const chevronPath = container.querySelector('.vtx-select-icon svg path[d="M4 6L8 10L12 6"]');
    expect(chevronPath).not.toBeInTheDocument();
  });

  it('select remains functional when loading', () => {
    const onChange = jest.fn();
    render(<Select options={options} loading onChange={onChange} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '1' } });

    expect(onChange).toHaveBeenCalled();
  });
});
