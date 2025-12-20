import { useState, useEffect } from 'react'
import Button from '../../ui/Button'

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false)
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 flex flex-col relative">
      {/* Navigation Header */}
      <nav className="w-full max-w-6xl mx-auto px-4 lg:px-6 py-6 lg:py-4 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-linear-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center transform transition-transform hover:scale-105">
            <span className="text-white font-bold text-sm sm:text-lg">S</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-gray-900">StuddyBuddy</span>
        </div>

        {/* Navigation Menu - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-600 hover:text-teal-600 font-medium transition-all duration-200 text-md relative group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-600 hover:text-teal-600 font-medium transition-all duration-200 text-md relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Button 
            variant="outline" 
            size="small" 
            className="hidden sm:inline-flex border border-gray-300 text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-sm sm:text-md font-medium hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700 transition-all duration-200"
          >
            Log In
          </Button>
          <Button 
            size="small" 
            className="hidden sm:inline-flex bg-linear-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-sm sm:text-md font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            Sign Up
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 sm:p-3 text-gray-600 hover:text-teal-600 transition-all duration-200 hover:bg-teal-50 rounded-lg relative z-50"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 flex flex-col justify-center items-center space-y-1">
              {/* Animated hamburger lines */}
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0'
              }`} />
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'rotate-0'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Backdrop with blur effect */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            
            {/* Menu Header */}
            <div className="flex items-center p-6 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-linear-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">StuddyBuddy</span>
              </div>
            </div>

            {/* Menu Content */}
            <div className="px-6 py-8">
              <div className="space-y-6">
                {/* Navigation Links */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Navigation</p>
                  
                  <button 
                    onClick={() => scrollToSection('features')} 
                    className="flex items-center w-full text-left text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium py-3 px-4 rounded-xl transition-all duration-200 group"
                  >
                    <span className="mr-3 text-teal-500 opacity-70 group-hover:opacity-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    Features
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="flex items-center w-full text-left text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium py-3 px-4 rounded-xl transition-all duration-200 group"
                  >
                    <span className="mr-3 text-teal-500 opacity-70 group-hover:opacity-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    About
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
                
                {/* Divider */}
                <div className="border-t border-gray-100"></div>
                
                {/* Auth Buttons */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Get Started</p>
                  
                  <Button 
                    variant="outline" 
                    size="medium" 
                    className="w-full justify-center border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 transition-all duration-200"
                  >
                    Log In
                  </Button>
                  
                  <Button 
                    size="medium" 
                    className="w-full justify-center bg-linear-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Sign Up
                  </Button>
                </div>

                {/* Footer info */}
                <div className="pt-6 text-center">
                  <div className="flex justify-center mt-3 space-x-1">
                    <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div id="hero" className="flex-1 flex items-center pt-1 lg:pt-10">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:pr-6 text-center lg:text-left">
              <div className="space-y-4">
                {/* Main Heading */}
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    Study{' '}
                    <span className="bg-linear-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                      Smarter
                    </span>
                    ,<br />
                    Not Harder.
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Your personal AI tutor. Turn your messy notes into interactive study guides, 
                    quizzes, and summaries in seconds.
                  </p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                <Button 
                  size="medium" 
                  className="bg-linear-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Start Learning for Free
                </Button>
                <Button 
                  variant="outline" 
                  size="medium" 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-linear-to-r from-pink-400 to-pink-500 border-2 border-white shadow-md"></div>
                  <div className="w-8 h-8 rounded-full bg-linear-to-r from-blue-400 to-blue-500 border-2 border-white shadow-md"></div>
                  <div className="w-8 h-8 rounded-full bg-linear-to-r from-green-400 to-green-500 border-2 border-white shadow-md"></div>
                </div>
                <div>
                  <p className="text-gray-600 font-medium text-sm">
                    Trusted by <span className="font-bold text-gray-900">100+ students</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right 3D Illustration Area */}
            <div className="relative lg:pl-6 hidden lg:block">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Main Background */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-teal-400 via-teal-500 to-teal-600 shadow-xl overflow-hidden">
                  
                  {/* Floating Elements */}
                  <div className="absolute inset-0">
                    {/* Central Large Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 shadow-xl animate-pulse"></div>
                    
                    {/* Pink Circle - Top Left */}
                    <div className="absolute top-8 left-12 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                    
                    {/* Purple Circle - Top Right */}
                    <div className="absolute top-12 right-12 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 shadow-md animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
                    
                    {/* Green Circle - Bottom Left */}
                    <div className="absolute bottom-16 left-16 w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-md animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
                    
                    {/* Blue Circle - Bottom Right */}
                    <div className="absolute bottom-12 right-16 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 shadow-md animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.2s' }}></div>
                    
                    {/* Small White Dots */}
                    <div className="absolute top-12 right-28 w-2 h-2 rounded-full bg-white opacity-80 shadow-sm animate-pulse"></div>
                    <div className="absolute top-24 left-8 w-1.5 h-1.5 rounded-full bg-white opacity-60"></div>
                    <div className="absolute bottom-24 right-8 w-3 h-3 rounded-full bg-white opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-8 left-24 w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
                  </div>

                  {/* Study Guide Card */}
                  <div className="absolute bottom-6 right-6 bg-white rounded-xl p-3 shadow-xl max-w-xs transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:shadow-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-xs font-bold text-gray-800">AI Study Guide</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-4/5"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-3/5"></div>
                    </div>
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