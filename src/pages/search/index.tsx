import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const server = 'https://kitsu.io/api/edge';

interface Anime {
  id: string;
  attributes: {
    canonicalTitle: string;
    episodeCount: number;
    status: string;
    posterImage: {
      small: string;
    };
  };
}

interface AnimeData {
  data: Anime[];
}

export function Search() {
  const [infoAnimes, setInfoAnimes] = useState<AnimeData>({ data: [] });
  const [loading, setLoading] = useState(true);
  const { anime } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAnime() {
      try {
        const response = await fetch(`${server}/anime?filter[text]=${anime}`);
        const data: AnimeData = await response.json();
        setInfoAnimes(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    }

    getAnime();
  }, [anime, navigate]);

  function handleDetail(animeId: string) {
    navigate(`/anime/${animeId}`);
  }

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen ">
        <h1 className="text-xl font-bold text-white">Carregando...</h1>
      </main>
    );
  }

  return (
    <main className="flex justify-center min-h-screen p-6">
      <div className="w-full max-w-6xl">
        <div className="text-white font-bold mb-6 text-lg">
          Resultado da busca: <span className="text-green-400">{anime}</span>
        </div>

        {infoAnimes.data.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {infoAnimes.data.map((anime) => (
              <div
                key={anime.id}
                onClick={() => handleDetail(anime.attributes.canonicalTitle)}
                className="group relative flex flex-col items-center cursor-pointer
                           bg-white/10 border border-white/20 
                           backdrop-blur-md backdrop-saturate-150
                           p-4 rounded-2xl shadow-lg transition-transform 
                           transform hover:scale-105 duration-300"
              >
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                  className="w-full h-56 object-cover rounded-lg mb-3 border border-white/20 shadow-md group-hover:shadow-lg transition"
                />
                <strong className="text-white text-center text-sm sm:text-base font-semibold mb-1">
                  {anime.attributes.canonicalTitle}
                </strong>
                <p className="text-white text-sm">
                  <strong>Episódios:</strong> {anime.attributes.episodeCount}
                </p>
                <p className="text-white text-sm">
                  <strong>Status:</strong>{" "}
                  {anime.attributes.status === "finished"
                    ? "Finalizado"
                    : "Em Lançamento"}
                </p>

                {/* Brilho sutil */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </section>
        ) : (
          <p className="text-white text-center mt-10">Nenhum anime encontrado.</p>
        )}
      </div>
    </main>
  );
}
