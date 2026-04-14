import { Particles } from "@/components/magicui/particles";
import { useState, useEffect } from "react";
export const ParticlesDemo = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mediaQuery.matches);
    
    const handler = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <Particles 
      className="absolute inset-0 -z-10" 
      quantity={100}
      color={darkMode ? "#ffffff" : "#000000"}
    />
  );
};