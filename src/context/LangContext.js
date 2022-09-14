import { useState, createContext, useEffect  } from "react";
export const LangContext = createContext(); 
export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState(sessionStorage.getItem('d.e.web.dev') || 'en');

  useEffect(() => {
    sessionStorage.setItem('d.e.web.dev', lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ 
      lang, 
      setLang
    }}>
      { children }
    </LangContext.Provider>
  );
}
 