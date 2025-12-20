import Button from '../ui/Button'

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 flex items-center py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <span className="text-sm font-medium text-gray-700">🚀 POWERED BY AI</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1]">
                  Study{' '}
                  <span className="bg-linear-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                    Smarter
                  </span>
                  ,<br />
                  Not Harder.
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Your personal AI tutor. Turn your messy notes into interactive study guides, 
                  quizzes, and summaries in seconds.
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="large" 
                className="bg-linear-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                <span className="mr-2">📚</span>
                Start Learning for Free
              </Button>
              <Button 
                variant="outline" 
                size="large" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group"
              >
                <span className="mr-2 group-hover:scale-110 transition-transform">▶️</span>
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-pink-400 to-pink-500 border-3 border-white shadow-lg"></div>
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-400 to-blue-500 border-3 border-white shadow-lg"></div>
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-green-400 to-green-500 border-3 border-white shadow-lg"></div>
              </div>
              <div>
                <p className="text-gray-600 font-medium">
                  Trusted by <span className="font-bold text-gray-900">1000+ students</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right 3D Illustration Area */}
          <div className="relative lg:pl-8">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Background */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-teal-400 via-teal-500 to-teal-600 shadow-2xl overflow-hidden">
                
                {/* Floating Elements */}
                <div className="absolute inset-0">
                  {/* Central Large Circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 shadow-2xl animate-pulse"></div>
                  
                  {/* Pink Circle - Top Left */}
                  <div className="absolute top-12 left-16 w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                  
                  {/* Purple Circle - Top Right */}
                  <div className="absolute top-20 right-16 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 shadow-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
                  
                  {/* Green Circle - Bottom Left */}
                  <div className="absolute bottom-20 left-20 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
                  
                  {/* Blue Circle - Bottom Right */}
                  <div className="absolute bottom-16 right-20 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.2s' }}></div>
                  
                  {/* Small White Dots */}
                  <div className="absolute top-16 right-32 w-3 h-3 rounded-full bg-white opacity-80 shadow-sm animate-pulse"></div>
                  <div className="absolute top-32 left-12 w-2 h-2 rounded-full bg-white opacity-60"></div>
                  <div className="absolute bottom-32 right-12 w-4 h-4 rounded-full bg-white opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute bottom-12 left-32 w-2 h-2 rounded-full bg-white opacity-50"></div>
                </div>

                {/* Study Guide Card */}
                <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-5 shadow-2xl max-w-52 transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:shadow-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-linear-to-r from-yellow-400 to-orange-400 flex items-center justify-center shadow-md">
                      <span className="text-sm">📖</span>
                    </div>
                    <div className="text-sm font-bold text-gray-800">AI Study Guide</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2.5 bg-gray-200 rounded-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-4/5"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-3/5"></div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-xs text-gray-500">Progress</div>
                    <div className="text-sm font-bold text-teal-600">90% Complete</div>
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

export default HeroSection