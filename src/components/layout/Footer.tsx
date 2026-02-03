import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";

const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

const footerLinks = {
    company: [
        { name: "About", href: "/about" },
        { name: "Work", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ],
    services: [
        { name: "Web Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Consulting", href: "#" },
    ],
    resources: [
        { name: "Blog", href: "#" },
        { name: "Templates", href: "#" },
        { name: "FAQ", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="relative bg-background mt-24 md:mt-48">
            {/* Large Background Logo with Blur Fade Effect */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-[40%] w-[280px] sm:w-[400px] md:w-[700px] lg:w-[900px] pointer-events-none select-none z-0">
                {/* Sharp Top Layer */}
                <div
                    className="relative"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 60%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 60%)'
                    }}
                >
                    <Image
                        src="/maheskanoko.png"
                        alt="Background Logo"
                        width={900}
                        height={350}
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Blurred Bottom Layer */}
                <div
                    className="absolute inset-0 blur-xl"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 30%, black 70%, black 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 30%, black 70%, black 100%)'
                    }}
                >
                    <Image
                        src="/maheskanoko.png"
                        alt="Background Logo Blur"
                        width={900}
                        height={350}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* Social Links Row - Grid with Borders */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 relative z-10">
                {socialLinks.map((social, i) => (
                    <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center justify-between p-6 hover:bg-white/5 transition-colors group ${i !== socialLinks.length - 1 ? "border-r border-white/10" : ""
                            } ${i < 2 ? "md:border-b-0 border-b md:border-b-transparent border-white/10" : ""}`}
                    >
                        <div className="flex items-center gap-3">
                            <social.icon className="w-5 h-5 text-white" />
                            <span className="text-sm text-white font-medium">{social.name}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    </Link>
                ))}
            </div>

            {/* Main Footer Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-12 border-t border-white/10 relative z-10">
                {/* Company */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Company</h4>
                    <ul className="space-y-3">
                        {footerLinks.company.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-sm text-white hover:text-zinc-400 transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Services</h4>
                    <ul className="space-y-3">
                        {footerLinks.services.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-sm text-white hover:text-zinc-400 transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Resources</h4>
                    <ul className="space-y-3">
                        {footerLinks.resources.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-sm text-white hover:text-zinc-400 transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Contact</h4>
                    <ul className="space-y-3">
                        <li className="text-sm text-white">mahes@example.com</li>
                        <li className="text-sm text-white">+62 812 3456 7890</li>
                        <li className="text-sm text-zinc-500">Indonesia - Working globally</li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 p-6 text-center relative z-10">
                <p className="text-xs text-zinc-500">
                    &copy; {new Date().getFullYear()} Mahes Kanoko. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
