import { ArrowRight, CalendarDays, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import animesJson from "../../data/animes.json";

type Anime = {
  id: number;
  anime: string;
  dayId: number;
  urlImage: string;
  premiere: string;
};

const animes: Anime[] = animesJson;

export function Home() {
  const navigate = useNavigate();
  const jsDay = new Date().getDay();
  const todayId = jsDay === 0 ? 7 : jsDay;
  const todayAnimes = animes.filter((anime) => anime.dayId === todayId);
  const featured = animes.slice(0, 3);

  return (
    <main className="site-panel min-h-screen px-4 py-8 sm:px-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <span className="section-kicker">DESTAQUES DA TEMPORADA</span>
              <h1 className="section-title">NOVOS ANIMES EM <span>2026</span></h1>
            </div>
            <button className="text-link" onClick={() => navigate("/calender")}>
              VER CALENDÁRIO <ArrowRight size={16} />
            </button>
          </div>

          <div className="featured-grid">
            {featured.map((anime, index) => (
              <article
                key={anime.id}
                className={index === 1 ? "featured-card featured-main" : "featured-card"}
                onClick={() => navigate(`/anime/${encodeURIComponent(anime.anime)}`)}
              >
                <img src={anime.urlImage} alt={anime.anime} />
                <div className="featured-shade" />
                <div className="featured-copy">
                  <span>ESTREIA {anime.premiere}</span>
                  <h2>{anime.anime}</h2>
                  <button>
                    <Play size={15} fill="currentColor" /> VER DETALHES
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-5 flex items-end justify-between border-b border-white/15 pb-3">
          <div>
            <span className="section-kicker">PROGRAMAÇÃO DIÁRIA</span>
            <h2 className="section-title text-2xl">ANIMES DE <span>HOJE</span></h2>
          </div>
          <CalendarDays className="text-red-500" />
        </div>

        {todayAnimes.length ? (
          <div className="anime-grid compact">
            {todayAnimes.map((anime) => (
              <article
                key={anime.id}
                className="anime-card"
                onClick={() => navigate(`/anime/${encodeURIComponent(anime.anime)}`)}
              >
                <div className="relative overflow-hidden">
                  <img src={anime.urlImage} alt={anime.anime} loading="lazy" />
                  <div className="card-overlay" />
                  <span className="premiere-badge">{anime.premiere}</span>
                </div>
                <h3>{anime.anime}</h3>
              </article>
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-white/50">Não há animes programados para hoje.</p>
        )}
      </section>
    </main>
  );
}
