import { useEffect } from "react";
import animesJson from "../../data/animes.json";
import { WeekDays } from "../../types/weekDays";
import { useNavigate } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

type Anime = {
  id: number;
  anime: string;
  dayId: number;
  urlImage: string;
};

const animes: Anime[] = animesJson;

export function Home() {
  const navigate = useNavigate();

  const getTodayWeekDayId = (): number => {
    const today = new Date();

    const mapDias: Record<string, keyof typeof WeekDays> = {
      domingo: "Domingo",
      "segunda-feira": "Segunda",
      "terça-feira": "Terça",
      "quarta-feira": "Quarta",
      "quinta-feira": "Quinta",
      "sexta-feira": "Sexta",
      sábado: "Sábado",
    };

    const diaSemana = today
      .toLocaleDateString("pt-BR", { weekday: "long" })
      .toLowerCase();
    const diaEnum = mapDias[diaSemana];

    return WeekDays[diaEnum] ?? 0;
  };

  const todayAnimes = animes.filter(
    (anime) => anime.dayId === getTodayWeekDayId()
  );

  useEffect(() => {
    console.log("Animes de hoje:", todayAnimes);
  }, [todayAnimes]);

  function handleDetail(anime: string) {
    navigate(`/anime/${anime}`);
  }

  return (
    <main className="flex justify-center min-h-screen pt-6 px-4">

      <div className="w-full max-w-5xl">
        <header className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20 rounded-xl py-3 mb-6 shadow-lg">
          <h1 className="text-lg sm:text-xl font-semibold text-white">
            Animes transmitidos hoje
          </h1>
          <CalendarCheck className="text-green-400 w-5 h-5" />
        </header>

        {todayAnimes.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {todayAnimes.map((anime) => (
              <div
                key={anime.id}
                onClick={() => handleDetail(anime.anime)}
                className="group relative flex flex-col items-center cursor-pointer
                          bg-white/10 hover:bg-white/20 border border-white/20
                          backdrop-blur-md backdrop-saturate-150 
                          p-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300"
              >
                <img
                  src={anime.urlImage}
                  alt={anime.anime}
                  className="w-full h-56 object-cover rounded-lg mb-3 border border-white/20 shadow-md group-hover:shadow-lg transition"
                />
                <strong className="text-sm sm:text-base text-center text-white font-medium">
                  {anime.anime}
                </strong>

                {/* Brilho sutil */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 mt-10">
            Não há animes sendo transmitidos hoje.
          </p>
        )}
      </div>
    </main>
  );
}
