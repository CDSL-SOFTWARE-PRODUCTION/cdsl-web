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
    const rafRef = useRef<number | null>(null);
    const startTimeRef = useRef<number>(0);
    const targetTextRef = useRef(initialText);

    const updateScramble = useCallback((timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const progress = timestamp - startTimeRef.current;
        const normalizedProgress = Math.min(progress / duration, 1);

        const originalText = targetTextRef.current;
        const revealCount = Math.floor(normalizedProgress * originalText.length);

        let scrambled = "";
        for (let i = 0; i < originalText.length; i++) {
            if (i < revealCount) {
                scrambled += originalText[i];
            } else {
                scrambled += LETTERS[Math.floor(Math.random() * LETTERS.length)];
            }
        }

        setDisplayText(scrambled);

        if (normalizedProgress < 1) {
            rafRef.current = requestAnimationFrame(updateScramble);
        } else {
            isAnimating.current = false;
            setDisplayText(originalText);
        }
    }, [duration]);

    const stopScramble = useCallback(() => {
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
        isAnimating.current = false;
        setDisplayText(targetTextRef.current);
    }, []);

    const playScramble = useCallback(() => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        startTimeRef.current = 0;
        rafRef.current = requestAnimationFrame(updateScramble);
    }, [updateScramble]);

    // Update target text if prop changes
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
