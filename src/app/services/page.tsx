import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  // Define features for each service category
  const brandStrategyFeatures = [
    {
      title: "Brand Identity Development",
      description: "Create a distinctive and memorable brand identity that resonates with your target audience and sets you apart from competitors."
    },
    {
      title: "Market Research & Analysis",
      description: "Gain valuable insights into your market, competitors, and target audience to inform strategic decision-making."
    },
    {
      title: "Positioning Strategy",
      description: "Develop a clear positioning strategy that communicates your unique value proposition and resonates with your ideal customers."
    },
    {
      title: "Brand Messaging Framework",
      description: "Craft consistent and compelling messaging that effectively communicates your brand story and values."
    }
  ];

  const digitalMarketingFeatures = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility in search results to drive organic traffic and reach potential customers."
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Create targeted ad campaigns that deliver measurable results and maximize your return on investment."
    },
    {
      title: "Email Marketing Campaigns",
      description: "Develop personalized email campaigns that nurture leads, build relationships, and drive conversions."
    },
    {
      title: "Analytics & Reporting",
      description: "Track and analyze campaign performance to optimize strategies and demonstrate clear ROI."
    }
  ];

  const contentCreationFeatures = [
    {
      title: "Content Strategy",
      description: "Develop a comprehensive content strategy aligned with your business goals and audience needs."
    },
    {
      title: "Copywriting & Editing",
      description: "Create compelling copy for websites, blogs, social media, and marketing materials that engages your audience."
    },
    {
      title: "Visual Content Creation",
      description: "Design eye-catching graphics, infographics, and visual assets that enhance your brand messaging."
    },
    {
      title: "Video Production",
      description: "Produce high-quality video content that tells your story and connects with your audience."
    }
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Section background="gradient" className="py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">Our Services</h1>
            <p className="text-xl opacity-90 mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Comprehensive marketing solutions tailored to help your business grow and succeed in today's competitive landscape.
            </p>
          </div>
        </Section>
        
        {/* Services Overview */}
        <Section>
          <SectionTitle centered>How We Can Help You</SectionTitle>
          <SectionSubtitle centered>
            We offer a wide range of marketing services designed to meet your specific business needs and objectives.
          </SectionSubtitle>
          <ServicesGrid />
        </Section>
        
        {/* Brand Strategy Section */}
        <Section background="muted" id="brand-strategy">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Brand Strategy</h2>
              <p className="text-muted-foreground mb-6">
                A strong brand is the foundation of successful marketing. Our brand strategy services help you define your unique position in the market and create a compelling brand identity that resonates with your target audience.
              </p>
              <ul className="space-y-4 mb-8">
                {brandStrategyFeatures.map((feature, index) => (
                  <li key={index} className="flex">
                    <span className="text-primary mr-3">✓</span>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild href="/contact" variant="primary" size="lg">
                Get Started
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                {/* Placeholder for image - in a real project, use Next.js Image component */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">Brand Strategy Image</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Digital Marketing Section */}
        <Section id="digital-marketing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative animate-slide-in-left">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                {/* Placeholder for image - in a real project, use Next.js Image component */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">Digital Marketing Image</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Marketing</h2>
              <p className="text-muted-foreground mb-6">
                Our data-driven digital marketing strategies help you reach your target audience, drive traffic, and generate leads through the most effective channels for your business.
              </p>
              <ul className="space-y-4 mb-8">
                {digitalMarketingFeatures.map((feature, index) => (
                  <li key={index} className="flex">
                    <span className="text-primary mr-3">✓</span>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild href="/contact" variant="primary" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </Section>
        
        {/* Content Creation Section */}
        <Section background="muted" id="content-creation">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Content Creation</h2>
              <p className="text-muted-foreground mb-6">
                Compelling content is essential for engaging your audience and driving conversions. Our content creation services help you tell your story in a way that resonates with your target audience.
              </p>
              <ul className="space-y-4 mb-8">
                {contentCreationFeatures.map((feature, index) => (
                  <li key={index} className="flex">
                    <span className="text-primary mr-3">✓</span>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild href="/contact" variant="primary" size="lg">
                Get Started
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                {/* Placeholder for image - in a real project, use Next.js Image component */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">Content Creation Image</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Marketing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss how our services can help you achieve your business goals.
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
