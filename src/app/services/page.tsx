import type { Metadata } from 'next';
import { ArchitecturalGrid } from '@components/sections/services/ArchitecturalGrid';
import { SystemStatusHero } from '@components/sections/services/SystemStatusHero';
import { CapabilitiesList } from '@components/sections/services/CapabilitiesList';
import { VisualProcess } from '@components/sections/services/VisualProcess';
import IndustriesSection from '@components/sections/services/IndustriesSection';
import ScrollReveal from '@components/motion/ScrollReveal';

export const metadata: Metadata = {
    title: "Services - CDSL",
    description: "Engineering revenue engines. From MVP prototypes to enterprise-grade software ecosystems.",
};

export default function ServicesPage() {
    return (
        <main className="bg-premium-navy relative min-h-screen selection:bg-premium-blue selection:text-premium-navy">
            {/* Background Grid */}
            <ArchitecturalGrid />

            {/* 1. Hero: System Status */}
            <SystemStatusHero />

            {/* 2. Process: Visual Storytelling (Show, Don't Sell) */}
            <VisualProcess />

            {/* 3. Capabilities: Editorial List + Code (Tech Stack) */}
            <CapabilitiesList />

            {/* 4. Industries Section */}
            <IndustriesSection />

            {/* 5. Recruitment Section (Inline) */}
            <section className="py-32 bg-premium-navy-light border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(102,252,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(102,252,241,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none"></div>
                <div className="site-container px-4 relative z-10">
                    <ScrollReveal direction="up" distance={30}>
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                                Skilled Tech Talent, <br className="hidden md:block" /> Hired for You.
                            </h2>
                            <p className="text-lg text-premium-gray font-light">
                                Skip the hiring headache. We provide the specialized engineering talent you need to move fast and scale securely.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            "Frontend Experts", "Backend Engineers", "DevOps Architects",
                            "UI/UX Designers", "QA Automation", "Product Managers"
                        ].map((item, idx) => (
                            <ScrollReveal key={item} direction="up" distance={20} delay={idx * 0.05}>
                                <div className="p-4 bg-premium-navy rounded-sm border border-white/10 text-premium-gray text-center text-sm font-medium hover:text-white hover:border-premium-blue/30 transition-all duration-300">
                                    {item}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Testimonial Section (Inline) */}
            <section className="py-32 px-4 relative z-10">
                <ScrollReveal direction="up" distance={30}>
                    <div className="site-container bg-premium-navy-light rounded-[5px] p-16 md:p-24 border border-white/5 text-center relative overflow-hidden group hover:border-premium-blue/20 transition-all duration-500">
                        <div className="absolute top-10 left-10 text-9xl text-white/5 font-serif font-black select-none pointer-events-none leading-none">“</div>
                        <div className="inline-flex p-1 bg-white/5 rounded-full mb-8 relative z-10">
                            <img src="https://i.pravatar.cc/150?u=eric" alt="Eric Glyman" className="w-16 h-16 rounded-full border-2 border-premium-navy" />
                        </div>
                        <p className="text-2xl md:text-4xl font-display font-light text-white leading-tight mb-12 italic relative z-10 max-w-4xl mx-auto">
                            "CDSL transformed our infrastructure, allowing us to process billions of transactions without a single hitch. Their technical depth is matched only by their strategic insight."
                        </p>
                        <div className="text-xl font-display font-bold text-premium-blue relative z-10">Eric Glyman</div>
                        <div className="text-sm font-mono uppercase tracking-[0.2em] text-white/40 relative z-10">Co-Founder & CEO @ Paribus</div>
                    </div>
                </ScrollReveal>
            </section>
        </main>
    );
}
