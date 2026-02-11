'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Code, Terminal, Cpu } from 'lucide-react';
import ScrollReveal from '@components/motion/ScrollReveal';

const capabilities = [
    {
        id: '01',
        title: 'Platform Architecture',
        category: 'Tier 1: The Build',
        description: 'We engineer scalable, cloud-native platforms from day one. No low-code shortcuts. Just robust, production-grade software.',
        features: ['React / Next.js Infrastructure', 'Microservices Design', 'Scalable Database Schema', 'High-Performance API'],
        codeSnippet: `// Platform Architecture
const infrastructure = await System.build({
  frontend: "Next.js 14",
  backend: "Serverless Edge",
  database: "PostgreSQL",
  scale: "Global"
});`
    },
    {
        id: '02',
        title: 'Operational Automation',
        category: 'Tier 2: The Optimization',
        description: 'We decompile your manual workflows and reassemble them as automated systems. We kill operational friction with code.',
        features: ['CRM Integration (HubSpot/Salesforce)', 'Data Pipeline Engineering', 'Automated Reporting', 'Internal Tooling'],
        codeSnippet: `// Operational Automation
/* Automating revenue workflow */
pipeline.on('deal_closed', async (deal) => {
  await CRM.sync(deal);
  await Slack.notify(team);
  await Billing.invoice(deal.client);
  return System.optimize();
});`
    },
    {
        id: '03',
        title: 'Growth Engineering',
        category: 'Tier 3: The Scale',
        description: 'Marketing is soft. Growth engineering is hard science. We implement A/B testing infrastructure and data loops to scientifically scale revenue.',
        features: ['A/B Testing Frameworks', 'Conversion Rate Optimization', 'User Telemetry & Analytics', 'Performance Monitoring'],
        codeSnippet: `// Growth Engineering
const metrics = await Analytics.analyze({
  conversion: "+45%",
  retention: "90%",
  latency: "12ms"
});

if (metrics.growth > targets) {
  System.scale(2.5);
}`
    }
];

export const CapabilitiesList: React.FC = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section className="py-32 bg-premium-navy relative overflow-hidden border-t border-white/5">
            <div className="site-container px-4">
                <ScrollReveal direction="up" className="mb-24">
                    <span className="text-premium-blue font-mono text-xs uppercase tracking-widest mb-4 block">
                        Our Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white max-w-2xl">
                        Full-cycle engineering. <br />
                        <span className="text-premium-gray">From MVP to IPO.</span>
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
                                <div className="flex items-baseline justify-between mb-4">
                                    <h3 className="text-3xl font-display font-medium text-white group-hover:text-premium-blue transition-colors">
                                        {cap.title}
                                    </h3>
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
                                        <p className="font-mono text-sm">Hover to inspect code architecture</p>
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
