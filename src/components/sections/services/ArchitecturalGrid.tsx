'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ArchitecturalGrid: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.5, 0.5, 0]);
    const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden h-full">
            <motion.div
                style={{ opacity, y: gridY }}
                className="absolute inset-0 w-full h-[200%] -top-[50%]"
            >
                {/* Vertical Lines */}
                <div className="absolute inset-0 flex justify-around opacity-20">
                    {[...Array(6)].map((_, i) => (
                        <div key={`v-${i}`} className="h-full w-px bg-premium-blue/30" />
                    ))}
                </div>

                {/* Horizontal Lines */}
                <div className="absolute inset-0 flex flex-col justify-around opacity-20">
                    {[...Array(20)].map((_, i) => (
                        <div key={`h-${i}`} className="w-full h-px bg-premium-blue/30" />
                    ))}
                </div>

                {/* Radial Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-b from-premium-navy via-transparent to-premium-navy" />
            </motion.div>
        </div>
    );
};
