'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, X } from 'lucide-react';
import ScrollReveal from '@components/motion/ScrollReveal';
import { useTranslations, useLocale } from 'next-intl';

export const PricingSection: React.FC = () => {
    const t = useTranslations('ServicesPage');
    const locale = useLocale();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'smb' | 'enterprise'>('smb');

    // Placeholder Tally URLs (replace YOUR_FORM_ID_VI/EN with actual IDs)
    const tallyUrl = locale === 'vi'
        ? 'https://tally.so/r/YOUR_FORM_ID_VI'
        : 'https://tally.so/r/YOUR_FORM_ID_EN';

    const priceAnchor = locale === 'vi' ? 'Từ ' : 'From ';

    const smbPlans = [
        {
            id: 'smb-website',
            name: t('smbPlan1Name'),
            price: t('smbPlan1Price'),
            duration: t('smbPlan1Duration'),
            description: t('smbPlan1Desc'),
            features: [
                t('smbPlan1Feature1'),
                t('smbPlan1Feature2'),
                t('smbPlan1Feature3'),
                t('smbPlan1Feature4'),
                t('smbPlan1Feature5'),
            ],
            highlighted: false,
        },
        {
            id: 'smb-landing-crm',
            name: t('smbPlan2Name'),
            price: t('smbPlan2Price'),
            duration: t('smbPlan2Duration'),
            description: t('smbPlan2Desc'),
            features: [
                t('smbPlan2Feature1'),
                t('smbPlan2Feature2'),
                t('smbPlan2Feature3'),
                t('smbPlan2Feature4'),
                t('smbPlan2Feature5'),
            ],
            highlighted: true,
        },
        {
            id: 'smb-ecommerce',
            name: t('smbPlan3Name'),
            price: t('smbPlan3Price'),
            duration: t('smbPlan3Duration'),
            description: t('smbPlan3Desc'),
            features: [
                t('smbPlan3Feature1'),
                t('smbPlan3Feature2'),
                t('smbPlan3Feature3'),
                t('smbPlan3Feature4'),
                t('smbPlan3Feature5'),
            ],
            highlighted: false,
        },
        {
            id: 'smb-app-portal',
            name: t('smbPlan4Name'),
            price: t('smbPlan4Price'),
            duration: t('smbPlan4Duration'),
            description: t('smbPlan4Desc'),
            features: [
                t('smbPlan4Feature1'),
                t('smbPlan4Feature2'),
                t('smbPlan4Feature3'),
                t('smbPlan4Feature4'),
                t('smbPlan4Feature5'),
            ],
            highlighted: false,
        },
        {
            id: 'smb-bot-automation',
            name: t('smbPlan5Name'),
            price: t('smbPlan5Price'),
            duration: t('smbPlan5Duration'),
            description: t('smbPlan5Desc'),
            features: [
                t('smbPlan5Feature1'),
                t('smbPlan5Feature2'),
                t('smbPlan5Feature3'),
                t('smbPlan5Feature4'),
                t('smbPlan5Feature5'),
            ],
            highlighted: false,
        },
        {
            id: 'smb-payment-invoice',
            name: t('smbPlan6Name'),
            price: t('smbPlan6Price'),
            duration: t('smbPlan6Duration'),
            description: t('smbPlan6Desc'),
            features: [
                t('smbPlan6Feature1'),
                t('smbPlan6Feature2'),
                t('smbPlan6Feature3'),
                t('smbPlan6Feature4'),
                t('smbPlan6Feature5'),
            ],
            highlighted: false,
        }
    ];

    const enterprisePlans = [
        {
            id: 'ent-mvp',
            name: t('plan1Name'),
            price: t('plan1Price'),
            duration: t('plan1Duration'),
            description: t('plan1Desc'),
            features: [
                t('plan1Feature1'),
                t('plan1Feature2'),
                t('plan1Feature3'),
                t('plan1Feature4'),
                t('plan1Feature5'),
            ],
            highlighted: false,
        },
        {
            id: 'ent-dedicated',
            name: t('plan2Name'),
            price: t('plan2Price'),
            duration: t('plan2Duration'),
            description: t('plan2Desc'),
            features: [
                t('plan2Feature1'),
                t('plan2Feature2'),
                t('plan2Feature3'),
                t('plan2Feature4'),
                t('plan2Feature5'),
            ],
            highlighted: true,
        },
        {
            id: 'ent-enterprise',
            name: t('plan3Name'),
            price: t('plan3Price'),
            duration: t('plan3Duration'),
            description: t('plan3Desc'),
            features: [
                t('plan3Feature1'),
                t('plan3Feature2'),
                t('plan3Feature3'),
                t('plan3Feature4'),
                t('plan3Feature5'),
            ],
            highlighted: false,
        }
    ];

    const displayPlans = activeTab === 'smb' ? smbPlans : enterprisePlans;

    return (
        <section className="py-32 bg-premium-navy relative overflow-hidden border-t border-white/5">
            {/* Background Details */}
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute -top-40 right-[-10%] w-[500px] h-[500px] bg-premium-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="site-container px-4 relative z-10">
                <ScrollReveal direction="up" className="mb-20 text-center max-w-3xl mx-auto">
                    <span className="text-premium-blue font-mono text-xs uppercase tracking-widest mb-4 block">
                        {t('pricingSubtitle')}
                    </span>
                    <h2 className="text-4xl md:text-5xl text-white mb-6">
                        {t('pricingTitle1')}
                        <br />
                        <span className="text-premium-gray">{t('pricingTitle2')}</span>
                    </h2>
                    <p className="text-premium-gray text-lg font-light mb-12">
                        {t('pricingDesc')}
                    </p>

                    {/* Toggle Switch */}
                    <div className="flex justify-center items-center bg-transparent border border-white/20 p-2 rounded-full mx-auto w-fit">
                        <button
                            onClick={() => setActiveTab('smb')}
                            className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest font-mono transition-all duration-300 ${activeTab === 'smb' ? 'bg-premium-blue text-premium-navy shadow-[0_0_20px_rgba(102,252,241,0.2)]' : 'text-white hover:text-premium-blue'}`}
                        >
                            {t('tabSmb')}
                        </button>
                        <button
                            onClick={() => setActiveTab('enterprise')}
                            className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest font-mono transition-all duration-300 ${activeTab === 'enterprise' ? 'bg-premium-blue text-premium-navy shadow-[0_0_20px_rgba(102,252,241,0.2)]' : 'text-white hover:text-premium-blue'}`}
                        >
                            {t('tabEnterprise')}
                        </button>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayPlans.map((plan, index) => (
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
                                    <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-xl text-premium-gray">{priceAnchor}</span>
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    </div>
                                    <span className="font-mono text-sm text-premium-blue">{plan.duration}</span>
                                    <p className="mt-4 text-premium-gray font-light text-sm leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-4 mb-6">
                                        {plan.features.slice(0, 2).map((feature, i) => (
                                            <li key={`base-${i}`} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-premium-blue shrink-0 mt-0.5" />
                                                <span className="text-white text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-4 border-t border-white/5 mb-6">
                                        <h4 className="text-xs font-mono uppercase text-premium-gray tracking-widest mb-4">
                                            {locale === 'vi' ? 'Tuỳ chọn Nâng cao' : 'Optional Add-ons'}
                                        </h4>
                                        <ul className="space-y-4 opacity-80">
                                            {plan.features.slice(2).map((feature, i) => (
                                                <li key={`upsell-${i}`} className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full border border-premium-gray/30 flex items-center justify-center shrink-0 mt-0.5">
                                                        <span className="text-premium-gray text-xs">+</span>
                                                    </div>
                                                    <span className="text-premium-gray text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        setSelectedPlanId(plan.id);
                                        setIsModalOpen(true);
                                    }}
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

            {/* Tally.so Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-premium-navy w-full max-w-3xl h-[80vh] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-white/10 text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <iframe
                                src={`${tallyUrl}?plan=${selectedPlanId}&alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                marginHeight={0}
                                marginWidth={0}
                                title="Tally Form"
                                className="w-full h-full bg-transparent"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PricingSection;
