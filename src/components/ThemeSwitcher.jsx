import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark'); // Set default theme to 'dark'

  useEffect(() => {
    const themeLink = document.getElementById('theme-link');
    if (theme === 'dark') {
      themeLink.href = '/darkTheme.css';
    } else {
      themeLink.href = '/lightTheme.css';
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
