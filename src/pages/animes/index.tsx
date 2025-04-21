import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { toast,Toaster } from 'react-hot-toast';
import { CirclePlus,Trash,BookOpen,Eye,Download } from 'lucide-react';


const server = 'https://kitsu.io/api/edge';

interface animeName{
    id:string;
    attributes:{
        canonicalTitle: string;
        episodeCount:number;
        status:string;
        posterImage:{
            small:string;
        };
        description: string;
        averageRating:string;
    };
}

interface AnimeData{
    data:animeName[];
}


export function Anime (){
    const [infoAnimes, setInfoAnimes] = useState<AnimeData>({ data:[] });
    const [loading, setLoading]= useState(true);

    const { name }= useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        async function getAnime(){
            try{
                const response = await fetch(`${server}/anime?filter[text]=${name}`)
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
    },[name,navigate])

    if(loading){
        return(
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }

    //uso essa constante para pega o primeiro elemento da pesquisa
    const anime = infoAnimes.data[0]

    function addFav(anime: string) {
        const favAnimes = JSON.parse(localStorage.getItem('anime') || '[]'); 
        
        if(favAnimes.includes(anime)){
            toast.error('Anime ja esta nos favoritos!')
        }else{
            favAnimes.push(anime); 
            localStorage.setItem('anime', JSON.stringify(favAnimes));
            toast.success("Anime adicionado aos favoritos!")
        }
    }

    function removeFav(anime: string){
        const favAnimes = JSON.parse(localStorage.getItem('anime') || '[]');
        const updateAnimes = favAnimes.filter((favAnimes:string)=> favAnimes !== anime);
        localStorage.setItem('anime', JSON.stringify(updateAnimes))
        toast.success('Anime removido dos favoritos!');
    }

    function animeTrailer(anime:string){
        const url = `https://www.google.com/search?q=${encodeURIComponent(anime)}+online+hd`;
        window.open(url,'_blank')
    }

    function learnManga(manga:string){
        const url = `https://www.google.com/search?q=Ler+${encodeURIComponent(manga)}+cap+1+pt+br+manga+online`;
        window.open(url,'_blank')
    }

    function animeDowload(anime:string){
        const url = `https://www.google.com/search?q=${encodeURIComponent(anime)}+baixar+anime`;
        window.open(url,'_blank')
    }
    
    

    return(
        <div className="myAnime">
            <Toaster />
            <div className="flex flex-col animeMy items-center" >
                <h1>{anime.attributes.canonicalTitle}</h1>
                <img src={anime.attributes.posterImage.small}/>
                <p><strong>Avaliação do anime:</strong>{anime.attributes.averageRating}</p>
                <p><strong>Status:</strong>{anime.attributes.status === "finished" ? "Finalizado" : "Em Lançamento"}</p>
                <div className="addAnime">
                    <button
                    onClick={()=>addFav(anime.attributes.canonicalTitle)}
                    >
                    <CirclePlus/>
                    Adicionar aos favoritoss
                    </button> 
                    <button
                    onClick={()=>removeFav(anime.attributes.canonicalTitle)}
                    >
                    <Trash/>
                    Remover dos favoritos
                    </button>
                    <div className="consumeAnime">
                        <button
                        onClick={()=>animeTrailer(anime.attributes.canonicalTitle)}
                        className="buttonWatch"
                        >
                            <Eye/>
                            Assistir online
                        </button>  

                        <button
                        onClick={()=>learnManga(anime.attributes.canonicalTitle)}
                        className="buttonLearn"
                        >
                            <BookOpen/>
                            Ler mangá
                        </button>  
                        <button
                        onClick={()=>animeDowload(anime.attributes.canonicalTitle)}
                        className="buttonDownload"
                        >
                            <Download/>
                            Baixar anime
                        </button>  
                    </div>
                    
                </div>
            </div>
        </div>
    )
}