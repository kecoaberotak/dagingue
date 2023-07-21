import React from 'react'
import ReactDOM from 'react-dom/client'

// CSS
import './assets/css/main.css'

// Pages
import LandingPage from './pages/LandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage></LandingPage>
  </React.StrictMode>,
)
