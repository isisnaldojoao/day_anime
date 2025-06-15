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
        console.log(data);
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
      <main className="flex justify-center items-center min-h-screen">
        <h1 className="text-xl font-bold">Carregando...</h1>
      </main>
    );
  }

  return (
    <main className="flex justify-center min-h-screen">
      <div className="p-4 rounded-md w-full max-w-4xl">
        <div className="bg-white border-radius rounded-lg p-2 font-bold mb-4">
          Resultado da busca para a busca: {anime}
        </div>

        {infoAnimes.data.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {infoAnimes.data.map((anime) => (
              <div
                key={anime.id}
                onClick={() => handleDetail(anime.attributes.canonicalTitle)}
                className="cursor-pointer flex flex-col items-center 
                           bg-white/20 backdrop-blur-md backdrop-saturate-150 
                           p-3 rounded-md hover:scale-105 
                           transition-transform duration-300 ease-in-out shadow-md"
              >
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                  className="rounded mb-2"
                />
                <p className="text-white text-center font-semibold">
                  {anime.attributes.canonicalTitle}
                </p>
                <p className="text-white text-sm">
                  <strong>Episódios:</strong> {anime.attributes.episodeCount}
                </p>
                <p className="text-white text-sm">
                  <strong>Status:</strong>{" "}
                  {anime.attributes.status === "finished"
                    ? "Finalizado"
                    : "Em Lançamento"}
                </p>
              </div>
            ))}
          </section>
        ) : (
          <p className="text-white">Nenhum anime encontrado.</p>
        )}
      </div>
    </main>
  );
}
