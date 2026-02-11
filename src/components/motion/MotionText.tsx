'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface MotionTextProps {
    text: string;
    className?: string;
    variant?: 'words' | 'chars';
    delayOrder?: number;
    duration?: number;
    staggerDelay?: number;
    once?: boolean;
}

const MotionText: React.FC<MotionTextProps> = ({
    text,
    className = '',
    variant = 'words',
    delayOrder = 0,
    duration = 0.6,
    staggerDelay = 0.08,
    once = true,
}) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delayOrder,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(4px)'
        },
        show: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration,
                ease: [0.22, 0.61, 0.36, 1]
            }
        },
    };

    const items = variant === 'words' ? text.split(' ') : text.split('');

    return (
        <motion.div
            key={text}
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount: 0.3 }}
        >
            {items.map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    className="inline-block whitespace-pre"
                    variants={itemVariants}
                >
                    {char}{variant === 'words' && index !== items.length - 1 ? '\u00A0' : ''}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default MotionText;
