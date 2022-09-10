import { useState, createContext  } from "react";
export const LangContext = createContext(); 
export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  return (
    <LangContext.Provider value={{ 
      lang, 
      setLang
    }}>
      { children }
    </LangContext.Provider>
  );
}
 