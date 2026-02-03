"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "Figma", "VS Code", "Docker"] },
    { category: "Other", items: ["UI/UX Design", "SEO", "Responsive Design", "Performance"] },
];

const experience = [
    {
        year: "2024 - Present",
        role: "Freelance Developer",
        company: "Self-Employed",
        description: "Building custom web solutions for clients worldwide.",
    },
    {
        year: "2022 - 2024",
        role: "Full Stack Developer",
        company: "Tech Company",
        description: "Developed and maintained multiple production applications.",
    },
    {
        year: "2020 - 2022",
        role: "Junior Developer",
        company: "Startup",
        description: "Started my journey in professional web development.",
    },
];

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            <Navbar />
            <main className="flex-1 flex flex-col items-center w-full pt-24">
                {/* Hero Section */}
                <section className="w-full py-24 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Text */}
                            <ScrollReveal direction="left">
                                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">About Me</p>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                                    I build digital experiences that matter.
                                </h1>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                    Hi, I&apos;m <span className="text-white font-medium">Mahes Kanoko</span> — a passionate
                                    web developer and designer based in Indonesia. I specialize in creating modern,
                                    performant, and user-friendly web applications.
                                </p>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                    With over 4 years of experience, I&apos;ve worked with startups and established
                                    companies to bring their ideas to life. My approach combines clean code with
                                    beautiful design.
                                </p>
                                <Link
                                    href="mailto:mahes@example.com"
                                    className="inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors group"
                                >
                                    Get in touch
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </ScrollReveal>

                            {/* Image Placeholder */}
                            <ScrollReveal direction="right" delay={0.2}>
                                <div className="aspect-[4/5] rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden relative">
                                    <Image
                                        src="/maheskanoko.png"
                                        alt="Mahes Kanoko"
                                        fill
                                        className="object-cover opacity-50"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Skills Grid */}
                <section className="w-full py-24 px-4 border-t border-white/5">
                    <div className="container mx-auto max-w-6xl">
                        <ScrollReveal>
                            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Skills & Expertise</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">What I Work With</h2>
                        </ScrollReveal>

                        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {skills.map((skill) => (
                                <StaggerItem key={skill.category}>
                                    <h3 className="text-sm font-medium text-white mb-4">{skill.category}</h3>
                                    <ul className="space-y-2">
                                        {skill.items.map((item) => (
                                            <li key={item} className="text-sm text-zinc-500">{item}</li>
                                        ))}
                                    </ul>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Experience Timeline */}
                <section className="w-full py-24 px-4 border-t border-white/5">
                    <div className="container mx-auto max-w-6xl">
                        <ScrollReveal>
                            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Experience</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">My Journey</h2>
                        </ScrollReveal>

                        <StaggerContainer className="space-y-0">
                            {experience.map((exp, i) => (
                                <StaggerItem
                                    key={i}
                                    className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-t border-white/10 first:border-t-0"
                                >
                                    <div className="text-xs uppercase tracking-widest text-zinc-500">
                                        {exp.year}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white">{exp.role}</h3>
                                        <p className="text-sm text-zinc-400 mb-2">{exp.company}</p>
                                        <p className="text-sm text-zinc-500">{exp.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* CTA */}
                <section className="w-full py-24 px-4 border-t border-white/5 bg-white/[0.02]">
                    <ScrollReveal className="container mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Let&apos;s work together
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10">
                            Have a project in mind? I&apos;d love to hear about it.
                        </p>
                        <Link
                            href="mailto:mahes@example.com"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-transform hover:scale-105 hover:bg-zinc-200"
                        >
                            Start a Conversation
                        </Link>
                    </ScrollReveal>
                </section>
            </main>
            <Footer />
        </div>
    );
}

