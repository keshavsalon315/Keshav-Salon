import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingCallButton } from '@/components/floating-call-button'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2D2D2D',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://keshavunisexsalonandinstitute.com'),

  /* 🔥 ADDED CANONICAL URL */
  alternates: {
    canonical: '/',
  },

  title: {
    default: 'Best Salon in Agra | Keshav Unisex Salon & Institute',
    template: '%s | Keshav Salon Agra',
  },

  description:
    'Looking for the best salon in Agra? Keshav Unisex Salon offers premium haircuts, bridal makeup, beauty services, and professional training. Book your appointment today.',

  keywords: [
    'best salon in agra',
    'salon near me agra',
    'hair salon agra',
    'bridal makeup agra',
    'beauty salon agra',
    'keshav salon agra',
    'unisex salon agra',
    'hair spa agra',
    'beauty parlour agra',
    'salon in sikandra agra',
  ],

  manifest: '/site.webmanifest',

  icons: {
    icon: [
      { url: '/favicon.ico' },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],

    apple: '/apple-touch-icon.png',

    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
      },
    ],
  },

  openGraph: {
    title: 'Best Salon in Agra | Keshav Unisex Salon',

    description:
      'Luxury salon services in Agra with expert stylists and beauty training.',

    url: 'https://keshavunisexsalonandinstitute.com',

    siteName: 'Keshav Salon Agra',

    images: [
      {
        url: '/keshav-logo.png',
        width: 800,
        height: 600,
        alt: 'Keshav Salon Agra',
      },
    ],

    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Best Salon in Agra | Keshav Unisex Salon',

    description:
      'Premium salon services, bridal makeup, hair styling, and beauty training in Agra.',

    images: ['/keshav-logo.png'],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}

        {/* 🔥 LOCAL SEO STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',

              '@type': 'BeautySalon',

              name: 'Keshav Unisex Salon & Institute',

              image:
                'https://keshavunisexsalonandinstitute.com/keshav-logo.png',

              '@id': 'https://keshavunisexsalonandinstitute.com',

              url: 'https://keshavunisexsalonandinstitute.com',

              telephone: '+916396222986',

              address: {
                '@type': 'PostalAddress',

                streetAddress:
                  'Shop No. 12, Mayur Colony, Bhawna Estate Road, Opposite Kaveri Kastub',

                addressLocality: 'Sikandra, Agra',

                addressRegion: 'UP',

                postalCode: '282007',

                addressCountry: 'IN',
              },

              geo: {
                '@type': 'GeoCoordinates',

                latitude: 27.2186129,

                longitude: 77.9621819,
              },

              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',

                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ],

                  opens: '10:00',

                  closes: '20:00',
                },

                {
                  '@type': 'OpeningHoursSpecification',

                  dayOfWeek: 'Thursday',

                  opens: '00:00',

                  closes: '00:00',
                },
              ],

              sameAs: [
                'https://www.instagram.com/keshavunisexsalonofficial/',
              ],

              priceRange: '₹₹',

              areaServed: 'Agra',

              servesCuisine: 'Beauty & Hair Services',
            }),
          }}
        />

        <FloatingCallButton />
        <Analytics />
      </body>
    </html>
  )
}