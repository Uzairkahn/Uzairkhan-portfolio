import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import WhyWorkWithMe from "@/components/WhyWorkWithMe/WhyWorkWithMe";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#05070E]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WhyWorkWithMe />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}