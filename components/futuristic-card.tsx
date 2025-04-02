import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FuturisticCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function FuturisticCard({
  children,
  className,
  glowColor = "from-primary/30 via-primary/20 to-transparent",
}: FuturisticCardProps) {
  return (
    <div className={cn("relative group", className)}>
      <div
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-lg blur transition duration-1000",
          glowColor,
        )}
      ></div>
      <div className="relative bg-background border border-primary/20 rounded-lg p-6 transition duration-200 group-hover:border-primary/40">
        {children}
      </div>
    </div>
  )
}

