import Link from 'next/link'

interface OfferCardProps {
  title: string
  description: string
  discount: string
  originalPrice: string
  offerPrice: string
  validUntil?: string
}

export function OfferCard({
  title,
  description,
  discount,
  originalPrice,
  offerPrice,
  validUntil,
}: OfferCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg border border-accent/20 p-6 overflow-hidden">
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
        {discount}
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      {/* Pricing */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm line-through text-muted-foreground">
          {originalPrice}
        </span>
        <span className="text-2xl font-bold text-primary">{offerPrice}</span>
      </div>

      {validUntil && (
        <p className="text-xs text-muted-foreground mb-4">Valid until {validUntil}</p>
      )}

      <Link
        href="/booking"
        className="block text-center bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Claim Offer
      </Link>
    </div>
  )
}
