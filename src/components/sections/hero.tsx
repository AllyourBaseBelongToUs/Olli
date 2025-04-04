import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
  imageAlt,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden py-20 md:py-28 lg:py-32", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="mb-6 text-gradient">
              {title}
            </h1>
            <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-xl">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={ctaLink} 
                className="btn btn-primary btn-lg hover-lift"
              >
                {ctaText}
              </a>
              {secondaryCtaText && secondaryCtaLink && (
                <a 
                  href={secondaryCtaLink} 
                  className="btn btn-outline btn-lg hover-lift"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
}
