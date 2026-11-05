import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import BentoAbout from './components/BentoAbout'
import BentoSkills from './components/BentoSkills'
import BentoExperience from './components/BentoExperience'
import BentoProjects from './components/BentoProjects'
import BentoContact from './components/BentoContact'
import Footer from './components/Footer'
import CosmicEclipseBackground from './components/CosmicEclipseBackground'
import ContactModal from './components/ContactModal'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handleOpenContact = () => setContactModalOpen(true)
  const handleCloseContact = () => setContactModalOpen(false)

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
        {/* Animated Cosmic Eclipse & Solar Flare Ambient Background */}
        <CosmicEclipseBackground />

        {/* Pinned Left Sidebar Navigation */}
        <Sidebar 
          activeSection={activeSection}
          onSelectSection={(id) => {
            setActiveSection(id)
            if (id === 'contact') {
              handleOpenContact()
            }
          }}
          onOpenContactModal={handleOpenContact}
        />

        {/* Main Content Area (Offset by Sidebar on Desktop) */}
        <main className="relative z-10 lg:pl-48 xl:pl-52 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl mx-auto">
          {/* Top Hero Section */}
          <Hero onOpenContactModal={handleOpenContact} />

          {/* Bento Grid Layout */}
          <div className="space-y-6 mt-2">
            {/* Bento Row 1: About, Skills, Experience (3-column layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
              <div id="about" className="lg:col-span-4">
                <BentoAbout />
              </div>
              <div className="lg:col-span-4">
                <BentoSkills />
              </div>
              <div className="lg:col-span-4">
                <BentoExperience />
              </div>
            </div>

            {/* Bento Row 2: Projects (7 cols) + Get in Touch (5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              <div className="lg:col-span-7">
                <BentoProjects />
              </div>
              <div className="lg:col-span-5">
                <BentoContact onOpenContactModal={handleOpenContact} />
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </main>

        {/* Global SSL-Secured Contact Modal */}
        <ContactModal 
          isOpen={contactModalOpen} 
          onClose={handleCloseContact} 
        />
      </div>
    </ThemeProvider>
  )
}
