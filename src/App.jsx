import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Articles from './components/Articles'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-bg text-gray-100 overflow-x-hidden">
        <ParticleBackground />
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Articles />
        <CodingProfiles />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
