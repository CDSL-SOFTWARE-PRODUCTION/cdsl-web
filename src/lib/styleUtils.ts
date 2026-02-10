// Unified styling utilities - using only CSS classes from global.css @theme

export type PaddingSize = 'small' | 'base' | 'large';
export type ThemeColor = 'base' | 'light' | 'dark';

interface PaddingOptions {
    padding?: PaddingSize;
    paddingTop?: PaddingSize;
    paddingBottom?: PaddingSize;
}

export const getPaddingClass = ({ padding, paddingTop, paddingBottom }: PaddingOptions): string => {
    if (padding) return `py-${padding}`;

    const classes = [];
    if (paddingTop) classes.push(`pt-${paddingTop}`);
    if (paddingBottom) classes.push(`pb-${paddingBottom}`);
    return classes.join(' ');
};

// All color functions now return dark mode compatible classes only
// Colors are defined in global.css @theme

export const getBackgroundColor = (_background: ThemeColor = 'base'): string => {
    // Always return dark mode background - ignoring parameter for simplicity
    return 'bg-premium-navy';
};

export const getTextColor = (_background: ThemeColor = 'base'): string => {
    return 'text-premium-gray';
};

export const getHeadlineColor = (_background: ThemeColor = 'base'): string => {
    return 'text-white';
};

export const getEyebrowColor = (_background: ThemeColor = 'base'): string => {
    return 'text-premium-blue';
};

export const getInputBackgroundColor = (_background: ThemeColor = 'base'): string => {
    return 'bg-premium-navy-light';
};

export const getInputTextColor = (_background: ThemeColor = 'base'): string => {
    return 'text-white';
};