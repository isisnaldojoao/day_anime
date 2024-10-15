import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Menu } from '../menu';

export function Layout(){
    return(
        <>
            <Header/>
            <Menu/>
            <Outlet/>
        </>
    )
}