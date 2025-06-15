import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { toast,Toaster } from 'react-hot-toast';
import { Trash,BookOpen,Eye,Download, Star } from 'lucide-react';

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
            <div className="min-h-screen">
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

    const formatRating = (rating: string | number) => {
        const num = Number(rating);
        const divided = num / 10;
        return divided.toFixed(1); // 1 casa decimal
    }
   
    return(
        <div className="w-full myAnime min-h-screen">
            <Toaster />
            <div className="flex animeMy justify-start items-start" >
                {/* Poster Image */}
                <div className="w-1/2" >
                    <img src={anime.attributes.posterImage.small}/>
                </div>

                {/* Details */}
                <div className="w-1/2 text-white p-4 ">
                    <div className="flex flex-col ">
                        <h1><strong>Nome do anime:</strong> {anime.attributes.canonicalTitle}</h1>
                        <p><strong>Avaliação do anime:</strong>{formatRating(anime.attributes.averageRating)}</p>
                        <p><strong>Status:</strong>{anime.attributes.status === "finished" ? "Finalizado" : "Em Lançamento"}</p>
                    </div>
                    <div className="flex flex-col ">
                        <button
                        className="w-[250px] h-10  bg-green-500 text-white rounded mt-2 flex justify-center items-center"
                        onClick={()=>addFav(anime.attributes.canonicalTitle)}
                        >
                        <Star/>
                        Adicionar aos favoritos
                        </button> 
                        <button
                        className="w-[250px] h-10  bg-red-500 text-white rounded mt-2 flex justify-center items-center"
                        onClick={()=>removeFav(anime.attributes.canonicalTitle)}
                        >
                        <Trash/>
                        Remover dos favoritos
                        </button>
                       
                        
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            <div className="flex consumeAnime mt-5">
                    <button
                    onClick={()=>animeTrailer(anime.attributes.canonicalTitle)}
                    className="flex justify-center items-center "
                    >
                        <Eye/>
                        Assistir online
                    </button>  

                    <button
                    onClick={()=>learnManga(anime.attributes.canonicalTitle)}
                    className="flex justify-center items-center "
                    >
                        <BookOpen/>
                        Ler mangá
                    </button>  
                    <button
                    onClick={()=>animeDowload(anime.attributes.canonicalTitle)}
                    className="flex justify-center items-center "
                    >
                        <Download/>
                        Baixar anime
                    </button>  
            </div>

            {/*Trailer*/}
        </div>
    )
}