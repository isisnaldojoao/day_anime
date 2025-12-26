import { Link } from 'react-router-dom';
export function Header(){
    return(
        <div className='flex items-center justify-center mt-10'>
            <Link to="/">
                <h1 className='text-white text-5xl'>
                    Otakus <span className='text-blue-500 font-bold'>Perdidos</span>
                </h1>
            </Link>
        </div>
    )
}