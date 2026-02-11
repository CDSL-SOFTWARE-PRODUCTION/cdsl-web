'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Plus from 'lucide-react/dist/esm/icons/plus';
import Minus from 'lucide-react/dist/esm/icons/minus';

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

const steps: ProcessStep[] = [
    {
        number: "01",
        title: "Diagnostic & Blueprint",
        description: "We start by deconstructing your current operations. We identify data leaks, process friction, and technical bottlenecks, delivering a comprehensive architectural blueprint for your ideal state."
    },
    {
        number: "02",
        title: "The Core Build",
        description: "A 4-6 week rapid execution phase. We deploy the core operational engine—integrating CRMs, automating workflows, and establishing a 'Single Source of Truth' for your data."
    },
    {
        number: "03",
        title: "Validation & Launch",
        description: "Rigorous testing and user training. We ensure your team is empowered to use the new system, with hand-off documentation and recorded SOPs."
    },
    {
        number: "04",
        title: "Scale & Evolve",
        description: "Growth isn't static. Through our retainer partnership, we continuously ship new features, optimize performance, and adapt the infrastructure as your business scales."
    }
];

export const AccordionSteps: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="max-w-4xl mx-auto">
            {steps.map((step, idx) => (
                <div key={idx} className="border-b border-white/10">
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full py-8 flex items-center justify-between group transition-all"
                    >
                        <div className="flex items-center gap-8">
                            <span className="text-xl font-mono text-premium-blue opacity-40 group-hover:opacity-100 transition-opacity">
                                {step.number}
                            </span>
                            <h3 className="text-2xl font-display font-medium text-white group-hover:text-premium-blue transition-colors">
                                {step.title}
                            </h3>
                        </div>
                        <div className="text-premium-blue">
                            {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                        </div>
                    </button>

                    <AnimatePresence>
                        {openIndex === idx && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pb-8 pl-20 pr-12">
                                    <p className="text-premium-gray font-light leading-relaxed text-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default AccordionSteps;
