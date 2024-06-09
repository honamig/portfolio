"use client";
import { useEffect, useState } from "react";
import "./Switcher.css";
import PropTypes from "prop-types";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const Switcher = ({ darkClassName = "dark-mode" }) => {

  const [isDarkMode, setIsDarkMode] = useState(() => 
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {

    const applyTheme = () => {
      if (isDarkMode) {
        document.body.classList.add(darkClassName);
      } else {
        document.body.classList.remove(darkClassName);
      }
    };
    applyTheme();  
  }, [isDarkMode, darkClassName]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="light-dark-button">
      <button onClick={toggleTheme} className="btn" data-testid="themeSwitcherButton">
        {isDarkMode ? <FaMoon /> : <IoSunny />}
      </button>
    </div>
  );
};

Switcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default Switcher;
