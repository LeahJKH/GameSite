import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import LayoutTemplate from './Layout/LayoutTemplate.tsx';
import ErrorPage from './Routes/ErrorPage.tsx';
import Game from './Routes/Game.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutTemplate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/game',
        element: <Game />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);