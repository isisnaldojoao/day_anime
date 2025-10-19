// ...existing code...
import { Link } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Aplica a classe no body para afetar toda a página
    document.body.className = darkMode ? "dark" : "light";

    // Salva a preferência no localStorage
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;

    navigate(`/search/${input}`);
  }

  return (
    <div className="flex flex-col items-center justify-between text-black w-full">
      <header className="flex  items-center justify-center gap-2 bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20 rounded-xl py-3 mb-6 shadow-lg w-full max-w-5xl px-4">
        <nav className="flex items-center justify-center gap-6 w-full">
          <ul className="flex items-center gap-6 text-white">
            <li className="transform transition-all hover:scale-110">
              <Link  to="/">
                Home
              </Link>
            </li>
            <li className="transform transition-all hover:scale-110">
              <Link to="/calender">
                Calendário
              </Link>
            </li>
            <li className="transform transition-all hover:scale-110">
              <Link to="/myanimes">
                Meus animes
              </Link>
            </li>
          </ul>

          <div className="ml-auto flex items-center gap-3">
            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
              <input
                className="bg-white/5 text-white placeholder:text-white/60 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite o nome de um anime..."
              />
              <button
                className="flex items-center justify-center w-10 h-10 bg-white/6 hover:bg-white/10 rounded-md"
                type="submit"
                aria-label="Pesquisar anime"
              >
                <Search className="text-white" />
              </button>
            </form>
          {/*
          <button
            className="toggle-theme px-3 py-2 rounded-md bg-white/6 hover:bg-white/10 text-white"
            onClick={handleThemeToggle}
            aria-label="Alternar tema"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          */}
          </div>
        </nav>
      </header>
    </div>
  );
}
