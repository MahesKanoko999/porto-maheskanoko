"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Menu } from "lucide-react";
import { MenuOverlay } from "@/components/layout/MenuOverlay";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Animation state
    const [isHidden, setIsHidden] = useState(false);
    const [hasEntered, setHasEntered] = useState(false);
    const lastScrollY = React.useRef(0);

    // Handle scroll direction for hiding/showing navbar
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY.current;

        if (latest > previous && latest > 150) {
            setIsHidden(true); // Scrolling down & past threshold -> Hide
        } else {
            setIsHidden(false); // Scrolling up or at top -> Show
        }

        lastScrollY.current = latest;
    });

    // Entrance animation trigger
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasEntered(true);
        }, 1000); // 1s delay before entering
        return () => clearTimeout(timer);
    }, []);

    const variants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
        enter: { y: "-100%", opacity: 0 }
    };

    return (
        <>
            <motion.header
                variants={variants}
                initial="enter"
                animate={hasEntered ? (isHidden ? "hidden" : "visible") : "enter"}
                transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
                className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
            >
                <div className="container mx-auto h-14 max-w-screen-2xl flex items-center justify-between px-4 md:px-8 relative">
                    {/* Left Side (Menu Trigger) */}
                    <div className="flex items-center">
                        <Button
                            variant="ghost"
                            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground pl-0"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu className="w-5 h-5 transition-transform group-hover:rotate-90" />
                            <span className="uppercase tracking-widest text-xs font-medium hidden sm:inline-block">Menu</span>
                        </Button>
                    </div>

                    {/* Center (Logo) - Absolute Center */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/maheskanoko.png"
                                alt="Mahes Kanoko"
                                width={150}
                                height={40}
                                className="h-8 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right Side (Actions) */}
                    <div className="flex items-center gap-2">
                        <Link href="https://github.com" target="_blank" rel="noreferrer">
                            <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                            <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                                <Twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                        </Link>

                    </div>
                </div>
            </motion.header>

            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
