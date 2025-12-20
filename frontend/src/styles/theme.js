export const theme = {
  colors: {
    primary: {
      main: '#5A8B8C', // Teal green from the design
      light: '#7BA5A6',
      dark: '#3D6E6F',
    },
    secondary: {
      main: '#F59E0B', // Yellow/orange from the design
      light: '#FCD34D',
      dark: '#D97706',
    },
    background: {
      main: '#F8FAFC',
      card: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
      light: '#9CA3AF',
    },
    accent: {
      pink: '#EC4899',
      orange: '#F97316',
      blue: '#3B82F6',
      green: '#10B981',
    }
  },
  typography: {
    fontFamily: {
      heading: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      hero: '3.5rem', // 56px
      heading: '2.25rem', // 36px
      subheading: '1.5rem', // 24px
      body: '1rem', // 16px
      small: '0.875rem', // 14px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    }
  },
  spacing: {
    section: '5rem', // 80px
    container: '1.25rem', // 20px
    card: '1.5rem', // 24px
  },
  borderRadius: {
    small: '0.5rem', // 8px
    medium: '0.75rem', // 12px
    large: '1rem', // 16px
    xl: '1.5rem', // 24px
  },
  shadows: {
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    hover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  }
}