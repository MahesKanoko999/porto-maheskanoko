"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "mahes@example.com",
        href: "mailto:mahes@example.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+62 812 3456 7890",
        href: "tel:+6281234567890",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Indonesia",
        href: "#",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            <Navbar />
            <main className="flex-1 flex flex-col items-center w-full pt-24">
                {/* Hero Section */}
                <section className="w-full py-16 md:py-24 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <ScrollReveal className="text-center mb-12 md:mb-16">
                            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Get in Touch</p>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
                                Let&apos;s work together
                            </h1>
                            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                                Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            {/* Contact Form */}
                            <ScrollReveal direction="left" delay={0.1}>
                                {submitted ? (
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Send className="w-8 h-8 text-green-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                                        <p className="text-zinc-400 mb-6">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setSubmitted(false)}
                                            className="border-white/20 hover:bg-white/5"
                                        >
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                                                placeholder="Project inquiry"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="w-full h-12 text-base"
                                        >
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 w-4 h-4" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </ScrollReveal>

                            {/* Contact Info */}
                            <ScrollReveal direction="right" delay={0.2} className="space-y-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                                    <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
                                    <div className="space-y-6">
                                        {contactInfo.map((info) => (
                                            <Link
                                                key={info.label}
                                                href={info.href}
                                                className="flex items-center gap-4 group"
                                            >
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                    <info.icon className="w-5 h-5 text-zinc-400" />
                                                </div>
                                                <div>
                                                    <p className="text-xs uppercase tracking-widest text-zinc-500">{info.label}</p>
                                                    <p className="text-white group-hover:text-zinc-300 transition-colors">{info.value}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                                    <h3 className="text-lg font-semibold text-white mb-4">Working Hours</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-zinc-500">Monday - Friday</span>
                                            <span className="text-white">09:00 - 18:00 WIB</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-500">Saturday</span>
                                            <span className="text-white">10:00 - 15:00 WIB</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-500">Sunday</span>
                                            <span className="text-zinc-500">Closed</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-sm text-zinc-500 mb-3">Prefer social media?</p>
                                    <div className="flex gap-3 justify-center md:justify-start">
                                        <Link href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                            <span className="text-xs text-zinc-400">IG</span>
                                        </Link>
                                        <Link href="https://twitter.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                            <span className="text-xs text-zinc-400">TW</span>
                                        </Link>
                                        <Link href="https://linkedin.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                            <span className="text-xs text-zinc-400">LI</span>
                                        </Link>
                                        <Link href="https://github.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                            <span className="text-xs text-zinc-400">GH</span>
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
