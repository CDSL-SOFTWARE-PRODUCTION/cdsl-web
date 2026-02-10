import React from 'react';
import Image from 'next/image';

interface HeroContent {
    title: string;
    description: string;
    backgroundImage?: any;
    overlayOpacity?: number; // Value between 0 and 1
}

interface Props {
    content: HeroContent;
}

export const InnerHero: React.FC<Props> = ({ content }) => {
    return (
        <section className="relative w-full pt-48 pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-premium-navy"></div>
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-premium-navy via-transparent to-premium-navy"></div>
            </div>

            {content.backgroundImage && (
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src={content.backgroundImage}
                        alt=""
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        quality={70}
                    />
                </div>
            )}

            <div className="site-container relative z-10 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                    {content.title}
                </h1>
                {content.description && (
                    <p className="text-xl md:text-2xl text-premium-gray max-w-3xl mx-auto font-light leading-relaxed">
                        {content.description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default InnerHero;
