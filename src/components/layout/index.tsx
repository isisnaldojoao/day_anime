import { Outlet } from 'react-router-dom';
import { Menu } from '../menu';

export function Layout(){
    return(
        <div className="page-shell">
            <Menu/>
            <Outlet/>
        </div>
    )
}