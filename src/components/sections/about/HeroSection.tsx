'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MotionText from '../../motion/MotionText';
import ScrollReveal from '../../motion/ScrollReveal';

const HeroSection: React.FC = () => {
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center bg-premium-navy overflow-hidden pt-32 pb-16">
            {/* Subtle Parallax Background Element */}
            <motion.div
                style={{ y: yParallax }}
                className="absolute inset-0 z-0 pointer-events-none opacity-10"
            >
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-premium-blue to-transparent blur-[120px] rounded-full" />
            </motion.div>

            <div className="site-container relative z-10 px-4">
                <div className="max-w-[1200px]">
                    <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-bold leading-[0.9] tracking-tighter uppercase mb-12 text-white font-display">
                        <MotionText
                            text="OPERATIONAL"
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
                                text="ARCHITECTS"
                                className="block"
                                delayOrder={0.3}
                            />
                        </div>
                        <MotionText
                            text="FOR GROWITH."
                            className="block"
                            delayOrder={0.5}
                        />
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                        <div className="md:col-span-6 lg:col-span-5">
                            <ScrollReveal delay={0.8} direction="up" distance={10}>
                                <p className="text-xl md:text-2xl text-premium-gray font-light leading-relaxed">
                                    A boutique engineering partner, architecting systems for scale.
                                </p>
                            </ScrollReveal>
                        </div>

                        <div className="md:col-offset-2 md:col-span-4 lg:col-span-3 flex justify-end">
                            <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase opacity-40 text-premium-blue"
                            >
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
