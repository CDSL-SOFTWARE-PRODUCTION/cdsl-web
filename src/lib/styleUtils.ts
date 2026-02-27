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

export const getBackgroundColor = (): string => {
    // Always return dark mode background - ignoring parameter for simplicity
    return 'bg-premium-navy';
};

export const getTextColor = (): string => {
    return 'text-premium-gray';
};

export const getHeadlineColor = (): string => {
    return 'text-white';
};

export const getEyebrowColor = (): string => {
    return 'text-premium-blue';
};

export const getInputBackgroundColor = (): string => {
    return 'bg-premium-navy-light';
};

export const getInputTextColor = (): string => {
    return 'text-white';
};