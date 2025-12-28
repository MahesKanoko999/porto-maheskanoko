"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradients - Smaller on mobile */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] md:w-[600px] h-[150px] md:h-[400px] bg-primary/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute bottom-0 right-0 w-[200px] md:w-[600px] h-[150px] md:h-[400px] bg-blue-500/5 blur-[60px] md:blur-[120px] rounded-full pointer-events-none opacity-30" />

            <div className="container mx-auto relative z-10 flex flex-col items-center text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4 md:mb-6 backdrop-blur-sm">
                        Available for new projects
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-[1.15]"
                >
                    Building the future of{" "}
                    <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                        web development.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="max-w-xl text-sm md:text-lg text-muted-foreground mb-6 md:mb-10 leading-relaxed"
                >
                    I&apos;m Mahes Kanoko, a developer passionate about creating intuitive, high-performance, and visually stunning web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
                >
                    <Button size="lg" className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-8 text-sm md:text-base shadow-lg shadow-primary/10">
                        View Projects <MoveRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-8 text-sm md:text-base hover:bg-white/5">
                        Contact Me
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

