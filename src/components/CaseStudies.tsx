import ImagePlaceholder from './ImagePlaceholder'

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Paycom Collaboration Framework",
      description: "Designed a cross-functional framework that transformed how Product and Design collaborate across five product portfolios",
      impact: "100% improvement in request quality and strategic design partnership",
      category: "Process & Leadership",
      link: "/case-studies/paycom-framework",
      gradient: "green-emerald" as const,
      iconType: "framework" as const
    },
    {
      title: "Leadership Development at Scale",
      description: "Developed five team leads through individualized coaching journeys, creating a scalable leadership foundation",
      impact: "100% leadership growth success and self-sustaining culture",
      category: "Team Building & Mentorship",
      link: "/case-studies/leadership-development",
      gradient: "blue-purple" as const,
      iconType: "leadership" as const
    },
    {
      title: "Crisis Leadership Excellence", 
      description: "Led teams through unexpected transitions and organizational restructuring with calm, clarity, and compassion",
      impact: "Zero team attrition and 100% project continuity during crisis periods",
      category: "Change Management",
      link: "/case-studies/crisis-leadership",
      gradient: "red-rose" as const,
      iconType: "crisis" as const
    }
  ]

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Case Studies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {study.link !== "#" ? (
                <a href={study.link} className="block relative">
                  <ImagePlaceholder 
                    gradient={study.gradient}
                    iconType={study.iconType}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      View Case Study →
                    </span>
                  </div>
                </a>
              ) : (
                <div className="relative">
                  <ImagePlaceholder 
                    gradient={study.gradient}
                    iconType={study.iconType}
                  />
                </div>
              )}
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{study.category}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="text-sm font-semibold text-green-600 mb-4">{study.impact}</div>
                {study.link !== "#" ? (
                  <a 
                    href={study.link}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    Read Full Case Study →
                  </a>
                ) : (
                  <span className="text-gray-400 text-sm">Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  )
}