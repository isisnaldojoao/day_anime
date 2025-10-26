import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

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
    description: string;
    averageRating: string;
  };
}

export function Recomendations() {
  const [anime, setAnime] = useState<Anime | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Buscar anime aleatório apenas quando clicar
  const fetchRandomAnime = async () => {
    setLoading(true);
    setAnime(null);

    try {
      let found = false;
      let data: any = null;

      // Tenta até encontrar um anime válido (máximo 10 tentativas)
      for (let i = 0; i < 10 && !found; i++) {
        const randomId = Math.floor(Math.random() * 10000) + 1;
        const res = await fetch(`${server}/anime/${randomId}`);

        if (res.ok) {
          data = await res.json();
          if (data?.data) {
            found = true;
            setAnime(data.data);
            toast.success('✨ Recomendação gerada!');
          }
        }
      }

      if (!found) {
        toast.error('Não foi possível encontrar um anime. Tente novamente.');
      }
    } catch (error: any) {
      toast.error('Erro ao buscar anime.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white p-6">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">🎬 Recomendação de Anime</h1>

      {!anime && !loading && (
        <p className="opacity-70 mb-6">Clique no botão para gerar uma recomendação!</p>
      )}

      {loading && <p>Carregando recomendação...</p>}

      {anime && !loading && (
        <section className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg max-w-md text-center transition-all duration-300">
          <img
            src={anime.attributes.posterImage.small}
            alt={anime.attributes.canonicalTitle}
            className="rounded-xl mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold mb-2">
            {anime.attributes.canonicalTitle}
          </h2>
          <p className="text-sm opacity-80 mb-2 line-clamp-3">
            {anime.attributes.description}
          </p>
          <p className="text-sm opacity-80">
            ⭐ Nota média: {anime.attributes.averageRating || 'N/A'}
          </p>
          <p className="text-sm opacity-80">
            📺 Episódios: {anime.attributes.episodeCount || 'Desconhecido'}
          </p>
          <p className="text-sm opacity-80 mb-4">
            📡 Status: {anime.attributes.status}
          </p>
        </section>
      )}

      <button
        onClick={fetchRandomAnime}
        disabled={loading}
        className="mt-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-4 py-2 rounded-lg transition-transform hover:scale-105"
      >
        🔄 {loading ? 'Gerando...' : 'Gerar Recomendação'}
      </button>
    </main>
  );
}

export default Recomendations;
