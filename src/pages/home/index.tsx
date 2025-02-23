import { FormEvent, useState} from 'react';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import searchIcon from '../../assets/searchIcon.png'
import { useNavigate } from 'react-router-dom';

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


export function Home() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();


  const [ativeDay,setAtiveDay] =useState<ActiveDays>({
    domingo: false,
    segunda: false,
    terca: false,
    quarta: false,
    quinta: false,
    sexta: false,
    sabado: false,
  })

  
  const handleAtive =(day: keyof ActiveDays)=>{
    setAtiveDay((prevetAtiveDays)=> ({
      ...prevetAtiveDays,
      [day]: !prevetAtiveDays[day],
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

        <form className='search-anime' onSubmit={handleSubmit}>
          <input
          className='input-anime' 
          type='text'
          value={input}
          onChange={ (e)=> setInput(e.target.value)}
          placeholder='Digite o nome de um anime...'
          />
          <button
            className='button-search'
            type='submit'
          >
            <img
              src={searchIcon}
              style={{ width: '40px', height:  '40px' }}
            />
          </button>
        </form>

        <motion.div 
        variants={container} 
        initial="hidden" 
        animate="visible" 
        className="week-animes" >
        <motion.button 
        variants={item} 
        onClick={() => handleAtive('domingo')}>Domingo</motion.button>
          <div className="anime-day">
          
          {ativeDay.domingo && (
            <>
              <div 
              onClick={()=>handleDetail('Kisaki Kyouiku kara Nigetai')}
              className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1711/146319.jpg" alt="Nageki no Bourei wa Intai shitai" />
                <p>Kisaki Kyouiku kara Nigetai</p>
              </div>
              <div 
              onClick={()=>handleDetail('Jibaku Shounen Hanako-kun 2')}
              className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1878/146291.jpg" alt="Jibaku Shounen Hanako-kun 2" />
                <p>Jibaku Shounen Hanako-kun 2</p>
              </div>
              <div 
              onClick={()=>handleDetail('Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo II')}
              className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1093/145470.jpg" alt="Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo II" />
                <p>Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo II</p>
              </div>
              <div 
              onClick={()=>handleDetail('Sentai Red Isekai')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/144703l-320x453.jpg" alt="Sentai Red Isekai" />
                <p>Sentai Red Isekai</p>
              </div>
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
        onClick={() => handleAtive('segunda')}>Segunda-feira</motion.button>
          <div 
          className="anime-day">
            {ativeDay.segunda &&(
              <>
              <div 
              onClick={()=>handleDetail('Watashi no Shiawase na Kekkon 2')}
              className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1946/146770.jpg" alt='Watashi no Shiawase na Kekkon 2'></img>
              <p>Watashi no Shiawase na Kekkon 2</p>
            </div>

            <div 
            onClick={()=>handleDetail('Kono Kaisha ni Suki na Hito ga Imasu')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/146384l-320x451.jpg" alt='Kono Kaisha ni Suki na Hito ga Imasu'></img>
              <p>Kono Kaisha ni Suki na Hito ga Imasu</p>
            </div>

            <div 
            onClick={()=>handleDetail('Kuroiwa Medaka')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/146404l-320x466.jpg" alt='Kuroiwa Medaka'></img>
              <p>Kuroiwa Medaka</p>
            </div>
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
        onClick={() => handleAtive('terca')}>Terça-feira</motion.button>
          <div className="anime-day">
            {ativeDay.terca &&(
              <>
              <div 
              onClick={()=>handleDetail('Fate/strange Fake')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/136845l-211x300.jpg" alt='Fate/strange Fake'></img>
                <p>Fate/strange Fake</p>
              </div>

              <div 
              onClick={()=>handleDetail('Hazure Skill')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/146128l-320x453.jpg" alt='Hazure Skill'></img>
                <p>Hazure Skill</p>
              </div>

              <div 
              onClick={()=>handleDetail('Unnamed Memory II')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/143723l-320x453.jpg" alt='Unnamed Memory 2'></img>
                <p>Unnamed Memory II</p>
              </div>

              <div 
              onClick={()=>handleDetail('Hana wa Saku, Shura no Gotoku')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/145426l-320x453.jpg" alt='Hana wa Saku, Shura no Gotoku'></img>
                <p>Hana wa Saku, Shura no Gotoku</p>
              </div>

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
        onClick={() => handleAtive('quarta')}>Quarta-feira</motion.button>
          <div 
          className="anime-day">
            {ativeDay.quarta &&(
              <>
              <div 
              onClick={()=>handleDetail('Izure Saikyou no Renkinjutsushi? ')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/142918l-320x452.jpg" alt='Izure Saikyou no Renkinjutsushi? '></img>
              <p>Izure Saikyou no Renkinjutsushi? </p>
              </div>

              <div 
              onClick={()=>handleDetail('Salaryman ga Isekai ni Ittara Shitennou ni Natta Hanashi')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/144352l-320x452.jpg" alt='Salaryman ga Isekai ni Ittara Shitennou ni Natta Hanashi'></img>
              <p>Salaryman ga Isekai ni Ittara Shitennou ni Natta Hanashi</p>
              </div>

              <div 
              onClick={()=>handleDetail('Ameku Takao no Suiri Karte')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/145508l-213x300.jpg" alt='Ameku Takao no Suiri Karte'></img>
              <p>Ameku Takao no Suiri Karte</p>
              </div>

              <div 
              onClick={()=>handleDetail('Grisaia: Phantom Trigger')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/142188l-212x300.jpg" alt='Grisaia: Phantom Trigger'></img>
              <p>Grisaia: Phantom Trigger</p>
              </div>
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
        onClick={() => handleAtive('quinta')}>Quinta-feira</motion.button>
          <div className="anime-day">
            {ativeDay.quinta && (
              <>
              <div 
              onClick={()=>handleDetail('Momentary Lily')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/143656l-212x300.jpg" alt='Momentary Lily'></img>
              <p>Momentary Lily</p>
              </div>

              <div 
              onClick={()=>handleDetail('BanG Dream! Ave Mujica')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/144030l-320x411.jpg" alt='BanG Dream! Ave Mujica'></img>
              <p>BanG Dream! Ave Mujica</p>
              </div>

              <div 
              onClick={()=>handleDetail('Honey Lemon Soda')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/144602l-320x452.jpg" alt='Honey Lemon Soda'></img>
              <p>Honey Lemon Soda</p>
              </div>

              <div 
              onClick={()=>handleDetail('Dr. Stone: Science Future')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/146479l-320x452.jpg" alt='Dr. Stone: Science Future'></img>
              <p>Dr. Stone: Science Future</p>
              </div>

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
        onClick={() => handleAtive('sexta')}>Sexta-feira</motion.button>
          <div className="anime-day">
            {ativeDay.sexta &&(
              <>
              <div 
              onClick={()=>handleDetail('Dragon Ball DAIMA')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144336l-212x300.jpg" alt='Dragon Ball DAIMA'></img>
                <p>Dragon Ball DAIMA</p>
              </div>

              <div 
              onClick={()=>handleDetail('Class no Dai Kirai na Joshi to Kekkon suru Koto ni Natta ')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/144611l-213x300.jpg" alt='Class no Dai Kirai na Joshi to Kekkon suru Koto ni Natta'></img>
                <p>Class no Dai Kirai na Joshi to Kekkon suru Koto ni Natta</p>
              </div>

              <div 
              onClick={()=>handleDetail('Sorairo Utility (Sky Blue Utility)')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/143332l-213x300.jpg" alt='Sorairo Utility (Sky Blue Utility)'></img>
                <p>Sorairo Utility (Sky Blue Utility)</p>
              </div>

              <div 
              onClick={()=>handleDetail('Nihon e Youkoso Elf-san')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/142047l-213x300.jpg" alt='Nihon e Youkoso Elf-san'></img>
                <p>Nihon e Youkoso Elf-san</p>
              </div>

              <div 
              onClick={()=>handleDetail('Kusuriya no Hitorigoto II (The Apothecary Diaries II)')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/142240l-212x300.jpg" alt='Kusuriya no Hitorigoto II (The Apothecary Diaries II)'></img>
                <p>Kusuriya no Hitorigoto II (The Apothecary Diaries II)</p>
              </div>

              <div 
              onClick={()=>handleDetail('Guild no Uketsukejou desu ga')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/144608l-213x300.jpg" alt='Guild no Uketsukejou desu ga'></img>
                <p>Guild no Uketsukejou desu ga</p>
              </div>

              <div 
              onClick={()=>handleDetail('ÜBEL BLATT (Ubel Blatt)')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/144045l-217x300.jpg" alt='ÜBEL BLATT (Ubel Blatt)'></img>
                <p>ÜBEL BLATT (Ubel Blatt)</p>
              </div>

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
        onClick={() => handleAtive('sabado')}>Sabado</motion.button>
          <div className="anime-day">
            {ativeDay.sabado && (
              <>
              <div 
              onClick={()=>handleDetail('Solo Leveling 2')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/145502l-320x452.jpg" alt='Solo Leveling 2'></img>
              <p>Solo Leveling 2</p>
            </div>

            <div 
            onClick={()=>handleDetail('Ao no Exorcist Yosuga-hen')}
            className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1390/147040.jpg" alt='Ao no Exorcist Yosuga-hen'></img>
              <p>Ao no Exorcist Yosuga-hen</p>
            </div>

            <div 
            onClick={()=>handleDetail('Okinawa de Suki')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/145565l-320x452.jpg" alt='Okinawa de Suki'></img>
              <p>Okinawa de Suki</p>
            </div>

            <div 
            onClick={()=>handleDetail('NEET Kunoichi to Nazeka')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/143570l-320x453.jpg" alt='NEET Kunoichi to Nazeka'></img>
              <p>NEET Kunoichi to Nazeka</p>
            </div>

            <div 
            onClick={()=>handleDetail('SAKAMOTO DAYS')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/146459l-320x451.jpg" alt='SAKAMOTO DAYS'></img>
              <p>SAKAMOTO DAYS</p>
            </div>


            <div 
            onClick={()=>handleDetail('A-Rank Party')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/146267l-320x452.jpg" alt='A-Rank Party'></img>
              <p>A-Rank Party</p>
            </div>

            <div 
            onClick={()=>handleDetail('S-Rank Monster no “Behemoth” dakedo')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/11/144016l-220x300.jpg" alt='S-Rank Monster no “Behemoth” dakedo'></img>
              <p>S-Rank Monster no “Behemoth” dakedo</p>
            </div>

              </>
            )}

            
          </div>

          
        </motion.div>

        <div>Feito por<span> João Isisnaldo</span></div>
  
      </div>
    </main>
  )
}
