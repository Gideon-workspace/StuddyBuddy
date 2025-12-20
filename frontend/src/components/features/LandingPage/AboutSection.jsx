const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About StuddyBuddy
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe that every student deserves personalized, intelligent support in their learning journey. 
              StuddyBuddy was created by educators and technologists who understand the challenges of modern education.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-600 text-lg">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Mission</h3>
                  <p className="text-gray-600 text-sm">
                    To democratize access to personalized education through AI-powered learning tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 text-lg">💡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Vision</h3>
                  <p className="text-gray-600 text-sm">
                    A world where every student has access to intelligent, adaptive learning support 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 text-xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">100+ Students</h4>
                    <p className="text-gray-600 text-sm">Trust StuddyBuddy daily</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">500+ Study Guides</h4>
                    <p className="text-gray-600 text-sm">Generated and counting</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">95% Success Rate</h4>
                    <p className="text-gray-600 text-sm">Improved test scores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection