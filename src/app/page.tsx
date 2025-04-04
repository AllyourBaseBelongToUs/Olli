import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TestimonialsGrid } from "@/components/sections/testimonials-grid";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero 
          title="Elevate Your Brand with Strategic Marketing"
          subtitle="We help businesses grow through data-driven marketing strategies, compelling content, and innovative digital solutions."
          ctaText="Get Started"
          ctaLink="/contact"
          secondaryCtaText="Learn More"
          secondaryCtaLink="/services"
          imageSrc="/images/hero-image.jpg"
          imageAlt="Nexus Marketing Team Collaboration"
        />
        
        {/* Services Section */}
        <Section id="services" background="muted">
          <SectionTitle centered>Our Services</SectionTitle>
          <SectionSubtitle centered>
            We offer a comprehensive range of marketing services to help your business thrive in today's competitive landscape.
          </SectionSubtitle>
          <ServicesGrid />
          <div className="mt-12 text-center">
            <Button asChild href="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </div>
        </Section>
        
        {/* About Section Preview */}
        <Section id="about">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <SectionTitle>Strategic Marketing for Measurable Results</SectionTitle>
              <p className="text-muted-foreground mb-6">
                At Nexus Marketing, we combine creativity with data-driven strategies to deliver marketing solutions that drive real business growth. Our team of experts works closely with you to understand your goals and develop tailored approaches that connect with your audience.
              </p>
              <p className="text-muted-foreground mb-8">
                With years of experience across various industries, we bring a wealth of knowledge and innovative thinking to every project.
              </p>
              <Button asChild href="/about" variant="outline" size="lg">
                About Our Agency
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                {/* Placeholder for image - in a real project, use Next.js Image component */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">About Image</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Testimonials Section */}
        <Section id="testimonials" background="muted">
          <SectionTitle centered>What Our Clients Say</SectionTitle>
          <SectionSubtitle centered>
            Don't just take our word for it. Here's what our clients have to say about working with Nexus Marketing.
          </SectionSubtitle>
          <TestimonialsGrid />
        </Section>
        
        {/* CTA Section */}
        <Section id="cta" background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Marketing Strategy?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to create marketing solutions that drive real results for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild href="/contact" variant="secondary" size="lg" className="hover-lift">
                Get in Touch
              </Button>
              <Button asChild href="/portfolio" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover-lift">
                View Our Work
              </Button>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
