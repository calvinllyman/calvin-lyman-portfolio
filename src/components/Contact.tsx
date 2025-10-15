export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to discuss your next product design challenge? 
            I'd love to hear about your vision and explore how we can bring it to life.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">calvin.lyman@example.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">linkedin.com/in/calvinlyman</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold mb-2">Schedule</h3>
              <p className="text-gray-300">Book a 30-min call</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}