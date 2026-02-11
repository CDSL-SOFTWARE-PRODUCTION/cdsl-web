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
                        title="Platform Architecture"
                        description="SaaS & Product Engineering. We build scalable, production-ready applications designed for high-velocity growth. (MVP to Scale)."
                        features={[
                            "Next.js & React Engineering",
                            "Cloud-Native Infrastructure",
                            "Secure Payment & Auth Systems",
                            "Real-time Data Processing",
                            "API-First Architecture"
                        ]}
                        icon={Code2}
                        className="h-full"
                    />
                </ScrollReveal>

                <ScrollReveal direction="up" distance={30} delay={0.2}>
                    <ServiceCard
                        title="Operational Automation"
                        description="RevOps & Workflow Engineering. We eliminate manual friction by architecting autonomous CRM and data pipelines."
                        features={[
                            "CRM Architecture (HubSpot/Salesforce)",
                            "Automated Revenue Pipelines",
                            "Custom Dashboarding & Reporting",
                            "Cross-Tool Data Synchronization",
                            "Process Optimization Audits"
                        ]}
                        icon={LayoutIcon}
                        className="h-full"
                    />
                </ScrollReveal>

                <ScrollReveal direction="up" distance={30} delay={0.3}>
                    <ServiceCard
                        title="Growth Engineering"
                        description="Continuous Delivery & System Evolution. We act as your fractional technical partner, shipping features that drive revenue."
                        features={[
                            "Monthly Feature Sprints",
                            "Performance Optimization",
                            "Technical Debt Management",
                            "Infrastructure Scaling",
                            "Conversion Rate Engineering"
                        ]}
                        stats={[
                            { value: "40%", label: "Avg. Velocity Increase" },
                            { value: "99.9%", label: "Uptime Guarantees" }
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
