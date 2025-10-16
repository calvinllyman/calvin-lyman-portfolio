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
    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      <circle cx="12" cy="12" r="3" fill="white" opacity="0.3"/>
    </svg>
  ),
  leadership: (
    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0018.5 7H17c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v6h2z"/>
      <path d="M12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z"/>
      <path d="M5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9l-1.5-4.5C7.2 9.7 6.5 9 5.5 9S3.8 9.7 3.5 10.5L2 15h1.5v7h4z"/>
    </svg>
  ),
  crisis: (
    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      <path d="M12 6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S10.5 8.83 10.5 8s.67-1.5 1.5-1.5z" opacity="0.3"/>
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