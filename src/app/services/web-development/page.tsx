import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";

export default function WebDevelopmentPage() {
  // Web development services
  const services = [
    {
      title: "Website Design",
      description: "Custom, responsive designs that reflect your brand and provide exceptional user experiences.",
      icon: "🎨"
    },
    {
      title: "E-commerce Development",
      description: "Powerful online stores that drive sales and provide seamless shopping experiences.",
      icon: "🛒"
    },
    {
      title: "Web Applications",
      description: "Custom web applications that automate processes and solve specific business challenges.",
      icon: "⚙️"
    },
    {
      title: "CMS Implementation",
      description: "User-friendly content management systems that make website updates easy.",
      icon: "📝"
    },
    {
      title: "Performance Optimization",
      description: "Speed and performance improvements that enhance user experience and SEO.",
      icon: "⚡"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support to keep your website secure, up-to-date, and performing optimally.",
      icon: "🔧"
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We gather requirements, understand your goals, and create a detailed project plan."
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "We create wireframes and visual designs that align with your brand and user needs."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Our developers build your website with clean code and thorough testing."
    },
    {
      number: "04",
      title: "Launch & Optimization",
      description: "We deploy your website and provide ongoing optimization and support."
    }
  ];

  // Technologies
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "WordPress", icon: "📰" },
    { name: "Shopify", icon: "🛍️" },
    { name: "WooCommerce", icon: "🛒" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TypeScript", icon: "📘" }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "E-commerce Redesign",
      description: "Complete redesign and development of an e-commerce platform that increased conversions by 85% and improved page load speed by 65%.",
      image: "/portfolio/ecommerce.jpg",
      tags: ["E-commerce", "UX Design", "Performance"],
    },
    {
      title: "Corporate Website",
      description: "Modern, responsive website for a financial services firm that improved lead generation by 120% and reduced bounce rate by 40%.",
      image: "/portfolio/finance.jpg",
      tags: ["Web Design", "CMS", "SEO"],
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
                Web Development
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-xl">
                Build stunning, high-performance websites that convert visitors into customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild href="/contact" size="lg" className="hover-lift">
                  Get Started
                </Button>
                <Button asChild href="#services" variant="outline" size="lg" className="hover-lift">
                  Explore Services
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                <div className="text-4xl">💻</div>
                <span className="sr-only">Web Development Illustration</span>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Overview Section */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle>Websites That Work for Your Business</SectionTitle>
              <SectionSubtitle>
                Your website is often the first impression potential customers have of your business—make it count.
              </SectionSubtitle>
              <p className="mb-6 text-muted-foreground">
                At Nexus Marketing, we design and develop websites that not only look great but also drive business results. Our web development team combines technical expertise with marketing knowledge to create websites that attract visitors, engage users, and convert leads.
              </p>
              <p className="mb-6 text-muted-foreground">
                Whether you need a simple brochure website, a complex e-commerce platform, or a custom web application, we have the skills and experience to bring your vision to life.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="card p-6 bg-primary/5 animate-slide-up">
                <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
                <p className="text-muted-foreground">Websites that look and function perfectly on all devices.</p>
              </div>
              
              <div className="card p-6 bg-primary/5 animate-slide-up" style={{ animationDelay: "100ms" }}>
                <h3 className="text-xl font-semibold mb-3">SEO-Friendly</h3>
                <p className="text-muted-foreground">Built with search engines in mind to improve visibility.</p>
              </div>
              
              <div className="card p-6 bg-primary/5 animate-slide-up" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-semibold mb-3">Fast Loading</h3>
                <p className="text-muted-foreground">Optimized for speed to reduce bounce rates and improve user experience.</p>
              </div>
              
              <div className="card p-6 bg-primary/5 animate-slide-up" style={{ animationDelay: "300ms" }}>
                <h3 className="text-xl font-semibold mb-3">Conversion-Focused</h3>
                <p className="text-muted-foreground">Designed to guide visitors toward taking desired actions.</p>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Services Section */}
        <Section background="muted" id="services">
          <SectionTitle centered>Our Web Development Services</SectionTitle>
          <SectionSubtitle centered>
            We offer a comprehensive range of web development services to meet your specific needs.
          </SectionSubtitle>
          
          <FeaturesGrid features={services.map(service => ({
            ...service,
            icon: <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">{service.icon}</div>
          }))} />
        </Section>
        
        {/* Process Section */}
        <Section>
          <SectionTitle centered>Our Web Development Process</SectionTitle>
          <SectionSubtitle centered>
            We follow a structured approach to ensure your website is delivered on time, on budget, and exceeds expectations.
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
        
        {/* Technologies Section */}
        <Section background="muted">
          <SectionTitle centered>Technologies We Use</SectionTitle>
          <SectionSubtitle centered>
            We leverage modern technologies and frameworks to build robust, scalable websites.
          </SectionSubtitle>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="card p-6 text-center animate-slide-up hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Case Studies Section */}
        <Section>
          <SectionTitle centered>Web Development Success Stories</SectionTitle>
          <SectionSubtitle centered>
            See how our web development services have transformed businesses and driven remarkable results.
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
                Working with Nexus Marketing on our e-commerce website redesign was a game-changer for our business. Their team took the time to understand our unique challenges and created a solution that not only looks beautiful but has significantly improved our conversion rates. The website is fast, user-friendly, and has received overwhelmingly positive feedback from our customers.
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                  <span className="text-lg font-bold">RJ</span>
                </div>
                <div>
                  <div className="font-semibold">Robert Johnson</div>
                  <div className="text-sm text-muted-foreground">E-commerce Director, Fashion Retailer</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss how our web development services can help you create a website that drives business growth.
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
