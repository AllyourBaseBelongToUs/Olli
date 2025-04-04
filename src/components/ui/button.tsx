import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, href, children, ...props }, ref) => {
    const baseClasses = cn(
      "btn",
      {
        "btn-primary": variant === "primary",
        "btn-secondary": variant === "secondary",
        "btn-outline": variant === "outline",
        "btn-ghost": variant === "ghost",
        "btn-sm": size === "sm",
        "btn-md": size === "md",
        "btn-lg": size === "lg",
      },
      className
    );

    if (asChild && href) {
      return (
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button className={baseClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
