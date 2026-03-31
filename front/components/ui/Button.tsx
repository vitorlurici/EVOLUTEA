import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: "default" | "outline" | "ghost" | "secondary" | "accent"
  size?: "default" | "sm" | "lg" | "icon"
  href?: string
  target?: string
  rel?: string
  type?: "button" | "submit" | "reset"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", href, target, rel, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-white hover:bg-primary-dark": variant === "default",
        "bg-secondary text-white hover:bg-secondary-dark": variant === "secondary",
        "bg-white text-primary hover:bg-gray-100": variant === "accent",
        "border border-primary text-primary hover:bg-primary hover:text-white": variant === "outline",
        "hover:bg-gray-100 text-gray-700": variant === "ghost",
        
        "h-10 px-6 py-2": size === "default",
        "h-9 rounded-md px-3": size === "sm",
        "h-12 rounded-full px-8 text-base": size === "lg",
        "h-10 w-10": size === "icon",
      },
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes} target={target} rel={rel} {...(props as any)}>
          {props.children}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        className={classes}
        type={props.type || "button"}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
