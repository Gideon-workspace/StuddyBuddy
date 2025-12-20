import FeatureCard from '../ui/FeatureCard'

const FeaturesSection = () => {
  const features = [
    {
      icon: '📚',
      title: 'AI Study Guides',
      description: 'Simply upload your PDF notes or textbooks. Our AI analyzes the content and generates comprehensive study guides tailored to your learning style.',
      color: 'primary'
    },
    {
      icon: '❓',
      title: 'Interactive Q&A',
      description: 'Stuck on a concept? Ask StudyBuddy anything about your materials. Get instant, accurate answers available 24/7 to supplement your learning.',
      color: 'secondary'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Visualize your knowledge growth. Identify weak spots with smart analytics and focus your efforts where they matter most.',
      color: 'accent'
    }
  ]

  return (
    <section id="features" className="py-24 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Supercharge Your Studying
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unlock the power of Machine Learning to streamline your education. We handle the busy work 
            so you can focus on understanding.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection