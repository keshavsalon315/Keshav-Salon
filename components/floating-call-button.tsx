'use client'

import { Phone } from 'lucide-react'

export function FloatingCallButton() {
  return (
    <a
      href="tel:+916396222986"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-accent hover:bg-accent/90 text-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Call us"
      title="Call +91 6396222986"
    >
      <Phone size={20} className="md:size-6 group-hover:animate-pulse" />
    </a>
  )
}
