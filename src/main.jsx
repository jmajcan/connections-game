import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Game from "./components/games/Game";
import GameList from "./components/games/GameList";
import './i18n.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <GameList />,
      },
    ],
  },
  {
    path: "/game/:id",
    element: <App />,
    children: [
      {
        path: "/game/:id",
        element: <Game />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
