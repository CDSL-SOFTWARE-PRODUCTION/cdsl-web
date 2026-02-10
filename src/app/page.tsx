import type { Metadata } from 'next';
import Hero from '@components/sections/home/Hero';
import Services from '@components/sections/home/Services';
import Work from '@components/sections/home/Work';

export const metadata: Metadata = {
    title: "CDSL - Advanced Technology Solutions",
    description: "CDSL is your forward-thinking technology partner, specializing in software development, digital transformation, IoT integration, and AI solutions.",
};

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Work />

            <section className="py-24 bg-premium-navy-light relative overflow-hidden transition-colors duration-300">
                <div className="site-container px-4 relative z-10 text-center">
                    <h2 className="text-4xl font-display font-bold mb-6 text-white transition-colors">More Premium Content Coming Soon</h2>
                    <p className="text-premium-gray max-w-2xl mx-auto transition-colors">We are rebuilding our component library to match this new premium aesthetic.</p>
                </div>
            </section>
        </>
    );
}
