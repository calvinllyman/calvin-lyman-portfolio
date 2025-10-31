'use client'

import { useState } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import DesignProjectsCaseStudy from '@/components/DesignProjectsCaseStudy'
import LockIcon from '@mui/icons-material/Lock'
import EmailIcon from '@mui/icons-material/Email'

export default function DesignProjectsPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check - in production, this should be more secure
    if (password === 'leadershipwithpurpose') {
      setIsAuthenticated(true)
      setIsError(false)
    } else {
      setIsError(true)
      setPassword('')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Breadcrumb 
          items={[
            { name: 'Home', href: '/' },
            { name: 'Case Studies', href: '/#case-studies' },
            { name: 'Design Projects', href: '/case-studies/design-projects' }
          ]} 
        />
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LockIcon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Protected Case Study</h1>
                <p className="text-gray-600">
                  This case study contains confidential information and requires a password to view.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter password"
                    required
                  />
                  {isError && (
                    <p className="mt-2 text-sm text-red-600">
                      Incorrect password. Please try again.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-800 transition-all duration-200"
                >
                  Access Case Study
                </button>
              </form>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Need Access?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  This case study contains confidential enterprise information. If you'd like to review this work, please contact me for the password.
                </p>
                <a
                  href="mailto:contact@calvinlyman.com?subject=Request for Design Projects Case Study Access"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  <EmailIcon className="w-4 h-4 mr-2" />
                  Request Access
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <DesignProjectsCaseStudy />
}
