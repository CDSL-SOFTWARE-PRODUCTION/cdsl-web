
import React from 'react';
import { motion } from 'motion/react';
import { type LucideIcon } from 'lucide-react';
import Truck from 'lucide-react/dist/esm/icons/truck';
import Heart from 'lucide-react/dist/esm/icons/heart';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import ShoppingBag from 'lucide-react/dist/esm/icons/shopping-bag';
import Book from 'lucide-react/dist/esm/icons/book';
import Factory from 'lucide-react/dist/esm/icons/factory';
import BarChart from 'lucide-react/dist/esm/icons/bar-chart-3';
import Map from 'lucide-react/dist/esm/icons/map';


// Icon mapping
const iconMap: Record<string, LucideIcon> = {
    Truck,
    Heart,
    Building2,
    ShoppingBag,
    Book,
    Factory,
    BarChart,
    Map
};

interface Industry {
    icon: string; // Changed from LucideIcon to string
    title: string;
    description: string;
    // We can add an id if we have one, but index is fine for static lists
}

interface IndustryListProps {
    industries: Industry[];
}

const IndustryList: React.FC<IndustryListProps> = ({ industries }) => {
    return (
        <section className="py-24 bg-premium-navy text-white overflow-hidden">
            <div className="site-container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
                    {industries.map((industry, index) => {
                        const Icon = iconMap[industry.icon];

                        // Fallback if icon is not found
                        if (!Icon) {
                            console.warn(`Icon ${industry.icon} not found`);
                            return null;
                        }

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                className="group flex flex-col gap-6"
                            >
                                <div className="relative">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-premium-navy-light border border-white/5 group-hover:border-premium-blue/50 transition-colors duration-500">
                                        <Icon className="w-8 h-8 text-premium-blue transform group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    {/* Decorative line */}
                                    <div className="absolute top-8 left-16 w-full h-[1px] bg-gradient-to-r from-premium-blue/20 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-display font-medium leading-tight group-hover:text-premium-blue transition-colors duration-300">
                                        {industry.title}
                                    </h3>
                                    <p className="text-premium-gray text-lg leading-relaxed max-w-md">
                                        {industry.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustryList;
