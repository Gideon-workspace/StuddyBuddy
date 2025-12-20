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
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
      <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-2xl ${currentColor.bg} ${currentColor.border} border group-hover:scale-105 transition-transform duration-300`}>
        <span className={currentColor.text}>{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard