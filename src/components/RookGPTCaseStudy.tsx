export default function RookGPTCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-950 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              RookGPT – AI Chess Coach App
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Designing an intelligent chess coaching experience powered by AI
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">AI/ML Design</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Mobile App</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">EdTech</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">UX Research</span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Figma Presentation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdeck%2FAL6vqPmJCIdBxnPibZpNTi%2FRookGPT-Project-Overview%3Fnode-id%3D1-42%26t%3DBZw4N5AKn9q4kvQZ-1"
                  allowFullScreen
                  title="RookGPT Project Overview"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Use the arrow keys or click through the presentation above to explore the full case study.
              </p>
              <a
                href="https://www.figma.com/deck/AL6vqPmJCIdBxnPibZpNTi/RookGPT-Project-Overview?node-id=1-42&t=BZw4N5AKn9q4kvQZ-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Open presentation in new tab
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Project Overview</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-4xl mb-3">♟️</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">The Challenge</h3>
                <p className="text-gray-700">
                  How might we make expert chess coaching accessible and personalized for players of all skill levels?
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">The Solution</h3>
                <p className="text-gray-700">
                  An AI-powered chess coach that provides real-time analysis, personalized feedback, and adaptive training.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">The Impact</h3>
                <p className="text-gray-700">
                  Democratizing chess education through intelligent, accessible coaching technology.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-700 p-6 rounded-r-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                The complete RookGPT case study is presented in the interactive Figma Slides deck above. 
                Explore the research, design process, user flows, and AI integration strategy that brings 
                this intelligent chess coaching experience to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Key Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600">🎯</span>
                  Real-Time Analysis
                </h3>
                <p className="text-gray-600">
                  AI-powered move evaluation and suggestions during gameplay
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 text-purple-600">📊</span>
                  Personalized Training
                </h3>
                <p className="text-gray-600">
                  Adaptive lessons based on player skill level and learning patterns
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-green-600">💬</span>
                  Interactive Coaching
                </h3>
                <p className="text-gray-600">
                  Conversational AI that explains strategies and tactics clearly
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 text-orange-600">📈</span>
                  Progress Tracking
                </h3>
                <p className="text-gray-600">
                  Detailed analytics and insights into improvement over time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Prototype */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Try the Interactive Prototype</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Experience the RookGPT mobile app design in action. Click through the prototype to explore the user interface and key interactions.
            </p>
            
            <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
              <div className="flex justify-center">
                <div style={{ width: '375px', height: '667px', maxWidth: '100%' }}>
                  <iframe
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
                    src="https://power-office-93036585.figma.site/#/analyze"
                    title="RookGPT Mobile Prototype"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <a
              href="https://power-office-93036585.figma.site/#/analyze"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Open Full Prototype</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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
