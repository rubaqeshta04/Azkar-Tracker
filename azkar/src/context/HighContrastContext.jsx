import { createContext, useState, useEffect } from "react";

export const HighContrastContext = createContext();

export const HighContrastProvider = ({ children }) => {
  const [highContrast, setHighContrast] = useState(() => {
    const saved = localStorage.getItem("highContrast");
    return saved === "true";
  });

  const toggleContrast = () => {
    setHighContrast((prev) => {
      localStorage.setItem("highContrast", !prev);
      return !prev;
    });
  };
 
  useEffect(() => {
    localStorage.setItem("highContrast", highContrast);
  }, [highContrast]);

  return (
    <HighContrastContext.Provider value={{ highContrast, toggleContrast }}>
      {children}
    </HighContrastContext.Provider>
  );
};
