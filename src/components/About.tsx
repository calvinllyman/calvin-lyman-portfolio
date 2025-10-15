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
                As a Director of Product Design at Paycom, I've learned that the most sustainable way to create 
                exceptional design outcomes is by developing exceptional leaders. My approach focuses on building 
                systems that empower teams, processes that scale across portfolios, and people who thrive in complexity.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Individual-focused leadership development</strong> tailored to each person's growth journey
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Cross-functional collaboration frameworks</strong> that align Product, Design, and Development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Strategic storytelling</strong> that connects design work to measurable business outcomes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Scalable design operations</strong> that enable teams to focus on high-impact work
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-80 rounded-lg flex items-center justify-center border-4 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl font-bold">CL</span>
                  </div>
                  <p className="text-gray-600 font-medium">Professional Headshot</p>
                  <p className="text-gray-500 text-sm mt-1">Replace with your photo</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border">
                <p className="text-xs text-gray-500">Director of Product Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}