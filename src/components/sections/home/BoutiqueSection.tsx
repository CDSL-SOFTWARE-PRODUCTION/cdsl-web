'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const BoutiqueSection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-premium-navy relative overflow-hidden">
            <div className="site-container px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    <motion.h2
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-12"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Boutique studio. Global brands.
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="hidden md:block md:col-span-1"></div>
                        <div className="md:col-span-11">
                            <motion.div
                                className="text-xl md:text-2xl text-premium-gray font-light leading-relaxed space-y-8 mb-12"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <p>
                                    We start small but think big. Acting as an agile extension of your in-house team, we bring specialized expertise without the bloat of a traditional agency.
                                </p>
                                <motion.p
                                    className="text-white font-normal"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    In short, we don't just work with brands, we become part of them.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="flex justify-center md:justify-start"
                            >
                                <Link href="/about" className="group inline-flex flex-col">
                                    <span className="text-white text-lg hover:text-premium-blue transition-colors">
                                        Learn more
                                    </span>
                                    <span className="h-[1px] w-full bg-white/30 mt-1 relative overflow-hidden">
                                        <span className="absolute inset-0 bg-premium-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                                    </span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoutiqueSection;
