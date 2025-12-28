"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const projects = [
    {
        id: 1,
        title: "Project TulungWeb",
        description: "A comprehensive web solution for community management with real-time features and modern UI.",
        image: "/maheskanoko.png",
        tags: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
        image: "/maheskanoko.png",
        tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Modern portfolio website with smooth animations and premium design aesthetics.",
        image: "/maheskanoko.png",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
    {
        id: 4,
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates and team features.",
        image: "/maheskanoko.png",
        tags: ["React", "Firebase", "Material UI"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
    {
        id: 5,
        title: "API Gateway Service",
        description: "Scalable API gateway with rate limiting, authentication, and logging capabilities.",
        image: "/maheskanoko.png",
        tags: ["Go", "Redis", "Docker", "Kubernetes"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
    {
        id: 6,
        title: "Mobile Banking App",
        description: "Secure mobile banking application with biometric authentication and real-time notifications.",
        image: "/maheskanoko.png",
        tags: ["React Native", "Node.js", "MongoDB"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
];

export default function ProjectsPage() {
    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects = projects.filter((p) => !p.featured);

    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            <Navbar />
            <main className="flex-1 flex flex-col items-center w-full pt-24">
                {/* Hero Section */}
                <section className="w-full py-16 md:py-24 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <ScrollReveal className="text-center mb-12 md:mb-16">
                            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Portfolio</p>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
                                Selected Projects
                            </h1>
                            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                                A curated collection of projects that showcase my skills and passion for building great products.
                            </p>
                        </ScrollReveal>

                        {/* Featured Projects */}
                        <StaggerContainer className="space-y-8 mb-16">
                            {featuredProjects.map((project, index) => (
                                <StaggerItem
                                    key={project.id}
                                    className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center ${index % 2 === 1 ? "md:direction-rtl" : ""
                                        }`}
                                >
                                    {/* Image */}
                                    <div className={`relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group ${index % 2 === 1 ? "md:order-2" : ""
                                        }`}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                                                Featured
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={index % 2 === 1 ? "md:order-1 md:text-right" : ""}>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                            {project.title}
                                        </h2>
                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "md:justify-end" : ""
                                            }`}>
                                            {project.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="outline"
                                                    className="border-white/10 bg-white/5 text-zinc-300"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""
                                            }`}>
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 text-sm text-white hover:text-zinc-300 transition-colors group"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                            <Link
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                Source Code
                                            </Link>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        {/* Other Projects Grid */}
                        <ScrollReveal className="border-t border-white/10 pt-16">
                            <h3 className="text-xl font-semibold text-white mb-8 text-center">More Projects</h3>
                        </ScrollReveal>
                        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherProjects.map((project) => (
                                <StaggerItem
                                    key={project.id}
                                    className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                                        <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="outline"
                                                    className="text-xs border-white/10 bg-white/5 text-zinc-400"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-4 pt-3 border-t border-white/5">
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                                            >
                                                <ExternalLink className="w-3 h-3" />
                                                Demo
                                            </Link>
                                            <Link
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                                            >
                                                <Github className="w-3 h-3" />
                                                Code
                                            </Link>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
