import React, { createContext, useContext, useState } from 'react';

const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  border: '#DDDDDD',
  inputBackground: '#F0F0F0',
  placeholder: '#666666',
};

const darkTheme = {
  background: '#000000',
  text: '#FFFFFF',
  border: '#444444',
  inputBackground: '#1A1A1A',
  placeholder: '#AAAAAA',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export { ThemeContext };
