import React from "react"
import { Link } from "react-router-dom"
import { cn } from "../utils/cn"

type ButtonVariant = "default" | "outline" | "secondary" | "destructive" | "ghost" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  to?: string // Nova prop para roteamento
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, to, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variantStyles: Record<ButtonVariant, string> = {
      default: "bg-primary text-white hover:bg-primary/90",
      outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }

    const sizeStyles: Record<ButtonSize, string> = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md text-sm",
      lg: "h-11 px-8 rounded-md text-base",
      icon: "h-10 w-10",
    }

    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

    // Se a prop "to" for fornecida, renderiza um Link do React Router
    if (to) {
      return (
        <Link to={to} className={classes}>
          {children}
        </Link>
      )
    }

    // Caso contrário, renderiza um botão normal
    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"
