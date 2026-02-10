'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Product Strategy",
        description: "We don't just build, we partner. Our strategy-first approach ensures every line of code serves a business objective.",
        icon: "compass"
    },
    {
        title: "Web & Mobile Development",
        description: "High-performance, scalable applications built with modern frameworks to deliver exceptional user experiences.",
        icon: "code"
    },
    {
        title: "UX & UI Design",
        description: "Design that resonates. We create intuitive interfaces that tell your brand's story and simplify complex user journeys.",
        icon: "layers"
    },
    {
        title: "Cloud & Systems Scaling",
        description: "Resilient infrastructure designed to handle the most demanding workloads. We make systems that don't just work—they perform.",
        icon: "cloud"
    },
    {
        title: "AI Integration",
        description: "Pragmatic AI implementation. We embed intelligence into your business processes to enhance decision-making and efficiency.",
        icon: "cpu"
    },
    {
        title: "Recruitment",
        description: "Our specialized hiring team finds the top 1% of talent tailored to your culture and tech stack.",
        icon: "users"
    }
];

export const Services: React.FC = () => {
    return (
        <section className="py-32 bg-premium-navy-light relative overflow-hidden transition-colors duration-300">
            <div className="site-container px-4 relative z-10">
                <motion.div
                    className="max-w-3xl mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-premium-blue font-mono text-sm tracking-widest uppercase mb-4 block">Our Expertise</span>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 transition-colors duration-300">
                        Engineering Business Value
                    </h2>
                    <p className="text-xl text-premium-gray font-light leading-relaxed transition-colors duration-300">
                        We don't just write code. We partner with you to solve critical business challenges through technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="group p-8 border border-white/5 bg-premium-navy-light hover:border-premium-blue/50 transition-all duration-500 rounded-sm"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="mb-6 text-premium-blue opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                <div className="w-12 h-12 flex items-center justify-center bg-premium-blue/10 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h10" /><path d="M7 12h10" /><path d="M7 17h10" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-semibold text-white mb-4 group-hover:text-premium-blue transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-premium-gray leading-relaxed font-light transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
