'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@components/ui/Logo';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-navy transition-colors duration-300">
            {/* Background Textures */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Technical Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(102,252,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(102,252,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

                {/* Subtle noise texture overlay */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>

                {/* Premium Gradient Glow */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-premium-blue/5 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-premium-navy-light/30 blur-[150px] rounded-full"></div>
            </div>

            {/* Giant Background Logo with Grid */}
            <div className="absolute inset-0 z-[1] flex justify-center items-center overflow-hidden pointer-events-none select-none">
                {/* Grid pattern behind the logo */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(102,252,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(102,252,241,0.08)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40"></div>

                <motion.div
                    className="hero-logo-wrapper w-full flex justify-center relative z-[2]"
                    initial={{ opacity: 0, scale: 2.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 8,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    <Logo
                        variant="hero"
                        className="text-[28vw] md:text-[22vw] lg:text-[18vw] leading-none text-white/5 font-black tracking-widest w-full text-center"
                    />
                </motion.div>
            </div>

            <div className="site-container relative z-10 px-4 w-full h-full flex flex-col justify-center">
                <div className="max-w-7xl mx-auto">
                    {/* Kinetic Typography Headline */}
                    <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white mb-12 transition-colors duration-300">
                        <div className="overflow-hidden">
                            <span className="inline-block">Turn</span>
                            <span className="inline-block text-premium-gray mx-4">Ops</span>
                            <span className="inline-block">Chaos</span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="inline-block">Into</span>
                            <span className="inline-block text-premium-blue mx-4">Profit</span>
                        </div>
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-premium-gray max-w-xl font-light leading-relaxed transition-colors duration-300">
                            We engineer autonomous systems for growing consultancy businesses, turning fragmented operations into a unified engine for growth.
                        </p>

                        {/* Minimal CTA */}
                        <div className="flex items-center gap-6">
                            <Link href="/work" className="group flex items-center gap-2 text-white font-medium hover:text-premium-blue transition-colors">
                                <span>Selected Works</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/contact" className="px-8 py-4 bg-premium-blue text-premium-navy font-bold rounded-none hover:bg-premium-blue/80 transition-colors">
                                Start Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
