"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShuffleText } from "@/components/ui/shuffle-text";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
            {/* Large 404 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
                className="text-center"
            >
                <h1
                    className="text-[120px] md:text-[200px] font-bold text-white leading-none tracking-tighter"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                    <ShuffleText text="404" trigger={true} />
                </h1>

                <p className="text-zinc-500 text-sm uppercase tracking-widest mt-4 mb-2">
                    Page Not Found
                </p>

                <p className="text-zinc-600 text-sm max-w-md mx-auto mb-12">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white hover:text-zinc-400 transition-colors group text-sm uppercase tracking-widest"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
                className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-white/10"
            />
        </div>
    );
}
