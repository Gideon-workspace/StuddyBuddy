const FeatureCard = ({ icon, title, description, color = 'primary' }) => {
  const colorVariants = {
    primary: {
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      border: 'border-teal-100'
    },
    secondary: {
      bg: 'bg-orange-50',
      text: 'text-orange-600', 
      border: 'border-orange-100'
    },
    accent: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-100'
    }
  }

  const currentColor = colorVariants[color]

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 group">
      <div className={`w-20 h-20 rounded-3xl mb-6 flex items-center justify-center text-3xl ${currentColor.bg} ${currentColor.border} border-2 group-hover:scale-110 transition-transform duration-300`}>
        <span className={currentColor.text}>{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard