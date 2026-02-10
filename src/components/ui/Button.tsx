import * as React from 'react';
import Link from 'next/link';

export interface Props {
    href?: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'ghostLight' | 'ghostDark';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    target?: string;
    children: React.ReactNode;
}

export const Button: React.FC<Props> = ({
    href,
    variant = 'primary',
    size = 'md',
    disabled = false,
    className = '',
    type = 'button',
    target,
    children,
    ...rest
}) => {
    const baseStyles = 'group relative inline-flex overflow-hidden items-center justify-center rounded-border-small font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md flex items-center gap-2';

    const variants = {
        primary: 'bg-premium-blue text-premium-navy hover:bg-premium-blue/80 border border-transparent shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]',
        secondary: 'bg-premium-navy-light text-white hover:bg-premium-navy border border-white/20',
        accent: 'bg-premium-blue text-premium-navy hover:bg-premium-blue/80',
        ghostLight: 'text-white border border-premium-blue/30 hover:bg-premium-blue/10 hover:border-premium-blue',
        ghostDark: 'text-white border border-premium-blue/30 hover:bg-premium-blue/10 hover:border-premium-blue',
    };

    const sizes = {
        sm: 'h-9 px-3 text-xs',
        md: 'h-10 px-6 py-2 text-sm',
        lg: 'h-12 px-8 text-base'
    };

    const classes = [
        baseStyles,
        variants[variant],
        sizes[size],
        className
    ].join(' ');

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                {...rest}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type as "button" | "submit" | "reset"}
            className={classes}
            disabled={disabled}
            aria-disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
