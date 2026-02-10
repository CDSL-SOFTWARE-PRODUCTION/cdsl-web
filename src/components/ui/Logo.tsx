'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface LogoProps {
    variant?: 'header' | 'footer' | 'hero';
    className?: string;
}

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";

export const Logo: React.FC<LogoProps> = ({ variant = 'header', className = '' }) => {
    const textRef = useRef<HTMLDivElement | HTMLAnchorElement>(null);
    const [text, setText] = useState('CDSL');
    const isAnimating = useRef(false);
    const scrambleInterval = useRef<NodeJS.Timeout | null>(null);

    const runScramble = () => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        const originalText = 'CDSL';
        let iteration = 0;

        const duration = variant === 'hero' ? 8000 : 800;
        const totalFrames = duration / 30;
        const speed = originalText.length / totalFrames;

        if (scrambleInterval.current) clearInterval(scrambleInterval.current);

        scrambleInterval.current = setInterval(() => {
            const scrambled = originalText
                .split("")
                .map((letter, index) => {
                    if (index < Math.floor(iteration)) {
                        return originalText[index];
                    }
                    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
                })
                .join("");

            setText(scrambled);

            if (iteration >= originalText.length) {
                if (scrambleInterval.current) clearInterval(scrambleInterval.current);
                setText(originalText);
                isAnimating.current = false;
            }

            iteration += speed;
        }, 30);
    };

    useEffect(() => {
        if (variant === 'hero') {
            runScramble();
        }
        return () => {
            if (scrambleInterval.current) clearInterval(scrambleInterval.current);
        };
    }, [variant]);

    const handleMouseEnter = () => {
        if (variant === 'header') {
            runScramble();
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
                {text}
            </div>
        );
    }

    return (
        <Link
            href="/"
            className={headerClasses}
            onMouseEnter={handleMouseEnter}
        >
            {text}
        </Link>
    );
};

export default Logo;
