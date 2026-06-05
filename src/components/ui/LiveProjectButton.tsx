import { cn } from "../../lib/utils"

interface LiveProjectButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
  href?: string
}

export function LiveProjectButton({ className, href, ...props }: LiveProjectButtonProps) {
  return (
    <a
      href={href || "#"}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(
        "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors inline-flex items-center justify-center",
        className
      )}
      style={{ padding: "12px 32px" }}
      {...props}
    >
      Live Project
    </a>
  )
}
