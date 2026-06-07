import { motion } from "framer-motion"
import { Magnet } from "../ui/Magnet"
import { ContactButton } from "../ui/ContactButton"
import { FadeIn } from "../ui/FadeIn"

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative w-full" style={{ overflowX: "clip" }}>
      {/* Grouped Navbar and Heading */}
      <div className="w-full flex justify-center z-20 relative" style={{ paddingTop: "3vh" }}>
        <div className="flex flex-col w-max">
          {/* Navbar */}
          <FadeIn delay={0} y={-20} as="nav" className="flex justify-between w-full px-1 sm:px-2" style={{ marginBottom: "-1.5vw" }}>
            {["About", "Education", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {item}
              </a>
            ))}
          </FadeIn>

          {/* Hero Heading */}
          <div className="overflow-hidden w-full">
            <FadeIn delay={0.15} y={40} className="w-full">
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-center text-[14.5vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
                Hi, i&apos;m tanmay
              </h1>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
        <FadeIn delay={0.35} y={20}>
          <div className="relative bottom-8 left-6 md:bottom-16 md:left-12">
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px] text-left"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              A software engineer driven by crafting striking and unforgettable projects
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div className="relative bottom-8 right-6 md:bottom-16 md:right-12">
            <ContactButton />
          </div>
        </FadeIn>
      </div>

      {/* Hero Portrait - Centered Absolutely */}
      <div className="absolute inset-0 flex items-center sm:items-end justify-center z-0 pointer-events-none pb-[12vh] sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] pointer-events-auto"
        >
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img draggable="false" onContextMenu={(e) => e.preventDefault()}               src="/custom_avatar.png"
              alt="Hero Portrait"
              className="w-full h-auto object-contain"
              style={{
                mixBlendMode: "lighten",
                maskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 80%)"
              }}
            />
          </Magnet>
        </motion.div>
      </div>
    </section>
  )
}
