interface ImagePlaceholderProps {
  gradient: 'blue-purple' | 'green-emerald' | 'red-rose'
  iconType: 'framework' | 'leadership' | 'crisis'
}

const gradientMap = {
  'blue-purple': 'from-blue-600 via-blue-500 to-purple-600',
  'green-emerald': 'from-green-600 via-emerald-500 to-teal-600', 
  'red-rose': 'from-red-600 via-red-500 to-rose-600'
}

const iconMap = {
  framework: (
    // Collaboration Framework - Interconnected workflow/process design
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      <circle cx="7" cy="7" r="2" fill="white" opacity="0.6"/>
      <circle cx="17" cy="7" r="2" fill="white" opacity="0.6"/>
      <circle cx="12" cy="17" r="2" fill="white" opacity="0.6"/>
      <path d="M7 9l5 6M17 9l-5 6" stroke="white" strokeWidth="1" opacity="0.4"/>
    </svg>
  ),
  leadership: (
    // Leadership Development - Growth/mentorship with upward trajectory
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      <circle cx="5" cy="5" r="2" fill="white" opacity="0.7"/>
      <circle cx="9" cy="9" r="2" fill="white" opacity="0.7"/>
      <circle cx="13" cy="13" r="2" fill="white" opacity="0.7"/>
      <circle cx="17" cy="17" r="2" fill="white" opacity="0.7"/>
      <path d="M5 7v10M9 11v6M13 15v2" stroke="white" strokeWidth="2" opacity="0.5"/>
    </svg>
  ),
  crisis: (
    // Crisis Leadership - Steady guidance through uncertainty
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
      <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="12" cy="6" r="1.5" fill="white" opacity="0.8"/>
      <path d="M12 8.5v3" stroke="white" strokeWidth="2" opacity="0.6"/>
    </svg>
  )
}

export default function ImagePlaceholder({ gradient, iconType }: ImagePlaceholderProps) {
  const patternId = `pattern-${gradient}-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className={`h-48 bg-gradient-to-br ${gradientMap[gradient]} relative overflow-hidden`}>
      {/* Professional background pattern */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="transparent"/>
            <circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`}/>
      </svg>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
      
      {/* Visual Icon Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white p-6">
        <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 shadow-lg">
          {iconMap[iconType]}
        </div>
      </div>
      
      {/* Professional corner accents */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
      <div className="absolute top-8 left-6 w-1 h-1 bg-white/15 rounded-full"></div>
    </div>
  )
}