import type { Metadata } from 'next';
import HeroSection from '@components/sections/about/HeroSection';
import CompanySection from '@components/sections/about/CompanySection';
import FocusSection from '@components/sections/about/FocusSection';
import ClientsSection from '@components/sections/about/ClientsSection';
import ScrollReveal from '@components/motion/ScrollReveal';

export const metadata: Metadata = {
    title: "About CDSL",
    description: "Your boutique engineering partner for operational architecture and software.",
};

export default function AboutPage() {
    return (
        <main className="bg-premium-navy">
            <HeroSection />
            <CompanySection />
            <FocusSection />
            <ClientsSection />

            <section className="py-24 bg-premium-navy border-t border-white/5">
                <div className="site-container px-4">
                    <ScrollReveal direction="up">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                            <div>
                                <h2 className="text-8xl md:text-[12vw] font-bold leading-none tracking-tighter uppercase mb-2 text-white font-logo">
                                    CDSL<span className="text-premium-blue">™</span>
                                </h2>
                                <p className="text-sm font-medium tracking-widest uppercase text-premium-blue opacity-40">
                                    Engineering / Future / Brands.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-16 md:gap-24">
                                <div>
                                    <span className="block text-xs font-bold tracking-widest uppercase mb-6 text-premium-blue opacity-60">Contact</span>
                                    <ul className="space-y-4">
                                        <li><a href="mailto:contact@cdsl.tech" className="text-lg font-light text-premium-gray hover:text-premium-blue transition-colors">contact@cdsl.tech</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold tracking-widest uppercase mb-6 text-premium-blue opacity-60">Social</span>
                                    <ul className="space-y-4">
                                        <li><a href="https://linkedin.com/company/cdsl" target="_blank" className="text-lg font-light text-premium-gray hover:text-premium-blue transition-colors">LinkedIn</a></li>
                                        <li><a href="#" className="text-lg font-light text-premium-gray hover:text-premium-blue transition-colors">X / Twitter</a></li>
                                        <li><a href="#" className="text-lg font-light text-premium-gray hover:text-premium-blue transition-colors">Github</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
