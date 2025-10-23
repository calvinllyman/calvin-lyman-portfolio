import CaseStudies from '@/components/CaseStudies'
import Breadcrumb from '@/components/Breadcrumb'

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumb 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '' }
        ]}
      />
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Explore my leadership journey through strategic design challenges, 
                team development initiatives, and organizational transformation projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Strategic Leadership</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Process Design</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Team Development</span>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full">Change Management</span>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <CaseStudies showAll={true} />

        {/* Additional Context Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Leadership Philosophy in Action
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Each case study demonstrates my commitment to <strong>purpose-driven leadership</strong> — 
                combining strategic vision with empathetic people development to create sustainable organizational change. 
                These stories showcase not just what was accomplished, but how leadership principles guided the approach.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Strategic Impact</h3>
                  <p className="text-gray-600">Aligning design decisions with business objectives and long-term organizational goals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">People Development</h3>
                  <p className="text-gray-600">Empowering team members through coaching, clear expectations, and growth opportunities</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Process Excellence</h3>
                  <p className="text-gray-600">Creating scalable frameworks that improve collaboration and delivery consistency</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Let's Discuss Your Design Leadership Challenges
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Ready to explore how these leadership approaches could benefit your organization?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/Calvin_Lyman_Resume.pdf"
                  download="Calvin_Lyman_Resume.pdf"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}