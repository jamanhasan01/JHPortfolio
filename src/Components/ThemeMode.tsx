import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeMode = () => {
  // Initialize state from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme and save to localStorage
  useEffect(() => {
    // Apply class to HTML element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Toggle function
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-white dark:text-primary hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <IoSunny size={20} /> : <IoMoon size={20} />}
    </button>
  );
};

export default ThemeMode;