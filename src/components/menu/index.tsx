import { Link } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react";
import { Search } from 'lucide-react';
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

    function handleSubmit(e: FormEvent){
        e.preventDefault();
    
        if(input === "") return;
    
        navigate(`/search/${input}`);
      }

  return (
    <div className="menu-anime flex flex-col items-center justify-between text-black">
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/calender">
            <li>Calendário</li>
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


      <form className='search-anime' onSubmit={handleSubmit}>
          <input
          className='input-anime' 
          type='text'
          value={input}
          onChange={ (e)=> setInput(e.target.value)}
          placeholder='Digite o nome de um anime...'
          />
          <button
            className="flex w-20 justify-center items-center"
            type='submit'
          >
            <Search/>
          </button>
        </form>
    </div>
  );
}
