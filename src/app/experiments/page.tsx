import Link from 'next/link'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SettingsIcon from '@mui/icons-material/Settings'

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Design Experiments
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring the intersection of innovative design trends and accessibility standards. 
              Each experiment examines how we can maintain visual appeal while ensuring inclusive user experiences.
            </p>
          </div>

          {/* Experiment Cards */}
          <div className="grid gap-8">
            {/* Glassmorphism Accessibility Experiment */}
            <Link 
              href="/experiments/accessible-glassmorphism"
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <VisibilityIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Glassmorphism & Accessibility
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">Interactive Experiment</p>
                    </div>
                  </div>
                  <ArrowForwardIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Can glassmorphism be truly inclusive? This interactive experiment demonstrates 
                  the accessibility challenges of frosted glass UI effects and showcases solutions 
                  that maintain visual appeal while meeting WCAG 2.2 standards.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    WCAG 2.2 Compliance
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    Interactive Toggles
                  </span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    Screen Reader Testing
                  </span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                    Contrast Analysis
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What You'll Explore:</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Side-by-side comparison of accessible vs. non-accessible implementations</li>
                    <li>• Real-time contrast ratio measurements and WCAG compliance indicators</li>
                    <li>• Motion sensitivity controls and reduced transparency options</li>
                    <li>• Screen reader compatibility demonstrations</li>
                  </ul>
                </div>
              </div>
            </Link>

            {/* Dashboard Storytelling Experiment - Coming Soon */}
            {/* 
            <Link 
              href="/experiments/dashboard-storytelling"
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <SettingsIcon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        Dashboard Storytelling
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">Data Narrative Design</p>
                    </div>
                  </div>
                  <ArrowForwardIcon className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How do you tell compelling stories with data? This experiment demonstrates a 
                  product performance dashboard that guides users through a clear narrative flow, 
                  from high-level insights to actionable details, with built-in success metrics.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                    Narrative Flow
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    Progressive Disclosure
                  </span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    Success Metrics
                  </span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                    Actionable Insights
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What You'll Explore:</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Three-act narrative structure: Context → Problem → Solution</li>
                    <li>• Progressive disclosure from overview to detailed insights</li>
                    <li>• Success measurement framework for dashboard effectiveness</li>
                    <li>• Interactive elements that guide user attention and decision-making</li>
                  </ul>
                </div>
              </div>
            </Link>
            */}

            {/* Placeholder for Future Experiments */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-200">
              <div className="text-center">
                <SettingsIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">More Experiments Coming Soon</h3>
                <p className="text-gray-500">
                  Future explorations in inclusive design trends, emerging accessibility patterns, 
                  and innovative solutions for complex design challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Portfolio */}
          <div className="text-center mt-16">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}