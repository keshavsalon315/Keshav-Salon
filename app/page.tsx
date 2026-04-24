import { Metadata } from 'next'
import Image from 'next/image'
import { Scissors, Sparkles, Users, Award } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Testimonial } from '@/components/testimonial'
import { CTAButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Keshav Unisex Salon & Institute - Premium Hair & Beauty Services',
  description:
    'Experience luxury salon services and professional beauty training at Keshav Unisex Salon & Institute.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden pt-20 sm:pt-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4518-OsA2gVeq8osTOIBo56uodahJMtbCZ3.jpg"
          alt="Salon Interior"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Luxury Beauty Redefined
            </h1>

            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Experience world-class salon services and professional beauty training.
            </p>

            <div className="flex gap-4 justify-center">
              <CTAButton href="/booking" text="Book Appointment" />
              <CTAButton href="/academy" text="Explore Academy" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-muted-foreground mb-12">
            Professional beauty treatments designed for you.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Scissors}
              title="Hair Styling"
              description="Expert styling tailored to your personality."
              price="From ₹800"
              duration="1-2 hours"
            />
            <ServiceCard
              icon={Sparkles}
              title="Hair Coloring"
              description="Premium color treatments with lasting shine."
              price="From ₹1200"
              duration="2-3 hours"
            />
            <ServiceCard
              icon={Users}
              title="Hair Treatments"
              description="Restore and nourish your hair professionally."
              price="From ₹999"
              duration="45 min"
            />
          </div>

          <div className="mt-10">
            <CTAButton href="/services" text="View Services" variant="secondary" />
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center px-4">
          {[
            { icon: Award, title: 'Expert Stylists', desc: 'Experienced professionals' },
            { icon: Sparkles, title: 'Premium Products', desc: 'Top quality products' },
            { icon: Users, title: 'Personalized Care', desc: 'Custom services' },
            { icon: Scissors, title: 'Latest Trends', desc: 'Modern techniques' },
          ].map((item, i) => (
            <div key={i}>
              <div className="bg-accent/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <item.icon className="text-accent" />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ UPDATED TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground mb-12">
            Real experiences from our happy clients.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              name="Priya Sharma"
              role="Regular Client"
              content="I got my hair smoothening done here and the results were amazing. Staff is very polite and professional."
              rating={5}
            />
            <Testimonial
              name="Ananya Verma"
              role="Academy Student"
              content="I completed my makeup course here. Training was practical and helped me start my career."
              rating={5}
            />
            <Testimonial
              name="Neha Kapoor"
              role="Regular Client"
              content="My go-to salon for all services. They always suggest what suits me best."
              rating={5}
            />
            <Testimonial
              name="Ritika Singh"
              role="Bridal Client"
              content="My bridal look was perfect. Thank you for making my special day even better!"
              rating={5}
            />
            <Testimonial
              name="Pooja Mehta"
              role="Regular Client"
              content="Clean salon, good service, and friendly staff. Totally worth it."
              rating={4}
            />
            <Testimonial
              name="Sneha Gupta"
              role="Academy Graduate"
              content="Learned real salon skills here. Now working as freelance makeup artist."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
<section className="py-24 bg-accent text-white text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Ready to Transform Your Look?
  </h2>

  <p className="mb-10 text-lg opacity-90">
    Book your appointment today.
  </p>

  {/* 🔥 FIXED BUTTON */}
  <CTAButton
    href="/booking"
    text="Book Now"
    variant="secondary"
  />
</section>
      <Footer />
    </main>
  )
}