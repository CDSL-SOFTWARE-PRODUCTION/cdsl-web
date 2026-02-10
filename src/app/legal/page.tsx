import * as React from 'react';
import Link from 'next/link';
import { getLegalEntries } from '@/lib/content';
import InnerHero from '@/components/sections/common/InnerHero';

export const metadata = {
    title: 'Legal Information',
};

export default async function LegalIndexPage() {
    const legalEntries = await getLegalEntries();

    const heroContent = {
        title: 'Legal Information',
        description: 'Important policies and terms governing the use of our services',
        overlayOpacity: 0.8,
    };

    return (
        <main>
            <InnerHero content={heroContent} />

            <section className="py-12">
                <div className="site-container px-8">
                    <div className="space-y-6">
                        {legalEntries.map((entry) => {
                            const formattedDate = new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }).format(new Date(entry.lastUpdated));

                            return (
                                <div key={entry.id} className="border-b border-white/10 pb-6">
                                    <Link href={`/legal/${entry.id}`} className="group">
                                        <h2 className="text-xl text-white group-hover:text-premium-blue transition-colors">
                                            {entry.title}
                                        </h2>
                                        <p className="text-sm text-premium-gray mt-2">Last updated: {formattedDate}</p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
