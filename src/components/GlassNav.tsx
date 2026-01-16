import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './GlassNav.css'

interface NavItem {
  label: string
  href: string
}

interface GlassNavProps {
  items: NavItem[]
  initialActiveIndex?: number
}

export default function GlassNav({ items, initialActiveIndex = 0 }: GlassNavProps) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleClick = (index: number, item: NavItem) => {
    setActiveIndex(index)
    setIsMobileMenuOpen(false) // Close mobile menu after clicking

    // Navigate if href starts with '/' (router path), otherwise it's an anchor
    if (item.href && item.href.startsWith('/')) {
      navigate(item.href)
    } else if (item.href && item.href.startsWith('#')) {
      // Handle anchor links
      const element = document.querySelector(item.href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="glass-nav">
      {/* Desktop Menu */}
      <ul className="glass-nav-list glass-nav-desktop">
        {items.map((item, index) => (
          <li key={index} className="glass-nav-item">
            <button
              onClick={() => handleClick(index, item)}
              className={`glass-nav-link ${activeIndex === index ? 'active' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="glass-nav-hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="glass-nav-mobile-menu">
          <ul className="glass-nav-mobile-list">
            {items.map((item, index) => (
              <li key={index} className="glass-nav-mobile-item">
                <button
                  onClick={() => handleClick(index, item)}
                  className={`glass-nav-mobile-link ${activeIndex === index ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
