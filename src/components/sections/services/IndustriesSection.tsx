'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@components/motion/ScrollReveal';
import { industries } from '@data/industries';
import Truck from 'lucide-react/dist/esm/icons/truck';
import Heart from 'lucide-react/dist/esm/icons/heart';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import ShoppingBag from 'lucide-react/dist/esm/icons/shopping-bag';
import Book from 'lucide-react/dist/esm/icons/book';
import Factory from 'lucide-react/dist/esm/icons/factory';
import BarChart from 'lucide-react/dist/esm/icons/bar-chart-2';
import Map from 'lucide-react/dist/esm/icons/map';

const IndustriesSection: React.FC = () => {
    return (
        <section className="py-32 px-4 site-container relative z-10">
            <ScrollReveal direction="up" distance={30}>
                <div className="mb-20">
                    <div className="inline-block px-4 py-2 bg-premium-blue/10 rounded-full text-premium-blue text-xs font-mono uppercase tracking-widest mb-4">
                        Industries We Serve
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                        Specialized solutions across<br />diverse industries.
                    </h2>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, index) => {
                    const ICON_MAP = {
                        "truck": Truck,
                        "heart": Heart,
                        "building-2": Building2,
                        "shopping-bag": ShoppingBag,
                        "book": Book,
                        "factory": Factory,
                        "bar-chart-2": BarChart,
                        "map": Map
                    } as const;

                    const iconKey = industry.icon as keyof typeof ICON_MAP;
                    const IconComponent = ICON_MAP[iconKey] || Truck;

                    return (
                        <ScrollReveal key={industry.slug} direction="up" distance={20} delay={index * 0.05}>
                            <Link href={`/projects?industry=${industry.slug}`} className="block h-full">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className="p-8 rounded-[5px] bg-premium-navy-light border border-white/5 hover:border-premium-blue/50 transition-colors duration-300 group relative overflow-hidden h-full flex flex-col justify-between"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="mb-6 text-premium-blue opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                            <IconComponent size={32} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-premium-blue transition-colors duration-300">{industry.title}</h3>
                                        <p className="text-sm text-premium-gray font-light leading-relaxed group-hover:text-white transition-colors duration-300 mb-4">{industry.description}</p>

                                        {/* Metadata Tags */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {industry.metadata?.tags?.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-sm bg-white/5 text-white/40 group-hover:bg-premium-blue/10 group-hover:text-premium-blue transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </ScrollReveal>
                    );
                })}
            </div>
        </section>
    );
};

export default IndustriesSection;
