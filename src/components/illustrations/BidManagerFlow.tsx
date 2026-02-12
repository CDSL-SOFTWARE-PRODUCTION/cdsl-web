'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, FileText, CheckCircle, Shield, Users } from 'lucide-react';

export const BidManagerFlow: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-premium-navy group">
            <div className="absolute inset-0 bg-grid-white opacity-10" />
            <div className="absolute inset-0 bg-gradient-radial from-premium-blue/5 to-transparent opacity-50" />

            <div className="relative w-full h-full max-w-[500px] max-h-[300px] flex items-center justify-center">
                {/* Central Cloud Node */}
                <motion.div
                    className="absolute z-20 flex flex-col items-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="p-4 bg-premium-navy border border-premium-blue rounded-xl shadow-[0_0_30px_rgba(102,252,241,0.15)] group-hover:shadow-[0_0_50px_rgba(102,252,241,0.3)] transition-shadow duration-500">
                        <Cloud className="w-10 h-10 text-premium-blue" />
                    </div>
                    <div className="mt-4 text-center text-[10px] font-mono text-premium-blue/80 uppercase tracking-widest whitespace-nowrap">Secure Cloud</div>
                </motion.div>

                {/* Satellite Nodes */}
                {[
                    { icon: FileText, x: -140, y: 0, color: "text-white/80", label: "Tender Docs", delay: 0 },
                    { icon: Users, x: 140, y: -60, color: "text-purple-400", label: "Approvers", delay: 0.2 },
                    { icon: Shield, x: 140, y: 60, color: "text-green-400", label: "Security", delay: 0.4 },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className={`absolute z-10 flex flex-col items-center justify-center`}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{ x: item.x, y: item.y, opacity: 1 }}
                        transition={{ delay: 0.5 + item.delay, duration: 0.8, type: "spring", bounce: 0.4 }}
                    >
                        <div className={`p-3 bg-premium-navy border border-white/10 rounded-lg backdrop-blur-sm ${item.color}/10`}>
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <span className="mt-2 text-[10px] uppercase tracking-wider text-white/40 font-mono">{item.label}</span>
                    </motion.div>
                ))}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    <defs>
                        <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(102,252,241,0)" />
                            <stop offset="50%" stopColor="rgba(102,252,241,0.4)" />
                            <stop offset="100%" stopColor="rgba(102,252,241,0)" />
                        </linearGradient>
                    </defs>
                    {[
                        { x1: "50%", y1: "50%", x2: "calc(50% - 140px)", y2: "50%" }, // To Docs
                        { x1: "50%", y1: "50%", x2: "calc(50% + 140px)", y2: "calc(50% - 60px)" }, // To Users
                        { x1: "50%", y1: "50%", x2: "calc(50% + 140px)", y2: "calc(50% + 60px)" }, // To Security
                    ].map((line, i) => (
                        <motion.line
                            key={i}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        />
                    ))}
                </svg>

                {/* Data Packets */}
                {[
                    { path: "M-140,0 L0,0", delay: 2 }, // Upload
                    { path: "M0,0 L140,-60", delay: 3.5 }, // To Approval
                    { path: "M140,-60 L0,0", delay: 5.5 }, // Approved back to cloud
                    { path: "M0,0 L140,60", delay: 7.5 }, // To Security Archive
                ].map((item, i) => (
                    <motion.div
                        key={`packet-${i}`}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-premium-blue rounded-full shadow-[0_0_10px_#66FCF1] z-30"
                        initial={{ offsetDistance: "0%", opacity: 0 }}
                        animate={{
                            offsetDistance: "100%",
                            opacity: [0, 1, 1, 0]
                        }}
                        style={{ offsetPath: `path('${item.path}')` }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 5,
                            delay: item.delay
                        }}
                    />
                ))}

                {/* Floating Checkmark (Approval Simulation) */}
                <motion.div
                    className="absolute top-[40%] right-[25%]"
                    initial={{ opacity: 0, scale: 0, y: 10 }}
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1], y: [10, -20] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 6, delay: 5 }}
                >
                    <CheckCircle className="w-6 h-6 text-green-400 fill-green-400/20" />
                </motion.div>
            </div>
        </div>
    );
};

export default BidManagerFlow;
