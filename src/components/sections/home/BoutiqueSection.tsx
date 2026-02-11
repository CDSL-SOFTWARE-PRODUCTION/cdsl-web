'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const BoutiqueSection: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row bg-premium-navy overflow-hidden">
            {/* Left side: Stunning Media Area (Fullscreen-ish) */}
            <div className="w-full md:w-[55%] h-[60vh] md:h-screen relative overflow-hidden flex items-center justify-center bg-black">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    {/* Placeholder for visual stunning content (Image/Video) */}
                    <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                        alt="Visual Stunning Artwork"
                        className="w-full h-full object-cover opacity-80"
                    />
                    {/* Subtle gradient overlay to enhance visual stunning effect - themed colors */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-premium-blue/20 via-transparent to-premium-navy/40 mix-blend-overlay" />
                </motion.div>

                {/* Visual Overlay for depth */}
                <div className="absolute inset-0 bg-premium-navy/20 z-10" />

                {/* Corner accent for premium feel */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-premium-blue/10 to-transparent blur-2xl pointer-events-none" />
            </div>

            {/* Right side: Content Area */}
            <div className="w-full md:w-[45%] flex items-center justify-center p-8 md:p-16 lg:p-24 bg-premium-navy text-white">
                <div className="max-w-md lg:max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-10"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.15]">
                            <span className="bg-premium-blue text-premium-navy px-3 py-1 inline-block mb-1">Boutique studio.</span>
                            <br />
                            <span className="bg-premium-blue text-premium-navy px-3 py-1 inline-block">Enterprise Infrastructure.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 text-premium-gray text-base md:text-lg leading-relaxed font-light"
                    >
                        <p>
                            We bring the rigour of enterprise systems to agile teams. Systems are only as strong as the partnership behind them.
                        </p>
                        <p className="text-white font-normal">
                            No bloat, just pure efficiency. We integrate seamlessly with in-house teams, functioning as the architectural extension of your business.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12"
                    >
                        <Link href="/contact" className="group inline-flex flex-col">
                            <span className="text-white text-sm md:text-base font-medium tracking-wide uppercase hover:text-premium-blue transition-colors">
                                See our engagement model
                            </span>
                            <span className="h-[1.5px] w-12 bg-white/30 mt-1 group-hover:w-full group-hover:bg-premium-blue transition-all duration-300"></span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BoutiqueSection;
