'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProfileImageProps {
  className?: string
}

export default function ProfileImage({ className = "w-full h-full object-contain" }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false)
  
  if (imageError) {
    // Fallback placeholder
    return (
      <div className={`${className} bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center`}>
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-3xl font-bold">CL</span>
          </div>
          <p className="text-gray-600 font-medium">Calvin Lyman</p>
          <p className="text-gray-700 text-sm mt-1">Design Leader</p>
        </div>
      </div>
    )
  }
  
  return (
    <Image
      src="/images/IMG_5341.png"
      alt="Calvin Lyman - Design Leader"
      width={400}
      height={400}
      className={className}
      priority
      onError={() => setImageError(true)}
    />
  )
}