import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);

    // Update the theme CSS and body class
    const themeLink = document.getElementById('theme-link');
    if (theme === 'dark') {
      themeLink.href = '/darkTheme.css';
      document.body.classList.remove('light-mode');
    } else {
      themeLink.href = '/lightTheme.css';
      document.body.classList.add('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeSwitcher;
