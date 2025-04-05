import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";

export default function ContentCreationPage() {
  // Content types
  const contentTypes = [
    {
      title: "Blog Articles & Guides",
      description: "Informative, SEO-optimized content that establishes authority and drives organic traffic.",
      icon: "📝"
    },
    {
      title: "Social Media Content",
      description: "Engaging posts and stories that build community and increase brand awareness.",
      icon: "📱"
    },
    {
      title: "Video Production",
      description: "Compelling video content that captures attention and communicates your message effectively.",
      icon: "🎥"
    },
    {
      title: "Email Campaigns",
      description: "Personalized email content that nurtures leads and drives conversions.",
      icon: "✉️"
    },
    {
      title: "Infographics & Visuals",
      description: "Eye-catching visual content that simplifies complex information and increases engagement.",
      icon: "📊"
    },
    {
      title: "Case Studies & Whitepapers",
      description: "In-depth content that showcases your expertise and generates qualified leads.",
      icon: "📄"
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Content Strategy",
      description: "We develop a comprehensive content strategy aligned with your business goals and target audience."
    },
    {
      number: "02",
      title: "Content Creation",
      description: "Our team of writers, designers, and producers creates high-quality content across various formats."
    },
    {
      number: "03",
      title: "Content Distribution",
      description: "We distribute your content through the most effective channels to reach your target audience."
    },
    {
      number: "04",
      title: "Performance Analysis",
      description: "We track content performance and optimize based on data-driven insights."
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Increased Brand Awareness",
      description: "Quality content helps more people discover and recognize your brand.",
      icon: "🔍"
    },
    {
      title: "Thought Leadership",
      description: "Establish your brand as an authority in your industry through valuable insights.",
      icon: "💡"
    },
    {
      title: "Improved SEO",
      description: "Quality content boosts your search engine rankings and drives organic traffic.",
      icon: "📈"
    },
    {
      title: "Higher Engagement",
      description: "Compelling content increases audience interaction and time spent with your brand.",
      icon: "👥"
    },
    {
      title: "Lead Generation",
      description: "Strategic content attracts and converts qualified prospects into leads.",
      icon: "🎯"
    },
    {
      title: "Customer Loyalty",
      description: "Consistent, valuable content builds stronger relationships with existing customers.",
      icon: "❤️"
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Health & Wellness Blog",
      description: "Content strategy and creation that increased organic traffic by 320% and generated 150+ leads per month.",
      image: "/portfolio/health.jpg",
      tags: ["Blog Content", "SEO", "Lead Generation"],
    },
    {
      title: "Tech Product Launch",
      description: "Integrated content campaign that reached 2M+ people and drove 15,000 pre-orders.",
      image: "/portfolio/tech.jpg",
      tags: ["Video Content", "Social Media", "Email Marketing"],
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
                Content Creation
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-xl">
                Create engaging content that tells your story and connects with your audience on a deeper level.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild href="/contact" size="lg" className="hover-lift">
                  Get Started
                </Button>
                <Button asChild href="#content-types" variant="outline" size="lg" className="hover-lift">
                  Explore Content Types
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                <div className="text-4xl">✏️</div>
                <span className="sr-only">Content Creation Illustration</span>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Overview Section */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-background/0 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-muted flex items-center justify-center">
                <div className="text-4xl">📝</div>
                <span className="sr-only">Content Creation Process</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionTitle>Compelling Content That Converts</SectionTitle>
              <SectionSubtitle>
                Content is the foundation of modern marketing—it's how you attract, engage, and convert your audience.
              </SectionSubtitle>
              <p className="mb-6 text-muted-foreground">
                At Nexus Marketing, we create high-quality, strategic content that tells your brand story, showcases your expertise, and drives meaningful business results. Our content creation services span various formats and channels, ensuring you connect with your audience wherever they are.
              </p>
              <p className="mb-6 text-muted-foreground">
                From blog articles and social media posts to videos and email campaigns, our team of experienced content creators crafts compelling narratives that resonate with your target audience and inspire action.
              </p>
            </div>
          </div>
        </Section>
        
        {/* Content Types Section */}
        <Section background="muted" id="content-types">
          <SectionTitle centered>Content Types We Create</SectionTitle>
          <SectionSubtitle centered>
            We produce a wide range of content formats tailored to your specific goals and audience preferences.
          </SectionSubtitle>
          
          <FeaturesGrid features={contentTypes.map(type => ({
            ...type,
            icon: <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">{type.icon}</div>
          }))} />
        </Section>
        
        {/* Process Section */}
        <Section>
          <SectionTitle centered>Our Content Creation Process</SectionTitle>
          <SectionSubtitle centered>
            We follow a strategic approach to create content that engages your audience and drives results.
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
        
        {/* Benefits Section */}
        <Section background="muted">
          <SectionTitle centered>Benefits of Strategic Content</SectionTitle>
          <SectionSubtitle centered>
            Quality content delivers numerous advantages that help grow your business.
          </SectionSubtitle>
          
          <FeaturesGrid features={benefits.map(benefit => ({
            ...benefit,
            icon: <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">{benefit.icon}</div>
          }))} />
        </Section>
        
        {/* Case Studies Section */}
        <Section>
          <SectionTitle centered>Content Creation Success Stories</SectionTitle>
          <SectionSubtitle centered>
            See how our content strategies have transformed businesses and driven remarkable results.
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
                The content team at Nexus Marketing has been instrumental in establishing our brand as a thought leader in our industry. Their strategic approach to content creation has not only increased our organic traffic but has also significantly improved our lead generation efforts. The quality and consistency of their work is exceptional.
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                  <span className="text-lg font-bold">SP</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Parker</div>
                  <div className="text-sm text-muted-foreground">Content Director, Health & Wellness Blog</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Content That Connects?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss how our content creation services can help you engage your audience and achieve your business goals.
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
