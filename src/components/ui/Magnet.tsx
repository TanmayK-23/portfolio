import { useState, useRef, useEffect, type ReactNode } from "react"
import { cn } from "../../lib/utils"

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return
      
      const { left, top, width, height } = wrapperRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
      
      const maxRadius = Math.max(width, height) / 2 + padding
      
      if (distance < maxRadius) {
        setIsActive(true)
        setPosition({
          x: distanceX / strength,
          y: distanceY / strength
        })
      } else {
        setIsActive(false)
        setPosition({ x: 0, y: 0 })
      }
    }

    const handleMouseLeave = () => {
      setIsActive(false)
      setPosition({ x: 0, y: 0 })
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [padding, strength])

  return (
    <div
      ref={wrapperRef}
      className={cn("relative inline-block", className)}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}
