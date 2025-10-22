export default function Experience() {
  const experiences = [
    {
      role: "Manager of Product Design",
      company: "Paycom, LLC",
      period: "2023 - 2025",
      achievements: [
        "Directed multiple design teams, empowering Team Leads and ICs to deliver consistent, high-quality work across a global HCM platform",
        "Shaped design strategy for several industry-defining tools such as Gone™, and iWant™",
        "Established scalable operations (intake processes, Jira-based reporting, design quality guide), improving efficiency and accountability",
        "Strengthened cross-functional partnerships with Product, Development, and QA, reducing silos and elevating design's role in decision-making",
        "Navigated organizational change with empathy and clarity, ensuring alignment and sustained team engagement"
      ]
    },
    {
      role: "Product Design Team Lead",
      company: "Paycom, LLC", 
      period: "2020 - 2023",
      achievements: [
        "Led strategic design initiatives for products including BETI®, Clue®, Vault™, and others",
        "Scaled team capacity during reorganization, ensuring delivery of critical projects despite fluctuating staffing levels",
        "Mentored and coached designers, strengthening team culture and elevating design quality across portfolios",
        "Championed centralized design systems and templates, enabling scalability across multiple product teams"
      ]
    },
    {
      role: "Senior Product Designer",
      company: "Paycom, LLC",
      period: "2020",
      achievements: [
        "Provided design direction and mentorship during a leadership transition, stabilizing workflows and supporting team delivery",
        "Elevated design's influence in the product lifecycle, securing earlier and more strategic involvement"
      ]
    },
    {
      role: "Product Designer / UI Designer",
      company: "Paycom, LLC",
      period: "2017 - 2020",
      achievements: [
        "Designed and delivered a high volume of product features across enterprise platform while applying rigorous design principles",
        "Built strong cross-functional connections across Product, Development, QA, Marketing, and Legal",
        "Directed design strategy for enterprise features adopted by thousands of clients, improving payroll accuracy and user confidence"
      ]
    },
    {
      role: "Web Marketing Assistant",
      company: "Keith May Real Estate",
      period: "2013 - 2017",
      achievements: [
        "Led web marketing strategy and execution to support business growth"
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