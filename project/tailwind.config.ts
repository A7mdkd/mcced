import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0277B6',
        secondary: '#00BCD4',
        // Light Color Scheme
        light: {
          // Backgrounds
          'bg-primary': '#FFFFFF',        // Pure white for main content areas
          'bg-secondary': '#FAFAFA',      // Off-white for subtle sections
          'bg-tertiary': '#F5F7FA',       // Light gray-blue for cards/panels
          'bg-accent': '#F0F9FF',         // Very light blue for highlights
          
          // Text Colors
          'text-primary': '#1A202C',      // Dark gray for main text (contrast: 16.75:1)
          'text-secondary': '#4A5568',    // Medium gray for secondary text (contrast: 7.54:1)
          'text-tertiary': '#718096',     // Light gray for captions/metadata (contrast: 4.69:1)
          'text-muted': '#A0AEC0',        // Very light gray for disabled text
          
          // Borders & Dividers
          'border-primary': '#E2E8F0',    // Light gray for main borders
          'border-secondary': '#EDF2F7',  // Very light gray for subtle dividers
          'border-accent': '#BEE3F8',     // Light blue for focused elements
          
          // Interactive Elements
          'interactive-primary': '#0277B6',    // Brand blue for primary buttons
          'interactive-hover': '#025A8B',      // Darker blue for hover states
          'interactive-secondary': '#F7FAFC',  // Light background for secondary buttons
          'interactive-secondary-hover': '#EDF2F7', // Hover for secondary buttons
          
          // Links
          'link-primary': '#0277B6',      // Brand blue for links
          'link-hover': '#025A8B',        // Darker blue for link hover
          'link-visited': '#553C9A',      // Purple for visited links
          
          // Status Indicators
          'success': '#38A169',           // Green for success states
          'success-bg': '#F0FFF4',        // Light green background
          'success-border': '#9AE6B4',    // Light green border
          
          'warning': '#D69E2E',           // Orange for warning states
          'warning-bg': '#FFFAF0',        // Light orange background
          'warning-border': '#F6E05E',    // Light orange border
          
          'error': '#E53E3E',             // Red for error states
          'error-bg': '#FED7D7',          // Light red background
          'error-border': '#FEB2B2',      // Light red border
          
          'info': '#3182CE',              // Blue for info states
          'info-bg': '#EBF8FF',           // Light blue background
          'info-border': '#90CDF4',       // Light blue border
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
