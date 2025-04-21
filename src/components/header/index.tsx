import { Link } from 'react-router-dom';

import image from '../../assets/day_anime.png';

export function Header(){
    return(
        <div className='anime-header'>
            <Link to="/">
                <h1>
                    <img   className='icon' src={image}/>
                </h1>
            
            </Link>
        </div>
    )
}