import { HeroSection } from "./components/sections/HeroSection"
import { MarqueeSection } from "./components/sections/MarqueeSection"
import { AboutSection } from "./components/sections/AboutSection"
import { EducationSection } from "./components/sections/EducationSection"
import { ProjectsSection } from "./components/sections/ProjectsSection"
import { ServicesSection } from "./components/sections/ServicesSection"
import { ContactSection } from "./components/sections/ContactSection"

function App() {
  return (
    <main
      className="bg-[#0C0C0C] w-full min-h-screen font-sans antialiased text-[#D7E2EA]"
      style={{ overflowX: "clip" }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}

export default App
