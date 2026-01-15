import './GlassCard.css'

interface GlassCardProps {
  title: string
  description?: string
  imageSrc: string
  imageAlt?: string
}

export default function GlassCard({ title, description, imageSrc, imageAlt }: GlassCardProps) {
  return (
    <div className="glass-card">
      <div className="glass-card-image-container">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="glass-card-image"
        />
        <div className="glass-card-title-overlay">
          <h3 className="glass-card-title">{title}</h3>
        </div>
      </div>
      {description && (
        <div className="glass-card-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}
