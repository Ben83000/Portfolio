import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("FR");

  const handleLanguage = () => {
    setLanguage((prev) => prev === "FR" ? "EN" : "FR")
  }

  console.log(language)

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
