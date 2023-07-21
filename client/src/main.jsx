import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageSelectedContexProvider from './contexts/ImageSelected'

// Pages
import LandingPage from './pages/LandingPage'
import ErrorPage from './pages/errorPage'

// CSS
import './assets/css/main.css'

// Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageSelectedContexProvider>
      <RouterProvider router={router} />
    </ImageSelectedContexProvider>
  </React.StrictMode>,
)
