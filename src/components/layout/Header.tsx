'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import { animate } from 'motion';
import { headerMenu } from '@data/menu';
import Logo from '@components/ui/Logo';

export const Header: React.FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [currentTime, setCurrentTime] = useState<string>('--:--');
    const headerRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const isCurrentPage = (link: string) => {
        if (link === '/') {
            return pathname === '/' || pathname === '';
        }
        return pathname?.startsWith(link);
    };

    useEffect(() => {
        // Entrance Animation
        if (headerRef.current) {
            animate(
                headerRef.current,
                { y: [-20, 0], opacity: [0, 1] },
                { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            );
        }

        // Time Update
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Asia/Bangkok',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            };
            const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        // Scroll Effect
        const handleScroll = () => {
            if (window.scrollY > 20) {
                containerRef.current?.classList.add('bg-premium-navy/80', 'backdrop-blur-md', 'shadow-md', 'py-3');
                containerRef.current?.classList.remove('bg-premium-navy/10', 'py-2', 'md:py-4', 'border-white/5');
            } else {
                containerRef.current?.classList.add('bg-premium-navy/10', 'py-2', 'md:py-4', 'border-white/5');
                containerRef.current?.classList.remove('bg-premium-navy/80', 'backdrop-blur-md', 'shadow-md', 'py-3');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const toggleSubmenu = (name: string) => {
        setActiveSubmenu(activeSubmenu === name ? null : name);
    };

    return (
        <header
            ref={headerRef}
            className="fixed top-0 z-50 w-full left-0 transition-all duration-300 opacity-0"
            id="main-header"
        >
            <div className="w-full px-4 md:px-8 py-4 md:py-6">
                <div
                    ref={containerRef}
                    className="flex justify-between items-center transition-all duration-300 bg-premium-navy/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/5"
                    id="header-container"
                >
                    {/* Left: Logo */}
                    <div className="flex-none flex items-center">
                        <Logo />
                    </div>

                    {/* Center: Navigation */}
                    <nav className="hidden lg:flex flex-grow justify-center px-10" aria-label="Site Navigation">
                        <ul className="flex items-center justify-between w-full max-w-3xl">
                            {headerMenu.map((item) => (
                                <li key={item.name} className="relative group">
                                    <Link
                                        href={item.link}
                                        className={`text-[13px] font-medium uppercase tracking-[0.2em] transition-all duration-300 py-1 border-b border-transparent hover:border-premium-blue/30 ${isCurrentPage(item.link)
                                            ? 'text-premium-blue'
                                            : 'text-white/80 hover:text-premium-blue'
                                            }`}
                                        aria-current={isCurrentPage(item.link) ? 'page' : undefined}
                                    >
                                        {item.name}
                                        {item.children && item.showArrow && (
                                            <ChevronDown
                                                size={14}
                                                className="transform transition-transform inline-block ml-1 group-hover:rotate-180"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Link>
                                    {item.children && (
                                        <ul className="submenu absolute left-1/2 -translate-x-1/2 mt-4 bg-premium-navy/95 backdrop-blur-md border border-white/10 rounded-none w-48 transition-all duration-300 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 overflow-hidden z-50 shadow-2xl p-0">
                                            {item.children.map((child) => (
                                                <li key={child.name}>
                                                    <Link
                                                        href={child.link}
                                                        className={`block px-6 py-4 text-[10px] uppercase tracking-widest transition-colors duration-300 border-b border-white/5 last:border-none ${isCurrentPage(child.link)
                                                            ? 'bg-premium-blue/10 text-premium-blue'
                                                            : 'text-premium-gray hover:bg-premium-blue/5 hover:text-white'
                                                            }`}
                                                        aria-current={isCurrentPage(child.link) ? 'page' : undefined}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right: Time Display and Mobile Menu */}
                    <div className="flex-none flex items-center justify-end gap-6 min-w-[120px]">
                        <div className="hidden lg:flex flex-col items-end text-[10px] font-medium tracking-[0.15em] text-white/40">
                            <span className="text-white/60 mb-0.5">HANOI, VN</span>
                            <span className="font-mono text-premium-blue/80">{currentTime}</span>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                className="mobile-menu-button relative z-50 p-2 border-none cursor-pointer bg-transparent text-white hover:text-premium-blue transition-colors"
                                onClick={toggleMenu}
                                aria-label="Toggle Menu"
                                aria-expanded={isMenuOpen}
                            >
                                {!isMenuOpen ? <Menu size={24} /> : <X size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Panel */}
                    <div
                        className={`mobile-menu fixed inset-0 z-40 px-6 pt-24 bg-premium-navy/95 backdrop-blur-xl lg:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                            } overflow-y-auto`}
                    >
                        <div className="flex flex-col h-full justify-between pb-8">
                            <ul className="flex flex-col gap-6">
                                {headerMenu.map((item) => (
                                    <li key={item.name}>
                                        <div className="text-white">
                                            <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                                <Link
                                                    href={item.link}
                                                    className={`text-2xl font-light uppercase tracking-[0.2em] transition-colors duration-300 ${isCurrentPage(item.link)
                                                        ? 'text-premium-blue'
                                                        : 'text-white/60 hover:text-premium-blue'
                                                        }`}
                                                    aria-current={isCurrentPage(item.link) ? 'page' : undefined}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                                {item.children && (
                                                    <button
                                                        className="mobile-submenu-button p-2 -mr-2 text-white/60 hover:text-white transition-colors"
                                                        onClick={() => toggleSubmenu(item.name)}
                                                        aria-label={`Toggle ${item.name} submenu`}
                                                        aria-expanded={activeSubmenu === item.name}
                                                    >
                                                        <ChevronDown
                                                            size={24}
                                                            className={`transform transition-transform duration-200 ${activeSubmenu === item.name ? 'rotate-180' : ''
                                                                }`}
                                                        />
                                                    </button>
                                                )}
                                            </div>
                                            {item.children && (
                                                <ul className={`mobile-submenu ml-4 mt-4 space-y-4 border-l border-white/10 pl-4 ${activeSubmenu === item.name ? 'block' : 'hidden'
                                                    }`}>
                                                    {item.children.map((child) => (
                                                        <li key={child.name}>
                                                            <Link
                                                                href={child.link}
                                                                className={`block text-lg uppercase tracking-[0.15em] transition-colors duration-300 ${isCurrentPage(child.link)
                                                                    ? 'text-premium-blue'
                                                                    : 'text-white/40 hover:text-white'
                                                                    }`}
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 text-center text-white/50 text-sm">
                                <span className="block">Hanoi, Vietnam</span>
                                <span>{currentTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
