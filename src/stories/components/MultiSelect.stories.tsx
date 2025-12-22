import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from '../../components/MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const skillOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'node', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
];

const categoryOptions = [
  { value: 'frontend', label: 'Frontend Development', group: 'Development' },
  { value: 'backend', label: 'Backend Development', group: 'Development' },
  { value: 'mobile', label: 'Mobile Development', group: 'Development' },
  { value: 'ui', label: 'UI/UX Design', group: 'Design' },
  { value: 'graphic', label: 'Graphic Design', group: 'Design' },
  { value: 'marketing', label: 'Digital Marketing', group: 'Marketing' },
  { value: 'seo', label: 'SEO Optimization', group: 'Marketing' },
];

export const Default: Story = {
  args: {
    options: skillOptions,
    placeholder: 'Select skills',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Technical Skills',
    options: skillOptions,
    placeholder: 'Choose your skills',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Your Skills',
    options: skillOptions,
    placeholder: 'Select multiple skills',
    helperText: 'Select all the technologies you are comfortable working with.',
  },
};

export const WithDefaultValues: Story = {
  args: {
    label: 'Preferred Technologies',
    options: skillOptions,
    defaultValue: ['javascript', 'react', 'typescript'],
    placeholder: 'Add more skills',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Skills',
    options: skillOptions,
    placeholder: 'Select at least one skill',
    error: 'Please select at least one skill.',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Skills Verified',
    options: skillOptions,
    value: ['javascript', 'react'],
    success: 'Skills validated successfully!',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Skills (Disabled)',
    options: skillOptions,
    placeholder: 'Cannot select',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small MultiSelect',
    options: skillOptions,
    placeholder: 'Select skills',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large MultiSelect',
    options: skillOptions,
    placeholder: 'Select skills',
    size: 'lg',
  },
};

export const Grouped: Story = {
  args: {
    label: 'Areas of Expertise',
    options: categoryOptions,
    placeholder: 'Select your expertise areas',
    helperText: 'Options are grouped by category.',
  },
};

export const MaxSelection: Story = {
  args: {
    label: 'Top 3 Skills',
    options: skillOptions,
    placeholder: 'Select up to 3 skills',

    helperText: 'You can select a maximum of 3 skills.',
  },
};

export const Searchable: Story = {
  args: {
    label: 'Find Skills',
    options: skillOptions,
    placeholder: 'Search and select skills',
    searchable: true,
    helperText: 'Type to search through available options.',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Skills',
    options: skillOptions,
    placeholder: 'Select your skills',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <MultiSelect
        label="Small MultiSelect"
        size="sm"
        options={skillOptions}
        placeholder="Select skills"
      />
      <MultiSelect
        label="Medium MultiSelect"
        size="md"
        options={skillOptions}
        placeholder="Select skills"
      />
      <MultiSelect
        label="Large MultiSelect"
        size="lg"
        options={skillOptions}
        placeholder="Select skills"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};