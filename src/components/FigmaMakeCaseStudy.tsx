export default function FigmaMakeCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Uplift – Community Health Worker Training Platform
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Mobile-first design system empowering community health workers in underserved regions with accessible training and resources
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Mobile Design</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Healthcare</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Design Systems</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Social Impact</span>
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
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Community health workers in underserved regions face significant barriers to accessing quality training and medical resources. 
                  Traditional training methods require in-person attendance, expensive materials, and consistent internet connectivity—luxuries 
                  many communities cannot afford.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Healthcare workers in remote areas need a mobile-first platform that works offline, presents complex medical information 
                  clearly, and adapts to low-literacy contexts while maintaining clinical accuracy and professionalism.
                </p>
              </div>
            </div>

            {/* Solution Intro */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-green-600 font-bold">S</span>
                The Solution
              </h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Uplift is a comprehensive mobile training platform designed specifically for community health workers. The system combines 
                  intuitive navigation, visual learning aids, and offline-first architecture to deliver professional medical training in 
                  resource-constrained environments.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The design system emphasizes clarity through large touch targets, high-contrast colors, iconography-driven navigation, 
                  and modular content that can be downloaded and accessed without connectivity. Every component is optimized for 
                  low-bandwidth usage and diverse literacy levels.
                </p>
              </div>
            </div>

            {/* Design Principles */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-blue-600 font-bold">D</span>
                Design Principles
              </h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Mobile-First & Offline:</strong> Every screen designed for small devices with essential content downloadable for offline access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Visual Clarity:</strong> Large typography, high-contrast colors, and iconography reduce cognitive load for diverse literacy levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Progressive Disclosure:</strong> Complex medical information broken into digestible modules with clear progression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Touch-Optimized:</strong> Generous touch targets and swipe gestures for efficient one-handed operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Culturally Adaptive:</strong> Modular design system allows localization for different regions and languages</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA to Full Case Study */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 border-2 border-pink-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Explore the Interactive Prototype</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Walk through the complete design system, see mobile screens in context, and explore how each component 
                  supports community health workers in the field.
                </p>
                <a
                  href="https://clap-red-68614220.figma.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>View Interactive Case Study</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Key Features & Components</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Training Modules</h3>
                <p className="text-gray-600">
                  Step-by-step lessons with images, videos, and interactive quizzes designed for mobile learning
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Medical Reference</h3>
                <p className="text-gray-600">
                  Searchable database of symptoms, treatments, and protocols accessible offline in the field
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Progress Tracking</h3>
                <p className="text-gray-600">
                  Visual dashboards showing completion status, certifications earned, and areas for improvement
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Offline-First</h3>
                <p className="text-gray-600">
                  Download content for areas with poor connectivity; sync progress when back online
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🗣️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Multi-Language</h3>
                <p className="text-gray-600">
                  Localized content and interface supporting multiple languages and regional dialects
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Network</h3>
                <p className="text-gray-600">
                  Connect with other health workers to share experiences, ask questions, and learn together
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
