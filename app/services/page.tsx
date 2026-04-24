import { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServicesToggle } from "@/components/services-toggle"
import { CTAButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Services - Keshav Unisex Salon & Institute',
  description: 'Discover our comprehensive range of premium salon services for men and women including hair styling, coloring, treatments, and specialized beauty services.',
  keywords: 'salon services, hair styling, coloring, beauty treatments, keshav',
}

export default function ServicesPage() {

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-b from-background to-white pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Keshav Premium Services
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Comprehensive beauty solutions designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>
      </section>

      {/* Services Toggle Section */}
      <ServicesToggle />

      {/* Why Our Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Keshav Services?
              </h2>
              <ul className="space-y-4">
                {[
                  'Certified stylists with 10+ years of experience',
                  'Premium, internationally-sourced products',
                  'Customized consultations for each client',
                  'State-of-the-art salon facilities',
                  'Latest techniques and industry trends',
                  'Satisfaction guarantee on all services',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton href="/booking" text="Book a Service" />
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/services-hero.jpg"
                alt="Professional stylist providing hair services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our consultants will help you choose the perfect service for your needs and goals.
          </p>
          <CTAButton href="/booking" text="Schedule a Free Consultation" />
        </div>
      </section>

      <Footer />
    </main>
  )
}
