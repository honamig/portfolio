"use client";
import { useEffect, useState, useMemo } from "react";
import "./Switcher.css";
import PropTypes from "prop-types";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const Switcher = ({ darkClassName = "dark-mode" }) => {
  const prefersDarkMode = useMemo(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    }
    return false;
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log(!isDarkMode);
  };

  const applyTheme = () => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);

      return <FaMoon />;
    } else {
      document.body.classList.remove(darkClassName);
      return <IoSunny />;
    }
  };
  return (
    <div className="light-dark-button">
      <button onClick={toggleTheme} className="btn" data-testid="themeSwitcherButton">
        {applyTheme()}
      </button>
    </div>
  );
};

Switcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default Switcher;
