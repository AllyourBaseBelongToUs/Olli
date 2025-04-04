import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function Feature({ title, description, icon, className }: FeatureProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

interface FeaturesGridProps {
  features: FeatureProps[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeaturesGrid({ features, columns = 3, className }: FeaturesGridProps) {
  return (
    <div
      className={cn(
        "grid gap-8",
        {
          "grid-cols-1 md:grid-cols-2": columns === 2,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": columns === 3,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": columns === 4,
        },
        className
      )}
    >
      {features.map((feature, index) => (
        <Feature
          key={index}
          {...feature}
          className="animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
