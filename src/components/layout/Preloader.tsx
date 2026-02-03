"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShuffleText } from "@/components/ui/shuffle-text";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Animate counter
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // 20ms * 100 = 2000ms (approx aligned with 2.3s bar)

        // Total loading time (slightly longer to ensure 100% is seen)
        const timer = setTimeout(() => setIsLoading(false), 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Name with Shuffle Effect */}
                        <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.02em] mb-12" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                            <ShuffleText text="MAHES KANOKO" trigger={true} />
                        </h1>

                        {/* Minimalist Progress Line */}
                        <div className="w-[200px] md:w-[300px] h-[1px] bg-white/10 overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-white"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.3, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="w-[200px] md:w-[300px] mt-4 flex justify-between text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
                            <span>Loading</span>
                            <span>{count}%</span>
                        </div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
