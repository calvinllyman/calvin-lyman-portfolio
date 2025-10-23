import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'

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
                <EmailIcon className="w-8 h-8 text-white" />
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
                <LinkedInIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300 hover:text-white transition-colors">Connect with me</p>
            </a>

            <a 
              href="tel:+14054214220" 
              className="text-center hover:scale-105 transition-transform duration-200"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors">
                <PhoneIcon className="w-8 h-8 text-white" />
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
