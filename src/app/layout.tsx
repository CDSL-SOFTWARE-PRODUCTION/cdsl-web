import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import "@fontsource/bruno-ace-sc";
import "../styles/global.css";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import SmoothScroll from "@components/shared/SmoothScroll";
import { SEO } from "@data/config";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
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
        icon: '/favicon.ico',
    },
    viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable} dark overflow-x-hidden`} data-theme="premium">
            <head>
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
            </head>
            <body className="antialiased min-h-screen relative selection:bg-premium-blue selection:text-premium-navy font-sans">
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
            </body>
        </html>
    );
}
