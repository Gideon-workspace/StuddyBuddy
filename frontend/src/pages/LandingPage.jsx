import HeroSection from '../components/features/LandingPage/HeroSection'
import FeaturesSection from '../components/features/LandingPage/FeaturesSection'
import AboutSection from '../components/features/LandingPage/AboutSection'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </div>
  )
}

export default LandingPage