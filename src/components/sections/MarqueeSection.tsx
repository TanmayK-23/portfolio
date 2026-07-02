import { useEffect, useRef, useState } from "react"

const ROW_1_IMAGES = [
  "/1.webp",
  "/2.webp",
  "/3.webp",
  "/4.webp",
]

const ROW_2_IMAGES = [
  "/5.webp",
  "/6.webp",
  "/7.webp",
  "/8.jpeg",
]

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate offset: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const newOffset = (scrollY - sectionTop + windowHeight) * 0.3
      setOffset(newOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Tripled arrays for seamless scrolling
  const row1 = [...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES]
  const row2 = [...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES]

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves Right */}
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform"
          }}
        >
          {row1.map((src, i) => (
            <img draggable="false" onContextMenu={(e) => e.preventDefault()}               key={`r1-${i}`}
              src={src}
              alt="Marquee Item"
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
            />
          ))}
        </div>

        {/* Row 2 - Moves Left */}
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform"
          }}
        >
          {row2.map((src, i) => (
            <img draggable="false" onContextMenu={(e) => e.preventDefault()}               key={`r2-${i}`}
              src={src}
              alt="Marquee Item"
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
