export default function Experience() {
  const experiences = [
    {
      role: "Director of Product Design",
      company: "Paycom",
      period: "2022 - Present",
      achievements: [
        "Led design organization across 5 product portfolios with lean team at 1:4 designer-to-PM ratio",
        "Developed 5 Team Leads through individualized coaching, creating scalable leadership foundation",
        "Designed cross-functional framework transforming Product-Design collaboration and communication",
        "Led teams through organizational restructuring with zero attrition and 100% project continuity"
      ]
    },
    {
      role: "Senior Product Designer → Team Lead",
      company: "Paycom", 
      period: "2019 - 2022",
      achievements: [
        "Stepped up during leadership gap, creating documentation systems and proactive reporting",
        "Transitioned to management role, establishing communication plans during organizational change",
        "Built central source of truth systems that became foundation for team operations",
        "Demonstrated crisis leadership capabilities leading to director-level advancement"
      ]
    },
    {
      role: "Senior Product Designer",
      company: "Previous Companies",
      period: "2015 - 2019",
      achievements: [
        "Designed end-to-end user experiences for complex B2B and enterprise products",
        "Built strong design foundations and cross-functional collaboration skills",
        "Developed expertise in user research, interaction design, and design systems",
        "Established reputation for quality delivery and strategic design thinking"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <span className="text-blue-600 font-semibold">{exp.period}</span>
                </div>
                <h4 className="text-lg text-gray-700 mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}