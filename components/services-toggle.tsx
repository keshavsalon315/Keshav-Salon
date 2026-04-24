'use client'

import { useState } from 'react'
import { Scissors, Sparkles, Droplet, Users, Zap, Heart } from 'lucide-react'
import { ServiceCard } from '@/components/service-card'

const menServices = [
  {
    icon: Scissors,
    title: 'Hair Cutting',
    description: 'Expert cuts tailored to your style. Modern fades, trims, and classic cuts.',
  },
  {
    icon: Droplet,
    title: 'Beard Grooming',
    description: 'Professional beard shaping, trimming, and specialized beard care.',
  },
  {
    icon: Users,
    title: 'Hair Care',
    description: 'Deep conditioning and hair spa treatments for scalp health.',
  },
  {
    icon: Droplet,
    title: 'Facial Cleanup',
    description: 'Professional facial treatments and cleanup for refreshed appearance.',
  },
]

const womenServices = [
  {
    icon: Scissors,
    title: 'Hair Cutting & Styling',
    description: 'Expert cuts and styles tailored to your face shape. Bobs, layers, and modern designs.',
  },
  {
    icon: Sparkles,
    title: 'Hair Coloring',
    description: 'Highlights, balayage, ombre, and full color transformations.',
  },
  {
    icon: Heart,
    title: 'Hair Treatments',
    description: 'Deep conditioning, keratin treatments, and specialized care for all hair types.',
  },
  {
    icon: Zap,
    title: 'Bridal & Events',
    description: 'Customized hair styling for weddings, events, and special celebrations.',
  },
  {
    icon: Sparkles,
    title: 'Threading & Waxing',
    description: 'Face threading, eyebrow shaping, and professional waxing services.',
  },
  {
    icon: Sparkles,
    title: 'Facial Services',
    description: 'Professional facials, cleanups, and skincare treatments.',
  },
]

export function ServicesToggle() {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('men')

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('men')}
            className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'men'
                ? 'bg-accent text-white'
                : 'bg-background text-foreground border-2 border-accent hover:bg-accent/10'
            }`}
          >
            <Scissors className="inline mr-2" size={20} />
            Men's Services
          </button>
          <button
            onClick={() => setActiveTab('women')}
            className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'women'
                ? 'bg-accent text-white'
                : 'bg-background text-foreground border-2 border-accent hover:bg-accent/10'
            }`}
          >
            <Sparkles className="inline mr-2" size={20} />
            Women's Services
          </button>
        </div>

        {/* Services Grid - Men's */}
        {activeTab === 'men' && (
          <div className="animate-fadeIn">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
                Men's Grooming & Styling
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">Professional services designed for every man</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {menServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        )}

        {/* Services Grid - Women's */}
        {activeTab === 'women' && (
          <div className="animate-fadeIn">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
                Women's Beauty & Styling
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">Premium beauty solutions for every occasion</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {womenServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
