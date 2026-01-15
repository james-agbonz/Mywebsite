import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ProfileCard from "@/components/ProfileCard"
import StarBorder from "@/components/StarBorder"
import GlassNav from "@/components/GlassNav"
import Particles from "@/components/Particles"
import profileImage from "@/assets/images/image.jpeg.png"

export default function Home() {
  const navItems = [
    { label: 'About', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
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
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Navigation, PixelCard on left and text on right */}
        <section className="mb-24 relative min-h-[80vh] flex flex-col">
          {/* Navigation at the top */}
          <div className="flex items-center justify-between mb-12 pt-4">
            <a href="/" className="text-2xl bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
              <span className="font-bold">James</span> Agbonhese
            </a>
            <GlassNav
              items={navItems}
              initialActiveIndex={0}
            />
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: ProfileCard */}
          <div className="flex-shrink-0">
            <ProfileCard
              avatarUrl={profileImage}
              name="James Agbonhese"
              title="ML Research Engineer"
              handle="jamesagbonz"
              status="Available"
              contactText="Contact"
              onContactClick={() => window.location.href = '/contact'}
              enableTilt={true}
              behindGlowEnabled={false}
              showUserInfo={false}
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 text-left">
            <h1 className="text-lg mb-6 bg-gradient-to-r from-rose-400 via-red-500 to-rose-600 bg-clip-text text-transparent">
              Data and Automations | Agentic AI • MLOps • DevOps
            </h1>

            <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
              <p>
                Data and Automations Engineer at Abundant Intelligence working on the design of agentic, event-driven AI systems for automated data and research operations. My focus is on building scalable orchestration layers and reliable ML infrastructure that improve system efficiency and decision workflows.
              </p>

              <p>
                I develop multi-agent coordination architectures and ETL systems to support distributed, longitudinal research across multiple regions, and evaluate containerized knowledge and analytics platforms for research and operational use.
              </p>

              <p>
                In parallel, I conduct DevOps and MLOps research at the Concordia SAC Research Lab, focusing on automated ML lifecycle management and deployment of explainable AI systems for medical imaging. My work centers on containerized ML systems, experiment tracking, service-oriented architectures, and reproducible deployment strategies. I am pursuing an MEng in Electrical and Computer Engineering at Concordia University, with research interests in agentic AI, MLOps optimization, and computer vision for healthcare.
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <StarBorder as="div" color="#dc2626" speed="4s">
                <Button size="lg" onClick={() => window.location.href = '/projects'}>View Projects</Button>
              </StarBorder>
              <StarBorder as="div" color="#b91c1c" speed="5s">
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/contact'}>Contact Me</Button>
              </StarBorder>
            </div>
          </div>
        </div>
        </section>
      </div>
      </div>
    </div>
  )
}
