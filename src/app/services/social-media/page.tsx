import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";

export default function SocialMediaPage() {
  // Social platforms
  const platforms = [
    {
      name: "Instagram",
      icon: "📸",
      description: "Visual storytelling to showcase your brand and products."
    },
    {
      name: "Facebook",
      icon: "👥",
      description: "Community building and targeted advertising to reach your audience."
    },
    {
      name: "LinkedIn",
      icon: "💼",
      description: "Professional networking and B2B marketing to establish authority."
    },
    {
      name: "Twitter",
      icon: "🐦",
      description: "Real-time engagement and trend participation to increase visibility."
    },
    {
      name: "TikTok",
      icon: "🎵",
      description: "Short-form video content to reach younger audiences and showcase creativity."
    },
    {
      name: "Pinterest",
      icon: "📌",
      description: "Visual discovery platform to drive traffic and inspire purchases."
    }
  ];

  // Services
  const services = [
    {
      title: "Social Media Strategy",
      description: "Comprehensive strategies tailored to your business goals and target audience.",
      icon: "🎯"
    },
    {
      title: "Content Creation",
      description: "Engaging posts, stories, and videos that resonate with your audience.",
      icon: "✏️"
    },
    {
      title: "Community Management",
      description: "Active engagement with your audience to build relationships and loyalty.",
      icon: "💬"
    },
    {
      title: "Paid Social Advertising",
      description: "Targeted ad campaigns that drive awareness, engagement, and conversions.",
      icon: "💰"
    },
    {
      title: "Influencer Marketing",
      description: "Partnerships with relevant influencers to expand reach and credibility.",
      icon: "🌟"
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure performance and optimize strategies.",
      icon: "📊"
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Audit & Research",
      description: "We analyze your current social presence, competitors, and target audience to identify opportunities."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We create a tailored social media strategy aligned with your business goals and audience preferences."
    },
    {
      number: "03",
      title: "Content Creation & Publishing",
      description: "Our team produces and publishes high-quality content across your social channels."
    },
    {
      number: "04",
      title: "Community Management & Optimization",
      description: "We engage with your audience and continuously optimize based on performance data."
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Fashion Retailer",
      description: "Social media strategy that increased engagement by 215%, grew followers by 180%, and drove a 95% increase in social-referred sales.",
      image: "/portfolio/fashion.jpg",
      tags: ["Instagram", "TikTok", "Influencer Marketing"],
    },
    {
      title: "B2B Software Company",
      description: "LinkedIn-focused strategy that generated 120+ qualified leads per month and established thought leadership in the industry.",
      image: "/portfolio/software.jpg",
      tags: ["LinkedIn", "Content Strategy", "Lead Generation"],
    }
  ];

  // Stats
  const stats = [
    { value: "320%", label: "Avg. Engagement Increase" },
    { value: "210%", label: "Follower Growth" },
    { value: "175%", label: "Social Traffic Increase" },
    { value: "85%", label: "Conversion Rate Improvement" },
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
                Social Media Marketing
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-xl">
                Engage with your audience and build brand awareness across relevant social platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild href="/contact" size="lg" className="hover-lift">
                  Get Started
                </Button>
                <Button asChild href="#platforms" variant="outline" size="lg" className="hover-lift">
                  Explore Platforms
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                <div className="text-4xl">🔄</div>
                <span className="sr-only">Social Media Marketing Illustration</span>
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
              <SectionTitle>Strategic Social Media Marketing</SectionTitle>
              <SectionSubtitle>
                Transform your social media presence from just posting content to driving real business results.
              </SectionSubtitle>
              <p className="mb-6 text-muted-foreground">
                In today's digital landscape, social media is a powerful tool for building brand awareness, engaging with your audience, and driving business growth. Our social media marketing services help you navigate the complex social landscape and create meaningful connections with your target audience.
              </p>
              <p className="mb-6 text-muted-foreground">
                We take a strategic approach to social media, focusing on the platforms that matter most to your audience and creating content that resonates with them. Our team of social media specialists combines creativity with data-driven insights to develop campaigns that deliver measurable results.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-background/0 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-muted flex items-center justify-center">
                <div className="text-4xl">📱</div>
                <span className="sr-only">Social Media Marketing</span>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Platforms Section */}
        <Section background="muted" id="platforms">
          <SectionTitle centered>Platforms We Specialize In</SectionTitle>
          <SectionSubtitle centered>
            We help you leverage the right social platforms to reach and engage your target audience.
          </SectionSubtitle>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className="card p-6 text-center animate-slide-up hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="font-semibold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Services Section */}
        <Section>
          <SectionTitle centered>Our Social Media Services</SectionTitle>
          <SectionSubtitle centered>
            We offer a comprehensive range of social media services to help you achieve your business goals.
          </SectionSubtitle>
          
          <FeaturesGrid features={services.map(service => ({
            ...service,
            icon: <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">{service.icon}</div>
          }))} />
        </Section>
        
        {/* Process Section */}
        <Section background="muted">
          <SectionTitle centered>Our Social Media Process</SectionTitle>
          <SectionSubtitle centered>
            We follow a proven methodology to develop and execute social media strategies that deliver results.
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
        <Section>
          <SectionTitle centered>Social Media Success Stories</SectionTitle>
          <SectionSubtitle centered>
            See how our social media strategies have transformed businesses and driven remarkable results.
          </SectionSubtitle>
          
          <PortfolioGrid items={caseStudies} />
          
          <div className="text-center mt-12">
            <Button asChild href="/portfolio" variant="outline" size="lg" className="hover-lift">
              View More Case Studies
            </Button>
          </div>
        </Section>
        
        {/* Testimonial Section */}
        <Section background="muted">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8 bg-primary/5 border-none relative">
              <div className="absolute -top-5 -left-5 text-5xl text-primary opacity-30">"</div>
              <div className="absolute -bottom-5 -right-5 text-5xl text-primary opacity-30">"</div>
              
              <blockquote className="text-xl italic mb-6 relative z-10">
                Nexus Marketing revolutionized our social media presence. Their strategic approach, creative content, and data-driven optimization have not only significantly increased our engagement and follower count but have also directly contributed to our bottom line. The team is responsive, innovative, and truly understands our brand voice.
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                  <span className="text-lg font-bold">EL</span>
                </div>
                <div>
                  <div className="font-semibold">Emma Lewis</div>
                  <div className="text-sm text-muted-foreground">Marketing Manager, Fashion Retailer</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Social Media Presence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss how our social media marketing services can help you connect with your audience and achieve your business goals.
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
