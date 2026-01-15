import GooeyNav from "./GooeyNav"

export default function Header() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className="bg-gradient-to-r from-[#1a0a0f] via-[#2d0f1a] to-[#1a0a0f]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <GooeyNav
            items={navItems}
            initialActiveIndex={0}
            particleCount={12}
            animationTime={500}
          />
        </div>
      </div>
    </header>
  )
}
