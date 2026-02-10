'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuIcon from 'lucide-react/dist/esm/icons/menu';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import Sun from 'lucide-react/dist/esm/icons/sun';
import Moon from 'lucide-react/dist/esm/icons/moon';
import { motion, AnimatePresence } from 'framer-motion';
import { headerMenu } from '@data/menu';
import Logo from '@components/ui/Logo';
import ScrambleLink from '@components/ui/ScrambleLink';

export const Header: React.FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState<string>('--:--');
    const [isDarkMode, setIsDarkMode] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    const isCurrentPage = (link: string) => {
        if (link === '/') {
            return pathname === '/' || pathname === '';
        }
        return pathname?.startsWith(link);
    };

    useEffect(() => {
        // Initialize theme
        if (typeof window !== 'undefined') {
            const isDark = document.documentElement.classList.contains('dark');
            setIsDarkMode(isDark);
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
        const nextState = !isMenuOpen;
        setIsMenuOpen(nextState);
        if (nextState) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.setAttribute('data-theme', 'premium');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    };

    // Mobile Menu Animation Variants
    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [0.22, 0.61, 0.36, 1]
            }
        }
    };

    const extendedMenu = [
        { name: 'Home', link: '/' },
        ...headerMenu,
        { name: 'Contact', link: 'mailto:contact@cdsl.tech' }
    ];

    return (
        <>
            <motion.header
                className="fixed top-0 z-50 w-full left-0 transition-all duration-300"
                id="main-header"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="w-full px-4 md:px-8 py-4 md:py-6 relative z-50">
                    <div
                        ref={containerRef}
                        className="flex justify-between items-center transition-all duration-300 bg-premium-navy/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/5"
                        id="header-container"
                    >
                        {/* Left: Logo */}
                        <div className="flex-none flex items-center relative z-50">
                            <Logo />
                        </div>

                        {/* Center: Navigation (Desktop) */}
                        <nav className="hidden lg:flex flex-grow justify-center px-10" aria-label="Site Navigation">
                            <ul className="flex items-center justify-between w-full max-w-3xl">
                                {headerMenu.map((item) => (
                                    <li key={item.name} className="relative group">
                                        <ScrambleLink
                                            href={item.link}
                                            text={item.name}
                                            className={`text-[13px] font-medium uppercase tracking-[0.2em] transition-all duration-300 py-1 border-b border-transparent hover:border-premium-blue/30 ${isCurrentPage(item.link)
                                                ? 'text-premium-blue'
                                                : 'text-white/80 hover:text-premium-blue'
                                                }`}
                                        >
                                            {item.children && <ChevronDown size={14} className="ml-1 inline-block opacity-50" />}
                                        </ScrambleLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Right: Tools & Toggle */}
                        <div className="flex-none flex items-center justify-end gap-6 min-w-[120px] relative z-50">
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-white/60 hover:text-premium-blue transition-colors rounded-full hover:bg-white/5"
                            >
                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </button>

                            <div className="hidden lg:flex flex-col items-end text-[10px] font-medium tracking-[0.15em] text-white/40">
                                <span className="text-white/60 mb-0.5">HANOI, VN</span>
                                <span className="font-mono text-premium-blue/80">{currentTime}</span>
                            </div>

                            {/* Mobile Toggle Button */}
                            <button
                                className="lg:hidden relative z-50 text-white font-medium uppercase tracking-widest text-sm hover:text-premium-blue transition-colors"
                                onClick={toggleMenu}
                            >
                                {isMenuOpen ? 'Close' : <MenuIcon size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Full Screen Mobile Menu */}
            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center lg:hidden"
                    >
                        <motion.div
                            className="flex flex-col items-center gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                        >
                            {extendedMenu.map((item) => (
                                <motion.div key={item.name} variants={itemVariants} className="overflow-hidden">
                                    <Link
                                        href={item.link}
                                        className={`relative block text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter hover:text-premium-blue transition-colors duration-300 ${isCurrentPage(item.link) ? 'text-white' : 'text-white/60'}`}
                                        onClick={toggleMenu}
                                    >
                                        {item.name}
                                        {item.name === 'Projects' && (
                                            <sup className="absolute top-2 -right-6 text-base md:text-xl font-mono text-premium-blue font-normal opacity-80">20</sup>
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute bottom-12 left-0 w-full px-8 flex justify-between text-xs md:text-sm font-mono uppercase tracking-widest text-white/40"
                        >
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="https://linkedin.com/company/cdsl" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors">Behance</a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
