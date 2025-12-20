const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  className = '',
  icon = null 
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-medium rounded-lg
    transition-all duration-200 transform hover:scale-105 focus:outline-none 
    focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer
  `

  const variants = {
    primary: `
      bg-teal-600 text-white hover:bg-teal-700
      focus:ring-teal-500 shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-orange-500 text-white hover:bg-orange-600
      focus:ring-orange-500 shadow-lg hover:shadow-xl
    `,
    outline: `
      border-2 border-gray-300 text-gray-700
      hover:bg-gray-50 hover:border-gray-400
      focus:ring-gray-500
    `
  }

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }

  // If className is provided, use it instead of variants
  const buttonClassName = className || `${baseStyles} ${variants[variant]} ${sizes[size]}`

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}

export default Button