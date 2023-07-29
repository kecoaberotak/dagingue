import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageSelectedContexProvider from './contexts/ImageSelected'
import AdminInfoProvider from './contexts/AdminInfo'

// css
import './assets/main.css'

// Pages
import LandingPage from './pages/LandingPage'
import ErrorPage from './pages/errorPage'
import AdminPage from './pages/adminPage'
import LoginPage from './pages/loginPage'

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
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminInfoProvider>
      <ImageSelectedContexProvider>
        <RouterProvider router={router} />
      </ImageSelectedContexProvider>
    </AdminInfoProvider>
  </React.StrictMode>,
)
