import ImagePlaceholder from './ImagePlaceholder'

export default function CaseStudies({ showAll = false }: { showAll?: boolean }) {
  const allCaseStudies = [
    {
      title: "Crisis Leadership Excellence", 
      description: "Led teams through unexpected transitions and organizational restructuring with calm, clarity, and compassion",
      category: "Change Management",
      link: "/case-studies/crisis-leadership",
      gradient: "red-rose" as const,
      iconType: "crisis" as const
    },
    {
      title: "Process & Collaboration Breakthrough",
      description: "Transformed broken collaboration into a scalable partnership model, achieving 86% improvement in design delivery performance",
      category: "Process & Leadership", 
      link: "/case-studies/enterprise-framework",
      gradient: "green-emerald" as const,
      iconType: "framework" as const
    },
    {
      title: "Talent Development Framework",
      description: "Built performance scorecard system for 50+ designers that unified expectations and influenced 200+ employees company-wide",
      category: "Performance & Growth",
      link: "/case-studies/talent-development",
      gradient: "blue-purple" as const,
      iconType: "leadership" as const
    },
    {
      title: "Leadership Development Accelerator",
      description: "Mentored design leaders through a structured growth plan that improved retention, confidence, and cross-functional influence",
      category: "Team Development",
      link: "/case-studies/leadership-development",
      gradient: "teal-sapphire" as const,
      iconType: "mentorship" as const
    },
    {
      title: "Strategic Alignment Initiative",
      description: "Aligned design strategy with enterprise modernization, bridging short-term wins with long-term React migration goals",
      category: "Strategic Leadership",
      link: "/case-studies/strategic-alignment",
      gradient: "purple-indigo" as const,
      iconType: "strategy" as const
    },
    {
      title: "Design Projects",
      description: "Product design work from leading enterprise HR technology initiatives including Beti, GONE, Expense Management, Clue, and Time & Attendance tools",
      category: "Product Design",
      link: "/case-studies/design-projects",
      gradient: "blue-cyan" as const,
      iconType: "product" as const
    },
    {
      title: "Figma Make Design System",
      description: "Comprehensive design system exploring modern component architecture, patterns, and accessibility-first design principles",
      category: "Design Systems",
      link: "/case-studies/figma-make",
      gradient: "pink-purple" as const,
      iconType: "design-system" as const
    }
  ]
  
  // Show only first 3 on homepage, all 7 on dedicated page
  const caseStudies = showAll ? allCaseStudies : allCaseStudies.slice(0, 3)

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Case Studies
        </h2>
        <div className={`grid gap-8 ${showAll ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
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
                <p className="text-gray-600 mb-6">{study.description}</p>
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
        {!showAll && (
          <div className="text-center mt-12">
            <a 
              href="/case-studies"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Case Studies
            </a>
          </div>
        )}
      </div>
    </section>
  )
}