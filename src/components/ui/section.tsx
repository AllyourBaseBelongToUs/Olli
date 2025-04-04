import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: "light" | "dark" | "gradient" | "muted";
}

export function Section({
  id,
  className,
  children,
  background = "light",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section",
        {
          "bg-background": background === "light",
          "bg-secondary": background === "muted",
          "bg-primary text-primary-foreground": background === "dark",
          "bg-gradient-primary text-primary-foreground": background === "gradient",
        },
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionTitle({
  children,
  className,
  centered = false,
}: {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <h2
      className={cn(
        "section-title",
        { "text-center mx-auto": centered },
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  children,
  className,
  centered = false,
}: {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-xl text-muted-foreground mb-12 max-w-3xl",
        { "text-center mx-auto": centered },
        className
      )}
    >
      {children}
    </p>
  );
}
