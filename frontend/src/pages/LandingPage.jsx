import HeroSection from '../components/features/HeroSection'
import FeaturesSection from '../components/features/FeaturesSection'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About StuddyBuddy
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We believe that every student deserves personalized, intelligent support in their learning journey. 
                StuddyBuddy was created by educators and technologists who understand the challenges of modern education.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To democratize access to personalized education through AI-powered learning tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      A world where every student has access to intelligent, adaptive learning support 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 text-2xl">📚</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">1000+ Students</h4>
                      <p className="text-gray-600">Trust StuddyBuddy daily</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-2xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">50,000+ Study Guides</h4>
                      <p className="text-gray-600">Generated and counting</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-2xl">🎓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">95% Success Rate</h4>
                      <p className="text-gray-600">Improved test scores</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage