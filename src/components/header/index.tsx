import { Link } from 'react-router-dom';

import image from '../../assets/day_anime.png';

export function Header(){
    return(
        <div className='flex items-center justify-center m-10'>
            <Link to="/">
                <h1 className='text-white text-5xl'>
                    Otakus <span className='text-blue-500 font-bold'>Perdidos</span>
                </h1>
            
            </Link>
        </div>
    )
}