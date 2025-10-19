import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import animesJson from '../../data/animes.json';

type Anime = {
  id: number;
  anime: string;
  dayId: number;
  urlImage: string;
};

const animes: Anime[] = animesJson;

type ActiveDays = Record<string, boolean>;

const daysOfWeek = [
  { name: 'domingo', label: 'Domingo', id: 7 },
  { name: 'segunda', label: 'Segunda-feira', id: 1 },
  { name: 'terca', label: 'Terça-feira', id: 2 },
  { name: 'quarta', label: 'Quarta-feira', id: 3 },
  { name: 'quinta', label: 'Quinta-feira', id: 4 },
  { name: 'sexta', label: 'Sexta-feira', id: 5 },
  { name: 'sabado', label: 'Sábado', id: 6 },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export function Calender() {
  const navigate = useNavigate();

  const [todayAnimes, setTodayAnimes] = useState<Record<string, Anime[]>>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day.name]: [] }), {})
  );

  const [activeDay, setActiveDay] = useState<ActiveDays>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day.name]: false }), {})
  );

  const handleActive = (dayName: string, dayId: number) => {
    setActiveDay(prev => ({ ...prev, [dayName]: !prev[dayName] }));

    const filteredAnimes = animes.filter(anime => anime.dayId === dayId);

    setTodayAnimes(prev => ({ ...prev, [dayName]: filteredAnimes }));
  };

  const handleDetail = (anime: string) => {
    navigate(`/anime/${anime}`);
  };

  return (
    <main className="calen-container flex flex-col p-6  min-h-screen">
      <div className="calen-animes max-w-7xl mx-auto">
        {/* Botões de dias da semana */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {daysOfWeek.map(day => (
            <motion.button
              key={day.name}
              variants={item}
              onClick={() => handleActive(day.name, day.id)}
              className={`
                px-6 py-4 text-lg font-semibold rounded-2xl 
                border border-white/20 backdrop-blur-md backdrop-saturate-150 
                ${activeDay[day.name] ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-200'} 
                hover:bg-white/30 transition duration-300
              `}
            >
              {day.label}
            </motion.button>
          ))}
        </div>

        {/* Animes do dia */}
        {daysOfWeek.map(day => (
          activeDay[day.name] && (
            <motion.div
              key={day.name}
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10"
            >
              {todayAnimes[day.name].length > 0 ? (
                todayAnimes[day.name].map(anime => (
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
                ))
              ) : (
                <p className="text-white col-span-full text-center">Nenhum anime listado</p>
              )}
            </motion.div>
          )
        ))}

      </div>
    </main>
  );
}
