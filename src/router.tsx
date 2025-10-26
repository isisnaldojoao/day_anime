import { createBrowserRouter} from 'react-router-dom';

import { Home } from './pages/home';
import { Search } from './pages/search';
import { Notfound } from './pages/notfound';
import { Anime } from './pages/animes';
import { MyAnimes } from './pages/myanimes';
import { Calender } from './pages/calender';

import { Layout } from './components/layout'
import { LoginPage } from './pages/login';
import { ProfilePage } from './pages/profile';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Recomendations } from './pages/recomendations';

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
                element: (
                <ProtectedRoute>
                    <MyAnimes/>
                </ProtectedRoute>
                )
            },
            {
                path: "*",
                element:<Notfound/>
            },
            {
                path:'/calender',
                element:<Calender/>
            },
            {
                path:'/login',
                element:<LoginPage/>
            },
            {
                path:'/profile',
                element:(
                 <ProtectedRoute>
                    <ProfilePage/>
                </ProtectedRoute>
                )
            },
            {
                path: '/recomendations',
                element: (
                    <ProtectedRoute>    
                        <Recomendations/>
                    </ProtectedRoute>
                )   
            }
        ]
    }
])

export {router};