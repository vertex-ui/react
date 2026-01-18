import React from 'react';
import './FeatureHighlightTheme.css';
import Box from '@/components/Box';
import { Button } from '@/components/Button';
import { Flex } from '@/components/Flex';
import { Link } from '@/components/Link';
import { Typography } from '@/components/Typography';
import { ContentBlockWidgetProps } from '../ContentBlockWidget';

const getMarginClass = (value?: string) => {
    if (!value) return '';
    if (['px', 'rem', 'em', '%', 'vh', 'vw', 'calc', 'var'].some(u => value.includes(u))) {
        return `mb-[${value}]`;
    }
    return `mb-${value}`;
};

export const FeatureHighlightTheme: React.FC<ContentBlockWidgetProps & {
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
            caption,
            heading,
            subheading,
            body: description,
            list = [],
            // Default variants from data, can be overridden by settings
            captionVariant = 'caption',
            captionStyle = 'text',
            headingVariant = 'h2',
            subheadingVariant = 'h4',
            bodyVariant = 'body1'
        } = content;

        const actions = data.actions || [];
        const typeSettings = settings.typography || {};

        const {
            captionGap,
            headingGap,
            subheadingGap,
            bodyGap,
            listGap
        } = gapValues;

        return (
            <div className={wrapperClass} style={style}>
                <Box
                    className="vtx-content-block__content"
                    display="flex"
                    flexDirection="column"
                    gap={0}
                    w="100%"
                    alignItems={alignItems as any}
                    textAlign={textAlign as any}
                >
                    {/* Caption (Eyebrow) - Visually Primary */}
                    {caption && (
                        <Typography
                            variant={captionVariant}
                            color={typeSettings.caption?.color || (captionStyle === 'badge' ? undefined : 'primary')}
                            className={`vtx-content-block__caption ${captionStyle === 'badge' ? 'vtx-content-block__caption--badge' : ''} ${getMarginClass(captionGap)}`}
                            {...typeSettings.caption}
                        >
                            {caption}
                        </Typography>
                    )}

                    {/* Heading */}
                    {heading && (
                        <Typography
                            variant={headingVariant}
                            className={`vtx-content-block__heading ${getMarginClass(headingGap)}`}
                            {...typeSettings.heading}
                        >
                            {heading}
                        </Typography>
                    )}

                    {/* SubHeading */}
                    {subheading && (
                        <Typography
                            variant={subheadingVariant}
                            className={`vtx-content-block__subheading ${getMarginClass(subheadingGap)}`}
                            {...typeSettings.subheading}
                        >
                            {subheading}
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

                    {/* List Items */}
                    {list.length > 0 && (
                        <Flex
                            direction="column"
                            className="vtx-content-block__list-group"
                            style={{ marginBottom: listGap }}
                            gap={settings.spacing?.itemGap}
                        >
                            {list.map((item: any, index: number) => {
                                // Determine if this is a complex list item (Heading + Description)
                                const hasDescription = !!(item.description || item.body);
                                const itemHeading = item.heading || item.title || item.label || item.text;

                                // Style Overrides for Icon/Image
                                const wrapperStyle: React.CSSProperties = {};
                                if (item.icon && item.iconSize) {
                                    wrapperStyle.width = item.iconSize;
                                    wrapperStyle.height = item.iconSize;
                                    wrapperStyle.fontSize = item.iconSize;
                                }
                                if (item.image && (item.imageWidth || item.imageHeight)) {
                                    if (item.imageWidth) wrapperStyle.width = item.imageWidth;
                                    if (item.imageHeight) wrapperStyle.height = item.imageHeight;
                                }

                                return (
                                    <Flex
                                        key={index}
                                        className={`vtx-content-block__list-item-row ${hasDescription ? 'vtx-align-start' : 'vtx-align-center'}`}
                                        align={hasDescription ? 'start' : 'center'}
                                        gap={settings.spacing?.listHorizontalGap}
                                        fullWidth
                                    >
                                        {/* Icon / Image Area */}
                                        {(item.icon || item.image) && (
                                            <Flex
                                                className={`vtx-content-block__list-icon-wrapper ${item.iconVariant ? `vtx-text-${item.iconVariant}` : ''} ${hasDescription ? 'vtx-mt-1' : ''}`}
                                                style={wrapperStyle}
                                                justify="center"
                                                align="center"
                                                shrink={0}
                                            >
                                                {item.icon || item.image}
                                            </Flex>
                                        )}

                                        {/* Text Content Area */}
                                        <Flex
                                            direction="column"
                                            grow={1}
                                            className="vtx-content-block__list-text-wrapper"
                                        >
                                            {itemHeading && (
                                                <Typography
                                                    variant={hasDescription ? "subtitle1" : "body1"}
                                                    className="vtx-content-block__list-heading"
                                                    weight={hasDescription ? "semibold" : "normal"}
                                                >
                                                    {itemHeading}
                                                </Typography>
                                            )}
                                            {hasDescription && (
                                                <Typography
                                                    variant="body2"
                                                    className="vtx-content-block__list-description"
                                                    style={{ marginTop: '0.25rem', color: 'var(--vtx-text-secondary)' }}
                                                >
                                                    {item.description || item.body}
                                                </Typography>
                                            )}
                                        </Flex>
                                    </Flex>
                                );
                            })}
                        </Flex>
                    )}

                    {/* Actions */}
                    {actions.length > 0 && (
                        <div className="vtx-content-block__actions">
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
                        </div>
                    )}
                </Box>
            </div>
        );
    };
