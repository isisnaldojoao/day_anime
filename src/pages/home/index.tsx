import { FormEvent, useState} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


type ActiveDays = {
  domingo: boolean;
  segunda: boolean;
  terca: boolean;
  quarta: boolean;
  quinta: boolean;
  sexta: boolean;
  sabado: boolean;
};


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

    navigate(`/detail/${input}`);
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

        <section className="week-animes">
        <button onClick={() => handleAtive('domingo')}>Domingo</button>
          <div className="anime-day">
          
          {ativeDay.domingo && (
            <>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1094/143324.jpg" alt="Shikanoko Nokonoko" />
                <p>Shikanoko Nokonoko</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1107/143536.jpg" alt="Tower of God 2" />
                <p>Tower of God 2</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1575/143115.jpg" alt="VTuber Nandaga Haishin Kiri" />
                <p>VTuber Nandaga Haishin Kiri</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/manga/1/224398.jpg" alt="Isekai Yururi Kikou: Kosodateshinagara" />
                <p>Isekai Yururi Kikou: Kosodateshinagara</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1430/143526.jpg" alt="Nanare Hananare" />
                <p>Nanare Hananare</p>
              </div>
            </>
          )}
          </div>
        </section>

        <section className="week-animes">
        <button onClick={() => handleAtive('segunda')}>Segunda-feira</button>
          <div className="anime-day">
            {ativeDay.segunda &&(
              <>
              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1281/144104.jpg" alt='Tsue to Tsurugi no Wistoria'></img>
              <p>Tsue to Tsurugi no Wistoria</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1700/143395.jpg" alt='Mayonaka Punch'></img>
              <p>Mayonaka Punch</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1993/143335.jpg" alt='Kinnikuman: Kanpeki Chоujin Shiso-hen'></img>
              <p>Kinnikuman: Kanpeki Chоujin Shiso-hen</p>
            </div>


              </>
            )}

          </div>
        </section>
        
        <section className="week-animes">
        <button onClick={() => handleAtive('terca')}>Terça-feira</button>
          <div className="anime-day">
            {ativeDay.terca &&(
              <>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1007/141625.jpg" alt='Shinmai Ossan Boukensha'></img>
                <p>Shinmai Ossan Boukensha</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1518/143558.jpg" alt='Shy 2'></img>
                <p>Shy 2</p>
              </div>
              </>
            )}
            </div>
        </section>
        

        <section className="week-animes">
        <button onClick={() => handleAtive('quarta')}>Quarta-feira</button>
          <div className="anime-day">
            {ativeDay.quarta &&(
              <>
              <div className="anime">
              <img src="https://a.storyblok.com/f/178900/849x1200/96e38c101b/alya_sometimes_hides_her_feelings_in_russian_key_visual.jpg/m/filters:quality(95)format(webp)" alt='Kono Subarashii'></img>
              <p>Tokidoki Bosotto Russia-go </p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1252/143457.jpg" alt='Isekai Shikkaku'></img>
              <p>Isekai Shikkaku</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1594/142521.jpg" alt='Kenka Dokugaku'></img>
              <p>Kenka Dokugaku</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1315/142250.jpg" alt='Koi wa Futago de Warikirenai'></img>
              <p>Koi wa Futago de Warikirenai</p>
              </div>
              </>
            )}
          </div>
        </section>
        

        <section className="week-animes">
        <button onClick={() => handleAtive('quinta')}>Quinta-feira</button>
          <div className="anime-day">
            {ativeDay.quinta && (
              <>
              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1644/142052.jpg" alt='Isekai Suicide Squad'></img>
              <p>Isekai Suicide Squad</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1420/143707.jpg" alt='Gimai Seikatsu'></img>
              <p>Gimai Seikatsu</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1185/143359.jpg" alt='Tasogare Out Focus'></img>
              <p>Tasogare Out Focus</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1660/143460.jpg" alt='Kimi to Boku no Saigo no Senjou'></img>
              <p>Kimi to Boku no Saigo no Senjou</p>
              </div>

              </>
            )}
          </div>
        </section>
        

        <section className="week-animes">
        <button onClick={() => handleAtive('sexta')}>Sexta-feira</button>
          <div className="anime-day">
            {ativeDay.sexta &&(
              <>
              <div className="anime">
                <img src="https://i0.wp.com/www.otakupt.com/wp-content/uploads/2024/05/The-Cafe-Terrace-and-Its-Goddesses-2-anime-visual-2.webp?resize=696%2C984&ssl=1" alt='Megami no Café Terrace 2'></img>
                <p>Megami no Café Terrace 2</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1342/142228.jpg" alt='Code Geass: Dakkan no Rozé'></img>
                <p>Code Geass: Dakkan no Rozé</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1262/142076.jpg" alt='Bye Bye, Earth'></img>
                <p>Bye Bye, Earth</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1364/143539.jpg" alt='NieR Automata Ver1.1a Part 2'></img>
                <p>NieR Automata Ver1.1a Part 2</p>
              </div>

              </>
            )}
          </div>
        </section>
        

        <section className="week-animes">
        <button onClick={() => handleAtive('sabado')}>Sabado</button>
          <div className="anime-day">
            {ativeDay.sabado && (
              <>
              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1244/138851.jpg" alt='One Piece'></img>
              <p>One Piece</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1741/140952.jpg" alt='Monogatari Series: Off & Monster Season'></img>
              <p>Monogatari Series: Off & Monster Season</p>
            </div>

            <div className="anime">
              <img src="https://a.storyblok.com/f/178900/1984x2805/ea41558285/fairy-tail-100-years-quest-main-visual.jpg/m/filters:quality(95)format(webp)" alt='Fairy Tail: 100 Years Quest'></img>
              <p>Fairy Tail: 100 Years Quest</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1825/143408.jpg" alt='Atri: My Dear Moments'></img>
              <p>Atri: My Dear Moments</p>
            </div>

            <div className="anime">
              <img src="https://animesinjapan.com.br/envios/2024/04/22/250e6c5a2018606dbc2b19dc074077ce.webp" alt='Make Heroine ga Oosugiru!'></img>
              <p>Make Heroine ga Oosugiru!</p>
            </div>
              </>
            )}

            
          </div>

          
        </section>

        <div>Feito por<span> João Isisnaldo</span></div>
  
      </div>
      
  )
}
