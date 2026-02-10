'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Global Logistics AI",
        category: "Digital Transformation",
        description: "Automating 80% of manual dispatch operations for a logistics giant.",
        tags: ["AI/ML", "React", "Python"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title: "FinTech Core Migration",
        category: "System Architecture",
        description: "Zero-downtime migration of a legacy financial core to cloud-native microservices.",
        tags: ["AWS", "Kubernetes", "Go"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title: "HealthData Secure Exchange",
        category: "Platform Engineering",
        description: "Building a HIPAA-compliant data exchange platform for 50+ hospitals.",
        tags: ["Security", "Node.js", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
];

export const Work: React.FC = () => {
    return (
        <section className="py-32 bg-premium-navy relative transition-colors duration-300">
            <div className="site-container px-4">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <span className="text-premium-blue font-mono text-sm tracking-widest uppercase mb-4 block">Selected Work</span>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-white transition-colors duration-300">
                            Impact Delivered
                        </h2>
                    </div>
                    <Link href="/work" className="hidden md:flex items-center gap-2 text-white hover:text-premium-blue transition-colors group">
                        View all case studies
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: [0.17, 0.55, 0.55, 1]
                            }}
                        >
                            <div className={`lg:col-span-7 relative overflow-hidden rounded-sm ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                                <div className="aspect-[16/9] overflow-hidden bg-premium-navy-light relative transition-colors">
                                    <div className="absolute inset-0 bg-premium-blue/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                                <span className="text-premium-blue font-mono text-sm mb-4 block">{project.category}</span>
                                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 group-hover:text-premium-blue transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-premium-gray text-lg font-light leading-relaxed mb-8 transition-colors">
                                    {project.description}
                                </p>
                                <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-sm text-premium-gray font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className={`mt-8 ${index % 2 === 1 ? 'flex justify-end' : ''}`}>
                                    <Link href="#" className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-premium-blue hover:text-premium-blue transition-all">
                                        Read Case Study
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center md:hidden">
                    <Link href="/work" className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-md hover:bg-premium-blue hover:text-premium-navy hover:border-premium-blue transition-colors">
                        View all case studies
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Work;
