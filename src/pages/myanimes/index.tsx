import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

const server = 'https://kitsu.io/api/edge';

interface animeName {
  id: string;
  attributes: {
    canonicalTitle: string;
    episodeCount: number;
    status: string;
    posterImage: {
      small: string;
    };
    description: string;
    averageRating: string;
  };
}

interface AnimeData {
  data: animeName[];
}

export function MyAnimes() {
  const [animes, setAnimes] = useState<string[]>([]);
  const [infoAnimes, setInfoAnimes] = useState<AnimeData>({ data: [] });

  useEffect(() => {
    const myAnimes = localStorage.getItem('anime');
    const parsedAnimes: string[] = myAnimes ? JSON.parse(myAnimes) : [];
    setAnimes(parsedAnimes);
  }, []);

  useEffect(() => {
    async function getAnime() {
      try {
        const results = await Promise.all(
          animes.map(async (anime) => {
            const response = await fetch(`${server}/anime?filter[text]=${encodeURIComponent(anime)}`);
            const data = await response.json();
            return data.data[0];
          })
        );

        const valid = results.filter((anime) => anime !== undefined);
        setInfoAnimes({ data: valid });
      } catch (err) {
        console.log(err);

      }
    }

    getAnime();
  }, [animes]);

  function removeFav(anime: string) {
    const favAnimes = JSON.parse(localStorage.getItem('anime') || '[]');
    const updateAnimes = favAnimes.filter((favAnimes: string) => favAnimes !== anime);
    localStorage.setItem('anime', JSON.stringify(updateAnimes));
    setAnimes(updateAnimes);
    toast.success('Anime removido dos favoritos!');
  }

  

  return (
    <main className="flex justify-center min-h-screen ">
      <div className="w-full max-w-2xl p-4 text-center">
        <Toaster />
        <h1 className="text-2xl text-white font-bold m-2">Animes favoritos</h1>

        {infoAnimes.data.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-white mt-8">
            <img src="https://i.imgur.com/F5LghWq.png" className="w-64 mb-4" />
            <p className="text-lg">Você ainda não adicionou nenhum anime</p>
          </div>
        ) : (
         <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {infoAnimes.data.map((anime) => (
                <section
                key={anime.id}
                className="flex flex-col items-center 
                            bg-white/20 backdrop-blur-md backdrop-saturate-150 
                            p-3 rounded-md text-white shadow-md transition-transform 
                            hover:scale-105 duration-300 ease-in-out
                            "
                >
                <Link
                    to={`/anime/${anime.attributes.canonicalTitle}`}
                    className="text-center hover:underline"
                >
                    <img
                    src={anime.attributes.posterImage.small}
                    alt={anime.attributes.canonicalTitle}
                    className="rounded mb-2"
                    />
                    <strong className='normal-case'>{anime.attributes.canonicalTitle}</strong>
                </Link>
                <button
                    className="w-10 h-10 bg-red-500 text-white rounded mt-2 flex justify-center items-center"
                    onClick={() => removeFav(anime.attributes.canonicalTitle)}
                >
                    <Trash />
                </button>
                </section>
            ))}
            </div>

        )}
      </div>
    </main>
  );
}
