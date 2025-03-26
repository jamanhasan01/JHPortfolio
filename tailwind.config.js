import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  // 1. Use class-based dark mode
  darkMode: ["class"], // ← Essential for manual control
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // 2. DaisyUI minimal light/dark setup
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#f97316",    // DaisyUI default blue
          "secondary": "#570df8",  // DaisyUI default pink
          "base-100": "#ffffff",   // White background
          // ... other light colors
        },
      },
      {
        dark: {
          "primary": "#f97316",    // Darker purple
          "secondary": "#0866ff",   // Darker pink
          "base-100": "#1f2937",    // Dark gray background
          // ... other dark colors
        },
      }
    ],
    darkTheme: "dark", // ← Explicitly declare which theme is "dark"
  },

  plugins: [daisyui, require("tailwindcss-animate")],
    theme: {
    	extend: {
    		keyframes: {
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			},
    			shine: {
    				'0%': {
    					'background-position': '0% 0%'
    				},
    				'50%': {
    					'background-position': '100% 100%'
    				},
    				to: {
    					'background-position': '0% 0%'
    				}
    			}
    		},
    		animation: {
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
    			shine: 'shine var(--duration) infinite linear'
    		}
    	}
    }
}