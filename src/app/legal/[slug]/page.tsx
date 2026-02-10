import * as React from 'react';
import { getLegalEntryData, getLegalEntries } from '@/lib/content';
import InnerHero from '@/components/sections/common/InnerHero';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const entry = await getLegalEntryData(params.slug);
        return {
            title: entry.seo?.title || entry.title,
            description: entry.seo?.description || '',
        };
    } catch (e) {
        return {
            title: 'Not Found',
        };
    }
}

export async function generateStaticParams() {
    const entries = await getLegalEntries();
    return entries.map((entry) => ({
        slug: entry.id,
    }));
}

export default async function LegalSlugPage({ params }: { params: { slug: string } }) {
    try {
        const entry = await getLegalEntryData(params.slug);

        const formattedDate = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(new Date(entry.lastUpdated));

        const heroContent = {
            title: entry.title,
            description: '',
            overlayOpacity: 0.8,
        };

        return (
            <main>
                <InnerHero content={heroContent} />

                <article className="max-w-3xl mx-auto px-8 prose prose-invert pb-24">
                    <div className="mt-12 mb-8">
                        <p className="text-sm text-premium-gray">Last updated: {formattedDate}</p>
                    </div>

                    <div
                        className="legal-content text-premium-gray leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: entry.contentHtml }}
                    />
                </article>
            </main>
        );
    } catch (e) {
        notFound();
    }
}
