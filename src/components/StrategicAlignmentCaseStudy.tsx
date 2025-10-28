export default function StrategicAlignmentCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic Alignment Initiative
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Aligning design strategy with enterprise modernization while maintaining development velocity
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Strategic Leadership</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">React Migration</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Design Systems</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Executive Alignment</span>
            </div>
          </div>
        </div>
      </section>

      {/* STAR Framework Overview */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">React Redesign Initiative</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A strategic design leadership initiative that aligned short-term visual improvements with 
              long-term technical modernization, demonstrating design's strategic value in a dev-led culture.
            </p>
          </div>
        </div>
      </section>

      {/* Situation Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-2xl font-bold text-red-600">S</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Situation</h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The company had made a strategic decision to transition from a legacy PHP/MVC framework to React 
                    for improved performance, scalability, and accessibility. However, many client-facing products 
                    continued to be built in the old framework, creating growing design debt and inconsistency 
                    across the product ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold mb-3 text-red-700">Technical Challenges</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Legacy PHP/MVC framework limitations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Performance and scalability concerns
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Accessibility compliance gaps
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold mb-3 text-red-700">Design Impact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Growing design debt across products
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Inconsistent user experiences
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Disconnected design and dev workflows
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-2xl font-bold text-orange-600">T</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Task</h2>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    As Product Design Manager, I needed to align design efforts with the company's modernization strategy — 
                    ensuring design not only looked consistent but also prepared teams for a smooth migration to React 
                    without disrupting development velocity or quality.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-800 mb-2">Key Objectives</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Bridge short-term design improvements with long-term technical goals</li>
                      <li>• Maintain development velocity during transition period</li>
                      <li>• Establish design's strategic value in a dev-led culture</li>
                      <li>• Create scalable systems for consistent user experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">A</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Action</h2>
              </div>
            </div>

            <div className="grid gap-8">
              {/* Action Item 1 */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">Executive Advocacy</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Met directly with the CEO</strong> to advocate for a full redesign in React, 
                      aligning short-term goals with long-term modernization strategy and securing executive buy-in 
                      for design's strategic role.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Item 2 */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">Component Standardization</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Partnered with our Senior Systems Designer</strong> to document detailed component standards — 
                      screen layouts, pixel measurements, interaction patterns — enabling a scalable reskin that 
                      maintained design integrity across the ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Item 3 */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">Design-Dev Alignment</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Directed the design systems and UI Dev teams</strong> to ensure the new visual standards 
                      matched React components' look and feel, while maintaining identical layout dimensions to 
                      prevent regression costs during migration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Item 4 */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">System Integration</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Integrated the updated templates and components</strong> into our Figma libraries, 
                      enforcing consistency across all product teams to prevent future visual debt and 
                      establish sustainable design governance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-2xl font-bold text-green-600">R</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Results</h2>
              </div>
            </div>

            {/* Business Context & Timeline */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">📈 Business Context</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-indigo-700">Timeline: Q4 2023 - Q3 2024</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                This design work supported the company through a period of sustained growth and product expansion, 
                contributing to broader organizational momentum during enterprise modernization efforts. The strategic 
                alignment ensured design remained a growth enabler rather than a bottleneck.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/60 rounded-lg p-4 border border-indigo-200">
                  <div className="text-sm font-semibold text-indigo-800 mb-1">Accelerated Timeline</div>
                  <div className="text-xs text-gray-700">Visual improvements provided immediate value while React work progressed</div>
                </div>
                
                <div className="bg-white/60 rounded-lg p-4 border border-indigo-200">
                  <div className="text-sm font-semibold text-indigo-800 mb-1">Cross-functional Unity</div>
                  <div className="text-xs text-gray-700">Unified design and engineering roadmaps across 10+ product teams</div>
                </div>
                
                <div className="bg-white/60 rounded-lg p-4 border border-indigo-200">
                  <div className="text-sm font-semibold text-indigo-800 mb-1">Technical Debt Reduction</div>
                  <div className="text-xs text-gray-700">React strategy positioned team for faster component development</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Strategic Impact</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Executive alignment achieved:</strong> Successfully aligned design strategy with modernization goals
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Dual wins delivered:</strong> Short-term visual refresh + long-term migration preparation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Strategic positioning:</strong> Design elevated from reactive service to strategic partner
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Operational Excellence</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>NPS improvement:</strong> Boosted positive feedback and internal design perception
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Enhanced collaboration:</strong> Improved design-to-dev partnership and workflows
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Governance established:</strong> Stronger standards around component use and visual consistency
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cultural Transformation</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                This initiative demonstrated that strategic design leadership can bridge the gap between immediate business needs 
                and long-term technical vision. <strong className="text-purple-700">By aligning with executive priorities 
                and delivering measurable value, design established itself as an essential strategic partner in a 
                traditionally development-led organization.</strong>
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
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Executive Alignment</h3>
                <p className="text-gray-300">
                  Direct CEO engagement and strategic positioning elevated design's organizational influence
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Balanced Approach</h3>
                <p className="text-gray-300">
                  Successful balance of immediate visual improvements with long-term technical preparation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Systems Thinking</h3>
                <p className="text-gray-300">
                  Component standardization and governance created sustainable foundation for future growth
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
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold group transition-colors"
              >
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </a>
              <a 
                href="/#case-studies" 
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold group transition-colors"
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
                <a href="/case-studies/enterprise-framework" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow border">
                  <div className="text-green-600 text-sm font-semibold mb-1">Process & Leadership</div>
                  <div className="font-semibold text-gray-900">Enterprise Collaboration Framework</div>
                </a>
                <a href="/case-studies/leadership-development" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow border">
                  <div className="text-blue-600 text-sm font-semibold mb-1">Team Building & Mentorship</div>
                  <div className="font-semibold text-gray-900">Leadership Development at Scale</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}