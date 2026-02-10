'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Animation variants
const staggerContainerValues: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // Custom easing for premium feel
        },
    },
};

const fadeInRight: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const revealMask: Variants = {
    hidden: { y: '100%' },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

import { projects } from '@data/projects';

export default function ContactPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Take top 4 projects for teaser
    const teaserProjects = projects.slice(0, 4);

    return (
        <div ref={containerRef} className="bg-premium-navy text-white min-h-screen pb-20 overflow-x-hidden selection:bg-premium-blue selection:text-premium-navy">

            {/* 1. Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-12">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Headline */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                        className="mb-16 md:mb-24"
                    >
                        {["ONE TEAM.", "WORKING", "TOGETHER."].map((line, index) => (
                            <div key={index} className="overflow-hidden">
                                <motion.h1
                                    variants={revealMask}
                                    className="text-[12vw] md:text-[8vw] leading-[0.9] font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70"
                                >
                                    {line}
                                </motion.h1>
                            </div>
                        ))}
                    </motion.div>

                    {/* Description */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="md:col-span-4 lg:col-span-3 text-lg md:text-xl font-bold text-premium-blue"
                        >
                            We partner with brands to shape systems and strategies for motion.
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="md:col-span-8 lg:col-span-6 text-premium-gray text-base md:text-lg leading-relaxed"
                        >
                            <p>
                                We define how brands move across every touchpoint—from digital products to marketing campaigns, events, and brand identities. Our approach combines strategic thinking with high-end craftsmanship to create motion systems that are scalable, distinct, and enduring.
                            </p>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5, y: [0, 5, 0] }}
                        transition={{
                            opacity: { delay: 2, duration: 1 },
                            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                        }}
                        className="absolute bottom-8 left-6 md:left-12 lg:left-24 text-sm font-mono tracking-widest text-white/50"
                    >
                        (Scroll)
                    </motion.div>
                </div>
            </section>

            {/* 2. Contact Section: New Business & Careers */}
            <section className="px-6 md:px-12 lg:px-24 py-24">
                <div className="w-full max-w-7xl mx-auto space-y-32">

                    {/* New Business */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 group">
                        <div className="md:col-span-4 lg:col-span-3">
                            <motion.span
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-10%" }}
                                variants={fadeInUp}
                                className="inline-block text-sm font-mono text-premium-blue mb-4"
                            >
                                (New business)
                            </motion.span>
                        </div>
                        <div className="md:col-span-8 lg:col-span-6">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-10%" }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-medium text-white mb-2">
                                    John Doe
                                </motion.h3>
                                <motion.p variants={fadeInUp} className="text-xl text-premium-gray mb-6">
                                    Executive Producer
                                </motion.p>
                                <motion.div variants={fadeInUp}>
                                    <a
                                        href="mailto:work@cdsl.co"
                                        className="inline-block text-2xl md:text-3xl font-light text-white hover:text-premium-blue transition-colors duration-300 relative group/link"
                                    >
                                        work@cdsl.co
                                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-premium-blue transition-all duration-300 group-hover/link:w-full"></span>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Careers */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4 lg:col-span-3">
                            <motion.span
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-10%" }}
                                variants={fadeInUp}
                                className="inline-block text-sm font-mono text-premium-blue mb-4"
                            >
                                (Careers)
                            </motion.span>
                        </div>
                        <div className="md:col-span-8 lg:col-span-6">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-10%" }}
                                variants={staggerContainerValues}
                            >
                                <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-premium-gray mb-8 leading-relaxed">
                                    We are always looking for exceptional talent in motion design, systems thinking, and strategy. If you believe your work can push boundaries, we want to hear from you.
                                </motion.p>
                                <motion.div variants={fadeInUp}>
                                    <Link
                                        href="/careers"
                                        className="inline-flex items-center text-xl text-white font-medium hover:text-premium-blue transition-colors relative group/link"
                                    >
                                        Apply here
                                        <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-premium-blue transition-all duration-300 group-hover/link:w-full"></span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. Capabilities & Work Teaser */}
            <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-white/5">
                <div className="w-full max-w-7xl mx-auto">

                    {/* Intro Sentence */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <motion.h2
                            variants={fadeInRight}
                            className="text-2xl md:text-4xl font-light text-white max-w-3xl leading-tight"
                        >
                            From events and campaigns to <span className="text-premium-blue">entire brand ecosystems.</span>
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="mt-8">
                            <Link
                                href="/projects"
                                className="inline-block text-sm font-mono text-premium-gray hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                            >
                                View case studies
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Work Teaser */}
                    <div className="grid grid-cols-1 gap-8">
                        {/* Project List */}
                        <div className="space-y-6">
                            {teaserProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-5%" }}
                                    transition={{ delay: index * 0.15, duration: 0.6 }}
                                    className="group relative border-b border-white/10 pb-6 hover:border-premium-blue/50 transition-colors duration-500 cursor-pointer"
                                >
                                    <Link href={`/projects/${project.slug}`}>
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full">
                                            <div>
                                                <h4 className="text-3xl md:text-5xl font-display font-medium text-white group-hover:text-premium-blue transition-colors duration-300">
                                                    {project.name}
                                                </h4>
                                                <p className="text-sm font-mono text-premium-gray mt-2 group-hover:text-white/70 transition-colors">
                                                    {project.category}
                                                </p>
                                            </div>
                                            <span className="text-sm font-mono text-premium-gray/50 mt-4 md:mt-0 group-hover:text-white transition-colors duration-300">
                                                ({project.client})
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
