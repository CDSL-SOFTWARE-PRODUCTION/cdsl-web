'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

import { projects } from '@data/projects';
import MotionText from '@components/motion/MotionText';
import ScrollReveal from '@components/motion/ScrollReveal';
import BidManagerFlow from '@components/illustrations/BidManagerFlow';

function ProjectsContent() {
    const searchParams = useSearchParams();
    const industryFilter = searchParams.get('industry');

    const filteredProjects = industryFilter
        ? projects.filter(p => p.industry === industryFilter)
        : projects;

    return (
        <main className="min-h-screen bg-premium-navy text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-4">
                <div className="site-container relative z-10 px-4">
                    <div className="max-w-[1200px]">
                        <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold leading-[0.9] tracking-tighter uppercase mb-12 text-white font-display">
                            <MotionText
                                text={industryFilter ? `${industryFilter}` : "SELECTED"}
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
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="pb-12 px-4 site-container relative z-10">
                <div className="flex flex-wrap gap-4 md:gap-8">
                    <Link
                        href="/projects"
                        className={`text-sm md:text-base uppercase tracking-widest transition-colors duration-300 ${!industryFilter ? 'text-premium-blue font-medium' : 'text-white/50 hover:text-white'}`}
                    >
                        All
                    </Link>
                    {Array.from(new Set(projects.map(p => p.industry).filter(Boolean))).map((industry) => (
                        <Link
                            key={industry}
                            href={`/projects?industry=${industry}`}
                            className={`text-sm md:text-base uppercase tracking-widest transition-colors duration-300 ${industryFilter === industry ? 'text-premium-blue font-medium' : 'text-white/50 hover:text-white'}`}
                        >
                            {industry}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Projects List */}
            <section className="pb-32 px-4 site-container relative z-10">
                <div className="space-y-12 md:space-y-24">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <ScrollReveal key={project.slug} delay={index * 0.1} className="w-full">
                                <motion.div
                                    className="group relative border-b border-white/10 pb-12 hover:border-white/30 transition-colors duration-500"
                                >
                                    <Link href={`/projects/${project.slug}`} className="block">
                                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8">
                                            <div className="flex-1">
                                                {project.slug === 'dvt-bid-manager' ? (
                                                    <div className="w-full aspect-[21/9] mb-8 rounded-2xl overflow-hidden border border-white/10 relative">
                                                        <BidManagerFlow />
                                                    </div>
                                                ) : null}
                                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white transition-all duration-500 group-hover:text-premium-blue group-hover:translate-x-4">
                                                    {project.name}
                                                </h2>
                                            </div>
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
                        ))
                    ) : (
                        <div className="py-20 text-center">
                            <p className="text-xl text-premium-gray">No projects found for {industryFilter}.</p>
                            <Link href="/projects" className="mt-4 inline-block text-premium-blue hover:underline">
                                View all projects
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default function ProjectsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProjectsContent />
        </Suspense>
    );
}
