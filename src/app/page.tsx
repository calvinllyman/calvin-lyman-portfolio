import { Suspense } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import CaseStudies from '@/components/CaseStudies'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

// Simple fallback for hero section
function HeroFallback() {
  return (
    <section className="hero-section flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 text-center hero-content">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Calvin Lyman
          <span className="block text-blue-600 text-2xl md:text-3xl font-semibold mt-2">
            Design Leader Empowering People, Strengthening Process, Elevating Product
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Leading design teams to create exceptional user experiences through strategic vision, 
          collaborative leadership, and data-driven decision making.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#case-studies"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Case Studies
          </a>
          <a
            href="/Calvin_Lyman_Resume.pdf"
            download="Calvin_Lyman_Resume.pdf"
            className="inline-block px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<HeroFallback />}>
        <Hero />
      </Suspense>
      <About />
      <CaseStudies />
      <Experience />
      <Contact />
    </>
  )
}