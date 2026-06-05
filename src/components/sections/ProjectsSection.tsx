import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { FadeIn } from "../ui/FadeIn"
import { LiveProjectButton } from "../ui/LiveProjectButton"

const PROJECTS = [
  {
    num: "01",
    name: "Nextlevel Studio",
    category: "Client",
    images: {
      left1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      left2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
  },
  {
    num: "02",
    name: "Aura Brand Identity",
    category: "Personal",
    images: {
      left1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      left2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
  },
  {
    num: "03",
    name: "Solaris Digital",
    category: "Client",
    images: {
      left1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      left2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
  },
]

const TOTAL_CARDS = PROJECTS.length

// ─── Individual sticky project card ──────────────────────────────────
interface ProjectCardProps {
  project: (typeof PROJECTS)[number]
  index: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

function ProjectCard({
  project,
  index,
  progress,
  range,
  targetScale,
}: ProjectCardProps) {
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="h-[85vh] sticky top-24 md:top-32 w-full">
      <motion.div
        className="w-full mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 relative"
        style={{
          scale,
          originX: 0.5,
          originY: 0,
          top: `${index * 28}px`,
        }}
      >
        {/* ── Top row: number · category · name · button ─────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pb-2">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number — same huge style as services section */}
            <span
              className="text-[#D7E2EA] font-black leading-none shrink-0"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.num}
            </span>

            <div className="flex flex-col gap-0.5">
              <span className="text-[#D7E2EA] opacity-60 uppercase text-sm md:text-base tracking-widest font-medium">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: "clamp(1.2rem, 3vw, 2.5rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton className="hidden sm:block shrink-0" />
        </div>

        {/* ── Bottom row: two-column image grid ──────────────── */}
        <div className="flex gap-4">
          {/* Left column (40%) — 2 stacked images */}
          <div className="w-[40%] flex flex-col gap-4">
            <div
              className="w-full relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <img
                src={project.images.left1}
                alt={`${project.name} preview 1`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div
              className="w-full relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <img
                src={project.images.left2}
                alt={`${project.name} preview 2`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column (60%) — 1 tall image matching left total height */}
          <div
            className="w-[60%] relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden"
            style={{
              height:
                "calc(clamp(130px, 16vw, 230px) + clamp(160px, 22vw, 340px) + 1rem)",
            }}
          >
            <img
              src={project.images.right}
              alt={`${project.name} main`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Projects section wrapper ────────────────────────────────────────
export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  return (
    <div className="relative w-full z-10">
      {/* White background only behind the rounded top corners to blend with the previous EducationSection */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-white" />
      <section
        id="projects"
        ref={sectionRef}
        className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-10 px-5 sm:px-8 md:px-10 pt-16 md:pt-24 flex flex-col items-center w-full"
        style={{ paddingBottom: "10vh" }}
      >
        {/* Breathing space above title */}
        <div className="w-full" style={{ height: "clamp(40px, 6vh, 120px)" }} />

        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase text-center leading-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Project
          </h2>
        </FadeIn>
        
        {/* Breathing space between title and cards */}
        <div className="w-full" style={{ height: "clamp(40px, 6vh, 120px)" }} />

        <div className="relative w-full max-w-6xl">
          {PROJECTS.map((project, i) => {
            const targetScale = 1 - (TOTAL_CARDS - 1 - i) * 0.03
            return (
              <ProjectCard
                key={project.num}
                index={i}
                project={project}
                progress={scrollYProgress}
                range={[i * (1 / TOTAL_CARDS), 1]}
                targetScale={targetScale}
              />
            )
          })}
          {/* Spacer inside the sticky container to force the last card to stick properly before the container ends */}
          <div style={{ height: "30vh" }} />
        </div>
      </section>
    </div>
  )
}
