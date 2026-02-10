'use client';

import React from 'react';
import Link from 'next/link';
import { useScramble } from '@hooks/useScramble';

interface ScrambleLinkProps {
    href: string;
    text: string;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export const ScrambleLink: React.FC<ScrambleLinkProps> = ({ href, text, className = '', onClick, children }) => {
    const { displayText, playScramble } = useScramble({ text });

    return (
        <Link
            href={href}
            className={className}
            onMouseEnter={playScramble}
            onClick={onClick}
        >
            {displayText}
            {children}
        </Link>
    );
};

export default ScrambleLink;
