import React from 'react';
import './VisualBlockTheme.css';
import Box from '@/components/Box';
import { Button } from '@/components/Button';
import { Flex } from '@/components/Flex';
import { Link } from '@/components/Link';
import { Typography } from '@/components/Typography';
import { Image } from '@/components/Image';
import { ContentBlockWidgetProps } from '../ContentBlockWidget';

const getMarginClass = (value?: string) => {
    if (!value) return '';
    if (['px', 'rem', 'em', '%', 'vh', 'vw', 'calc', 'var'].some(u => value.includes(u))) {
        return `mb-[${value}]`;
    }
    return `mb-${value}`;
};

export const VisualBlockTheme: React.FC<ContentBlockWidgetProps & {
    wrapperClass: string;
    alignItems: string;
    textAlign: string;
    gapValues: any;
}> = ({
    data,
    settings = {},
    style,
    wrapperClass,
    alignItems,
    textAlign,
    gapValues
}) => {
        // Extract content
        const content = data.content || {};
        const {
            heading,
            body: description,
            // Default variants
            headingVariant = 'h2',
            bodyVariant = 'body1'
        } = content;

        const actions = data.actions || [];
        const typeSettings = settings.typography || {};
        const { linkDestination, openInNewTab } = settings;

        const {
            headingGap = 'md',
            bodyGap = 'md',
            mediaGap = 'md'
        } = gapValues || {};

        // Resolve Media Content
        let mediaContent: React.ReactNode = null;

        // Logic: Image takes precedence if both provided (or user ensures one)
        if (data.image) {
            // Resolve Image Dimensions
            const imgWidth = settings.imageWidth || '100%';
            const imgHeight = settings.imageHeight || 'auto';

            mediaContent = (
                <Box className={`vtx-content-block__media-wrapper ${getMarginClass(mediaGap)}`} w={imgWidth} style={{ maxWidth: '100%' }}>
                    <Image
                        src={data.image}
                        alt={(typeof heading === 'string' ? heading : 'Feature image')}
                        // Enable lazy loading by default (priority=false), allow user override
                        priority={settings.imagePriority ?? false}
                        style={{
                            width: '100%',
                            height: imgHeight,
                            objectFit: 'cover',
                            borderRadius: 'var(--vtx-radius-md)' // Nice default
                        }}
                    />
                </Box>
            );
        } else if (data.icon) {
            // Resolve Icon Size
            const iconSizeMap: Record<string, string> = {
                'xs': '1rem',
                'sm': '1.25rem',
                'md': '1.5rem',
                'lg': '2rem',
                'xl': '3rem',
                '2xl': '4rem'
            };
            // Default to '3rem' (xl) for visual features if not specified
            const size = settings.customIconSize || (settings.iconSize ? iconSizeMap[settings.iconSize] : '3rem');

            mediaContent = (
                <Flex
                    className={`vtx-content-block__icon ${data.iconVariant ? `vtx-text-${data.iconVariant}` : 'vtx-text-primary'} ${getMarginClass(mediaGap)}`}
                    style={{
                        fontSize: size,
                        lineHeight: 1
                    }}
                    align="center"
                    justify="center"
                >
                    {data.icon}
                </Flex>
            );
        }

        const contentNode = (
            <Box
                className="vtx-content-block__content"
                display="flex"
                flexDirection="column"
                gap={0}
                w="100%"
                alignItems={alignItems as any}
                textAlign={textAlign as any}
            >
                {/* Media Area */}
                {mediaContent}

                {/* Detailed Content */}
                {/* Heading */}

                {heading && (
                    <Typography
                        variant={typeSettings.heading?.variant || headingVariant}
                        as={typeSettings.heading?.as} // Explicitly allow 'as' override
                        className={`vtx-content-block__heading ${getMarginClass(headingGap)}`}
                        {...typeSettings.heading}
                    >
                        {heading}
                    </Typography>
                )}

                {/* Description */}
                {description && (
                    <Typography
                        variant={bodyVariant}
                        className={`vtx-content-block__body ${getMarginClass(bodyGap)}`}
                        {...typeSettings.body}
                    >
                        {description}
                    </Typography>
                )}

                {/* Actions */}
                {actions.length > 0 && (
                    <Flex className="vtx-content-block__actions" gap={3} wrap="wrap">
                        {actions.map((action, index) => (
                            action.type === 'link' ? (
                                <Link
                                    key={index}
                                    href={action.href}
                                    variant={action.variant as any}
                                >
                                    {action.label}
                                </Link>
                            ) : (
                                <Button
                                    key={index}
                                    variant={action.variant as any}
                                    onClick={action.onClick}
                                    href={action.href}
                                >
                                    {action.label}
                                </Button>
                            )
                        ))}
                    </Flex>
                )}
            </Box>
        );

        return (
            <div className={wrapperClass} style={style}>
                {linkDestination ? (
                    <Link
                        href={linkDestination}
                        external={openInNewTab}
                        style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                    >
                        {contentNode}
                    </Link>
                ) : (
                    contentNode
                )}
            </div>
        );
    };
