import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../../components/Image';

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

export const WithFallback: Story = {
    args: {
        src: 'https://invalid-url.com/image.jpg',
        alt: 'Broken Image',
        fallback: 'https://placehold.co/300x200?text=Fallback+Image',
        style: { width: 300, height: 200, borderRadius: 8 },
    },
    parameters: {
        docs: {
            description: {
                story: 'When the main `src` fails to load (or is loading), the `fallback` image is shown. Here we simulate a broken URL.',
            },
        },
    },
};

export const LoadingState: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 20 }}>
            <div>
                <p>Loading (simulated with empty src + fallback)</p>
                <Image
                    src="" // Empty src keeps it in "loading" state essentially (or error, which shows fallback)
                    fallback="https://placehold.co/300x200?text=Loading..."
                    alt="Loading Placeholder"
                    style={{ width: 300, height: 200, borderRadius: 8 }}
                />
            </div>
        </div>
    ),
};

export const CustomComponent: Story = {
    render: () => {
        // Mock Next.js Image or similar component
        const MockNextImage = ({ src, alt, ...props }: any) => (
            <img src={src} alt={alt} {...props} style={{ ...props.style, border: '5px solid #6366f1' }} />
        );

        return (
            <Image
                component={MockNextImage}
                src="https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=60"
                alt="Custom Component"
                style={{ width: 300, height: 200 }}
            />
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'You can pass a custom component (like Next.js Image) via the `component` prop. The custom component will receive all props passed to `Image` plus `onLoad`/`onError` handlers.',
            },
        },
    },
};
