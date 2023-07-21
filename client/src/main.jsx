import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageSelectedContexProvider from './contexts/ImageSelected'

// CSS
import './assets/css/main.css'

// Pages
import LandingPage from './pages/LandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageSelectedContexProvider>
      <LandingPage></LandingPage>
    </ImageSelectedContexProvider>
  </React.StrictMode>,
)
