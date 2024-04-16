import { Link } from 'react-router-dom'

export function Notfound(){
    return(
        <div>
            <h1>Error<Link to={'/'}>Voltar para a home</Link></h1>
            <p>Falha na busca tente novamente!</p>
        </div>
    )
}