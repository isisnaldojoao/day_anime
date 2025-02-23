import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Menu() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    // Aplica a classe no body para afetar toda a página
    document.body.className = darkMode ? "dark" : "light";

    // Salva a preferência no localStorage
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="menu-anime">
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/myanimes">
            <li>Meus animes</li>
          </Link>
          <div>
            <button className="toggle-theme" onClick={handleThemeToggle}>
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}
