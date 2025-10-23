'use client'

import { useState } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import TalentDevelopmentCaseStudy from '@/components/TalentDevelopmentCaseStudy'
import LockIcon from '@mui/icons-material/Lock'
import EmailIcon from '@mui/icons-material/Email'

export default function TalentDevelopmentPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'leadershipwithpurpose') {
      setIsAuthenticated(true)
      setIsError(false)
    } else {
      setIsError(true)
      setPassword('')
    }
  }

  if (isAuthenticated) {
    return (
      <>
        <Breadcrumb 
          items={[
            { name: 'Home', href: '/' },
            { name: 'Case Studies', href: '/#case-studies' },
            { name: 'Talent Development Framework', href: '' }
          ]}
        />
        <TalentDevelopmentCaseStudy />
      </>
    )
  }

  return (
    <>
      <Breadcrumb 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '/#case-studies' },
          { name: 'Talent Development Framework', href: '' }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      isError ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
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
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Access Case Study
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm mb-4">
                  Don't have access? Request permission to view this case study.
                </p>
                <a
                  href="mailto:contact@calvinlyman.com?subject=Request for Talent Development Case Study Access"
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
    </>
  )
}