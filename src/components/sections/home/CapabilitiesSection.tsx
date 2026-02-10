'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const CapabilitiesSection: React.FC = () => {
    const [activeId, setActiveId] = React.useState(0);

    const items = [
        {
            title: "IDENTITIES",
            description: "We create motion identities that are compelling, memorable, and capture the essence of a brand.",
            color: "bg-spotify-green/20"
        },
        {
            title: "SYSTEMS",
            description: "Building scalable motion frameworks that ensure consistency across all digital touchpoints and platforms.",
            color: "bg-premium-blue/20"
        },
        {
            title: "GUIDELINES",
            description: "Documenting motion principles to empower internal teams and maintain brand integrity at scale.",
            color: "bg-white/10"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-premium-navy-light relative overflow-hidden">
            <div className="site-container px-4 relative z-10">
                {/* Header Part */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 md:mb-32">
                    <div className="md:col-span-3">
                        <motion.span
                            className="text-premium-blue font-mono text-sm tracking-widest uppercase block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            (Services)
                        </motion.span>
                    </div>

                    <div className="md:col-span-9">
                        <motion.h2
                            className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight max-w-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            From core brand foundations to tentpole experiences.
                        </motion.h2>
                    </div>
                </div>

                {/* Split Layout: Left Preview (Desktop), Right List (Desktop + Mobile Accordion) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
                    {/* Left Column: Preview (GIF + Desc) - Hidden on Mobile */}
                    <div className="hidden md:block md:col-span-5">
                        <div className="md:sticky md:top-32">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="space-y-6"
                            >
                                {/* GIF Placeholder */}
                                <div className={`aspect-[4/3] ${items[activeId].color} rounded-sm overflow-hidden relative group border border-white/5 shadow-2xl`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-6 transition-transform duration-700 group-hover:scale-105">
                                            {/* Placeholder for actual visual/logo */}
                                            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
                                                <div className="w-8 h-8 md:w-12 md:h-12 bg-white/40 rounded-sm"></div>
                                            </div>
                                            <p className="text-white/30 font-mono text-xs uppercase tracking-widest">
                                                [ GIF / ANIMATION PLACEHOLDER ]
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>

                                {/* Description */}
                                <motion.p
                                    className="text-lg md:text-xl text-premium-gray font-light leading-relaxed max-w-md"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {items[activeId].description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-4"
                                >
                                    <Link href="/services" className="group inline-flex items-center gap-3 text-white hover:text-premium-blue transition-colors">
                                        <span className="text-sm font-mono tracking-widest uppercase pb-1 border-b border-white/20 group-hover:border-premium-blue transition-all">Explore Approach</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: List of Keywords (Mobile Accordion) */}
                    <div className="md:col-span-7">
                        <div className="flex flex-col">
                            {items.map((item, index) => (
                                <div
                                    key={item.title}
                                    onMouseEnter={() => setActiveId(index)}
                                    onClick={() => setActiveId(index)}
                                    className="py-6 md:py-10 border-b border-white/5 cursor-pointer group flex flex-col"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className={`text-[10px] md:text-sm font-mono mt-4 md:mt-8 transition-colors duration-500 ${activeId === index ? 'text-premium-blue' : 'text-premium-gray opacity-40 group-hover:opacity-100'}`}>
                                            0{index + 1}
                                        </span>
                                        <h3
                                            className={`text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter transition-all duration-700 select-none pb-2 ${activeId === index ? 'text-white translate-x-4' : 'text-white/10 group-hover:text-white group-hover:translate-x-4'}`}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Mobile Inline Content */}
                                    <AnimatePresence>
                                        {activeId === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                className="md:hidden overflow-hidden"
                                            >
                                                <div className="pl-14 pr-4 pt-4 pb-8 space-y-6">
                                                    <p className="text-lg text-premium-gray font-light leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                    <Link href="/services" className="inline-flex items-center gap-3 text-white text-sm font-mono tracking-widest uppercase pb-1 border-b border-white/20">
                                                        Explore Approach
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CapabilitiesSection;
