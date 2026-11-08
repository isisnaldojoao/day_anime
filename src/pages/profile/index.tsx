import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ChevronRight, Heart, LogOut, Mail, User } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import fallbackAvatar from "../../assets/38ae4ac6c3104b60b0fd3afb4e36442b.jpg";

export function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const favoriteCount = JSON.parse(localStorage.getItem("anime") || "[]").length;

  useEffect(() => onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  }), []);

  if (loading) {
    return <main className="site-panel profile-state">Carregando perfil...</main>;
  }

  if (!user) {
    return (
      <main className="site-panel profile-state">
        <User size={42} />
        <h2>Você precisa entrar para acessar seu perfil.</h2>
        <Link to="/login">ENTRAR AGORA</Link>
      </main>
    );
  }

  const createdAt = user.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
    : "recentemente";

  return (
    <main className="site-panel profile-page">
      <section className="profile-card">
        <div className="profile-banner">
          <span>OTAKUS<span>PERDIDOS</span></span>
        </div>
        <div className="profile-main">
          <img
            className="profile-avatar"
            src={user.photoURL || fallbackAvatar}
            alt={user.displayName || "Avatar"}
          />
          <div className="profile-identity">
            <span className="section-kicker">MEU PERFIL</span>
            <h1>{user.displayName || "Otaku Perdido"}</h1>
            <p><Mail size={15} /> {user.email}</p>
          </div>
          <button className="profile-logout" onClick={() => signOut(auth)}>
            <LogOut size={17} /> SAIR
          </button>
        </div>

        <div className="profile-stats">
          <div><strong>{favoriteCount}</strong><span>ANIMES NA LISTA</span></div>
          <div><strong>2026</strong><span>TEMPORADA ATUAL</span></div>
          <div><strong>{createdAt}</strong><span>MEMBRO DESDE</span></div>
        </div>

        <div className="profile-links">
          <Link to="/myanimes">
            <span className="profile-link-icon"><Heart /></span>
            <span><strong>Minha lista</strong><small>Veja e gerencie seus animes favoritos</small></span>
            <ChevronRight />
          </Link>
          <Link to="/calender">
            <span className="profile-link-icon"><CalendarDays /></span>
            <span><strong>Calendário 2026</strong><small>Acompanhe os lançamentos da semana</small></span>
            <ChevronRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
