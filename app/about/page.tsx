import { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTAButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'About Us - Keshav Unisex Salon & Institute',
  description: 'Learn about Keshav Unisex Salon & Institute, our mission, values, and commitment to excellence in beauty and styling.',
  keywords: 'about salon, salon history, team, mission, values',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-b from-background to-white pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            About Keshav
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Elevating beauty standards since 2015 through expertise, innovation, and genuine care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Keshav Unisex Salon & Institute was founded with a vision to redefine beauty services in our community. What started as a small salon has grown into a premier destination for professional beauty treatments and education.
                </p>
                <p>
                  Over the years, we've built a reputation for excellence, innovation, and a genuine commitment to our clients. Our team of certified professionals brings years of industry experience and a passion for the craft.
                </p>
                <p>
                  Today, we're proud to offer not only world-class salon services but also comprehensive training programs through our institute, helping aspiring beauty professionals launch their careers.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chacha-BAqNVVJtVQDc5bx19duKEeszjYp609.jpeg"
                alt="Keshav - Founder and Director"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide exceptional beauty services and professional education that empower our clients and students to look and feel their best.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Excellence in every service</li>
                <li>✓ Continuous learning and growth</li>
                <li>✓ Client-centered approach</li>
                <li>✓ Integrity and transparency</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Promise</h3>
              <p className="text-muted-foreground">
                We commit to using only premium products, staying current with industry trends, and treating every client with the respect and care they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Clients Choose Keshav
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Our stylists are certified professionals with 10+ years of experience in the beauty industry.',
              },
              {
                title: 'Premium Products',
                description: 'We exclusively use high-quality, internationally-sourced beauty and hair care products.',
              },
              {
                title: 'Personalized Service',
                description: 'Every consultation is thorough and personalized to meet your unique needs and goals.',
              },
              {
                title: 'Modern Facilities',
                description: 'Our state-of-the-art salon provides a luxurious, welcoming environment for your comfort.',
              },
              {
                title: 'Continuous Innovation',
                description: 'We stay ahead of trends and regularly invest in training for the latest techniques.',
              },
              {
                title: 'Community Focus',
                description: 'We\'re committed to giving back and building lasting relationships with our community.',
              },
            ].map((item, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the Luxe Difference
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Join thousands of satisfied clients who trust Luxe for their beauty and professional needs.
          </p>
          <CTAButton
            href="/booking"
            text="Book Now"
            variant="secondary"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
