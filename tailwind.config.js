/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom theme extensions based on existing design system
      animation: {
        // Add custom animations defined in globals.css
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        slideUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          'from': { transform: 'translateX(-20px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          'from': { transform: 'translateX(20px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      // Define a gradient for the gradient background
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, var(--primary), var(--background))',
      },
      // Define border utility
      borderColor: {
        border: 'hsl(var(--border))',
      },
      // Define background and text colors
      backgroundColor: {
        background: 'hsl(var(--background))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
        card: 'hsl(var(--card))',
        muted: 'hsl(var(--muted))',
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        'card-foreground': 'hsl(var(--card-foreground))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
      },
      // Define other custom properties
      ringColor: {
        ring: 'hsl(var(--ring))',
      },
      borderColor: {
        input: 'hsl(var(--input))',
        border: 'hsl(var(--border))',
      },
      ringOffsetColor: {
        background: 'hsl(var(--background))',
      },
      // Add border radius
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
