import { useState, useEffect } from "react";
import { createContext } from "react";
import { profile } from "../data/profileData";

export const LangContext = createContext(); 
export const LangContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [filteredProfile, setFilteredProfile] = useState(profile[language]);
  
  function fixUmlaut(id) {
    if(language === 'ger'){
      const aUmlaut = new RegExp(/ae/gi);
      const uUmlaut = new RegExp(/ue/gi);
      let gerId = id.replace(aUmlaut, 'ä');
      gerId = gerId.replace(uUmlaut, 'ü');
      gerId = gerId.split('-').join(' ');
      return gerId
    } else {
      return id
    }
  }
  useEffect(() => {
    setFilteredProfile(profile[language]);
  }, [language]);
  return (
    <LangContext.Provider value={{ 
      language, 
      setLanguage,
      filteredProfile,
      fixUmlaut
    }}>
      { children }
    </LangContext.Provider>
  );
}
 