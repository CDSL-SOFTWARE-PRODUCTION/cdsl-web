'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import Logo from '@components/ui/Logo';
import { useTranslations } from 'next-intl';
import MotionText from '@components/motion/MotionText';

export const Hero: React.FC = () => {
    const t = useTranslations('HomePage');
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-navy transition-colors duration-300">
            {/* Background Textures */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Technical Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(102,252,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(102,252,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

                {/* Subtle noise texture overlay */}
                <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>

                {/* Premium Gradient Glow */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-premium-blue/5 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-premium-navy-light/30 blur-[150px] rounded-full"></div>
            </div>

            {/* Giant Background Logo with Grid */}
            <div className="absolute inset-0 z-[1] flex justify-center items-center overflow-hidden pointer-events-none select-none">
                {/* Grid pattern behind the logo */}
                <div className="absolute inset-0 bg-grid opacity-40"></div>

                <div className="hero-logo-wrapper w-full flex justify-center relative z-[2]">
                    <Logo
                        variant="hero"
                        className="text-[22vw] md:text-[22vw] lg:text-[18vw] leading-none text-white/5 font-black tracking-widest w-full text-center"
                    />
                </div>
            </div>

            <div className="site-container relative z-10 px-4 w-full h-full flex flex-col justify-center">
                <div className="max-w-7xl mx-auto">
                    {/* Kinetic Typography Headline */}
                    <h1 className="font-display font-bold text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[1.3] tracking-tighter text-white mb-12 transition-colors duration-300 pt-8 uppercase">
                        <MotionText
                            text={t('heroTitle1')}
                            className="block"
                            delayOrder={0.1}
                        />
                        <MotionText
                            text={t('heroTitle2')}
                            className="block text-premium-gray"
                            delayOrder={0.3}
                        />
                        <div className="flex items-center gap-4 md:gap-8">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '1.5em' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1], delay: 0.6 }}
                                className="h-[0.1em] bg-premium-blue hidden md:block"
                            />
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={{
                                    show: {
                                        transition: {
                                            staggerChildren: 0.08,
                                            delayChildren: 0.5,
                                        },
                                    },
                                }}
                                className="inline-block"
                            >
                                {t('heroTitle3').split(' ').map((word, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                                            show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }
                                        }}
                                        className={`inline-block py-1.5 whitespace-pre ${word.toLowerCase() === 'growth' || word.toLowerCase() === 'trưởng' || word.toLowerCase() === 'tăng' ? 'text-premium-blue' : ''}`}
                                    >
                                        {word}{i !== t('heroTitle3').split(' ').length - 1 ? '\u00A0' : ''}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-premium-gray max-w-xl font-light leading-relaxed transition-colors duration-300">
                            {t('heroDesc')}
                        </p>

                        {/* Minimal CTA */}
                        <div className="flex items-center gap-6">
                            <Link href="/projects" className="group flex items-center gap-2 text-white font-medium hover:text-premium-blue transition-colors">
                                <span>{t('heroCta1')}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/contact" className="px-8 py-4 bg-premium-blue text-premium-navy font-bold rounded-none hover:bg-premium-blue/80 transition-colors">
                                {t('heroCta2')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
