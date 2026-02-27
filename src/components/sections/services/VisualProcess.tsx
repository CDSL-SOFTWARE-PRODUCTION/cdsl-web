'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Activity, Layers, Server, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const VisualProcess: React.FC = () => {
    const t = useTranslations('ServicesPage');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });

    const steps = [
        {
            id: '01',
            title: t('processStep1Title'),
            subtitle: t('processStep1Subtitle'),
            description: t('processStep1Desc'),
            icon: Activity,
            metrics: [
                { label: t('metricCodeHealth'), value: '45%' },
                { label: t('metricSecurity'), value: t('metricCritical') }
            ]
        },
        {
            id: '02',
            title: t('processStep2Title'),
            subtitle: t('processStep2Subtitle'),
            description: t('processStep2Desc'),
            icon: Layers,
            metrics: [
                { label: t('metricVelocity'), value: t('metricHigh') },
                { label: t('metricArchitecture'), value: t('metricMicroservices') }
            ]
        },
        {
            id: '03',
            title: t('processStep3Title'),
            subtitle: t('processStep3Subtitle'),
            description: t('processStep3Desc'),
            icon: Server,
            metrics: [
                { label: t('metricUptime'), value: '99.99%' },
                { label: t('metricGrowth'), value: '+140%' }
            ]
        }
    ];

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-premium-navy border-t border-white/5">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="site-container w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="relative z-10">
                        <span className="text-premium-blue font-mono text-xs uppercase tracking-widest mb-4 block">
                            {t('processTitle')}
                        </span>

                        <div className="relative h-[400px]">
                            {steps.map((step, index) => {
                                // Calculate opacity based on scroll position
                                const start = index / steps.length;
                                const end = (index + 1) / steps.length;
                                const opacity = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                                const y = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50]);
                                const pointerEvents = useTransform(smoothProgress, (val) => (val >= start && val < end ? 'auto' : 'none'));

                                return (
                                    <motion.div
                                        key={step.id}
                                        style={{ opacity, y, pointerEvents }}
                                        className="absolute inset-0 flex flex-col justify-center"
                                    >
                                        <div className="text-8xl font-bold text-white/5 absolute -left-12 -top-12 select-none font-display">
                                            {step.id}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                                            {step.title}
                                        </h2>
                                        <p className="text-xl text-premium-blue font-mono mb-6">
                                            // {step.subtitle}
                                        </p>
                                        <p className="text-lg text-premium-gray font-light leading-relaxed max-w-md">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Visual Visualization */}
                    <div className="relative h-[500px] w-full bg-premium-navy-light/30 rounded-lg border border-white/10 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-grid opacity-20" />
                        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

                        {/* Phase 1: Diagnostic (Wireframe/Nodes) */}
                        <motion.div
                            style={{
                                opacity: useTransform(smoothProgress, [0, 0.25], [1, 0]),
                                scale: useTransform(smoothProgress, [0, 0.25], [1, 0.8])
                            }}
                            className="absolute"
                        >
                            <div className="flex gap-4">
                                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="p-4 bg-red-500/10 border border-red-500/30 rounded backdrop-blur">
                                    <ShieldCheck className="w-12 h-12 text-red-400" />
                                    <div className="text-xs text-red-400 font-mono mt-2">{t('processDiagnosticVuln')}</div>
                                </motion.div>
                                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="p-4 bg-orange-500/10 border border-orange-500/30 rounded backdrop-blur">
                                    <Activity className="w-12 h-12 text-orange-400" />
                                    <div className="text-xs text-orange-400 font-mono mt-2">{t('processDiagnosticLatency')}</div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Phase 2: Build (Stack Assembly) */}
                        <motion.div
                            style={{
                                opacity: useTransform(smoothProgress, [0.25, 0.4, 0.6, 0.7], [0, 1, 1, 0]),
                                y: useTransform(smoothProgress, [0.25, 0.4], [50, 0])
                            }}
                            className="absolute w-64"
                        >
                            <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                <div className="h-12 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center text-blue-300 font-mono text-sm">{t('processBuildFrontend')}</div>
                                <div className="h-12 bg-green-500/20 border border-green-500/50 rounded flex items-center justify-center text-green-300 font-mono text-sm">{t('processBuildGateway')}</div>
                                <div className="h-12 bg-purple-500/20 border border-purple-500/50 rounded flex items-center justify-center text-purple-300 font-mono text-sm">{t('processBuildDB')}</div>
                            </motion.div>
                        </motion.div>

                        {/* Phase 3: Scale (Performance Graph) */}
                        <motion.div
                            style={{
                                opacity: useTransform(smoothProgress, [0.65, 0.8], [0, 1]),
                                scale: useTransform(smoothProgress, [0.65, 0.8], [0.9, 1])
                            }}
                            className="absolute w-full px-12"
                        >
                            <div className="h-48 flex items-end gap-2">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: '10%' }}
                                        animate={{ height: `${30 + Math.random() * 70}%` }}
                                        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: i * 0.05 }}
                                        className="flex-1 bg-gradient-to-t from-premium-blue to-teal-400 rounded-t-sm opacity-80"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between text-xs font-mono text-premium-blue mt-4">
                                <span>{t('processScaleMetric1')}</span>
                                <span>{t('processScaleMetric2')}</span>
                            </div>
                        </motion.div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-6 left-6 right-6 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                style={{ width: useTransform(smoothProgress, [0, 1], ['0%', '100%']) }}
                                className="h-full bg-premium-blue"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
