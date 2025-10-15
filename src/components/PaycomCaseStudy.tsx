import Breadcrumb from './Breadcrumb'

export default function PaycomCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '/#case-studies' },
          { name: 'Paycom Collaboration Framework', href: '/case-studies/paycom-framework' }
        ]} 
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Designing a Framework to Elevate Collaboration and Storytelling at Paycom
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Transforming how Product and Design collaborate across five product portfolios 
              with a lean team operating at 1:4 industry ratio
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Cross-Functional Leadership</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Process Design</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Strategic Alignment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">The Challenge</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-red-800">Complex Ecosystem, Limited Resources</h3>
              <p className="text-gray-700 mb-4">
                When I took on leadership within Paycom's Product Design organization, we faced a perfect storm of challenges:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Five separate product portfolios</strong> with dozens of Product Managers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Lean design team</strong> operating at 1:4 ratio vs industry norms
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>PMs from client-facing roles</strong> with little design collaboration experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Vague project requests</strong> and unclear prioritization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>No consistent way</strong> to communicate design impact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Framework */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">The Framework Solution</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Intake & Requirements</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Standardized project intake forms</li>
                  <li>• Business goals definition</li>
                  <li>• Joint discovery sessions</li>
                  <li>• Earlier design involvement</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Prioritization</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Business urgency criteria</li>
                  <li>• User impact assessment</li>
                  <li>• Design bandwidth planning</li>
                  <li>• Quarterly alignment</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Visibility</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Jira dashboard integration</li>
                  <li>• Workload distribution tracking</li>
                  <li>• Leadership visibility</li>
                  <li>• Headcount justification</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Storytelling</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Outcome-focused reviews</li>
                  <li>• User value connection</li>
                  <li>• Business impact narrative</li>
                  <li>• Strategic role reinforcement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Transformational Results</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Operational Excellence</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Higher-quality requests:</strong> PMs began submitting clearer, more complete briefs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Smarter prioritization:</strong> Confident "yes" or "not yet" decisions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Reduced rework:</strong> Ambiguity eliminated through better processes
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Strategic Impact</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Cross-functional alignment:</strong> Transparency and mutual accountability
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Design narrative:</strong> Compelling stories connecting work to outcomes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Strategic partnership:</strong> Design elevated from reactive service
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Leadership Impact</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                By bridging structure and storytelling, the framework not only elevated workflow efficiency 
                but fundamentally shifted perceptions of design within the organization. 
                <strong className="text-purple-700"> Design became a strategic partner capable of shaping priorities, 
                influencing outcomes, and articulating value in ways that resonated with business leaders.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Leadership Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Bridge Building</h3>
                <p className="text-gray-300">
                  Successful design leadership requires creating systems that serve both teams equally
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Scalable Systems</h3>
                <p className="text-gray-300">
                  Process design must balance structure with flexibility to handle diverse portfolios
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Story Power</h3>
                <p className="text-gray-300">
                  Teaching teams to connect work to outcomes transforms organizational perception
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
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
            
            {/* Related Case Studies */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">More Case Studies</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="/case-studies/leadership-development" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow border">
                  <div className="text-green-600 text-sm font-semibold mb-1">Team Building & Mentorship</div>
                  <div className="font-semibold text-gray-900">Leadership Development at Scale</div>
                </a>
                <a href="/case-studies/crisis-leadership" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow border">
                  <div className="text-red-600 text-sm font-semibold mb-1">Change Management</div>
                  <div className="font-semibold text-gray-900">Crisis Leadership Excellence</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}