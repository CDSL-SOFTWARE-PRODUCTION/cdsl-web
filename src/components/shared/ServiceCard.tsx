'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Stat {
    value: string;
    label: string;
}

interface ServiceCardProps {
    title: string;
    description: string;
    features: string[];
    icon?: LucideIcon;
    stats?: Stat[];
    layout?: 'default' | 'full-width';
    className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    features,
    icon: Icon,
    stats,
    layout = 'default',
    className = ''
}) => {
    const isFullWidth = layout === 'full-width';

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`
                group relative bg-premium-navy-light rounded-[5px] border border-white/5
                hover:border-premium-blue/30 transition-colors duration-300 overflow-hidden
                ${isFullWidth ? 'p-8 md:p-12' : 'p-8'}
                ${className}
            `}
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className={`flex flex-col ${isFullWidth ? 'md:flex-row md:items-start md:gap-12' : 'gap-8'}`}>
                <div className={`${isFullWidth ? 'md:w-1/2' : 'w-full'}`}>
                    {Icon && (
                        <div className="mb-6 inline-flex p-3 rounded-lg bg-premium-navy border border-white/5 text-premium-blue group-hover:text-white group-hover:border-premium-blue/50 transition-colors duration-300">
                            <Icon size={24} strokeWidth={1.5} />
                        </div>
                    )}

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-premium-blue transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="text-premium-gray font-light leading-relaxed mb-8">
                        {description}
                    </p>

                    {stats && (
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-premium-blue/60">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className={`${isFullWidth ? 'md:w-1/2' : 'w-full'}`}>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">
                        Capabilities
                    </h4>
                    <ul className="space-y-4">
                        {features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm text-premium-gray group-hover:text-white transition-colors duration-300">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-premium-blue/50 group-hover:bg-premium-blue transition-colors duration-300" />
                                <span className="font-light">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
