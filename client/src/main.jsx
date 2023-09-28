import React from 'react'
import ReactDOM from 'react-dom/client'
import AdminInfoProvider from './contexts/AdminInfo'
import LoginStatusProvider from './contexts/LoginStatus'

// css
import './index.css';

// Pages
import LandingPage from './pages/landingPage'
import ErrorPage from './pages/errorPage'
import AdminPage from './pages/adminPage'
import LoginPage from './pages/loginPage'

// Middleware
import {HelmetProvider} from "react-helmet-async"

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
    <LoginStatusProvider>
      <AdminInfoProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AdminInfoProvider>
    </LoginStatusProvider>
  </React.StrictMode>,
)
