import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@components/sections/home/Hero';

const ApproachSection = dynamic(() => import('@components/sections/home/ApproachSection'));
const CapabilitiesSection = dynamic(() => import('@components/sections/home/CapabilitiesSection'));
const Work = dynamic(() => import('@components/sections/home/Work'));
const BoutiqueSection = dynamic(() => import('@components/sections/home/BoutiqueSection'));

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
