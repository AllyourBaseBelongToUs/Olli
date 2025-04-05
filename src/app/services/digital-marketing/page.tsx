import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";

export default function DigitalMarketingPage() {
  // Digital marketing channels
  const channels = [
    {
      title: "Search Engine Optimization",
      description: "Improve your visibility in search results to drive organic traffic and qualified leads.",
      icon: "🔍"
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Generate immediate traffic and conversions through targeted paid search and display campaigns.",
      icon: "💰"
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and build customer relationships through personalized email campaigns.",
      icon: "✉️"
    },
    {
      title: "Social Media Marketing",
      description: "Engage with your audience and build brand awareness across relevant social platforms.",
      icon: "📱"
    },
    {
      title: "Content Marketing",
      description: "Attract and retain customers with valuable, relevant content that establishes authority.",
      icon: "📝"
    },
    {
      title: "Analytics & Reporting",
      description: "Track performance and optimize campaigns based on data-driven insights.",
      icon: "📊"
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business goals, target audience, and current digital presence to identify opportunities."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We create a comprehensive digital marketing strategy tailored to your specific objectives and budget."
    },
    {
      number: "03",
      title: "Campaign Execution",
      description: "We implement campaigns across selected channels with meticulous attention to detail and best practices."
    },
    {
      number: "04",
      title: "Optimization & Scaling",
      description: "We continuously monitor, test, and refine campaigns to improve performance and maximize ROI."
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Metro Finance",
      description: "Comprehensive digital marketing campaign that increased qualified leads by 215% and reduced cost per acquisition by 40%.",
      image: "/portfolio/finance.jpg",
      tags: ["SEO", "PPC", "Content Marketing"],
    },
    {
      title: "Eco Solutions",
      description: "Integrated digital strategy that drove a 180% increase in organic traffic and 75% growth in e-commerce revenue.",
      image: "/portfolio/eco.jpg",
      tags: ["SEO", "Email Marketing", "Social Media"],
    }
  ];

  // Stats
  const stats = [
    { value: "250%", label: "Average ROI" },
    { value: "185%", label: "Traffic Increase" },
    { value: "65%", label: "Lead Growth" },
    { value: "40%", label: "Cost Reduction" },
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
                Digital Marketing
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-xl">
                Drive growth through targeted campaigns across search, social, email, and other digital channels.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild href="/contact" size="lg" className="hover-lift">
                  Get Started
                </Button>
                <Button asChild href="#channels" variant="outline" size="lg" className="hover-lift">
                  Explore Channels
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                <div className="text-4xl">📣</div>
                <span className="sr-only">Digital Marketing Illustration</span>
              </div>
            </div>
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
        
        {/* Overview Section */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle>Data-Driven Digital Marketing</SectionTitle>
              <SectionSubtitle>
                Maximize your online presence and drive measurable business results.
              </SectionSubtitle>
              <p className="mb-6 text-muted-foreground">
                In today's digital landscape, having a strategic online presence is essential for business growth. Our digital marketing services help you navigate the complex digital ecosystem and connect with your target audience at the right time, in the right place, with the right message.
              </p>
              <p className="mb-6 text-muted-foreground">
                We take a data-driven approach to digital marketing, focusing on measurable results and continuous optimization. Our team of specialists across various digital disciplines works together to create integrated campaigns that drive traffic, generate leads, and increase conversions.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-background/0 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-muted flex items-center justify-center">
                <div className="text-4xl">📊</div>
                <span className="sr-only">Digital Marketing Analytics</span>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Channels Section */}
        <Section background="muted" id="channels">
          <SectionTitle centered>Our Digital Marketing Channels</SectionTitle>
          <SectionSubtitle centered>
            We leverage a variety of digital channels to create comprehensive marketing strategies tailored to your business goals.
          </SectionSubtitle>
          
          <FeaturesGrid features={channels.map(channel => ({
            ...channel,
            icon: <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">{channel.icon}</div>
          }))} />
        </Section>
        
        {/* Process Section */}
        <Section>
          <SectionTitle centered>Our Digital Marketing Process</SectionTitle>
          <SectionSubtitle centered>
            We follow a proven methodology to develop and execute digital marketing campaigns that deliver results.
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
        
        {/* Case Studies Section */}
        <Section background="muted">
          <SectionTitle centered>Digital Marketing Success Stories</SectionTitle>
          <SectionSubtitle centered>
            See how our digital marketing strategies have transformed businesses and driven remarkable results.
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
                The digital marketing strategy developed by Nexus Marketing transformed our online presence. Within six months, we saw a dramatic increase in qualified leads and a significant reduction in our cost per acquisition. Their data-driven approach and continuous optimization made all the difference.
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                  <span className="text-lg font-bold">MS</span>
                </div>
                <div>
                  <div className="font-semibold">Michael Smith</div>
                  <div className="text-sm text-muted-foreground">Marketing Director, Metro Finance</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Amplify Your Digital Presence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss how our digital marketing services can help you reach your target audience and achieve your business goals.
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
