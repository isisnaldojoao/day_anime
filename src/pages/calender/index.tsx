import { FormEvent, useState} from 'react';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import searchIcon from '../../assets/searchIcon.png'
import { useNavigate } from 'react-router-dom';

import animesJson from '../../data/animes.json';

type Anime = {
  id: number;
  anime: string;
  dayId: number;
  urlImage: string;
};

const animes: Anime[] = animesJson;

type ActiveDays = {
  domingo: boolean;
  segunda: boolean;
  terca: boolean;
  quarta: boolean;
  quinta: boolean;
  sexta: boolean;
  sabado: boolean;
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}




export function Calender() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  
  const [todayAnimes, setTodayAnimes] = useState<Record<string, Anime[]>>({
    domingo: [],
    segunda: [],
    terca: [],
    quarta: [],
    quinta: [],
    sexta: [],
    sabado: [],
  });


  const [ativeDay,setAtiveDay] =useState<ActiveDays>({
    domingo: false,
    segunda: false,
    terca: false,
    quarta: false,
    quinta: false,
    sexta: false,
    sabado: false,
  })

  

  
  const handleAtive = (day: keyof ActiveDays, dayId: number) => {
    setAtiveDay((prevAtiveDays) => ({
      ...prevAtiveDays,
      [day]: !prevAtiveDays[day],
    }));
  
    // Filtra os animes para o dia específico e atualiza a lista para aquele dia
    const filteredAnimes = animes.filter((anime) => anime.dayId === dayId);
  
    // Atualiza a lista de animes para o dia específico
    setTodayAnimes((prevState) => ({
      ...prevState,
      [day]: filteredAnimes,
    }));
  };
  
  
  function handleSubmit(e: FormEvent){
    e.preventDefault();

    if(input === "") return;

    navigate(`/search/${input}`);
  }

  function handleDetail(anime:string){

    navigate(`/anime/${anime}`);
  }


  return (
    <main className='calen-container'>
      <div className="calen-animes">

        <motion.div 
        variants={container} 
        initial="hidden" 
        animate="visible" 
        className="week-animes" >
        <motion.button 
        variants={item} 
        onClick={() => handleAtive('domingo',7)}>Domingo</motion.button>
          <div className="flex">
          {ativeDay.domingo && (
            <>
              {todayAnimes.domingo.length > 0 ? (
              <div className='anime-day'>
                {todayAnimes.domingo.map((anime) => (
                  <div
                  onClick={() => handleDetail(anime.anime)}
                    className="anime"
                    key={anime.id}
                  >
                    <img
                      src={anime.urlImage}
                      alt={anime.anime}
                      className="w-400 h-400 object-cover rounded mb-2"
                    />
                    <strong className="text-sm text-center">{anime.anime}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}
                  </>
                )}
          </div>
        </motion.div>

        <motion.div
        variants={container} 
        initial="hidden" 
        animate="visible" 
        className="week-animes" >
        <motion.button
        variants={item} 
        onClick={() => handleAtive('segunda',1)}>Segunda-feira</motion.button>
          <div className="flex">
          {ativeDay.segunda && (
            <>
              {todayAnimes.segunda.length > 0 ? (
              <div className='anime-day'>
                {todayAnimes.segunda.map((anime) => (
                  <div
                  onClick={() => handleDetail(anime.anime)}
                    className="anime"
                    key={anime.id}
                  >
                    <img
                      src={anime.urlImage}
                      alt={anime.anime}
                      className="w-400 h-400 object-cover rounded mb-2"
                    />
                    <strong className="text-sm text-center">{anime.anime}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}
                  </>
                )}
          </div>
        </motion.div>
        
        <motion.div
        variants={container} 
        initial="hidden" 
        animate="visible"
        className="week-animes" >
        <motion.button
        variants={item}
        onClick={() => handleAtive('terca',2)}>Terça-feira</motion.button>
           <div className="flex">
          {ativeDay.terca && (
            <>
              {todayAnimes.terca.length > 0 ? (
              <div className='anime-day'>
                {todayAnimes.terca.map((anime) => (
                  <div
                  onClick={() => handleDetail(anime.anime)}
                    className="anime"
                    key={anime.id}
                  >
                    <img
                      src={anime.urlImage}
                      alt={anime.anime}
                      className="w-400 h-400 object-cover rounded mb-2"
                    />
                    <strong className="text-sm text-center">{anime.anime}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}
                  </>
                )}
          </div>
        </motion.div>
        

        <motion.div
        variants={container} 
        initial="hidden" 
        animate="visible" 
        className="week-animes">
        <motion.button 
        variants={item}
        onClick={() => handleAtive('quarta',3)}>Quarta-feira</motion.button>
          <div className="flex">
          {ativeDay.quarta && (
            <>
              {todayAnimes.quarta.length > 0 ? (
              <div className='anime-day'>
                {todayAnimes.quarta.map((anime) => (
                  <div
                  onClick={() => handleDetail(anime.anime)}
                    className="anime"
                    key={anime.id}
                  >
                    <img
                      src={anime.urlImage}
                      alt={anime.anime}
                      className="w-400 h-400 object-cover rounded mb-2"
                    />
                    <strong className="text-sm text-center">{anime.anime}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}
                  </>
                )}
          </div>
        </motion.div>
        

        <motion.div
        variants={container} 
        initial="hidden" 
        animate="visible"
        className="week-animes" >
        <motion.button 
        variants={item}
        onClick={() => handleAtive('quinta',4)}>Quinta-feira</motion.button>
           <div className="flex">
          {ativeDay.quinta && (
            <>
              {todayAnimes.quinta.length > 0 ? (
              <div className='anime-day'>
                {todayAnimes.quinta.map((anime) => (
                  <div
                  onClick={() => handleDetail(anime.anime)}
                    className="anime"
                    key={anime.id}
                  >
                    <img
                      src={anime.urlImage}
                      alt={anime.anime}
                      className="w-400 h-400 object-cover rounded mb-2"
                    />
                    <strong className="text-sm text-center">{anime.anime}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}
                  </>
                )}
          </div>
        </motion.div>
        

        <motion.div 
        variants={container} 
        initial="hidden" 
        animate="visible" 
        className="week-animes"  >
        <motion.button
        variants={item}
        onClick={() => handleAtive('sexta',5)}>Sexta-feira</motion.button>
           <div className="flex">
          {ativeDay.sexta && (
            <>
              {todayAnimes.sexta.length > 0 ? (
              <div className='anime-day'>
                {todayAnimes.sexta.map((anime) => (
                  <div
                  onClick={() => handleDetail(anime.anime)}
                    className="anime"
                    key={anime.id}
                  >
                    <img
                      src={anime.urlImage}
                      alt={anime.anime}
                      className="w-400 h-400 object-cover rounded mb-2"
                    />
                    <strong className="text-sm text-center">{anime.anime}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}
                  </>
                )}
          </div>
        </motion.div>
        

        <motion.div
        variants={container} 
        initial="hidden" 
        animate="visible"
        className="week-animes" >
        <motion.button
        variants={item}
        onClick={() => handleAtive('sabado',6)}>Sabado</motion.button>
           <div className="flex">
          {ativeDay.sabado && (
            <>
              {todayAnimes.sabado.length > 0 ? (
              <div className='anime-day'>
                {todayAnimes.sabado.map((anime) => (
                  <div
                  onClick={() => handleDetail(anime.anime)}
                    className="anime"
                    key={anime.id}
                  >
                    <img
                      src={anime.urlImage}
                      alt={anime.anime}
                      className="w-400 h-400 object-cover rounded mb-2"
                    />
                    <strong className="text-sm text-center">{anime.anime}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}
                  </>
                )}
          </div>
          
        </motion.div>

        <div>Feito por<span> João Isisnaldo</span></div>
  
      </div>
    </main>
  )
}
