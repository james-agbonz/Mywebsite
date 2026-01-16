import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Dock from './components/Dock'
import { Home as HomeIcon, User, Briefcase, Mail, Github, Linkedin } from 'lucide-react'

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()

  const dockItems = [
    {
      icon: <HomeIcon size={24} className="text-foreground" />,
      label: 'Home',
      onClick: () => navigate('/')
    },
    {
      icon: <User size={24} className="text-foreground" />,
      label: 'About',
      onClick: () => console.log('About clicked')
    },
    {
      icon: <Briefcase size={24} className="text-foreground" />,
      label: 'Projects',
      onClick: () => navigate('/projects')
    },
    {
      icon: <Mail size={24} className="text-foreground" />,
      label: 'Contact',
      onClick: () => navigate('/contact')
    },
    {
      icon: <Github size={24} className="text-foreground" />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com', '_blank')
    },
    {
      icon: <Linkedin size={24} className="text-foreground" />,
      label: 'LinkedIn',
      onClick: () => window.open('https://linkedin.com', '_blank')
    }
  ]

  return (
    <div className="min-h-screen bg-background relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== '/contact' && location.pathname !== '/projects' && <Dock items={dockItems} />}
    </div>
  )
}

function App() {
  return (
    <Router basename="/MYportfolio.github.io">
      <AppContent />
    </Router>
  )
}

export default App
