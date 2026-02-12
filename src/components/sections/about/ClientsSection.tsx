'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Network, Server, Database, Cloud, Smartphone } from 'lucide-react';
import ScrollReveal from '../../motion/ScrollReveal';

const ClientsSection: React.FC = () => {
    interface Logo {
        name: string;
        icon: string;
        isImage?: boolean;
    }

    const logos: Logo[] = [
        { name: 'Meta', icon: 'M' },
        { name: 'Apple', icon: 'A' },
        { name: 'Google', icon: 'G' },
        { name: 'Netflix', icon: 'N' },
        { name: 'Uber', icon: 'U' },
        { name: 'Spotify', icon: 'S' },
        { name: 'Microsoft', icon: 'Ms' },
        { name: 'Adobe', icon: 'Ad' },
        { name: 'Sun Chinese', icon: '/logo/sun-chinse-logo.png', isImage: true },
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
                            Trusted by ambitious brands to engineer their digital future.
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
                            className="aspect-[3/2] flex items-center justify-center bg-premium-navy md:hover:bg-premium-blue/10 transition-all duration-500 group border border-white/5 md:hover:border-premium-blue/30"
                        >
                            <div className="text-xl md:text-2xl font-bold transition-all duration-500 flex flex-col items-center group-hover:scale-110">
                                {logo.isImage ? (
                                    <img
                                        src={logo.icon}
                                        alt={logo.name}
                                        className="h-8 w-auto mb-2 object-contain brightness-0 invert opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                                    />
                                ) : (
                                    <span className="text-3xl mb-1 text-white md:group-hover:text-premium-blue transition-colors font-display">{logo.icon}</span>
                                )}
                                <span className="text-[10px] uppercase tracking-widest font-medium text-white/60 md:group-hover:text-white md:group-hover:opacity-100 transition-all">{logo.name}</span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-32 border-t border-white/10 pt-24 grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <ScrollReveal direction="right">
                            <h3 className="text-3xl font-medium leading-tight mb-8 font-display text-white">
                                From MVP prototypes to enterprise-grade software ecosystems.
                            </h3>
                            <a href="/services" className="text-sm font-bold underline underline-offset-4 decoration-1 decoration-premium-blue/20 hover:decoration-premium-blue transition-all text-premium-blue">Learn more about our services</a>
                        </ScrollReveal>
                    </div>

                    <div className="md:col-start-6 md:col-span-7 aspect-[4/3] bg-premium-navy-light overflow-hidden rounded-sm relative border border-white/5 group">
                        <EcosystemShowcase />
                    </div>
                </div>
            </div>
        </section>
    );
};

const EcosystemShowcase: React.FC = () => {
    // 0: MVP (Phone/Hello World), 1: Growth (Code Expansion), 2: Ecosystem (Nodes/Flow)
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhase((prev) => (prev + 1) % 3);
        }, 5000); // 5 seconds per phase
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#1a1c23] to-premium-navy-light">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay" />

            <AnimatePresence mode="wait">
                {phase === 0 && (
                    <motion.div
                        key="mvp"
                        className="flex flex-col items-center justify-center w-3/4 h-3/4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Editor Window */}
                        <div className="w-full h-full bg-[#1e1e1e] rounded-lg border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-xs md:text-sm">
                            {/* Title Bar */}
                            <div className="h-8 bg-[#252526] flex items-center px-4 gap-2 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                <span className="ml-4 text-white/40 text-[10px]">main.py — VS Code</span>
                            </div>

                            <div className="flex-1 flex flex-col">
                                {/* Code Editor Area */}
                                <div className="flex-1 p-4 text-[#d4d4d4] overflow-hidden relative">
                                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#1e1e1e] border-r border-white/5 flex flex-col items-end pr-2 py-4 text-[#858585] select-none">
                                        <div>1</div>
                                        <div>2</div>
                                        <div>3</div>
                                    </div>
                                    <div className="pl-10">
                                        <div className="typing-effect">
                                            <span className="text-[#c586c0]">print</span>(
                                            <span className="text-[#ce9178]">'Hello, World!'</span>
                                            )
                                        </div>
                                    </div>
                                </div>

                                {/* Terminal Area */}
                                <div className="h-1/3 bg-[#1e1e1e] border-t border-white/10 flex flex-col">
                                    <div className="flex items-center gap-4 px-4 py-1 border-b border-white/5 text-[10px] text-white/50 bg-[#252526]">
                                        <span className="underline decoration-premium-blue decoration-2 text-white">TERMINAL</span>
                                        <span>OUTPUT</span>
                                        <span>DEBUG CONSOLE</span>
                                    </div>
                                    <div className="p-4 font-mono text-xs flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[#50fa7b]">➜</span>
                                            <span className="text-[#8be9fd]">project</span>
                                            <span className="text-white/60">python main.py</span>
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.5 }}
                                            className="text-white"
                                        >
                                            Hello, World!
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 2, repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
                                            className="w-2 h-4 bg-white/50 mt-1 inline-block"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 text-xs font-mono text-premium-blue/60 uppercase tracking-widest"
                        >
                            Phase 1: MVP Prototype
                        </motion.div>
                    </motion.div>
                )}

                {phase === 1 && (
                    <motion.div
                        key="growth"
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-3/4 h-3/4 bg-premium-navy rounded-lg border border-white/10 p-6 shadow-2xl overflow-hidden relative">
                            {/* Window UI */}
                            <div className="flex gap-2 mb-4 opacity-50">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>

                            {/* Scrolling Code Animation */}
                            <motion.div
                                className="font-mono text-xs text-premium-gray space-y-2 opacity-70"
                                initial={{ y: 0 }}
                                animate={{ y: -200 }}
                                transition={{ duration: 8, ease: "linear" }}
                            >
                                <div className="text-blue-400">import <span className="text-white">React</span> from 'react';</div>
                                <div className="text-purple-400">const <span className="text-yellow-400">App</span> = () {'=>'} {'{'}</div>
                                <div className="pl-4 text-green-400">//Scaling architecture...</div>
                                {[...Array(15)].map((_, i) => (
                                    <div key={i} className="pl-4 flex gap-2">
                                        <span className="text-white/20">{i + 10}</span>
                                        <span className="w-full bg-white/5 h-3 rounded" style={{ width: `${Math.random() * 60 + 20}%` }} />
                                    </div>
                                ))}
                                <div className="text-purple-400">{'}'};</div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-6 right-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Code className="w-12 h-12 text-premium-blue opacity-50" />
                            </motion.div>
                        </div>
                        <motion.div
                            className="absolute bottom-8 left-0 right-0 text-center text-sm font-mono text-premium-gray uppercase tracking-widest"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Phase 2: Complex Architecture
                        </motion.div>
                    </motion.div>
                )}

                {phase === 2 && (
                    <motion.div
                        key="ecosystem"
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Nodes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Center Node (Core) */}
                            <motion.div
                                className="absolute z-10 p-4 bg-premium-navy border border-premium-blue rounded-lg shadow-[0_0_30px_rgba(102,252,241,0.2)]"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                            >
                                <Server className="w-8 h-8 text-premium-blue" />
                            </motion.div>

                            {/* Satellite Nodes */}
                            {[
                                { icon: Database, x: -120, y: -60, color: "text-purple-400" },
                                { icon: Cloud, x: 120, y: -60, color: "text-blue-400" },
                                { icon: Smartphone, x: -120, y: 80, color: "text-green-400" },
                                { icon: Network, x: 120, y: 80, color: "text-orange-400" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute p-3 bg-premium-navy border border-white/10 rounded-full ${item.color}/10`}
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    animate={{ x: item.x, y: item.y, opacity: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8, type: "spring" }}
                                >
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </motion.div>
                            ))}

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                <defs>
                                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="rgba(102,252,241,0)" />
                                        <stop offset="50%" stopColor="rgba(102,252,241,0.5)" />
                                        <stop offset="100%" stopColor="rgba(102,252,241,0)" />
                                    </linearGradient>
                                </defs>
                                {[
                                    { x2: "calc(50% - 120px)", y2: "calc(50% - 60px)" }, // To DB
                                    { x2: "calc(50% + 120px)", y2: "calc(50% - 60px)" }, // To Cloud
                                    { x2: "calc(50% - 120px)", y2: "calc(50% + 80px)" }, // To Phone
                                    { x2: "calc(50% + 120px)", y2: "calc(50% + 80px)" }, // To Network
                                ].map((line, i) => (
                                    <motion.line
                                        key={i}
                                        x1="50%"
                                        y1="50%"
                                        x2={line.x2}
                                        y2={line.y2}
                                        stroke="rgba(255,255,255,0.1)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    />
                                ))}
                            </svg>

                            {/* Particles moving along the paths */}
                            {[
                                { x: -120, y: -60 }, { x: 120, y: -60 },
                                { x: -120, y: 80 }, { x: 120, y: 80 }
                            ].map((target, i) => (
                                <motion.div
                                    key={`particle-${i}`}
                                    className="absolute w-2 h-2 bg-premium-blue rounded-full shadow-[0_0_8px_#66FCF1] z-0"
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    animate={{
                                        x: [0, target.x],
                                        y: [0, target.y],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.8,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                        <motion.div
                            className="absolute bottom-6 left-0 right-0 text-center text-xs font-mono text-premium-blue/60 uppercase tracking-widest"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Phase 3: Enterprise Ecosystem
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ClientsSection;

