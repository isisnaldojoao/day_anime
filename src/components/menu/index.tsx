import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react";
import { Drum, Search, Home, CalendarDays, List } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export function Menu() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("👀 Iniciando listener de autenticação...");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("📢 Estado de autenticação mudou:", currentUser);
      setUser(currentUser);
    });

    return () => {
      console.log("🧹 Limpando listener de autenticação");
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("🔄 Valor de user atualizado:", user);
  }, [user]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input === "") return;
    navigate(`/search/${input}`);
  }

  return (
    <div className="flex flex-col items-center justify-between text-black w-full">
      <header className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20 rounded-xl py-3 mb-6 shadow-lg w-full max-w-5xl px-4">
        <nav className="flex items-center justify-center gap-6 w-full">
          <ul className="flex items-center gap-6 text-white">
            <li className="flex transform items-center justify-center transition-all hover:scale-110">
              <Link className="flex gap-2" to="/">
                Home
                <Home />
              </Link>
            </li>

            <li className="flex transform items-center justify-center transition-all hover:scale-110">
              <Link className="flex gap-2" to="/calender">
                Calendário
                <CalendarDays />
              </Link>
            </li>

            {/* 👇 Só aparece se estiver logado */}
            {user ? (
              <>
                <li className="flex transform items-center justify-center transition-all hover:scale-110">
                  <Link className="flex gap-2" to="/myanimes">
                    Meus animes
                    <List />
                  </Link>
                </li>

                <li className="flex transform items-center justify-center transition-all hover:scale-110">
                  <Link className="flex gap-2" to="/recomendations">
                    Recomendações
                    <Drum />
                  </Link>
                </li>
              </>
            ) : null}
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
          </div>
        </nav>
      </header>
    </div>
  );
}
