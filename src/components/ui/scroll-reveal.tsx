"use client";

import { motion, useInView, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    once?: boolean;
    threshold?: number;
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    direction = "up",
    distance = 30,
    once = true,
    threshold = 0.1,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance, x: 0 };
            case "down":
                return { y: -distance, x: 0 };
            case "left":
                return { y: 0, x: distance };
            case "right":
                return { y: 0, x: -distance };
            case "none":
                return { y: 0, x: 0 };
            default:
                return { y: distance, x: 0 };
        }
    };

    const initial = getInitialPosition();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...initial }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...initial }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered container for multiple items
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    once = true,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.1 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger item to be used inside StaggerContainer
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
