import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "../../lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  })

  const words = text.split(" ")
  const totalChars = text.replace(/\s/g, "").length

  return (
    <p ref={containerRef} className={cn("flex flex-wrap justify-center gap-x-[0.4em] gap-y-[0.2em]", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="relative inline-block">
          {word.split("").map((char, charIndex) => {
            const currentCharIndex = words
              .slice(0, wordIndex)
              .join("")
              .length + charIndex
            
            const start = currentCharIndex / totalChars
            const end = start + (1 / totalChars)
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

            return (
              <span key={charIndex} className="relative inline-block">
                <span className="opacity-0">{char}</span>
                <motion.span
                  className="absolute left-0 top-0"
                  style={{ opacity }}
                >
                  {char}
                </motion.span>
              </span>
            )
          })}
        </span>
      ))}
    </p>
  )
}
