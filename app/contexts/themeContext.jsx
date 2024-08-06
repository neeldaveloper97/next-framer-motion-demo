import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Set the initial theme based on user preference or system settings
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for accessing the context
export const useTheme = () => useContext(ThemeContext);
