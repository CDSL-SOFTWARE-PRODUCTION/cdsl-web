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

export const getBackgroundColor = (background: ThemeColor = 'base'): string => {
    const bgColors = {
        base: 'bg-premium-navy',
        light: 'bg-premium-navy-light', // "light" is now the lighter navy
        dark: 'bg-black'
    };
    return bgColors[background];
};

export const getTextColor = (background: ThemeColor = 'base'): string => {
    const textColors = {
        base: 'text-gray-300',
        light: 'text-gray-300',
        dark: 'text-gray-400'
    };
    return textColors[background];
};

export const getHeadlineColor = (background: ThemeColor = 'base'): string => {
    const headlineColors = {
        base: 'text-white',
        light: 'text-white',
        dark: 'text-white'
    };
    return headlineColors[background];
};

export const getEyebrowColor = (background: ThemeColor = 'base'): string => {
    const eyebrowColors = {
        base: 'text-premium-blue',
        light: 'text-premium-blue',
        dark: 'text-premium-blue'
    };
    return eyebrowColors[background];
};

export const getInputBackgroundColor = (background: ThemeColor = 'base'): string => {
    const inputBgColors = {
        base: 'bg-premium-navy-light',
        light: 'bg-premium-navy',
        dark: 'bg-premium-navy-light'
    };
    return inputBgColors[background];
};

export const getInputTextColor = (background: ThemeColor = 'base'): string => {
    const inputTextColors = {
        base: 'text-white',
        light: 'text-white',
        dark: 'text-white'
    };
    return inputTextColors[background];
}; 