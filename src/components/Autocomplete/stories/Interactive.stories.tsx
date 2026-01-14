import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '..';
import { UserIcon, BuildingIcon, MapPinIcon } from '../../../icons/IconComponents';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const basicOptions = [
  { value: '1', label: 'Apple' },
  { value: '2', label: 'Banana' },
  { value: '3', label: 'Cherry' },
  { value: '4', label: 'Date' },
  { value: '5', label: 'Elderberry' },
];

const peopleOptions = [
  {
    value: '1',
    label: 'John Doe',
    description: 'Software Engineer',
    icon: <UserIcon size={20} />,
  },
  {
    value: '2',
    label: 'Jane Smith',
    description: 'Product Manager',
    icon: <UserIcon size={20} />,
  },
  {
    value: '3',
    label: 'Mike Johnson',
    description: 'UX Designer',
    icon: <UserIcon size={20} />,
  },
];

const companyOptions = [
  {
    value: '1',
    name: 'Acme Corporation',
    category: 'Technology',
    icon: <BuildingIcon size={20} />,
  },
  {
    value: '2',
    name: 'Global Industries',
    category: 'Manufacturing',
    icon: <BuildingIcon size={20} />,
  },
  {
    value: '3',
    name: 'Tech Solutions Inc.',
    category: 'Software',
    icon: <BuildingIcon size={20} />,
  },
];

const locationOptions = [
  {
    id: 'nyc',
    city: 'New York',
    country: 'USA',
    icon: <MapPinIcon size={20} />,
  },
  {
    id: 'ldn',
    city: 'London',
    country: 'UK',
    icon: <MapPinIcon size={20} />,
  },
  {
    id: 'tky',
    city: 'Tokyo',
    country: 'Japan',
    icon: <MapPinIcon size={20} />,
  },
];

export const Default: Story = {
  args: {
    placeholder: 'Type to search...',
    options: basicOptions,
    label: 'Search',
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: 'Search people...',
    options: peopleOptions,
    label: 'Assignee',
  },
};

export const WithCategories: Story = {
  args: {
    placeholder: 'Search companies...',
    options: companyOptions,
    label: 'Client',
  },
};

export const Advanced: Story = {
  args: {
    placeholder: 'Search locations...',
    options: locationOptions,
    label: 'Location',
  },
};
