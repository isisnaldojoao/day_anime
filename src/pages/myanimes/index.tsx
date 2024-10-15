import { useEffect, useState } from 'react';
import { toast,Toaster } from 'react-hot-toast';
import { Trash } from 'lucide-react';
import { Link } from 'react-router-dom'


export function MyAnimes() {
    const [animes,setAnimes] = useState<string[]>([]);

    useEffect(()=>{
        const myAnimes = localStorage.getItem('anime'); 
        const parsedAnimes = myAnimes ? JSON.parse(myAnimes) : []; 
        setAnimes(parsedAnimes)
    },[]);

    
    function removeFav(anime: string){
        const favAnimes = JSON.parse(localStorage.getItem('anime') || '[]');

        const updateAnimes = favAnimes.filter((favAnimes:string)=> favAnimes !== anime);

        localStorage.setItem('anime', JSON.stringify(updateAnimes));
        setAnimes(updateAnimes)
        toast.success('Anime removido dos favoritos!');
    }

    return (
        <div className='myAnime-fav'>
            <Toaster/>
            <h1>Animes favoritos</h1>
            {animes.length === 0 ? (
                <div>
                    <img src="src/assets/hamtaro.png"/>
                    <p>Você ainda não adicionou nenhum anime</p>
                </div> 
            ) : (
                animes.map((anime:any) => ( 
                    <section className='animeFav'>
                        <div
                        className='favAnime'
                        key={anime}>
                            <Link
                            className='favAnime-title'
                            to={`/anime/${anime}`}>
                                <p>
                                    <strong>{anime}</strong>
                                </p>
                            </Link>
                            <button 
                                onClick={()=>removeFav(anime)}
                            >
                                <p><Trash/></p>
                            </button>
                        </div>
                    </section>
                ))
            )}
        </div>
    );
}
