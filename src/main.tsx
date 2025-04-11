import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './screens/Home.tsx';
import Contact from './screens/Contact.tsx';
import Portfolio from './screens/Portfolio.tsx';
import App from './App.tsx';
import ErrorPage from './screens/error/Error.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/contatos",
        element: <Contact />
      },
      {
        path:"/portfolio",
        element: <Portfolio />
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
