import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './screens/error/Error'
import { ThemeProvider } from './contexts/ThemeContext'
import { PageLoader } from './components/ui/page-loader'

const Home = lazy(() => import('./screens/Home'))
const Contact = lazy(() => import('./screens/Contact'))
const Portfolio = lazy(() => import('./screens/Portfolio'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<PageLoader />}><Home /></Suspense>
      },
      {
        path: "/contatos",
        element: <Suspense fallback={<PageLoader />}><Contact /></Suspense>
      },
      {
        path: "/portfolio",
        element: <Suspense fallback={<PageLoader />}><Portfolio /></Suspense>
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
