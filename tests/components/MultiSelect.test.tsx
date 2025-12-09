import React from 'react';
import { render, screen, fireEvent, within } from '../test-utils';
import '@testing-library/jest-dom';
import { MultiSelect } from '../../src/components/MultiSelect';

const mockOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3', disabled: true },
  { value: '4', label: 'Option 4' },
];

const groupedOptions = [
  { value: 'react', label: 'React', group: 'Frontend' },
  { value: 'vue', label: 'Vue', group: 'Frontend' },
  { value: 'node', label: 'Node.js', group: 'Backend' },
  { value: 'python', label: 'Python', group: 'Backend' },
];

describe('MultiSelect', () => {
  it('renders with label', () => {
    render(<MultiSelect label="Select Items" options={mockOptions} />);
    expect(screen.getByText('Select Items')).toBeInTheDocument();
  });

  it('shows placeholder when no options selected', () => {
    render(<MultiSelect placeholder="Choose options" options={mockOptions} />);
    expect(screen.getByText('Choose options')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', () => {
    render(<MultiSelect options={mockOptions} />);

    const container = screen.getByRole('button');
    fireEvent.click(container);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('selects option with checkbox style', () => {
    const handleChange = jest.fn();
    render(<MultiSelect options={mockOptions} onChange={handleChange} selectionStyle="checkbox" />);

    const container = screen.getByRole('button');
    fireEvent.click(container);

    const option1 = screen.getByText('Option 1');
    fireEvent.click(option1);

    expect(handleChange).toHaveBeenCalledWith(['1'], [mockOptions[0]]);
  });

  it('selects option with checkmark style', () => {
    const handleChange = jest.fn();
    render(
      <MultiSelect options={mockOptions} onChange={handleChange} selectionStyle="checkmark" />
    );

    const container = screen.getByRole('button');
    fireEvent.click(container);

    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);

    expect(handleChange).toHaveBeenCalledWith(['2'], [mockOptions[1]]);
  });

  it('displays selected options as chips', () => {
    render(<MultiSelect options={mockOptions} value={['1', '2']} />);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('removes chip when delete button is clicked', () => {
    const handleChange = jest.fn();
    render(<MultiSelect options={mockOptions} value={['1', '2']} onChange={handleChange} />);

    const removeButtons = screen.getAllByRole('button', { name: /remove/i });
    fireEvent.click(removeButtons[0]);

    expect(handleChange).toHaveBeenCalledWith(['2'], [mockOptions[1]]);
  });

  it('selects multiple options', () => {
    const handleChange = jest.fn();
    render(<MultiSelect options={mockOptions} onChange={handleChange} />);

    const container = screen.getByRole('button');
    fireEvent.click(container);

    fireEvent.click(screen.getByText('Option 1'));
    fireEvent.click(screen.getByText('Option 2'));

    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenNthCalledWith(2, ['1', '2'], [mockOptions[0], mockOptions[1]]);
  });

  it('deselects option when clicked again', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <MultiSelect options={mockOptions} value={['1']} onChange={handleChange} />
    );

    const inputArea = container.querySelector('.vtx-multiselect-input-area')!;
    fireEvent.click(inputArea);

    const option = container.querySelector('.vtx-multiselect-option')!;
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith([], []);
  });

  it('disables option selection for disabled options', () => {
    const handleChange = jest.fn();
    render(<MultiSelect options={mockOptions} onChange={handleChange} />);

    const container = screen.getByRole('button');
    fireEvent.click(container);

    const option3 = screen.getByText('Option 3');
    fireEvent.click(option3);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('shows search input when searchable is true', () => {
    render(<MultiSelect options={mockOptions} searchable />);

    const container = screen.getByRole('button');
    fireEvent.click(container);

    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });

  it('filters options based on search query', () => {
    render(<MultiSelect options={mockOptions} searchable />);

    const container = screen.getByRole('button');
    fireEvent.click(container);

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'Option 1' } });

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
  });

  it('shows Select All and Clear All buttons when showSelectAll is true', () => {
    render(<MultiSelect options={mockOptions} showSelectAll />);

    const container = screen.getByRole('button');
    fireEvent.click(container);

    expect(screen.getByText('Select All')).toBeInTheDocument();
    expect(screen.getByText('Clear All')).toBeInTheDocument();
  });

  it('selects all non-disabled options when Select All is clicked', () => {
    const handleChange = jest.fn();
    render(<MultiSelect options={mockOptions} onChange={handleChange} showSelectAll />);

    const container = screen.getByRole('button');
    fireEvent.click(container);

    const selectAllButton = screen.getByText('Select All');
    fireEvent.click(selectAllButton);

    // Should select all except disabled option (Option 3)
    expect(handleChange).toHaveBeenCalledWith(
      ['1', '2', '4'],
      [mockOptions[0], mockOptions[1], mockOptions[3]]
    );
  });

  it('clears all selections when Clear All is clicked', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <MultiSelect options={mockOptions} value={['1', '2']} onChange={handleChange} showSelectAll />
    );

    const inputArea = container.querySelector('.vtx-multiselect-input-area')!;
    fireEvent.click(inputArea);

    const clearAllButton = screen.getByText('Clear All');
    fireEvent.click(clearAllButton);

    expect(handleChange).toHaveBeenCalledWith([], []);
  });

  it('displays grouped options correctly', () => {
    const { container } = render(<MultiSelect options={groupedOptions} grouped />);

    const inputArea = container.querySelector('.vtx-multiselect-input-area')!;
    fireEvent.click(inputArea);

    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('shows limited chips with "+N more" when maxChipsDisplay is set', () => {
    render(<MultiSelect options={mockOptions} value={['1', '2', '4']} maxChipsDisplay={2} />);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('+1 more')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { rerender, container } = render(<MultiSelect options={mockOptions} size="small" />);
    expect(container.querySelector('.vtx-multiselect-container')).toHaveClass(
      'vtx-multiselect-container--small'
    );

    rerender(<MultiSelect options={mockOptions} size="large" />);
    expect(container.querySelector('.vtx-multiselect-container')).toHaveClass(
      'vtx-multiselect-container--large'
    );
  });

  it('applies error state correctly', () => {
    const { container } = render(<MultiSelect options={mockOptions} error="Required field" />);

    expect(container.querySelector('.vtx-multiselect-container')).toHaveClass(
      'vtx-multiselect-container--error'
    );
    expect(screen.getByText('Required field')).toBeInTheDocument();
  });

  it('applies success state correctly', () => {
    const { container } = render(<MultiSelect options={mockOptions} success="Looks good!" />);

    expect(container.querySelector('.vtx-multiselect-container')).toHaveClass(
      'vtx-multiselect-container--success'
    );
    expect(screen.getByText('Looks good!')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(<MultiSelect options={mockOptions} helperText="Select multiple items" />);
    expect(screen.getByText('Select multiple items')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<MultiSelect label="Required Field" options={mockOptions} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('disables component when disabled prop is true', () => {
    const { container } = render(<MultiSelect options={mockOptions} disabled />);

    expect(container.querySelector('.vtx-multiselect-container')).toHaveClass(
      'vtx-multiselect-container--disabled'
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Dropdown should not open
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('applies fullWidth class when fullWidth is true', () => {
    const { container } = render(<MultiSelect options={mockOptions} fullWidth />);
    expect(container.querySelector('.vtx-multiselect-wrapper')).toHaveClass(
      'vtx-multiselect-wrapper--full-width'
    );
  });

  it('works with custom getters', () => {
    const customData = [
      { id: 1, name: 'Item 1', active: true },
      { id: 2, name: 'Item 2', active: false },
    ];

    render(
      <MultiSelect
        options={customData as any}
        getOptionLabel="name"
        getOptionValue="id"
        getOptionDisabled={(opt) => !opt.active}
      />
    );

    const container = screen.getByRole('button');
    fireEvent.click(container);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', () => {
    render(
      <div>
        <MultiSelect options={mockOptions} />
        <div data-testid="outside">Outside</div>
      </div>
    );

    const container = screen.getByRole('button');
    fireEvent.click(container);
    expect(screen.getByText('Option 1')).toBeInTheDocument();

    const outside = screen.getByTestId('outside');
    fireEvent.mouseDown(outside);

    // Dropdown should close (options not visible)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('handles keyboard navigation for opening dropdown', () => {
    render(<MultiSelect options={mockOptions} />);

    const container = screen.getByRole('button');

    fireEvent.keyDown(container, { key: 'Enter' });
    expect(screen.getByText('Option 1')).toBeInTheDocument();

    fireEvent.keyDown(container, { key: 'Enter' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('shows empty state when no options match search', () => {
    render(<MultiSelect options={mockOptions} searchable />);

    const container = screen.getByRole('button');
    fireEvent.click(container);

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'NonExistent' } });

    expect(screen.getByText('No options found')).toBeInTheDocument();
  });

  it('applies custom chip color and variant', () => {
    render(
      <MultiSelect options={mockOptions} value={['1']} chipColor="success" chipVariant="outlined" />
    );

    const chip = screen.getByText('Option 1').parentElement;
    expect(chip).toHaveClass('vtx-chip--success');
    expect(chip).toHaveClass('vtx-chip--outlined');
  });

  it('works as uncontrolled component with defaultValue', () => {
    render(<MultiSelect options={mockOptions} defaultValue={['1']} />);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders hidden select for form integration', () => {
    const { container } = render(
      <MultiSelect options={mockOptions} name="items" value={['1', '2']} />
    );

    const hiddenSelect = container.querySelector('select[name="items"]');
    expect(hiddenSelect).toBeInTheDocument();
    expect(hiddenSelect).toHaveClass('vtx-multiselect-hidden-select');
  });

  it('applies custom className', () => {
    const { container } = render(<MultiSelect options={mockOptions} className="custom-class" />);
    expect(container.querySelector('.vtx-multiselect-wrapper')).toHaveClass('custom-class');
  });

  it('shows loading spinner in icon when loading prop is true', () => {
    const { container } = render(<MultiSelect options={mockOptions} loading />);

    const spinner = container.querySelector('.vtx-multiselect-icon-spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('shows loading spinner instead of chevron icon', () => {
    const { container } = render(<MultiSelect options={mockOptions} loading />);

    // Spinner should be present
    const spinner = container.querySelector('.vtx-multiselect-icon-spinner');
    expect(spinner).toBeInTheDocument();

    // Regular chevron path should not be present
    const chevronPath = container.querySelector(
      '.vtx-multiselect-icon svg path[d="M4 6L8 10L12 6"]'
    );
    expect(chevronPath).not.toBeInTheDocument();
  });

  it('still allows opening dropdown when loading', () => {
    render(<MultiSelect options={mockOptions} loading />);

    const container = screen.getByRole('button');
    fireEvent.click(container);

    // Dropdown should open and show options (loading doesn't prevent opening)
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });
});
