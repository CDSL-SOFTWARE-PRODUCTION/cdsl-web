import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from '../../motion/ScrollReveal';

const CompanySection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-premium-navy border-t border-white/5">
            <div className="site-container px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    {/* Left Column: Heading */}
                    <div className="md:col-span-5 lg:col-span-4">
                        <ScrollReveal direction="right" distance={40}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-white font-display">
                                Dedicated and seamlessly integrated, a true extension of brands.
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Copy */}
                    <div className="md:col-start-7 md:col-span-6 lg:col-span-5">
                        <ScrollReveal delay={0.2} direction="up">
                            <span className="block text-sm font-semibold tracking-widest uppercase mb-8 text-premium-blue opacity-60">
                                About
                            </span>

                            <div className="space-y-8 text-lg font-light leading-relaxed text-premium-gray">
                                <p>
                                    <strong className="text-white font-semibold">CDSL</strong> is a specialized technology partner. We bridge the gap between complex engineering and elegant digital experiences, acting as a boutique extension for global teams.
                                </p>
                                <p>
                                    Our focus is on building <motion.span
                                        initial={{ backgroundSize: '0% 100%' }}
                                        whileInView={{ backgroundSize: '100% 100%' }}
                                        viewport={{ once: true, amount: 0.8 }}
                                        transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
                                        className="bg-gradient-to-r from-premium-blue/30 to-premium-blue/10 bg-no-repeat bg-[length:0%_100%] px-1 text-white underline decoration-premium-blue/20"
                                    >scalable systems</motion.span> and intuitive products. We don't just write code; we cultivate digital ecosystems that empower brands to thrive in a motion-driven world.
                                </p>
                                <p>
                                    We believe that <strong className="text-white font-medium">precision</strong> and <strong className="text-white font-medium">agility</strong> are the cornerstones of successful transformation. By collaborating closely with our partners, we ensure that every solution is not only technically sound but also perfectly aligned with their brand identity.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanySection;
