import Breadcrumb from './Breadcrumb'

export default function LeadershipDevelopmentCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '/#case-studies' },
          { name: 'Leadership Development at Scale', href: '/case-studies/leadership-development' }
        ]} 
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Developing Emerging Leaders to Drive Design Excellence at Scale
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Coaching five team leads through individualized development journeys to build 
              a scalable, self-sustaining leadership foundation
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Leadership Development</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Team Building</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Organizational Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">The Leadership Challenge</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Growing Organization, Diverse Leadership Needs</h3>
              <p className="text-gray-700 mb-4">
                As Paycom's Product Design organization scaled, I oversaw five talented Team Leads at different stages of leadership maturity:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>First-time leaders</strong> needing foundational management skills
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Experienced leaders</strong> ready for higher levels of influence
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>High work volumes</strong> requiring balance between delivery and leadership
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Cross-functional challenges</strong> with Product and Development partners
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Development Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Individualized Development Journeys</h2>
            
            <div className="space-y-8">
              {/* Mallory */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">M</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Mallory</h3>
                    <p className="text-blue-600 font-semibold mb-4">From Detail-Oriented to Diplomatically Influential</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Challenge</h4>
                        <p className="text-gray-600 mb-4">Strong, diligent leader with high standards but communication style was sometimes blunt; needed to expand influence at organizational scale.</p>
                        <h4 className="font-semibold mb-2 text-gray-800">Coaching Focus</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Refining communication: from blunt to direct with diplomacy</li>
                          <li>• Shifting from project focus to organizational strategy</li>
                          <li>• Building strategic partnerships</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-green-800">Outcome</h4>
                        <p className="text-green-700">
                          Became one of the most <strong>influential leaders in the department</strong>, known for strategic partnerships and consistently delivering high-impact work to the business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jidnya */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">J</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Jidnya</h3>
                    <p className="text-purple-600 font-semibold mb-4">From Team Unity to Cross-Functional Influence</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Challenge</h4>
                        <p className="text-gray-600 mb-4">Led the most cohesive team with deep trust, but hesitated to communicate proactively with leaders outside her team.</p>
                        <h4 className="font-semibold mb-2 text-gray-800">Coaching Focus</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Broadening relational scope beyond her team</li>
                          <li>• Engaging actively with Product, QA, and Development</li>
                          <li>• Stretch assignments for cross-functional exposure</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-green-800">Outcome</h4>
                        <p className="text-green-700">
                          Became a <strong>stronger presence in cross-functional settings</strong>, influencing collaboration across entire product portfolios, not just her own team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rutvij */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">R</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Rutvij</h3>
                    <p className="text-green-600 font-semibold mb-4">From Designer to Emerging Leader</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Challenge</h4>
                        <p className="text-gray-600 mb-4">First leadership role with great design instincts but little formal experience managing projects or people.</p>
                        <h4 className="font-semibold mb-2 text-gray-800">Coaching Focus</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Building foundational leadership skills</li>
                          <li>• Project management and Jira planning</li>
                          <li>• Balancing delivery with mentorship</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-green-800">Outcome</h4>
                        <p className="text-green-700">
                          Emerged as a <strong>reliable, organized leader</strong> who could keep his team focused and on track without losing sight of design quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jon */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">J</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Jon</h3>
                    <p className="text-indigo-600 font-semibold mb-4">From Trusted Team Lead to Strategic Contributor</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Challenge</h4>
                        <p className="text-gray-600 mb-4">Already mature, adaptable leader with strong business relationships; needed preparation for Manager-level role.</p>
                        <h4 className="font-semibold mb-2 text-gray-800">Coaching Focus</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Refining executive communication</li>
                          <li>• Navigating challenging Product relationships</li>
                          <li>• Strategic initiative leadership</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-green-800">Outcome</h4>
                        <p className="text-green-700">
                          Became a <strong>go-to voice in leadership discussions</strong>, contributing to hiring strategy and shaping design operations with steady, diplomatic influence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kale */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">K</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Kale</h3>
                    <p className="text-orange-600 font-semibold mb-4">From Subject Matter Expert to Cross-Functional Leader</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Challenge</h4>
                        <p className="text-gray-600 mb-4">Deep expertise in internal tools with strong relationships, but needed skills in conflict navigation and difficult conversations.</p>
                        <h4 className="font-semibold mb-2 text-gray-800">Coaching Focus</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Conflict navigation and collaboration</li>
                          <li>• Difficult conversations with partners</li>
                          <li>• Maintaining alignment and respect</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-green-800">Outcome</h4>
                        <p className="text-green-700">
                          Spearheaded <strong>cross-functional modernization efforts</strong>, improving performance and creating measurable efficiency gains as an indispensable bridge across departments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Collective Leadership Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Individual Growth</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Each leader developed confidence and independence in their domain
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Improved cross-functional relationships and influence
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Enhanced communication and strategic thinking skills
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Organizational Impact</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Design organization became more scalable and collaborative
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Created trusted advocates and reliable Product partners
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Established self-sustaining leadership culture
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Leadership Multiplication Effect</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through intentional coaching and empowerment, I cultivated a team of leaders who now lead with confidence, clarity, and character. 
                <strong className="text-green-700"> The ripple effect was profound: our design organization became more scalable, collaborative, and self-sustaining, 
                allowing me to focus on higher-level strategy while knowing our leadership culture was thriving.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Leadership Development Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Individual Focus</h3>
                <p className="text-gray-300">
                  Each leader needs a unique development path based on their strengths, challenges, and career aspirations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Mindset</h3>
                <p className="text-gray-300">
                  Coaching for their next role, not just their current one, creates leaders who scale with the organization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">System Building</h3>
                <p className="text-gray-300">
                  Developing leaders creates sustainable systems that outlast any single person's involvement
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
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold group transition-colors"
              >
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </a>
              <a 
                href="/#case-studies" 
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold group transition-colors"
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
                  <div className="font-semibold text-gray-900">Enterprise Design Framework</div>
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