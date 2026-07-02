import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { FadeIn } from "../ui/FadeIn"
import { LiveProjectButton } from "../ui/LiveProjectButton"

const PROJECTS = [
  {
    num: "01",
    name: "Circuit Verse",
    category: "Client",
    link: "https://circuit-verse-mu.vercel.app",
    images: {
      left1: "/9.webp",
      left2: "/2.webp",
      right: "/3.webp",
    },
  },
  {
    num: "02",
    name: "Project Lifeline",
    category: "Personal",
    link: "https://tanmayk-23.github.io/Project-Lifeline/",
    images: {
      left1: "/10.webp",
      left2: "/11.webp",
      right: "/7.webp",
    },
  },
  {
    num: "03",
    name: "GigSecure",
    category: "Client",
    link: "https://gigsecure-weld.vercel.app",
    images: {
      left1: "/14.jpeg",
      left2: "/13.jpeg",
      right: "/12.webp",
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
    <div className="h-[75vh] md:h-[85vh] sticky top-20 md:top-32 w-full">
      <style>{`
        .project-card-dynamic {
          height: clamp(480px, 65vh, 850px);
        }
        @media (min-width: 768px) {
          .project-card-dynamic {
            height: calc(100vh - 140px);
            max-height: 850px;
          }
        }
      `}</style>
      <motion.div
        className="project-card-dynamic w-full mx-auto rounded-[35px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 relative"
        style={{
          scale,
          originX: 0.5,
          originY: 0,
          top: `${index * 28}px`,
        }}
      >
        {/* ── Top row: number · category · name · button ─────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pb-2 shrink-0">
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

          <LiveProjectButton href={project.link} className="hidden sm:inline-flex shrink-0" />
        </div>

        {/* ── Bottom row: two-column image grid ──────────────── */}
        <div className="flex gap-4 flex-1 min-h-0">
          {/* Left column (40%) — 2 stacked images */}
          <div className="w-[40%] flex flex-col gap-4 h-full">
            <div className="w-full flex-[0.4] relative rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
              <img draggable="false" onContextMenu={(e) => e.preventDefault()}                 src={project.images.left1}
                alt={`${project.name} preview 1`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex-[0.6] relative rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
              <img draggable="false" onContextMenu={(e) => e.preventDefault()}                 src={project.images.left2}
                alt={`${project.name} preview 2`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column (60%) — 1 tall image matching left total height */}
          <div className="w-[60%] h-full relative rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
            <img draggable="false" onContextMenu={(e) => e.preventDefault()}               src={project.images.right}
              alt={`${project.name} main`}
              className={`absolute inset-0 w-full h-full object-cover ${project.num === "02" ? "object-left-top" : ""}`}
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
