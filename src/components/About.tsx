import ProfileImage from './ProfileImage'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Leadership Philosophy: Scaling Through People
              </h3>
              <p className="text-gray-600 mb-6">
                As a Manager of Product Design, I've learned that the most sustainable way to create 
                exceptional design outcomes is by developing exceptional leaders. My approach focuses on building 
                systems that empower teams, processes that scale across portfolios, and people who thrive in complexity.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-800">Individual-focused leadership development</strong>
                    <div className="text-sm mt-1">Tailored to each person's growth journey</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-800">Cross-functional collaboration frameworks</strong>
                    <div className="text-sm mt-1">That align Product, Design, and Development</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-800">Strategic storytelling</strong>
                    <div className="text-sm mt-1">That connects design work to measurable business outcomes</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-800">Scalable design operations</strong>
                    <div className="text-sm mt-1">That enable teams to focus on high-impact work</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <div className="h-80 rounded-lg overflow-hidden shadow-lg bg-gray-50">
                  <ProfileImage className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Education */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Education</h4>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-gray-900">Master of Divinity</div>
                    <div className="text-gray-600 text-sm">Oklahoma Christian University</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Bachelor of Arts, Communications</div>
                    <div className="text-gray-600 text-sm">Minor in Business • Thomas Edison State University</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}