'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../motion/ScrollReveal';
import { useTranslations } from 'next-intl';

const CompanySection: React.FC = () => {
    const t = useTranslations('AboutPage');
    return (
        <section className="py-24 md:py-32 bg-premium-navy border-t border-white/5">
            <div className="site-container px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    {/* Left Column: Heading */}
                    <div className="md:col-span-6 lg:col-span-5">
                        <ScrollReveal direction="right" distance={40}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-white font-display">
                                {t('companyTitle')}
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Copy */}
                    <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
                        <ScrollReveal delay={0.2} direction="up">
                            <span className="block text-sm font-semibold tracking-widest uppercase mb-8 text-premium-blue opacity-60">
                                {t('companySubtitle')}
                            </span>

                            <div className="space-y-8 text-lg font-light leading-relaxed text-premium-gray">
                                <p>
                                    <strong className="text-white font-semibold">CDSL</strong> {t('companyP1')}
                                </p>
                                <p>
                                    {t('companyP2Start')} <motion.span
                                        initial={{ backgroundSize: '0% 100%' }}
                                        whileInView={{ backgroundSize: '100% 100%' }}
                                        viewport={{ once: true, amount: 0.8 }}
                                        transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
                                        className="bg-gradient-to-r from-premium-blue/30 to-premium-blue/10 bg-no-repeat bg-[length:0%_100%] px-1 text-white underline decoration-premium-blue/20"
                                    >{t('companyP2Highlight')}</motion.span> {t('companyP2End')}
                                </p>
                                <p>
                                    {t('companyP3Start')} <strong className="text-white font-medium">{t('companyP3Highlight1')}</strong> {t('companyP3Mid')} <strong className="text-white font-medium">{t('companyP3Highlight2')}</strong> {t('companyP3End')}
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
