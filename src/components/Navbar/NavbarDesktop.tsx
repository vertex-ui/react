import React, { useState, useEffect } from 'react';
import { NavbarDesktopProps } from './types';
import { SingleRowNavbar } from './variants/SingleRowNavbar';
import { TwoRowNavbar } from './variants/TwoRowNavbar';
import { CenteredNavbar } from './variants/CenteredNavbar';
import { TransparentNavbar } from './variants/TransparentNavbar';
import { TopBar } from './TopBar';

export const NavbarDesktop: React.FC<NavbarDesktopProps> = (props) => {
    const { variant = 'single-row', layout, transparent, sticky, topBar, containerized = true, linkComponent } = props;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (transparent && sticky) {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
        return undefined;
    }, [transparent, sticky]);

    const wrapperClass = [
        'vtx-navbar-wrapper',
        sticky && 'vtx-navbar-wrapper--sticky',
        transparent && 'vtx-navbar-wrapper--transparent',
        isScrolled && 'vtx-navbar-wrapper--scrolled',
    ].filter(Boolean).join(' ');

    const renderVariant = () => {
        // We handle sticky wrapper at this level, so we force sticky=false for children
        // to avoid nested sticky wrappers which break layout.
        const childProps = { ...props, sticky: false, topBar: undefined };

        if (variant === 'two-row' || layout === 'two-row') {
            return <TwoRowNavbar linkComponent={linkComponent} {...childProps} />;
        }
        if (variant === 'centered' || layout === 'centered') {
            return <CenteredNavbar linkComponent={linkComponent} {...childProps} />;
        }
        if (variant === 'transparent') {
            return <TransparentNavbar linkComponent={linkComponent} {...childProps} />;
        }
        return <SingleRowNavbar linkComponent={linkComponent} {...childProps} />;
    };

    return (
        <div className={wrapperClass}>
            {topBar && <TopBar config={topBar} containerized={containerized} />}
            {renderVariant()}
        </div>
    );
};
