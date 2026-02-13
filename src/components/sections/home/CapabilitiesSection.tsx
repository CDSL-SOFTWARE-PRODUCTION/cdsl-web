'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Lightbulb, Code2, TrendingUp, Search, Target, Smartphone, Globe, LayoutDashboard } from 'lucide-react';

const steps = [
    {
        id: '01',
        title: 'Strategy',
        subtitle: 'Uncovering Opportunity',
        description: 'We don\'t just write code. We analyze your business model to identify technological leverage points that drive revenue and efficiency.',
        icon: Lightbulb,
    },
    {
        id: '02',
        title: 'Execution',
        subtitle: 'Building Your Asset',
        description: 'We deploy a dedicated team to build your proprietary software. No templates, just powerful, scalable platforms owned 100% by you.',
        icon: Code2,
    },
    {
        id: '03',
        title: 'Growth',
        subtitle: 'Market Dominance',
        description: 'We ensure your infrastructure scales effortlessly with your success. Supporting millions of users without compromising performance.',
        icon: TrendingUp,
    }
];

// Pre-calculate bar variations for the growth graph to avoid Math.random() in render
const BAR_COUNT = 20;
const BAR_HEIGHTS = Array.from({ length: BAR_COUNT }, (_, i) => ({
    base: 20 + (i * 4),
    variation: Math.random() * 10
}));

export const CapabilitiesSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });

    const strategyOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
    const strategyScale = useTransform(smoothProgress, [0, 0.25], [1, 0.8]);

    const executionOpacity = useTransform(smoothProgress, [0.25, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const executionY = useTransform(smoothProgress, [0.25, 0.4], [50, 0]);

    const growthOpacity = useTransform(smoothProgress, [0.65, 0.8], [0, 1]);
    const growthScale = useTransform(smoothProgress, [0.65, 0.8], [0.9, 1]);

    const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-premium-navy border-t border-white/5">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="site-container w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="relative z-10">
                        <span className="text-premium-blue font-mono text-xs uppercase tracking-widest mb-4 block">
                            Our Process
                        </span>

                        <div className="relative h-[400px]">
                            {steps.map((step, index) => {
                                // Calculate transform values outside the return to keep it clean
                                const start = index / steps.length;
                                const end = (index + 1) / steps.length;

                                // These useTransforms are initialized once and stay stable
                                const opacity = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                                const y = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50]);
                                const pointerEvents = useTransform(smoothProgress, (val: number) => (val >= start && val < end ? 'auto' : 'none'));

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

                        {/* Phase 1: Strategy (Analysis Node) */}
                        <motion.div
                            style={{ opacity: strategyOpacity, scale: strategyScale }}
                            className="absolute"
                        >
                            <div className="flex gap-4">
                                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="p-4 bg-premium-blue/10 border border-premium-blue/30 rounded backdrop-blur max-w-[200px]">
                                    <Search className="w-10 h-10 text-premium-blue mb-2" />
                                    <div className="text-sm text-white font-medium">Market Analysis</div>
                                    <div className="text-xs text-premium-gray mt-1">Identifying gaps & opportunities</div>
                                </motion.div>
                                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded backdrop-blur max-w-[200px] mt-8">
                                    <Target className="w-10 h-10 text-emerald-400 mb-2" />
                                    <div className="text-sm text-white font-medium">Strategic Roadmap</div>
                                    <div className="text-xs text-premium-gray mt-1">Clear path to ROI</div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Phase 2: Execution (Building Blocks) */}
                        <motion.div
                            style={{ opacity: executionOpacity, y: executionY }}
                            className="absolute w-64"
                        >
                            <motion.div className="space-y-3">
                                <div className="p-3 bg-white/5 border border-white/10 rounded flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-blue-400" />
                                    <span className="text-white text-sm font-medium">Web Platform</span>
                                </div>
                                <div className="p-3 bg-white/5 border border-white/10 rounded flex items-center gap-3 ml-4">
                                    <Smartphone className="w-5 h-5 text-purple-400" />
                                    <span className="text-white text-sm font-medium">Mobile App</span>
                                </div>
                                <div className="p-3 bg-white/5 border border-white/10 rounded flex items-center gap-3">
                                    <LayoutDashboard className="w-5 h-5 text-orange-400" />
                                    <span className="text-white text-sm font-medium">Admin Dashboard</span>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                                    <span className="text-xs text-premium-blue uppercase tracking-widest font-bold">Your Digital Asset</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Phase 3: Growth (Scale Graph) */}
                        <motion.div
                            style={{ opacity: growthOpacity, scale: growthScale }}
                            className="absolute w-full px-12"
                        >
                            <div className="h-48 flex items-end gap-2">
                                {BAR_HEIGHTS.map((bar, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: '10%' }}
                                        animate={{ height: [`${bar.base}%`, `${bar.base + bar.variation}%`, `${bar.base}%`] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                        className="flex-1 bg-gradient-to-t from-premium-blue to-teal-400 rounded-t-sm opacity-80"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between text-xs font-mono text-premium-blue mt-4">
                                <span>User Base</span>
                                <span>Time</span>
                            </div>
                        </motion.div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-6 left-6 right-6 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                style={{ width: progressWidth }}
                                className="h-full bg-premium-blue"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
