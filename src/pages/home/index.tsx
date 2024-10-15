import { FormEvent, useState} from 'react';
import { motion } from 'framer-motion'; // Importando o motion
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Search } from 'lucide-react'
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
            <Search/>
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
              onClick={()=>handleDetail('Nageki no Bourei wa Intai shitai')}
              className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1679/145660.jpg" alt="Nageki no Bourei wa Intai shitai" />
                <p>Nageki no Bourei wa Intai shitai</p>
              </div>
              <div 
              onClick={()=>handleDetail('Tensei Kizoku, Kantei Skill de Nariagaru (As a Reincarnated Aristocrat, I’ll Use My Appraisal Skill to Rise in the World)')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/143705l-213x300.jpg" alt="Tensei Kizoku 2" />
                <p>Tensei Kizoku 2</p>
              </div>
              <div 
              onClick={()=>handleDetail('Nanatsu no Taizai: Mokushiroku no Yonkishi 2')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144010l-206x300.jpg" alt="Nanatsu no Taizai: Mokushiroku no Yonkishi 2" />
                <p>Nanatsu no Taizai: Mokushiroku no Yonkishi 2 </p>
              </div>
              <div 
              onClick={()=>handleDetail('Shangri-La Frontier 2')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144794l-213x300.jpg" alt="Shangri-La Frontier 2" />
                <p>Shangri-La Frontier 2</p>
              </div>
              <div 
              onClick={()=>handleDetail('Tsuma Shougakusei ni Naru (If my wife [became] an elementary school student)')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/141701l-212x300.jpg" alt="Tsuma Shougakusei ni Naru (If my wife [became] an elementary school student)" />
                <p>Tsuma Shougakusei ni Naru (If my wife [became] an elementary school student)</p>
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
              onClick={()=>handleDetail('Goukon ni Ittara Onna ga Inakatta Hanashi')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/138928l-213x300.jpg" alt='Goukon ni Ittara Onna ga Inakatta Hanashi'></img>
              <p>Goukon ni Ittara Onna ga Inakatta Hanashi</p>
            </div>

            <div 
            onClick={()=>handleDetail('Kamonohashi Ron no Kindan Suiri II (Ron Kamonohashi: Deranged Detective II)')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144334l-213x300.jpg" alt='Kamonohashi Ron no Kindan Suiri II (Ron Kamonohashi: Deranged Detective II)'></img>
              <p>Kamonohashi Ron no Kindan Suiri II (Ron Kamonohashi: Deranged Detective II)</p>
            </div>

            <div 
            onClick={()=>handleDetail(' Raise wa Tanin ga Ii (Yakuza Fiance: Raise wa Tanin ga Ii)')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/143773l-215x300.jpg" alt=' Raise wa Tanin ga Ii (Yakuza Fiance: Raise wa Tanin ga Ii)'></img>
              <p> Raise wa Tanin ga Ii (Yakuza Fiance: Raise wa Tanin ga Ii)</p>
            </div>

            <div 
            onClick={()=>handleDetail('Seirei Gensouki – Spirit Chronicles 2')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144583l-212x300.jpg" alt='Seirei Gensouki – Spirit Chronicles 2'></img>
              <p>Seirei Gensouki – Spirit Chronicles 2</p>
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
              onClick={()=>handleDetail('Rekishi Ni Nokoru Akujo Ni Naru Zo: Akuyaku Reijou Ni Naru Hodo Ouji No Dekiai Wa Kasoku Suru You Desu! (I’ll Become A Villainess That Will Go Down In History ― The More Of A Villainess I Become, The More The Prince Will Dote On Me)')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/143925l-212x300.jpg" alt='Shinmai Ossan Boukensha'></img>
                <p>Rekishi Ni Nokoru Akujo Ni Naru Zo</p>
              </div>

              <div 
              onClick={()=>handleDetail('Amagami-san Chi no Enmusub')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/143586l-202x300.jpg" alt='Amagami-san Chi no Enmusub'></img>
                <p>Amagami-san Chi no Enmusub</p>
              </div>

              <div 
              onClick={()=>handleDetail('Youkai Gakkou no Sensei Hajimemashita!')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144805l-213x300.jpg" alt='Youkai Gakkou no Sensei Hajimemashita!'></img>
                <p>Youkai Gakkou no Sensei Hajimemashita!</p>
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
              onClick={()=>handleDetail('Re:Zero 3')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/134750l-211x300.jpg" alt='Re:Zero 3'></img>
              <p>Re:Zero 3</p>
              </div>

              <div 
              onClick={()=>handleDetail('Acro Trip')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/141196l-212x300.jpg" alt='Acro Trip'></img>
              <p>Acro Trip</p>
              </div>

              <div 
              onClick={()=>handleDetail('The Prince of Tennis U-17 World CUP(2º temporada)')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144788l-212x300.jpg" alt='The Prince of Tennis U-17 World CUP(2º temporada)'></img>
              <p>The Prince of Tennis U-17 World CUP(2º temporada)</p>
              </div>

              <div 
              onClick={()=>handleDetail('TRILLION GAME')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/142237l-212x300.jpg" alt='TRILLION GAME'></img>
              <p>TRILLION GAME</p>
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
              onClick={()=>handleDetail('Ao no Hako')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144061l-213x300.jpg" alt='Ao no Hako'></img>
              <p>Ao no Hako</p>
              </div>

              <div 
              onClick={()=>handleDetail('Hitoribocchi no Isekai Kouryaku (LONER LIFE IN ANOTHER WORLD)')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144351l-207x300.jpg" alt='Hitoribocchi no Isekai Kouryaku (LONER LIFE IN ANOTHER WORLD)'></img>
              <p>Hitoribocchi no Isekai Kouryaku (LONER LIFE IN ANOTHER WORLD)</p>
              </div>

              <div 
              onClick={()=>handleDetail('Dungeon ni Deia 5')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/09/141890l-213x300.jpg" alt='Dungeon ni Deia 5'></img>
              <p>Dungeon ni Deia 5</p>
              </div>

              <div 
              onClick={()=>handleDetail('Dandadan')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/09/142082l-212x300.jpg" alt='Dandadan'></img>
              <p>Dandadan</p>
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
              onClick={()=>handleDetail('MAGILUMIERE CO. LTD. (Kabushiki Gaisha Magi Lumiere)')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/142137l-213x300.jpg" alt='MAGILUMIERE CO. LTD. (Kabushiki Gaisha Magi Lumiere)'></img>
                <p>MAGILUMIERE CO. LTD. (Kabushiki Gaisha Magi Lumiere)</p>
              </div>

              <div 
              onClick={()=>handleDetail('Sword Art Online Alternative – Guns Gale Online 2')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/142246l-213x300.jpg" alt='Sword Art Online Alternative – Guns Gale Online 2'></img>
                <p>Sword Art Online Alternative – Guns Gale Online 2</p>
              </div>

              <div 
              onClick={()=>handleDetail('Touhai')}
              className="anime">
                <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/140848l-212x300.jpg" alt='Touhai'></img>
                <p>Touhai</p>
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
              onClick={()=>handleDetail('Maou-sama Retry! R')}
              className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/142080l-213x300.jpg" alt='Maou-sama Retry! R'></img>
              <p>Maou-sama Retry! R</p>
            </div>

            <div 
            onClick={()=>handleDetail('Bleach: Sennen Kessen-hen – Soukoku-tan')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144074l-213x300.jpg" alt='Bleach: Sennen Kessen-hen – Soukoku-tan'></img>
              <p>Bleach: Sennen Kessen-hen – Soukoku-tan</p>
            </div>

            <div 
            onClick={()=>handleDetail('BLUE LOCK VS. U-20 JAPAN')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/143377l-213x300.jpg" alt='BLUE LOCK VS. U-20 JAPAN'></img>
              <p>BLUE LOCK VS. U-20 JAPAN</p>
            </div>

            <div 
            onClick={()=>handleDetail('Chi: Chikyuu no Undou ni Tsuite (Chi: On the Movements of the Earth)')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144437l-212x300.jpg" alt='Chi: Chikyuu no Undou ni Tsuite (Chi: On the Movements of the Earth)'></img>
              <p>Chi: Chikyuu no Undou ni Tsuite (Chi: On the Movements of the Earth)</p>
            </div>

            <div 
            onClick={()=>handleDetail('Ao no Exorcist: Yuki no Hate-hen')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144043l-213x300.jpg" alt='Ao no Exorcist III parte 2'></img>
              <p>Ao no Exorcist III parte 2</p>
            </div>


            <div 
            onClick={()=>handleDetail('Ranma1/2')}
            className="anime">
              <img src="https://www.intoxianime.com/wp-content/uploads/2024/08/144299l-213x300.jpg" alt='Ranma1/2'></img>
              <p>Ranma1/2</p>
            </div>

              </>
            )}

            
          </div>

          
        </motion.div>

        <div>Feito por<span> João Isisnaldo</span></div>
  
      </div>
      
  )
}
