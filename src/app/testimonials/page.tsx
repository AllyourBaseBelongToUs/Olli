import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { TestimonialsGrid } from "@/components/sections/testimonials-grid";
import { Button } from "@/components/ui/button";

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Section background="gradient" className="py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">Client Testimonials</h1>
            <p className="text-xl opacity-90 mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Hear what our clients have to say about working with Nexus Marketing.
            </p>
          </div>
        </Section>
        
        {/* Testimonials Grid */}
        <Section>
          <SectionTitle centered>What Our Clients Say</SectionTitle>
          <SectionSubtitle centered>
            We're proud of the relationships we've built and the results we've delivered for our clients.
          </SectionSubtitle>
          <TestimonialsGrid />
        </Section>
        
        {/* Featured Case Study */}
        <Section background="muted">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="text-sm text-primary font-medium mb-2">FEATURED SUCCESS STORY</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Revitalize Fitness</h2>
              <p className="text-muted-foreground mb-6">
                "Working with Nexus Marketing transformed our business completely. Their strategic approach to our brand overhaul and digital marketing campaigns resulted in a 150% increase in membership sign-ups within just six months. Their team was responsive, creative, and truly invested in our success."
              </p>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-medium">JT</span>
                </div>
                <div>
                  <h4 className="font-semibold">James Thompson</h4>
                  <p className="text-sm text-muted-foreground">CEO, Revitalize Fitness</p>
                </div>
              </div>
              <Button asChild href="/portfolio" variant="primary" size="lg">
                View Case Study
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                {/* Placeholder for image - in a real project, use Next.js Image component */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">Case Study Image</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Client Logos */}
        <Section>
          <SectionTitle centered>Trusted By</SectionTitle>
          <SectionSubtitle centered>
            We're proud to work with leading companies across various industries.
          </SectionSubtitle>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div 
                key={index} 
                className="aspect-[3/2] bg-secondary rounded-lg flex items-center justify-center animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-muted-foreground">Logo {index}</span>
              </div>
            ))}
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Button asChild href="/contact" variant="secondary" size="lg" className="hover-lift">
              Get in Touch
            </Button>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
