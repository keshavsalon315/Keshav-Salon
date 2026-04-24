import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface CTAButtonProps {
  href: string
  icon?: LucideIcon
  text: string
  variant?: 'primary' | 'secondary'
}

export function CTAButton({
  href,
  icon: Icon,
  text,
  variant = 'primary',
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300'

  const variants = {
    primary:
      'bg-accent text-white shadow-md hover:shadow-xl hover:shadow-accent/50 hover:scale-105 active:scale-95',

    // 🔥 PREMIUM WHITE BUTTON WITH GLOW
    secondary:
      'bg-white text-accent shadow-lg hover:shadow-2xl hover:shadow-white/60 hover:scale-110 active:scale-95',
  }

  const isExternal = href.startsWith('http')

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]}`}
      >
        {Icon && <Icon size={20} />}
        {text}
      </a>
    )
  }

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {Icon && <Icon size={20} />}
      {text}
    </Link>
  )
}