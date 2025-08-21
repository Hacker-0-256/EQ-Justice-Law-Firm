import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20",
        "shadow-xl shadow-black/10",
        hover &&
          "transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      {children}
    </div>
  )
}
