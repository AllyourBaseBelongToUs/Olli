import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  // Portfolio stats
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "40+", label: "Industry Awards" },
    { value: "12+", label: "Years of Experience" },
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Section background="gradient" className="py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">Our Portfolio</h1>
            <p className="text-xl opacity-90 mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Explore our work and see how we've helped businesses achieve their marketing goals.
            </p>
          </div>
        </Section>
        
        {/* Stats Section */}
        <Section background="muted">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Portfolio Grid */}
        <Section>
          <SectionTitle centered>Featured Projects</SectionTitle>
          <SectionSubtitle centered>
            A selection of our best work across various industries and marketing disciplines.
          </SectionSubtitle>
          <PortfolioGrid />
        </Section>
        
        {/* Process Section */}
        <Section background="muted">
          <SectionTitle centered>Our Process</SectionTitle>
          <SectionSubtitle centered>
            We follow a proven methodology to ensure every project delivers exceptional results.
          </SectionSubtitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="relative animate-slide-up">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                1
              </div>
              <div className="card p-6 pt-10">
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-muted-foreground">
                  We start by understanding your business, goals, target audience, and competitive landscape.
                </p>
              </div>
            </div>
            
            <div className="relative animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                2
              </div>
              <div className="card p-6 pt-10">
                <h3 className="text-xl font-semibold mb-3">Strategy</h3>
                <p className="text-muted-foreground">
                  We develop a tailored marketing strategy aligned with your business objectives.
                </p>
              </div>
            </div>
            
            <div className="relative animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                3
              </div>
              <div className="card p-6 pt-10">
                <h3 className="text-xl font-semibold mb-3">Execution</h3>
                <p className="text-muted-foreground">
                  Our team brings the strategy to life with creative and technical excellence.
                </p>
              </div>
            </div>
            
            <div className="relative animate-slide-up" style={{ animationDelay: "300ms" }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                4
              </div>
              <div className="card p-6 pt-10">
                <h3 className="text-xl font-semibold mb-3">Optimization</h3>
                <p className="text-muted-foreground">
                  We continuously analyze results and refine our approach to maximize performance.
                </p>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Industries Section */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <SectionTitle>Industries We Serve</SectionTitle>
              <p className="text-muted-foreground mb-6">
                We've worked with clients across a wide range of industries, bringing specialized knowledge and insights to each project.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Technology</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Healthcare</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>E-commerce</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Finance</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Real Estate</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Education</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Hospitality</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Non-profit</span>
                </div>
              </div>
              <Button asChild href="/contact" variant="primary" size="lg">
                Discuss Your Project
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                {/* Placeholder for image - in a real project, use Next.js Image component */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">Industries Image</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your marketing goals with a tailored strategy.
            </p>
            <Button asChild href="/contact" variant="secondary" size="lg" className="hover-lift">
              Start a Project
            </Button>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
