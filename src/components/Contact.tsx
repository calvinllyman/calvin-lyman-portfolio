export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Let's Build Something Impactful Together  
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Looking for a design leader who can scale teams, strengthen processes, and elevate product outcomes? 
            I'd love to discuss how my experience in leadership development and cross-functional collaboration can drive results for your organization.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:calvinlyman@gmail.com" 
              className="text-center hover:scale-105 transition-transform duration-200"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300 hover:text-white transition-colors">calvinlyman@gmail.com</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/calvin-lyman-86245525/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center hover:scale-105 transition-transform duration-200"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300 hover:text-white transition-colors">Connect with me</p>
            </a>

            <a 
              href="tel:+14054214220" 
              className="text-center hover:scale-105 transition-transform duration-200"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-300 hover:text-white transition-colors">(405) 421-4220</p>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:calvinlyman@gmail.com?subject=Design%20Leadership%20Opportunity&body=Hi%20Calvin%2C%0A%0AI%27m%20interested%20in%20discussing%20a%20design%20leadership%20opportunity.%20I%27d%20love%20to%20learn%20more%20about%20your%20experience%20in%3A%0A%0A-%20Team%20development%20and%20mentorship%0A-%20Cross-functional%20collaboration%0A-%20Design%20process%20optimization%0A-%20Strategic%20design%20leadership%0A%0ALet%27s%20schedule%20a%20time%20to%20chat%21%0A%0ABest%20regards%2C"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="mailto:calvinlyman@gmail.com?subject=Schedule%20a%20Call%20-%20Design%20Leadership%20Discussion&body=Hi%20Calvin%2C%0A%0AI%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20potential%20collaboration%20opportunities.%20I%27m%20particularly%20interested%20in%20your%20experience%20with%3A%0A%0A-%20Leadership%20development%20at%20scale%0A-%20Design%20team%20operations%0A-%20Cross-functional%20process%20design%0A%0APlease%20let%20me%20know%20your%20availability%20for%20a%2030-minute%20conversation.%0A%0AThank%20you%21"
              className="px-8 py-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
