"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Filter } from "lucide-react";
import { ShuffleText } from "@/components/ui/shuffle-text";
import { Button } from "@/components/ui/button";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

// Exact CSS from template/styles.css converted to Tailwind/Emotion style
const clipPathStyle = {
    clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0% 50%)"
};

const menuItems = [
    { title: "Home", subtitle: "Page 001", href: "/" },
    { title: "Projects", subtitle: "20 Ideas", href: "/projects" },
    { title: "Stack", subtitle: "10 Notes", href: "/stack" },
    { title: "Contact", subtitle: "Email Now", href: "/contact" },
    { title: "About", subtitle: "Our Office", href: "/about" },
];

// Helper Item Component to handle dynamic sizing
function MenuItem({
    item,
    index,
    onClose
}: {
    item: { title: string, subtitle: string, href: string };
    index: number;
    onClose: () => void;
}) {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const [width, setWidth] = React.useState(0);

    // Measure width after mount
    useEffect(() => {
        if (linkRef.current) {
            setWidth(linkRef.current.offsetWidth);
        }
    }, []);

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.4 + (index * 0.05), duration: 0.5 }
            }}
            className="group relative py-2 pl-4 md:pl-0 w-fit" // w-fit ensures container doesn't stretch 
        >
            <div className="relative inline-block">
                {/* .bg-hover - dynamic width */}
                <div
                    className="absolute top-0 left-0 h-full bg-white opacity-0 group-hover:opacity-100 z-0 transition-opacity duration-300 pointer-events-none"
                    style={{
                        ...clipPathStyle,
                        width: width ? `${width + 30}px` : '0px'
                    }}
                />

                {/* Link */}
                <Link
                    ref={linkRef}
                    href={item.href}
                    onClick={onClose}
                    className="relative z-10 text-[48px] font-bold uppercase tracking-[-2px] leading-[100%] text-white group-hover:text-black transition-colors duration-300 block pl-[10px] pr-[10px]"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                    <ShuffleText text={item.title} className="block" trigger />
                </Link>
            </div>

            {/* Subtitle - dynamic positioning */}
            <span
                className="hidden md:block absolute top-[1.5em] text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors duration-300 whitespace-nowrap"
                style={{
                    left: width ? `${width + 40}px` : '200px' // Fallback to 200px until measured
                }}
            >
                {item.subtitle}
            </span>
        </motion.div>
    );
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    // Prevent body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]"
                    />

                    {/* Menu Container - Replicating .menu-container */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{
                            x: 0,
                            transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
                        }}
                        exit={{
                            x: "-100%",
                            transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
                        }}
                        className="fixed top-0 md:top-1/2 left-0 md:-translate-y-1/2 w-full md:w-[45%] h-full md:h-[95vh] md:rounded-[20px] bg-black text-white z-[100] md:ml-[1.5em] overflow-hidden flex shadow-2xl"
                    >
                        {/* .menu represented by the container above */}

                        {/* .menu-main */}
                        <div className="flex-[5] flex flex-col justify-between border-r border-white/10">

                            {/* .menu-top */}
                            <div className="flex border-b border-white/10 flex-1">
                                {/* .menu-top-title */}
                                <div className="hidden md:block flex-1 p-8">
                                    <p className="text-[10px] uppercase tracking-widest text-[#fff]">Discover</p>
                                </div>

                                {/* .menu-top-content */}
                                <div className="flex-[4] py-5 px-6 md:px-0 flex flex-col justify-center">
                                    {menuItems.map((item, i) => (
                                        <MenuItem key={item.title} item={item} index={i} onClose={onClose} />
                                    ))}
                                </div>
                            </div>

                            {/* .menu-bottom */}
                            <div className="flex flex-col">
                                {[
                                    { label: "Connect", value: "Discord" },
                                    { label: "Buy On", value: "Opensea" },
                                    { label: "US-EN", value: "2025" }
                                ].map((item, i) => (
                                    <div key={item.label} className="w-full flex gap-4 border-t border-white/10 p-4 px-8 md:px-12 hover:bg-white/5 transition-colors cursor-pointer group">
                                        <span className="flex-1 text-[10px] uppercase text-white group-hover:text-zinc-300">{item.label}</span>
                                        <span className="flex-[4] pl-8 text-[10px] uppercase text-white font-medium relative overflow-hidden">
                                            <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-[150%]">{item.value}</span>
                                            <span className="absolute top-full left-0 transition-transform duration-500 group-hover:-translate-y-[150%]">{item.value}</span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* .menu-sidebar */}
                        <div className="flex-[0.5] md:flex-[0.2] flex flex-col justify-between">
                            {/* .close-btn */}
                            <div
                                onClick={onClose}
                                className="p-6 border-b border-white/10 cursor-pointer hover:bg-white/10 transition-colors flex justify-center"
                            >
                                <X className="w-6 h-6 text-white" />
                            </div>

                            {/* .logo (bottom icon in template) */}
                            <div className="p-6 flex justify-center">
                                <Filter className="w-6 h-6 text-white" />
                            </div>
                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
