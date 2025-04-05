import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";

export default function BrandStrategyPage() {
  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Brand Discovery",
      description: "We conduct in-depth research to understand your business, target audience, competitors, and market position."
    },
    {
      number: "02",
      title: "Brand Strategy Development",
      description: "We create a comprehensive strategy that defines your brand's positioning, messaging, and visual identity."
    },
    {
      number: "03",
      title: "Brand Identity Creation",
      description: "We design visual elements that bring your brand to life, including logos, color palettes, typography, and more."
    },
    {
      number: "04",
      title: "Brand Implementation",
      description: "We help you roll out your brand across all touchpoints, ensuring consistency and maximum impact."
    }
  ];

  // Features/benefits
  const features = [
    {
      title: "Differentiated Positioning",
      description: "Stand out from competitors with a unique brand position that resonates with your target audience.",
      icon: "🎯"
    },
    {
      title: "Consistent Brand Experience",
      description: "Create a cohesive experience across all customer touchpoints to build trust and recognition.",
      icon: "🔄"
    },
    {
      title: "Emotional Connection",
      description: "Forge deeper connections with customers through strategic storytelling and authentic messaging.",
      icon: "❤️"
    },
    {
      title: "Increased Brand Value",
      description: "Build long-term equity in your brand that translates to premium pricing and customer loyalty.",
      icon: "📈"
    },
    {
      title: "Strategic Foundation",
      description: "Establish a solid foundation for all marketing activities to ensure alignment and effectiveness.",
      icon: "🏗️"
    },
    {
      title: "Competitive Advantage",
      description: "Leverage your unique strengths to create sustainable advantages in the marketplace.",
      icon: "🥇"
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Revitalize Fitness",
      description: "Complete brand overhaul for a premium fitness chain, resulting in 150% membership growth and industry recognition.",
      image: "/portfolio/fitness.jpg",
      tags: ["Brand Strategy", "Visual Identity", "Positioning"],
    },
    {
      title: "Eco Solutions",
      description: "Brand strategy for a sustainable products company that increased market awareness by 200% and secured major retail partnerships.",
      image: "/portfolio/eco.jpg",
      tags: ["Brand Messaging", "Market Positioning", "Visual Identity"],
    }
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Section background="gradient" className="py-24 md:py-32 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                Brand Strategy
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-xl">
                Develop a compelling brand identity that resonates with your target audience and sets you apart from competitors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild href="/contact" size="lg" className="hover-lift">
                  Get Started
                </Button>
                <Button asChild href="#process" variant="outline" size="lg" className="hover-lift">
                  Learn Our Process
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                <div className="text-4xl">🎯</div>
                <span className="sr-only">Brand Strategy Illustration</span>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Overview Section */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle>Craft a Brand That Captivates</SectionTitle>
              <SectionSubtitle>
                Your brand is more than just a logo—it's the emotional connection you build with your audience.
              </SectionSubtitle>
              <p className="mb-6 text-muted-foreground">
                At Nexus Marketing, we help you develop a comprehensive brand strategy that defines who you are, what you stand for, and why customers should choose you. Our strategic approach ensures your brand resonates with your target audience and creates lasting impressions.
              </p>
              <p className="mb-6 text-muted-foreground">
                Whether you're launching a new brand, refreshing an existing one, or repositioning in the market, our team of brand strategists will guide you through every step of the process.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="card p-6 bg-primary/5 animate-slide-up">
                <h3 className="text-xl font-semibold mb-3">Brand Positioning</h3>
                <p className="text-muted-foreground">Define your unique place in the market and the minds of your customers.</p>
              </div>
              
              <div className="card p-6 bg-primary/5 animate-slide-up" style={{ animationDelay: "100ms" }}>
                <h3 className="text-xl font-semibold mb-3">Brand Messaging</h3>
                <p className="text-muted-foreground">Craft compelling messages that communicate your value proposition.</p>
              </div>
              
              <div className="card p-6 bg-primary/5 animate-slide-up" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-semibold mb-3">Visual Identity</h3>
                <p className="text-muted-foreground">Create visual elements that bring your brand to life across all touchpoints.</p>
              </div>
              
              <div className="card p-6 bg-primary/5 animate-slide-up" style={{ animationDelay: "300ms" }}>
                <h3 className="text-xl font-semibold mb-3">Brand Guidelines</h3>
                <p className="text-muted-foreground">Establish rules for consistent application of your brand elements.</p>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Process Section */}
        <Section background="muted" id="process">
          <SectionTitle centered>Our Brand Strategy Process</SectionTitle>
          <SectionSubtitle centered>
            We follow a proven methodology to develop brands that make an impact and drive business results.
          </SectionSubtitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>
                <div className="card p-6 pt-10 h-full">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Features/Benefits Section */}
        <Section>
          <SectionTitle centered>Benefits of Strategic Branding</SectionTitle>
          <SectionSubtitle centered>
            A strong brand strategy delivers tangible business results and creates long-term value.
          </SectionSubtitle>
          
          <FeaturesGrid features={features.map(feature => ({
            ...feature,
            icon: <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">{feature.icon}</div>
          }))} />
        </Section>
        
        {/* Case Studies Section */}
        <Section background="muted">
          <SectionTitle centered>Brand Strategy Success Stories</SectionTitle>
          <SectionSubtitle centered>
            See how our brand strategy services have transformed businesses and driven remarkable results.
          </SectionSubtitle>
          
          <PortfolioGrid items={caseStudies} />
          
          <div className="text-center mt-12">
            <Button asChild href="/portfolio" variant="outline" size="lg" className="hover-lift">
              View More Case Studies
            </Button>
          </div>
        </Section>
        
        {/* Testimonial Section */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <div className="card p-8 bg-primary/5 border-none relative">
              <div className="absolute -top-5 -left-5 text-5xl text-primary opacity-30">"</div>
              <div className="absolute -bottom-5 -right-5 text-5xl text-primary opacity-30">"</div>
              
              <blockquote className="text-xl italic mb-6 relative z-10">
                Nexus Marketing completely transformed our brand. Their strategic approach helped us clarify our positioning and connect with our audience in a way we never could before. The results have been nothing short of remarkable.
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                  <span className="text-lg font-bold">JD</span>
                </div>
                <div>
                  <div className="font-semibold">Jane Doe</div>
                  <div className="text-sm text-muted-foreground">CEO, Revitalize Fitness</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Powerful Brand?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss how our brand strategy services can help you create a compelling brand that drives business growth.
            </p>
            <Button asChild href="/contact" variant="secondary" size="lg" className="hover-lift">
              Schedule a Consultation
            </Button>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
