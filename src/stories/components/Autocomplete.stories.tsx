import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '../../components/Autocomplete';
import { UserIcon, BuildingIcon, MapPinIcon } from '../../icons/IconComponents';

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

export const WithLabel: Story = {
  args: {
    label: 'Choose a fruit',
    placeholder: 'Select...',
    options: basicOptions,
  },
};

export const WithSearchIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    options: basicOptions,
    showSearchIcon: true,
  },
};

export const Clearable: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    options: basicOptions,
    clearable: true,
    showSearchIcon: true,
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Select a person',
    placeholder: 'Search people...',
    options: peopleOptions,
    showSearchIcon: true,
    clearable: true,
  },
};

export const CustomGetters: Story = {
  args: {
    label: 'Select a company',
    placeholder: 'Search companies...',
    options: companyOptions,
    getOptionLabel: 'name',
    getOptionValue: 'value',
    getOptionDescription: 'category',
    getOptionIcon: 'icon',
    showSearchIcon: true,
  },
};

export const WithFunctions: Story = {
  args: {
    label: 'Select a location',
    placeholder: 'Search locations...',
    options: locationOptions,
    getOptionLabel: (opt: any) => opt.city,
    getOptionValue: (opt: any) => opt.id,
    getOptionDescription: (opt: any) => opt.country,
    getOptionIcon: (opt: any) => opt.icon,
    showSearchIcon: true,
    clearable: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    options: [],
    loading: true,
    loadingMessage: 'Searching...',
    showSearchIcon: true,
  },
};

export const NoOptions: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    options: [],
    noOptionsMessage: 'No results found',
    showSearchIcon: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    options: basicOptions,
    fullWidth: true,
    showSearchIcon: true,
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    options: basicOptions,
    size: 'sm',
    showSearchIcon: true,
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    options: basicOptions,
    size: 'lg',
    showSearchIcon: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    options: basicOptions,
    error: 'This field is required',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    options: basicOptions,
    success: 'Selection saved successfully',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    options: basicOptions,
    helperText: 'Start typing to see suggestions',
  },
};
