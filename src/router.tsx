import { createBrowserRouter} from 'react-router-dom';

import { Home } from './pages/home';
import { Search } from './pages/search';
import { Notfound } from './pages/notfound';
import { Anime } from './pages/animes';
import { MyAnimes } from './pages/myanimes';
import { Calender } from './pages/calender';

import { Layout } from './components/layout'

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/search/:anime",
                element: <Search/>
            },
            {
                path:"/anime/:name",
                element: <Anime/>
            },
            {
                path:"/myanimes",
                element: <MyAnimes/>
            },
            {
                path: "*",
                element:<Notfound/>
            },
            {
                path:'/calender',
                element:<Calender/>
            }
        ]
    }
])

export {router};