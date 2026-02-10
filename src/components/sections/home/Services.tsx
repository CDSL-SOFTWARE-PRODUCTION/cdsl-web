'use client';

import React, { useEffect } from 'react';
import { inView, animate } from 'motion';

const services = [
    {
        title: "Digital Transformation",
        description: "We modernize legacy infrastructure and automate complex operational workflows, turning bottlenecks into competitive advantages.",
        icon: "layers"
    },
    {
        title: "Custom Engineering",
        description: "Purpose-built software solutions architected for scale. From high-performance web platforms to complex internal tools.",
        icon: "code"
    },
    {
        title: "MVP Development",
        description: "Rapid iteration cycles for startups and new ventures. We move from concept to market-ready product in weeks, not months.",
        icon: "rocket"
    },
    {
        title: "Cloud & DevOps",
        description: "Resilient infrastructure design. We ensure your systems are secure, scalable, and deployable with zero downtime.",
        icon: "cloud"
    },
    {
        title: "AI Integration",
        description: "Pragmatic AI implementation. We embed intelligence into your business processes to enhance decision-making and efficiency.",
        icon: "cpu"
    },
    {
        title: "Technical Strategy",
        description: "Fractional CTO and advisory services. We guide your technology roadmap to align with long-term business goals.",
        icon: "compass"
    }
];

export const Services: React.FC = () => {
    useEffect(() => {
        inView('.scroll-reveal', (info) => {
            animate(
                info.target,
                { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
                { duration: 0.8, easing: [0.17, 0.55, 0.55, 1] }
            );
        });
    }, []);

    return (
        <section className="py-32 bg-premium-navy-light relative overflow-hidden transition-colors duration-300">
            <div className="site-container px-4 relative z-10">
                <div className="max-w-3xl mb-20 scroll-reveal opacity-0">
                    <span className="text-premium-blue font-mono text-sm tracking-widest uppercase mb-4 block">Our Expertise</span>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 transition-colors duration-300">
                        Engineering Business Value
                    </h2>
                    <p className="text-xl text-premium-gray font-light leading-relaxed transition-colors duration-300">
                        We don't just write code. We partner with you to solve critical business challenges through technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 border border-white/5 bg-premium-navy-light hover:border-premium-blue/50 transition-all duration-500 rounded-sm scroll-reveal opacity-0"
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
