import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ES');

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'ES' ? 'EN' : 'ES'));
  };

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    if (userLanguage.includes('en')) {
      setLang('EN');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
