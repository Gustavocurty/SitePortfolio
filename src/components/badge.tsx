import React from "react"
import { cn } from "../utils/cn"

type BadgeVariant = "default" | "secondary" | "outline" | "destructive"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
}

export const Badge = ({ className, variant = "default", ...props }: BadgeProps) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  
  const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground border border-input",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
  }
  
  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}
