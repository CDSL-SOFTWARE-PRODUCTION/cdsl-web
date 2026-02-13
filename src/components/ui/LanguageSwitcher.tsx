'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const switchLocale = (nextLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <button
            onClick={() => switchLocale(locale === 'en' ? 'vi' : 'en')}
            disabled={isPending}
            className="p-2 text-white/60 hover:text-premium-blue transition-colors font-mono text-sm tracking-widest uppercase hover:bg-white/5 rounded-full w-10 h-10 flex items-center justify-center"
        >
            {locale === 'en' ? 'VI' : 'EN'}
        </button>
    );
}
