import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

const steps: ProcessStep[] = [
    {
        number: "01",
        title: "Assessment Call",
        description: "We begin with a deep dive into your business goals, current tech stack, and the specific problems you're looking to solve."
    },
    {
        number: "02",
        title: "Estimations & Proposal",
        description: "Detailed breakdown of the project scope, timeline, and resource requirements based on our assessment."
    },
    {
        number: "03",
        title: "Refinement",
        description: "Collaborative iteration on the proposal to ensure perfect alignment with your objectives and budget."
    },
    {
        number: "04",
        title: "Contracting",
        description: "Clear and transparent legal agreements that define our partnership and protect your interests."
    },
    {
        number: "05",
        title: "Development",
        description: "Agile execution with regular updates and feedback loops to ensure the product meets your expectations."
    },
    {
        number: "06",
        title: "Delivery & Support",
        description: "Seamless launch followed by ongoing maintenance and strategic advice to ensure long-term success."
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
