import type { Meta, StoryObj } from '@storybook/react';
import type { WidgetConfig } from '../../types';
import { Widget } from '../..';

const meta: Meta<typeof Widget> = {
    title: 'Widgets/ContentBlock/Advanced',
    component: Widget,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Widget>;

export const ConfigurableTypography: Story = {
    name: 'Configurable Typography',
    args: {
        config: {
            type: 'contentBlock',
            theme: 'feature-highlight',
            data: {
                content: {
                    caption: 'Design Flexibility',
                    heading: 'Custom Typography',
                    subheading: 'Override any text style',
                    body: 'This block demonstrates how you can use the settings prop to fully customize the typography of each element, including HTML tags, colors, and weights.',
                },
                actions: [
                    { label: 'Documentation', variant: 'primary' },
                ],
            },
            settings: {
                contentAlign: 'center',
                typography: {
                    caption: {
                        variant: 'body2',
                        color: 'secondary',
                        weight: 'semibold',
                        transform: 'uppercase',
                        letterSpacing: 2
                    },
                    heading: {
                        as: 'h1', // Render as H1
                        variant: 'h3', // Look like H3
                        color: 'primary',
                        italic: true
                    },
                    subheading: {
                        variant: 'subtitle1',
                        textColor: '#6366f1', // Custom Hex Color
                        weight: 'bold'
                    },
                    body: {
                        size: 18, // Custom size
                        lineHeight: 1.6
                    }
                }
            },
        } as WidgetConfig,
    },
};
