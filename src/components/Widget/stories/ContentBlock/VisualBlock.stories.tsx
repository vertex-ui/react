import type { Meta, StoryObj } from '@storybook/react';
import type { WidgetConfig } from '../../types';
import { Widget } from '../..';

const meta: Meta<typeof Widget> = {
    title: 'Widgets/ContentBlock/Visual Block',
    component: Widget,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Widget>;

const StarIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);

export const Interactive: Story = {
    name: 'Interactive Visual Block',
    argTypes: {
        contentAlign: {
            control: 'radio',
            options: ['left', 'center', 'right'],
            description: 'Alignment of content'
        },
        imageSrc: { control: 'text', description: 'URL for the image (clear to show icon)' },
        imageWidth: { control: 'text', description: 'Width of the image (e.g. 100%, 300px)' },
        imageHeight: { control: 'text', description: 'Height of the image (e.g. 200px, auto)' },
        imagePriority: { control: 'boolean', description: 'Prioritize image loading (disable lazy load)' },
        iconSize: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            description: 'Size of the icon'
        },
        iconVariant: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
            description: 'Color variant of the icon'
        },
        displayMode: {
            control: 'select',
            options: ['minimal', 'card', 'outline'],
            description: 'Visual containment style'
        },
        colorMode: {
            control: 'select',
            options: ['light', 'dark', 'primary', 'secondary'],
            description: 'Color scheme'
        },
        gap: {
            control: 'select',
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            description: 'Global spacing gap'
        },
        mediaGap: {
            control: 'select',
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            description: 'Spacing below media'
        },
        headingGap: {
            control: 'select',
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            description: 'Spacing below heading'
        },
        bodyGap: {
            control: 'select',
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            description: 'Spacing below body'
        },
        heading: { control: 'text' },
        headingVariant: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1'],
            description: 'Typography variant for heading'
        },
        headingAs: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span'],
            description: 'HTML tag for heading'
        },
        description: { control: 'text' },
        linkDestination: { control: 'text', description: 'Make entire card clickable' },
        openInNewTab: { control: 'boolean', description: 'Open link in new tab' }
    },
    args: {
        contentAlign: 'center',
        imageSrc: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
        imageWidth: '100%',
        imageHeight: '200px',
        imagePriority: false,
        iconSize: '2xl',
        iconVariant: 'primary',
        displayMode: 'card',
        colorMode: 'light',
        gap: 'md',
        mediaGap: 'md',
        headingGap: 'sm',
        bodyGap: 'md',
        heading: 'Visual Feature',
        headingVariant: 'h3',
        headingAs: 'h3',
        description: 'This layout emphasizes a visual element (icon or image) at the top, perfectly suited for feature highlights or cards.',
        linkDestination: '',
        openInNewTab: false,
    } as any,
    render: (args: any) => {
        const config: WidgetConfig = {
            type: 'contentBlock',
            theme: 'visual-block',
            data: {
                image: args.imageSrc || undefined,
                icon: <StarIcon />,
                iconVariant: args.iconVariant,
                content: {
                    heading: args.heading,
                    body: args.description,
                },
                actions: [
                    { label: 'Learn More', variant: 'primary' },
                ],
            },
            settings: {
                contentAlign: args.contentAlign,
                iconSize: args.iconSize,
                imageWidth: args.imageWidth,
                imageHeight: args.imageHeight,
                displayMode: args.displayMode,
                colorMode: args.colorMode,
                imagePriority: args.imagePriority,
                linkDestination: args.linkDestination || undefined,
                openInNewTab: args.openInNewTab,
                typography: {
                    heading: {
                        variant: args.headingVariant,
                        as: args.headingAs
                    }
                },
                gap: args.gap,
                spacing: {
                    media: args.mediaGap,
                    heading: args.headingGap,
                    body: args.bodyGap,
                }
            },
        };

        return (
            <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
                <Widget config={config} />
            </div>
        );
    }
};
