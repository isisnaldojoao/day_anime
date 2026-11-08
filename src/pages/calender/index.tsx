import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Play } from "lucide-react";
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

const daysOfWeek = [
  { short: "SEG", label: "Segunda", id: 1 },
  { short: "TER", label: "Terça", id: 2 },
  { short: "QUA", label: "Quarta", id: 3 },
  { short: "QUI", label: "Quinta", id: 4 },
  { short: "SEX", label: "Sexta", id: 5 },
  { short: "SÁB", label: "Sábado", id: 6 },
  { short: "DOM", label: "Domingo", id: 7 },
];

export function Calender() {
  const navigate = useNavigate();
  const today = new Date().getDay();
  const [activeDay, setActiveDay] = useState(today === 0 ? 7 : today);
  const selectedDay = daysOfWeek.find((day) => day.id === activeDay)!;
  const dayAnimes = useMemo(
    () => animes.filter((anime) => anime.dayId === activeDay),
    [activeDay]
  );

  return (
    <main className="site-panel min-h-screen px-4 py-8 sm:px-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-7 flex flex-col justify-between gap-3 border-b border-white/15 pb-5 sm:flex-row sm:items-end">
          <div>
            <span className="section-kicker">TEMPORADA DE OUTONO</span>
            <h1 className="section-title mt-1">
              CALENDÁRIO DE <span>OUTUBRO 2026</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/55">
            <CalendarDays size={18} className="text-red-500" />
            Fonte: IntoxiAnime
          </div>
        </div>

        <div className="day-tabs mb-8" aria-label="Dias da semana">
          {daysOfWeek.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={activeDay === day.id ? "active" : ""}
            >
              <span>{day.short}</span>
              <small>{animes.filter((anime) => anime.dayId === day.id).length}</small>
            </button>
          ))}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-black uppercase tracking-tight text-white">
            Lançamentos de {selectedDay.label}
          </h2>
          <span className="text-sm text-white/45">{dayAnimes.length} títulos</span>
        </div>

        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="anime-grid"
        >
          {dayAnimes.map((anime) => (
            <article
              key={anime.id}
              onClick={() => navigate(`/anime/${encodeURIComponent(anime.anime)}`)}
              className="anime-card group"
            >
              <div className="relative overflow-hidden">
                <img src={anime.urlImage} alt={anime.anime} loading="lazy" />
                <div className="card-overlay" />
                <span className="premiere-badge">ESTREIA {anime.premiere}</span>
                <span className="play-button">
                  <Play size={18} fill="currentColor" />
                </span>
              </div>
              <h3>{anime.anime}</h3>
            </article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
