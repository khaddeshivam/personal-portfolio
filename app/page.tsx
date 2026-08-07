import { Achievements, Contact, Footer, Hero, Navbar, StackStrip, Story } from "@/components/Portfolio";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/Projects/Projects";
import { TechStack } from "@/components/tech-stack/TechStack";
import { ResumeCTA } from "@/components/resume/ResumeCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StackStrip />
        <Projects />
        <Story />
        <Experience />
        <TechStack />
        <Achievements />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
