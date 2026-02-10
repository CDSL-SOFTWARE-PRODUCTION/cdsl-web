'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const ApproachSection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-premium-navy relative overflow-hidden">
            <div className="site-container px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Intro */}
                    <motion.p
                        className="text-xl md:text-2xl text-premium-gray mb-16 md:mb-24 leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        We create motion systems and identities that unify teams across marketing, events, and brand.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        {/* Label */}
                        <div className="md:col-span-3">
                            <motion.span
                                className="text-premium-blue font-mono text-sm tracking-widest uppercase block sticky top-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                (Approach)
                            </motion.span>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-9">
                            <motion.h2
                                className="text-3xl md:text-5xl font-display font-bold text-white mb-12 leading-tight"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                Our work is the architecture behind how brands move.
                            </motion.h2>

                            <motion.div
                                className="text-premium-gray text-lg leading-relaxed space-y-6 mb-16 font-light"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <p>
                                    Motion is more than just movement—it's meaning. We define the logic, principles, and physics that govern how your brand behaves in a digital space.
                                </p>
                                <p>
                                    By building a comprehensive motion language, we ensure consistency across every touchpoint, from micro-interactions to large-scale campaigns. It's about creating a system that scales with you, empowering your teams to create with confidence.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <Link href="/services" className="group inline-flex flex-col">
                                    <span className="text-white text-lg hover:text-premium-blue transition-colors">
                                        Learn more about our approach
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

export default ApproachSection;
