'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../motion/ScrollReveal';

const FocusSection: React.FC = () => {
    const cards = [
        {
            id: '01',
            title: 'High Fidelity',
            description: 'We prioritize technical excellence and visual precision in every line of code we write, ensuring a premium experience for every user.'
        },
        {
            id: '02',
            title: 'Systems Focus',
            description: 'We build with scalability in mind. Our solutions are not just one-offs; they are robust systems designed to grow with your brand.'
        },
        {
            id: '03',
            title: 'Collaborative',
            description: 'We work as an extension of your team, fostering transparent communication and iterative development to achieve shared goals.'
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-premium-navy text-white overflow-hidden border-t border-white/5">
            <div className="site-container px-4">
                {/* Bold Statement Section */}
                <div className="mb-32">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-semibold tracking-widest uppercase text-premium-blue opacity-60 mb-4">
                            Our Focus
                        </span>
                        <h2 className="text-[8vw] md:text-[6vw] font-bold leading-[0.9] tracking-tighter uppercase font-display">
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                                >
                                    WE GO BEYOND
                                </motion.div>
                            </div>
                            <div className="flex items-center gap-4">
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                                    className="h-[0.15em] w-24 bg-premium-blue origin-left hidden md:block"
                                />
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ x: '-100%' }}
                                        whileInView={{ x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                                    >
                                        ENGINEERING.
                                    </motion.div>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                                >
                                    WE TRANSFORM.
                                </motion.div>
                            </div>
                        </h2>
                    </div>
                </div>

                {/* Life @ Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-5">
                        <ScrollReveal direction="right">
                            <h3 className="text-4xl md:text-5xl font-medium mb-8 font-display">
                                Life @ CDSL
                            </h3>
                            <p className="text-xl text-premium-gray font-light mb-12 max-w-sm">
                                How we operate and what defines our partnership with global brands.
                            </p>

                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="inline-flex items-center gap-4 py-4 px-8 border border-white/10 rounded-full hover:bg-white hover:text-premium-navy transition-colors"
                            >
                                <span className="text-sm font-semibold tracking-widest uppercase">Let's work together</span>
                            </motion.a>
                        </ScrollReveal>
                    </div>

                    <div className="md:col-start-7 md:col-span-6 space-y-12">
                        {cards.map((card, index) => (
                            <ScrollReveal
                                key={card.id}
                                delay={index * 0.15}
                                direction="up"
                                distance={30}
                                className="group border-t border-white/5 pt-8"
                            >
                                <div className="flex gap-8 md:gap-12">
                                    <span className="text-sm font-bold tracking-widest text-premium-blue opacity-80">
                                        {card.id}
                                    </span>
                                    <div className="flex-1">
                                        <h4 className="text-2xl font-semibold mb-4 group-hover:text-premium-blue transition-colors font-display">
                                            {card.title}
                                        </h4>
                                        <p className="text-lg text-premium-gray/60 font-light leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FocusSection;
