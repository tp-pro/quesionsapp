import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/Accueil';
import Quizz from './components/Quizz';
import Resultat from './components/Resultat';

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
        <RouterProvider router={router} />
    )
}

export default App
