
import { useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const images = [
  {id:'1',name:'Solo Leveling',image:'https://wallpapercave.com/wp/wp7853481.jpg'},
  {id:'2',name:'Frieren',image:'https://images5.alphacoders.com/133/1337723.jpeg'},
  {id:'3',name:'One Piece',image:'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/11/27/one-piece-egghead-arc.jpeg'},
  {id:'4',name:'Dungeon Meshi',image:'https://i.pinimg.com/originals/2f/47/cd/2f47cdf7fa9ba8f1c122db6dea052270.jpg'},
  {id:'5',name:'Masamune kun no Revenge',image:'https://www.jbox.com.br/wp/wp-content/uploads/2023/04/masamune-kun-temporada-2-destacada.jpg'},
]


type ActiveDays = {
  domingo: boolean;
  segunda: boolean;
  terca: boolean;
  quarta: boolean;
  quinta: boolean;
  sexta: boolean;
  sabado: boolean;
};


function App() {

  const [ativeDay,setAtiveDay] =useState<ActiveDays>({
    domingo: false,
    segunda: false,
    terca: false,
    quarta: false,
    quinta: false,
    sexta: false,
    sabado: false,
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  const handleAtive =(day: keyof ActiveDays)=>{
    setAtiveDay((prevetAtiveDays)=> ({
      ...prevetAtiveDays,
      [day]: !prevetAtiveDays[day],
    }));
  };

  return (
    
      <div className="calen-animes">
        <h1 className='titulo'>Calendario <span>Animes</span>
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50f05812-6489-49a6-8398-d922b6c13e36/d9c6rja-f61f37fa-3d6c-4cca-8088-a1ae0302ee72.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUwZjA1ODEyLTY0ODktNDlhNi04Mzk4LWQ5MjJiNmMxM2UzNlwvZDljNnJqYS1mNjFmMzdmYS0zZDZjLTRjY2EtODA4OC1hMWFlMDMwMmVlNzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NCdWiVOcw3CE3cARkiDnIGodGRkckr7qbN8OY25KtwQ'></img>
        </h1>

        <h2>Animes da semana em destaque:</h2>
        <Slider  className='slide'{...settings}>
          {images.map((image, index) => (
            <div key={index}>
            <img src={image.image} alt={`Slide ${index + 1}`} />
            <h2>{image.name}</h2>
          </div>
        ))}
        </Slider>
        
        
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
                <img src="https://cdn.myanimelist.net/images/anime/1723/117854.jpg" alt="Shin no Nakama" />
                <p>Shin no Nakama</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1124/138750.jpg" alt="Kyuujitsu no Warumono-san" />
                <p>Kyuujitsu no Warumono-san</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1500/139931.jpg" alt="Shangri-La Frontier" />
                <p>Shangri-La Frontier</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1763/140359.jpg" alt="Ragna Crimson" />
                <p>Ragna Crimson</p>
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
              <img src="https://cdn.myanimelist.net/images/anime/12/83709.jpg" alt='Masamune-kun no Revenge'></img>
              <p>Masamune-kun no Revenge</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1950/116474.jpg" alt='Tsuki ga Michibiku Isekai Douchuu'></img>
              <p>Tsuki ga Michibiku Isekai Douchuu</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1056/139398.jpg" alt='Himesama "Goumon" no Jikan desu'></img>
              <p>Himesama "Goumon" no Jikan desu</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1475/138530.jpg" alt='Nanatsu no Taizai: Mokushiroku no Yonkishi'></img>
              <p>Nanatsu no Taizai: Mokushiroku no Yonkishi</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1173/131830.jpg" alt='Malevolent Spirits: Mononogatari'></img>
              <p>Malevolent Spirits: Mononogatari</p>
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
                <img src="https://cdn.myanimelist.net/images/anime/1416/113270.jpg" alt='Shaman King (2021)'></img>
                <p>Shaman King (2021)</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1150/140028.jpg" alt='Akuyaku Reijou Level 99'></img>
                <p>Akuyaku Reijou Level 99</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1074/138192.jpg" alt='Bullbuster'></img>
                <p>Bullbuster</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1720/139131.jpg" alt='Konyaku Haki sareta'></img>
                <p>Konyaku Haki sareta</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1002/138524.jpg" alt='Helck'></img>
                <p>Helck</p>
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
              <img src="https://cdn.myanimelist.net/images/anime/5/86830.jpg" alt='Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e'></img>
              <p>Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1114/140805.jpg" alt='Mato Seihei no Slave'></img>
              <p>Mato Seihei no Slave</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1645/140627.jpg" alt='Sengoku Youko'></img>
              <p>Sengoku Youko</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1734/139673.jpg" alt='Sokushi Cheat ga Saikyou sugite'></img>
              <p>Sokushi Cheat ga Saikyou sugite</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1364/140875.jpg" alt='Ishura'></img>
              <p>Ishura</p>
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
              <img src="https://cdn.myanimelist.net/images/anime/1938/140374.jpg" alt='Dungeon Meshi'></img>
              <p>Dungeon Meshi</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1380/139745.jpg" alt='Majo to Yajuu'></img>
              <p>Majo to Yajuu</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1789/139296.jpg" alt='Gekkan Mousou Kagaku'></img>
              <p>Gekkan Mousou Kagaku</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1194/138253.jpg" alt='Yuzuki-san Chi no Yonkyouda'></img>
              <p>Yuzuki-san Chi no Yonkyoudai</p>
              </div>

              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1490/137816.jpg" alt='Seija Musou'></img>
              <p>Seija Musou</p>
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
                <img src="https://cdn.myanimelist.net/images/anime/1015/138006.jpg" alt='Sousou no Frieren'></img>
                <p>Sousou no Frieren</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1280/138474.jpg" alt='Saijaku Tamer'></img>
                <p>Saijaku Tamer</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1070/138961.jpg" alt='Pon no Michi'></img>
                <p>Pon no Michi</p>
              </div>

              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1593/138601.jpg" alt='Arknights: Touin Kiro'></img>
                <p>Arknights: Touin Kiro</p>
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
              <img src="https://cdn.myanimelist.net/images/anime/1007/136277.jpg" alt='Horimiya: The Missing Pieces'></img>
              <p>Horimiya: The Missing Pieces</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1079/136949.jpg" alt='Ryza no Atelier'></img>
              <p>Ryza no Atelier</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1452/139991.jpg" alt='Kekkon Yubiwa Monogatari'></img>
              <p>Kekkon Yubiwa Monogatari</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1478/140828.jpg" alt='Yubisaki to Renren'></img>
              <p>Yubisaki to Renren</p>
            </div>
              </>
            )}

            
          </div>

          
        </section>

        <div>Feito por<span> João Isisnaldo</span></div>
  
      </div>
      
  )
}

export default App
