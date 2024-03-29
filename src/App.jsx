import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Accueil from './components/Accueil';
import Quizz from './components/Quizz';
import Resultat from './components/Resultat';
import Header from './components/Header';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Accueil />,
    },
    {
        path: "/quizz",
        element: <Quizz />,
    },
    {
        path: "/resultat",
        element: <Resultat />,
    },
])

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export default App
