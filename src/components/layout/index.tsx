import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Menu } from '../menu';
import Snowfall from 'react-snowfall';

export function Layout(){
    return(
        <>
            <Snowfall/>
            <Header/>
            <Menu/>
            <Outlet/>
        </>
    )
}