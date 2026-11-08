import { FormEvent, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CalendarDays, Heart, LogIn, Search, User } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export function Menu() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (input.trim()) navigate(`/search/${encodeURIComponent(input.trim())}`);
  }

  return (
    <header className="main-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Otakus Perdidos">
          OTAKUS<span>PERDIDOS</span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/" end>HOME</NavLink>
          <NavLink to="/calender"><CalendarDays size={15} /> CALENDÁRIO</NavLink>
          {user && <NavLink to="/myanimes"><Heart size={15} /> MINHA LISTA</NavLink>}
        </nav>

        <div className="header-actions">
          <form onSubmit={handleSubmit} className="header-search">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Buscar anime..."
              aria-label="Buscar anime"
            />
            <button aria-label="Pesquisar"><Search size={19} /></button>
          </form>

          {user ? (
            <div className="user-menu">
              <Link to="/profile" title="Perfil"><User size={20} /></Link>
              <button onClick={() => signOut(auth)}>SAIR</button>
            </div>
          ) : (
            <Link to="/login" className="login-link"><LogIn size={18} /> ENTRAR</Link>
          )}
        </div>
      </div>
    </header>
  );
}
