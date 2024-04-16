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
                <img src="https://opwiki.org/images/Egghead_Arc.jpg" alt="One Piece" />
                <p>One Piece</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1136/141839.jpg" alt="Shin no Nakama" />
                <p>Shinigami Bocchan to Kuro Maid 3</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1216/142086.jpg" alt="Kyuujitsu no Warumono-san" />
                <p>Hibike! Euphonium 3</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1876/141251.jpg" alt="Shangri-La Frontier" />
                <p>Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1142/141351.jpg" alt="Ragna Crimson" />
                <p>Ninja Kamui</p>
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
              <img src="https://image.tmdb.org/t/p/w185/uU8JO4PsbgpuZmbkUMPjdpxEjBO.jpg" alt='Masamune-kun no Revenge'></img>
              <p>Lv2 kara Cheat datta Motoyuusha </p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1752/139314.jpg" alt='Tsuki ga Michibiku Isekai Douchuu'></img>
              <p>Tsuki ga Michibiku Isekai Douchuu 2</p>
            </div>

            <div className="anime">
              <img src="https://image.tmdb.org/t/p/w185/hXkohm9sjfQNovbwyp4xHNuW2r0.jpg" alt='Himesama "Goumon" no Jikan desu'></img>
              <p>Ookami to Koushinryou: Merchant </p>
            </div>

            <div className="anime">
              <img src="https://image.tmdb.org/t/p/w185/m47Ziq5bcYcOiaiIpFEnoQhySYY.jpg" alt='Nanatsu no Taizai: Mokushiroku no Yonkishi'></img>
              <p>Kami wa Game ni Ueteiru Dublado</p>
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
                <img src="https://image.tmdb.org/t/p/w185/r34i0W9jYsefZUfeusw77ytGe9O.jpg" alt='Shaman King (2021)'></img>
                <p>Touken Ranbu Kai: Kyoden Moyuru Honnouji</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1372/142242.jpg" alt='Akuyaku Reijou Level 99'></img>
                <p>Boukyaku Battery (TV)</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1143/142439.jpg" alt='Helck'></img>
                <p>Unnamed Memory</p>
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
              <img src="https://cdn.myanimelist.net/images/anime/1594/142521.jpg" alt='Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e'></img>
              <p>Kenka Dokugaku</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1462/142547.jpg" alt='Mato Seihei no Slave'></img>
              <p>Bartender: Kami no Glass</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1758/141268.jpg" alt='Sengoku Youko'></img>
              <p>Kono Subarashii Sekai ni Shukufuku wo! 3</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1004/142114.jpg" alt='Sokushi Cheat ga Saikyou sugite'></img>
              <p>Sand Land: The Series</p>
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
              <img src="https://cdn.myanimelist.net/images/anime/1861/141482.jpg" alt='Dungeon Meshi'></img>
              <p>Henjin no Salad Bowl</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/manga/2/212195.jpg" alt='Majo to Yajuu'></img>
              <p>Maou no Ore ga Dorei Elf wo Yome</p>
              </div>

              <div className="anime">
              <img src="https://image.tmdb.org/t/p/w185/c2wfIKUPcQY0tiyiOmY7ItHtNO9.jpg" alt='Gekkan Mousou Kagaku'></img>
              <p>Wind Breaker</p>
              </div>

              <div className="anime">
              <img src="https://image.tmdb.org/t/p/w185/oQDQgQ7fMx7BCcAt8OW79dXqd4t.jpg" alt='Yuzuki-san Chi no Yonkyouda'></img>
              <p>Dungeon Meshi</p>
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
                <img src="https://cdn.myanimelist.net/images/anime/1703/137216.jpg" alt='Pokemon (2023)'></img>
                <p>Pokemon (2023)</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1587/141789.jpg" alt='Sousou no Frieren'></img>
                <p>Mahouka Koukou no Rettousei 3</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1711/140515.jpg" alt='Saijaku Tamer'></img>
                <p>Girls Band Cry</p>
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
              <img src="https://cdn.myanimelist.net/images/anime/1926/140799.jpg" alt='Solo Leveling'></img>
              <p>Solo Leveling</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1912/140804.jpg" alt='Horimiya: The Missing Pieces'></img>
              <p>Mashle 2 Dublado</p>
            </div>

            <div className="anime">
              <img src="https://image.tmdb.org/t/p/w185/A6JOsCdFFTxtbDnKAfE0iY6jOiE.jpg" alt='Ryza no Atelier'></img>
              <p>Kaijuu 8-gou</p>
            </div>

            <div className="anime">
              <img src="https://image.tmdb.org/t/p/w185/baflpfvihSZCNsyTHZGBKkDIlXr.jpg" alt='Kekkon Yubiwa Monogatari'></img>
              <p>The Fable</p>
            </div>

            <div className="anime">
              <img src="https://image.tmdb.org/t/p/w185/s2XOPfm4B5HVBgIhcGIzoJiwGJX.jpg" alt='Yubisaki to Renren'></img>
              <p>Boku no Hero Academia: Memories</p>
            </div>
              </>
            )}

            
          </div>

          
        </section>

        <div>Feito por<span> João Isisnaldo</span></div>
  
      </div>
      
  )
}
