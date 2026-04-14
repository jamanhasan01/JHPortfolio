import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextIsDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(nextIsDark);
  }, []);

  // Apply theme and save to localStorage
  useEffect(() => {
    // Apply class to HTML element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
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
