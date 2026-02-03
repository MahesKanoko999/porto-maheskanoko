"use client";

import React, { useState, useEffect, useRef } from "react";

interface ShuffleTextProps {
    text: string;
    className?: string; // Additional classes for the container
    trigger?: boolean; // Prop to manually trigger the effect
}

export function ShuffleText({ text, className = "", trigger = false }: ShuffleTextProps) {
    // We manage the display text as an array of characters for granular control
    const [displayChars, setDisplayChars] = useState(text.split(""));
    const intervalRefs = useRef<NodeJS.Timeout[]>([]);
    const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

    // Cleanup function to clear all active timers
    const clearTimers = () => {
        intervalRefs.current.forEach(clearInterval);
        timeoutRefs.current.forEach(clearTimeout);
        intervalRefs.current = [];
        timeoutRefs.current = [];
    };

    const startShuffle = () => {
        clearTimers(); // Reset any ongoing animation

        // Config from template script.js
        const shuffleInterval = 10;
        const resetDelay = 75;
        const additionalDelay = 150; // Exact value from template, though slow

        const originalChars = text.split("");

        originalChars.forEach((char, index) => {
            // 1. Outer delay: Stagger start time based on index
            const startTimeout = setTimeout(() => {

                // 2. Start shuffling this specific character
                const interval = setInterval(() => {
                    setDisplayChars((prev) => {
                        const newChars = [...prev];
                        // Random char from a-z (template uses 97 + random(26))
                        // Only shuffle if it's not a space (optional polish, but template shuffles everything)
                        newChars[index] = String.fromCharCode(97 + Math.floor(Math.random() * 26));
                        return newChars;
                    });
                }, shuffleInterval);

                intervalRefs.current.push(interval);

                // 3. Inner delay: Stop shuffling and revert to original character
                // Note: Using 'resetDelay + index * additionalDelay' relative to when this char STARTED shuffling
                const resetTimeout = setTimeout(() => {
                    clearInterval(interval);
                    setDisplayChars((prev) => {
                        const newChars = [...prev];
                        newChars[index] = char;
                        return newChars;
                    });
                }, resetDelay + (index * additionalDelay));

                timeoutRefs.current.push(resetTimeout);

            }, index * shuffleInterval);

            timeoutRefs.current.push(startTimeout);
        });
    };

    // Trigger effect when `trigger` prop changes to true
    useEffect(() => {
        if (trigger) startShuffle();
        // Cleanup on unmount or re-trigger
        return clearTimers;
    }, [trigger, text]);

    return (
        <span
            onMouseEnter={startShuffle}
            className={className}
            style={{ display: "inline-block", whiteSpace: "pre" }} // Ensure layout stability
        >
            {displayChars.map((char, i) => (
                <span key={i}>{char}</span>
            ))}
        </span>
    );
}
