import {  useEffect,useState } from 'react';
import animesJson from '../../data/animes.json';
import { WeekDays } from '../../types/weekDays';
import { useNavigate } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';

type Anime = {
  id: number;
  anime: string;
  dayId: number;
  urlImage: string;
};

const animes: Anime[] = animesJson;

export function Home() {
  const navigate = useNavigate();
   const [input, setInput] = useState("");
  const getTodayWeekDayId = (): number => {
    const today = new Date();
  
    const mapDias: Record<string, keyof typeof WeekDays> = {
      'domingo': 'Domingo',
      'segunda-feira': 'Segunda',
      'terça-feira': 'Terça',
      'quarta-feira': 'Quarta',
      'quinta-feira': 'Quinta',
      'sexta-feira': 'Sexta',
      'sábado': 'Sábado',
    };
  
    const diaSemana = today.toLocaleDateString('pt-BR', { weekday: 'long' }).toLowerCase();
    const diaEnum = mapDias[diaSemana];
  
    return WeekDays[diaEnum] ?? 0;
  };
  
  const todayAnimes = animes.filter(anime => anime.dayId === getTodayWeekDayId());

  useEffect(() => {
    console.log('Animes de hoje:', todayAnimes);
  }, [todayAnimes]);

  function handleDetail(anime:string){

    navigate(`/anime/${anime}`);
  }
  
  return (
    <main className="flex justify-center min-h-screen">
    <div className=" p-4 rounded-md w-full max-w-2xl">


      <div className='flex items-center justify-center bg-white border-radius rounded-lg p-2 font-bold'>Animes transmitidos hoje<CalendarCheck /></div>
      {todayAnimes.length > 0 ? (
        
       <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
            {todayAnimes.map((anime) => (
              <div
                onClick={() => handleDetail(anime.anime)}
                className="w-[200px] h-[350px] cursor-pointer flex flex-col items-center 
                          bg-white/20 backdrop-blur-md backdrop-saturate-150 
                          p-3 rounded-md hover:scale-105 
                          transition-transform duration-300 ease-in-out shadow-md"
                key={anime.id}
              >
                <img
                  src={anime.urlImage}
                  alt={anime.anime}
                  className="w-400 h-400 object-cover rounded mb-2"
                />
                <strong className="text-sm text-center text-white">{anime.anime}</strong>
              </div>
            ))}
          </div>

      ) : (
        <p>Não há Animes hoje.</p>
      )}
    </div>
  </main>
  
  
  );
}
