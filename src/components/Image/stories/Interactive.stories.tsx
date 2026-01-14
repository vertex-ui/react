import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '..';

const meta: Meta<typeof Image> = {
    title: 'Components/Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        src: { control: 'text' },
        alt: { control: 'text' },
        fallback: { control: 'text' },
        priority: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYWRpZW50fGVufDB8fDB8fHww',
        alt: 'Colorful Gradient',
        style: { width: 300, height: 200, borderRadius: 8 },
    },
};
