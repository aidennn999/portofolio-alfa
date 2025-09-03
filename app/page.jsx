import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
 return (
  <main className="min-h-screen">
   <Hero />
   <About />
   <Skills />
   <Portfolio />
   <Contact />
  </main>
 );
}
