import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/lib/constants";

export default function AboutPage() {
  // Company values
  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new ideas and approaches to stay ahead of marketing trends and deliver cutting-edge solutions."
    },
    {
      title: "Integrity",
      description: "We build relationships based on trust, transparency, and ethical business practices."
    },
    {
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that contribute to our clients' business success."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, treating their business as our own and forming true partnerships."
    }
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Section background="gradient" className="py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">About Us</h1>
            <p className="text-xl opacity-90 mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              We're a team of passionate marketers dedicated to helping brands thrive in the digital landscape.
            </p>
          </div>
        </Section>
        
        {/* Our Story */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <SectionTitle>Our Story</SectionTitle>
              <p className="text-muted-foreground mb-4">
                Nexus Marketing was founded in 2015 with a simple mission: to help businesses connect with their audiences in meaningful ways. What started as a small team of passionate marketers has grown into a full-service agency with expertise across the marketing spectrum.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we've worked with businesses of all sizes, from startups to established enterprises, helping them navigate the ever-changing marketing landscape and achieve their business goals.
              </p>
              <p className="text-muted-foreground mb-8">
                Today, we continue to evolve and innovate, staying ahead of industry trends to deliver cutting-edge marketing solutions that drive real results for our clients.
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                {/* Placeholder for image - in a real project, use Next.js Image component */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">Our Story Image</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Our Values */}
        <Section background="muted">
          <SectionTitle centered>Our Values</SectionTitle>
          <SectionSubtitle centered>
            These core principles guide everything we do and shape how we work with our clients.
          </SectionSubtitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="card p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Our Team */}
        <Section id="team">
          <SectionTitle centered>Meet Our Team</SectionTitle>
          <SectionSubtitle centered>
            Our diverse team of experts brings together a wealth of experience and creative thinking.
          </SectionSubtitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="card overflow-hidden hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative bg-secondary">
                  {/* Placeholder for image - in a real project, use Next.js Image component */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-muted-foreground">{member.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Why Choose Us */}
        <Section background="muted">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative animate-slide-in-left">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-background/0 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                {/* Placeholder for image - in a real project, use Next.js Image component */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">Why Choose Us Image</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <SectionTitle>Why Choose Us</SectionTitle>
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <span className="text-primary mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Strategic Approach</h3>
                    <p className="text-muted-foreground">We develop tailored strategies based on your specific business goals and target audience.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-primary mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Proven Results</h3>
                    <p className="text-muted-foreground">Our track record speaks for itself, with measurable outcomes for clients across various industries.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-primary mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Dedicated Team</h3>
                    <p className="text-muted-foreground">You'll work with a team of specialists committed to your success and available when you need them.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-primary mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Transparent Communication</h3>
                    <p className="text-muted-foreground">We believe in clear, open communication throughout every project and relationship.</p>
                  </div>
                </li>
              </ul>
              <Button asChild href="/contact" variant="primary" size="lg">
                Work With Us
              </Button>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Marketing Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your business goals through strategic marketing.
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
