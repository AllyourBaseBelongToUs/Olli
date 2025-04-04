import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/constants";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatar?: string;
  className?: string;
}

export function TestimonialCard({ 
  quote, 
  author, 
  title, 
  avatar, 
  className 
}: TestimonialCardProps) {
  return (
    <div className={cn(
      "card p-6 flex flex-col h-full",
      className
    )}>
      {/* Quote mark */}
      <div className="text-primary/20 text-6xl font-serif mb-4">"</div>
      
      {/* Quote */}
      <p className="text-lg mb-6 flex-grow">{quote}</p>
      
      {/* Author info */}
      <div className="flex items-center mt-auto">
        {avatar ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={avatar}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <span className="text-primary font-medium">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
}

interface TestimonialsCarouselProps {
  className?: string;
}

export function TestimonialsGrid({ className }: TestimonialsCarouselProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      className
    )}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          quote={testimonial.quote}
          author={testimonial.author}
          title={testimonial.title}
          avatar={testimonial.avatar}
          className="animate-slide-up hover-lift"
          style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
