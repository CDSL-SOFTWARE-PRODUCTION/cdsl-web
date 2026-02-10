'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

import { projects } from '@data/projects';
import MotionText from '@components/motion/MotionText';
import ScrollReveal from '@components/motion/ScrollReveal';

export default function ProjectsPage() {
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <main className="min-h-screen bg-premium-navy text-white overflow-hidden">
            {/* Hero Section with Parallax */}
            <section className="relative pt-32 pb-24 px-4">
                <motion.div
                    style={{ y: yParallax }}
                    className="absolute inset-0 z-0 pointer-events-none opacity-20"
                >
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-premium-blue to-transparent blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-premium-navy-light blur-[100px] rounded-full" />
                </motion.div>

                <div className="site-container relative z-10 px-4">
                    <div className="max-w-[1200px]">
                        <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold leading-[0.9] tracking-tighter uppercase mb-12 text-white font-display">
                            <MotionText
                                text="SELECTED"
                                className="block"
                                delayOrder={0.1}
                            />
                            <div className="flex items-center gap-4 md:gap-8">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '1.5em' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1], delay: 0.4 }}
                                    className="h-[0.1em] bg-premium-blue hidden md:block"
                                />
                                <MotionText
                                    text="WORK"
                                    className="block"
                                    delayOrder={0.3}
                                />
                            </div>
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                            <div className="md:col-span-6 lg:col-span-5">
                                <ScrollReveal delay={0.6} direction="up" distance={10}>
                                    <p className="text-xl md:text-2xl text-premium-gray font-light leading-relaxed">
                                        A collection of projects defining brand motion and digital experiences.
                                    </p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects List */}
            <section className="pb-32 px-4 site-container relative z-10">
                <div className="space-y-12 md:space-y-24">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.slug} delay={index * 0.1} className="w-full">
                            <motion.div
                                className="group relative border-b border-white/10 pb-12 hover:border-white/30 transition-colors duration-500"
                            >
                                <Link href={`/projects/${project.slug}`} className="block">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8">
                                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white transition-all duration-500 group-hover:text-premium-blue group-hover:translate-x-4">
                                            {project.name}
                                        </h2>
                                        <div className="flex flex-col md:items-end gap-2">
                                            <div className="flex items-center gap-4 text-white/50 font-mono text-sm md:text-base tracking-widest uppercase group-hover:text-white/80 transition-colors duration-300">
                                                <span>{project.client}</span>
                                                <span className="w-1 h-1 rounded-full bg-premium-blue/50"></span>
                                                <span>{project.year}</span>
                                            </div>
                                            <span className="text-xs font-mono text-premium-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                View Case Study →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Footer Note */}
                <ScrollReveal delay={0.2} direction="up" distance={20}>
                    <div className="mt-32 text-center">
                        <p className="font-mono text-sm text-white/30 uppercase tracking-widest">
                            Clients - 2025/2026
                        </p>
                    </div>
                </ScrollReveal>
            </section>
        </main>
    );
}
