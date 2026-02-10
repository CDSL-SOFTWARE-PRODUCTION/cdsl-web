'use client';

import type { Metadata } from 'next';
import { motion, useScroll, useTransform } from 'framer-motion';
import MotionText from '@components/motion/MotionText';
import ScrollReveal from '@components/motion/ScrollReveal';
import { ServiceCard } from '@components/shared/ServiceCard';
import { AccordionSteps } from '@components/sections/services/AccordionSteps';
import Code2 from 'lucide-react/dist/esm/icons/code-2';
import LayoutIcon from 'lucide-react/dist/esm/icons/layout';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import Cloud from 'lucide-react/dist/esm/icons/cloud';
import Truck from 'lucide-react/dist/esm/icons/truck';
import Heart from 'lucide-react/dist/esm/icons/heart';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import ShoppingBag from 'lucide-react/dist/esm/icons/shopping-bag';
import Book from 'lucide-react/dist/esm/icons/book';
import Factory from 'lucide-react/dist/esm/icons/factory';
import BarChart from 'lucide-react/dist/esm/icons/bar-chart-2';
import Map from 'lucide-react/dist/esm/icons/map';

export default function ServicesPage() {
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <main className="bg-premium-navy transition-colors duration-300">
            {/* Hero Section - Matched to About/Projects Design Language */}
            <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-4 overflow-hidden">
                {/* Parallax Background Element */}
                <motion.div
                    style={{ y: yParallax }}
                    className="absolute inset-0 z-0 pointer-events-none opacity-20"
                >
                    <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-premium-blue/40 to-transparent blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-premium-navy-light blur-[100px] rounded-full opacity-50" />
                </motion.div>

                <div className="site-container relative z-10 w-full px-4">
                    <div className="max-w-[1400px]">
                        <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold leading-[0.9] tracking-tighter uppercase mb-12 text-white font-display">
                            <MotionText
                                text="CONNECTING"
                                className="block"
                                delayOrder={0.1}
                            />
                            <div className="flex items-center gap-4 md:gap-8">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '1.5em' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1], delay: 0.4 }}
                                    className="h-[0.1em] bg-premium-blue hidden md:block"
                                />
                                <MotionText
                                    text="CUSTOMERS"
                                    className="block"
                                    delayOrder={0.3}
                                />
                            </div>
                            <MotionText
                                text="BY PRODUCTS."
                                className="block text-premium-blue"
                                delayOrder={0.5}
                            />
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                            <div className="md:col-span-6 lg:col-span-5">
                                <ScrollReveal delay={0.6} direction="up" distance={10}>
                                    <p className="text-xl md:text-2xl text-premium-gray font-light leading-relaxed">
                                        We bridge the gap between complex business challenges and elegant technical solutions.
                                    </p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Strategy Section */}
            <section className="py-24 px-4 site-container relative z-10">
                <ScrollReveal direction="up" distance={30}>
                    <ServiceCard
                        layout="full-width"
                        title="Product Strategy"
                        description="We don't just build, we partner. Our strategy-first approach ensures every line of code serves a business objective."
                        features={[
                            "Clear and Actionable Product Vision",
                            "Stakeholder Alignment from Day One",
                            "Validated Roadmaps Through Market Insights",
                            "Lean and Focused Go-to-Market Strategy",
                            "Strategic Budget and Resource Planning"
                        ]}
                        stats={[
                            { value: "20+", label: "Products Launched" },
                            { value: "$1.2B+", label: "Client Combined Value" }
                        ]}
                        icon={TrendingUp}
                        className="shadow-2xl"
                    />
                </ScrollReveal>
            </section>

            {/* Grid Services Section */}
            <section className="py-24 px-4 site-container relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    <ScrollReveal direction="right" distance={40} delay={0.1}>
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
                        />
                    </ScrollReveal>
                    <ScrollReveal direction="left" distance={40} delay={0.2}>
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
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-32 px-4 site-container relative z-10">
                <ScrollReveal direction="up" distance={30}>
                    <div className="mb-20">
                        <div className="inline-block px-4 py-2 bg-premium-blue/10 rounded-full text-premium-blue text-xs font-mono uppercase tracking-widest mb-4">
                            Industries We Serve
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                            Specialized solutions across<br />diverse industries.
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Logistics", icon: Truck, desc: "Real-time tracking and automated workflows." },
                        { title: "Healthcare", icon: Heart, desc: "Digital appointment systems and AI diagnostics." },
                        { title: "Real Estate", icon: Building2, desc: "Integrated property management systems." },
                        { title: "Retail", icon: ShoppingBag, desc: "Engaging eCommerce and AI customer solutions." },
                        { title: "Education", icon: Book, desc: "Interactive eLearning and adaptive platforms." },
                        { title: "Manufacturing", icon: Factory, desc: "IoT monitoring and predictive maintenance." },
                        { title: "Finance", icon: BarChart, desc: "AI analytics and compliance automation." },
                        { title: "Hospitality", icon: Map, desc: "Dynamic booking and itinerary planners." }
                    ].map((industry, index) => (
                        <ScrollReveal key={industry.title} direction="up" distance={20} delay={index * 0.05}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="p-8 rounded-[5px] bg-premium-navy-light border border-white/5 hover:border-premium-blue/50 transition-colors duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="mb-6 text-premium-blue opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                        <industry.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-premium-blue transition-colors duration-300">{industry.title}</h3>
                                    <p className="text-sm text-premium-gray font-light leading-relaxed group-hover:text-white transition-colors duration-300">{industry.desc}</p>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Cloud Computing Section */}
            <section className="py-24 px-4 site-container relative z-10">
                <ScrollReveal direction="up" distance={30}>
                    <ServiceCard
                        layout="full-width"
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
                    />
                </ScrollReveal>
            </section>

            {/* Recruitment Highlight */}
            <section className="py-32 bg-premium-navy-light border-y border-white/5 mt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(102,252,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(102,252,241,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none"></div>

                <div className="site-container px-4 relative z-10">
                    <ScrollReveal direction="up" distance={30}>
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                                Skilled Tech Talent, Hired for You.
                            </h2>
                            <p className="text-lg text-premium-gray font-light">
                                Skip the hiring headache. We provide the talent you need to move fast.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="right" distance={40} delay={0.2}>
                            <ServiceCard
                                title="Recruitment"
                                description="Our specialized hiring team finds the top 1% of talent tailored to your culture and tech stack."
                                features={[
                                    "Rigorous Technical Assessment",
                                    "Cultural Fit Evaluation",
                                    "Fast Turnaround (Avg. 14 Days)",
                                    "End-to-End Onboarding Support",
                                    "Ongoing Performance Management"
                                ]}
                            />
                        </ScrollReveal>
                        <ScrollReveal direction="left" distance={40} delay={0.3}>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    "Frontend Experts", "Backend Engineers", "DevOps Architects",
                                    "UI/UX Designers", "QA Automation", "Product Managers"
                                ].map(item => (
                                    <div key={item} className="p-4 bg-premium-navy rounded-[5px] border border-white/10 text-premium-gray text-center font-medium hover:text-white hover:border-premium-blue/30 transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-32 px-4 relative z-10">
                <ScrollReveal direction="up" distance={30}>
                    <div className="site-container bg-premium-navy-light rounded-[5px] p-16 md:p-24 border border-white/5 text-center relative overflow-hidden group hover:border-premium-blue/20 transition-all duration-500">
                        <div className="absolute top-10 left-10 text-9xl text-white/5 font-serif font-black select-none pointer-events-none leading-none">“</div>
                        <div className="inline-flex p-1 bg-white/5 rounded-full mb-8 relative z-10">
                            <img src="https://i.pravatar.cc/150?u=eric" alt="Eric Glyman" className="w-16 h-16 rounded-full border-2 border-premium-navy" />
                        </div>
                        <p className="text-3xl md:text-4xl font-display font-light text-white leading-tight mb-12 italic relative z-10">
                            "CDSL transformed our infrastructure, allowing us to process billions of transactions without a single hitch. Their technical depth is matched only by their strategic insight."
                        </p>
                        <div className="text-xl font-display font-bold text-premium-blue relative z-10">Eric Glyman</div>
                        <div className="text-sm font-mono uppercase tracking-[0.2em] text-white/40 relative z-10">Co-Founder & CEO @ Paribus</div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Process Steps */}
            <section className="py-32 px-4 site-container relative z-10">
                <ScrollReveal direction="up" distance={30}>
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-2 bg-premium-blue/10 rounded-full text-premium-blue text-xs font-mono uppercase tracking-widest mb-4">
                            Our Process
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">How we do it</h2>
                    </div>
                </ScrollReveal>
                <ScrollReveal direction="up" distance={30} delay={0.2}>
                    <AccordionSteps />
                </ScrollReveal>
            </section>


        </main>
    );
}
