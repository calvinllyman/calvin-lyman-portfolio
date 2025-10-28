import ExploreIcon from '@mui/icons-material/Explore'
import SecurityIcon from '@mui/icons-material/Security'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import GroupsIcon from '@mui/icons-material/Groups'

interface ImagePlaceholderProps {
  gradient: 'blue-purple' | 'green-emerald' | 'red-rose' | 'purple-indigo' | 'teal-sapphire'
  iconType: 'framework' | 'leadership' | 'crisis' | 'strategy' | 'mentorship'
}

const gradientMap = {
  'blue-purple': 'from-blue-600 via-blue-500 to-purple-600',
  'green-emerald': 'from-green-600 via-emerald-500 to-teal-600', 
  'red-rose': 'from-red-600 via-red-500 to-rose-600',
  'purple-indigo': 'from-purple-600 via-indigo-500 to-violet-600',
  'teal-sapphire': 'from-teal-600 via-cyan-500 to-sky-600'
}

const iconMap = {
  strategy: <ExploreIcon sx={{ fontSize: 64, color: 'white' }} />,
  framework: <SecurityIcon sx={{ fontSize: 64, color: 'white' }} />,
  leadership: <TrendingUpIcon sx={{ fontSize: 64, color: 'white' }} />,
  crisis: <CheckCircleIcon sx={{ fontSize: 64, color: 'white' }} />,
  mentorship: <GroupsIcon sx={{ fontSize: 64, color: 'white' }} />
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