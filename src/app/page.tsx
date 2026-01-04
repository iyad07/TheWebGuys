import { Hero } from "@/components/Hero";
import { ServicesStack } from "@/components/ServicesStack";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <div className="h-[150vh]" /> {/* Spacer for Hero Sticky Scroll */}
      
      <div className="relative z-10 bg-background">
        {/* Services Section - Stacking Cards */}
        <ServicesStack />

        {/* Selected Work - Bento Layout */}
        <SelectedWork />

      {/* Footer */}
      <footer className="bg-primary text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
            <div className="mb-12 md:mb-0">
                <h2 className="text-6xl md:text-8xl font-serif mb-8">Let's Talk.</h2>
                <a href="mailto:hello@twg.agency" className="text-2xl border-b border-white/30 pb-1 hover:border-white transition-colors hover-trigger">hello@twg.agency</a>
            </div>
            <div className="flex flex-col gap-4 text-right">
                <div className="flex gap-8 text-sm uppercase tracking-wider justify-end">
                    <a href="#" className="hover-trigger hover:text-accent transition-colors">Instagram</a>
                    <a href="#" className="hover-trigger hover:text-accent transition-colors">LinkedIn</a>
                    <a href="#" className="hover-trigger hover:text-accent transition-colors">Twitter</a>
                </div>
                <p className="text-white/40 text-sm mt-8">© 2024 The Web Guys. All rights reserved.</p>
            </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
