'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import ScrollReveal from '@components/motion/ScrollReveal';
import { useTranslations } from 'next-intl';

export const PricingSection: React.FC = () => {
    const t = useTranslations('Pricing');

    const plans = [
        {
            id: 'mvp',
            name: t('plans.mvp.name'),
            price: t('plans.mvp.price'),
            duration: t('plans.mvp.duration'),
            description: t('plans.mvp.description'),
            features: [
                t('plans.mvp.features.f1'),
                t('plans.mvp.features.f2'),
                t('plans.mvp.features.f3'),
                t('plans.mvp.features.f4'),
                t('plans.mvp.features.f5'),
            ],
            highlighted: false,
        },
        {
            id: 'dedicated',
            name: t('plans.dedicated.name'),
            price: t('plans.dedicated.price'),
            duration: t('plans.dedicated.duration'),
            description: t('plans.dedicated.description'),
            features: [
                t('plans.dedicated.features.f1'),
                t('plans.dedicated.features.f2'),
                t('plans.dedicated.features.f3'),
                t('plans.dedicated.features.f4'),
                t('plans.dedicated.features.f5'),
            ],
            highlighted: true,
        },
        {
            id: 'enterprise',
            name: t('plans.enterprise.name'),
            price: t('plans.enterprise.price'),
            duration: t('plans.enterprise.duration'),
            description: t('plans.enterprise.description'),
            features: [
                t('plans.enterprise.features.f1'),
                t('plans.enterprise.features.f2'),
                t('plans.enterprise.features.f3'),
                t('plans.enterprise.features.f4'),
                t('plans.enterprise.features.f5'),
            ],
            highlighted: false,
        }
    ];

    return (
        <section className="py-32 bg-premium-navy relative overflow-hidden border-t border-white/5">
            {/* Background Details */}
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute -top-40 right-[-10%] w-[500px] h-[500px] bg-premium-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="site-container px-4 relative z-10">
                <ScrollReveal direction="up" className="mb-20 text-center max-w-3xl mx-auto">
                    <span className="text-premium-blue font-mono text-xs uppercase tracking-widest mb-4 block">
                        {t('subtitle')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                        {t('title1')}
                        <br />
                        <span className="text-premium-gray">{t('title2')}</span>
                    </h2>
                    <p className="text-premium-gray text-lg font-light">
                        {t('description')}
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <ScrollReveal key={plan.id} direction="up" delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                className={`h-full relative flex flex-col p-8 rounded-xl border ${plan.highlighted
                                    ? 'bg-premium-navy-light border-premium-blue shadow-[0_0_30px_rgba(102,252,241,0.1)]'
                                    : 'bg-[#0D1117] border-white/10 hover:border-premium-blue/50'
                                    } transition-all duration-300`}
                            >
                                {plan.highlighted && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-premium-blue text-premium-navy text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                                            {t('mostPopular')}
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-display font-medium text-white mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    </div>
                                    <span className="font-mono text-sm text-premium-blue">{plan.duration}</span>
                                    <p className="mt-4 text-premium-gray font-light text-sm leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-premium-blue shrink-0 mt-0.5" />
                                                <span className="text-premium-gray text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    className={`w-full py-4 rounded font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-2 group transition-all duration-300 ${plan.highlighted
                                        ? 'bg-premium-blue text-premium-navy hover:bg-white'
                                        : 'bg-white/5 text-white hover:bg-white/10'
                                        }`}
                                >
                                    {t('getStarted')}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
