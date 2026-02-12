'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@data/projects';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import BidManagerFlow from '@components/illustrations/BidManagerFlow';

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const { slug } = resolvedParams;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const otherProjects = projects.filter((p) => p.slug !== slug);

    // Animation constants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-premium-navy text-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="mb-12"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-9xl font-display font-medium uppercase leading-[0.9] text-premium-white mb-8"
                    >
                        {project.name.split(' ').map((word, i) => (
                            <motion.span
                                key={i}
                                variants={fadeInUp}
                                className="block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {project.tagline && (
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-3xl text-white/70 max-w-3xl font-light mb-6"
                        >
                            {project.tagline}
                        </motion.p>
                    )}

                    {project.description && (
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-white/50 max-w-2xl font-light"
                        >
                            {project.description}
                        </motion.p>
                    )}
                </motion.div>
            </section>

            {/* Main Project Image */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-[3rem] border border-white/10"
                >
                    {slug === 'dvt-bid-manager' ? (
                        <BidManagerFlow />
                    ) : (
                        <>
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-premium-navy/50 to-transparent"></div>
                        </>
                    )}
                </motion.div>
            </section>

            {/* Project Information */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                    className="border-t border-white/10 pt-8"
                >
                    <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-8">Project Information</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <div>
                            <h4 className="text-white/40 text-sm mb-2">Client</h4>
                            <p className="text-lg md:text-xl font-medium">{project.client}</p>
                        </div>
                        <div>
                            <h4 className="text-white/40 text-sm mb-2">Year</h4>
                            <p className="text-lg md:text-xl font-medium">{project.year}</p>
                        </div>
                        <div>
                            <h4 className="text-white/40 text-sm mb-2">Role</h4>
                            <p className="text-lg md:text-xl font-medium">{project.role || 'Design & Development'}</p>
                        </div>
                        <div>
                            <h4 className="text-white/40 text-sm mb-2">Scope</h4>
                            <ul className="text-lg md:text-xl font-medium">
                                {project.services?.map((s, i) => (
                                    <li key={i}>{s}</li>
                                )) || <li>Full Service</li>}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Overview Section */}
            {project.overview && (
                <section className="px-4 md:px-8 max-w-4xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-display mb-6 text-premium-blue">Overview</h2>
                        <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light">
                            {project.overview}
                        </p>
                    </motion.div>
                </section>
            )}


            {/* Case Study Detail: Problem & Solution */}
            {(project.problem || project.solution) && (
                <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32">
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                        {project.problem && (
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-6">The Challenge</h3>
                                <div className="prose prose-invert prose-lg">
                                    <p className="text-white/80 leading-relaxed">
                                        {project.problem}
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {project.solution && (
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-6">The Solution</h3>
                                <div className="prose prose-invert prose-lg">
                                    <p className="text-white/80 leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </section>
            )}

            {/* Tech Stack */}
            {project.techStack && (
                <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32 bg-white/5 py-20 rounded-2xl">
                    <div className="max-w-5xl mx-auto">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center text-2xl md:text-3xl font-display mb-12"
                        >
                            Technology Stack
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {project.techStack.map((stack, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <h4 className="text-premium-blue font-mono text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block">{stack.category}</h4>
                                    <ul className="space-y-3">
                                        {stack.items.map((item, i) => (
                                            <li key={i} className="text-lg text-white/80">{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Result Section */}
            {project.result && (
                <section className="px-4 md:px-8 max-w-4xl mx-auto mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-8">Key Impact</h3>
                        <p className="text-2xl md:text-4xl font-display leading-tight text-white">
                            {project.result}
                        </p>
                    </motion.div>
                </section>
            )}

            {/* Gallery */}
            {project.gallery && (
                <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32">
                    <div className={`${project.galleryLayout?.includes('flex') ? project.galleryLayout : `grid ${project.galleryLayout || 'md:grid-cols-2 gap-8'}`}`}>
                        {project.gallery.map((item, index) => {
                            // Split classes into container (layout/width) and inner (aspect ratio)
                            const containerClasses = item.className ? item.className.replace(/aspect-\[.*?\]/g, '').trim() : '';
                            const aspectClass = item.className?.match(/aspect-\[.*?\]/)?.[0] || 'aspect-[16/10]';

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    className={`group ${containerClasses}`}
                                >
                                    <div className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl md:rounded-[2rem] bg-premium-navy-light border border-white/10 mb-4`}>
                                        <img
                                            src={item.src}
                                            alt={item.caption || 'Project visual'}
                                            className={`w-full h-full ${item.imageClassName || 'object-cover'} transform group-hover:scale-105 transition-transform duration-700`}
                                        />
                                    </div>
                                    {item.caption && (
                                        <p className="text-sm font-mono text-white/50 text-center">{item.caption}</p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* Testimonial */}
            {project.testimonial && (
                <section className="px-4 md:px-8 max-w-5xl mx-auto mb-40 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {project.testimonial.image && (
                            <div className="inline-flex p-1 bg-white/5 rounded-full mb-8 relative z-10">
                                <img
                                    src={project.testimonial.image}
                                    alt={project.testimonial.author}
                                    className="w-20 h-20 rounded-full border-2 border-premium-navy object-cover"
                                />
                            </div>
                        )}
                        <blockquote className="text-3xl md:text-5xl font-display font-light leading-snug mb-8">
                            &quot;{project.testimonial.quote}&quot;
                        </blockquote>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-white/50 font-mono text-sm"
                        >
                            <span className="block text-white font-medium">{project.testimonial.author}</span>
                            <span>{project.testimonial.role}</span>
                        </motion.div>
                    </motion.div>
                </section>
            )}

            {/* CTA */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-40">
                <div className="grid md:grid-cols-2 gap-12 items-end">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {['READY TO', 'TRANSFORM', 'YOUR BRAND?'].map((line, i) => (
                            <motion.div
                                key={i}
                                className="overflow-hidden"
                            >
                                <motion.h2
                                    variants={{
                                        hidden: { x: '100%' },
                                        visible: { x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    className="text-5xl md:text-8xl font-display font-bold uppercase leading-none"
                                >
                                    {line}
                                </motion.h2>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 text-2xl md:text-3xl border-b border-white pb-2 hover:text-premium-blue hover:border-premium-blue transition-all duration-300 group"
                        >
                            Let&apos;s work together
                            <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Other Work Carousel */}
            <section className="pb-32 overflow-hidden">
                <div className="px-4 md:px-8 mb-12">
                    <h3 className="text-2xl md:text-3xl font-display">Have a look at some of our other work.</h3>
                </div>

                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex gap-8 w-fit"
                        animate={{ x: ['-25%', '0%'] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate projects multiple times to create seamless loop even on large screens */}
                        {[...otherProjects, ...otherProjects, ...otherProjects, ...otherProjects].map((p, i) => (
                            <div
                                key={`${p.slug}-${i}`}
                                className="w-[300px] md:w-[400px] flex-none group"
                            >
                                <Link href={`/projects/${p.slug}`}>
                                    <div className="aspect-[4/5] bg-white/5 mb-6 rounded-lg overflow-hidden group-hover:bg-white/10 transition-colors relative">
                                        <div className="absolute inset-0 bg-premium-blue/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        {p.slug === 'dvt-bid-manager' ? (
                                            <BidManagerFlow />
                                        ) : p.image ? (
                                            <img
                                                src={p.image}
                                                alt={p.name}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-4xl">
                                                {p.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="text-2xl font-display mb-1 group-hover:text-premium-blue transition-colors">{p.name}</h4>
                                    <p className="text-white/50 font-mono text-sm">{p.client}</p>
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
