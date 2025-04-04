import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { portfolioItems } from "@/lib/constants";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  className?: string;
  href?: string;
}

export function PortfolioCard({
  title,
  description,
  image,
  tags,
  className,
  href = "#",
}: PortfolioCardProps) {
  return (
    <div className={cn(
      "group card overflow-hidden hover-lift transition-all duration-300",
      className
    )}>
      {/* Image container */}
      <div className="relative aspect-video overflow-hidden">
        {/* Placeholder for image - in a real project, use Next.js Image component */}
        <div className="w-full h-full bg-secondary flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <span className="text-muted-foreground">{title}</span>
        </div>
        
        {/* Overlay with tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <Link 
          href={href}
          className="text-primary font-medium inline-flex items-center hover:underline"
        >
          View Case Study
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="ml-1 h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

interface PortfolioGridProps {
  items?: PortfolioCardProps[];
  className?: string;
}

export function PortfolioGrid({ 
  items = portfolioItems,
  className 
}: PortfolioGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      className
    )}>
      {items.map((item, index) => (
        <PortfolioCard
          key={index}
          {...item}
          className="animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
