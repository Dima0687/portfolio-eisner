import { useState, useEffect } from "react";
import { createContext } from "react";
import { profile } from "../data/profileData";

export const LangContext = createContext(); 
export const LangContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [filteredProfile, setFilteredProfile] = useState(profile[language]);

  useEffect(() => {
    setFilteredProfile(profile[language]);
  }, [language]);
  return (
    <LangContext.Provider value={{ 
      language, 
      setLanguage,
      filteredProfile,
    }}>
      { children }
    </LangContext.Provider>
  );
}
 