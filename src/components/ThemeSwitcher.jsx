import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light'); // Set default theme to 'light'

  useEffect(() => {
    const themeLink = document.getElementById('theme-link');
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      themeLink.href = '/darkTheme.css';
      htmlElement.classList.remove('light-mode');
      htmlElement.classList.add('dark-mode');
    } else {
      themeLink.href = '/lightTheme.css';
      htmlElement.classList.remove('dark-mode');
      htmlElement.classList.add('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeSwitcher;
