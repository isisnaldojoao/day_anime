import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";


const server = 'https://kitsu.io/api/edge';

interface Anime{
    id:string;
    attributes:{
        canonicalTitle: string;
        episodeCount:number;
        status:string;
        posterImage:{
            small:string;
        };
    };
}

interface AnimeData{
    data:Anime[];
}


export function Search(){
    const [infoAnimes, setInfoAnimes] = useState<AnimeData>({ data:[] });
    const [loading, setLoading]= useState(true);
    const { anime }= useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        async function getAnime(){
            try{
                const response = await fetch(`${server}/anime?filter[text]=${anime}`)
                const data:AnimeData = await response.json();
                console.log(data)
                setInfoAnimes(data);
                setLoading(false);
            }catch(err){
                console.log(err)
                navigate("/")
            }
        }

        getAnime();
    },[anime,navigate])


    function handleDetail(animeId:string){

        navigate(`/anime/${animeId}`);
    }

    if(loading){
        return(
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }

    return(
        <div>
            <section className="anime-listen">
                {infoAnimes.data.map((anime)=>(
                    <div 
                    onClick={()=>handleDetail(`${anime.attributes.canonicalTitle}`)}
                    className="anime-list">
                        <div  key={anime.id}>
                            <img 
                                src={anime.attributes.posterImage.small}
                                alt={anime.attributes.canonicalTitle}
                            />
                            <p><strong>{anime.attributes.canonicalTitle}</strong></p>
                            <p><strong>Episódios:</strong> {anime.attributes.episodeCount}</p>
                            <p><strong>Status:</strong>{anime.attributes.status === "finished" ? "Finalizado" : "Em Lançamento"}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

