'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Code, Terminal, Cpu } from 'lucide-react';
import ScrollReveal from '@components/motion/ScrollReveal';
import { useTranslations } from 'next-intl';

export const CapabilitiesList: React.FC = () => {
    const t = useTranslations('ServicesPage');
    const [activeId, setActiveId] = useState<string | null>(null);

    const capabilities = [
        {
            id: '01',
            title: t('cap1Title'),
            icon: Cpu,
            category: t('cap1Category'),
            description: t('cap1Desc'),
            features: [t('cap1Feature1'), t('cap1Feature2'), t('cap1Feature3'), t('cap1Feature4')],
            codeSnippet: `// Platform Architecture\nconst infrastructure = await System.build({\n  frontend: "Next.js 14",\n  backend: "Serverless Edge",\n  database: "PostgreSQL",\n  scale: "Global"\n});`
        },
        {
            id: '02',
            title: t('cap2Title'),
            icon: Code,
            category: t('cap2Category'),
            description: t('cap2Desc'),
            features: [t('cap2Feature1'), t('cap2Feature2'), t('cap2Feature3'), t('cap2Feature4')],
            codeSnippet: `// Operational Automation\n/* Automating revenue workflow */\npipeline.on('deal_closed', async (deal) => {\n  await CRM.sync(deal);\n  await Slack.notify(team);\n  await Billing.invoice(deal.client);\n  return System.optimize();\n});`
        },
        {
            id: '03',
            title: t('cap3Title'),
            icon: ArrowUpRight,
            category: t('cap3Category'),
            description: t('cap3Desc'),
            features: [t('cap3Feature1'), t('cap3Feature2'), t('cap3Feature3'), t('cap3Feature4')],
            codeSnippet: `// Growth Engineering\nconst metrics = await Analytics.analyze({\n  conversion: "+45%",\n  retention: "90%",\n  latency: "12ms"\n});\n\nif (metrics.growth > targets) {\n  System.scale(2.5);\n}`
        }
    ];

    return (
        <section className="py-32 bg-premium-navy relative overflow-hidden border-t border-white/5">
            <div className="site-container px-4">
                <ScrollReveal direction="up" className="mb-24">
                    <span className="text-premium-blue font-mono text-xs uppercase tracking-widest mb-4 block">
                        {t('capabilitiesTitle')}
                    </span>
                    <h2 className="text-4xl md:text-5xl text-white max-w-2xl">
                        {t('capabilitiesHeadline1')} <br />
                        <span className="text-premium-gray">{t('capabilitiesHeadline2')}</span>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* List */}
                    <div className="space-y-8">
                        {capabilities.map((cap) => (
                            <div
                                key={cap.id}
                                onMouseEnter={() => setActiveId(cap.id)}
                                onMouseLeave={() => setActiveId(null)}
                                className="group cursor-pointer border-b border-white/10 pb-8 transition-all duration-300 hover:border-premium-blue"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-premium-blue/10 transition-colors">
                                            <cap.icon className="w-5 h-5 text-premium-gray group-hover:text-premium-blue transition-colors" />
                                        </div>
                                        <h3 className="text-3xl text-white group-hover:text-premium-blue transition-colors">
                                            {cap.title}
                                        </h3>
                                    </div>
                                    <span className="font-mono text-xs text-premium-gray group-hover:text-white transition-colors">
                                        {cap.id}
                                    </span>
                                </div>
                                <p className="text-premium-gray font-light leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                                    {cap.description}
                                </p>
                                <ul className="grid grid-cols-2 gap-2">
                                    {cap.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-premium-gray/60 font-mono">
                                            <Check className="w-3 h-3 text-premium-blue" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Preview / Code Snippet */}
                    <div className="hidden lg:block relative sticky top-32 h-fit">
                        <div className="absolute inset-0 bg-premium-blue/5 blur-3xl rounded-full opacity-20" />

                        <AnimatePresence mode="wait">
                            {activeId ? (
                                <motion.div
                                    key={activeId}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#0D1117] border border-white/10 rounded-lg p-6 font-mono text-sm shadow-2xl relative overflow-hidden"
                                >
                                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        </div>
                                        <span className="text-xs text-premium-gray">system_core.ts</span>
                                    </div>
                                    <pre className="text-blue-300/90 leading-relaxed overflow-x-auto">
                                        <code>{capabilities.find(c => c.id === activeId)?.codeSnippet}</code>
                                    </pre>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-[300px] border border-dashed border-white/10 rounded-lg flex items-center justify-center"
                                >
                                    <div className="text-center text-premium-gray/30">
                                        <Terminal className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                        <p className="font-mono text-sm">{t('hoverInspectCode')}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
