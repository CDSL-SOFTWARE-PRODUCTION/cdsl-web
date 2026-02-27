'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../motion/ScrollReveal';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const FocusSection: React.FC = () => {
    const t = useTranslations('AboutPage');
    const cards = [
        {
            id: '01',
            title: t('focusCard1Title'),
            description: t('focusCard1Desc')
        },
        {
            id: '02',
            title: t('focusCard2Title'),
            description: t('focusCard2Desc')
        },
        {
            id: '03',
            title: t('focusCard3Title'),
            description: t('focusCard3Desc')
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-premium-navy text-white overflow-hidden border-t border-white/5">
            <div className="site-container px-4">
                {/* Bold Statement Section */}
                <div className="mb-32">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-semibold tracking-widest uppercase text-premium-blue opacity-60 mb-4">
                            {t('focusTitle')}
                        </span>
                        <h2 className="text-[8vw] md:text-[6vw] font-bold leading-[1.3] tracking-tighter uppercase font-display pt-8">
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                                >
                                    {t('focusHeadline1')}
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
                                        {t('focusHeadline2')}
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
                                    {t('focusHeadline3')}
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
                                {t('lifeTitle')}
                            </h3>
                            <p className="text-xl text-premium-gray font-light mb-12 max-w-sm">
                                {t('lifeSubtitle')}
                            </p>

                            <Link href="/contact">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="inline-flex items-center gap-4 py-4 px-8 border border-white/10 rounded-full hover:bg-white hover:text-premium-navy transition-colors cursor-pointer"
                                >
                                    <span className="text-sm font-semibold tracking-widest uppercase">{t('lifeCta')}</span>
                                </motion.div>
                            </Link>
                        </ScrollReveal>
                    </div>

                    <motion.div
                        className="md:col-start-7 md:col-span-6 space-y-12"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {cards.map((card) => (
                            <motion.div
                                key={card.id}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
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
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FocusSection;
