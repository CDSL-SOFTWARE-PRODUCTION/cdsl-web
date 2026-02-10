import type { Metadata } from 'next';
import Hero from '@components/sections/home/Hero';
import ApproachSection from '@components/sections/home/ApproachSection';
import CapabilitiesSection from '@components/sections/home/CapabilitiesSection';
import Work from '@components/sections/home/Work';
import BoutiqueSection from '@components/sections/home/BoutiqueSection';

export const metadata: Metadata = {
    title: "CDSL - Technology Solutions",
    description: "CDSL is a technology partner, specializing in software development, digital transformation, IoT integration, and AI solutions.",
};

export default function Home() {
    return (
        <>
            <Hero />
            <ApproachSection />
            <Work />
            <CapabilitiesSection />
            <BoutiqueSection />
        </>
    );
}
