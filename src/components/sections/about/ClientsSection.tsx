'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../motion/ScrollReveal';

const ClientsSection: React.FC = () => {
    const logos = [
        { name: 'Meta', icon: 'M' },
        { name: 'Apple', icon: 'A' },
        { name: 'Google', icon: 'G' },
        { name: 'Netflix', icon: 'N' },
        { name: 'Uber', icon: 'U' },
        { name: 'Spotify', icon: 'S' },
        { name: 'Microsoft', icon: 'Ms' },
        { name: 'Adobe', icon: 'Ad' },
        // More can be added
    ];

    return (
        <section className="py-24 md:py-32 bg-premium-navy text-white overflow-hidden border-t border-white/5">
            <div className="site-container px-4">
                <div className="mb-16">
                    <ScrollReveal direction="right">
                        <span className="text-sm font-semibold tracking-widest uppercase text-premium-blue opacity-60 block mb-6">
                            Clients / Our Partners
                        </span>
                        <h2 className="text-4xl md:text-5xl font-medium leading-tight max-w-2xl mb-8 font-display">
                            Leaders in motion systems, identities, guidelines & toolkits.
                        </h2>
                        <motion.a
                            href="/work"
                            className="text-sm font-bold tracking-widest uppercase flex items-center gap-2 group text-premium-blue/80 hover:text-premium-blue transition-colors"
                            whileHover={{ x: 4 }}
                        >
                        </motion.a>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/5 border border-white/5">
                    {logos.map((logo, index) => (
                        <ScrollReveal
                            key={logo.name}
                            delay={index * 0.05}
                            direction="none"
                            amount={0.5}
                            className="aspect-[3/2] flex items-center justify-center bg-premium-navy hover:bg-premium-blue/5 transition-colors group"
                        >
                            <div className="text-xl md:text-2xl font-bold opacity-30 group-hover:opacity-100 transition-opacity flex flex-col items-center">
                                <span className="text-3xl mb-1 text-white">{logo.icon}</span>
                                <span className="text-[10px] uppercase tracking-widest font-semibold text-premium-blue">{logo.name}</span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-32 border-t border-white/10 pt-24 grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <ScrollReveal direction="right">
                            <h3 className="text-3xl font-medium leading-tight mb-8 font-display text-white">
                                From events & campaigns to entire brand ecosystems.
                            </h3>
                            <a href="/services" className="text-sm font-bold underline underline-offset-4 decoration-1 decoration-premium-blue/20 hover:decoration-premium-blue transition-all text-premium-blue">Learn more about our services</a>
                        </ScrollReveal>
                    </div>

                    <div className="md:col-start-6 md:col-span-7 aspect-[4/3] bg-premium-navy-light overflow-hidden rounded-sm relative">
                        <motion.div
                            whileInView={{ scale: [1, 1.05, 1], rotate: [0, 0.5, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full bg-gradient-to-tr from-[#1a1c23] to-premium-navy-light flex items-center justify-center relative"
                        >
                            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                            <div className="text-6xl md:text-8xl text-white font-black opacity-5 select-none font-logo">CDSL</div>
                            <div className="absolute inset-0 bg-gradient-to-t from-premium-navy to-transparent opacity-60" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
