'use client';

import React from 'react';
import Link from 'next/link';
import { footerMenu } from '@data/menu';
import Logo from '@components/ui/Logo';
import { siteConfig } from '@data/config';

interface FooterProps {
    footerCta?: {
        title: string;
        description: string;
        hideCta: boolean;
        button: {
            text: string;
            link: string;
            target?: string;
        };
    };
}

export const Footer: React.FC<FooterProps> = ({ footerCta }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-premium-navy text-white pt-32 pb-12 border-t border-white/5 relative overflow-hidden transition-colors duration-300">
            {/* Footer CTA */}
            <div className="site-container px-4 mb-32 relative z-10">
                <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-12 text-center md:text-left text-white transition-colors">
                    Let's build <br />
                    <span className="text-premium-blue">Something Great.</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12 transition-colors">
                    <p className="text-xl text-premium-gray max-w-xl font-light transition-colors">
                        Ready to transform your operations? We help you scale with purpose-built technology.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-12 py-4 text-xl font-bold bg-premium-blue text-premium-navy hover:bg-premium-blue/80 transition-colors">
                        Start a Project
                    </Link>
                </div>
            </div>

            {/* Footer Links */}
            <div className="site-container px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12 transition-colors">
                    <div className="col-span-1 md:col-span-2">
                        <Logo variant="footer" />
                        <p className="mt-6 text-premium-gray/70 font-mono text-sm max-w-xs">
                            Advanced technology solutions for the modern enterprise.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-white font-bold mb-6">Menu</h3>
                        <ul className="space-y-4">
                            {footerMenu.map(item => (
                                <li key={item.name}>
                                    <Link href={item.link} className="text-premium-gray hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-premium-gray/60 font-mono">
                    <p>© {currentYear} {siteConfig.companyName}. All rights reserved.</p>
                    <p>Designed with purpose.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
