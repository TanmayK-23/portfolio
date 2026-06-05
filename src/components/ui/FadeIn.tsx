import { motion } from "framer-motion"
import { type CSSProperties, type ElementType, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number | string
  y?: number | string
  as?: ElementType | string
  className?: string
  style?: CSSProperties
  viewportAmount?: "some" | "all" | number
  viewportMargin?: string
  once?: boolean
  id?: string
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className,
  style,
  viewportAmount = 0,
  viewportMargin = "50px",
  once = false,
  id
}: FadeInProps) {
  const MotionComponent = as === "nav" ? motion.nav : as === "section" ? motion.section : motion.div

  return (
    <MotionComponent
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: viewportMargin, amount: viewportAmount }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionComponent>
  )
}
