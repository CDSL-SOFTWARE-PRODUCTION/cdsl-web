'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    once?: boolean;
    amount?: number | 'some' | 'all';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = '',
    delay = 0,
    duration = 0.6,
    direction = 'up',
    distance = 24,
    once = true,
    amount = 0.2,
}) => {
    const getInitialProps = () => {
        switch (direction) {
            case 'up': return { y: distance, opacity: 0 };
            case 'down': return { y: -distance, opacity: 0 };
            case 'left': return { x: distance, opacity: 0 };
            case 'right': return { x: -distance, opacity: 0 };
            case 'none': return { opacity: 0 };
            default: return { y: distance, opacity: 0 };
        }
    };

    const variants: Variants = {
        hidden: { ...getInitialProps(), scale: 0.98 },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: [0.22, 0.61, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
