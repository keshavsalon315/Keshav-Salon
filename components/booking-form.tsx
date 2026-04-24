'use client'

import { useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

// Replace this with your deployed Apps Script Web App URL
const SHEET_URL =
  'https://script.google.com/macros/s/AKfycbwe-u2ysBrbrqYNCjdYtbITnQtE0ny0WXpLWLMRJuhk2F-IdAIpKjYqaMjAOuEauVNx/exec'

const BUSINESS_START_HOUR = 10
const BUSINESS_END_HOUR = 19 // 7 PM for time input max

const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${day}`
}

const formatTime = (date: Date) => {
  const hours = `${date.getHours()}`.padStart(2, '0')
  const minutes = `${date.getMinutes()}`.padStart(2, '0')
  return `${hours}:${minutes}`
}

const getNextValidBookingDate = (baseDate = new Date()) => {
  const date = new Date(baseDate)

  while (date.getDay() === 4) {
    date.setDate(date.getDate() + 1)
  }

  return date
}

const getDefaultBookingDateTime = () => {
  const now = new Date()
  const bookingDate = new Date(now)

  if (bookingDate.getDay() === 4) {
    bookingDate.setDate(bookingDate.getDate() + 1)
    bookingDate.setHours(BUSINESS_START_HOUR, 0, 0, 0)
    return {
      date: formatDate(getNextValidBookingDate(bookingDate)),
      time: '10:00',
    }
  }

  if (bookingDate.getHours() < BUSINESS_START_HOUR) {
    bookingDate.setHours(BUSINESS_START_HOUR, 0, 0, 0)
  } else if (
    bookingDate.getHours() > BUSINESS_END_HOUR ||
    (bookingDate.getHours() === BUSINESS_END_HOUR && bookingDate.getMinutes() > 0)
  ) {
    bookingDate.setDate(bookingDate.getDate() + 1)
    bookingDate.setHours(BUSINESS_START_HOUR, 0, 0, 0)

    while (bookingDate.getDay() === 4) {
      bookingDate.setDate(bookingDate.getDate() + 1)
    }
  }

  return {
    date: formatDate(getNextValidBookingDate(bookingDate)),
    time: formatTime(bookingDate),
  }
}

const createInitialFormData = () => {
  const { date, time } = getDefaultBookingDateTime()

  return {
    name: '',
    email: '',
    phone: '',
    gender: '',
    service: '',
    otherService: '',
    date,
    time,
    message: '',
  }
}

export function BookingForm() {
  const [formData, setFormData] = useState(createInitialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const resetForm = () => {
    setFormData(createInitialFormData())
    setSubmitted(false)
    setError('')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    if (name === 'date') {
      const selectedDate = new Date(value)

      if (selectedDate.getDay() === 4) {
        alert('Sorry, we are closed on Thursdays. Please select another day.')
        return
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          service:
            formData.service === 'Other'
              ? `Other: ${formData.otherService}`
              : formData.service,
          date: formData.date,
          time: formData.time,
          message: formData.message,
          submittedAt: new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
          }),
        }),
      })

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getMinDate = () => {
    const today = new Date()
    return formatDate(today)
  }

  return (
    <div className="lg:col-span-2">
      <div className="bg-background rounded-lg p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Quick Booking</h3>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {submitted ? (
          <div className="rounded-2xl border border-accent/20 bg-accent/10 px-6 py-10 text-center">
            <h4 className="text-2xl font-bold text-foreground mb-3">
              Thank you for booking
            </h4>
            <p className="text-muted-foreground mb-6">
              You&apos;ll get a confirmation call shortly from our team.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              Fill Another Booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                 
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                suppressHydrationWarning
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-foreground mb-2">
                Gender *
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                suppressHydrationWarning
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                suppressHydrationWarning
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select a service</option>
                <option value="Hair Cutting">Hair Cutting</option>
                <option value="Color Treatment">Color Treatment</option>
                <option value="Hair Care">Hair Care Treatments</option>
                <option value="Scalp Treatment">Scalp Treatment</option>
                <option value="Blow Dry">Blow Dry & Set</option>
                <option value="Bridal">Bridal & Event Styling</option>
                <option value="Beard Grooming">Beard & Grooming (Men)</option>
                <option value="Facial">Facial & Cleanup</option>
                <option value="Academy Inquiry">Academy Inquiry</option>
                <option value="Other">Other (Please specify below)</option>
              </select>
            </div>

            {formData.service === 'Other' && (
              <div>
                <label
                  htmlFor="otherService"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Please describe your service need *
                </label>
                <textarea
                  id="otherService"
                  name="otherService"
                  value={formData.otherService}
                  onChange={handleChange}
                  rows={3}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about the service you're looking for..."
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Date * (Closed on Thursdays)
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  min={getMinDate()}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Time * (10 AM - 8 PM)
                </label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  min="10:00"
                  max="19:00"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                suppressHydrationWarning
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Tell us more about your needs..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Book Appointment'}
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          * Required fields. We&apos;ll contact you within 24 hours to confirm your appointment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-lg border border-border p-8 text-center hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-6">
            <div className="bg-accent/10 p-6 rounded-full">
              <Phone className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">Instant Call Support</h3>
          <p className="text-muted-foreground mb-6">
            Call us directly for immediate assistance
          </p>
          <a
            href="tel:+916396222986"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Call Now
          </a>
        </div>

        <div className="bg-white rounded-lg border border-border p-8 text-center hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-6">
            <div className="bg-accent/10 p-6 rounded-full">
              <MessageCircle className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">Chat on WhatsApp</h3>
          <p className="text-muted-foreground mb-6">
            Have a quick question? Chat with us on WhatsApp
          </p>
          <a
            href="https://wa.me/916396222986"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
