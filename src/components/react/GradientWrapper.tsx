import React from 'react';

interface GradientWrapperProps {
    children: React.ReactNode;
    className?: string;
    position?: 'top' | 'bottom' | 'center';
}

export const GradientWrapper: React.FC<GradientWrapperProps> = ({
    children,
    className = "",
    position = 'top'
}) => {
    const positionClasses = {
        top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
        bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
        center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Decorative Glows */}
            <div className={`absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none z-0 ${positionClasses[position]} bg-gradient-to-r from-orange-400 via-peach-300 to-yellow-200 animate-pulse-slow`}></div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GradientWrapper;
