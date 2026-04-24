import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GalleryCard } from '@/components/gallery-card'
import { CTAButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Gallery - Keshav Unisex Salon & Institute',
  description: 'View our portfolio of beautiful salon work and transformations. See the artistry of our professional stylists.',
  keywords: 'salon gallery, hair transformations, styling portfolio, before after',
}

export default function GalleryPage() {
  const galleryItems = [
    {
      src: '/gallery-1.jpg',
      alt: 'Professional wavy hairstyle with elegant styling',
      title: 'Classic Waves',
      category: 'Styling',
    },
    {
      src: '/gallery-2.jpg',
      alt: 'Luxury blonde hair with professional coloring',
      title: 'Blonde Highlights',
      category: 'Coloring',
    },
    {
      src: '/gallery-3.jpg',
      alt: 'Modern short haircut with contemporary style',
      title: 'Modern Bob',
      category: 'Cutting',
    },
    {
      src: '/gallery-4.jpg',
      alt: 'Elegant bridal hair styling and updo',
      title: 'Bridal Updo',
      category: 'Special Events',
    },
    {
      src: '/gallery-5.jpg',
      alt: 'Balayage hair color technique with highlights',
      title: 'Balayage',
      category: 'Coloring',
    },
    {
      src: '/gallery-6.jpg',
      alt: 'Long flowing healthy hair with professional treatment',
      title: 'Hair Care',
      category: 'Treatment',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-b from-background to-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautiful transformations and professional salon work.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <GalleryCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your appointment today and let our expert stylists create your perfect look.
          </p>
          <CTAButton href="/booking" text="Schedule Appointment" />
        </div>
      </section>

      <Footer />
    </main>
  )
}
