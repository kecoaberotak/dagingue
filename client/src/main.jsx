import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageSelectedContexProvider from './contexts/ImageSelected'

// css
import './assets/main.css'

// Pages
import LandingPage from './pages/LandingPage'
import ErrorPage from './pages/errorPage'
import AdminPage from './pages/adminPage'

// Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageSelectedContexProvider>
      <RouterProvider router={router} />
    </ImageSelectedContexProvider>
  </React.StrictMode>,
)
