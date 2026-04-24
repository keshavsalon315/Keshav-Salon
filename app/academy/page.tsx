import { Metadata } from 'next'
import Image from 'next/image'
import { BookOpen, Users, Award, Briefcase } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTAButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Academy - Keshav Unisex Salon & Institute',
  description:
    'Professional beauty training and certification courses at Keshav Academy. Learn from industry experts and launch your career.',
  keywords:
    'beauty academy, hair styling courses, professional training, beauty certification',
}

export default function AcademyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-b from-background to-white pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Keshav Academy
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Professional beauty training courses designed to launch your career
            in the beauty industry.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/academy-hero.jpg"
                alt="Beauty academy training class"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Start Your Beauty Career
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Keshav Unisex Salon & Institute, we provide expert training
                with experienced mentors. Learn professional beauty techniques,
                business skills, and gain opportunities for freelancing while
                building your career in the beauty industry.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Expert instruction from certified professionals',
                  'Hands-on training with real clients',
                  'Professional certification upon completion',
                  'Freelancing opportunities while learning',
                  'Career placement assistance',
                  'Flexible scheduling options',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">★</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* ✅ FIXED CTA (NO nested <a>) */}
              <CTAButton
                href="https://wa.me/916396222986?text=I%20would%20like%20to%20know%20more%20about%20your%20academy%20courses"
                text="Contact Academy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Academy */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Train at Keshav Academy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Comprehensive Curriculum',
                description:
                  'Complete training covering all aspects of modern beauty and styling',
              },
              {
                icon: Users,
                title: 'Small Class Sizes',
                description:
                  'Personalized attention with experienced instructors in intimate groups',
              },
              {
                icon: Award,
                title: 'Industry Certification',
                description:
                  'Recognized credentials that open doors to professional opportunities',
              },
              {
                icon: Briefcase,
                title: 'Career Support',
                description:
                  'Placement assistance and networking opportunities with industry partners',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Career?
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to learn more about our courses and enrollment
            options.
          </p>

          <CTAButton href="/booking" text="Contact Academy" />
        </div>
      </section>

      <Footer />
    </main>
  )
}