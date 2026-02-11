'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MotionText from '@components/motion/MotionText';

const SystemStatusItem = ({ label, value, status }: { label: string, value: string, status: 'normal' | 'warning' | 'optimal' }) => (
    <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 py-2">
        <span className="text-premium-gray uppercase tracking-wider">{label}</span>
        <div className="flex items-center gap-2">
            <span className={`text-${status === 'optimal' ? 'spotify-green' : status === 'warning' ? 'orange-400' : 'premium-blue'}`}>
                {value}
            </span>
            <div className={`w-1.5 h-1.5 rounded-full ${status === 'optimal' ? 'bg-spotify-green animate-pulse' : status === 'warning' ? 'bg-orange-400' : 'bg-premium-blue'}`} />
        </div>
    </div>
);

export const SystemStatusHero: React.FC = () => {
    // Simulated live metrics
    const [requests, setRequests] = useState(2430);
    const [latency, setLatency] = useState(45);

    useEffect(() => {
        const interval = setInterval(() => {
            setRequests(prev => prev + Math.floor(Math.random() * 50) - 20);
            setLatency(prev => Math.max(20, Math.min(100, prev + Math.floor(Math.random() * 10) - 5)));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-4 overflow-hidden border-b border-white/5">
            <div className="site-container relative z-10 w-full px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                    {/* Left: Text Content */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-premium-blue/10 border border-premium-blue/20 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-premium-blue animate-pulse" />
                            <span className="text-xs font-mono text-premium-blue tracking-widest uppercase">System Online</span>
                        </div>

                        <h1 className="text-[10vw] md:text-[7vw] lg:text-[6vw] font-bold leading-[0.9] tracking-tighter uppercase mb-8 text-white font-display">
                            <MotionText text="ENGINEERING" className="block" delayOrder={0.1} />
                            <div className="flex items-center gap-4">
                                <span className="h-[0.1em] w-12 bg-premium-blue block" />
                                <MotionText text="REVENUE" className="block text-premium-gray" delayOrder={0.2} />
                            </div>
                            <MotionText text="ENGINES." className="block text-premium-blue" delayOrder={0.3} />
                        </h1>

                        <p className="text-xl md:text-2xl text-premium-gray font-light max-w-2xl leading-relaxed">
                            We don't just build software. We architect the operational systems that power high-velocity growth.
                        </p>
                    </div>

                    {/* Right: System Status Graphic */}
                    <div className="lg:col-span-5 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-premium-navy-light/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 font-mono text-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-premium-blue to-transparent opacity-50" />

                            <div className="flex justify-between items-center mb-6">
                                <span className="text-white font-bold uppercase tracking-widest">Live Metrics</span>
                                <span className="text-xs text-premium-gray">US-EAST-1</span>
                            </div>

                            <div className="space-y-1">
                                <SystemStatusItem label="Req / Sec" value={requests.toLocaleString()} status="optimal" />
                                <SystemStatusItem label="Avg Latency" value={`${latency}ms`} status="optimal" />
                                <SystemStatusItem label="Error Rate" value="0.001%" status="optimal" />
                                <SystemStatusItem label="Uptime" value="99.99%" status="optimal" />
                                <SystemStatusItem label="Deploy Status" value="Succeeded" status="optimal" />
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-3 text-xs text-premium-blue/70">
                                    <span className="animate-pulse">Monitoring active processes...</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
