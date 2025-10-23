'use client'

import { useState } from 'react'
import Link from 'next/link'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import WarningIcon from '@mui/icons-material/Warning'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import SpeedIcon from '@mui/icons-material/Speed'
import InfoIcon from '@mui/icons-material/Info'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function DashboardStorytellingPage() {
  const [selectedView, setSelectedView] = useState<'overview' | 'problem' | 'solution'>('overview')
  const [showMetrics, setShowMetrics] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link 
              href="/experiments"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowBackIcon className="w-5 h-5 mr-2" />
              Back to Experiments
            </Link>
          </div>
          <button
            onClick={() => setShowMetrics(!showMetrics)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <InfoIcon className="w-4 h-4" />
            <span>{showMetrics ? 'Hide' : 'Show'} Success Metrics</span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Product Performance Dashboard
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A demonstration of dashboard storytelling through three-act narrative structure: 
              Context → Problem → Solution
            </p>
          </div>

          {/* Story Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-lg shadow-sm border">
              <button
                onClick={() => setSelectedView('overview')}
                className={`px-6 py-3 rounded-l-lg font-medium transition-colors ${
                  selectedView === 'overview' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Act I: Context
              </button>
              <button
                onClick={() => setSelectedView('problem')}
                className={`px-6 py-3 font-medium transition-colors ${
                  selectedView === 'problem' 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900 border-l border-gray-200'
                }`}
              >
                Act II: Problem
              </button>
              <button
                onClick={() => setSelectedView('solution')}
                className={`px-6 py-3 rounded-r-lg font-medium transition-colors ${
                  selectedView === 'solution' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900 border-l border-gray-200'
                }`}
              >
                Act III: Solution
              </button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="bg-white rounded-xl shadow-lg border p-8">
            {selectedView === 'overview' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Setting the Stage</h2>
                  <p className="text-gray-600">Our product ecosystem at a glance - establishing baseline context</p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <PeopleIcon className="w-8 h-8 text-blue-600" />
                      <TrendingUpIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">24.7K</h3>
                    <p className="text-sm text-gray-600">Active Users</p>
                    <p className="text-xs text-green-600 mt-1">+12% vs last month</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <AttachMoneyIcon className="w-8 h-8 text-green-600" />
                      <TrendingUpIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">$127K</h3>
                    <p className="text-sm text-gray-600">Monthly Revenue</p>
                    <p className="text-xs text-green-600 mt-1">+8% vs last month</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <ShoppingCartIcon className="w-8 h-8 text-purple-600" />
                      <TrendingDownIcon className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">2.3%</h3>
                    <p className="text-sm text-gray-600">Conversion Rate</p>
                    <p className="text-xs text-red-600 mt-1">-15% vs last month</p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <SpeedIcon className="w-8 h-8 text-orange-600" />
                      <TrendingDownIcon className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">3.2s</h3>
                    <p className="text-sm text-gray-600">Avg Load Time</p>
                    <p className="text-xs text-red-600 mt-1">+0.8s vs last month</p>
                  </div>
                </div>

                {/* Context Chart */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">30-Day Trend Overview</h3>
                  <div className="h-64 flex items-end justify-between space-x-2">
                    {/* Simplified trend visualization */}
                    {Array.from({ length: 30 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-2 rounded-t ${
                          i < 20 ? 'bg-green-400' : 'bg-red-400'
                        }`}
                        style={{
                          height: `${Math.random() * 200 + 50}px`
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>30 days ago</span>
                    <span>Today</span>
                  </div>
                </div>
              </div>
            )}

            {selectedView === 'problem' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-red-700 mb-2">The Critical Issue</h2>
                  <p className="text-gray-600">Despite growing traffic, our conversion funnel is broken</p>
                </div>

                {/* Problem Visualization */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <WarningIcon className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-lg font-semibold text-red-800">Conversion Funnel Breakdown</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-24 text-sm text-gray-600">Landing</div>
                      <div className="flex-1 bg-blue-200 rounded h-8 relative">
                        <div className="bg-blue-500 h-full rounded w-full flex items-center justify-center text-white text-sm font-medium">
                          100% (24.7K users)
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-24 text-sm text-gray-600">Product View</div>
                      <div className="flex-1 bg-blue-200 rounded h-8 relative">
                        <div className="bg-yellow-500 h-full rounded w-3/4 flex items-center justify-center text-white text-sm font-medium">
                          73% (18.0K users)
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-24 text-sm text-gray-600">Add to Cart</div>
                      <div className="flex-1 bg-blue-200 rounded h-8 relative">
                        <div className="bg-orange-500 h-full rounded w-1/3 flex items-center justify-center text-white text-sm font-medium">
                          32% (7.9K users)
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-24 text-sm text-gray-600">Checkout</div>
                      <div className="flex-1 bg-blue-200 rounded h-8 relative">
                        <div className="bg-red-500 h-full rounded w-1/12 flex items-center justify-center text-white text-sm font-medium">
                          2.3% (567 users)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problem Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-red-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Primary Issues Identified</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Slow page load times (3.2s average)
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        67% cart abandonment rate
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Confusing checkout flow
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Mobile experience degradation
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-orange-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Business Impact</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        $89K monthly revenue loss
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        Declining customer satisfaction
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        Increased support tickets
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        Competitive disadvantage
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {selectedView === 'solution' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Optimized Experience</h2>
                  <p className="text-gray-600">Data-driven solutions delivering measurable results</p>
                </div>

                {/* Solution Overview */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-green-800">Implemented Solutions</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Performance Optimizations</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Image compression and lazy loading</li>
                        <li>• CDN implementation</li>
                        <li>• Code splitting and caching</li>
                        <li>• Database query optimization</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">UX Improvements</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Simplified checkout flow</li>
                        <li>• Mobile-first responsive design</li>
                        <li>• Clear progress indicators</li>
                        <li>• Guest checkout option</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <TrendingUpIcon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-green-700">4.7%</h3>
                    <p className="text-sm text-gray-600">Conversion Rate</p>
                    <p className="text-xs text-green-600 mt-1">+104% improvement</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <SpeedIcon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-green-700">1.1s</h3>
                    <p className="text-sm text-gray-600">Avg Load Time</p>
                    <p className="text-xs text-green-600 mt-1">-66% improvement</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <AttachMoneyIcon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-green-700">$216K</h3>
                    <p className="text-sm text-gray-600">Monthly Revenue</p>
                    <p className="text-xs text-green-600 mt-1">+70% increase</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <PeopleIcon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-green-700">92%</h3>
                    <p className="text-sm text-gray-600">User Satisfaction</p>
                    <p className="text-xs text-green-600 mt-1">+34% improvement</p>
                  </div>
                </div>

                {/* Future Roadmap */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Personalization</h4>
                      <p className="text-sm text-gray-600">AI-powered product recommendations</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Analytics</h4>
                      <p className="text-sm text-gray-600">Advanced user behavior tracking</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <h4 className="font-medium text-gray-900 mb-2">A/B Testing</h4>
                      <p className="text-sm text-gray-600">Continuous optimization framework</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Success Metrics Explanation */}
          {showMetrics && (
            <div className="mt-8 bg-white rounded-xl shadow-lg border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How to Measure Dashboard Success
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    1. User Engagement Metrics
                  </h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• <strong>Time to Insight:</strong> How quickly users find actionable information (target: &lt;30 seconds)</li>
                    <li>• <strong>Click-through Rate:</strong> Percentage of users who take action after viewing (target: &gt;15%)</li>
                    <li>• <strong>Return Usage:</strong> How often users come back to the dashboard (target: weekly)</li>
                    <li>• <strong>Session Duration:</strong> Time spent analyzing data vs. just browsing (quality over quantity)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    2. Decision Impact Metrics
                  </h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• <strong>Action Conversion:</strong> Percentage of insights that lead to business decisions</li>
                    <li>• <strong>Time to Decision:</strong> Speed of decision-making after viewing dashboard data</li>
                    <li>• <strong>Decision Quality:</strong> Track outcomes of decisions made using dashboard insights</li>
                    <li>• <strong>Stakeholder Alignment:</strong> Measure consensus and shared understanding across teams</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    3. Narrative Effectiveness
                  </h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• <strong>Story Completion Rate:</strong> Users who progress through all three narrative acts</li>
                    <li>• <strong>Comprehension Score:</strong> User testing for understanding of key insights</li>
                    <li>• <strong>Cognitive Load:</strong> Measure mental effort required to process information</li>
                    <li>• <strong>Emotional Resonance:</strong> User confidence and motivation after viewing dashboard</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    4. Technical Performance
                  </h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• <strong>Load Time:</strong> Dashboard initial render time (target: &lt;2 seconds)</li>
                    <li>• <strong>Data Freshness:</strong> How current the displayed information is</li>
                    <li>• <strong>Error Rates:</strong> Failed data loads or visualization rendering issues</li>
                    <li>• <strong>Mobile Usability:</strong> Cross-device experience consistency</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Success Framework Summary
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A successful dashboard tells a clear story that leads to confident decisions. 
                    Measure not just usage, but comprehension, action, and business impact.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Key Success Indicator:</strong> The dashboard is successful when stakeholders 
                    can independently identify problems, understand context, and take appropriate 
                    action without additional explanation or support.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}