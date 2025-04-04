import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { services } from "@/lib/constants";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <div className={cn(
      "card hover-lift transition-all duration-300",
      className
    )}>
      <div className="card-header">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <span className="text-primary text-xl">
            {/* Simple icon representation - in a real app, use an icon library */}
            {icon === "strategy" && "🎯"}
            {icon === "megaphone" && "📣"}
            {icon === "pencil" && "✏️"}
            {icon === "code" && "💻"}
            {icon === "share" && "🔄"}
            {icon === "bar-chart" && "📊"}
          </span>
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-content">
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

interface ServicesGridProps {
  className?: string;
}

export function ServicesGrid({ className }: ServicesGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      className
    )}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          className="animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
