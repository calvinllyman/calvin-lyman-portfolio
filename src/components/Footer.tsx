import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">CL</span>
            </div>
            <span className="font-semibold">Calvin Lyman</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Calvin Lyman. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Purpose-Driven Design Leader
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/#about" className="hover:text-white transition-colors">About</a>
              <a href="/#case-studies" className="hover:text-white transition-colors">Case Studies</a>
              <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
              <a href="/experiments" className="hover:text-white transition-colors">Experiments</a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="mailto:calvinlyman@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/calvin-lyman-86245525/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}