'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Offers', href: '/offers' },
    { label: 'Academy', href: '/academy' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
  ]

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3">
      <div className="relative w-full max-w-7xl">
        <div className="flex items-center justify-between rounded-full border border-white/60 bg-white/88 px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.12)] backdrop-blur-md md:px-6">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-keshav.png"
              alt="Keshav Salon"
              width={180}
              height={70}
              className="h-14 w-auto object-contain md:h-16"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-2.5 text-[15px] font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-accent text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100/80'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <Link
            href="/booking"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Book Now
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-full p-2 text-slate-800 transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 rounded-3xl border border-white/60 bg-white/95 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.14)] backdrop-blur-md md:hidden">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    pathname === item.href
                      ? 'bg-accent text-white'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/booking"
                className="mt-3 block rounded-2xl bg-accent py-3 text-center font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
