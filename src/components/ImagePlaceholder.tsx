interface ImagePlaceholderProps {
  title: string
  subtitle?: string
  gradient: 'blue-purple' | 'green-emerald' | 'red-rose'
  icon?: string
}

const gradientMap = {
  'blue-purple': 'from-blue-500 to-purple-600',
  'green-emerald': 'from-green-500 to-emerald-600', 
  'red-rose': 'from-red-500 to-rose-600'
}

export default function ImagePlaceholder({ title, subtitle, gradient, icon = "📊" }: ImagePlaceholderProps) {
  return (
    <div className={`h-48 bg-gradient-to-br ${gradientMap[gradient]} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative h-full flex items-center justify-center text-center text-white p-4">
        <div>
          <div className="text-4xl mb-2">{icon}</div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
        </div>
      </div>
      <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm rounded px-2 py-1">
        <span className="text-xs text-white">Professional Image Area</span>
      </div>
    </div>
  )
}