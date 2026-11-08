import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import {
  ArrowLeft, BookOpen, CalendarDays, Download, Heart, Play,
  Star, Trash2, Tv
} from "lucide-react";
import animesJson from "../../data/animes.json";

const server = "https://kitsu.io/api/edge";

interface KitsuAnime {
  id: string;
  attributes: {
    canonicalTitle: string;
    episodeCount: number | null;
    status: string;
    description: string;
    averageRating: string | null;
    startDate?: string;
    subtype?: string;
    ageRating?: string;
    posterImage?: { small?: string; large?: string; original?: string };
    coverImage?: { large?: string; original?: string };
  };
}

type LocalAnime = {
  id: number;
  anime: string;
  dayId: number;
  urlImage: string;
  premiere: string;
};

export function Anime() {
  const { name = "" } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(name);
  const localAnime = useMemo(
    () => (animesJson as LocalAnime[]).find((item) => item.anime === decodedName),
    [decodedName]
  );
  const [anime, setAnime] = useState<KitsuAnime | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function loadAnime() {
      setLoading(true);
      try {
        const response = await fetch(
          `${server}/anime?filter[text]=${encodeURIComponent(decodedName)}&page[limit]=1`,
          { signal: controller.signal }
        );
        const result = await response.json();
        setAnime(result.data?.[0] ?? null);
      } catch (error) {
        if ((error as Error).name !== "AbortError") setAnime(null);
      } finally {
        setLoading(false);
      }
    }
    loadAnime();
    return () => controller.abort();
  }, [decodedName]);

  const title = localAnime?.anime || anime?.attributes.canonicalTitle || decodedName;
  const poster =
    localAnime?.urlImage ||
    anime?.attributes.posterImage?.original ||
    anime?.attributes.posterImage?.large ||
    anime?.attributes.posterImage?.small;
  const backdrop = anime?.attributes.coverImage?.original || poster;
  const rating = anime?.attributes.averageRating
    ? (Number(anime.attributes.averageRating) / 10).toFixed(1)
    : "—";
  const favorites: string[] = JSON.parse(localStorage.getItem("anime") || "[]");
  const isFavorite = favorites.includes(title);

  function addFavorite() {
    if (isFavorite) return toast.error("Este anime já está na sua lista.");
    localStorage.setItem("anime", JSON.stringify([...favorites, title]));
    toast.success("Adicionado à sua lista!");
  }

  function removeFavorite() {
    localStorage.setItem("anime", JSON.stringify(favorites.filter((item) => item !== title)));
    toast.success("Removido da sua lista.");
  }

  function openSearch(suffix: string) {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(`${title} ${suffix}`)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  if (loading) {
    return <main className="site-panel anime-detail-loading">Carregando anime...</main>;
  }

  return (
    <main className="site-panel anime-detail">
      <Toaster />
      <div className="detail-backdrop" style={{ backgroundImage: `url("${backdrop}")` }} />
      <div className="detail-shade" />

      <button className="detail-back" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> VOLTAR
      </button>

      <section className="detail-content">
        <div className="detail-poster">
          {poster ? <img src={poster} alt={title} /> : <div className="poster-fallback">SEM CAPA</div>}
          <span>{anime?.attributes.status === "finished" ? "FINALIZADO" : "EM LANÇAMENTO"}</span>
        </div>

        <div className="detail-info">
          <span className="section-kicker">DETALHES DO ANIME</span>
          <h1>{title}</h1>
          <div className="detail-meta">
            <span><Star size={17} fill="currentColor" /> {rating}</span>
            <span><Tv size={17} /> {anime?.attributes.episodeCount || "?"} episódios</span>
            <span><CalendarDays size={17} /> {localAnime?.premiere || anime?.attributes.startDate || "2026"}</span>
            {anime?.attributes.subtype && <span>{anime.attributes.subtype.toUpperCase()}</span>}
          </div>
          <p>
            {anime?.attributes.description ||
              "As informações detalhadas deste lançamento ainda não foram publicadas. Adicione à sua lista para acompanhar as novidades."}
          </p>

          <div className="detail-primary-actions">
            <button className="primary" onClick={() => openSearch("assistir online HD")}>
              <Play size={18} fill="currentColor" /> ASSISTIR ONLINE
            </button>
            {isFavorite ? (
              <button onClick={removeFavorite}><Trash2 size={18} /> REMOVER DA LISTA</button>
            ) : (
              <button onClick={addFavorite}><Heart size={18} /> MINHA LISTA</button>
            )}
          </div>

          <div className="detail-secondary-actions">
            <button onClick={() => openSearch("mangá capítulo 1 português")}><BookOpen size={17} /> Ler mangá</button>
            <button onClick={() => openSearch("download anime")}><Download size={17} /> Baixar</button>
          </div>
        </div>
      </section>
    </main>
  );
}
