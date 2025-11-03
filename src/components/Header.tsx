'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Experience', href: '#experience' },
    { name: 'Experiments', href: '/experiments' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavigation = (href: string) => {
    // Close mobile menu
    setIsMenuOpen(false)
    
    // If it's an anchor link and we're not on the home page, navigate to home first
    if (href.startsWith('#') && pathname !== '/') {
      router.push(`/${href}`)
    } else if (href.startsWith('#') && pathname === '/') {
      // If we're on home page, smooth scroll to the anchor
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Regular navigation
      router.push(href)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CL</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-lg">Calvin Lyman</div>
              <div className="text-xs text-gray-600 -mt-1">Director of Product Design</div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-4 xl:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group px-2 py-1 whitespace-nowrap"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden xl:flex items-center space-x-4">
            <a
              href="/Calvin_Lyman_Resume.pdf"
              download="Calvin_Lyman_Resume.pdf"
              className="px-4 xl:px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
            >
              <span className="hidden lg:inline">Download Resume</span>
              <span className="lg:hidden">Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="xl:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3 border-t border-gray-200">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200 touch-manipulation"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <a
                href="/Calvin_Lyman_Resume.pdf"
                download="Calvin_Lyman_Resume.pdf"
                className="block w-full text-center px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}