import Breadcrumb from '@/components/Breadcrumb'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import PodcastsIcon from '@mui/icons-material/Podcasts'
import ArticleIcon from '@mui/icons-material/Article'
import LanguageIcon from '@mui/icons-material/Language'
import GroupsIcon from '@mui/icons-material/Groups'
import DesignServicesIcon from '@mui/icons-material/DesignServices'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Resources', href: '/resources' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Design Leadership Resources
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              A curated collection of books, tools, and frameworks that shaped my approach to scaling design organizations
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Include This?</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed mb-4">
                  <strong className="text-gray-900">Great design leaders aren't just practitioners—they're continuous learners.</strong> This collection represents the frameworks, research, and voices that have shaped how I think about scaling design teams, building systems, and leading with empathy.
                </p>
                <p className="leading-relaxed mb-4">
                  From <em>Org Design for Design Orgs</em> teaching me how to structure teams, to <em>Extreme Ownership</em> reinforcing accountability in cross-functional work, to the W3C's accessibility guidelines ensuring inclusive experiences—these resources directly influenced the case studies you see in my portfolio.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-gray-900">I believe transparency matters.</strong> Sharing what informs my work demonstrates how I approach problems, stay current, and ensure my leadership is grounded in research rather than assumptions. If these resources resonate with you, we'll likely speak the same language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">

            {/* Design Leadership & Systems Thinking */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧭</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Design Leadership & Systems Thinking</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ResourceCard
                  title="Design Leadership Ignited: Elevating Design at Scale"
                  type="Book"
                  icon={<MenuBookIcon />}
                  description="Research-backed playbook for structuring, scaling, and maturing design orgs inside large companies."
                  link="https://www.amazon.com/Design-Leadership-Ignited-Elevating-Scale/dp/1736583301"
                />
                <ResourceCard
                  title="Leaders Eat Last"
                  author="Simon Sinek"
                  type="Book"
                  icon={<MenuBookIcon />}
                  description="Builds the case for servant leadership, trust, and culture rooted in empathy."
                  link="https://www.amazon.com/Leaders-Eat-Last-Together-Others/dp/1591848016"
                />
                <ResourceCard
                  title="Extreme Ownership"
                  author="Jocko Willink & Leif Babin"
                  type="Book"
                  icon={<MenuBookIcon />}
                  description="Framework for total accountability—powerful for cross-functional execution."
                  link="https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs/dp/1250067057"
                />
                <ResourceCard
                  title="Org Design for Design Orgs"
                  author="Peter Merholz & Kristin Skinner"
                  type="Book"
                  icon={<MenuBookIcon />}
                  description="The definitive reference for designing and scaling design teams."
                  link="https://www.amazon.com/Org-Design-Orgs-Building-House/dp/1491938404"
                />
                <ResourceCard
                  title="The Making of a Manager"
                  author="Julie Zhuo"
                  type="Book"
                  icon={<MenuBookIcon />}
                  description="Practical, human-centered guide for developing managers and building confidence."
                  link="https://www.amazon.com/Making-Manager-What-Everyone-Looks/dp/0735219567"
                />
                <ResourceCard
                  title="Design Better Podcast"
                  author="InVision"
                  type="Podcast"
                  icon={<PodcastsIcon />}
                  description="Conversations with leaders on scaling craft, process, and culture."
                  link="https://www.designbetter.co/podcast"
                />
                <ResourceCard
                  title="Designing Design Orgs Newsletter"
                  author="Peter Merholz"
                  type="Newsletter"
                  icon={<ArticleIcon />}
                  description="Actionable essays on ladders, org structure, and culture."
                  link="https://designingdesignorgs.substack.com/"
                />
                <ResourceCard
                  title="The Manager's Path"
                  author="Camille Fournier"
                  type="Book"
                  icon={<MenuBookIcon />}
                  description="Clear framework for mentoring, delegation, and cross-disciplinary leadership."
                  link="https://www.amazon.com/Managers-Path-Leaders-Navigating-Growth/dp/1491973897"
                />
              </div>
            </div>

            {/* Systems & Enterprise Product Design */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Systems & Enterprise Product Design</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ResourceCard
                  title="Designing Data-Intensive Applications"
                  author="Martin Kleppmann"
                  type="Book"
                  icon={<MenuBookIcon />}
                  description="Deep technical insight for UX leaders designing data-rich systems."
                  link="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321"
                />
                <ResourceCard
                  title="IBM Carbon Design System"
                  type="Design System"
                  icon={<DesignServicesIcon />}
                  description="Enterprise-grade model for modularity, governance, and accessibility."
                  link="https://carbondesignsystem.com/"
                />
                <ResourceCard
                  title="Salesforce Lightning Design System"
                  type="Design System"
                  icon={<DesignServicesIcon />}
                  description="Example of scalable, accessible, pattern-based enterprise design."
                  link="https://www.lightningdesignsystem.com/"
                />
                <ResourceCard
                  title="Atomic Design"
                  author="Brad Frost"
                  type="Book / Website"
                  icon={<LanguageIcon />}
                  description="Foundation for modular thinking and component hierarchies."
                  link="https://atomicdesign.bradfrost.com/"
                />
                <ResourceCard
                  title="Design Systems Handbook"
                  author="DesignBetter.co"
                  type="Handbook"
                  icon={<MenuBookIcon />}
                  description="Strategic look at aligning design systems with business outcomes."
                  link="https://www.designbetter.co/design-systems-handbook"
                />
              </div>
            </div>

            {/* Accessibility, Performance & Internationalization */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Accessibility, Performance & Internationalization</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ResourceCard
                  title="W3C Web Accessibility Initiative (WAI)"
                  type="Standards / Guidelines"
                  icon={<LanguageIcon />}
                  description="Authoritative resource for WCAG 2.x and inclusive design best practices."
                  link="https://www.w3.org/WAI/"
                />
                <ResourceCard
                  title="Designing Accessible Interfaces"
                  author="Heydon Pickering"
                  type="Articles / Book"
                  icon={<MenuBookIcon />}
                  description="Practical, example-driven guide to accessibility within components."
                  link="https://inclusive-components.design/"
                />
                <ResourceCard
                  title="Material Design 3 Accessibility & Motion"
                  type="Guidelines"
                  icon={<LanguageIcon />}
                  description="Great reference for balancing accessibility with motion and delight."
                  link="https://m3.material.io/foundations/accessibility"
                />
                <ResourceCard
                  title="Smashing Magazine Localization Series"
                  type="Article Series"
                  icon={<ArticleIcon />}
                  description="How to build products that scale across languages and cultures."
                  link="https://www.smashingmagazine.com/category/internationalization"
                />
                <ResourceCard
                  title="Web.dev Performance"
                  author="Google"
                  type="Learning Series"
                  icon={<LanguageIcon />}
                  description="Research-backed lessons on optimizing perceived and actual performance."
                  link="https://web.dev/learn/performance"
                />
              </div>
            </div>

            {/* Cross-Functional Collaboration */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Cross-Functional Collaboration (PM / Eng / Design)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ResourceCard
                  title="Shape Up"
                  author="Basecamp"
                  type="Book / Playbook"
                  icon={<MenuBookIcon />}
                  description="Lightweight framework for scoped bets, shaping work, and avoiding burnout."
                  link="https://basecamp.com/shapeup"
                />
                <ResourceCard
                  title="Escaping the Build Trap"
                  author="Melissa Perri"
                  type="Book"
                  icon={<MenuBookIcon />}
                  description="Moves teams from feature-factory output to outcome-driven impact."
                  link="https://www.amazon.com/Escaping-Build-Trap-Effective-Management/dp/149197379X"
                />
                <ResourceCard
                  title="Inspired / Empowered"
                  author="Marty Cagan"
                  type="Books"
                  icon={<MenuBookIcon />}
                  description="Canonical texts for building empowered, collaborative product teams."
                  link="https://www.svpg.com/books/"
                />
                <ResourceCard
                  title="Atlassian Team Playbook"
                  type="Toolkit"
                  icon={<GroupsIcon />}
                  description="Free, field-tested exercises for improving team alignment and rituals."
                  link="https://www.atlassian.com/team-playbook"
                />
              </div>
            </div>

            {/* Consistency Across Platforms & Devices */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Consistency Across Platforms & Devices</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ResourceCard
                  title="Refactoring UI"
                  author="Steve Schoger & Adam Wathan"
                  type="Book"
                  icon={<MenuBookIcon />}
                  description="Developer-friendly visual design principles for system consistency."
                  link="https://www.refactoringui.com/"
                />
                <ResourceCard
                  title="Material Design 3"
                  type="Guidelines"
                  icon={<LanguageIcon />}
                  description="Modern cross-platform design framework emphasizing adaptability."
                  link="https://m3.material.io/"
                />
                <ResourceCard
                  title="Apple Human Interface Guidelines"
                  type="Guidelines"
                  icon={<LanguageIcon />}
                  description="Clear, timeless patterns for native app experiences."
                  link="https://developer.apple.com/design/human-interface-guidelines"
                />
                <ResourceCard
                  title="Microsoft Fluent 2"
                  type="Design System"
                  icon={<DesignServicesIcon />}
                  description="Example of responsive, token-driven multi-platform design."
                  link="https://fluent2.microsoft.design/"
                />
                <ResourceCard
                  title="Tokens Studio (Figma Plugin)"
                  type="Tool"
                  icon={<DesignServicesIcon />}
                  description="Enables scalable design tokens for cross-platform consistency."
                  link="https://tokens.studio/"
                />
              </div>
            </div>

            {/* Continuous Learning & Inspiration */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Continuous Learning & Inspiration</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ResourceCard
                  title="Nielsen Norman Group (NN/g)"
                  type="Articles / Videos"
                  icon={<ArticleIcon />}
                  description="Research-driven UX insights and enterprise heuristics."
                  link="https://www.nngroup.com/"
                />
                <ResourceCard
                  title="A List Apart"
                  type="Articles"
                  icon={<ArticleIcon />}
                  description="Essays on accessibility, standards, and content strategy."
                  link="https://alistapart.com/"
                />
                <ResourceCard
                  title="DesignX Community"
                  type="Community / Events"
                  icon={<GroupsIcon />}
                  description="Focused on enterprise and B2B design practice."
                  link="https://designxcommunity.com/"
                />
                <ResourceCard
                  title="Articulating Design Decisions"
                  author="Tom Greever"
                  type="Book"
                  icon={<MenuBookIcon />}
                  description="Excellent for teaching designers how to speak business language."
                  link="https://www.amazon.com/Articulating-Design-Decisions-Communicate-Stakeholders/dp/1491921560"
                />
                <ResourceCard
                  title="Design Systems Newsletter"
                  author="Jina Anne"
                  type="Newsletter"
                  icon={<ArticleIcon />}
                  description="Practical insights on scaling and governing design systems."
                  link="https://designsystems.surf/"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <a 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group transition-colors"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

interface ResourceCardProps {
  title: string
  author?: string
  type: string
  icon: React.ReactNode
  description: string
  link: string
}

function ResourceCard({ title, author, type, icon, description, link }: ResourceCardProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-indigo-400 group"
    >
      <div className="flex items-start mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 text-indigo-600 group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">
            {title}
          </h3>
          {author && (
            <p className="text-sm text-gray-600 mb-1">{author}</p>
          )}
          <span className="inline-block text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">
            {type}
          </span>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
      <div className="mt-3 flex items-center text-sm text-indigo-600 group-hover:text-indigo-800 font-medium">
        Visit Resource
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  )
}
