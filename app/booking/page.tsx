import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BookingForm } from '@/components/booking-form'

export const metadata: Metadata = {
  title: 'Book Appointment - Keshav Unisex Salon & Institute',
  description: 'Schedule your salon appointment or contact Keshav for more information about our services.',
  keywords: 'booking, appointment, contact, salon, keshav',
}

export default function BookingPage() {

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-b from-background to-white pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Book Your Appointment
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Schedule your salon visit or academy inquiry. We look forward to serving you!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Have questions? We're here to help and would love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+916396222986"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 6396 222 986
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:info@keshavSalon.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      info@keshavSalon.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Keshav Unisex Salon & Institute<br />
                      Plot No. 12 Mayur Colony , Near Kaveri kaustubh , Bhawna Estate , Sikandra , Agra<br />
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Wednesday: 10 AM - 8 PM<br />
                      Friday - Sunday: 10 AM - 8 PM<br />
                      Thursday: CLOSED
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/keshavunisexsalonofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:opacity-70 transition-opacity"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:opacity-70 transition-opacity"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
