import React from 'react';
import type { Metadata } from 'next';
import { Inter, Be_Vietnam_Pro } from 'next/font/google';
import "@fontsource/bruno-ace-sc";
import "../../styles/global.css";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import SmoothScroll from "@components/shared/SmoothScroll";
import { SEO } from "@data/config";

const inter = Inter({
    subsets: ['latin', 'vietnamese'],
    variable: '--font-sans',
    display: 'swap',
});

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ['latin', 'vietnamese'],
    weight: ['400', '500', '700'],
    variable: '--font-display',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: SEO.SiteName,
        template: `%s ${SEO.Separator} ${SEO.SiteName}`,
    },
    description: SEO.defaultDescription,
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
    },
    alternates: {
        canonical: './',
    },
    other: {
        'sitemap': '/sitemap-index.xml',
    }
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// ... (keep imports)

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${inter.variable} ${beVietnamPro.variable} dark overflow-x-hidden`} data-theme="premium" suppressHydrationWarning>
            <head>
                <link rel="sitemap" href="/sitemap-index.xml" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                const html = document.documentElement;
                                html.classList.add('dark');
                                html.setAttribute('data-theme', 'premium');
                            })();
                        `,
                    }}
                />
                <style dangerouslySetInnerHTML={{
                    __html: `
                        /* Custom Scrollbar for Webkit */
                        ::-webkit-scrollbar {
                            width: 8px;
                        }
                        ::-webkit-scrollbar-track {
                            background: #0b0c10; 
                        }
                        ::-webkit-scrollbar-thumb {
                            background: #1f2833; 
                            border-radius: 4px;
                        }
                        ::-webkit-scrollbar-thumb:hover {
                            background: #66fcf1; 
                        }

                        /* Lenis Recommended Styles */
                        html.lenis, html.lenis body {
                            height: auto;
                        }

                        .lenis.lenis-smooth {
                            scroll-behavior: auto !important;
                        }

                        .lenis.lenis-smooth [data-lenis-prevent] {
                            overscroll-behavior: contain;
                        }

                        .lenis.lenis-stopped {
                            overflow: hidden;
                        }

                        .lenis.lenis-scrolling iframe {
                            pointer-events: none;
                        }
                    `
                }} />
                <script async src="https://tally.so/widgets/embed.js"></script>
            </head>
            <body className="antialiased min-h-screen relative selection:bg-premium-blue selection:text-premium-navy font-sans" suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    {/* Background Mesh Gradient */}
                    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40 transition-opacity duration-500">
                        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-premium-blue/10 blur-[120px]"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px]"></div>
                    </div>

                    <Header />

                    <SmoothScroll>
                        <main className="relative z-10">
                            {children}
                        </main>
                    </SmoothScroll>

                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
