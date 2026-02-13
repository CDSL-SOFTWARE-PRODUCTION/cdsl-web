'use client';

import React from 'react';
import Link from 'next/link';
import { useScramble } from '@hooks/useScramble';

interface LogoProps {
    variant?: 'header' | 'footer' | 'hero';
    className?: string;
}

export const Logo: React.FC<LogoProps> = React.memo(({ variant = 'header', className = '' }) => {
    const { displayText, playScramble } = useScramble({
        text: 'CDSL',
        duration: variant === 'hero' ? 8000 : 800,
        autoStart: variant === 'hero'
    });

    const handleMouseEnter = () => {
        if (variant !== 'hero') {
            playScramble();
        }
    };

    const logoClasses = `font-logo select-none ${className}`;
    const headerClasses = `font-logo text-2xl tracking-widest text-white hover:text-premium-blue transition-colors duration-300 uppercase block ${className}`;

    if (variant === 'hero') {
        return (
            <div
                className={logoClasses}
                onMouseEnter={handleMouseEnter}
            >
                {displayText}
            </div>
        );
    }

    if (variant === 'footer') {
        return (
            <Link
                href="/"
                className="font-logo text-4xl md:text-5xl tracking-widest text-white hover:text-premium-blue transition-colors duration-300 uppercase block"
                onMouseEnter={handleMouseEnter}
            >
                {displayText}
            </Link>
        )
    }

    return (
        <Link
            href="/"
            className={headerClasses}
            onMouseEnter={handleMouseEnter}
        >
            {displayText}
        </Link>
    );
});

export default Logo;
