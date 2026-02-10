import React from 'react';
import { Check } from 'lucide-react';

interface ServiceStat {
    label: string;
    value: string;
}

interface ServiceCardProps {
    title: string;
    description: string;
    features?: string[];
    stats?: ServiceStat[];
    icon?: React.ElementType;
    layout?: 'standard' | 'stat-heavy' | 'full-width';
    className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    features = [],
    stats = [],
    icon: Icon,
    layout = 'standard',
    className = ""
}) => {
    const isFullWidth = layout === 'full-width';
    const isStatHeavy = layout === 'stat-heavy';

    return (
        <div className={`
      group relative p-8 rounded-sm border border-white/5 bg-premium-navy-light 
      hover:border-premium-blue/50 transition-all duration-500
      ${isFullWidth ? 'md:grid md:grid-cols-2 gap-12' : ''}
      ${className}
    `}>
            {/* Decorative background pattern */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="w-24 h-24 border-2 border-dashed border-white rounded-full"></div>
            </div>

            <div className={isFullWidth ? 'flex flex-col justify-center' : ''}>
                {Icon && (
                    <div className="mb-6 inline-flex p-3 bg-premium-blue/10 rounded-2xl text-premium-blue">
                        <Icon size={24} />
                    </div>
                )}

                <h3 className="text-2xl font-display font-bold text-white mb-4">
                    {title}
                </h3>

                <p className="text-premium-gray font-light leading-relaxed mb-8">
                    {description}
                </p>

                {features.length > 0 && (
                    <ul className="space-y-3 mb-8">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-premium-gray/80">
                                <span className="mr-3 mt-1 text-premium-blue opacity-50"><Check size={14} /></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {(isFullWidth || isStatHeavy) && stats.length > 0 && (
                <div className={`
          flex flex-wrap gap-8 items-center
          ${isFullWidth ? 'justify-center border-l border-white/10 pl-12' : ''}
        `}>
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center md:text-left">
                            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs uppercase tracking-widest text-premium-blue/60 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ServiceCard;
