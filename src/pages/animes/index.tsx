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
      <div className="w-full min-h-screen flex flex-col items-center p-4">
  <Toaster />


  <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">

    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={anime.attributes.posterImage.small}
        alt={anime.attributes.canonicalTitle}
        className="rounded-lg shadow-lg"
      />
    </div>

    <div className="w-full lg:w-1/2 text-white flex flex-col justify-between">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">
          Nome do anime: <span className="font-normal">{anime.attributes.canonicalTitle}</span>
        </h1>
        <p>
          Avaliação do anime:{" "}
          <span className="font-medium">{formatRating(anime.attributes.averageRating)}</span>
        </p>
        <p>
          Status:{" "}
          <span className="font-medium">
            {anime.attributes.status === "finished" ? "Finalizado" : "Em Lançamento"}
          </span>
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button
          className="flex items-center justify-center gap-2 w-full sm:w-[200px] h-10 bg-green-500 hover:bg-green-600 rounded"
          onClick={() => addFav(anime.attributes.canonicalTitle)}
        >
          <Star />
          Adicionar aos favoritos
        </button>

        <button
          className="flex items-center justify-center gap-2 w-full sm:w-[200px] h-10 bg-red-500 hover:bg-red-600 rounded"
          onClick={() => removeFav(anime.attributes.canonicalTitle)}
        >
          <Trash />
          Remover dos favoritos
        </button>
      </div>
    </div>
  </div>

  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-6xl">
    <button
      onClick={() => animeTrailer(anime.attributes.canonicalTitle)}
      className="flex items-center justify-center gap-2 w-full sm:w-[200px] h-10 bg-blue-500 hover:bg-blue-600 text-white rounded"
    >
      <Eye />
      Assistir online
    </button>

    <button
      onClick={() => learnManga(anime.attributes.canonicalTitle)}
      className="flex items-center justify-center gap-2 w-full sm:w-[200px] h-10 bg-indigo-500 hover:bg-indigo-600 text-white rounded"
    >
      <BookOpen />
      Ler mangá
    </button>

    <button
      onClick={() => animeDowload(anime.attributes.canonicalTitle)}
      className="flex items-center justify-center gap-2 w-full sm:w-[200px] h-10 bg-gray-700 hover:bg-gray-800 text-white rounded"
    >
      <Download />
      Baixar anime
    </button>
  </div>
</div>

    )
}