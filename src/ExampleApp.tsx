import { useState } from 'react';
import {
  Avatar,
  Badge,
  Button,
  Input,
  Modal,
  Select,
  Table,
  ThemeProvider,
  Tooltip,
} from './index';

/**
 * Example application demonstrating all components
 */
export function ExampleApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ];

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
  ];

  type TableRow = { id: number; name: string; email: string; status: string };

  const tableColumns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    {
      key: 'status',
      header: 'Status',
      render: (row: TableRow) => (
        <Badge variant={row.status === 'active' ? 'success' : 'neutral'}>{row.status}</Badge>
      ),
    },
  ];

  return (
    <ThemeProvider>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>VTX UI Component Library</h1>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Buttons</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Form Inputs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              helperText="We'll never share your email"
            />
            <Input
              label="Search"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<span>🔍</span>}
            />
            <Select label="Country" options={countries} placeholder="Select a country" />
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Modal</h2>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Example Modal"
            footer={
              <>
                <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                  Confirm
                </Button>
              </>
            }
          >
            <p>This is an example modal with footer actions.</p>
          </Modal>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Table</h2>
          <Table columns={tableColumns} data={tableData} getRowKey={(row) => row.id} striped />
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Badges & Avatars</h2>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success" dot>
              Active
            </Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info" pill>
              New
            </Badge>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
            <Avatar fallback="JD" />
            <Avatar fallback="AS" size="large" />
            <Avatar fallback="BJ" shape="square" />
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Tooltip</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Tooltip content="This is a helpful tooltip" placement="top">
              <Button>Hover me</Button>
            </Tooltip>
            <Tooltip content="Tooltip on the right" placement="right">
              <Button variant="secondary">Right</Button>
            </Tooltip>
            <Tooltip content="Tooltip on the bottom" placement="bottom">
              <Button variant="outline">Bottom</Button>
            </Tooltip>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}
