import React from 'react';
import { ContentBlockWidgetProps } from '../ContentBlockWidget';
import { Typography } from '../../../Typography';
import { Button } from '../../../Button';
import { Link } from '../../../Link';
import { Box } from '../../../Box';
import { Flex } from '../../../Flex';
import { Image } from '../../../Image';
import './VisualBlockTheme.css';

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
        console.log("dataaaaa", data)
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
            headingGap,
            bodyGap,
            mediaGap
        } = gapValues;

        // Resolve Media Content
        let mediaContent: React.ReactNode = null;

        // Logic: Image takes precedence if both provided (or user ensures one)
        if (data.image) {
            // Resolve Image Dimensions
            const imgWidth = settings.imageWidth || '100%';
            const imgHeight = settings.imageHeight || 'auto';

            mediaContent = (
                <Box className="vtx-content-block__media-wrapper" w={imgWidth} style={{ maxWidth: '100%' }}>
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
                <div
                    className={`vtx-content-block__icon ${data.iconVariant ? `vtx-text-${data.iconVariant}` : 'vtx-text-primary'}`}
                    style={{
                        fontSize: size,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        lineHeight: 1
                    }}
                >
                    {data.icon}
                </div>
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
                {mediaContent && (
                    <Box mb={mediaGap}>
                        {mediaContent}
                    </Box>
                )}

                {/* Detailed Content */}
                {/* Heading */}
                {heading && (
                    <Box mb={headingGap}>
                        <Typography
                            variant={typeSettings.heading?.variant || headingVariant}
                            as={typeSettings.heading?.as} // Explicitly allow 'as' override
                            className="vtx-content-block__heading"
                            {...typeSettings.heading}
                        >
                            {heading}
                        </Typography>
                    </Box>
                )}

                {/* Description */}
                {description && (
                    <Box mb={bodyGap}>
                        <Typography
                            variant={bodyVariant}
                            className="vtx-content-block__body"
                            {...typeSettings.body}
                        >
                            {description}
                        </Typography>
                    </Box>
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
