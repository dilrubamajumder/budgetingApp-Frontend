import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react'

function Toggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'
    );
  
    const toggleTheme = () => {
      if (theme === 'light') {
      setTheme('dark');
      } else {
      setTheme('light');
       }
      };
  
      useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        }, [theme]);

  return (
    <div id="light">
            <div><button className={`toggle-btn ${theme}`} onClick={toggleTheme}>{theme==="light"? "Light Mode" : "Dark Mode"}</button></div>

    </div>
  )
}

export default Toggle