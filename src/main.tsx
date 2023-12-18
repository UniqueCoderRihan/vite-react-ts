import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Home from './home/Home'
import './index.css'

// Todo: Next time you need to install react-router,

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
