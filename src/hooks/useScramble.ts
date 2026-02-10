import { useState, useRef, useEffect, useCallback } from 'react';

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";

interface UseScrambleProps {
    text: string;
    duration?: number;
    speed?: number;
    autoStart?: boolean;
}

export const useScramble = ({ text: initialText, duration = 800, speed, autoStart = false }: UseScrambleProps) => {
    const [displayText, setDisplayText] = useState(initialText);
    const isAnimating = useRef(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const targetTextRef = useRef(initialText);

    const stopScramble = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        isAnimating.current = false;
        setDisplayText(targetTextRef.current);
    }, []);

    const playScramble = useCallback(() => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        const originalText = targetTextRef.current;
        let iteration = 0;

        const calculatedSpeed = speed || (originalText.length / (duration / 30));

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            const scrambled = originalText
                .split("")
                .map((letter, index) => {
                    if (index < Math.floor(iteration)) {
                        return originalText[index];
                    }
                    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
                })
                .join("");

            setDisplayText(scrambled);

            if (iteration >= originalText.length) {
                stopScramble();
            }

            iteration += calculatedSpeed;
        }, 30);
    }, [duration, speed, stopScramble]);

    // Update target text if prop changes, but don't auto-scramble unless configured
    useEffect(() => {
        targetTextRef.current = initialText;
        setDisplayText(initialText);
    }, [initialText]);

    useEffect(() => {
        if (autoStart) {
            playScramble();
        }
        return () => stopScramble();
    }, [autoStart, playScramble, stopScramble]);

    return { displayText, playScramble, stopScramble, isAnimating: isAnimating.current };
};
