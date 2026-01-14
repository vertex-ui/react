import type { Meta, StoryObj } from '@storybook/react';
import type { WidgetConfig } from '../../types';
import { Widget } from '../..';

const meta: Meta<typeof Widget> = {
    title: 'Widgets/ContentBlock/Feature Highlight',
    component: Widget,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Widget>;

const CheckIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const StarIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);

export const Interactive: Story = {
    name: 'Interactive Feature Highlight',
    argTypes: {
        contentAlign: {
            control: 'select',
            options: ['left', 'center', 'right'],
            description: 'Alignment of the content'
        },
        gap: {
            control: 'text',
            description: 'Vertical gap (e.g., md, lg, 2rem, 24px)'
        },
        captionStyle: {
            control: 'radio',
            options: ['text', 'badge'],
            description: 'Style of the caption'
        },
        captionGap: {
            control: 'text',
            description: 'Specific gap for caption (e.g. sm, 1rem)'
        },
        caption: { control: 'text', description: 'Caption text' },
        heading: { control: 'text', description: 'Heading text' },
        subheading: { control: 'text', description: 'Subheading text' },
        description: { control: 'text', description: 'Body text' },
    },
    args: {
        contentAlign: 'left',
        gap: 'md',
        captionStyle: 'text',
        caption: 'Interactive Demo',
        heading: 'Flexible List System',
        subheading: 'Now with intelligent adaptation',
        description: 'The list below demonstrates the new capabilities: custom icon sizes, images as icons, and rich descriptions.',
    } as any,
    render: (args: any) => {
        const config: WidgetConfig = {
            type: 'contentBlock',
            theme: 'feature-highlight',
            data: {
                content: {
                    caption: args.caption,
                    captionStyle: args.captionStyle,
                    heading: args.heading,
                    subheading: args.subheading,
                    body: args.description,
                    list: [
                        {
                            label: 'Custom Icon Size',
                            description: 'This icon is overridden to 2rem size.',
                            icon: <StarIcon />,
                            iconVariant: 'warning',
                            iconSize: '2rem'
                        },
                        {
                            label: 'Standard Item',
                            description: 'Standard icon size with description.',
                            icon: <CheckIcon />,
                            iconVariant: 'success'
                        },
                        {
                            label: 'Image as Icon',
                            description: 'Using a direct image node with custom dimensions.',
                            image: <img src="https://ui-avatars.com/api/?name=Img&background=random" alt="demo" style={{ borderRadius: '4px', verticalAlign: 'top' }} />,
                            imageWidth: '32px',
                            imageHeight: '32px'
                        }
                    ],
                },
                actions: [
                    { label: 'Primary Action', variant: 'primary' },
                    { label: 'Secondary', variant: 'outline' },
                ],
            },
            settings: {
                contentAlign: args.contentAlign,
                gap: args.gap,
                spacing: {
                    caption: args.captionGap
                }
            },
        };

        return <Widget config={config} />;
    }
};
