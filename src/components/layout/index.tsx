import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Menu } from '../menu';
import { LoginIcon } from '../login_icon';

export function Layout(){
    return(
        <>
            <Header/>
            <LoginIcon/>
            <Menu/>
            <Outlet/>
        </>
    )
}