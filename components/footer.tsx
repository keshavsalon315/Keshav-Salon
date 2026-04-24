import Link from 'next/link'
import { Instagram, Phone, MessageCircle, Facebook, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-16 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Company Info */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Keshav Unisex Salon & Institute</h3>
            <p className="text-sm leading-relaxed opacity-90 mb-6 flex-grow">
              Premium salon services and professional beauty training courses for aspiring stylists.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <div>
                <p className="text-xs opacity-75 uppercase tracking-wider mb-1">
                  Call & WhatsApp
                </p>
                <a
                  href="tel:+916396222986"
                  className="text-sm hover:text-accent transition-colors font-semibold"
                >
                  +91 6396 222 986
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/916396222986"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="https://www.instagram.com/keshavunisexsalonofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-sm opacity-90 hover:text-accent">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-sm opacity-90 hover:text-accent">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm opacity-90 hover:text-accent">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm opacity-90 hover:text-accent">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Location */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Location</h4>

            <div className="rounded-lg overflow-hidden h-56 bg-gray-400 mb-4 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.017101248227!2d77.95960697523557!3d27.21861287646624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974791b2710ec45%3A0x93d82681385b43fd!2sKeshav%20Saloon%20Unisex%20And%20Institute!5e0!3m2!1sen!2sin!4v1773231868952!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href="https://maps.app.goo.gl/P2JmdjgCA74ho3sM7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <MapPin size={16} />
              View on Maps
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm opacity-70">
            &copy; {currentYear} Keshav Unisex Salon & Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}