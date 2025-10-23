import Breadcrumb from './Breadcrumb'

import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function CrisisLeadershipCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '/#case-studies' },
          { name: 'Crisis Leadership Excellence', href: '/case-studies/crisis-leadership' }
        ]} 
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-rose-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leading Through Change, Challenge, and Constraint
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Bringing calm, clarity, and compassion to teams facing unexpected transitions 
              and organizational uncertainty
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Crisis Leadership</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Change Management</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Team Stability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Scenarios */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Leadership Under Pressure</h2>
            
            <div className="space-y-12">
              {/* Crisis 1: Leadership Gap */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-red-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Crisis #1: Sudden Leadership Departure</h3>
                  <p className="text-red-100">Team Lead unexpectedly left during critical project phase</p>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-800">The Challenge</h4>
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Team suddenly without direction
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Critical projects at risk
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            No clear succession plan
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            I still had my own full project load
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-800">Immediate Actions</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs">1</span>
                          </span>
                          <div>
                            <strong>Built central source of truth:</strong> Created detailed Confluence page documenting every project, designer, timeline, and blocker
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs">2</span>
                          </span>
                          <div>
                            <strong>Proactive reporting:</strong> Began regular briefings to Senior Design leadership on status, risks, and needs
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs">3</span>
                          </span>
                          <div>
                            <strong>Maintained delivery:</strong> Continued delivering as Senior Designer while leading team
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-800">Outcomes</h4>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <strong>Projects stayed on track</strong>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <strong>Demonstrated leadership readiness</strong>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <strong>Paved way for management transition</strong>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <strong>Maintained team stability</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crisis 2: Organizational Restructuring */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-orange-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Crisis #2: Organizational Restructuring</h3>
                  <p className="text-orange-100">Multiple PM layoffs, shifting priorities, limited communication</p>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-800">The Challenge</h4>
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Several Product Managers laid off
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Priorities shifting weekly
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Limited communication from leadership
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            High uncertainty and anxiety
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-800">Leadership Strategy</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs">1</span>
                          </span>
                          <div>
                            <strong>Communication plans:</strong> Structured what to share and when, with guidance for Team Leads vs individual contributors
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs">2</span>
                          </span>
                          <div>
                            <strong>Transparent updates:</strong> Consistent communication even when information was incomplete
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs">3</span>
                          </span>
                          <div>
                            <strong>Emotional support:</strong> Regular Team Lead check-ins for coaching and emotional stability
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs">4</span>
                          </span>
                          <div>
                            <strong>Graceful pivoting:</strong> Quick adjustments while protecting team from confusion
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-800">Results</h4>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <strong>Team stayed focused and engaged</strong>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <strong>Morale remained intact</strong>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <strong>Continued strong delivery</strong>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <strong>Zero team attrition</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy in Crisis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Crisis Leadership Framework</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SelfImprovementIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Calm</h3>
                <p className="text-gray-600">
                  Bringing stability and composure when others are experiencing uncertainty and stress
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GpsFixedIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Clarity</h3>
                <p className="text-gray-600">
                  Providing clear communication, documentation, and direction when information is fragmented
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FavoriteIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Compassion</h3>
                <p className="text-gray-600">
                  Acknowledging human emotions and providing psychological safety during transitions
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-rose-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Core Leadership Strength</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-red-700">Leading through challenge revealed one of my core leadership strengths: 
                the ability to bring calm, clarity, and compassion in moments of uncertainty.</strong> By providing structure 
                where there was chaos, and empathy where there was anxiety, I helped my teams not just survive change—but 
                grow stronger through it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Consistent Crisis Leadership Outcomes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">Operational Excellence</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-blue-800">Continuity</strong>
                        <div className="text-sm mt-1">Design projects stayed on track, deadlines met</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-blue-800">Communication</strong>
                        <div className="text-sm mt-1">Clear upward flow of information maintained</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-blue-800">Quality</strong>
                        <div className="text-sm mt-1">Design standards upheld despite disruption</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Team Resilience</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-green-800">Stability</strong>
                        <div className="text-sm mt-1">Teams remained cohesive and engaged</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-green-800">Retention</strong>
                        <div className="text-sm mt-1">Zero attrition during crisis periods</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-green-800">Growth</strong>
                        <div className="text-sm mt-1">Teams emerged stronger from challenges</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Leadership Credibility</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-purple-800">Trust</strong>
                        <div className="text-sm mt-1">Senior leaders relied on consistent, honest updates</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-purple-800">Reputation</strong>
                        <div className="text-sm mt-1">Established as steady, reliable leader</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-purple-800">Balance</strong>
                        <div className="text-sm mt-1">Operational excellence with human empathy</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-orange-800">Long-term Impact</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-orange-800">Readiness</strong>
                        <div className="text-sm mt-1">Demonstrated preparedness for higher roles</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-orange-800">Systems</strong>
                        <div className="text-sm mt-1">Created frameworks for future crises</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-orange-800">Culture</strong>
                        <div className="text-sm mt-1">Established resilient team culture</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Crisis Leadership Insights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What I Learned</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Proactive communication</strong> prevents rumors and builds trust
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Documentation systems</strong> become critical during transitions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Emotional leadership</strong> is as important as operational leadership
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Stepping up in crisis</strong> demonstrates readiness for advancement
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Leadership Philosophy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Crisis doesn't create character—it reveals it. The most impactful leaders are those who can 
                  maintain their composure, provide clear direction, and care for their people when uncertainty 
                  is highest. <strong className="text-white">These moments aren't obstacles to overcome, 
                  they're opportunities to demonstrate the kind of leader others can depend on.</strong>
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
                className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold group transition-colors"
              >
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </a>
              <a 
                href="/#case-studies" 
                className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold group transition-colors"
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
                <a href="/case-studies/strategic-alignment" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow border">
                  <div className="text-purple-600 text-sm font-semibold mb-1">Strategic Leadership</div>
                  <div className="font-semibold text-gray-900">Strategic Alignment Initiative</div>
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