'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

interface OfferCardProps {
  title: string
  description: string
  discount: string
  validUntil?: string
}

interface DetailedOfferCardProps {
  title: string
  description: string
  originalPrice?: string
  offerPrice: string
  items?: string[]
  validUntil?: string
  whatsappOffer?: boolean
}

function OfferCard({ 
  title, 
  description, 
  originalPrice,
  offerPrice, 
  items,
  validUntil,
  whatsappOffer = false
}: DetailedOfferCardProps) {
  const whatsappMessage = `I would like to take this offer: ${title}`;
  const whatsappLink = `https://wa.me/916396222986?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      {/* Pricing */}
      <div className="mb-4">
        {originalPrice && (
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-accent">{offerPrice}</span>
            <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
          </div>
        )}
        {!originalPrice && (
          <span className="text-2xl font-bold text-accent">{offerPrice}</span>
        )}
      </div>

      {/* Items */}
      {items && items.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-foreground mb-2">Includes:</p>
          <ul className="space-y-1">
            {items.map((item, idx) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="text-accent">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {validUntil && (
        <p className="text-xs text-muted-foreground mb-4">Valid: {validUntil}</p>
      )}

      {/* Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full mt-4 bg-accent hover:bg-accent/90 text-white text-center px-4 py-2 rounded font-medium transition-colors"
      >
        Book via WhatsApp
      </a>
    </div>
  )
}

export default function Offers() {
  const seasonalDeals = [
    {
      title: 'Hair Spa',
      description: 'Premium hair spa treatment for deep nourishment',
      originalPrice: '₹1,500',
      offerPrice: '₹999',
      items: ['Deep conditioning', 'Hair massage', 'Nourishment treatment'],
      validUntil: 'Ongoing',
    },
    {
      title: 'Combo - Cleanup Lotus',
      description: 'Complete grooming package with cleanup and detan',
      originalPrice: '₹2,050',
      offerPrice: '₹999',
      items: ['Cleanup', 'Lotus cleanup', 'Detan (₹500)', 'Haircut & Beard'],
      validUntil: 'Ongoing',
    },
    {
      title: 'Premium Grooming Package',
      description: 'Full body grooming with all treatments included',
      originalPrice: '₹3,000',
      offerPrice: '₹1,499',
      items: ['Cleanup', 'Detan', 'Haircut', 'Eyebrow wax', 'Upper lips wax', 'Forehead wax', 'Hand wax'],
      validUntil: 'Ongoing',
    },
    {
      title: 'Party Makeup',
      description: 'Professional party makeup for any occasion',
      originalPrice: '₹3,500',
      offerPrice: '₹2,500',
      items: ['HD Makeup', 'Hair styling', 'Finishing touches'],
      validUntil: 'Ongoing',
    },
  ]

  const membershipPackages = [
    {
      title: 'Bridal Makeup',
      description: 'Complete bridal makeup with trial and touch-ups',
      offerPrice: '₹11,000',
      items: ['Full bridal makeup', 'Trial session', 'Makeup touch-ups', 'Hair styling'],
      validUntil: 'Ongoing',
    },
    {
      title: 'Engagement Package',
      description: 'Special package for engagement ceremony',
      offerPrice: '₹5,100',
      items: ['HD Makeup', 'Bridal makeup', 'Hair styling', 'Finishing touches'],
      validUntil: 'Ongoing',
    },
    {
      title: '3 Months Membership',
      description: 'Unlimited services + 10% extra discount',
      offerPrice: '₹8,000',
      items: ['Unlimited services', '10% extra discount', 'Priority booking'],
      validUntil: 'Ongoing',
    },
    {
      title: 'Premium Annual',
      description: 'Unlimited services + all add-ons included',
      offerPrice: '₹28,000',
      items: ['Unlimited services', 'Free treatments', 'VIP priority booking'],
      validUntil: 'Ongoing',
    },
  ]

  const bundleOffers = [
    {
      title: 'Bridal Makeup',
      description: 'Complete bridal makeup with all services',
      offerPrice: '₹11,000',
      items: ['Full bridal makeup', 'Trial session', 'Hair styling', 'Touch-ups included'],
      validUntil: 'Ongoing',
    },
    {
      title: 'Party Makeup',
      description: 'Professional makeup for parties and events',
      offerPrice: '₹2,500',
      items: ['HD Party Makeup', 'Hair styling', 'Professional finish'],
      validUntil: 'Ongoing',
    },
    {
      title: 'Engagement Makeup',
      description: 'Special engagement ceremony makeup package',
      offerPrice: '₹5,100',
      items: ['HD Makeup', 'Hair styling', 'Bridal touch', 'Professional finish'],
      validUntil: 'Ongoing',
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-accent text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Special Offers & Deals
            </h1>
            <p className="text-lg opacity-90">
              Exclusive discounts and packages for our valued clients
            </p>
          </div>
        </section>

        {/* Seasonal Deals */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Seasonal Deals
              </h2>
              <p className="text-muted-foreground">
                Limited time offers on our premium services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasonalDeals.map((deal, index) => (
                <OfferCard
                  key={index}
                  title={deal.title}
                  description={deal.description}
                  originalPrice={deal.originalPrice}
                  offerPrice={deal.offerPrice}
                  items={deal.items}
                  validUntil={deal.validUntil}
                  whatsappOffer={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Membership Packages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Membership Packages
              </h2>
              <p className="text-muted-foreground">
                Unlimited access with exclusive benefits
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {membershipPackages.map((pkg, index) => (
                <OfferCard
                  key={index}
                  title={pkg.title}
                  description={pkg.description}
                  offerPrice={pkg.offerPrice}
                  items={pkg.items}
                  validUntil={pkg.validUntil}
                  whatsappOffer={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Offers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Bundle Packages
              </h2>
              <p className="text-muted-foreground">
                Save more with our specially curated packages
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bundleOffers.map((offer, index) => (
                <OfferCard
                  key={index}
                  title={offer.title}
                  description={offer.description}
                  offerPrice={offer.offerPrice}
                  items={offer.items}
                  validUntil={offer.validUntil}
                  whatsappOffer={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How to Claim */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              How to Claim Your Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-accent">
                  1
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Book Appointment</h3>
                <p className="text-sm text-muted-foreground">
                  Click the Book Now button and select your desired service
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-accent">
                  2
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Mention Offer Code</h3>
                <p className="text-sm text-muted-foreground">
                  Tell our staff about the offer during booking or visit
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-accent">
                  3
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Enjoy Savings</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant discount on your service
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Don't Miss Out!
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book your appointment now and enjoy amazing discounts
            </p>
            <Link
              href="/booking"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Book Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
