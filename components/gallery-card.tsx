import Image from 'next/image'

interface GalleryCardProps {
  src: string
  alt: string
  title: string
  category: string
}

export function GalleryCard({ src, alt, title, category }: GalleryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative h-64 bg-muted">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full">
          <p className="text-xs text-white/80 uppercase tracking-wide">{category}</p>
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  )
}
