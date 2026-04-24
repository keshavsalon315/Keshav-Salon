import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  price?: string
  duration?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  duration,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-accent/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="flex items-center justify-between mb-4">
        {price && (
          <span className="text-lg font-bold text-primary">{price}</span>
        )}
        {duration && (
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {duration}
          </span>
        )}
      </div>

      <Link
        href="/booking"
        className="block text-center bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Book Now
      </Link>
    </div>
  )
}
