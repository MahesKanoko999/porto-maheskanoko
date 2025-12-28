"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Zap, Layout, Code, Globe, Database } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

export function Features() {
    return (
        <section id="projects" className="container mx-auto px-4 py-12 md:py-20 relative z-10">
            <ScrollReveal className="mb-8 md:mb-12 flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    Selected Works
                </h2>
                <p className="text-muted-foreground max-w-[600px] text-sm md:text-lg">
                    A collection of projects showcasing my expertise in modern web development.
                </p>
            </ScrollReveal>

            <StaggerContainer className="grid gap-4 grid-cols-1 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
                {/* Large Feature - Span 2 cols */}
                <StaggerItem className="md:col-span-2">
                    <Card className="h-full min-h-[200px] md:min-h-[300px] relative overflow-hidden group border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <CardHeader className="relative z-10">
                            <CardTitle className="text-2xl text-white">Project TulungWeb</CardTitle>
                            <CardDescription className="text-zinc-400">A comprehensive web solution for community management.</CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10 mt-auto pt-20">
                            <div className="flex gap-2 flex-wrap">
                                <Badge variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300">Next.js</Badge>
                                <Badge variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300">Supabase</Badge>
                                <Badge variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300">Tailwind</Badge>
                            </div>
                        </CardContent>
                        <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                            <Layout className="w-64 h-64" />
                        </div>
                    </Card>
                </StaggerItem>

                {/* Small Feature */}
                <StaggerItem>
                    <Card className="h-full min-h-[200px] md:min-h-[300px] relative overflow-hidden group border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Tech Stack</CardTitle>
                            <CardDescription className="text-zinc-400">Tools I master.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-6 mt-8">
                                <div className="flex flex-col items-center gap-2 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                    <Code className="w-8 h-8" />
                                    <span className="text-xs">React</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                    <Zap className="w-8 h-8" />
                                    <span className="text-xs">Next.js</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                    <Database className="w-8 h-8" />
                                    <span className="text-xs">SQL</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                    <Layers className="w-8 h-8" />
                                    <span className="text-xs">UI/UX</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                    <Globe className="w-8 h-8" />
                                    <span className="text-xs">Web3</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </StaggerItem>

                {/* Another Card */}
                <StaggerItem className="md:col-span-1">
                    <Card className="h-full min-h-[200px] md:min-h-[300px] relative overflow-hidden group border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Design System</CardTitle>
                            <CardDescription className="text-zinc-400">Crafting reusable components.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-8 flex flex-col gap-3">
                                <div className="h-2 w-full rounded-full bg-white/5 relative overflow-hidden">
                                    <div className="absolute inset-y-0 left-0 w-3/4 bg-primary/50" />
                                </div>
                                <div className="h-2 w-full rounded-full bg-white/5 relative overflow-hidden">
                                    <div className="absolute inset-y-0 left-0 w-1/2 bg-primary/30" />
                                </div>
                                <div className="h-2 w-full rounded-full bg-white/5 relative overflow-hidden">
                                    <div className="absolute inset-y-0 left-0 w-2/3 bg-primary/40" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </StaggerItem>

                {/* Wide Card */}
                <StaggerItem className="md:col-span-2">
                    <Card className="h-full min-h-[200px] md:min-h-[300px] relative overflow-hidden group border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <CardHeader>
                            <CardTitle className="text-2xl text-white">Full Stack Integration</CardTitle>
                            <CardDescription className="text-zinc-400">Seamless connection between frontend and backend services.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-4 flex gap-4">
                                <Badge variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300">API Design</Badge>
                                <Badge variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300">Database Architecture</Badge>
                                <Badge variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300">Security</Badge>
                            </div>
                        </CardContent>
                        <div className="absolute -right-8 bottom-0 opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-500">
                            <Database className="w-48 h-48" />
                        </div>
                    </Card>
                </StaggerItem>
            </StaggerContainer>
        </section>
    )
}

