import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ServicesStack } from "@/components/ServicesStack";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import AzumahHomes from "@/assets/projects/azumahhomes.png";
import XLabs from "@/assets/projects/xlabsgh.png";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      
      {/* Services Section - Stacking Cards */}
      <ServicesStack />

      {/* Selected Work - Bento Layout */}
      <section className="py-24 bg-white">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
             <Reveal>
                <SectionHeading label="Selected Work" title="Our recent projects" />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[500px]">
                {/* Project 1 - Large / Featured */}
                <Reveal className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-gray-100 hover-trigger">
                    <Image 
                        src={AzumahHomes}
                        alt="Azumah Homes"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-end">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest mb-2 block opacity-80">Real Estate / Web Design</span>
                            <h3 className="text-4xl font-serif">Azumah Homes</h3>
                        </div>
                        <a 
                            href="https://www.azumahhomes.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all"
                        >
                            View Website <ArrowUpRight className="w-3 h-3" />
                        </a>
                    </div>
                </Reveal>

                {/* Project 2 - Tall / Portrait */}
                <Reveal className="md:col-span-1 relative group overflow-hidden rounded-2xl bg-gray-100 hover-trigger">
                     <Image 
                        src={XLabs}
                        alt="XLabs GH"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-end">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest mb-2 block opacity-80">Tech / Branding</span>
                            <h3 className="text-4xl font-serif">XLabs GH</h3>
                        </div>
                         <a 
                            href="https://www.xlabsgh.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all"
                        >
                            View <ArrowUpRight className="w-3 h-3" />
                        </a>
                    </div>
                </Reveal>

                {/* Project 3 - Wide / Landscape */}
                <Reveal className="md:col-span-3 relative group overflow-hidden rounded-2xl bg-gray-100 hover-trigger h-[400px]">
                     <Image 
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                        alt="Nexus"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-xs font-bold uppercase tracking-widest mb-2 block opacity-80">Marketing Strategy</span>
                        <h3 className="text-4xl font-serif">Nexus Tech</h3>
                    </div>
                </Reveal>
            </div>
        </div>
      </section>

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
    </main>
  );
}
