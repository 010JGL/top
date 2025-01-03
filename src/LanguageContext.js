import React, { createContext, useContext, useState } from 'react';

// Create the context for language
const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Language provider to wrap the app and provide the context
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' for English, 'fr' for French

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
