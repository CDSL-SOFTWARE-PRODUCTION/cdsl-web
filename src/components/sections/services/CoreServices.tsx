'use client';

import React from 'react';
import ScrollReveal from '@components/motion/ScrollReveal';
import { ServiceCard } from '@components/shared/ServiceCard';
import Code2 from 'lucide-react/dist/esm/icons/code-2';
import LayoutIcon from 'lucide-react/dist/esm/icons/layout';
import Cloud from 'lucide-react/dist/esm/icons/cloud';

const CoreServices: React.FC = () => {
    return (
        <section id="core" className="py-24 px-4 site-container relative z-10">
            <ScrollReveal direction="up" distance={30}>
                <div className="mb-20">
                    <div className="inline-block px-4 py-2 bg-premium-blue/10 rounded-full text-premium-blue text-xs font-mono uppercase tracking-widest mb-4">
                        Core Capabilities
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                        Building the digital future.
                    </h2>
                </div>
            </ScrollReveal>



            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <ScrollReveal direction="up" distance={30} delay={0.1}>
                    <ServiceCard
                        title="Web & Mobile Development"
                        description="High-performance, scalable applications built with modern frameworks to deliver exceptional user experiences."
                        features={[
                            "Next.js & React Specialists",
                            "Native iOS & Android Development",
                            "Scalable Backend Infrastructure",
                            "Cross-platform Performance Optimization",
                            "Progressive Web Apps (PWA)"
                        ]}
                        icon={Code2}
                        className="h-full"
                    />
                </ScrollReveal>

                <ScrollReveal direction="up" distance={30} delay={0.2}>
                    <ServiceCard
                        title="UX & UI Design"
                        description="Design that resonates. We create intuitive interfaces that tell your brand's story and simplify complex user journeys."
                        features={[
                            "User Research & Journey Mapping",
                            "Interactive Prototyping",
                            "Modern UI Design Systems",
                            "Accessibility (A11y) Focus",
                            "Motion & Micro-interactions"
                        ]}
                        icon={LayoutIcon}
                        className="h-full"
                    />
                </ScrollReveal>

                <ScrollReveal direction="up" distance={30} delay={0.3}>
                    <ServiceCard
                        title="Cloud & Systems Scaling"
                        description="Resilient infrastructure designed to handle the most demanding workloads. We make systems that don't just work—they perform."
                        features={[
                            "AWS/Azure Infrastructure Orchestration",
                            "Kubernetes & Containerization",
                            "Serverless Architecture Design",
                            "High-Availability & Disaster Recovery",
                            "Real-time Monitoring & Logging"
                        ]}
                        stats={[
                            { value: "5M+", label: "Users Scaled" },
                            { value: "1B+", label: "Daily Transactions" }
                        ]}
                        icon={Cloud}
                        className="h-full"
                    />
                </ScrollReveal>
            </div>
        </section>
    );
};

export default CoreServices;
