
import { useState } from 'react';

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

  
  const handleAtive =(day: keyof ActiveDays)=>{
    setAtiveDay((prevetAtiveDays)=> ({
      ...prevetAtiveDays,
      [day]: !prevetAtiveDays[day],
    }));
  };

  return (
    
      <div className="calen-animes">
        <h1>Calendario <span>Animes</span>
        <img src='src\assets\fairy-tail-happy-512x512.png'></img>
        </h1>
        <section className="week-animes">
          <div className="anime-day">
          <button onClick={() => handleAtive('domingo')}>Domingo</button>
          
          {ativeDay.domingo && (
            <>
              <div className="anime">
                <img src="https://opwiki.org/images/Egghead_Arc.jpg" alt="Masamune-kun no Revenge" />
                <p>One Piece</p>
              </div>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1723/117854.jpg" alt="Tsuki ga Michibiku Isekai Douchuu" />
                <p>Shin no Nakama</p>
              </div>
            </>
          )}
          </div>
        </section>

        <section className="week-animes">
          <div className="anime-day">
          <button onClick={() => handleAtive('segunda')}>Segunda-feira</button>
            {ativeDay.segunda &&(
              <>
              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/12/83709.jpg"></img>
              <p>Masamune-kun no Revenge</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1950/116474.jpg"></img>
              <p>Tsuki ga Michibiku Isekai Douchuu</p>
            </div>
              </>
            )}

          </div>
        </section>
        
        <section className="week-animes">
          <div className="anime-day">
          <button onClick={() => handleAtive('terca')}>Terça-feira</button>
            {ativeDay.terca &&(
              <>
              <div className="anime">
                <img src="https://cdn.myanimelist.net/images/anime/1416/113270.jpg"></img>
                <p>Shaman King (2021)</p>
              </div>
              </>
            )}
            </div>
        </section>
        

        <section className="week-animes">
          <div className="anime-day">
          <button onClick={() => handleAtive('quarta')}>Quarta-feira</button>
            {ativeDay.quarta &&(
              <>
              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/5/86830.jpg"></img>
              <p>Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e</p>
              </div>
              </>
            )}
          </div>
        </section>
        

        <section className="week-animes">
          <div className="anime-day">
          <button onClick={() => handleAtive('quinta')}>Quinta-feira</button>
            {ativeDay.quinta && (
              <>
              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1938/140374.jpg"></img>
              <p>Dungeon Meshi</p>
              </div>
              </>
            )}
          </div>
        </section>
        

        <section className="week-animes">
          <div className="anime-day">
          <button onClick={() => handleAtive('sexta')}>Sexta-feira</button>
            {ativeDay.sexta &&(
              <>
              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1703/137216.jpg"></img>
              <p>Pokemon (2023)</p>
            </div>
              </>
            )}
          </div>
        </section>
        

        <section className="week-animes">
          <div className="anime-day">
          <button onClick={() => handleAtive('sabado')}>Sabado</button>
            {ativeDay.sabado && (
              <>
              <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1926/140799.jpg"></img>
              <p>Solo Leveling</p>
            </div>

            <div className="anime">
              <img src="https://cdn.myanimelist.net/images/anime/1007/136277.jpg"></img>
              <p>Horimiya: The Missing Pieces</p>
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
