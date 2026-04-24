import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingCallButton } from '@/components/floating-call-button'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2D2D2D',
}

export const metadata: Metadata = {
  title: 'Keshav Unisex Salon & Institute - Premium Hair & Beauty Services',
  description: 'Experience luxury salon services and professional beauty training at Keshav Unisex Salon & Institute. Expert stylists, premium treatments, and courses for aspiring professionals.',
  generator: 'v0.app',
  keywords: 'salon, hair styling, beauty services, academy, training, professional, keshav',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Keshav Unisex Salon & Institute',
    description: 'Premium salon services and professional beauty training',
    type: 'website',
    siteName: 'Keshav Unisex Salon & Institute',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <FloatingCallButton />
        <Analytics />
      </body>
    </html>
  )
}
