import { Link } from 'react-router-dom'

export function Menu(){
    return(
        <div className="menu-anime">
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/myanimes">
                        <li>Meu animes</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}