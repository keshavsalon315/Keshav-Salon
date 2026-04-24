import { Star } from 'lucide-react'

interface TestimonialProps {
  name: string
  role: string
  content: string
  rating: number
}

export function Testimonial({ name, role, content, rating }: TestimonialProps) {
  return (
    <div className="bg-white rounded-lg border border-border p-6">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating
                ? 'fill-accent text-accent'
                : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground mb-4 italic leading-relaxed">
        "{content}"
      </p>

      {/* Author */}
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}
