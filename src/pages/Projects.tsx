import ChromaGrid from "@/components/ChromaGrid"
import GlassNav from "@/components/GlassNav"
import Particles from "@/components/Particles"
import xaiImage from "@/assets/images/summary_GOOD.png"
import nexosphereImage from "@/assets/images/nexosphere.png"
import microservicesImage from "@/assets/images/v1-v2.png"
import cdnImage from "@/assets/images/cdn-la-gi.jpg"
import './Projects.css'

export default function Projects() {
  const navItems = [
    { label: 'About', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ]

  const researchProjects = [
    {
      image: xaiImage,
      title: "Automating the Deployment of Explainable AI with CI/CD: A Pipeline Approach",
      subtitle: "Comprehensive CI/CD pipeline for XAI systems in medical imaging. Achieved 78% reduction in deployment time using Docker, CutMix augmentation, and Integrated Gradients.",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: "https://github.com/james-agbonz/mlflow_hyperk"
    }
  ]

  const courseWorkProjects = [
    {
      image: nexosphereImage,
      title: "NexoSphere",
      subtitle: "Real-time sentiment analysis platform for financial market insights using Google T5, MongoDB, Redis, and AWS with CI/CD deployment pipelines.",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://github.com/NexoSphere-Org/nexosphere/tree/james"
    },
    {
      image: microservicesImage,
      title: "Microservices Architecture with RabbitMQ",
      subtitle: "Scalable microservice architecture with User and Order services, API Gateway, MongoDB, RabbitMQ for event-driven communication, and Docker containerization deployed on Google Cloud.",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://github.com/james-agbonz/Microservices_RabbitMQ"
    },
    {
      image: cdnImage,
      title: "CDN Network",
      subtitle: "Content Delivery Network with FastAPI, HLS adaptive bitrate streaming, round-robin load balancing, FFmpeg thumbnail generation, and Docker deployment.",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "https://github.com/Ravinders99/CDN_network"
    }
  ]

  // const eventsProjects = [
  //   {
  //     image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
  //     title: "Tech Conference 2024",
  //     subtitle: "Annual technology conference and networking event",
  //     borderColor: "#EC4899",
  //     gradient: "linear-gradient(180deg, #EC4899, #000)",
  //     url: ""
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=400&fit=crop",
  //     title: "Workshop Series",
  //     subtitle: "Hands-on technical workshops and training",
  //     borderColor: "#14B8A6",
  //     gradient: "linear-gradient(155deg, #14B8A6, #000)",
  //     url: ""
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
  //     title: "Hackathon Event",
  //     subtitle: "24-hour coding competition and collaboration",
  //     borderColor: "#F97316",
  //     gradient: "linear-gradient(240deg, #F97316, #000)",
  //     url: ""
  //   }
  // ]

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
      <div className="relative z-10 container mx-auto px-4 py-4">
        <div className="max-w-7xl mx-auto">
        {/* Navigation at the top */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <a href="/" className="text-2xl bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
            <span className="font-bold">James</span> Agbonhese
          </a>
          <GlassNav
            items={navItems}
            initialActiveIndex={1}
          />
        </div>

        {/* Research Section */}
        <section className="mb-12 relative">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">Research</h2>
          </div>
          <ChromaGrid
            items={researchProjects}
            columns={3}
            rows={1}
            radius={250}
          />
        </section>

        {/* Course Work Section */}
        <section className="mb-12 relative">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">Course Work</h2>
          </div>
          <ChromaGrid
            items={courseWorkProjects}
            columns={3}
            rows={1}
            radius={250}
          />
        </section>

        {/* Events Section */}
        {/* <section className="relative">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">Events</h2>
          </div>
          <ChromaGrid
            items={eventsProjects}
            columns={3}
            rows={1}
            radius={250}
          />
        </section> */}
        </div>
      </div>
    </div>
  )
}
