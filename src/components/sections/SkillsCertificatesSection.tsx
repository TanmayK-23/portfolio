import { useEffect, useRef, useState } from "react"
import { useAnimationFrame, useInView } from "framer-motion"
import { FadeIn } from "../ui/FadeIn"

const SKILLS = [
  { num: "01", category: "Programming Languages", items: ["Java", "Python", "JavaScript", "C++"] },
  { num: "02", category: "Web Development", items: ["HTML", "CSS", "React", "Node.js"] },
  { num: "03", category: "Databases", items: ["MySQL", "MongoDB"] },
  { num: "04", category: "Other", items: ["Git", "GitHub", "Machine Learning", "IoT", "AR Development"] },
]

const CERTIFICATES = [
  "/Gengo.jpg",
  "/Inhouse.jpg",
  "/ISA.jpg",
  "/DBMS.jpg",
  "/java.jpg",
  "/Namespace.png",
  "/oop.jpg",
  "/os.jpg",
  "/Poster.jpeg",
  "/Outreach.jpeg",
  "/ultron.png",
]

export function SkillsCertificatesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { margin: "200px" })
  
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Track exact floating point positions to prevent browser sub-pixel rounding bugs
  const row1Pos = useRef(0)
  const row2Pos = useRef(0)

  // Auto-scroll logic
  useAnimationFrame((_, delta) => {
    // Pause animation if hovered OR if the section is not visible on screen
    if (isHovered || !isInView) {
      // Keep internal positions synced with user manual scrolling
      if (row1Ref.current) row1Pos.current = row1Ref.current.scrollLeft
      if (row2Ref.current) row2Pos.current = row2Ref.current.scrollLeft
      return
    }

    const speed = 0.8 * (delta / 16)

    // Row 1 (Moves Right -> scrollLeft decreases)
    if (row1Ref.current) {
      row1Pos.current -= speed
      if (row1Pos.current <= 0) {
        row1Pos.current = row1Ref.current.scrollWidth / 2
      }
      row1Ref.current.scrollLeft = row1Pos.current
    }

    // Row 2 (Moves Left -> scrollLeft increases)
    if (row2Ref.current) {
      row2Pos.current += speed
      if (row2Pos.current >= row2Ref.current.scrollWidth / 2) {
        row2Pos.current = 0
      }
      row2Ref.current.scrollLeft = row2Pos.current
    }
  })

  // Start Row 1 at the middle to allow scrolling left immediately
  useEffect(() => {
    if (row1Ref.current) {
      const startPos = row1Ref.current.scrollWidth / 2
      row1Ref.current.scrollLeft = startPos
      row1Pos.current = startPos
    }
  }, [])

  // Split certificates into two rows
  const midIndex = Math.ceil(CERTIFICATES.length / 2)
  const ROW_1_CERTS = CERTIFICATES.slice(0, midIndex)
  const ROW_2_CERTS = CERTIFICATES.slice(midIndex)

  // Copy arrays 6 times to ensure it never runs out of certificates on wide/long pages
  const row1 = [...ROW_1_CERTS, ...ROW_1_CERTS, ...ROW_1_CERTS, ...ROW_1_CERTS, ...ROW_1_CERTS, ...ROW_1_CERTS]
  const row2 = [...ROW_2_CERTS, ...ROW_2_CERTS, ...ROW_2_CERTS, ...ROW_2_CERTS, ...ROW_2_CERTS, ...ROW_2_CERTS]

  return (
    <FadeIn
      as="section"
      delay={0}
      y={50}
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] pt-20 sm:pt-24 md:pt-32 relative z-20 overflow-hidden"
      style={{ paddingBottom: "120px" }}
    >
      <div ref={sectionRef} className="w-full flex flex-col items-center">
        <FadeIn delay={0} y={40} className="px-5 sm:px-8 md:px-10 w-full">
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none w-full"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 90px)",
              marginBottom: "90px",
              marginTop: "clamp(1.5rem, 3vw, 3rem)"
            }}
          >
            Skills & <br className="lg:hidden" /> Certificates
          </h2>
        </FadeIn>

        {/* SKILLS LIST */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 sm:gap-y-28 gap-x-8 lg:gap-x-16 px-5 sm:px-10">
          {SKILLS.map((skill, index) => (
            <FadeIn
              key={skill.num}
              delay={0.1 + (index * 0.05)}
              y={40}
              viewportAmount={0.4}
              className="relative w-full flex flex-row items-start justify-start gap-4 sm:gap-8"
            >
              {/* Giant Number */}
              <div className="text-[#0C0C0C] font-black leading-none text-[clamp(3.5rem,8vw,80px)] shrink-0 w-[70px] sm:w-[100px] text-left opacity-20 hover:opacity-100 transition-opacity duration-500 sm:mt-[-8px]">
                {skill.num}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 w-full text-left pt-1 sm:pt-0">
                <h3 className="text-[#0C0C0C] font-black uppercase text-[clamp(1.2rem,2vw,1.5rem)] leading-tight">
                  {skill.category}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed text-[clamp(1rem,1.5vw,1.15rem)] opacity-60">
                  {skill.items.join(", ")}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CERTIFICATES MARQUEE */}
        <div className="w-full mt-32 md:mt-48 flex flex-col gap-8">
          <FadeIn delay={0} y={20} style={{ marginTop: "clamp(2rem, 5vw, 4rem)" }}>
            <h3 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(1.8rem,4vw,3rem)] opacity-40">
              Certificates
            </h3>
          </FadeIn>

          <div 
            className="w-full overflow-hidden mt-8 flex flex-col gap-4 sm:gap-6 lg:gap-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {/* Row 1 - Moves Right */}
            <div
              ref={row1Ref}
              className="flex gap-4 sm:gap-6 lg:gap-8 whitespace-nowrap overflow-x-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ scrollBehavior: "auto" }}
            >
              {row1.map((img, i) => (
                <div
                  key={`r1-${i}`}
                  className="w-[280px] sm:w-[350px] md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px] shrink-0 rounded-[20px] sm:rounded-[30px] overflow-hidden border border-[#0C0C0C]/10 shadow-lg hover:scale-[1.02] transition-transform duration-500 cursor-grab active:cursor-grabbing"
                >
                  <img draggable="false" onContextMenu={(e) => e.preventDefault()} src={img} alt="Certificate" className="w-full h-full object-cover pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Row 2 - Moves Left */}
            <div
              ref={row2Ref}
              className="flex gap-4 sm:gap-6 lg:gap-8 whitespace-nowrap overflow-x-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ scrollBehavior: "auto" }}
            >
              {row2.map((img, i) => (
                <div
                  key={`r2-${i}`}
                  className="w-[280px] sm:w-[350px] md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px] shrink-0 rounded-[20px] sm:rounded-[30px] overflow-hidden border border-[#0C0C0C]/10 shadow-lg hover:scale-[1.02] transition-transform duration-500 cursor-grab active:cursor-grabbing"
                >
                  <img draggable="false" onContextMenu={(e) => e.preventDefault()} src={img} alt="Certificate" className="w-full h-full object-cover pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </FadeIn>
  )
}
