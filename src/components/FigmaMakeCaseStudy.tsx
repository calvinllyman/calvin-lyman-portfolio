export default function FigmaMakeCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Figma Make Design System
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              A comprehensive design system project exploring modern design patterns and component architecture
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Design Systems</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Component Design</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Figma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Project Overview</h2>
            
            {/* Problem */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-red-600 font-bold">P</span>
                The Challenge
              </h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Modern design teams need scalable, maintainable component libraries that balance flexibility with consistency. 
                  As design systems grow, maintaining coherent patterns across hundreds of components while enabling creative 
                  freedom becomes increasingly complex. Teams struggle with documentation, version control, and ensuring 
                  accessibility standards are met throughout the system.
                </p>
              </div>
            </div>

            {/* Solution Intro */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-green-600 font-bold">S</span>
                The Approach
              </h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  This Figma Make project explores comprehensive solutions to modern design system challenges through 
                  thoughtful component architecture, robust documentation, and accessibility-first design principles.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The full case study, hosted on Figma, walks through the design process, component structure, 
                  and implementation strategies that make this system both powerful and practical.
                </p>
              </div>
            </div>

            {/* CTA to Full Case Study */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 border-2 border-pink-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">View the Complete Case Study</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Explore the full design system documentation, component library, and design decisions 
                  in the interactive Figma case study.
                </p>
                <a
                  href="https://clap-red-68614220.figma.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>View Full Case Study on Figma</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">What You'll Find in the Case Study</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Component Library</h3>
                <p className="text-gray-600">
                  Comprehensive collection of reusable components built with atomic design principles
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Design Patterns</h3>
                <p className="text-gray-600">
                  Documented patterns for common UI challenges with implementation guidelines
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">♿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Accessibility</h3>
                <p className="text-gray-600">
                  Built-in accessibility considerations and WCAG compliance throughout the system
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <a 
                href="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group transition-colors"
              >
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </a>
              <a 
                href="/#case-studies" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group transition-colors"
              >
                View All Case Studies
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
