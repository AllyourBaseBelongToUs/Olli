import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { FormInput, FormTextarea, FormSelect } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  // Service options for the form
  const serviceOptions = [
    { value: "brand-strategy", label: "Brand Strategy" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "content-creation", label: "Content Creation" },
    { value: "web-development", label: "Web Development" },
    { value: "social-media", label: "Social Media" },
    { value: "analytics", label: "Analytics & Insights" },
    { value: "other", label: "Other" },
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Section background="gradient" className="py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">Contact Us</h1>
            <p className="text-xl opacity-90 mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Ready to elevate your marketing strategy? Get in touch with our team today.
            </p>
          </div>
        </Section>
        
        {/* Contact Form Section */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <SectionTitle>Get In Touch</SectionTitle>
              <p className="text-muted-foreground mb-8">
                Have a question or ready to start a project? Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-5 w-5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-5 w-5">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@nexusmarketing.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-5 w-5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">123 Marketing Street</p>
                    <p className="text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="card p-6 md:p-8 animate-slide-in-right">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    id="first-name"
                    label="First Name"
                    placeholder="John"
                    required
                  />
                  <FormInput
                    id="last-name"
                    label="Last Name"
                    placeholder="Doe"
                    required
                  />
                </div>
                
                <FormInput
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
                
                <FormInput
                  id="company"
                  label="Company"
                  placeholder="Your Company"
                />
                
                <FormSelect
                  id="service"
                  label="Service Interested In"
                  options={serviceOptions}
                  required
                />
                
                <FormTextarea
                  id="message"
                  label="Message"
                  placeholder="Tell us about your project or inquiry..."
                  required
                />
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I agree to the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                  </label>
                </div>
                
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Section>
        
        {/* Map Section */}
        <Section background="muted">
          <SectionTitle centered>Visit Our Office</SectionTitle>
          <div className="mt-8 aspect-[16/9] w-full rounded-xl overflow-hidden">
            {/* Placeholder for map - in a real project, use an actual map component */}
            <div className="w-full h-full bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground">Map Location</span>
            </div>
          </div>
        </Section>
        
        {/* FAQ Section */}
        <Section>
          <SectionTitle centered>Frequently Asked Questions</SectionTitle>
          <SectionSubtitle centered>
            Have questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
          </SectionSubtitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">How soon can you start on my project?</h3>
              <p className="text-muted-foreground">
                We typically begin new projects within 1-2 weeks of finalizing the agreement. For urgent needs, we may be able to accommodate faster timelines.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">What is your pricing structure?</h3>
              <p className="text-muted-foreground">
                Our pricing varies based on project scope, complexity, and timeline. We offer both project-based and retainer options to suit different needs.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Do you work with small businesses?</h3>
              <p className="text-muted-foreground">
                Absolutely! We work with businesses of all sizes, from startups to established enterprises, and can tailor our services to fit your budget.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">How do you measure results?</h3>
              <p className="text-muted-foreground">
                We establish clear KPIs at the beginning of each project and provide regular reports tracking progress against these metrics.
              </p>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
