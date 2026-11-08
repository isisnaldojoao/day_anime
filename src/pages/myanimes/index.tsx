import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Play, Trash2 } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import animesJson from "../../data/animes.json";

const server = "https://kitsu.io/api/edge";

type Favorite = {
  title: string;
  image?: string;
  rating?: string;
};

type LocalAnime = {
  anime: string;
  urlImage: string;
};

const localAnimes = animesJson as LocalAnime[];

export function MyAnimes() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const titles: string[] = JSON.parse(localStorage.getItem("anime") || "[]");

    async function loadFavorites() {
      const results = await Promise.all(
        titles.map(async (title): Promise<Favorite> => {
          const local = localAnimes.find((anime) => anime.anime === title);
          if (local) return { title, image: local.urlImage };

          try {
            const response = await fetch(
              `${server}/anime?filter[text]=${encodeURIComponent(title)}&page[limit]=1`
            );
            const result = await response.json();
            const anime = result.data?.[0]?.attributes;
            return {
              title,
              image: anime?.posterImage?.large || anime?.posterImage?.small,
              rating: anime?.averageRating,
            };
          } catch {
            return { title };
          }
        })
      );

      setFavorites(results);
      setLoading(false);
    }

    loadFavorites();
  }, []);

  function removeFavorite(title: string) {
    const updated = favorites.filter((anime) => anime.title !== title);
    setFavorites(updated);
    localStorage.setItem("anime", JSON.stringify(updated.map((anime) => anime.title)));
    toast.success("Anime removido da sua lista.");
  }

  return (
    <main className="site-panel favorites-page">
      <Toaster />
      <section className="mx-auto max-w-6xl">
        <div className="favorites-heading">
          <div>
            <span className="section-kicker">SUA COLEÇÃO</span>
            <h1 className="section-title">MINHA <span>LISTA</span></h1>
          </div>
          <div className="favorites-count">
            <Heart size={18} fill="currentColor" />
            {favorites.length} {favorites.length === 1 ? "ANIME" : "ANIMES"}
          </div>
        </div>

        {loading ? (
          <p className="favorites-message">Carregando sua lista...</p>
        ) : favorites.length === 0 ? (
          <div className="favorites-empty">
            <Heart size={54} />
            <h2>Sua lista está vazia</h2>
            <p>Explore o calendário e adicione os animes que deseja acompanhar.</p>
            <Link to="/calender">EXPLORAR CALENDÁRIO</Link>
          </div>
        ) : (
          <div className="favorites-grid">
            {favorites.map((anime) => (
              <article className="favorite-card" key={anime.title}>
                <Link to={`/anime/${encodeURIComponent(anime.title)}`}>
                  <div className="favorite-cover">
                    {anime.image ? (
                      <img src={anime.image} alt={anime.title} />
                    ) : (
                      <div className="favorite-placeholder"><Heart /></div>
                    )}
                    <div className="card-overlay" />
                    <span className="favorite-play"><Play fill="currentColor" /></span>
                  </div>
                  <h2>{anime.title}</h2>
                </Link>
                <button onClick={() => removeFavorite(anime.title)} aria-label={`Remover ${anime.title}`}>
                  <Trash2 size={17} /> REMOVER
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
