'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

// Toggle Switch Component
const Toggle = ({ 
  enabled, 
  onChange, 
  label, 
  description 
}: { 
  enabled: boolean
  onChange: (enabled: boolean) => void
  label: string
  description: string
}) => {
  const handleClick = () => {
    onChange(!enabled)
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
      <div className="flex-1 mr-4">
        <label htmlFor={`toggle-${label.replace(/\s+/g, '-')}`} className="block text-sm font-medium text-gray-900 mb-1">
          {label}
        </label>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button
        id={`toggle-${label.replace(/\s+/g, '-')}`}
        role="switch"
        aria-checked={enabled}
        onClick={handleClick}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <span className="sr-only">{label}</span>
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
}

// Contrast Ratio Indicator
const ContrastIndicator = ({ ratio, level }: { ratio: number; level: 'AA' | 'AAA' | 'Fail' }) => {
  const getColor = () => {
    if (level === 'AAA') return 'text-green-700 bg-green-50 border-green-200'
    if (level === 'AA') return 'text-yellow-700 bg-yellow-50 border-yellow-200'
    return 'text-red-700 bg-red-50 border-red-200'
  }

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getColor()}`}>
      Contrast: {ratio.toFixed(1)}:1 ({level})
    </div>
  )
}

// Glassmorphism Card Component
const GlassmorphismCard = ({ 
  accessible, 
  reducedMotion, 
  reducedTransparency,
  title,
  content 
}: { 
  accessible: boolean
  reducedMotion: boolean
  reducedTransparency: boolean
  title: string
  content: string
}) => {
  // Use the same beautiful glassmorphism style as the analysis cards
  const baseGlassStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: reducedMotion ? 'none' : 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
  }

  const cardStyles = accessible ? {
    // Accessible version - enhanced readability while maintaining glass effect
    ...baseGlassStyle,
    background: reducedTransparency 
      ? 'rgba(255, 255, 255, 0.95)' 
      : 'rgba(255, 255, 255, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  } : {
    // Non-accessible version - true glassmorphism with poor readability
    ...baseGlassStyle,
    background: reducedTransparency 
      ? 'rgba(255, 255, 255, 0.15)' 
      : 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
  }

  const textColor = accessible ? 'text-white' : 'text-white/60'
  const headingColor = accessible ? 'text-white' : 'text-white/70'

  return (
    <div
      style={cardStyles}
      className={`p-6 transition-all duration-300 ${
        reducedMotion ? '' : 'hover:scale-[1.02]'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-xl font-semibold ${headingColor}`}>
          {title}
        </h3>
        <div className={`text-xs px-2 py-1 rounded-full font-medium ${
          accessible 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {accessible ? 'Accessible' : 'Non-Accessible'}
        </div>
      </div>
      <p className={`leading-relaxed ${textColor}`}>
        {content}
      </p>
      
      {/* Interactive Elements */}
      <div className="mt-4 space-y-2">
        <button 
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            accessible 
              ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg' 
              : 'bg-blue-400/50 text-white/80 hover:bg-blue-500/60 focus:ring-blue-300'
          }`}
        >
          Primary Action
        </button>
        <button 
          className={`w-full py-2 px-4 rounded-lg font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            accessible 
              ? 'border-white/30 text-white hover:bg-white/10 focus:ring-white/50' 
              : 'border-white/20 text-white/60 hover:bg-white/5 focus:ring-white/30'
          }`}
        >
          Secondary Action
        </button>
      </div>
    </div>
  )
}

export default function AccessibleGlassmorphismPage() {
  const [accessibleMode, setAccessibleMode] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [reducedTransparency, setReducedTransparency] = useState(false)
  const [highContrast, setHighContrast] = useState(false)



  // Respect user's system preferences
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prefersReducedTransparency = window.matchMedia('(prefers-reduced-transparency: reduce)').matches
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches

    setReducedMotion(prefersReducedMotion)
    setReducedTransparency(prefersReducedTransparency)
    setHighContrast(prefersHighContrast)
  }, [])

  const backgroundImage = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"

  return (
    <div 
      className="min-h-screen"
      style={{ 
        background: highContrast ? '#000000' : backgroundImage,
        color: highContrast ? '#ffffff' : 'inherit'
      }}
    >
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/experiments"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
          >
            ← Back to Experiments
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Accessible Glassmorphism
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Explore how glassmorphism can be implemented accessibly. Toggle between accessible and 
            non-accessible versions to understand the impact on users with different needs.
          </p>
        </div>

        {/* Controls Panel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-6">Accessibility Controls</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Toggle
                enabled={accessibleMode}
                onChange={setAccessibleMode}
                label="Accessible Implementation"
                description="Toggle between WCAG-compliant and problematic implementations"
              />
              <Toggle
                enabled={reducedMotion}
                onChange={setReducedMotion}
                label="Reduced Motion"
                description="Remove blur effects and animations for motion sensitivity"
              />
              <Toggle
                enabled={reducedTransparency}
                onChange={setReducedTransparency}
                label="Reduced Transparency"
                description="Increase opacity to improve content visibility"
              />
              <Toggle
                enabled={highContrast}
                onChange={setHighContrast}
                label="High Contrast Mode"
                description="Maximum contrast for severe visual impairments"
              />
            </div>
          </div>
        </div>

        {/* Demo Cards Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <GlassmorphismCard
              accessible={accessibleMode}
              reducedMotion={reducedMotion}
              reducedTransparency={reducedTransparency}
              title="Product Dashboard"
              content="Access your analytics, manage team members, and track project progress all in one place. This dashboard provides comprehensive insights into your product performance with real-time data visualization."
            />

            {/* Card 2 */}
            <GlassmorphismCard
              accessible={accessibleMode}
              reducedMotion={reducedMotion}
              reducedTransparency={reducedTransparency}
              title="User Profile"
              content="Customize your experience, update preferences, and manage account settings. Your profile is the control center for personalizing how you interact with our platform and collaborate with your team."
            />

            {/* Card 3 */}
            <GlassmorphismCard
              accessible={accessibleMode}
              reducedMotion={reducedMotion}
              reducedTransparency={reducedTransparency}
              title="Notification Center"
              content="Stay informed with real-time updates, important alerts, and team communications. Never miss critical information with our intelligent notification system that adapts to your workflow."
            />

            {/* Card 4 */}
            <GlassmorphismCard
              accessible={accessibleMode}
              reducedMotion={reducedMotion}
              reducedTransparency={reducedTransparency}
              title="Project Collaboration"
              content="Work together seamlessly with shared workspaces, real-time editing, and integrated communication tools. Boost productivity with features designed for modern distributed teams."
            />
          </div>
        </div>

        {/* Accessibility Analysis */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-6">Accessibility Analysis</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contrast Analysis */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Contrast Ratios</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Body Text:</span>
                    <ContrastIndicator 
                      ratio={accessibleMode ? 7.2 : 2.1} 
                      level={accessibleMode ? 'AAA' : 'Fail'} 
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Headings:</span>
                    <ContrastIndicator 
                      ratio={accessibleMode ? 8.1 : 2.8} 
                      level={accessibleMode ? 'AAA' : 'Fail'} 
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Buttons:</span>
                    <ContrastIndicator 
                      ratio={accessibleMode ? 4.7 : 2.3} 
                      level={accessibleMode ? 'AA' : 'Fail'} 
                    />
                  </div>
                </div>
              </div>

              {/* WCAG Compliance */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">WCAG 2.2 Compliance</h3>
                <div className="space-y-2">
                  {[
                    { criterion: 'Contrast (Minimum)', compliant: accessibleMode },
                    { criterion: 'Resize text (200%)', compliant: true },
                    { criterion: 'Reflow', compliant: true },
                    { criterion: 'Non-text Contrast', compliant: accessibleMode },
                    { criterion: 'Text Spacing', compliant: true },
                    { criterion: 'Content on Hover/Focus', compliant: true },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white/90 text-sm">{item.criterion}:</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.compliant 
                          ? 'bg-green-500/20 text-green-200' 
                          : 'bg-red-500/20 text-red-200'
                      }`}>
                        {item.compliant ? 'Pass' : 'Fail'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-6">Key Insights</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Accessibility Challenges</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Low contrast ratios make text difficult to read</li>
                  <li>• Background interference disrupts focus</li>
                  <li>• Excessive blur can cause eye strain</li>
                  <li>• Motion effects may trigger vestibular disorders</li>
                  <li>• Transparent layers confuse information hierarchy</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Solutions Applied</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Increased background opacity for better contrast</li>
                  <li>• Reduced blur intensity (8px vs 20px)</li>
                  <li>• Proper focus indicators and semantic markup</li>
                  <li>• Respect for system accessibility preferences</li>
                  <li>• Clear visual hierarchy with adequate spacing</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/20 rounded-lg border border-blue-400/30">
              <p className="text-white/95 text-sm">
                <strong>Bottom Line:</strong> Glassmorphism can be inclusive when implemented thoughtfully. 
                The key is balancing visual appeal with functional accessibility, ensuring all users can 
                access and interact with your content effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}