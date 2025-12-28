import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Preloader } from "@/components/layout/Preloader";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Preloader />
      <Navbar />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <Features />

        {/* Simple About Section */}
        <section id="about" className="w-full border-t border-white/5 py-24 bg-white/[0.02]">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Let&apos;s build something amazing.</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              I specialize in building clean, efficient, and user-centric applications.
              Whether you need a new website, a complex web app, or just want to chat about tech, I&apos;m here.
            </p>
            <a href="mailto:mahes@example.com" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-transform hover:scale-105 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
