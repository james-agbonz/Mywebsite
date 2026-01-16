import GlassNav from "@/components/GlassNav"
import Particles from "@/components/Particles"
import { Mail, Github, Linkedin, Download } from 'lucide-react'

export default function Contact() {
  const navItems = [
    { label: 'About', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ]

  const contactItems = [
    {
      icon: <Mail size={48} className="text-white" />,
      label: 'Email',
      onClick: () => window.open('mailto:jamesagbonz@gmail.com')
    },
    {
      icon: <Github size={48} className="text-white" />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/james-agbonz', '_blank')
    },
    {
      icon: <Linkedin size={48} className="text-white" />,
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/james-agbonhese-253b4b178/', '_blank')
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#f5f5f5', '#e5e5e5', '#d4d4d4']}
          particleCount={250}
          particleSpread={12}
          speed={0.08}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={1.2}
          moveParticlesOnHover={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Navigation at the top */}
          <div className="flex items-center justify-between mb-12 pt-4">
            <a href="/" className="text-2xl bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
              <span className="font-bold">James</span> Agbonhese
            </a>
            <GlassNav
              items={navItems}
              initialActiveIndex={2}
            />
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-rose-400 via-red-500 to-rose-600 bg-clip-text text-transparent text-center mb-16">
              Get In Touch
            </h1>

            {/* Glassmorphic CV Download Bar */}
            <div className="cv-download-bar mb-12">
              <button
                className="cv-download-button-full"
                onClick={() => window.open('/path/to/your/cv.pdf', '_blank')}
                aria-label="View Resume"
              >
                <Download size={24} className="cv-icon" />
                <span>View my resume</span>
              </button>
            </div>

            {/* Contact Icons */}
            <div className="flex gap-12 items-center justify-center flex-wrap">
              {contactItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="contact-icon-button"
                  aria-label={item.label}
                >
                  <div className="contact-icon-wrapper">
                    {item.icon}
                  </div>
                  <span className="contact-icon-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cv-download-bar {
          width: 100%;
          max-width: 400px;
        }

        .cv-download-button-full {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          width: 100%;
          padding: 1rem 2rem;

          /* Glassmorphism effect */
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);

          /* Border and shadow */
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);

          color: rgba(255, 255, 255, 0.95);
          font-size: 1.125rem;
          font-weight: 600;

          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cv-download-button-full:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .cv-icon {
          flex-shrink: 0;
        }

        .contact-icon-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .contact-icon-button:hover {
          transform: translateY(-8px);
        }

        .contact-icon-wrapper {
          width: 120px;
          height: 120px;
          border-radius: 24px;

          /* Glassmorphism effect */
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);

          /* Border and shadow */
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);

          display: flex;
          align-items: center;
          justify-content: center;

          transition: all 0.3s ease;
        }

        .contact-icon-button:hover .contact-icon-wrapper {
          background: rgba(255, 255, 255, 0.15);
          box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .contact-icon-label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.125rem;
          font-weight: 500;
          text-align: center;
        }

        @media (max-width: 768px) {
          .cv-download-button-full {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
          }

          .contact-icon-wrapper {
            width: 100px;
            height: 100px;
          }

          .contact-icon-wrapper svg {
            width: 40px;
            height: 40px;
          }

          .contact-icon-label {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
