"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
    Database,
    Globe,
    Palette,
    Server,
    Smartphone,
    Terminal,
    Wrench
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stackCategories = [
    {
        title: "Frontend",
        icon: Globe,
        description: "Building beautiful and responsive user interfaces",
        tools: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Framer Motion", level: 80 },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Crafting robust and scalable server-side solutions",
        tools: [
            { name: "Node.js", level: 85 },
            { name: "Python", level: 75 },
            { name: "Go", level: 60 },
            { name: "REST APIs", level: 90 },
            { name: "GraphQL", level: 70 },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Managing and optimizing data storage",
        tools: [
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "Supabase", level: 90 },
            { name: "Redis", level: 65 },
            { name: "Firebase", level: 75 },
        ],
    },
    {
        title: "Mobile",
        icon: Smartphone,
        description: "Creating cross-platform mobile experiences",
        tools: [
            { name: "React Native", level: 75 },
            { name: "Expo", level: 70 },
            { name: "Flutter", level: 50 },
        ],
    },
    {
        title: "Design",
        icon: Palette,
        description: "Designing intuitive and beautiful interfaces",
        tools: [
            { name: "Figma", level: 85 },
            { name: "Adobe XD", level: 70 },
            { name: "Photoshop", level: 65 },
            { name: "Illustrator", level: 55 },
        ],
    },
    {
        title: "DevOps",
        icon: Terminal,
        description: "Streamlining development and deployment",
        tools: [
            { name: "Git", level: 90 },
            { name: "Docker", level: 75 },
            { name: "CI/CD", level: 70 },
            { name: "Vercel", level: 85 },
            { name: "AWS", level: 60 },
        ],
    },
];

// Skill bar component with viewport-triggered animation
function SkillBar({ name, level }: { name: string; level: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div ref={ref}>
            <div className="flex justify-between text-sm mb-1">
                <span className="text-zinc-300">{name}</span>
                <span className="text-zinc-500">{level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-white/40 to-white/20 rounded-full"
                />
            </div>
        </div>
    );
}

export default function StackPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            <Navbar />
            <main className="flex-1 flex flex-col items-center w-full pt-24">
                {/* Hero Section */}
                <section className="w-full py-16 md:py-24 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <ScrollReveal className="text-center mb-12 md:mb-16">
                            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Technologies</p>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
                                My Tech Stack
                            </h1>
                            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                                The tools and technologies I use to bring ideas to life.
                            </p>
                        </ScrollReveal>

                        {/* Stack Grid */}
                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {stackCategories.map((category) => (
                                <StaggerItem
                                    key={category.title}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                                >
                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <category.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                                            <p className="text-xs text-zinc-500">{category.description}</p>
                                        </div>
                                    </div>

                                    {/* Tools */}
                                    <div className="space-y-3">
                                        {category.tools.map((tool) => (
                                            <SkillBar key={tool.name} name={tool.name} level={tool.level} />
                                        ))}
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        {/* Additional Info */}
                        <ScrollReveal delay={0.3} className="mt-16 text-center">
                            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3">
                                <Wrench className="w-4 h-4 text-zinc-400" />
                                <span className="text-sm text-zinc-400">
                                    Always learning and exploring new technologies
                                </span>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
