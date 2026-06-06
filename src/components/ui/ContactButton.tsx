import { cn } from "../../lib/utils"

interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function ContactButton({ className, ...props }: ContactButtonProps) {
  return (
    <button
      onClick={(e) => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        props.onClick?.(e)
      }}
      className={cn(
        "relative rounded-full text-xs sm:text-sm text-white font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 group overflow-hidden flex items-center justify-center",
        "border-[2px] border-[#FDE2F3] shadow-[0_0_20px_rgba(182,0,168,0.4)]",
        className
      )}
      style={{
        padding: "clamp(12px, 3vw, 20px) clamp(30px, 8vw, 60px)",
        minWidth: "clamp(140px, 25vw, 200px)",
        minHeight: "clamp(44px, 6vw, 60px)",
        background: "linear-gradient(90deg, #620D84 0%, #B600A8 45%, #D64238 100%)",
        boxShadow: "inset 0px 4px 8px rgba(255, 255, 255, 0.15), 0 0 15px rgba(182, 0, 168, 0.5)"
      }}
      {...props}
    >
      <span className="relative z-10 drop-shadow-md">
        Contact Me
      </span>
    </button>
  )
}
