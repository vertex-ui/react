import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Table } from '../../src/components/Table';

interface TestData {
  id: number;
  name: string;
  age: number;
}

describe('Table', () => {
  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
  ];

  const data: TestData[] = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
  ];

  const getRowKey = (row: TestData) => row.id;

  it('renders table with data', () => {
    render(<Table columns={columns} data={data} getRowKey={getRowKey} />);
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  it('renders empty state when no data', () => {
    render(<Table columns={columns} data={[]} getRowKey={getRowKey} emptyMessage="No data" />);
    expect(screen.getByText('No data')).toBeInTheDocument();
  });

  it('renders loading state', () => {
    render(<Table columns={columns} data={data} getRowKey={getRowKey} loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('handles sorting', () => {
    render(<Table columns={columns} data={data} getRowKey={getRowKey} sortable />);

    // Click on Name header to sort
    const nameHeader = screen.getByText('Name');
    fireEvent.click(nameHeader);

    // Should render sorted data (Bob, Jane, John alphabetically)
    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('Bob');
  });

  it('handles row selection', () => {
    const onRowSelect = jest.fn();
    const isRowSelected = jest.fn(() => false);
    render(
      <Table
        columns={columns}
        data={data}
        getRowKey={getRowKey}
        isRowSelected={isRowSelected}
        onRowSelect={onRowSelect}
      />
    );

    // Click on first data cell
    const firstCell = screen.getByText('John');
    fireEvent.click(firstCell);

    expect(onRowSelect).toHaveBeenCalled();
  });

  it('applies striped style', () => {
    const { container } = render(
      <Table columns={columns} data={data} getRowKey={getRowKey} striped />
    );
    const table = container.querySelector('table');
    expect(table).toHaveClass('vtx-table--striped');
  });

  it('applies bordered style', () => {
    const { container } = render(
      <Table columns={columns} data={data} getRowKey={getRowKey} bordered />
    );
    const table = container.querySelector('table');
    expect(table).toHaveClass('vtx-table--bordered');
  });

  it('applies hoverable style', () => {
    const { container } = render(
      <Table columns={columns} data={data} getRowKey={getRowKey} hoverable />
    );
    const table = container.querySelector('table');
    expect(table).toHaveClass('vtx-table--hoverable');
  });

  it('renders custom cell content with render function', () => {
    const columnsWithRender = [
      { key: 'id', header: 'ID' },
      {
        key: 'name',
        header: 'Name',
        render: (row: TestData) => <strong>{row.name}</strong>,
      },
    ];

    render(<Table columns={columnsWithRender} data={data} getRowKey={getRowKey} />);
    const strongElement = screen.getByText('John').closest('strong');
    expect(strongElement).toBeInTheDocument();
  });
});
