'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Ensure content is visible immediately, enhance with animation when ready
    setIsLoaded(true)
  }, [])

  return (
    <section className="hero-section flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={false} // Don't hide content initially
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hero-content" // Ensures content is always visible
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Calvin Lyman
            <span className="block text-blue-600 text-2xl md:text-3xl font-semibold mt-2">Design Leader Empowering People, Strengthening Process, Elevating Product</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading design teams to create exceptional user experiences through strategic vision, 
            collaborative leadership, and data-driven decision making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#case-studies"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors transform-gpu"
            >
              View Case Studies
            </motion.a>
            <motion.a
              href="/Calvin_Lyman_Resume.pdf"
              download="Calvin_Lyman_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors transform-gpu"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}