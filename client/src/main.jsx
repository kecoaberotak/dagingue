import React from 'react'
import ReactDOM from 'react-dom/client'
import AdminInfoProvider from './contexts/AdminInfo'
import LoginStatusProvider from './contexts/LoginStatus'

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
    <LoginStatusProvider>
      <AdminInfoProvider>
        <RouterProvider router={router} />
      </AdminInfoProvider>
    </LoginStatusProvider>
  </React.StrictMode>,
)
