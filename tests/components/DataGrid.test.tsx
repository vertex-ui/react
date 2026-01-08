import React from 'react';
import { render, screen } from '../test-utils';
import { DataGrid } from '../../src/components/DataGrid/DataGrid';

describe('DataGrid', () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
  ];

  const rows = [
    { id: 1, firstName: 'Jon', lastName: 'Snow' },
    { id: 2, firstName: 'Cersei', lastName: 'Lannister' },
  ];

  it('renders rows and columns', () => {
    render(<DataGrid rows={rows} columns={columns} />);

    // Check headers
    expect(screen.getByText('First name')).toBeInTheDocument();
    expect(screen.getByText('Last name')).toBeInTheDocument();

    // Check rows
    expect(screen.getByText('Jon')).toBeInTheDocument();
    expect(screen.getByText('Snow')).toBeInTheDocument();
    expect(screen.getByText('Cersei')).toBeInTheDocument();
  });

  it('renders checkbox when checkboxSelection is true', () => {
    render(<DataGrid rows={rows} columns={columns} checkboxSelection />);
    // There should be checkboxes for header + 2 rows
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
  });
});
