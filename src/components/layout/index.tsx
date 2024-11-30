import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Menu } from '../menu';
import Snowfall from 'react-snowfall';
import { SpeedInsights } from "@vercel/speed-insights/next"

export function Layout(){
    return(
        <>
            <Snowfall/>
            <Header/>
            <Menu/>
            <Outlet/>
            <SpeedInsights />
        </>
    )
}